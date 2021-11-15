/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Login", () => {
  it("should login successfully", () => {
    cy.visit("http://localhost:3000/sign-in");

    cy.get("input[placeholder=e-mail]").type("a@a.com");
    cy.get("input[placeholder=password").type("123456a!");
    cy.contains("Sign In").click();

    cy.url().should("equal", "http://localhost:3000/products");
  });

  it("should show error message for invalid params", () => {
    cy.visit("http://localhost:3000/sign-in");

    cy.get("input[placeholder=e-mail]").type("a@a.com");
    cy.get("input[placeholder=password").type("123456a!a");
    cy.contains("Sign In").click();

    cy.contains("Invalid e-mail or password!").should("be.visible");
  });
});
