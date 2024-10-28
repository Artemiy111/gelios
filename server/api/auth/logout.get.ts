export default defineEventHandler((event) => {
  deleteCookie(event, 'userId')
})
