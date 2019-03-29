"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginPage_1 = require("./pageObjects/LoginPage");
describe('Validar credenciales', () => {
    it('Open Angular js website', () => __awaiter(this, void 0, void 0, function* () {
        let logIn = new LoginPage_1.LoginPage();
        yield protractor_1.browser.get('http://localhost:4200/login');
        protractor_1.browser.sleep(2000);
        //var EC = protractor.ExpectedConditions;
        //browser.wait(EC.visibilityOf(logIn.userBox), 5000);
        yield logIn.userBox.clear().then(function () {
            logIn.userBox.sendKeys("noerm@yopmail.com");
        });
        yield logIn.passBox.clear().then(function () {
            logIn.passBox.sendKeys("123456");
        });
        yield logIn.goLogin.click();
        expect(protractor_1.browser.getLocationAbsUrl()).toMatch("/main/home");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXdFO0FBR3hFLHVEQUFvRDtBQUdwRCxRQUFRLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFO0lBRWxDLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFTLEVBQUU7UUFFckMsSUFBSSxLQUFLLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFFNUIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ2pELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLHlDQUF5QztRQUN6QyxxREFBcUQ7UUFDckQsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztZQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztZQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsb0JBQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQSJ9