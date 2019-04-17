@Catalogo_Compañias
Feature: Validar la creacion de una compañia
    Validar que un usuario admin sea capaz de crear una compañia

    Scenario: Como admin quiero crear una compañia
    Given Entre al catalogo de compañia 
    When Presione el boton de crear compañia
    And Rellene el formulario
    Then Una compañia sera creada
