# multi-env-builds
Build configuration for multiple Firebase environments

## Webpack instructions (webpack-example)
In the `webpack-example` directory, there are two things going on.

- Webpack can inject any of 3 Firebase config objects at build time using
  Webpack's `DefinePlugin` to set the value of `FIREBASE_CONFIG`, which
  can used directly as a param in `index.js`. Alternatively, developers can
  create 3 separate entry points (`index.dev.js`, `index.prod.js`, etc) which
  contain the different config objects and then call the main code with it.
  - See `webpack.config.js` for the 3 configs.
  - `package.json` has `yarn build:dev`, `yarn build:prod`, and `yarn build:staging`
    scripts to build each type.

- `firebase.json` and `.firebaserc` are configured to deploy to 3 different target sites.
  - `firebase.json` has a predeploy script for each target that builds the appropriate
    kind of site.