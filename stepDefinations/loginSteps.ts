import { Given, When, Then } from "cucumber";
import { async } from "q";
import { LoginPage } from '../pageObjects/LoginPage';
import { browser, protractor } from "protractor";
import { AssertionError } from "assert";
import chai from "chai";

var expect = chai.expect;
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
let logIn = new LoginPage();

Given('Ingresare a la pagina', async ()=> { 
    await browser.get(logIn.urlInicio);    
  });

  When('Ingresare un {string} y {string} invalidos', async(string, string2) => {
    let until = protractor.ExpectedConditions;
    browser.wait(until.elementToBeClickable(logIn.userBox), 5000);

    await logIn.userBox.clear().then(function() {
        logIn.userBox.sendKeys(string);
    })
    await logIn.passBox.clear().then(function() {
        logIn.passBox.sendKeys(string2);
    })
    await logIn.goLogin.click();
  });

  Then('Me mostrara {string}', async (string) =>{
    await logIn.errorMessage.getText().then(function(text){
        expect(text).to.equal(string);
    })          
  });


Given('Ingresare a la pagina con credenciales validas', async ()=> {
  await browser.get(logIn.urlInicio);
});

  When('Ingresare un usuario {string}  y contraseña {string} validos', async (string, string2) => {
    await logIn.userBox.clear().then(function() {
        logIn.userBox.sendKeys(string);
    })
    await logIn.passBox.clear().then(function() {
        logIn.passBox.sendKeys(string2);
    })
  });

  Then('debere ingresar a la pantalla de home y mostrar mensaje de {string}', async (string) =>{
    await logIn.goLogin.click();
    await logIn.inicioText.getText().then(function(text){
        expect(text).to.equal(string);
    })
  });


  

  
  
  