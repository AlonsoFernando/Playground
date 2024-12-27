describe("Textarea", () => {
  beforeEach(() => {
    cy.goHome();
  });

  it("should input text into the textarea", () => {
    cy.doLogin();

    cy.goTo("/textarea", "Textarea");

    cy.get('textarea[name="message"]')
      .type("Boas vindas ao Cypress Skills.")
  });
});
