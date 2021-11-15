/* eslint-disable no-undef */
/// <reference types="cypress" />
import faker from "faker-br";

describe("SignUp", () => {
  it("should sign up successfully", () => {
    cy.visit("http://localhost:3000/sign-up");

    cy.get("input[placeholder=e-mail]").type(faker.internet.email());
    cy.get("input[placeholder=name").type(faker.name.findName());
    cy.get("input[placeholder=cpf]").type(faker.br.cpf());
    cy.get("input[placeholder=phone").type(
      faker.phone.phoneNumber("#########")
    );
    cy.get("input[placeholder=password]").type("12a!3456");
    cy.get("input[placeholder='confirm password'").type("12a!3456");
    cy.contains("Sign Up").click();

    cy.url().should("equal", "http://localhost:3000/sign-in");
  });

  it("should show error message for existing email", () => {
    cy.visit("http://localhost:3000/sign-up");

    cy.get("input[placeholder=e-mail]").type("a@a.com");
    cy.get("input[placeholder=name").type(faker.name.findName());
    cy.get("input[placeholder=cpf]").type(faker.br.cpf());
    cy.get("input[placeholder=phone").type(
      faker.phone.phoneNumber("#########")
    );
    cy.get("input[placeholder=password]").type("12a!3456");
    cy.get("input[placeholder='confirm password'").type("12a!3456");
    cy.contains("Sign Up").click();

    cy.contains("Invalid email").should("be.visible");
  });

  it("should show error message for not matching passwords", () => {
    cy.visit("http://localhost:3000/sign-up");

    cy.get("input[placeholder=e-mail]").type(faker.internet.email());
    cy.get("input[placeholder=name").type(faker.name.findName());
    cy.get("input[placeholder=cpf]").type(faker.br.cpf());
    cy.get("input[placeholder=phone").type(
      faker.phone.phoneNumber("#########")
    );
    cy.get("input[placeholder=password]").type("12a!3456");
    cy.get("input[placeholder='confirm password'").type("92a!3456");
    cy.contains("Sign Up").click();

    cy.contains("Password does not match").should("be.visible");
  });
});
