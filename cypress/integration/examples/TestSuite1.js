/// <reference types="Cypress"/>

describe("Test Suite 1",function(){
    before(function(){
        cy.visit("https://courses.ultimateqa.com/users/sign_in")
    })
    it("Page should get launched successfully and title should get correctly displayed",function(){       
        cy.title().should("eq", "Ultimate QA")
        cy.location("href").should("eq","https://courses.ultimateqa.com/users/sign_in")
    })
    it("All the elements should be visible in the landing page",function(){
        // Validation of header image and header
        cy.get("img[alt='Ultimate QA']").should("be.visible")
        cy.get("h1[class='page__heading']:contains('Welcome Back!')").should("be.visible")

        // Validation of Sign In link
        cy.get("a:contains('Sign In')").should("be.visible")

        // Validation of the form controls and their labels
        cy.get("label[class='form__label']:contains('Email')").should("be.visible")
        cy.get("[id='user[email]']").should("be.visible")
        cy.get("label[class='form__label']:contains('Password')").should("be.visible")
        cy.get("[id='user[password]']").should("be.visible")
        cy.get("[id='user[remember_me]").should("be.visible")
        cy.get("a:contains('Forgot Password?')").should("be.visible")
        cy.get("input[type='submit'][value='Sign in']").should("be.visible")

        // Validation of the create a new account link
        cy.get("a:contains('Create a new account')").should("be.visible")
    })
    it("Incorrect username and password should not allow user to log in",function(){
        cy.get("input[name='user[email]']").type("Sam")
        cy.get("input[name='user[password]']").type("Doe")
        cy.get("[id='user[remember_me]']").check().should("be.checked")
        cy.get("input[value='Sign in']").click()
        cy.wait(15000)

        // Validation of the error message for incorrect username or password
        cy.get("#notice>ul>li").should('have.text','Invalid Email or password.')
    })
    it("The Forgot Password page should get correctly displayed",function(){
        cy.get(".form__forgot-password").click()
        cy.get("h1:contains('Forgot your Password?')").should("be.visible")
        cy.get("p:contains('Enter the email you signed up with and we will send you reset instructions.')").should("be.visible")
        cy.get("input[id='user[email]'][placeholder='Email']").should("be.visible").should("be.enabled")
        cy.get("input[value='Submit']").should("be.enabled")

        // Validation of the Email textbox field in the Forgot Password page
        cy.get("input[id='user[email]'][placeholder='Email']").type("test@test.com")
        cy.get("input[value='Submit']").click()
        cy.get("h1:contains('Help is on the way!')").should("be.visible")
        //cy.get("p").should("include.text","We've sent you a password reset email.Please check your inbox.")
        cy.get("p").then(function(element){
            const actualText=element.text()
            expect(actualText.includes("We've sent you a password reset email.")).to.be.true
            expect(actualText.includes("Please check your inbox.")).to.be.true
        })
    })
    it("New Account should get created successfully",function(){
        cy.contains("Create a new account").should("be.enabled").click()
        cy.get("[id='user[first_name]']").type("Hello")
        cy.get("[name='user[last_name]']").type("World")
        cy.get("input[type='email']").type("test@test.com")
        cy.get("input[type='password']").type("123456")
        cy.get("input[type='checkbox']").should("be.enabled").check().should("be.checked")
        cy.get("input[value='Sign up']").click()
    })
})