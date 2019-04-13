"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class clientPage {
    constructor() {
        this.clientMenu = protractor_1.element(protractor_1.by.css('.mat-sidenav .mat-list .mat-list-item:nth-of-type(4)'));
        this.clientNew = protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', ' Nuevo cliente '));
        this.clientName = protractor_1.element(protractor_1.by.css('input[formcontrolname=name]'));
        this.clientDesc = protractor_1.element(protractor_1.by.tagName('TEXTAREA'));
        this.clientSave = protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', 'Guardar'));
        this.clientMoneda = protractor_1.element(protractor_1.by.css('#moneda-select .mat-select-trigger'));
        //this.clientMoneda=element(by.id('moneda-field'));
        //this.clientMoneda=element(by.css('div.mat-form-field-infix'));
        this.clientMonedaMXN = protractor_1.element(protractor_1.by.cssContainingText('span.mat-option-text', 'MXN'));
        this.clientPager = protractor_1.element(protractor_1.by.css('.catalog-pagination.ng-star-inserted li:nth-last-child(2)'));
        //this.clientListLas
    }
}
exports.clientPage = clientPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2NsaWVudFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBbUQ7QUFFbkQsTUFBYSxVQUFVO0lBZW5CO1FBRUksSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxVQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7UUFDeEUsbURBQW1EO1FBQ25ELGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsZUFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkRBQTJELENBQUMsQ0FBQyxDQUFDO1FBQzlGLG9CQUFvQjtJQUV4QixDQUFDO0NBQ0o7QUE5QkQsZ0NBOEJDIn0=