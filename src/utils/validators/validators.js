export const required = (value) =>
  value || typeof value === 'number' ? undefined : 'Field is required'

export const maxLength = (max) => (value) =>
  value && value.length > max ? `Max length is ${max} symbols` : undefined
