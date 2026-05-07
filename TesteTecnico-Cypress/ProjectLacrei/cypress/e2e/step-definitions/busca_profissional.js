import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que o usuário está logado na plataforma", () => {
  cy.visit("/login");

  cy.get('input[name="email"]').type("usuario@email.com");
  cy.get('input[name="password"]').type("Senha123");

  cy.contains("Entrar").click();
});

When("ele acessa a página de busca de profissionais", () => {
  cy.visit("/buscar-profissional");
});

When('digita "psicólogo" no campo de busca', () => {
  cy.get('input[name="search"]').type("psicólogo");
});

When("clica no botão buscar", () => {
  cy.contains("Buscar").click();
});

Then("o sistema deve exibir uma lista de profissionais disponíveis", () => {
  cy.get(".card-profissional").should("be.visible");
});