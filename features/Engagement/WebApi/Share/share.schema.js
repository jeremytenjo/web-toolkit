import { object, string } from 'yup'

const validateAgainstshareSchema = async ({ ...values }) => {
  const shareSchema = object().shape({
    title: string(),
    text: string(),
    url: string(),
  })

  return await shareSchema.isValid({
    ...values,
  })
}

export default validateAgainstshareSchema
