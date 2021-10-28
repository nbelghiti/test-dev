import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

const translations: any = {};

export class FakeTranslateLoader implements TranslateLoader {
	getTranslation(_lang: string): Observable<any> {
		return of(translations);
	}
}

@Pipe({
	name: 'translate'
})
export class MockTranslatePipe implements PipeTransform {
	public name = 'translate';

	public transform(query: string, ..._args: any[]): any {
		return query;
	}
}

@Injectable()
export class TranslateServiceMock {
	public get<T>(key: T): Observable<T> {
		return of(key);
	}
}
