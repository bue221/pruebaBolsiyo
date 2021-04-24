import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//redux
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
//http
import { HttpClientModule } from '@angular/common/http';
//forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//components
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageDetailComponent } from './pages/image-detail/image-detail.component';
//redux
import { imagesReducer } from './redux/reducers/images.reducer';
import { ImagesEffects } from './redux/effects/images.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ImageDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ img: imagesReducer }, {}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([ImagesEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
