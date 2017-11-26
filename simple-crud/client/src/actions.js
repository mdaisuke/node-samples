export const CHANGE_NAME = 'CHANGE_NAME'
export const CHANGE_AGE = 'CHANGE_AGE'
export const INITIALIZE_FORM = 'INITIALIZE_FORM'

export const changeName = name => ({
  type: CHANGE_NAME,
  name
})

export const changeAge = age => ({
  type: CHANGE_AGE,
  age
})

export const changeForm = () => ({
  type: INITIALIZE_FORM
})
