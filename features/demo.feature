Feature: Validar las credenciales de ingreso


   Scenario Outline: Quiero ingresar credenciales invalidas
   Given Ingresare a la pagina
   When  Ingresare un "<usuario>" y "<contraseña>" invalidos
   Then debere ingresar a la pantalla de home

    Examples:
    | usuario | contraseña | 
    | Noerm@abc.com  | 123456  | 
    | Noerm.123@Yopmail.com  | Hola123  | 

   Scenario: Quiero ingresar credenciales validas
   Given Ingresare a la pagina
   When  Ingresare un usuario y contraseña validos
   Then debere ingresar a la pantalla de home