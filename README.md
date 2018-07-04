# karma-webpack-failed-compilation-example

`karma-webpack` doesn't play well if you use `bail: true` configuration option.
This repository is a minimal project that is affected.

## How to use?

1. Install dependencies
```
npm i
```

2. Run tests
```
npm test
```

3. See the error code is 0
```
echo $?
```


4. Repeat steps 1-3 with [bail](https://github.com/ertrzyiks/karma-webpack-failed-compilation-example/blob/759c48e53707ee8b6b7cb577a4ed56cf442d400f/karma.conf.js#L15)
option set to false
