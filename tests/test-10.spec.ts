import{test, expect} from '@playwright/test';
import { AutomationTestingPage } from '../Pages/AutomationTestingPage';
import { faker } from '@faker-js/faker';

    test('Pagetest', async({page})=>{
        const loginPage=new AutomationTestingPage(page)
        await loginPage.navigate()
        await expect(loginPage.autoName).toBeVisible();
        await loginPage.autoName.click();
    });
    



test('SignUp functionality', async ({ page }) => {
    const accountPage = new AutomationTestingPage(page);
    await accountPage.navigate();
    await accountPage.signUp(
        faker.person.firstName(),       // signUpBtnname
        faker.internet.email(),          // emailAddress
        'Test@1234Abc',                  // passWord
        faker.person.firstName(),        // firstName
        faker.person.lastName(),         // lastName
        'Chennai',                       // companyName
        'Chennai Iyyapanthangal',        // addressName
        'Porur,chennai',                 // address2Name
        'Tamil Nadu',                    // stateName
        'chennai',                       // cityName
        '600056',                        // zipCode
        '9964565656'                     // mobileNumber
    );
    await accountPage.verifyAccountCreated();
})

test('loginPage functionality',async({page}) => {
    const loginPage1 = new AutomationTestingPage(page);
    await loginPage1.navigate();
    await loginPage1.login(
        faker.internet.email(),
        'Test@1234Abc'
    );
})

test('Order functionality',async({page})=> {
    const orderPage = new AutomationTestingPage(page);
    await orderPage.navigate();
    await orderPage.productSelection('TabishPinky006@gmail.com',
        'TabishPinky006','Tabish','456723341216','766','11','2030');
    await orderPage.downLoadInvoice();

})


