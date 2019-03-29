import {browser, element, by, By, ExpectedConditions} from 'protractor';

import { async } from "q";
import { LoginPage } from './pageObjects/LoginPage';
import { protractor } from 'protractor/built/ptor';

describe('Validar credenciales', () => {

    it('Open Angular js website', async () => {

        let logIn = new LoginPage();

        await browser.get('http://localhost:4200/login');
        browser.sleep(2000);
        //var EC = protractor.ExpectedConditions;
        //browser.wait(EC.visibilityOf(logIn.userBox), 5000);
        await logIn.userBox.clear().then(function() {
            logIn.userBox.sendKeys("noerm@yopmail.com");
        })
        await logIn.passBox.clear().then(function() {
            logIn.passBox.sendKeys("123456");
        })
        await logIn.goLogin.click();
        expect(browser.getLocationAbsUrl()).toMatch("/main/home");
    });
})