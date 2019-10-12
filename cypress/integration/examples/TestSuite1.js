/// <reference types="Cypress"/>

describe("Test Suite 1",function(){
    it("Page should get launched successfully and title should get correctly displayed",function(){
        cy.visit("https://courses.ultimateqa.com/users/sign_in")
        cy.title().should('eq', 'Ultimate QA')
    })
})