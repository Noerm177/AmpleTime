import { Given, When, Then } from "cucumber";
import { async } from "q";
import {companyPage} from '../pageObjects/companyPage';
import { ExpectedConditions, browser } from "protractor";

var EC = ExpectedConditions;
let comp = new companyPage();

Given('Entre al catalogo de compañia', async () =>{
    await comp.compMenu.click();
    
  });

When('Presione el boton de crear compañia', async () => {
    await browser.wait(EC.visibilityOf(comp.compNew), 3000);
    await comp.compNew.click();
  });

When('Rellene el formulario', async () => {
    await comp.compName.sendKeys('Mi compañia');
    await comp.compGComercial.click();
    await comp.compGiroValue.click();
    await comp.compToggleUser.click();
    await comp.compNumberUsers.sendKeys(10);
    await comp.compAdmin.sendKeys('noerm@a.com');
    await comp.compSave.click();

  });

Then('Una compañia sera creada', async () => {
    await comp.compLast.getText().then(function(idCompnay){
        console.log("La ultima compañia creada es:\n "+ idCompnay);
      });
  });