import {After,Before, Status, BeforeAll} from "cucumber";
import {browser} from "protractor";
import { LoginPage } from '../pageObjects/LoginPage';
import { async } from "q";
let logIn = new LoginPage;


BeforeAll({tags: "@ClienteNuevo, @compañiaNueva"}, async () => {
  // This hook will be executed before all scenarios
  await browser.manage().window().maximize();

});
/*
Before({tags: "@credencialesCorrectas"}, function () {
  // This hook will be executed before scenarios tagged with @foo
    console.log("Me executo primero");
});*/

After (async function (scenario) {
  console.log("Test is completed");
  if (scenario.result.status === Status.PASSED) {

    const screenShot = await browser.takeScreenshot();  
      this.attach(screenShot,"image/png");
  }
})