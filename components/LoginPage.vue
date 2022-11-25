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
export default {
  // name: 'Login'
  data () {
    return {
      email: 'admin@foodthrift.com',
      password: 'foodthriftAdmin'
    }
  },
  login () {
    if (this.emailLogin === '' || this.passwordLogin === '') {
      this.emptyFields = true
    } else {
      alert('You are now logged in')
    }
  },
  submitForm (email, password) {
    this.$emit('submit', { email, password })
    alert(JSON.stringify(this.form))
  },
  onreset (event) {
    this.form.email = ''
    this.form.password = ''
    this.show = false
    this.$nextTick(() => {
      this.show = true
    })
  }
}
</script>
