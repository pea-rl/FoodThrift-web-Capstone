<template>
  <div id="wrapper">
    <SideBar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <NavBar />

        <div class="container-fluid d-grid float-none">
          <!--title-->
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
        <!--data table-->
        <div class="container d-grid flex-wrap">
          <div style="padding: 13px;">
            <div class="row" style="min-width: 100px;">
              <div class="col">
                <div>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>
                            Campaign Titles
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in campReq" :key="item.id" @click="selectItem(item)">
                          <td>
                            <button
                              style="color: rgb(25,25,25); background: rgba(234,236,244,0); margin: 2px; border-radius: 0px; border: 0px none var(--bs-gray-500);"
                            >
                              {{ item.title }}
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div v-if="selectedItem" class="col">
            <div class="card" style="background: #f4f4f4;color: rgb(41,41,48);">
              <div class="card-body">
                <h5 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                  Title: {{ selectedItem.title }}
                </h5>
                <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                  Beneficiary: {{ selectedItem.beneficiary }}
                </h6>
                <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                  Request By: {{ selectedItem.reqBy }}
                </h6>
                <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                  Schedule: {{ selectedItem.schedStart }} - {{ selectedItem.schedEnd }}
                </h6>
                <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                  Location: {{ selectedItem.location }}
                </h6>
                <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                  Campaign Status: {{ selectedItem.campStatus }}
                </h6>
                <div>
                  <h6 style="margin: 5px;padding: 3px;font-size: 15px;">
                    Description: {{ selectedItem.descrip }}
                  </h6>
                </div>
                <div class="text-center" style="margin: 6px;position: relative;padding: 7px;margin-top: 46px;padding-bottom: -8px;">
                  <div class="btn-group d-xl-flex align-content-center align-self-center m-auto justify-content-xl-center align-items-xl-center" role="group" style="width: 190.641px;margin: 4px;padding: 6px;">
                    <button
                      id="campApprove"
                      class="btn btn-primary text-center"
                      type="button"
                      style="margin: 2px;border-radius: 7px;background: var(--bs-blue);color: var(--bs-modal-bg);border-width: 1px;border-color: #007a3d;"
                      :disabled="approvedCamp"
                      @click="campApprv"
                    >
                      Approve
                    </button><button
                      id="campReject"
                      class="btn btn-primary text-center"
                      type="button"
                      style="color: rgb(25,25,25);background: var(--bs-gray-200);margin: 2px;border-radius: 7px;border: 1px none var(--bs-gray-500);"
                      :disabled="rejectedCamp"
                      @click="campRejct"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Calendar-->
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
                      <div
                        id="calendar"
                        class="col"
                        :data-source="dataSource"
                        :current-date="currentDate"
                        :views="views"
                        :height="500"
                        :editing="false"
                        :show-all-day-panel="false"
                        :start-day-hour="7"
                        start-date-expr="start.dateTime"
                        end-date-expr="end.dateTime"
                        text-expr="summary"
                        time-zone="Philippine"
                        current-view="week"
                      />
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
  </div>
</template>

<script>
import firebase from 'firebase/app'

import SideBar from './inc/SideBar.vue'
import NavBar from './inc/NavBar.vue'

export default {
  components: { SideBar, NavBar },
  data () {
    return {
      approvedCamp: false,
      rejectedCamp: false,
      // campaign: [],
      /**
       * campReq: [
        { id: '01', title: 'Campaign 2', location: 'Cebu City', beneficiary: 'Ben', scheduleStart: 'MM-DD-YYYY', scheduleEnd: 'MM-DD-YYYY', descrip: 'Campaign descript', campStatus: 'Approved', reqBy: 'Email of the sender' },
        { id: '02', title: 'Campaign 3', location: 'Mandaue City', beneficiary: 'Ben', scheduleStart: 'MM-DD-YYYY', scheduleEnd: 'MM-DD-YYYY', descrip: 'Campaign descript', campStatus: 'Submitted', reqBy: 'Email of the sender' }
      ],
       */
      selectedItem: null,

      views: ['day', 'week', 'month'],
      currentDate: new Date(2023, 1, 1)
    }
  },
  methods: {
    readFromFirestore ({ app }) {
    /**
     * const campaignRef = firebase.database().ref('Campaign')
    const snapshot = await campaignRef.once('value')
    const campReq = snapshot.val()
    return { campReq }
     */
      this.campReq = []
      firebase.collection('Campaign').get().then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          this.campReq.push({
            id: doc.id,
            title: doc.data().campTitle,
            descrip: doc.data().campDescrip,
            location: doc.data().campLoctn,
            beneficiary: doc.data().campBenf,
            campStatus: doc.data().campStatus,
            schedStart: doc.data().campSchedStart,
            scheduleEnd: doc.data().campSchedEnd,
            reqBy: doc.data().campSubmitBy
          })
        })
      })
    },
    selectItem (item) {
      this.selectedItem = item
    },
    getData (_, requestOptions) {
      const PUBLIC_KEY = '3bd57a4172aaaba7227b90b39115354a890a2ef9'
      const CALENDAR_ID = 'service-account@foodthrift-4ad15.iam.gserviceaccount.com'
      const dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/',
        CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('')

      return fetch(dataUrl, requestOptions).then(
        response => response.json()
      ).then(data => data.items)
    }
  }
}
</script>
