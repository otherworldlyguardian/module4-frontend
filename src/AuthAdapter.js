const base_url = 'http://localhost:3000/api/v1/'

class AuthAdapter {

  static login (loginParams) {
    return fetch(base_url + 'login', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    })
    .then(resp => resp.json())
  }

  static currentUser () {
    return fetch(base_url + 'me', {
      headers: headers(),
    })
    .then(resp => resp.json())
  }

}

function headers() {
  return {
    'Content-Type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}

export default AuthAdapter
