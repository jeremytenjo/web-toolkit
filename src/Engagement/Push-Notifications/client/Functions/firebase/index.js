import firebase from 'firebase/app'
import 'firebase/messaging'

const messaging = firebase.messaging()

messaging.usePublicVapidKey(
  'BHlOUk7fnlpYBMFaEHNckPkosvoUoLULGg0uAVLyKxepB6wxBqai_cK0S0LithVoKSLQANnENNdStvUorfFJGcc',
)

export default () => {}
