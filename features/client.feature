@Catalogo_Clientes
Feature: Validar el catalogo de clientes
   Validar que segun los permisos del usuario, sea capaz de dar de alta nuevos clientes

    Scenario Outline: Como admin quiero crear un cliente
    Given Entre al catalogo de clientes como admin
    When Presione el boton de nuevo cliente
    And Rellene el formulario de cliente los campos "<nombre>", "<description>" y Moneda
    And Presione el boton guardar
    Then Un cliente sera creado

        Examples:
        | nombre | description | 
        | Noerm automated | Esta es una description del campo  | 

    @Campos_vacios
    Scenario Outline: Quiero comprobar campo moneda como obligatorio
    Given Estoy dentro del catalogo de cliente
    When Presione sobre el boton de nuevo cliente
    And Rellene  los campos "<nombre>", "<description>"
    And Deje el campo Moneda vacio
    And Presione sobre  guardar
    Then El cliente no sera creado

        Examples:
        | nombre | description | 
        | Cliente sin Moneda| Esta es una description del campo  |
    

