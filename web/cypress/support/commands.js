Cypress.Commands.add('authenticatedVisit', async () => {
  // TODO find a way to serialize and store cookie
  cy.reload();
});

Cypress.Commands.add('assertInternalLink', label => {
  return cy
    .contains(label)
    .should('not.have.attr', 'target', '_blank')
    .should('not.have.attr', 'rel', 'noopener noreferrer');
});

Cypress.Commands.add('assertExternalLink', label => {
  return cy
    .contains(label)
    .should('have.attr', 'target', '_blank')
    .should('have.attr', 'rel', 'noopener noreferrer');
});

Cypress.Commands.add('byTestId', testId => {
  return cy.get(`[data-testid="${testId}"]`);
});

Cypress.Commands.add('visitPost', () => {
  cy.contains('Does Remix impose a project').click();
});
