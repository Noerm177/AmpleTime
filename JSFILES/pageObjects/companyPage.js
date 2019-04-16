"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class companyPage {
    constructor() {
        this.compMenu = protractor_1.element(protractor_1.by.css('.mat-sidenav .mat-list .mat-list-item:nth-of-type(3)'));
        this.compNew = protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', ' Nueva Compañia '));
        this.compName = protractor_1.element(protractor_1.by.css('input[formcontrolname=name]'));
        this.compGComercial = protractor_1.element(protractor_1.by.css('mat-select[formcontrolname=commercialBusinessID'));
        this.compGiroValue = protractor_1.element(protractor_1.by.css('.ng-trigger.ng-trigger-transformPanel mat-option:nth-of-type(5)'));
        this.compToggleUser = protractor_1.element(protractor_1.by.css('.mr-3.mat-slide-toggle.mat-primary.ng-untouched .mat-slide-toggle-label'));
        this.compNumberUsers = protractor_1.element(protractor_1.by.css('input[formcontrolname=numberOfUsers'));
        this.compAdmin = protractor_1.element(protractor_1.by.css('input[formcontrolname=administrator'));
        this.compSave = protractor_1.element(protractor_1.by.cssContainingText('.mat-flat-button.mat-primary', ' Guardar '));
        this.compLast = protractor_1.element(protractor_1.by.css('.catalog-table.mat-table mat-row:nth-last-child(1)'));
    }
}
exports.companyPage = companyPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9jb21wYW55UGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFtRDtBQUduRCxNQUFhLFdBQVc7SUFjcEI7UUFFSSxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLE9BQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxjQUFjLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsYUFBYSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLGNBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUVBQXlFLENBQUMsQ0FBQyxDQUFDO1FBQy9HLElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyw4QkFBOEIsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsQ0FBQztJQUd4RixDQUFDO0NBRUo7QUE5QkQsa0NBOEJDIn0=