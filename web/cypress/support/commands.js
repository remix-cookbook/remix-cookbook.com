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
