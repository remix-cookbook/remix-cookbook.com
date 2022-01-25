import './commands';

Cypress.on('uncaught:exception', err => {
  // Disregard error related to utteranc.es as we can't do anything about it
  if (err.message.includes('insertAdjacentHTML')) {
    return false;
  }
  return true;
});
