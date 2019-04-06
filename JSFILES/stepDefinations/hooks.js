"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@credencialesInvalidas" }, function () {
    // This hook will be executed before all scenarios
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After({ tags: "@credencialesInvalidas" }, function () {
    // This hook will be executed before all scenarios
    console.log("test completo");
});
cucumber_1.Before({ tags: "@credencialesCorrectas" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Me executo primero");
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Test is completed");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenShot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenShot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUE4QztBQUM5QywyQ0FBbUM7QUFHbkMsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBQyxFQUFFO0lBQ3ZDLGtEQUFrRDtJQUNsRCxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxFQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBQyxFQUFFO0lBQ3BDLGtEQUFrRDtJQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQyxDQUFDO0FBRUwsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBQyxFQUFFO0lBQ3ZDLCtEQUErRDtJQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFFLFVBQWdCLFFBQVE7O1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGlCQUFNLENBQUMsTUFBTSxFQUFFO1lBRTVDLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQztTQUN2QztJQUVILENBQUM7Q0FBQSxDQUFDLENBQUEifQ==