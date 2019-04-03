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
  specs: ['../features/userLogin.feature'],
  cucumberOpts: {
    // require step definitions
    //tags: "@credencialesCorrectas",
    format:'json:./cucumberReport.json',
    require: [
      './stepDefinations/*.js' // accepts a glob
    ]
  }
  
};