import { storageRemove } from '../../../../Storage/FIrebase/Storage/storage.index'
import { firestoreRemove } from '../../../../Database/Firestore/firestore.index'

export default async (_userId, _fileId, _fileName, _collection) => {
  const userId = _userId || false
  const fileId = _fileId || false
  const collection = _collection || false
  const fileName = _fileName || false
  const files = ''

  if (userId && fileId && fileName && collection) {
    await storageRemove(userId, fileName)
    await firestoreRemove(userId, fileId, collection)

    return 'Success'
  } else {
    throw new Error(`Parameters with false need a value ${(files, fileId, fileName, collection)}`)
  }
}
