export default function addCustomCommands() {
Cypress.Commands.add('login', () => {
  cy.visit('https://www.saucedemo.com');
  cy.get('input[name="user-name"]').should('be.visible').type('standard_user');
  cy.get('input[name="password"]').should('be.visible').type('secret_sauce');
  cy.get('#login-button').should('be.visible').click();
});
}