import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de cadastro", () => {
  cy.visit("https://paciente-staging.lacreisaude.com.br/saude/paciente/cadastrar/");
});

When("preencho os dados válidos", () => {
  cy.get("#name").type("Gabriel");
  cy.get("#email").type("gabriel@email.com");
  cy.get("#password").type("123456");
});

When("clico em cadastrar", () => {
  cy.get("button").contains("Cadastrar").click();
});

Then("devo ver a mensagem de sucesso", () => {
  cy.contains("Cadastro realizado com sucesso");
});