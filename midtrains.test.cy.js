describe('End-to-End Tests on Midtrans Demo', () => {
  it('Successful Credit Card Payment', () => {
    cy.visit('https://demo.midtrans.com/');
    
    cy.get('#btn-body').click();

    cy.get('[data-testid="card-number"]').type('4811111111111114');
    cy.get('[data-testid="expiry-date"]').type('02/25');
    cy.get('[data-testid="card-expiry"]').type('123');
    cy.get('[data-testid="card-cvv"]').type('123');
    cy.get('[data-testid="card-clickpay"]').click();

    cy.get('iframe[id^="snap-midtrans"]').iframe().find('button[name="ok"]').click();

    cy.get('[data-testid="header-status"]').should('contain', 'Transaction successful');
  });

  it('Failed Credit Card Payment (3D Secure)', () => {
    cy.visit('https://demo.midtrans.com/');
    
    cy.get('#btn-body').click();

    cy.get('[data-testid="card-number"]').type('4911111111111113'); // Simulate a card that triggers 3D Secure
    cy.get('[data-testid="expiry-date"]').type('02/25');
    cy.get('[data-testid="card-expiry"]').type('123');
    cy.get('[data-testid="card-cvv"]').type('123');
    cy.get('[data-testid="card-clickpay"]').click();

    cy.get('iframe[id^="snap-midtrans"]').iframe().find('input[name="PaRes"]').type('123456');
    cy.get('iframe[id^="snap-midtrans"]').iframe().find('button[name="cancel"]').click();

    cy.get('[data-testid="header-status"]').should('contain', 'Transaction failed');
  });

  it('Return from Payment Page', () => {
    cy.visit('https://demo.midtrans.com/');
    
    cy.get('#btn-body').click();

    cy.get('[data-testid="card-number"]').type('4811111111111114');
    cy.get('[data-testid="expiry-date"]').type('02/25');
    cy.get('[data-testid="card-expiry"]').type('123');
    cy.get('[data-testid="card-cvv"]').type('123');
    cy.get('[data-testid="card-clickpay"]').click();

    cy.get('iframe[id^="snap-midtrans"]').iframe().find('button[name="cancel"]').click();

    cy.get('[data-testid="header-title"]').should('contain', 'Demo Midtrans');
  });
});