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
const clientPage_1 = require("../pageObjects/clientPage");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var EC = protractor_1.ExpectedConditions;
var expect = chai_1.default.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
let client = new clientPage_1.clientPage();
cucumber_1.Given('Entre al catalogo de clientes como admin', () => __awaiter(this, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.presenceOf(client.clientMenu), 3000);
    yield client.clientMenu.click();
    yield client.clientPager.click();
}));
cucumber_1.When('Presione el boton de nuevo cliente', () => __awaiter(this, void 0, void 0, function* () {
    yield client.clientNew.click();
}));
cucumber_1.When('Rellene el formulario de cliente los campos {string}, {string} y Moneda', (string1, string2) => __awaiter(this, void 0, void 0, function* () {
    yield client.clientName.sendKeys(string1);
    yield client.clientDesc.sendKeys(string2);
    //browser.actions().mouseMove(client.clientMoneda).click().perform();
    yield client.clientMoneda.click();
    yield client.clientMonedaMXN.click();
}));
cucumber_1.When('Presione el boton guardar', () => __awaiter(this, void 0, void 0, function* () {
    yield client.clientSave.click();
}));
cucumber_1.Then('Un cliente sera creado', () => __awaiter(this, void 0, void 0, function* () {
    yield client.clientListLast.getText().then(function (idCliente) {
        console.log("\nEl ultimo cliente creado es:\n " + idCliente);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50U3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvY2xpZW50U3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywwREFBcUQ7QUFFckQsMkNBQXVGO0FBQ3ZGLGdEQUF3QjtBQUV4QixJQUFJLEVBQUUsR0FBRywrQkFBa0IsQ0FBQztBQUM1QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksRUFBQyxpQkFBaUIsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5QyxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDN0IsSUFBSSxNQUFNLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFHNUIsZ0JBQUssQ0FBQywwQ0FBMEMsRUFBRSxHQUFTLEVBQUU7SUFDM0Qsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckQsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLE1BQU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNuQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG9DQUFvQyxFQUFFLEdBQVMsRUFBRTtJQUNwRCxNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5RUFBeUUsRUFBRSxDQUFPLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUN6RyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLE1BQU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMscUVBQXFFO0lBQ3JFLE1BQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxNQUFNLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywyQkFBMkIsRUFBRSxHQUFTLEVBQUU7SUFDM0MsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2xDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsd0JBQXdCLEVBQUUsR0FBUyxFQUFFO0lBQ3hDLE1BQU0sTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxTQUFTO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEdBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQyxDQUFDLENBQUM7QUFNTCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=