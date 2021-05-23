beforeEach(() => {
  cy.visit('http://localhost:1234/');
});

describe('E2E Test', () => {
  it('API - 200 status', () => {
    cy.request(`${Cypress.env('API_URL')}/menu`).as('menu');

    cy.get('@menu').should((response) => {
      expect(response.status).to.eq(200);
      // the server sometimes gets an extra comment posted from another machine
      // which gets returned as 1 extra object
      expect(response).to.have.property('headers');
      expect(response).to.have.property('duration');
    });
  });

  it('Navigate Link', () => {
    cy.get('[data-testid=LINK_MENU_1]')
      .find('a')
      .first()
      .then(($linkMenu) => {
        const firstLink = $linkMenu.attr('href');
        cy.get('[data-testid=LINK_MENU_1]').find('a').first().click();
        cy.url().should('include', firstLink);
      });
  });

  it('Search "First" keyword', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-testid=INPUT_FILTER]').clear();
    cy.get('[data-testid=INPUT_FILTER]').type('First');
    cy.get('[data-testid=LINK_MENU_1]').find('a').should('contain', 'First');

    /* ==== End Cypress Studio ==== */
  });

  it('No Results', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-testid=INPUT_FILTER]').clear();
    cy.get('[data-testid=INPUT_FILTER]').type('12e34sdsdf');
    cy.get('#app > :nth-child(1) > div').should('contain', 'No results');
    /* ==== End Cypress Studio ==== */
  });
});
