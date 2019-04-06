Feature: Validar las credenciales de ingreso

   @credencialesInvalidas
   Scenario Outline: Quiero ingresar credenciales invalidas
   Given Ingresare a la pagina
   When  Ingresare un "<usuario>" y "<contraseña>" invalidos
   Then Me mostrara 'Usuario y/o contraseña incorrectas, favor de verificar'

    Examples:
    | usuario | contraseña | 
    | Noerm@abc.com  | 123456  | 
    | Noerm.123@Yopmail.com  | Hola123  | 

   @credencialesCorrectas
   Scenario: Quiero ingresar credenciales validas
   Given Ingresare a la pagina con credenciales validas
   When  Ingresare un usuario "testomator@amplemind.com"  y contraseña "12345" validos
   Then debere ingresar a la pantalla de home y mostrar mensaje de "Inicio"

