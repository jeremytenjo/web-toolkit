import typographyResets from '../Typography/typography.resets'
import colorVars from '../Colors/colors.vars'
import selection from '../Browser/browser.selection'
import body from '../Browser/browser.body'
import boxShadows from '../../../src/Theme/Shadow/shadow.index'
import typography from '../Typography/typography.css'
import spacing from '../Spacing/spacing.index'
import transitions from '../Transitions/transitions.index'

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
