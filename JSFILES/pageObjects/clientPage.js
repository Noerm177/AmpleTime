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
    }
}
exports.clientPage = clientPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2NsaWVudFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBbUQ7QUFFbkQsTUFBYSxVQUFVO0lBU25CO1FBRUksSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFHeEYsQ0FBQztDQUNKO0FBbkJELGdDQW1CQyJ9