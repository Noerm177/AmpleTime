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
    yield protractor_1.browser.get('http://localhost:4200/login');
}));
cucumber_1.When('Ingresare un {string} y {string} invalidos', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield logIn.userBox.clear().then(function () {
        logIn.userBox.sendKeys(string);
    });
    yield logIn.passBox.clear().then(function () {
        logIn.passBox.sendKeys(string2);
    });
}));
cucumber_1.Then('No debere poder ingresar a la pantalla de home', () => __awaiter(this, void 0, void 0, function* () {
    yield logIn.goLogin.click();
    yield expect(logIn.errorMessage.getText()).toEqual('Usuario y/o contraseña incorrectas, favor de verificar')
        .then(function () {
        console.log('Contraseña incorrecta');
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUU3Qyx3REFBcUQ7QUFDckQsMkNBQXFDO0FBQ3JDLElBQUksS0FBSyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBRTVCLGdCQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBUSxFQUFFO0lBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRDQUE0QyxFQUFFLENBQU0sTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQzFFLE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDN0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUE7SUFDRixNQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzdCLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxnREFBZ0QsRUFBRSxHQUFTLEVBQUU7SUFDaEUsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsd0RBQXdELENBQUM7U0FDM0csSUFBSSxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxDQUFBO0FBQ1IsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9