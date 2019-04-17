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


  Given('Entre al catalogo de clientes como admin', async () => {
    browser.wait(EC.presenceOf(client.clientMenu), 3000);
    await client.clientMenu.click();
    await client.clientPager.click();
  });

  When('Presione el boton de nuevo cliente', async () => {
    await client.clientNew.click(); 
  });

  When('Rellene el formulario de cliente los campos {string}, {string} y Moneda', async (string1, string2) => { 
    await client.clientName.sendKeys(string1);
    await client.clientDesc.sendKeys(string2);
    //browser.actions().mouseMove(client.clientMoneda).click().perform();
    await client.clientMoneda.click();
    await client.clientMonedaMXN.click();
  });

  When('Presione el boton guardar', async () => {
    await client.clientSave.click();
  });

  Then('Un cliente sera creado', async () =>{
    await client.clientListLast.getText().then(function(idCliente){
      console.log("\nEl ultimo cliente creado es:\n "+ idCliente);
    });

    



  });