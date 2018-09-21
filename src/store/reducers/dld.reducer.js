import update from 'immutability-helper'
import { dldActions } from '../actions/dld.actions'

const initialState = {
  messages: []
}

function dldReducer(state = initialState, action) {
  switch (action.type) {
    case dldActions.DLD_MESSAGE_ADD:
      return update(state, {
        messages: {$push: [action.message]}
      })
    case dldActions.DLD_MESSAGE_EDIT:
      return update(state, {
        messages: {$set: [
          ...state.messages.slice(0, action.messageIndex),
          action.message,
          ...state.messages.slice(action.messageIndex + 1)
        ]}
      })
    case dldActions.DLD_MESSAGE_DELETE:
      return update(state, {
        messages: {$set: [
          ...state.messages.slice(0, action.messageIndex),
          ...state.messages.slice(action.messageIndex + 1)
        ]}
      })
    case dldActions.DLD_WIPE:
      return update(state, {
        messages: {$set: []}
      })
    default:
      return state
  }
}

export default dldReducer