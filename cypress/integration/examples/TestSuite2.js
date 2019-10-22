/// <reference types="Cypress"/>

describe("Test Suite 2",function(){
    before(function(){
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
    })
    it("Page should get launched successfully and title should get correctly displayed",function(){       
        cy.title().should("eq", "Simple HTML Elements For Automation - Ultimate QA")
        cy.location("href").should("eq","https://ultimateqa.com/simple-html-elements-for-automation/")
    })    
})