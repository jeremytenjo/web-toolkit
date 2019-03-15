import ShareSchema from '../share.schema'

const shareFunction = async (data) => {
  let dataIsValid = null
  let errorMessage_Not_Supported = 'Fail: Web Share is not supported'
  let errorMessage_Web_Share_Fail = 'Fail: Sorry there was an issue with webshare please open big-web-features'
  let errorMessage_Schema_Fail = 'Fail: Data has to be object {title, text, url} all strings'

  if (!navigator.share) return { errorMessage: errorMessage_Not_Supported }

  dataIsValid = await ShareSchema(data)
  if (!dataIsValid) return { errorMessage: errorMessage_Schema_Fail }

  try {
    await navigator.share(data)
    return { success: true }
  } catch (error) {
    return { errorMessage: `${errorMessage_Web_Share_Fail} : ${error}` }
  }
}

export default shareFunction
