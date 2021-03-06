// If it's a private page and there's no payload, redirect.
export default async function (context) {
  const { store, redirect, route } = context
  const { auth } = store.state
  if (!auth.publicPages.includes(route.name) && !auth.payload) {
    return redirect('/login')
  }
  if (auth.forbiddenOnAuth.includes(route.name) && auth.payload) {
    return redirect('/')
  }
}
