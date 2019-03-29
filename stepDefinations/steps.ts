import { Given, When, Then } from "cucumber";
import { async } from "q";
import { LoginPage } from '../pageObjects/LoginPage';
import { browser } from "protractor";
let logIn = new LoginPage();

Given('Ingresare a la pagina', async ()=> {
    await browser.get('http://localhost:4200/login');
  });

  When('Ingresare un {string} y {string} invalidos', async(string, string2) => {
    await logIn.userBox.clear().then(function() {
        logIn.userBox.sendKeys(string);
    })
    await logIn.passBox.clear().then(function() {
        logIn.passBox.sendKeys(string2);
    })
  });

  Then('No debere poder ingresar a la pantalla de home', async () => {
    await logIn.goLogin.click();
        await expect(logIn.errorMessage.getText()).toEqual('Usuario y/o contraseña incorrectas, favor de verificar')
        .then(function(){
            console.log('Contraseña incorrecta');
        })
  });

  
  
  