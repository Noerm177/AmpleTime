"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginPage {
    constructor() {
        this.userBox = protractor_1.element(protractor_1.by.xpath('//*[@id="mat-input-0"]'));
        this.passBox = protractor_1.element(protractor_1.by.id('mat-input-1'));
        this.goLogin = protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', 'Iniciar sesión'));
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvTG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQW9EO0FBRXBELE1BQWEsU0FBUztJQU1sQjtRQUVJLElBQUksQ0FBQyxPQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7Q0FFSjtBQWJELDhCQWFDIn0=