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
    specs: ['../features/client.feature',
        '../features/company.feature'
    ],
    cucumberOpts: {
        //tags: ['@compañiaNueva , @ClienteNuevo'],
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
                "App Version": "Spring 3",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUErQztBQUMvQyxpRUFBbUQ7QUFFbkQsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDbEQsOEJBQThCO0FBRW5CLFFBQUEsTUFBTSxHQUFXO0lBRTFCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFFbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsNEVBQTRFO0lBRTFFLFlBQVksRUFBRTtRQUNkLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsS0FBSyxFQUFFLENBQUMsNEJBQTRCO1FBQzVCLDZCQUE2QjtLQUNqQztJQUVKLFlBQVksRUFBRTtRQUVaLDJDQUEyQztRQUMzQyxNQUFNLEVBQUMsNEJBQTRCO1FBQ25DLE9BQU8sRUFBRTtZQUNQLHdCQUF3QixDQUFDLGlCQUFpQjtTQUUzQztLQUNGO0lBQ0QsU0FBUyxFQUFFLEdBQVEsRUFBRTtRQUVuQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdFQUFnRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFGLE1BQU0sb0JBQU8sQ0FBQyxXQUFXLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2RyxDQUFDLENBQUE7SUFFRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBRWYsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLE1BQU0sRUFBRSx3QkFBd0I7WUFDaEMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLFVBQVU7Z0JBQ3hCLGtCQUFrQixFQUFFLEtBQUs7Z0JBQ3pCLFNBQVMsRUFBRSx1QkFBdUI7Z0JBQ2xDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLE9BQU87YUFDdEI7U0FDSixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBRUYsQ0FBQyJ9