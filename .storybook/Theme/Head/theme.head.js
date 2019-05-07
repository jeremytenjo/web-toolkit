const { typographyResets } = require('../Typography/typography.resets')
const { colorVars } = require('../Colors/colors.vars')
const { selection } = require('../Browser/browser.selection')
const { body } = require('../Browser/browser.body')
const { boxShadows } = require('../Shadows/boxShadows')
const { typography } = require('../Typography/typography.css')

exports.headCss = `
<style type="text/css">
${typographyResets}
${typography}
${boxShadows}
${body}
${selection}
${colorVars}
</style>
`
