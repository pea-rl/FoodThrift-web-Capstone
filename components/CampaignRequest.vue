<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <title>Campaign Request - FoodThrift</title>
  <link rel="stylesheet" href="static/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&amp;display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Biryani&amp;display=swap">
  <link rel="stylesheet" href="static/fonts/fontawesome-all.min.css">
</head>

<template id="page-top">
  <div id="wrapper">
    <nav
      class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
      style="background: #002868; color: var(--bs-white)"
    >
      <div class="container-fluid d-flex flex-column p-0">
        <a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink" />
          </div>
          <div class="sidebar-brand-text mx-3">
            <span style="color: var(--bs-accordion-bg)">FoodThrift</span>
          </div>
        </a>
        <hr class="sidebar-divider my-0">
        <ul id="accordionSidebar" class="navbar-nav text-light">
          <li class="nav-item">
            <a class="nav-link" href="index.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                class="bi bi-file-bar-graph"
                style="margin: 2px"
              >
                <path d="M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1z" />
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" /></svg><span style="padding: 7px">Dashboard</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-normal" href="reports.html"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              class="bi bi-folder2-open"
              style="margin: 2px"
            >
              <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z" /></svg><span style="padding: 7px">Reports</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="campaignRequest.html"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              class="bi bi-collection"
              style="margin: 2px"
            >
              <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" /></svg><span class="fw-normal" style="padding: 7px">Campaign Request</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-normal" href="donation.html"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              class="bi bi-gift"
              style="margin: 2px"
            >
              <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" /></svg><span style="padding: 7px">Donation</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="revenueStream.html"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              class="bi bi-list-columns-reverse"
              style="margin: 2px"
            >
              <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 .5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10A.5.5 0 0 1 4 .5Zm-4 2A.5.5 0 0 1 .5 2h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 8h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Z" /></svg><span style="padding: 7px">Revenue Stream</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="login.html"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              class="bi bi-box-arrow-left"
              style="margin: 2px"
            >
              <path
                fill-rule="evenodd"
                d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
              />
              <path
                fill-rule="evenodd"
                d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
              /></svg><span style="padding: 7px">Logout</span></a>
          </li>
        </ul>
      </div>
    </nav>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <nav
          class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top"
        >
          <div class="container-fluid">
            <ul class="navbar-nav flex-nowrap ms-auto" style="margin: 0px">
              <li class="nav-item dropdown no-arrow">
                <div class="nav-item dropdown no-arrow">
                  <a
                    class="dropdown-toggle fw-normal nav-link"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    href="profile.html"
                  >
                    <span class="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span>
                    <img class="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg">
                  </a>
                  <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-user fa-sm fa-fw me-2 text-gray-400" />&nbsp;Profile
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400" />&nbsp;Settings
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-list fa-sm fa-fw me-2 text-gray-400" />&nbsp;Activity log
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
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

<script src="static/js/jquery.min.js"></script>
<script src="static/js/bootstrap.min.js"></script>
<script src="static/js/bs-init.js"></script>
<script src="static/js/theme.js"></script>
