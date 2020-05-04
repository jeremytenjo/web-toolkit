import typographyResets from '../typography/resets'
import colorVars from '../colors/vars'
import selection from '../browser/selection'
import body from '../browser/body'
import boxShadows from '../../../components/theme/shadow'
import typography from '../typography/index.css'
import spacing from '../spacing'
import transitions from '../transitions'

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
