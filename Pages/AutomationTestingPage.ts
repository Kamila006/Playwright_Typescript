import { Page, Locator, expect } from '@playwright/test';
export class AutomationTestingPage{
    readonly page:Page
    readonly autoName:Locator
    readonly signUpBtn:Locator
    readonly signUpBtnname:Locator
    readonly emailAddress:Locator
    readonly firstSignUpBtn:Locator
    readonly radioBtn:Locator
    readonly passWord:Locator
    readonly daysDropdown:Locator
    readonly monthsDropdown:Locator
    readonly yearsDropdown:Locator
    readonly firstName:Locator
    readonly lastName:Locator
    readonly companyName:Locator
    readonly addressName:Locator
    readonly address2Name:Locator
    readonly stateName:Locator
    readonly cityName:Locator
    readonly zipCode:Locator
    readonly mobileNumber:Locator
    readonly accountBtn:Locator
    readonly accountCreatedText:Locator
    readonly continueBtn:Locator
    readonly loginBtn:Locator
    readonly loginPassWord:Locator
    readonly loginEmailAddress:Locator
    readonly womanName:Locator
    readonly sareeName:Locator
    readonly productName:Locator
    readonly productBtn:Locator
    readonly continueShopBtn:Locator
    readonly cartName:Locator
    readonly checkOutProcess:Locator
    readonly placeOrder:Locator
    readonly cardName:Locator
    readonly cardNumber:Locator
    readonly exName:Locator
    readonly mmName:Locator
    readonly yyyyName:Locator
    readonly confirmOrderBtn:Locator
    // readonly emailField:Locator
    // readonly passwordField:Locator
    // readonly loginButton:Locator
   

    constructor(page:Page){
        this.page=page;
        this.autoName=page.getByRole('link', { name: 'Website for automation' })
        this.signUpBtn=page.getByRole('link', { name: ' Signup / Login' })
        this.signUpBtnname=page.getByRole('textbox', { name: 'Name' })
        this.emailAddress=page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.firstSignUpBtn=page.getByRole('button', { name: 'Signup' })
        this.radioBtn=page.getByRole('radio', { name: 'Mr.' })
        this.passWord=page.getByRole('textbox', { name: 'Password *' })
        this.daysDropdown=page.locator('#days')
        this.monthsDropdown=page.locator('#months')
        this.yearsDropdown=page.locator('#years')
        this.firstName=page.getByRole('textbox', { name: 'First name *' })
        this.lastName=page.getByRole('textbox', { name: 'Last name *' })
        this.companyName=page.getByRole('textbox', { name: 'Company', exact: true })
        this.addressName=page.getByRole('textbox', { name: 'Address * (Street address, P.' })
        this.address2Name=page.getByRole('textbox', { name: 'Address 2' })
        this.stateName=page.getByRole('textbox', { name: 'State *' })
        this.cityName=page.getByRole('textbox', { name: 'City * Zipcode *' })
        this.zipCode=page.locator('#zipcode')
        this.mobileNumber=page.getByRole('textbox', { name: 'Mobile Number *' })
        this.accountBtn=page.getByRole('button', { name: 'Create Account' })
        this.accountCreatedText=page.getByText('Account Created!')
        this.continueBtn=page.getByRole('link', { name: 'Continue' })
        this.loginBtn=page.getByRole('button', { name: 'Login' })
        this.loginPassWord=page.getByRole('textbox', { name: 'Password' })
        this.loginEmailAddress=page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
        this.womanName=page.getByRole('link', { name: ' Women' })
        this.sareeName=page.getByRole('link', { name: 'Saree' })
        this.productName=page.getByRole('link', { name: ' View Product' })
        this.productBtn=page.getByRole('button', { name: ' Add to cart' })
        this.continueShopBtn=page.getByRole('button', { name: 'Continue Shopping' })
        this.cartName=page.getByRole('link', { name: ' Cart' })
        this.checkOutProcess=page.getByText('Proceed To Checkout')
        this.placeOrder=page.getByRole('link', { name: 'Place Order' })
        this.cardName=page.locator('input[name="name_on_card"]')
        this.cardNumber=page.locator('input[name="card_number"]')
        this.exName=page.getByRole('textbox', { name: 'ex.' })
        this.mmName=page.getByRole('textbox', { name: 'MM' })
        this.yyyyName=page.getByRole('textbox', { name: 'YYYY' })
        this.confirmOrderBtn=page.getByRole('button', { name: 'Pay and Confirm Order' })



        // this.emailField=page.getByRole('textbox',{name:'email'})
        // this.passwordField=page.getByRole('textbox',{name:'password'})
        // this.loginButton=page.getByRole('textbox',{name:'submit'})        
    }

