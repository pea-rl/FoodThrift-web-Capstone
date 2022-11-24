<template>
  <div id="wrapper">
    <SideBar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <NavBar />
        <div class="container-fluid d-grid float-none">
          <div style="margin: 7px">
            <div class="row">
              <div class="col">
                <h3
                  class="text-dark mb-1"
                  style="
                    text-align: center;
                    font-family: Biryani, sans-serif;
                    font-weight: bold;
                    padding: 15px;
                    margin: 15px;"
                >
                  CAMPAIGN REQUEST
                </h3>
              </div>
              <div class="col" style="max-width: 30%">
                <div style="margin: 2px; padding: 24px">
                  <div class="dropdown" style="width: 160px">
                    <button
                      class="btn btn-primary dropdown-toggle"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      type="button"
                      style="
                        background: rgba(78, 115, 223, 0);
                        color: rgb(0, 0, 0);
                        border-color: #919693;
                      "
                    >
                      Select Categories
                    </button>
                    <div
                      class="dropdown-menu text-nowrap text-center"
                      style="width: 160px"
                    >
                      <a class="dropdown-item" href="#">Users</a>
                      <a class="dropdown-item" href="#">Feedbacks</a><a class="dropdown-item" href="#">Donation</a>
                      <a class="dropdown-item" href="#">Campaigns</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="row" style="margin: 0px">
              <div class="col">
                <div class="dropdown" style="margin: 0px; padding: 20px">
                  <button
                    class="btn btn-primary dropdown-toggle"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    type="button"
                    style="
                      width: 160.031px;
                      border-radius: 8.6px;
                      background: rgba(255, 255, 255, 0);
                      border-color: var(--bs-btn-color);"
                  >
                    Sort
                  </button>
                  <div
                    class="dropdown-menu"
                    style="width: 130px; text-align: center"
                  >
                    <a class="dropdown-item" href="#">Approved</a>
                    <a class="dropdown-item" href="#">Under Review</a>
                    <a class="dropdown-item" href="#">Rejected</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container d-grid flex-wrap">
          <div style="padding: 13px">
            <div class="row" style="min-width: 100px">
              <div class="col" style="width: 235px; max-width: 259px">
                <div style="width: 235px; min-width: auto">
                  <div
                    class="table-responsive"
                    style="width: 235px; text-align: left; min-width: auto"
                  >
                    <table class="table">
                      <thead style="text-align: left">
                        <tr>
                          <th>Column 1</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Cell 1</td>
                        </tr>
                        <tr>
                          <td>Cell 3</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="d-grid">
                  <div
                    class="card"
                    style="
                      background: #f4f4f4;
                      color: rgb(41, 41, 48);
                      box-shadow: 2px 2px 3px rgb(102, 102, 102);"
                  >
                    <div class="card-body">
                      <h4 class="card-title" style="margin: 0px; padding: 6px">
                        Title
                      </h4>
                      <h6 class="card-title" style="margin: 0px; padding: 6px">
                        Date:
                      </h6>
                      <div>
                        <h6 style="margin: 4px; padding: 3px">
                          Description:
                        </h6>
                        <p style="margin: 1px; padding: 6px; font-size: 13px">
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                          Cras justo odio, dapibus ac facilisis in, egestas eget
                          quam. Donec id elit non mi porta gravida at eget
                          metus.
                        </p>
                      </div>
                      <div
                        class="btn-group"
                        role="group"
                        style="width: 190.641px; margin: 4px; padding: 18px"
                      >
                        <button
                          class="btn btn-primary"
                          type="button"
                          style="
                            margin: 1px;
                            border-radius: 7px;
                            background: #7ad1b5;
                            color: rgb(0, 0, 0);
                            border-width: 1px;
                            border-color: #007a3d;"
                        >
                          Approve
                        </button><button
                          class="btn btn-primary"
                          type="button"
                          style="
                            color: rgb(25, 25, 25);
                            background: var(--bs-gray-300);
                            margin: 1px;
                            border-radius: 7px;
                            border-width: 1px;
                            border-color: var(--bs-gray-600);"
                        >
                          Reject
                        </button>
                      </div>
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
    </div>
    <a class="border rounded d-inline scroll-to-top" href="#page-top">
      <i class="fas fa-angle-up" />
    </a>
  </div>
</template>

<script>
import SideBar from './inc/SideBar.vue'
import NavBar from './inc/NavBar.vue'
export default {
  components: { SideBar, NavBar }
}
</script>
