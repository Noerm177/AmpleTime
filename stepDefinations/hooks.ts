import {After,Before, Status} from "cucumber";
import {browser} from "protractor";
import { LoginPage } from '../pageObjects/LoginPage';
import { async } from "q";
let logIn = new LoginPage;


Before({tags: "@ClienteNuevo"}, async () => {
  // This hook will be executed before all scenarios
  await browser.manage().window().maximize();

});
/*
After({tags: "@ClienteNuevo"}, function () {
  browser.getCurrentUrl().then(
    url=> {
      if (url  != logIn.urlInicio)  {
       browser.get(logIn.urlInicio);
       logIn.goLogin.click();
    }}
  )
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