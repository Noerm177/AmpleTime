import {ElementFinder,by,element} from "protractor";

export class LoginPage
{
    userBox:ElementFinder;
    passBox:ElementFinder;
    goLogin:ElementFinder;

    constructor()
    {
        this.userBox=element(by.xpath('//*[@id="mat-input-0"]'));
        this.passBox=element(by.id('mat-input-1'));
        this.goLogin=element(by.cssContainingText('span.mat-button-wrapper', 'Iniciar sesión'));
    }

}