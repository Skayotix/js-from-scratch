# js-from-scratch
Training on js

## Tools explaination reminder

### Development

Name|Modules|Description|Shortcut cmd
---|---|---|---
Babel|`babel-cli`|JS Transpiler of ES6 code (and other things like React's JSX syntax)
     |`babel-core`|peer-dependency of `babel-loader`
     |`babel-eslint`|Package to enable ESLint *to rely on Babel's parser* instead of its own
     |`babel-jest`|Package to make Jest use Babel
     |`babel-loader`|Plugin for Webpack that transpiles the code that will end up running in the browser
     |`babel-plugin-flow-react-proptypes`
     |`babel-preset-env`|Configurations for the most recent ECMAScript features supported by Babel.
     |`babel-preset-flow`|Preset for Babel to understand Flow annotations
     |`babel-preset-react`|
cross-env|`cross-env`|Enable to pass environment variable to our PM2 binary regardless the platform
ESLint|`eslint`|The linter of choice for ES6 code
      |`eslint-config-airbnb`|Config created by Airbnb|npx install-peerdeps --dev eslint-config-airbnb
      |`eslint-plugin-flowtype`|ESLint plugin to lint Flow annotations
Flow|`flow-bin`|A static type checker by Facebook
Husky|`husky`|Git Hook
Jest|`jest`|A JavaScript testing library by Facebook
Nodemon|`nodemon`|Utility to automatically restart your Node server when file changes happen in the directory
PM2|`pm2`|Process Manager for Node, keeps your processes alive in production
RimRaf|`rimraf`|A neat simple package to delete files with cross platform support
Webpack|`webpack`|A module bundler
       |`webpack-cli`|Command line interface
       |`webpack-dev-server`|Hot Module Reloadin in development mode

### Production

Name|Modules|Description
---|---|---
Express|`express`|Popular web application framework for Node
       |`compression`|Express middleware to activate Gzip compression on the server
React|`react`|Library for building user interfaces by Facebook.
     |`react-dom`|React document manipulation
