/// <reference types="Cypress"/>

describe("Test Suite 2",function(){
    before(function(){
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
    })
    it("Page should get launched successfully and title should get correctly displayed",function(){       
        cy.title().should("eq", "Simple HTML Elements For Automation - Ultimate QA")
        cy.location("href").should("eq","https://ultimateqa.com/simple-html-elements-for-automation/")
    })
    it("All the header links should be visible and should be in enabled condition",function(){
        cy.get("a:contains('Courses')").should("be.visible").should("not.be.disabled")
        cy.get("a:contains('Selenium Resources')").should("be.visible").should("not.be.disabled")
        cy.get("a:contains('Automation Exercises')").should("be.visible").should("not.be.disabled")
        cy.get("a:contains('Blog')").should("be.visible").should("not.be.disabled")
    })
    it("Clicking on the \"Click Me\" button should display the button success message",function(){
        cy.get("a:contains('Click Me')").should("be.enabled").click()
        cy.get("h1.entry-title").as("ClickMeButton")
        cy.get("@ClickMeButton").should("have.text","Button success")
    })    
})