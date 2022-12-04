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
                <h3 class="text-dark mb-1" style="text-align: center;font-family: Biryani, sans-serif;font-weight: bold;padding: 9px;margin: 5px;">
                  REPORTS
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="btn-group d-xl-flex justify-content-start align-items-start align-content-start align-self-start flex-wrap justify-content-xl-start align-items-xl-center" role="group" style="width: 473px;">
                <button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  Campaign
                </button><button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  Donation
                </button><button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  Feedback
                </button>
                <div class="dropdown btn-group" role="group">
                  <button class="btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;">
                    Users
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Donor</a><a class="dropdown-item" href="#">Beneficiary</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div>
                <h6 style="padding: 5px;">
                  Total Number of Users:&nbsp;
                </h6>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Unsubcribe</th>
                      <th>Subscribed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>User 1</td>
                      <td>
                        User 4<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          class="bi bi-patch-check"
                          style="margin-left: 15px;"
                        >
                          <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                          <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                        </svg>
                      </td>
                      <td style="width: 29.234px;" />
                    </tr>
                    <tr>
                      <td>
                        User 2<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          class="bi bi-patch-check"
                          style="margin-left: 15px;"
                        >
                          <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                          <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                        </svg>
                      </td>
                      <td>User 6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="btn-group d-xl-flex justify-content-start align-items-start align-content-start align-self-start flex-wrap justify-content-xl-start align-items-xl-center" role="group" style="width: 473px;">
                <button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  Campaign
                </button><button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  Donation
                </button><button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  Feedback
                </button><button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  User
                </button>
              </div>
            </div>
            <div class="col">
              <div>
                <h6 style="padding: 5px;">
                  Total Number of Users:&nbsp;
                </h6>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Unsubcribe</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        User 8<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          class="bi bi-patch-check"
                          style="margin-left: 15px;"
                        >
                          <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                          <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>User 10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="btn-group d-xl-flex justify-content-start align-items-start align-content-start align-self-start flex-wrap justify-content-xl-start align-items-xl-center" role="group" style="width: 473px;">
                <button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  Campaign
                </button><button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  Donation
                </button><button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  Feedback
                </button><button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  User
                </button>
              </div>
            </div>
            <div class="col" style="padding-top: 5px;">
              <div>
                <h6>Total Number of Donations:&nbsp;</h6>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Unsubcribe</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Donation 8</td>
                    </tr>
                    <tr>
                      <td>Donation 10</td>
                    </tr>
                  </tbody>
                </table>
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
                          <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                            Status:&nbsp;
                          </h6>
                          <div>
                            <h6 style="margin: 5px;padding: 3px;font-size: 15px;">
                              Description:
                            </h6>
                            <p style="margin: 5px;padding: 8px;font-size: 12px;">
                              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.&nbsp;<br>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.<br>
                            </p>
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
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="btn-group d-xl-flex justify-content-start align-items-start align-content-start align-self-start flex-wrap justify-content-xl-start align-items-xl-center" role="group" style="width: 473px;">
                <button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  Campaign
                </button><button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  Donation
                </button><button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  Feedback
                </button><button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  User
                </button>
              </div>
            </div>
            <div class="col" style="padding-top: 5px;">
              <div>
                <h6>Total Number of Campaigns:&nbsp;</h6>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Unsubcribe</th>
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
          <div class="row">
            <div class="col">
              <div id="modal-2" class="modal fade" role="dialog" tabindex="-1">
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
                            Schedule:&nbsp;
                          </h6>
                          <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                            Status:&nbsp;
                          </h6>
                          <div>
                            <h6 style="margin: 5px;padding: 3px;font-size: 15px;">
                              Description:
                            </h6>
                            <p style="margin: 5px;padding: 8px;font-size: 12px;">
                              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.&nbsp;<br>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.<br>
                            </p>
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
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="btn-group d-xl-flex justify-content-start align-items-start align-content-start align-self-start flex-wrap justify-content-xl-start align-items-xl-center" role="group" style="width: 473px;">
                <button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  Campaign
                </button><button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  Donation
                </button><button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  Feedback
                </button><button class="btn btn-primary" type="button" style="margin: 1px;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;position: relative;">
                  User
                </button>
              </div>
            </div>
            <div class="col">
              <div>
                <h6 style="padding-top: 5px;">
                  Total Number of Feedbacks:&nbsp;
                </h6>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Unsubcribe</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Feedback 8</td>
                    </tr>
                    <tr>
                      <td>Feedback 10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div id="modal-3" class="modal fade" role="dialog" tabindex="-1">
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
                          <div>
                            <h6 style="margin: 5px;padding: 3px;font-size: 15px;">
                              Description:
                            </h6>
                            <p style="margin: 5px;padding: 8px;font-size: 12px;">
                              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.&nbsp;<br>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.<br>
                            </p>
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
