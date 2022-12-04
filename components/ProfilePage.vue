<template>
  <div id="wrapper">
    <SideBar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <NavBar />
        <div class="container-fluid">
          <div style="margin: 7px;">
            <div class="row">
              <div class="col">
                <h3 class="text-dark mb-1" style="text-align: center;font-family: Biryani, sans-serif;font-weight: bold;padding: 9px;margin: 5px;">
                  PROFILE
                </h3>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-lg-4">
              <div class="card mb-3">
                <div class="card-body text-center shadow">
                  <img class="rounded-circle mb-3 mt-4" src="assets/img/dogs/image2.jpeg" width="160" height="160">
                  <div class="mb-3">
                    <button class="btn btn-primary btn-sm" type="button">
                      Change Photo
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="row mb-3 d-none">
                <div class="col">
                  <div class="card text-white bg-primary shadow">
                    <div class="card-body">
                      <div class="row mb-2">
                        <div class="col">
                          <p class="m-0">
                            Peformance
                          </p>
                          <p class="m-0">
                            <strong>65.2%</strong>
                          </p>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-rocket fa-2x" />
                        </div>
                      </div>
                      <p class="text-white-50 small m-0">
                        <i class="fas fa-arrow-up" />&nbsp;5% since last month
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card text-white bg-success shadow">
                    <div class="card-body">
                      <div class="row mb-2">
                        <div class="col">
                          <p class="m-0">
                            Peformance
                          </p>
                          <p class="m-0">
                            <strong>65.2%</strong>
                          </p>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-rocket fa-2x" />
                        </div>
                      </div>
                      <p class="text-white-50 small m-0">
                        <i class="fas fa-arrow-up" />&nbsp;5% since last month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="card shadow mb-3">
                    <div class="card-header py-3">
                      <p class="text-primary m-0 fw-bold">
                        User Settings
                      </p>
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="row">
                          <div class="col">
                            <div class="mb-3">
                              <label class="form-label" for="email"><strong>Email Address</strong></label><input id="email" class="form-control" type="email" placeholder="user@example.com" name="email">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="mb-3">
                              <label class="form-label" for="first_name"><strong>First Name</strong></label><input id="first_name" class="form-control" type="text" placeholder="John" name="first_name">
                            </div>
                          </div>
                          <div class="col">
                            <div class="mb-3">
                              <label class="form-label" for="last_name"><strong>Last Name</strong></label><input id="last_name" class="form-control" type="text" placeholder="Doe" name="last_name">
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <button class="btn btn-primary btn-sm" type="submit">
                            Save Settings
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="card shadow">
                    <div class="card-header py-3">
                      <p class="text-primary m-0 fw-bold">
                        Contact Settings
                      </p>
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="mb-3">
                          <label class="form-label" for="address"><strong>Address</strong></label><input id="address" class="form-control" type="text" placeholder="Sunset Blvd, 38" name="address">
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="mb-3">
                              <label class="form-label" for="city"><strong>City</strong></label><input id="city" class="form-control" type="text" placeholder="Los Angeles" name="city">
                            </div>
                          </div>
                          <div class="col">
                            <div class="mb-3">
                              <label class="form-label" for="country"><strong>Country</strong></label><input id="country" class="form-control" type="text" placeholder="USA" name="country">
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <button class="btn btn-primary btn-sm" type="submit">
                            Save&nbsp;Settings
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="bg-white sticky-footer">
        <div class="container my-auto">
          <div class="text-center my-auto copyright">
            <span>Copyright © FoodThrift 2022</span>
          </div>
        </div>
      </footer>
    </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up" /></a>
  </div>
</template>

<script>
import SideBar from './inc/SideBar.vue'
import NavBar from './inc/NavBar.vue'
export default {
  components: { SideBar, NavBar }
}
</script>
