// cypress/integration/payment.spec.js

describe('Payment Feature', () => {
    beforeEach(() => {
      cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
    });
  
    it('should successfully make a payment', () => {
      cy.payBill('Company A', 'Checking Account', '100');
    });
  });