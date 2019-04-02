import {browser, element, by, By, ExpectedConditions} from 'protractor';
import { async } from "q";
import { LoginPage } from './pageObjects/LoginPage';
import { protractor } from 'protractor/built/ptor';

describe('Validar credenciales', () => {
    let logIn = new LoginPage();

    it('Debe de mostrar mensaje de error', async () => {

        await browser.get('http://localhost:4200/login');
        //var EC = protractor.ExpectedConditions;
        //browser.wait(EC.visibilityOf(logIn.userBox), 5000);
        await logIn.userBox.clear().then(function() {
            logIn.userBox.sendKeys("noerm@yopmail.com");
        })
        await logIn.passBox.clear().then(function() {
            logIn.passBox.sendKeys("123456");
        })
        await logIn.goLogin.click();
        await expect(logIn.errorMessage.getText()).toEqual('Usuario y/o contraseña incorrectas, favor de verificar')
        .then(function(){
            console.log('Contraseña incorrecta');
        })
        
    });

    it('Debe ingresar a la aplicacion', async () => {
        
        await browser.get('http://localhost:4200/login');
        //var EC = protractor.ExpectedConditions;
        //browser.wait(EC.visibilityOf(logIn.userBox), 5000);
        await logIn.userBox.clear().then(function() {
            logIn.userBox.sendKeys("testomator@amplemind.com");
        })
        await logIn.passBox.clear().then(function() {
            logIn.passBox.sendKeys("123456");
        })
        await logIn.goLogin.click();
        await expect(logIn.inicioText.getText()).toEqual('Inicio')
        .then(function(){
            console.log('Contraseña correcta');
        })
        browser.sleep(3000);
    });
})