<template>
  <div id="wrapper">
    <SideBar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <NavBar />
      </div>
      <div>
        <h3
          class="text-dark mb-1"
          style="
            text-align: center;
            font-family: Biryani, sans-serif;
            font-weight: bold;
            padding: 15px;
          "
        >
          Donation
        </h3>
      </div>
      <div>
        <div class="row" style="margin: 10px">
          <div class="col">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Title</th>
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
          <div class="col">
            <div
              class="card"
              style="
                background: #f4f4f4;
                box-shadow: 2px 2px 3px rgb(102, 102, 102);
                color: rgb(41, 41, 48);
              "
            >
              <div class="card-body">
                <h4 class="card-title" style="margin: 0px; padding: 6px">
                  Title
                </h4>
                <h6 class="card-title" style="margin: 0px; padding: 6px">
                  Date:
                </h6>
                <h6 class="card-title" style="margin: 0px; padding: 6px">
                  Beneficiary:
                </h6>
                <h6 class="card-title" style="margin: 0px; padding: 6px">
                  Schedule:&nbsp;
                </h6>
                <h6 class="card-title" style="margin: 0px; padding: 6px">
                  Food Date Prepared:
                </h6>
                <h6 class="card-title" style="margin: 0px; padding: 6px">
                  Food Date Expiry:
                </h6>
                <div>
                  <h6 style="margin: 4px; padding: 3px">
                    Description:
                  </h6>
                  <p style="margin: 1px; padding: 6px; font-size: 13px">
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                    justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec id elit non mi porta gravida at eget metus.
                  </p>
                </div>
                <div
                  class="text-center"
                  style="margin: 6px; position: relative; padding: 11px"
                >
                  <button
                    class="btn btn-primary"
                    type="button"
                    style="
                      background: #7ad1b5;
                      border-color: #007a3d;
                      color: rgb(0, 0, 0);
                    "
                  >
                    Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin: 10px">
          <div class="col">
            <div>
              <div class="card" style="margin: 12px">
                <div class="card-body">
                  <div>
                    <h5 class="text-center">
                      Calendar
                    </h5>
                  </div>
                  <div style="margin: 0px; padding: 10px">
                    <div class="row">
                      <div class="col" />
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
    <a
      class="border rounded d-inline scroll-to-top"
      href="#page-top"
    ><i class="fas fa-angle-up" /></a>
  </div>
</template>

<script>
import SideBar from './inc/SideBar.vue'
import NavBar from './inc/NavBar.vue'
export default {
  components: { SideBar, NavBar }
}
</script>
