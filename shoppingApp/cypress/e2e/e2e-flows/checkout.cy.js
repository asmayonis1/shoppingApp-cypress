describe('checkout as logged user', () => {
    beforeEach(() => {
      cy.visit('www.saucedemo.com');
      cy.get('input[name="user-name"]').type('standard_user');
      cy.get('input[name="password"]').type('secret_sauce');
      cy.get('#login-button').click();
    });
    it('add items then checkout', () => {
    
      cy.get('.title').should('have.text', 'Products');
      cy.get('#add-to-cart-sauce-labs-backpack').click()
      cy.get('.shopping_cart_badge').should('have.text', '1');
      cy.get('.shopping_cart_badge').click()
      cy.get('#checkout').click()
      cy.get('.title').should('have.text', 'Checkout: Your Information');
      cy.get('#first-name').type("Asma");
      cy.get('#last-name').type("Yonis");
      cy.get('#postal-code').type("022");
      cy.get('#continue').click();
      cy.get('.title').should('have.text', 'Checkout: Overview');
      cy.get('#finish').scrollIntoView().click(); 

    
    });
    afterEach(() => {
        cy.get("#react-burger-menu-btn").click();
        cy.get("#logout_sidebar_link").should('be.visible');
        cy.get("#logout_sidebar_link").click();
      });


});