describe("Login", () => {
  it("should login successfully", () => {
    cy.visit("http://localhost:3000/sign-in");

    cy.get("input[placeholder=e-mail]").type("a@a.com");
    cy.get("input[placeholder=password").type("123456a!");
    cy.contains("Sign In").click();

    cy.url().should("equal", "http://localhost:3000/products");
  });
});
