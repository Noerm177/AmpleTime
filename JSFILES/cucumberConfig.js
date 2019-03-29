"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
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
            'path/to/step/definitions/**/*.steps.js' // accepts a glob
        ]
    }
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVXLFFBQUEsTUFBTSxHQUFXO0lBRTFCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsYUFBYSxFQUFFLElBQUk7SUFDbkIsdUNBQXVDO0lBQ3ZDLFNBQVMsRUFBRSxRQUFRO0lBRW5CLDJDQUEyQztJQUMzQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUU3RCxZQUFZLEVBQUU7UUFDZCxXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUNELEtBQUssRUFBRSxDQUFDLDBCQUEwQixDQUFDO0lBQ25DLFlBQVksRUFBRTtRQUNaLDJCQUEyQjtRQUMzQixPQUFPLEVBQUU7WUFDUCx3Q0FBd0MsQ0FBQyxpQkFBaUI7U0FDM0Q7S0FDRjtJQUNELGtEQUFrRDtJQUVsRCwwRUFBMEU7SUFDMUUsc0NBQXNDO0NBRXZDLENBQUMifQ==