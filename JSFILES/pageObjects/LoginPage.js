"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginPage {
    constructor() {
        this.userBox = protractor_1.element(protractor_1.by.xpath('//*[@id="mat-input-0"]'));
        this.passBox = protractor_1.element(protractor_1.by.id('mat-input-1'));
        this.goLogin = protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', 'Iniciar sesión'));
        this.errorMessage = protractor_1.element(protractor_1.by.css('.authentication__error-message.ng-star-inserted'));
        this.inicioText = protractor_1.element(protractor_1.by.cssContainingText('h1.mat-h1', 'Inicio'));
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvTG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQW9EO0FBRXBELE1BQWEsU0FBUztJQVFsQjtRQUVJLElBQUksQ0FBQyxPQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FFSjtBQWpCRCw4QkFpQkMifQ==