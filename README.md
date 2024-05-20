# TypeScript

### ¿Que es?

TypeScript es un lenguaje de programación creado por Microsoft en 2012. Se basa en JavaScript, pero añade funcionalidades como el tipado estático, que permite detectar errores de compilación antes de ejecutar el código. Esto se traduce en un código más robusto, confiable y fácil de mantener, especialmente en proyectos grandes y complejos.

### Beneficios de usar TypeScript

- Tipado estático: TypeScript permite definir tipos para variables, funciones y objetos, lo que ayuda a detectar errores de compilación antes de ejecutar el código. Esto reduce la cantidad de errores en tiempo de ejecución y mejora la calidad general del código.

- Mayor mantenibilidad: El tipado estático también facilita la comprensión y modificación del código, ya que proporciona información adicional sobre el tipo de datos que se espera en cada punto del programa.

- Refactoring seguro: TypeScript permite realizar cambios en el código con mayor confianza, ya que el compilador verifica que los cambios no introduzcan nuevos errores de tipo.

- Herramientas de desarrollo mejoradas: TypeScript ofrece soporte para herramientas de desarrollo como IntelliSense y refactoring, que pueden mejorar la productividad del desarrollador.

- Compilación a JavaScript: El código TypeScript se compila a JavaScript puro, lo que significa que se puede ejecutar en cualquier navegador o entorno que soporte JavaScript.

### Sintaxis

La sintaxis de TypeScript es muy similar a la de JavaScript, con algunas adiciones para el tipado estático. Por ejemplo, para declarar una variable con tipo numérico, se utiliza la siguiente sintaxis:

```ts
let nombre: string = "Juan";
let edad: number = 30;
```

### Tipos de datos

TypeScript ofrece una amplia gama de tipos de datos, incluyendo:

#### Primitivos

```ts
//Primitives
let nombre: string = "Juan";
let edad: number = 30;
let isChild: boolean = true;

//Multiples types
let value: string | undefined | null = null;
value = "hello";
value = undefined;
```

#### No-Primitivos

```ts
//Obj
const car: { type: string; year: number } = {
  type: "Toyota",
  year: 2000,
};

const carNull: { type?: string; year?: number } = {};

//Array
const names: string[] = [];
const ages: number[] = [];
const boleans: boolean[] = [];
const ages2: (number | null)[] = [];
```

#### Personalizados

```ts
/*
Los enums (enumeraciones) en TypeScript son un tipo de dato especial que 
permite definir un conjunto de constantes con nombres asociados. Se utilizan 
para representar valores relacionados que no cambian durante la ejecución del programa.
*/
enum DiaSemana {
  Domingo,
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
}

let diaActual: DiaSemana = DiaSemana.Miercoles;

console.log(`El día actual es: ${DiaSemana[diaActual]}`);

/*
  Las interfaces en TypeScript definen la forma que deben tener los objetos. 
  Especifican las propiedades que un objeto debe tener y sus tipos de datos, 
  pero no implementan la funcionalidad del objeto
*/

interface Persona {
  nombre: string;
  edad: number;
  presentarse: () => void; // Función que imprime información de la persona
}

/*
Los type aliases en TypeScript son alias para tipos de datos existentes. 
Se utilizan para crear nombres más cortos o descriptivos para tipos complejos 
o para crear nuevos tipos a partir de tipos existentes.
*/

type ID = number;
let personaID: ID = 123;
```

### Clases

```ts
class Persona {
  private nombre: string;
  private edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}
```

let persona1 = new Persona("Juan", 30);
persona1.presentarse();

## Referencias

[TypeScript](https://www.typescriptlang.org/)
[TypeScript - VSCode](https://code.visualstudio.com/docs/typescript/typescript-tutorial)
