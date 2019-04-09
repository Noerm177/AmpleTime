@ClienteNuevo
Feature: Validar el catalogo de clientes
   Validar que segun los permisos del usuario, sea capaz de dar de alta nuevos clientes

    Scenario Outline: Como admin quiero crear un cliente
    Given Entre al catalogo de clientes
    When Presione el boton de nuevo cliente
    And Rellene el formulario de cliente los campos "<nombre>", "<description>" y Moneda
    And Presione el boton guardar
    Then Un cliente sera creado

        Examples:
        | nombre | description | 
        | Nombre de usuario  | Esta es una description del campo  | 