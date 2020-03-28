import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import * as List from './list/list.reducers';

import { ResultsService } from '../services/results.service';
import { ListEffects } from './list/list.effects';

const effects = [
  ListEffects,
];

export interface AppState {
  readonly [List.featureKey]: List.State;
}

@NgModule({
  imports: [
    StoreModule.forRoot([], {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),

    StoreModule.forFeature(List.featureKey, List.reducer),
    EffectsModule.forRoot(effects),
    /**
     * Store history should not be enabled in production. This could allow
     * user credentials to be stored in the browser memory and stolen later.
     */
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
  ],
  providers: [
    ResultsService,
  ],
})
export class AppStoreModule { }
