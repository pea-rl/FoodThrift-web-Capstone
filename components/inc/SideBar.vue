<template>
  <div id="wrapper">
    <nav
      class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
      style="background: #002868; color: var(--bs-white)"
    >
      <div class="container-fluid d-flex flex-column p-0">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink" />
          <!--change to logo-->
        </div>
        <!--Title-->
        <div class="sidebar-brand-text mx-3" style="padding-top: 30px; padding-bottom: 10px;">
          <span style="color: var(--bs-accordion-bg); font-weight: bold; font-size: large;">FoodThrift</span>
        </div>
        <hr class="sidebar-divider my-0">
        <ul id="accordionSidebar" class="navbar-nav text-light" style="padding: 5px;">
          <!--Dashboard-->
          <li class="nav-item" style="padding: 10px;">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-layout-board"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M4 9h8" />
              <path d="M12 15h8" />
              <path d="M12 4v16" />
            </svg>
            <NuxtLink to="/Dashboard" class="nav-link" style="margin-top: -37px; margin-left: 20px;">
              Dashboard
            </NuxtLink>
          </li>
          <!--Reports-->
          <li class="nav-item" style="padding: 10px;">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-report-analytics"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="2" />
              <path d="M9 17v-5" />
              <path d="M12 17v-1" />
              <path d="M15 17v-3" />
            </svg>
            <NuxtLink to="/Reports" class="nav-link" style="margin-top: -37px; margin-left: 20px;">
              Reports
            </NuxtLink>
          </li>
          <!--Campaign Request-->
          <li class="nav-item" style="padding: 10px;">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-license"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
              <line x1="9" y1="7" x2="13" y2="7" />
              <line x1="9" y1="11" x2="13" y2="11" />
            </svg>
            <NuxtLink to="/CampaignRequest" class="nav-link" style="margin-top: -37px; margin-left: 20px;">
              Campaign Request
            </NuxtLink>
          </li>
          <!--Donation-->
          <li class="nav-item" style="padding: 10px;">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-gift"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="8" width="18" height="4" rx="1" />
              <line x1="12" y1="8" x2="12" y2="21" />
              <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
              <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
            </svg>
            <NuxtLink to="/Donation" class="nav-link" style="margin-top: -37px; margin-left: 20px;">
              Donation
            </NuxtLink>
          </li>
          <!--Revenue Stream-->
          <li class="nav-item" style="padding: 10px;">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chart-infographic"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="7" cy="7" r="4" />
              <path d="M7 3v4h4" />
              <line x1="9" y1="17" x2="9" y2="21" />
              <line x1="17" y1="14" x2="17" y2="21" />
              <line x1="13" y1="13" x2="13" y2="21" />
              <line x1="21" y1="12" x2="21" y2="21" />
            </svg>
            <NuxtLink to="/RevenueStream" class="nav-link" style="margin-top: -37px; margin-left: 20px;">
              Revenue Stream
            </NuxtLink>
          </li>
          <!--Logout-->
          <li class="nav-item" style="padding: 10px;">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-logout"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M7 12h14l-3 -3m0 6l3 -3" />
            </svg>
            <NuxtLink to="/login" class="nav-link" style="margin-top: -37px; margin-left: 20px;">
              Logout
            </NuxtLink>
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
