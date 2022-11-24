<template>
  <div id="wrapper">
    <SideBar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <NavBar />
        <div class="container-fluid container">
          <h3
            class="text-dark mb-1"
            style="
              text-align: center;
              font-family: Biryani, sans-serif;
              font-weight: bold;
              padding: 10px;
              margin: 5px;"
          >
            DASHBOARD
          </h3>
          <div class="row">
            <div
              class="col-md-6 col-xl-3 mb-4"
              style="max-width: 50%; max-height: 111px"
            >
              <div class="card shadow border-start-primary py-2">
                <div class="card-body">
                  <div class="row align-items-center no-gutters">
                    <div class="col me-2">
                      <div
                        class="text-uppercase text-primary fw-bold text-xs mb-1"
                      >
                        <span>Total Number of users</span>
                      </div>
                      <div class="text-dark fw-bold h5 mb-0">
                        <span>10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-xl-3 mb-4"
              style="max-width: 50%; max-height: 111px"
            >
              <div class="card shadow border-start-success py-2">
                <div class="card-body">
                  <div class="row align-items-center no-gutters">
                    <div class="col me-2">
                      <div class="text-uppercase text-success fw-bold text-xs mb-1">
                        <span>Earnings (annual)</span>
                      </div>
                      <div class="text-dark fw-bold h5 mb-0">
                        <span>PHP 15,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-xl-3 mb-4"
              style="max-width: 50%; max-height: 111px"
            >
              <div class="card shadow border-start-info py-2">
                <div class="card-body">
                  <div class="row align-items-center no-gutters">
                    <div class="col me-2">
                      <div class="text-uppercase text-primary fw-bold text-xs mb-1">
                        <span style="color: #9b301c">Total Number of donations</span>
                      </div>
                      <div class="text-dark fw-bold h5 mb-0">
                        <span>10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-md-6 col-xl-3 mb-4"
              style="max-width: 50%; max-height: 111px"
            >
              <div class="card shadow border-start-warning py-2">
                <div class="card-body">
                  <div class="row align-items-center no-gutters">
                    <div class="col me-2">
                      <div class="text-uppercase text-warning fw-bold text-xs mb-1">
                        <span>Pending campaign requests</span>
                      </div>
                      <div class="text-dark fw-bold h5 mb-0">
                        <span>08</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-7 col-xl-8">
              <div class="card shadow mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h6 class="text-primary fw-bold m-0">
                    Earnings Overview
                  </h6>
                  <div class="dropdown no-arrow">
                    <button
                      class="btn btn-link btn-sm dropdown-toggle"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      <i class="fas fa-ellipsis-v text-gray-400" />
                    </button>
                    <div class="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                      <p class="text-center dropdown-header">
                        dropdown header:
                      </p>
                      <a class="dropdown-item" href="#">&nbsp;Action</a>
                      <a class="dropdown-item" href="#">&nbsp;Another action</a>
                      <div class="dropdown-divider" />
                      <a class="dropdown-item" href="#">&nbsp;Something else here</a>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="chart-area">
                    <!--canvas data-bss-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Earnings&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;0&quot;,&quot;10000&quot;,&quot;5000&quot;,&quot;15000&quot;,&quot;10000&quot;,&quot;20000&quot;,&quot;15000&quot;,&quot;25000&quot;],&quot;backgroundColor&quot;:&quot;rgba(78, 115, 223, 0.05)&quot;,&quot;borderColor&quot;:&quot;rgba(78, 115, 223, 1)&quot;}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;},&quot;position&quot;:&quot;top&quot;},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;fontStyle&quot;:&quot;normal&quot;,&quot;padding&quot;:20}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;]},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;fontStyle&quot;:&quot;normal&quot;,&quot;padding&quot;:20}}]}}}" /-->
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-xl-4">
              <div class="card shadow mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h6 class="text-primary fw-bold m-0">
                    Revenue Sources
                  </h6>
                  <div class="dropdown no-arrow">
                    <button
                      class="btn btn-link btn-sm dropdown-toggle"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      type="button"
                    >
                      <i class="fas fa-ellipsis-v text-gray-400" />
                    </button>
                    <div class="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                      <p class="text-center dropdown-header">
                        dropdown header:
                      </p>
                      <a class="dropdown-item" href="#">&nbsp;Action</a>
                      <a class="dropdown-item" href="#">&nbsp;Another action</a>
                      <div class="dropdown-divider" />
                      <a class="dropdown-item" href="#">&nbsp;Something else here</a>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="chart-area">
                    <!--canvas
                      data-bss-chart="{&quot;type&quot;:&quot;doughnut&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Direct&quot;,&quot;Social&quot;,&quot;Referral&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;&quot;,&quot;backgroundColor&quot;:[&quot;#4e73df&quot;,&quot;#1cc88a&quot;,&quot;#36b9cc&quot;],&quot;borderColor&quot;:[&quot;#ffffff&quot;,&quot;#ffffff&quot;,&quot;#ffffff&quot;],&quot;data&quot;:[&quot;50&quot;,&quot;30&quot;,&quot;15&quot;]}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}}}"
                    /-->
                  </div>
                  <div class="text-center small mt-4">
                    <span class="me-2">
                      <i class="fas fa-circle text-primary" />&nbsp;Subscription
                    </span>
                    <span class="me-2">
                      <i class="fas fa-circle text-success" />&nbsp;Ads
                    </span>
                    <span class="me-2">
                      <i class="fas fa-circle text-info" />&nbsp;Delivery
                    </span>
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
