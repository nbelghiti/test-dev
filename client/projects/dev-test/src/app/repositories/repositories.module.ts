import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ArticlesService } from './articles/services/articles.service';
import { ProjectsService } from './projects/services/projects.service';
import { EFFECTS, REDUCERS } from './repositories.store';
import { TeamsService } from './teams/services/teams.service';

@NgModule({
	providers: [
		ArticlesService,
		ProjectsService,
		TeamsService,
	],
	imports: [
		StoreModule.forFeature('repository', REDUCERS),
		EffectsModule.forFeature(EFFECTS)
	]
})
export class RepositoriesModule {}
