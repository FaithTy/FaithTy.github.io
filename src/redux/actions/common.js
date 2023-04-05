export function Requested(payload) {
  console.log('requested.....')
  return {
    type: 'REQUESTED',
    payload
  }
}