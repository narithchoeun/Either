import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';

import { GooglePlacesService } from './services/google-places.service';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    GooglePlacesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
