import typographyResets from '../typography/typography.resets'
import colorVars from '../colors/colors.vars'
import selection from '../browser/browser.selection'
import body from '../browser/browser.body'
import boxShadows from '../../../src/theme/shadow/shadow.index'
import typography from '../typography/typography.css'
import spacing from '../spacing/spacing.index'
import transitions from '../transitions/transitions.index'

export default `
<style type="text/css">
${typographyResets}
${typography}
${boxShadows}
${body}
${selection}
${colorVars}
${spacing}
${transitions}
</style>
`
