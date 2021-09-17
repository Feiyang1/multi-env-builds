// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseOptions: {
    "apiKey": "DEV_API_KEY",
    "authDomain": "DEV_AUTH_DOMAIN",
    "databaseURL": "DEV_DATABASE_URL",
    "projectId": "DEV_PROJECT_ID",
    "storageBucket": "DEV_STORAGE_BUCKET",
    "messagingSenderId": "DEV_MESSAGING_SENDER_ID",
    "appId": "DEV_APP_ID",
    "measurementId": "DEV_MEASUREMENT_ID"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
