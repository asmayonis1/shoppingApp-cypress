describe('login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('login as authorized user ', () => {
    cy.get('input[name="user-name"]').should('be.visible')
    cy.get('input[name="user-name"]').type('standard_user');

    cy.get('input[name="password"]').should('be.visible')
    cy.get('input[name="password"]').type('secret_sauce');

    cy.get('#login-button').should('be.visible')
    cy.get('#login-button').click();
  });

  it('login as non authorized user', () => {
    const randomText = Math.random().toString(36).substring(2);

    cy.get('input[name="user-name"]').should('be.visible')
    cy.get('input[name="user-name"]').type(randomText);

    cy.get('input[name="password"]').should('be.visible')
    cy.get('input[name="password"]').type(randomText);

    cy.get('#login-button').should('be.visible')
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });
  afterEach(() => {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").should('be.visible');
    cy.get("#logout_sidebar_link").click();

  });
});

