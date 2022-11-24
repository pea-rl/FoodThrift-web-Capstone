<template>
  <div id="content" class="d-flex flex-column">
    <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
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
                <img class="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg"></a>
              <div
                class="dropdown-menu shadow dropdown-menu-end animated--grow-in"
              >
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  }
}
</script>
<!--script src="static/js/jquery.min.js"></script>
<script src="static/js/bootstrap.min.js"></script>
<script src="static/js/chart.min.js"></script>
<script src="static/js/bs-init.js"></script>
<script src="static/js/theme.js"></script-->
