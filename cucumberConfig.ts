import {Config} from 'protractor';
import * as reporter from "cucumber-html-reporter";

export let config: Config = {

  noGlobals: true,
  directConnect: true,

  framework: 'custom',


  frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {
    browserName: 'chrome'
  },
  specs: ['../features/userLogin.feature'],
  cucumberOpts: {

    //tags: "@credencialesCorrectas",
    format:'json:./cucumberReport.json',
    require: [
      './stepDefinations/*.js' // accepts a glob
    ]
  },

  onComplete: () =>{

    var options = {
      theme: 'bootstrap',
      jsonFile: './cucumberReport.json',
      output: './cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
          "App Version":"0.3.2",
          "Test Environment": "STAGING",
          "Browser": "Chrome  54.0.2840.98",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
      }
  };

  reporter.generate(options);
  }
  
};