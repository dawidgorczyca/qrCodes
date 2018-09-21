export const dldActions = {
  DLD_MESSAGE_ADD: 'DLD/MESSAGE/ADD',
  DLD_MESSAGE_DELETE: 'DLD/MESSAGE/DELETE',
  DLD_MESSAGE_EDIT: 'DLD/MESSAGE/EDIT',
  DLD_WIPE: 'DLD/WIPE'
}

const {
  DLD_MESSAGE_ADD,
  DLD_MESSAGE_DELETE,
  DLD_MESSAGE_EDIT,
  DLD_WIPE
} = dldActions

export const dldWipe = () => ({
  type: DLD_WIPE
})

export const dldMessageAdd = (message) => ({
  type: DLD_MESSAGE_ADD,
  message
})

export const dldMessageEdit = (message, messageIndex) => ({
  type: DLD_MESSAGE_EDIT,
  message,
  messageIndex
})

export const dldMessageDelete = (messageIndex) => ({
  type: DLD_MESSAGE_DELETE,
  messageIndex
})