    async navigate()
    {
        await this.page.goto('https://www.automationexercise.com/')
    }

    async signUp(signUpBtnname:string,emailAddress:string,passWord:string,firstName:string,lastName:string,companyName:string,addressName:string,address2Name:string,stateName:string,cityName:string,zipCode:string,mobileNumber:string){
        await this.signUpBtn.click()
        await this.signUpBtnname.click()
        await this.signUpBtnname.fill(signUpBtnname)
        await this.emailAddress.click()
        await this.emailAddress.fill(emailAddress)
        await this.firstSignUpBtn.click()
        await this.radioBtn.check()
        await this.passWord.click()
        await this.passWord.fill(passWord)
        await this.daysDropdown.selectOption('26')
        await this.monthsDropdown.selectOption('11')
        await this.yearsDropdown.selectOption('2019')
        await this.firstName.click()
        await this.firstName.fill(firstName)
        await this.lastName.click()
        await this.lastName.fill(lastName)
        await this.companyName.click()
        await this.companyName.fill(companyName)
        await this.addressName.click()
        await this.addressName.fill(addressName)
        await this.address2Name.click()
        await this.address2Name.fill(address2Name)
        await this.stateName.click()
        await this.stateName.fill(stateName)
        await this.cityName.click()
        await this.cityName.fill(cityName)
        await this.zipCode.click()
        await this.zipCode.fill(zipCode)
        await this.mobileNumber.click()
        await this.mobileNumber.fill(mobileNumber)
        await this.accountBtn.click()

    }


    async verifyAccountCreated(){
        await expect(this.accountCreatedText).toBeVisible()
        await this.continueBtn.click()
    }

    async login(emailAddress:string,passWord:string)
    {
        await this.signUpBtn.click()
        await this.emailAddress.click()
        await this.emailAddress.fill(emailAddress)
        await this.loginPassWord.click()
        await this.loginPassWord.fill(passWord)
        await this.loginBtn.click()
        // await this.emailField.fill('TamilPink@gmail.com');
        // await this.passwordField.fill('TamilPink06');
        // await this.loginButton.click();
    }
    async productSelection(loginEmailAddress:string,loginPassWord:string,cardName:string,cardNumber:string,exName:string,mmName:string,yyyyName:string){
        await this.signUpBtn.click()
        await this.loginEmailAddress.click()
        await this.loginEmailAddress.fill(loginEmailAddress)
        await this.loginPassWord.click()
        await this.loginPassWord.fill(loginPassWord)
        await this.loginBtn.click()
        await expect(this.page.getByText('Logged in as')).toBeVisible()
        await this.womanName.click()
        await this.sareeName.click()
        await this.productName.nth(1).click()
        await this.productBtn.click()
        await expect(this.page.getByRole('heading', { name: 'Added!' })).toBeVisible();
        await this.continueShopBtn.click()
        await this.cartName.click()
        await expect(this.page.getByText('Proceed To Checkout')).toBeVisible();
        await this.checkOutProcess.click()
        await expect(this.page.getByRole('link', { name: 'Rust Red Linen Saree' })).toBeVisible();
        await this.placeOrder.click()
        await this.cardName.click()
        await this.cardName.fill(cardName)
        await this.cardNumber.click()
        await this.cardNumber.fill(cardNumber)
        await this.exName.click()
        await this.exName.fill(exName)
        await this.mmName.click()
        await this.mmName.fill(mmName)
        await this.yyyyName.click()
        await this.yyyyName.fill(yyyyName)
        await expect(this.page.getByRole('button', { name: 'Pay and Confirm Order' })).toBeVisible();
        await this.confirmOrderBtn.click()
        await expect(this.page.getByText('Order Placed!')).toBeVisible();
        await expect(this.page.getByText('Congratulations! Your order')).toBeVisible();
        await expect(this.page.getByRole('link', { name: 'Download Invoice' })).toBeVisible();
    }

    async downLoadInvoice(){
        const downloadPromise = this.page.waitForEvent('download');
        await this.page.getByRole('link', { name: 'Download Invoice' }).click({ force: true });
        const download = await downloadPromise;
        await this.page.getByRole('link', { name: 'Continue' }).click({ force: true });
        return download;
    }
}