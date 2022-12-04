<template>
  <div id="wrapper">
    <SideBar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <NavBar />

        <div class="container-fluid d-grid float-none">
          <div style="margin: 7px;">
            <div class="row">
              <div class="col">
                <h3 class="text-dark mb-1" style="text-align: center;font-family: Biryani, sans-serif;font-weight: bold;padding: 15px;margin: 15px;">
                  CAMPAIGN REQUEST
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="container d-grid flex-wrap">
          <div style="padding: 13px;">
            <div class="row" style="min-width: 100px;">
              <div class="col">
                <div>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Title</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Campaign 8</td>
                        </tr>
                        <tr>
                          <td>Campaign10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div id="modal-1" class="modal fade" role="dialog" tabindex="-1">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header" style="background: #f4f4f4;">
                        <h4 style="margin: 0px;padding: 6px;color: rgb(60,61,68);">
                          Title
                        </h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div class="col">
                        <div class="card" style="background: #f4f4f4;color: rgb(41,41,48);">
                          <div class="card-body">
                            <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                              Date:
                            </h6>
                            <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                              Address:
                            </h6>
                            <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                              Beneficiary:
                            </h6>
                            <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                              Schedule:&nbsp;
                            </h6>
                            <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                              Food Date Prepared:
                            </h6>
                            <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                              Food Date Expiry:
                            </h6>
                            <div>
                              <h6 style="margin: 5px;padding: 3px;font-size: 15px;">
                                Description:
                              </h6>
                              <p style="margin: 5px;padding: 8px;font-size: 12px;">
                                Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.&nbsp;<br>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.<br>
                              </p>
                            </div>
                            <div class="text-center" style="margin: 6px;position: relative;padding: 7px;margin-top: 56px;padding-bottom: -8px;">
                              <div class="btn-group d-xl-flex align-content-center align-self-center m-auto justify-content-xl-center align-items-xl-center" role="group" style="width: 190.641px;margin: 4px;padding: 6px;">
                                <button class="btn btn-primary text-center" type="button" style="margin: 2px;border-radius: 7px;background: var(--bs-blue);color: var(--bs-modal-bg);border-width: 1px;border-color: #007a3d;">
                                  Approve
                                </button><button class="btn btn-primary text-center" type="button" style="color: rgb(25,25,25);background: var(--bs-gray-200);margin: 2px;border-radius: 7px;border: 1px none var(--bs-gray-500);">
                                  Reject
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer" style="background: #adccf1;" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin: 10px;">
          <div class="col">
            <div>
              <div class="card" style="margin: 12px;">
                <div class="card-body">
                  <div>
                    <h5 class="text-center">
                      Calendar
                    </h5>
                  </div>
                  <div style="margin: 0px;padding: 10px;">
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
