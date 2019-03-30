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
const LoginPage_1 = require("../pageObjects/LoginPage");
const protractor_1 = require("protractor");
let logIn = new LoginPage_1.LoginPage();
cucumber_1.Given('Ingresare a la pagina', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://ec2-54-218-245-21.us-west-2.compute.amazonaws.com/login');
}));
cucumber_1.When('Ingresare un {string} y {string} invalidos', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield logIn.userBox.clear().then(function () {
        logIn.userBox.sendKeys(string);
    });
    yield logIn.passBox.clear().then(function () {
        logIn.passBox.sendKeys(string2);
    });
    yield logIn.goLogin.click();
}));
cucumber_1.Then('Me mostrara {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield logIn.errorMessage.getText().then(function (text) {
        expect(text).toEqual(string);
    });
}));
cucumber_1.Given('Ingresare a la pagina con credenciales validas', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://ec2-54-218-245-21.us-west-2.compute.amazonaws.com/login');
}));
cucumber_1.When('Ingresare un usuario {string}  y contraseña {string} validos', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield logIn.userBox.clear().then(function () {
        logIn.userBox.sendKeys(string);
    });
    yield logIn.passBox.clear().then(function () {
        logIn.passBox.sendKeys(string2);
    });
}));
cucumber_1.Then('debere ingresar a la pantalla de home y mostrar mensaje de {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield logIn.goLogin.click();
    yield logIn.errorMessage.getText().then(function (text) {
        expect(text).toEqual(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUU3Qyx3REFBcUQ7QUFDckQsMkNBQXFDO0FBQ3JDLElBQUksS0FBSyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBRTVCLGdCQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBUSxFQUFFO0lBRXJDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztBQUV0RixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRDQUE0QyxFQUFFLENBQU0sTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQzFFLE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDN0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDRixNQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzdCLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzlCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUM1QyxNQUFNLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFBO0FBRUosQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsZ0RBQWdELEVBQUUsR0FBUSxFQUFFO0lBQ2hFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztBQUN0RixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDhEQUE4RCxFQUFFLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQzdGLG9FQUFvRTtJQUNwRSxNQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzdCLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztRQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMscUVBQXFFLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUMzRixNQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsTUFBTSxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==