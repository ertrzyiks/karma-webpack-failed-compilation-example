describe('dd', function () {
  const testsContext = require.context('./components', true, /_test/)
  testsContext.keys().forEach(testsContext)
})

