<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <title>Login - FoodThrift</title>
  <link rel="stylesheet" href="static/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&amp;display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Biryani&amp;display=swap">
  <link rel="stylesheet" href="static/fonts/fontawesome-all.min.css">
</head>
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
                        id="exampleInputEmail"
                        class="form-control form-control-user"
                        type="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        name="email"
                      >
                    </div>
                    <div class="mb-3">
                      <input
                        id="exampleInputPassword"
                        class="form-control form-control-user"
                        type="password"
                        placeholder="Password"
                        name="password"
                      >
                    </div>
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

<script src="static/js/jquery.min.js"></script>
<script src="static/js/bootstrap.min.js"></script>
<script src="static/js/bs-init.js"></script>
<script src="static/js/theme.js"></script>
