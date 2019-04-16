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
const LoginPage_1 = require("../pageObjects/LoginPage");
let logIn = new LoginPage_1.LoginPage;
cucumber_1.BeforeAll({ tags: "@ClienteNuevo, @compañiaNueva" }, () => __awaiter(this, void 0, void 0, function* () {
    // This hook will be executed before all scenarios
    yield protractor_1.browser.manage().window().maximize();
}));
/*
Before({tags: "@credencialesCorrectas"}, function () {
  // This hook will be executed before scenarios tagged with @foo
    console.log("Me executo primero");
});*/
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Test is completed");
        if (scenario.result.status === cucumber_1.Status.PASSED) {
            const screenShot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenShot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUF5RDtBQUN6RCwyQ0FBbUM7QUFDbkMsd0RBQXFEO0FBRXJELElBQUksS0FBSyxHQUFHLElBQUkscUJBQVMsQ0FBQztBQUcxQixvQkFBUyxDQUFDLEVBQUMsSUFBSSxFQUFFLCtCQUErQixFQUFDLEVBQUUsR0FBUyxFQUFFO0lBQzVELGtEQUFrRDtJQUNsRCxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFFN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNIOzs7O0tBSUs7QUFFTCxnQkFBSyxDQUFFLFVBQWdCLFFBQVE7O1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGlCQUFNLENBQUMsTUFBTSxFQUFFO1lBRTVDLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7Q0FBQSxDQUFDLENBQUEifQ==