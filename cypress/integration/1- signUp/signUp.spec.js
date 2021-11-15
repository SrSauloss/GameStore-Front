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
});
