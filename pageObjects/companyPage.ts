import {ElementFinder,by,element} from "protractor"


export class companyPage
{
    compMenu:ElementFinder;
    compNew:ElementFinder;
    compName:ElementFinder;
    compGComercial:ElementFinder;
    compGiroValue:ElementFinder;
    compToggleUser:ElementFinder;
    compNumberUsers:ElementFinder;
    compAdmin:ElementFinder;
    compSave:ElementFinder;
    compLast:ElementFinder;


    constructor()
    {
        this.compMenu=element(by.css('.mat-sidenav .mat-list .mat-list-item:nth-of-type(3)'));
        this.compNew=element(by.cssContainingText('span.mat-button-wrapper', ' Nueva Compañia '));
        this.compName=element(by.css('input[formcontrolname=name]'));
        this.compGComercial=element(by.css('mat-select[formcontrolname=commercialBusinessID'));
        this.compGiroValue=element(by.css('.ng-trigger.ng-trigger-transformPanel mat-option:nth-of-type(5)'));
        this.compToggleUser=element(by.css('.mr-3.mat-slide-toggle.mat-primary.ng-untouched .mat-slide-toggle-label'));
        this.compNumberUsers=element(by.css('input[formcontrolname=numberOfUsers'));
        this.compAdmin=element(by.css('input[formcontrolname=administrator'));
        this.compSave=element(by.cssContainingText('.mat-flat-button.mat-primary', ' Guardar '));
        this.compLast=element(by.css('.catalog-table.mat-table mat-row:nth-last-child(1)'));


    }

}