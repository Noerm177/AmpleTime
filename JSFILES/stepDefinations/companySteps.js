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
    yield comp.compPager.click();
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
    yield protractor_1.browser.wait(EC.elementToBeClickable(comp.compPager), 3000);
    yield comp.compPager.click();
    yield comp.compLast.getText().then(function (idCompnay) {
        console.log("\nLa ultima compañia creada es:\n " + idCompnay);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueVN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL2NvbXBhbnlTdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBRTdDLDREQUF1RDtBQUN2RCwyQ0FBeUQ7QUFFekQsSUFBSSxFQUFFLEdBQUcsK0JBQWtCLENBQUM7QUFDNUIsSUFBSSxJQUFJLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFN0IsZ0JBQUssQ0FBQywrQkFBK0IsRUFBRSxHQUFTLEVBQUU7SUFDOUMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUUvQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUwsZUFBSSxDQUFDLHFDQUFxQyxFQUFFLEdBQVMsRUFBRTtJQUNuRCxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hELE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUwsZUFBSSxDQUFDLHVCQUF1QixFQUFFLEdBQVMsRUFBRTtJQUNyQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVMLGVBQUksQ0FBQywwQkFBMEIsRUFBRSxHQUFTLEVBQUU7SUFDeEMsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsU0FBUztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxHQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9