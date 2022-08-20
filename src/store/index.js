import { legacy_createStore as createStore } from 'redux'
import { appReducer } from './Reducer'

export const store = () => {
  const createdStore = createStore(appReducer)
  return createdStore 
}