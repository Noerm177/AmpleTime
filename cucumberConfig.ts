import {Config, browser, by} from 'protractor';
import * as reporter from "cucumber-html-reporter";
import { async } from 'q';
var logIn = require('./pageObjects/LoginPage.js');
//let logIn = new LoginPage();

export let config: Config = {

  noGlobals: true,
  directConnect: true,
  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  //baseUrl: 'http://ec2-54-218-245-21.us-west-2.compute.amazonaws.com/login',

    capabilities: {
    browserName: 'chrome'
  },
  specs: ['../features/client.feature',
          '../features/company.feature'
     ],

  cucumberOpts: {

    //tags: ['@compañiaNueva , @ClienteNuevo'],
    format:'json:./cucumberReport.json',
    require: [
      './stepDefinations/*.js' // accepts a glob
      
    ]
  },
  onPrepare: async ()=> {

    await browser.get('http://ec2-54-218-245-21.us-west-2.compute.amazonaws.com/login', 5000);
    await browser.findElement(by.cssContainingText('span.mat-button-wrapper', 'Iniciar sesión')).click();
  },

  onComplete: () =>{

    var options = {
      theme: 'bootstrap',
      jsonFile: './cucumberReport.json',
      output: './cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
          "App Version":"Spring 3",
          "Test Environment": "DEV",
          "Browser": "Chrome  73.0.3683.103",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Local"
      }
  };

  reporter.generate(options);
  }
  
};