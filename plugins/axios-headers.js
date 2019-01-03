export default ({ $axios, store }) => {
  $axios.interceptors.request.use(request => {
    if (store.getters['auth/loggedIn']) {
      request.headers.common['X-NAPP-API-KEY'] =
        store.state.auth.currentAccount.api_key
      request.headers.common['X-NAPP-ACCOUNT'] =
        store.state.auth.currentAccount.identifier
    }

    // request.headers.common['X-NAPP-DEVICE-ID'] = 'unique-device-id-by-uuid'

    request.headers.common['Accept'] = 'application/json'
    request.headers.common['Content-Type'] = 'application/json'
    request.headers.common['Accept-Language'] = 'en'
    request.headers.common['X-NAPP-APP-ID'] = 'unified'

    return request
  })
}
