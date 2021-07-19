# typed-emitter

Typed emitter providing fully typed methods of the base EventEmitter class

## Installation

To install run `npm i @jpbberry/typed-emitter`

## Usage

To use the typed-emitter, you can do so like

```ts
import { EventEmitter } from '@jpbberry/typed-emitter'

// a type
interface MyInterface {
  hello: boolean
}

// a class that you want to have typed emitters for
class MyClass extends EventEmitter<{ hello: MyInterface }> { // generic type has the map of events
  // this will then make all the methods have proper typings for the hello event and it's type
  run () {
    this.emit('hello', /* Will be typed as MyInterface */ { hello: true })

    // this will error for example
    this.emit('hello', { hello: 'world!' })
  }
}

const my = new MyClass()

my.on('hello', (data) => { // will be typed as MyInterface
  data.hello // typed as boolean
})
```

## Adding multiple arguments

You can add multiple arguments by defining the property of the event to be an array, this will be spread as properties for the listener function etc.

For example

```ts
class MyClass extends EventEmitter<{ hello: [boolean, string] }> {
  run () {
    this.emit('hello', true, 'world!') // now the passed data will boolean, string
  }
}

const my = new MyClass()
my.on('hello', (one, two) => {
  one // boolean
  two // string
})
```

*Defining an array as something passed to the event just has to be a nested array like `{ hello: [string[]] }`*