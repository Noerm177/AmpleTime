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
const clientPage_1 = require("../pageObjects/clientPage");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var EC = protractor_1.ExpectedConditions;
var expect = chai_1.default.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
let logIn = new LoginPage_1.LoginPage();
let client = new clientPage_1.clientPage();
cucumber_1.Given('Entre al catalogo de clientes', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get(logIn.urlInicio);
    yield logIn.goLogin.click();
    yield client.clientMenu.click();
}));
cucumber_1.When('Presione el boton de nuevo cliente', () => __awaiter(this, void 0, void 0, function* () {
    yield client.clientNew.click();
}));
cucumber_1.When('Rellene el formulario de cliente los campos {string}, {string} y Moneda', (string1, string2) => __awaiter(this, void 0, void 0, function* () {
    yield client.clientName.sendKeys(string1);
    yield client.clientDesc.sendKeys(string2);
    //browser.actions().mouseMove(client.clientMoneda).click().perform();
    yield client.clientMoneda.click();
    console.log(client.clientMoneda);
    //await client.clientMoneda.click();
    //await client.clientMonedaMXN.click();
}));
cucumber_1.When('Presione el boton guardar', () => __awaiter(this, void 0, void 0, function* () {
    yield client.clientSave.click();
}));
cucumber_1.Then('Un cliente sera creado', function () {
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50U3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvY2xpZW50U3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3Qyx3REFBcUQ7QUFDckQsMERBQXFEO0FBRXJELDJDQUF1RjtBQUN2RixnREFBd0I7QUFFeEIsSUFBSSxFQUFFLEdBQUcsK0JBQWtCLENBQUM7QUFDNUIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLEVBQUMsaUJBQWlCLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDOUMsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzdCLElBQUksS0FBSyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBQzVCLElBQUksTUFBTSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBRzVCLGdCQUFLLENBQUMsK0JBQStCLEVBQUUsR0FBUyxFQUFFO0lBQ2hELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFbEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxvQ0FBb0MsRUFBRSxHQUFTLEVBQUU7SUFDcEQsTUFBTSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRWpDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUVBQXlFLEVBQUUsQ0FBTyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFFekcsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLHFFQUFxRTtJQUNyRSxNQUFNLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakMsb0NBQW9DO0lBQ3BDLHVDQUF1QztBQUV6QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDJCQUEyQixFQUFFLEdBQVMsRUFBRTtJQUMzQyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3QkFBd0IsRUFBRTtBQUUvQixDQUFDLENBQUMsQ0FBQyJ9