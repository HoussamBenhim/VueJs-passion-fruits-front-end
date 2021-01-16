export default ({ store, route, app: { router }, redirect }) => {
  const loggedIn = store.getters['loginModule/isLogged']
  const protectedRoute = route.meta.map((meta) => {
    if (meta.auth && meta.auth.authorization) {
      return meta.auth.authorization
    }
  })[0]
  if (protectedRoute && !loggedIn) {
    redirect('/')
  }
}
