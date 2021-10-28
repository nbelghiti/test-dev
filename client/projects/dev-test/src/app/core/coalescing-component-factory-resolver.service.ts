/* tslint:disable */
/**
 * See https://github.com/jonrimmer/angular-coalescing-component-factory-resolver/blob/master/src/app/coalescing-component-factory-resolver.service.ts
 * Discussion & bug ticket: https://github.com/angular/angular/issues/14324#issuecomment-481898762
 *
 * Entry components are only available within a lazy loaded module, breaking dynamic generation (e.g. dialogs). This monkey patch enables resolving entry components from lazy loaded modules as well.
 *
 *
 * Provide in root module:
 *
 * @NgModule({
 *   providers: [CoalescingComponentFactoryResolver]
 * })
 * class AppModule {
 *   constructor(coalescingResolver: CoalescingComponentFactoryResolver) {
 *     coalescingResolver.init();
 *   }
 * }
 *
 *
 * Use in lazy loaded module:
 *
 *
 * @NgModule({})
 * export class LazyModule {
 *   constructor(
 *     coalescingResolver: CoalescingComponentFactoryResolver,
 *     localResolver: ComponentFactoryResolver
 *   ) {
 *     coalescingResolver.registerResolver(localResolver);
 *   }
 * }
 *
 *
 * How it works: When initialised, it injects the root app's ComponentFactoryResolver and monkey patches the resolveComponentFactory method
 * to call its own implementation. This implementation first tries resolving the component factory on all the registered lazy-module resolvers,
 * then falls back to the root app resolver (there's a bit of extra logic to avoid cyclic calls, but that's the gist).
 */
/* tslint:enable */

import {
	ComponentFactory,
	ComponentFactoryResolver,
	Injectable,
	Type
} from '@angular/core';

@Injectable()
export class CoalescingComponentFactoryResolver extends ComponentFactoryResolver {
	private rootResolve: (component: Type<any>) => ComponentFactory<any>;

	private inCall = false;

	private readonly resolvers = new Map<
		ComponentFactoryResolver,
		(component: Type<any>) => ComponentFactory<any>
	>();

	constructor(private readonly rootResolver: ComponentFactoryResolver) {
		super();
	}

	init() {
		this.rootResolve = this.rootResolver.resolveComponentFactory;
		this.rootResolver.resolveComponentFactory = this.resolveComponentFactory;
	}

	public registerResolver(resolver: ComponentFactoryResolver) {
		const original = resolver.resolveComponentFactory;
		this.resolvers.set(resolver, original);
	}

	public resolveComponentFactory = <T>(
		component: Type<T>
	): ComponentFactory<T> => {
		// Prevents cyclic calls.
		if (this.inCall) {
			return null;
		}

		this.inCall = true;
		try {
			const result = this.resolveInternal(component);
			return result;
		} finally {
			this.inCall = false;
		}
	}

	private resolveInternal = <T>(component: Type<T>): ComponentFactory<T> => {
		for (const [resolver, fn] of Array.from(this.resolvers.entries())) {
			try {
				const factory = fn.call(resolver, component);
				if (factory) {
					return factory;
				}
			} catch { }
		}

		return this.rootResolve.call(this.rootResolver, component);
	}
}
