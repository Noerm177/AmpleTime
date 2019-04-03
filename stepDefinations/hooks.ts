import {After,Before} from "cucumber";
import {browser} from "protractor";


Before({tags: "@credencialesInvalidas"}, function () {
  // This hook will be executed before all scenarios
  browser.manage().window().maximize();
});

After({tags: "@credencialesInvalidas"}, function () {
    // This hook will be executed before all scenarios
    console.log("test completo"); 
  });

Before({tags: "@credencialesCorrectas"}, function () {
  // This hook will be executed before scenarios tagged with @foo
    console.log("Me executo primero");
});

