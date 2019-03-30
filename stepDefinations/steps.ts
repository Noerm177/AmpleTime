import { Given, When, Then } from "cucumber";
import { async } from "q";
import { LoginPage } from '../pageObjects/LoginPage';
import { browser } from "protractor";
let logIn = new LoginPage();

Given('Ingresare a la pagina', async ()=> {
    
    await browser.get('http://ec2-54-218-245-21.us-west-2.compute.amazonaws.com/login');
    
  });

  When('Ingresare un {string} y {string} invalidos', async(string, string2) => {
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
        expect(text).toMatch(string);
    })
             
  });

  Given('Ingresare a la pagina con credenciales validas', async ()=> {
    await browser.get('http://ec2-54-218-245-21.us-west-2.compute.amazonaws.com/login');
  });

  When('Ingresare un usuario {string}  y contraseña {string} validos', async (string, string2) => {
    // Write code here that turns the phrase above into concrete actions
    await logIn.userBox.clear().then(function() {
        logIn.userBox.sendKeys(string);
    })
    await logIn.passBox.clear().then(function() {
        logIn.passBox.sendKeys(string2);
    })
  });

  Then('debere ingresar a la pantalla de home y mostrar mensaje de {string}', async (string) =>{
    await logIn.goLogin.click();
    await logIn.errorMessage.getText().then(function(text){
        expect(text).toEqual(string);
    })
  });


  

  
  
  