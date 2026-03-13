Feature: Buscar profissional de saúde

  Scenario: Buscar profissional por especialidade
    Given que o usuário está logado
    When ele digita "psicólogo" no campo de busca
    And clica em buscar
    Then o sistema deve listar profissionais disponíveis