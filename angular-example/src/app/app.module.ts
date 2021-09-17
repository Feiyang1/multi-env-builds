import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

export const FirebaseConfig = new InjectionToken('FirebaseConfig');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: FirebaseConfig,
    useValue: environment.firebaseOptions
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
