<template class="bg-gradient-primary">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-9 col-lg-12 col-xl-10">
        <div class="card shadow-lg o-hidden border-0 my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-6 d-none d-lg-flex">
                <div class="flex-grow-1 bg-login-image" />
              </div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h4 class="text-dark mb-4">
                      Welcome Back!
                    </h4>
                  </div>
                  <form class="user">
                    <div class="mb-3">
                      <input
                        id="email"
                        class="form-control form-control-user"
                        type="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        name="email"
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        id="password"
                        class="form-control form-control-user"
                        type="password"
                        placeholder="Password"
                        name="password"
                      >
                    </div>
                    <NuxtLink to="/dashboard">
                      <button
                        class="btn btn-primary d-block btn-user w-100"
                        type="submit"
                        style="
                        background: var(--bs-btn-hover-bg);
                        color: var(--bs-btn-hover-color);
                        border-radius: 15px;"
                      >
                        Login
                      </button>
                    </NuxtLink>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { firebase } from 'firebase/app'
/**
 * import 'firebase/auth'
import * as firebase from 'firebase'

const email = 'admin@foodthrift.com'
const password = 'foodthriftAdmin'

firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
  // login success
  router.push('/dashboard')
}).catch((error) => {
  // errors
  // console.error(error)
  if (error.email === 'auth/user-not-found') {
    // user not found
    alert('Invalid email address')
  } else if (error.password === 'auth/wrong-password') {
    // wrong password
    alert('Invalid password')
  }
})
 */
// import 'firebase/auth'
// import * as firebase from 'firebase'

export default {
  // name: 'Login'
  data () {
    return {
      email: '',
      password: ''
    /**
      *  snackbar: false,
      snackbarText: 'NO error message',
      auth: {
      }
      */
    }
  }
/**
 *   methods: {
    login () {
      const formValidation = this.$refs.form.validate()

      if (formValidation) {
        this.$fire.auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            const authUser = {
              uid: userCredential.user.uid,
              email: userCredential.user.email
            }
            this.$store
              .dispatch('onAuthStateChangedAction', {
                authUser
              })
              .then(() => {
                this.$router.replace('/profile')
              })
              .catch((error) => {
                // console.log('User State error', error)
                this.snackbar = true
                this.errorMessage = error.message
              })
          })
          .catch((error) => {
            // console.log('Login error', error)
            this.snackbar = true
            this.errorMessage = error.message
          })
      }
    }

  }
 */
}
</script>
