export default async function() {
  const pnSubscribe = () => {
    if ('PushManager' in window) {
    } else {
      return ''
    }
  }
  //   process.env.NODE_ENV === 'production' && pnSubscribe()
  pnSubscribe()
}
