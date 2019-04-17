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
    clientCancel:ElementFinder;
    clientPager:ElementFinder;
    clientListLast:ElementFinder;
    clientCount:ElementFinder;
    
    constructor()
    {
        this.clientMenu=element(by.css('.mat-sidenav .mat-list .mat-list-item:nth-of-type(4)'));
        this.clientNew=element(by.cssContainingText('span.mat-button-wrapper', ' Nuevo cliente '));
        this.clientName=element(by.css('input[formcontrolname=name]'));
        this.clientDesc=element(by.tagName('TEXTAREA'));
        this.clientSave=element(by.cssContainingText('span.mat-button-wrapper', 'Guardar'));
        this.clientCancel=element(by.cssContainingText('span.mat-button-wrapper', ' Cancelar '));
        this.clientMoneda=element(by.css('#moneda-select .mat-select-trigger'));
        this.clientMonedaMXN=element(by.cssContainingText('span.mat-option-text', 'MXN'));
        this.clientMonedaUSD=element(by.cssContainingText('span.mat-option-text', 'USD'));
        this.clientPager=element(by.css('.catalog-pagination.ng-star-inserted li:nth-last-child(2)'));
        this.clientListLast=element(by.css('.catalog-table.mat-table mat-row:nth-last-child(1)'));
    }
}