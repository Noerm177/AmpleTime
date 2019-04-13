import {ElementFinder,by,element} from "protractor"

export class clientPage
{
    clientMenu:ElementFinder;
    clientNew:ElementFinder;
    clientName:ElementFinder;
    clientDesc:ElementFinder;
    clientMoneda:ElementFinder;
    clientMonedaUSD:ElementFinder;
    clientMonedaMXN:ElementFinder;
    clientSave:ElementFinder;
    clientPager:ElementFinder;
    clientListLast:ElementFinder;
    


    constructor()
    {
        this.clientMenu=element(by.css('.mat-sidenav .mat-list .mat-list-item:nth-of-type(4)'));
        this.clientNew=element(by.cssContainingText('span.mat-button-wrapper', ' Nuevo cliente '));
        this.clientName=element(by.css('input[formcontrolname=name]'));
        this.clientDesc=element(by.tagName('TEXTAREA'));
        this.clientSave=element(by.cssContainingText('span.mat-button-wrapper', 'Guardar'));
        this.clientMoneda=element(by.css('#moneda-select .mat-select-trigger'));
        //this.clientMoneda=element(by.id('moneda-field'));
        //this.clientMoneda=element(by.css('div.mat-form-field-infix'));
        this.clientMonedaMXN=element(by.cssContainingText('span.mat-option-text', 'MXN'));
        this.clientPager=element(by.css('.catalog-pagination.ng-star-inserted li:nth-last-child(2)'));
        //this.clientListLas

    }
}