describe('Add and remove items', () => {
  beforeEach(() => {
    cy.visit('www.saucedemo.com');
    cy.get('input[name="user-name"]').type('standard_user');
    cy.get('input[name="password"]').type('secret_sauce');
    cy.get('#login-button').click();
  });


  it('add item to basket ', () => {
  
    cy.get('.title').should('have.text', 'Products');
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_badge').should('have.text', '1');
  
  });
  it('remove item from basket ', () => {
  
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('.shopping_cart_badge').click()
    cy.get('#remove-sauce-labs-backpack').should('be.visible');
    cy.get('#remove-sauce-labs-backpack').click()
    cy.get('#shopping_cart_container').should('have.text', '');
  
  });
  afterEach(() => {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").should('be.visible');
    cy.get("#logout_sidebar_link").click();

  });


});