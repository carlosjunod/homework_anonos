beforeEach(() => {
  cy.visit('http://localhost:1234/');
});

describe('Navigate to link', () => {
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
    /* ==== End Cypress Studio ==== */
    cy.get('[data-testid=LINK_MENU_1]').find('a').should('contain', 'First');
  });

  it('No Results', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-testid=INPUT_FILTER]').clear();
    cy.get('[data-testid=INPUT_FILTER]').type('12e34sdsdf');
    cy.get('#app > :nth-child(1) > div').should('contain', 'No results');
    /* ==== End Cypress Studio ==== */
  });

  it('Prueba del test', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-testid=INPUT_FILTER]').clear();
    cy.get('[data-testid=INPUT_FILTER]').type('site');
    cy.get('[data-testid=LINK_MENU_0] > :nth-child(1)').click();
    cy.get('[data-testid=LINK_MENU_1] > :nth-child(1) > a').click();
    /* ==== End Cypress Studio ==== */
  });
});
