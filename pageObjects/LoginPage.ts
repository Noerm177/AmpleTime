import {ElementFinder,by,element} from "protractor";

export class LoginPage
{
    urlInicio:string;
    userBox:ElementFinder;
    passBox:ElementFinder;
    goLogin:ElementFinder;
    errorMessage:ElementFinder;
    inicioText:ElementFinder;

    constructor()
    {
       
        this.urlInicio=('http://ec2-54-218-245-21.us-west-2.compute.amazonaws.com/login'); 
        this.userBox=element(by.xpath('//*[@id="mat-input-0"]'));
        this.passBox=element(by.id('mat-input-1'));
        this.goLogin=element(by.cssContainingText('span.mat-button-wrapper', 'Iniciar sesión'));
        this.errorMessage=element(by.css('.authentication__error-message.ng-star-inserted'));
        this.inicioText=element(by.cssContainingText('h1.mat-h1', 'Inicio'));
    }

}