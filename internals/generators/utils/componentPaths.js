/**
 * componentPaths
 *
 * Get appropriate component paths
 */


const path = require('path');


function getComponentPaths(type) {
  const rootPath = `../../app/components/${type}/{{properCase name}}`
  const templPath = `./${type}`
  function withRoot(filePath) {
    const fileName = path.basename(filePath)
    const fileTempl = path.join(templPath, `${fileName}.hbs`)
    return {
      type: 'add',
      path: path.join(rootPath, filePath),
      templateFile: fileTempl,
      abortOnFail: true,
    }
  }
  return withRoot
}

module.exports = getComponentPaths
