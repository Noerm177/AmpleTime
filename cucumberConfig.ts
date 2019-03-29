import {Config} from 'protractor';

export let config: Config = {

  noGlobals: true,
  directConnect: true,
  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {
    browserName: 'chrome'
  },
  specs: ['../features/demo.feature'],
  cucumberOpts: {
    // require step definitions
    require: [
      './stepDefinations/*.js' // accepts a glob
    ]
  }
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  
};