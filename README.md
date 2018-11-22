# Curso Angular - Idneo

# Sobre IDE
Para trabajar con Angular el mejor IDE que existe es __WebStorm__ de Jetbrains, este es de pago. 

Una alternativa gratuita es __VisualStudio Code__. Si se utiliza este editor es recomendable instalar el siguiente pack de extensiones:

https://marketplace.visualstudio.com/items?itemName=loiane.angular-extension-pack

# Estructura de un gran proyecto
* __app__
    * __core__ _[Module]_: contiene el nucleo lógico de la aplicación. Esto se compone de las clases o interficies que modelan los datos, _servicios_ transversales...

    * __shared__ _[Module]_: contiene los componentes, directivas, pipes... que son transversales en tods la apliación.

    * __section__ _[Module]_: contiene todas las secciones (páginas, vistas) que tendra la aplicación. Cada vista sera un modulo independiente e ira asociada a una url base.

    * __style__ _[Folder]_: contiene todos los estilos que seran  que son transversales en tods la apliación.


# Referencias útiles

Angular Schematics: https://github.com/angular/angular-cli/tree/master/packages/schematics/angular



