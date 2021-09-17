import { Component, Inject } from '@angular/core';
import { FirebaseConfig } from './app.module';
import { FirebaseOptions } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example';
  firebaseProjectId = '';
  constructor(@Inject(FirebaseConfig) firebaseOptions: FirebaseOptions){
    this.firebaseProjectId = firebaseOptions.projectId!;
  }
}
