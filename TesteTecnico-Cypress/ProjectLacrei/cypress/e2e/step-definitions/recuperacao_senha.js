import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário está na tela de login", () => {
  cy.visit("https://paciente-staging.lacreisaude.com.br/");
});

When('ele clica em "Esqueci minha senha"', () => {
  cy.contains("Esqueci minha senha").click();
});

When("informa um email cadastrado", () => {
  cy.get("#email").type("gabriel@email.com");
  cy.get("button").contains("Enviar").click();
});

Then("o sistema deve enviar um email de recuperação", () => {
  cy.contains("Email de recuperação enviado");
});