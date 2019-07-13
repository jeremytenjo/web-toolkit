// https://gomakethings.com/how-to-serialize-form-data-with-vanilla-js/
const serialize = function(form) {
  // Setup our serialized data
  let formValues = {}

  // Loop through each field in the form
  for (let i = 0; i < form.elements.length; i++) {
    let selections = []
    let field = form.elements[i]
    // console.log(field)
    // console.log(field.type)
    // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
    if (
      !field.name ||
      field.disabled ||
      field.type === 'file' ||
      field.type === 'reset' ||
      field.type === 'submit' ||
      field.type === 'button'
    )
      continue

    // handle text, number, checkbox, radio fields
    if (
      field.type === 'text' ||
      field.type === 'number' ||
      (field.type !== 'checkbox' && field.type !== 'radio') ||
      field.checked
    ) {
      formValues[field.name] = field.value
    }

    // If a multi-select, get all selections
    if (field.type === 'select-multiple' || field.type === 'select-one') {
      for (let n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) continue
        selections.push(field.options[n].value)
      }
      formValues[field.name] = selections
    }
  }

  // check if all formValues are empty
  return formValues
}

export default serialize
