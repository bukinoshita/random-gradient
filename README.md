# random-gradient [![Build Status](https://travis-ci.org/bukinoshita/random-gradient.svg?branch=master)](https://travis-ci.org/bukinoshita/random-gradient)

> Generate beautiful random gradients

<br/>
<img src="https://cldup.com/S4sruO8J60.png" width="600"/>

## Install
```
$ npm install --save random-gradient
```

## Usage
```js
// with React

import gradient from 'random-gradient'

export default ({ name }) => {
  const bgGradient = { background: gradient(name) }

  return (
    <div style={bgGradient}>
      <h2>{name}</h2>
    </div>
  )
}
```

## API
### randomGradient(uid)

#### uid
Type: `string`<br/>
Required

## Related

- [hash-avatar](https://github.com/bukinoshita/hash-avatar) — :rainbow: Hash avatar algorithm
- [react-hash-avatar](https://github.com/bukinoshita/react-hash-avatar) — React hash avatar algorithm

## License
[MIT](https://github.com/bukinoshita/random-gradient/blob/master/LICENSE) &copy; Bu Kinoshita
