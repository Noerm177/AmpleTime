import { Given, When, Then } from "cucumber";
import { LoginPage } from '../pageObjects/LoginPage';
import {clientPage} from '../pageObjects/clientPage';
import { async } from "q";
import { browser } from "protractor";
import chai from "chai";

var expect = chai.expect;
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
let logIn = new LoginPage();
let client = new clientPage();


  Given('Entre al catalogo de clientes', async () => {
    await browser.get(logIn.urlInicio);
    await logIn.goLogin.click();
    await client.clientMenu.click();
  
  });

  When('Presione el boton de nuevo cliente', async () => {
    await client.clientNew.click();
    
  });

  When('Rellene el formulario de cliente los campos {string}, {string} y Moneda', async (string1, string2) => {
    
    await client.clientName.sendKeys(string1);
    await client.clientDesc.sendKeys(string2);


  });

  When('Presione el boton guardar', async () => {
    await client.clientSave.click();
  });

  Then('Un cliente sera creado', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });