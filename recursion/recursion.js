var _ = require('lodash')

function getDependencies(tree) {
  if (_.isEmpty(tree.dependencies)){
    return []
  } else {
    var resultUnflatten = _.chain(tree.dependencies)
      .map((dependency, key) => {
        var tab = []
        console.log('STEP 1', tab, '\n')
        var nameCalculated = `${key}@${dependency.version}`
        console.log('nameCalculated',nameCalculated)
        tab.push(nameCalculated)
        console.log('STEP 2', tab, '\n')

        var insideDep = _.chain(dependency.dependencies)
          .map((dependency, key) => {
            return `${key}@${dependency.version}`
          })
          .value()
        console.log('insideCalculated', insideDep)
        var tabConcat = _.concat(tab,insideDep)
        console.log('STEP 3', tabConcat, '\n')
        return tabConcat
      })
      .value()

    console.log('UNFLATTEN', resultUnflatten, '\n')
    var resultFlatten = _.flatten(resultUnflatten)
    console.log('FLATTEN', resultFlatten, '\n')
    var resultFlattenSorted = _.sortBy(resultFlatten)
    console.log('FLATTEN SORTED', resultFlattenSorted, '\n')

    return resultFlattenSorted

  }
}

module.exports = getDependencies
