# case.js [![Build status](https://travis-ci.com/alcidesqueiroz/case.js.svg?branch=master)](https://travis-ci.com/alcidesqueiroz/case.js)

> 🔠 A lightweight library for converting between different cases, such as camel, kebab, snake, pascal and others.

<img src="https://gist.githubusercontent.com/alcidesqueiroz/c3d6c6edc559194bc37a2c464a21768d/raw/f4e8a09b1133cc6aea422992a35f2871da1228fa/case.js.png" width="300" />

Case.js is a small library that allows you to convert strings between different cases.

## Install

With npm:

```
$ npm install case.js
```

With Yarn:

```
$ yarn add case.js
```

## Usage

### Converting

To convert between cases, just call the target case's method, supplying the string to be converted as an argument.

```javascript
import cs from 'case.js';

cs.camel('THIS_IS_AN_EXAMPLE_PHRASE'); // => 'thisIsAnExamplePhrase'
cs.camel('this-is-an-example-phrase'); // => 'thisIsAnExamplePhrase'
cs.camel('this is an example phrase'); // => 'thisIsAnExamplePhrase'

cs.constant('thisIsAnExamplePhrase'); // => 'THIS_IS_AN_EXAMPLE_PHRASE'
cs.constant('this-is-an-example-phrase'); // => 'THIS_IS_AN_EXAMPLE_PHRASE'
cs.constant('this_is_an_example_phrase'); // => 'THIS_IS_AN_EXAMPLE_PHRASE'

cs.dot('THIS_IS_AN_EXAMPLE_PHRASE'); // => 'this.is.an.example.phrase'
cs.dot('ThisIsAnExamplePhrase'); // => 'this.is.an.example.phrase'
cs.dot('this is an example phrase'); // => 'this.is.an.example.phrase'

cs.kebab('ThisIsAnExamplePhrase'); // => 'this-is-an-example-phrase'
cs.kebab('this_is_an_example_phrase'); // => 'this-is-an-example-phrase'
cs.kebab('this is an example phrase'); // => 'this-is-an-example-phrase'

cs.pascal('thisIsAnExamplePhrase'); // => 'ThisIsAnExamplePhrase'
cs.pascal('THIS_IS_AN_EXAMPLE_PHRASE'); // => 'ThisIsAnExamplePhrase'
cs.pascal('this.is.an.example.phrase'); // => 'ThisIsAnExamplePhrase'

cs.snake('thisIsAnExamplePhrase'); // => 'this_is_an_example_phrase'
cs.snake('THIS_IS_AN_EXAMPLE_PHRASE'); // => 'this_is_an_example_phrase'
cs.snake('this is an example phrase'); // => 'this_is_an_example_phrase'

cs.space('this.is.an.example.phrase'); // => 'this is an example phrase'
cs.space('this-is-an-example-phrase'); // => 'this is an example phrase'
cs.space('this_is_an_example_phrase'); // => 'this is an example phrase'
```

### Detecting

You can check whether a string is of a certain case in two different ways:

```javascript
import cs from 'case.js';

cs.is.camel('thisIsAnExamplePhrase');
cs.is.constant('THIS_IS_AN_EXAMPLE_PHRASE');
cs.is.dot('this.is.an.example.phrase');
cs.is.kebab('this-is-an-example-phrase');
cs.is.pascal('ThisIsAnExamplePhrase');
cs.is.snake('this_is_an_example_phrase');
cs.is.space('this is an example phrase');
```

Or:

```javascript
import cs from 'case.js';

cs.is('thisIsAnExamplePhrase', 'camel');
cs.is('THIS_IS_AN_EXAMPLE_PHRASE', 'constant');
cs.is('this.is.an.example.phrase', 'dot');
cs.is('this-is-an-example-phrase', 'kebab');
cs.is('ThisIsAnExamplePhrase', 'pascal');
cs.is('this_is_an_example_phrase', 'snake');
cs.is('this is an example phrase', 'space');
```

## Author

Alcides Queiroz Aguiar

- Website: [www.alcidesqueiroz.com](https://www.alcidesqueiroz.com)
- Medium: [@alcidesqueiroz](https://medium.com/@alcidesqueiroz)
- Twitter: [alcidesqueiroz](https://twitter.com/alcidesqueiroz)
- Behance [alcidesqueiroz](https://behance.net/alcidesqueiroz)
- Stack Overflow: [http://is.gd/aqanso](http://stackoverflow.com/users/1295666/alcides-queiroz-aguiar)
- E-mail: alcidesqueiroz &lt;at&gt; gmail

## License

This code is free to use under the terms of the [MIT License](LICENSE.md).
