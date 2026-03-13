# 🧪 QA Challenge – Testes Funcionais e Automatizados

Este repositório contém a documentação e implementação dos testes realizados para validação da plataforma, incluindo testes funcionais, testes automatizados, testes de performance, acessibilidade e responsividade.

O objetivo deste projeto é garantir a qualidade da aplicação, identificar possíveis falhas e propor melhorias para a experiência do usuário.

---

# 📌 Estrutura do Projeto

qa-challenge/

├── cypress/
│
├── e2e/
│ │
│ ├── cadastro.feature
│ │
│ ├── busca-profissional.feature
│ │
│ └── recuperacao-senha.feature
│
├── step-definitions/
│ │
│ └── cadastro.js
│
├── support/
│
├── tests-manual/
│
│ └── casos-de-teste.md
│
├── performance/
│
│ └── lighthouse-report.md
│
├── accessibility/
│
│ └── accessibility-report.md
│
├── responsiveness/
│
│ └── responsive-test.md
│
├── bugs/
│
│ └── bug-report.md
│
└── README.md

---

# 🧪 Estratégia de Testes

A estratégia de testes adotada neste projeto segue boas práticas de QA e está baseada em diferentes níveis de validação:

### Testes realizados

- Testes Funcionais Manuais
- Testes Automatizados End-to-End (E2E)
- Testes de Performance
- Testes de Acessibilidade
- Testes de Responsividade
- Registro e análise de Bugs

Essa abordagem permite validar tanto o comportamento funcional quanto aspectos importantes de experiência do usuário e qualidade técnica da aplicação.

---

# 📱 Testes Funcionais (Mobile)

Foram criados cenários de testes utilizando **linguagem Gherkin (BDD)** para validar os principais fluxos da aplicação:

### Fluxos testados

1️⃣ Cadastro da pessoa usuária  
2️⃣ Pós-cadastro e busca de profissional  
3️⃣ Contato com profissional de saúde  
4️⃣ Recuperação de senha

Os cenários estão organizados na pasta:
