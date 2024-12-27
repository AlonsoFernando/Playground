describe("Input Fields", () => {
  beforeEach(() => {
    cy.goHome();
  });

  it("should input text into the fields", () => {
    cy.doLogin();

    cy.get('nav a[href="/input-fields"]').click();
    cy.contains("h2", "Input Fields").should("be.visible");

    cy.get('[data-cy="fullname"]').type("Fernando Papito");
    cy.get('[name="email"]').type("fernando@papito.dev");
    cy.get('input[name="number"]').type("2024");
    cy.get('input[name="date"]').type("2024-12-01");
  });
});
