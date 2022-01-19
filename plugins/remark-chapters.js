const visit = require('unist-util-visit')
const h = require('hastscript')

// This plugin is just an example! You can handle directives however you please!
module.exports = function () {
  return transform

  function transform (tree) {
    visit(tree, ['textDirective', 'leafDirective', 'containerDirective'], ondirective)
  }

  function ondirective (node) {
    const data = node.data || (node.data = {})
    const hast = h(node.name, node.attributes)

    data.hName = hast.tagName
    data.hProperties = hast.properties
  }
}
