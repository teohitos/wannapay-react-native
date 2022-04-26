import { createStore } from 'redux'

const initialState = {
  currentPage: 'store'
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      console.log( {...state, ...rest } )
      return {...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store