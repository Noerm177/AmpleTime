"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: "@credencialesInvalidas" }, function () {
    // This hook will be executed before all scenarios
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After({ tags: "@credencialesInvalidas" }, function () {
    // This hook will be executed before all scenarios
    console.log("test completo");
});
cucumber_1.Before({ tags: "@credencialesCorrectas" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Me executo primero");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBc0M7QUFDdEMsMkNBQW1DO0FBR25DLGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsd0JBQXdCLEVBQUMsRUFBRTtJQUN2QyxrREFBa0Q7SUFDbEQsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsRUFBQyxJQUFJLEVBQUUsd0JBQXdCLEVBQUMsRUFBRTtJQUNwQyxrREFBa0Q7SUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMsQ0FBQztBQUVMLGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsd0JBQXdCLEVBQUMsRUFBRTtJQUN2QywrREFBK0Q7SUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQyxDQUFDIn0=