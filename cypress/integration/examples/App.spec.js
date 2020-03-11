describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('opens with App Bar title', () => {
    cy.visit ('/');
    cy.get('[data-cy=AppTopBar]').should('contain', 'Thrift Shift');
  });

  it('shows Your Item in side list when menu button clicked', () => {
    cy.visit ('/');
    cy.get('[data-cy=MenuButton]').click();
    cy.get('[data-cy=SideList]').should('contain' ,'Your Items');
  });

});