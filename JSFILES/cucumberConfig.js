"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
var logIn = require('./pageObjects/LoginPage.js');
//let logIn = new LoginPage();
exports.config = {
    noGlobals: true,
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //baseUrl: 'http://ec2-54-218-245-21.us-west-2.compute.amazonaws.com/login',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../features/client.feature'],
    cucumberOpts: {
        tags: "@ClienteNuevo",
        format: 'json:./cucumberReport.json',
        require: [
            './stepDefinations/*.js' // accepts a glob
        ]
    },
    onPrepare: () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://ec2-54-218-245-21.us-west-2.compute.amazonaws.com/login', 5000);
        yield protractor_1.browser.findElement(protractor_1.by.cssContainingText('span.mat-button-wrapper', 'Iniciar sesión')).click();
    }),
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberReport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUErQztBQUMvQyxpRUFBbUQ7QUFFbkQsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDbEQsOEJBQThCO0FBRW5CLFFBQUEsTUFBTSxHQUFXO0lBRTFCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsYUFBYSxFQUFFLElBQUk7SUFFbkIsU0FBUyxFQUFFLFFBQVE7SUFFbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsNEVBQTRFO0lBRTFFLFlBQVksRUFBRTtRQUNkLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsS0FBSyxFQUFFLENBQUMsNEJBQTRCLENBQUM7SUFFckMsWUFBWSxFQUFFO1FBRVosSUFBSSxFQUFFLGVBQWU7UUFDckIsTUFBTSxFQUFDLDRCQUE0QjtRQUNuQyxPQUFPLEVBQUU7WUFDUCx3QkFBd0IsQ0FBQyxpQkFBaUI7U0FDM0M7S0FDRjtJQUNELFNBQVMsRUFBRSxHQUFRLEVBQUU7UUFFbkIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxnRUFBZ0UsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRixNQUFNLG9CQUFPLENBQUMsV0FBVyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkcsQ0FBQyxDQUFBO0lBRUQsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUVmLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQUUsd0JBQXdCO1lBQ2hDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNOLGFBQWEsRUFBQyxPQUFPO2dCQUNyQixrQkFBa0IsRUFBRSxTQUFTO2dCQUM3QixTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2FBQ3ZCO1NBQ0osQ0FBQztRQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUVGLENBQUMifQ==