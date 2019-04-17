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
var idClienteLast = '';
cucumber_1.Given('Estoy dentro del catalogo de cliente', () => __awaiter(this, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.presenceOf(client.clientMenu), 3000);
    yield client.clientMenu.click();
    yield client.clientPager.click();
    yield client.clientListLast.getText().then(function (idLast) {
        idClienteLast = idLast;
        return idClienteLast;
    });
}));
cucumber_1.When('Presione sobre el boton de nuevo cliente', () => __awaiter(this, void 0, void 0, function* () {
    yield client.clientNew.click();
}));
cucumber_1.When('Rellene  los campos {string}, {string}', (string1, string2) => __awaiter(this, void 0, void 0, function* () {
    yield client.clientName.sendKeys(string1);
    yield client.clientDesc.sendKeys(string2);
    //browser.actions().mouseMove(client.clientMoneda).click().perform();
}));
cucumber_1.When('Deje el campo Moneda vacio', () => __awaiter(this, void 0, void 0, function* () {
    //await client.clientMoneda.click();
    //await client.clientMonedaMXN.click();
}));
cucumber_1.When('Presione sobre  guardar', () => __awaiter(this, void 0, void 0, function* () {
    yield client.clientSave.click();
    yield client.clientCancel.click();
    yield protractor_1.browser.wait(EC.elementToBeClickable(client.clientPager), 3000);
    yield client.clientPager.click();
}));
cucumber_1.Then('El cliente no sera creado', () => __awaiter(this, void 0, void 0, function* () {
    yield client.clientListLast.getText().then(function (idClienteLast2) {
        expect(idClienteLast).to.equal(idClienteLast2);
        console.log("\nCliente sin cambios: \n" + idClienteLast2);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50Q2FtcG9TdGVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy9jbGllbnRDYW1wb1N0ZXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMERBQXFEO0FBRXJELDJDQUF1RjtBQUN2RixnREFBd0I7QUFFeEIsSUFBSSxFQUFFLEdBQUcsK0JBQWtCLENBQUM7QUFDNUIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLEVBQUMsaUJBQWlCLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDOUMsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzdCLElBQUksTUFBTSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzlCLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUVyQixnQkFBSyxDQUFDLHNDQUFzQyxFQUFFLEdBQVMsRUFBRTtJQUN2RCxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRCxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsTUFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pDLE1BQU0sTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxNQUFNO1FBQ3RELGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDdkIsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDBDQUEwQyxFQUFFLEdBQVMsRUFBRTtJQUMxRCxNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3Q0FBd0MsRUFBRSxDQUFPLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUN4RSxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLE1BQU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMscUVBQXFFO0FBRXZFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNEJBQTRCLEVBQUUsR0FBUSxFQUFFO0lBQzNDLG9DQUFvQztJQUNwQyx1Q0FBdUM7QUFFekMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5QkFBeUIsRUFBRSxHQUFTLEVBQUU7SUFDekMsTUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLE1BQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEUsTUFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRW5DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMkJBQTJCLEVBQUUsR0FBUyxFQUFFO0lBQzNDLE1BQU0sTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxjQUFjO1FBQzlELE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=