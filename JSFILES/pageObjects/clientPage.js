"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class clientPage {
    constructor() {
        this.clientMenu = protractor_1.element(protractor_1.by.cssContainingText('h4.mat-line', 'Clientes'));
        this.clientNew = protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', ' Nuevo cliente '));
        this.clientName = protractor_1.element(protractor_1.by.css('input[formcontrolname=name]'));
        this.clientDesc = protractor_1.element(protractor_1.by.tagName('TEXTAREA'));
        this.clientSave = protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', 'Guardar'));
        this.clientMoneda = protractor_1.element(protractor_1.by.css('#moneda-select .mat-select-trigger'));
        //this.clientMoneda=element(by.id('moneda-field'));
        //this.clientMoneda=element(by.css('div.mat-form-field-infix'));
        //this.clientMonedaMXN=element(by.cssContainingText('span.mat-option-text', 'MXN'));
    }
}
exports.clientPage = clientPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2NsaWVudFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBbUQ7QUFFbkQsTUFBYSxVQUFVO0lBYW5CO1FBRUksSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFlBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLG1EQUFtRDtRQUNuRCxnRUFBZ0U7UUFDaEUsb0ZBQW9GO0lBR3hGLENBQUM7Q0FDSjtBQTNCRCxnQ0EyQkMifQ==