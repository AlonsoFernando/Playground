describe("Tags", () => {
  beforeEach(() => {
    cy.goHome();
    cy.doLogin();
    cy.goTo("/tags", "Tags");
  });

  it("Deve adicionar tags", () => {
    const tags = ["cypress", "e2e", "teste"];
    tags.forEach((tag) => {
      cy.get(".new-tag").type(`${tag}{enter}`).should("have.value", "");
      cy.wait(500); // think time
    });
    tags.forEach((tag) => {
      cy.get(".tag-input").should("contain", tag);
    });
  });
});
