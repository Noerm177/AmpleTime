import {After,Before, Status} from "cucumber";
import {browser} from "protractor";


Before({tags: "@ClienteNuevo"}, function () {
  // This hook will be executed before all scenarios
  browser.manage().window().maximize();
  
});
/*
After({tags: "@credencialesInvalidas"}, function () {
    // This hook will be executed before all scenarios
    console.log("test completo"); 
  });

Before({tags: "@credencialesCorrectas"}, function () {
  // This hook will be executed before scenarios tagged with @foo
    console.log("Me executo primero");
});*/

After (async function (scenario) {
  console.log("Test is completed");
  if (scenario.result.status === Status.PENDING) {

    const screenShot = await browser.takeScreenshot();  
      this.attach(screenShot,"image/png");
  }
  
})