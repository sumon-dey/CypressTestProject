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
})