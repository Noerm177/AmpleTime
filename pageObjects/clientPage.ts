import {ElementFinder,by,element} from "protractor"

export class clientPage
{
    clientMenu:ElementFinder;
    clientNew:ElementFinder;
    clientName:ElementFinder;
    clientDesc:ElementFinder;
    clientMoneda:ElementFinder;
    clientSave:ElementFinder;
    


    constructor()
    {
        this.clientMenu=element(by.cssContainingText('h4.mat-line', 'Clientes'));
        this.clientNew=element(by.cssContainingText('span.mat-button-wrapper', ' Nuevo cliente '));
        this.clientName=element(by.css('input[formcontrolname=name]'));
        this.clientDesc=element(by.tagName('TEXTAREA'));
        this.clientSave=element(by.cssContainingText('span.mat-button-wrapper', 'Guardar'));
        this.clientMoneda=element(by.css('.mat-select'));

    }
}