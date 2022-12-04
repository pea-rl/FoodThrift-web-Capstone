<template>
  <div id="content" class="d-flex flex-column">
    <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
      <div class="container-fluid">
        <ul class="navbar-nav flex-nowrap ms-auto" style="margin: 0px">
          <li class="nav-item dropdown no-arrow">
            <div class="nav-item dropdown no-arrow">
              <NuxtLink
                to="/Profile"
                class="dropdown-toggle fw-normal nav-link"
                aria-expanded="false"
              >
                <span class="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span>
                <img class="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg">
              </NuxtLink>
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
