import { Given, When, Then } from "cucumber";
import {clientPage} from '../pageObjects/clientPage';
import { async } from "q";
import { browser, Key, ExpectedConditions, element, ActionSequence } from "protractor";
import chai from "chai";

var EC = ExpectedConditions;
var expect = chai.expect;
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
let client = new clientPage();
var idClienteLast = '';

  Given('Estoy dentro del catalogo de cliente', async () => {
    browser.wait(EC.presenceOf(client.clientMenu), 3000);
    await client.clientMenu.click();
    await client.clientPager.click();
    await client.clientListLast.getText().then(function(idLast){
        idClienteLast = idLast;
        return idClienteLast;
    });
    
  });

  When('Presione sobre el boton de nuevo cliente', async () => {
    await client.clientNew.click(); 
  });

  When('Rellene  los campos {string}, {string}', async (string1, string2) => { 
    await client.clientName.sendKeys(string1);
    await client.clientDesc.sendKeys(string2);
    //browser.actions().mouseMove(client.clientMoneda).click().perform();
    
  });

  When('Deje el campo Moneda vacio', async ()=>{
    //await client.clientMoneda.click();
    //await client.clientMonedaMXN.click();

  });

  When('Presione sobre  guardar', async () => {
    await client.clientSave.click();
    await client.clientCancel.click();
    await browser.wait(EC.elementToBeClickable(client.clientPager), 3000);
    await client.clientPager.click();

  });

  Then('El cliente no sera creado', async () =>{
    await client.clientListLast.getText().then(function(idClienteLast2){
        expect(idClienteLast).to.equal(idClienteLast2);
        console.log("\nCliente sin cambios: \n"+idClienteLast2);
    });
     
  });