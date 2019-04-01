"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const LoginPage_1 = require("../pageObjects/LoginPage");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
let logIn = new LoginPage_1.LoginPage();
cucumber_1.Given('Ingresare a la pagina', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://ec2-54-218-245-21.us-west-2.compute.amazonaws.com/login');
}));
cucumber_1.When('Ingresare un {string} y {string} invalidos', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    let until = protractor_1.protractor.ExpectedConditions;
    protractor_1.browser.wait(until.elementToBeClickable(logIn.userBox), 5000);
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
        expect(text).to.equal(string);
    });
}));
cucumber_1.Given('Ingresare a la pagina con credenciales validas', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://ec2-54-218-245-21.us-west-2.compute.amazonaws.com/login');
}));
cucumber_1.When('Ingresare un usuario {string}  y contraseña {string} validos', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield logIn.userBox.clear().then(function () {
        logIn.userBox.sendKeys(string);
    });
    yield logIn.passBox.clear().then(function () {
        logIn.passBox.sendKeys(string2);
    });
}));
cucumber_1.Then('debere ingresar a la pantalla de home y mostrar mensaje de {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield logIn.goLogin.click();
    yield logIn.inicioText.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUU3Qyx3REFBcUQ7QUFDckQsMkNBQWlEO0FBRWpELGdEQUF3QjtBQUN4QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksRUFBQyxpQkFBaUIsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5QyxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFFNUIsZ0JBQUssQ0FBQyx1QkFBdUIsRUFBRSxHQUFRLEVBQUU7SUFDckMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO0FBQ3RGLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNENBQTRDLEVBQUUsQ0FBTSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDMUUsSUFBSSxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztJQUMxQyxvQkFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTlELE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDN0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDRixNQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzdCLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzlCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUM1QyxNQUFNLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLGdEQUFnRCxFQUFFLEdBQVEsRUFBRTtJQUNoRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7QUFDdEYsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw4REFBOEQsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUM3RixNQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzdCLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztRQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMscUVBQXFFLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUMzRixNQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsTUFBTSxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7UUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=