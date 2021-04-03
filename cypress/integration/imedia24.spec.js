/// <reference types="cypress" />

context('Test Everything', () => {
    it('shows list of pokemons', () => {
        cy.visit('/')
        cy.wait(1000)
        cy.scrollTo('bottom')
        cy.wait(1000)
        cy.scrollTo('bottom')
        cy.wait(1000)
        cy.get('[data-testid="pokemon-row"]').last().click()
        cy.wait(1000)
        cy.get('button[aria-label="close modal"]').click()
        cy.wait(1000)
        cy.scrollTo('bottom')
        cy.get('[data-testid="pokemon-row"]').last().click()
        cy.wait(1000)
        cy.get('button[aria-label="close modal"]').click()
        cy.wait(500)
        cy.scrollTo('top')
      })
  })
  