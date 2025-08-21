describe('Blablabook - Homepage', () => {
  it('Should display Blablabook title', () => {
    cy.visit('http://localhost:3004')
    cy.viewport(1280, 800)
    cy.contains('BlablaBook')
  });
});
