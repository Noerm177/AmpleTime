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
const companyPage_1 = require("../pageObjects/companyPage");
const protractor_1 = require("protractor");
var EC = protractor_1.ExpectedConditions;
let comp = new companyPage_1.companyPage();
cucumber_1.Given('Entre al catalogo de compañia', () => __awaiter(this, void 0, void 0, function* () {
    yield comp.compMenu.click();
}));
cucumber_1.When('Presione el boton de crear compañia', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(comp.compNew), 3000);
    yield comp.compNew.click();
}));
cucumber_1.When('Rellene el formulario', () => __awaiter(this, void 0, void 0, function* () {
    yield comp.compName.sendKeys('Mi compañia');
    yield comp.compGComercial.click();
    yield comp.compGiroValue.click();
    yield comp.compToggleUser.click();
    yield comp.compNumberUsers.sendKeys(10);
    yield comp.compAdmin.sendKeys('noerm@a.com');
    yield comp.compSave.click();
}));
cucumber_1.Then('Una compañia sera creada', () => __awaiter(this, void 0, void 0, function* () {
    yield comp.compLast.getText().then(function (idCompnay) {
        console.log("La ultima compañia creada es:\n " + idCompnay);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueVN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL2NvbXBhbnlTdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBRTdDLDREQUF1RDtBQUN2RCwyQ0FBeUQ7QUFFekQsSUFBSSxFQUFFLEdBQUcsK0JBQWtCLENBQUM7QUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFN0IsZ0JBQUssQ0FBQywrQkFBK0IsRUFBRSxHQUFTLEVBQUU7SUFDOUMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRTlCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFTCxlQUFJLENBQUMscUNBQXFDLEVBQUUsR0FBUyxFQUFFO0lBQ25ELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEQsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzdCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFTCxlQUFJLENBQUMsdUJBQXVCLEVBQUUsR0FBUyxFQUFFO0lBQ3JDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUU5QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUwsZUFBSSxDQUFDLDBCQUEwQixFQUFFLEdBQVMsRUFBRTtJQUN4QyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsU0FBUztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxHQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9