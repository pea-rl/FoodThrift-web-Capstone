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
                          <th>Title</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in items" :key="item" @click="openModal(item)">
                          <td>{{ item.CampTitle }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!--Modal-->
            <div v-show="showModal" id="modal" ref="modal" class="row">
              <div id="modal-content" class="col">
                <div id="modal-1" class="modal fade" role="dialog" tabindex="-1">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header" style="background: #f4f4f4;">
                        <h4 style="margin: 0px;padding: 6px;color: rgb(60,61,68);">
                          Title: {{ item.CampTitle }}
                        </h4><button
                          id="close"
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          @click="closeModal"
                        />
                      </div>
                      <div class="col">
                        <div class="card" style="background: #f4f4f4;color: rgb(41,41,48);">
                          <div class="card-body">
                            <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                              Date: {{ item.CampDateSubmtd }}
                            </h6>
                            <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                              Address: {{ item.CampAdrs }}
                            </h6>
                            <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                              Beneficiary: {{ item.CampBnfcry }}
                            </h6>
                            <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                              Schedule: {{ item.CampSchedStart }} - {{ item.CampSchedEnd }}
                            </h6>
                            <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                              Food Date Prepared: {{ item.CampFdDatePrep }}
                            </h6>
                            <h6 class="card-title" style="margin: 5px;padding: 3px;font-size: 15px;">
                              Food Date Expiry: {{ item.CampFdDateExp }}
                            </h6>
                            <div>
                              <h6 style="margin: 5px;padding: 3px;font-size: 15px;">
                                Description:
                              </h6>
                              <p style="margin: 5px;padding: 8px;font-size: 12px;">
                                {{ item.CampDescrip }}
                              </p>
                            </div>
                            <div class="text-center" style="margin: 6px;position: relative;padding: 7px;margin-top: 56px;padding-bottom: -8px;">
                              <div class="btn-group d-xl-flex align-content-center align-self-center m-auto justify-content-xl-center align-items-xl-center" role="group" style="width: 190.641px;margin: 4px;padding: 6px;">
                                <button class="btn btn-primary text-center" type="button" style="margin: 2px;border-radius: 7px;background: var(--bs-blue);color: var(--bs-modal-bg);border-width: 1px;border-color: #007a3d;" @click="campApprv" :disabled="approvedCamp">
                                  Approve
                                </button><button class="btn btn-primary text-center" type="button" style="color: rgb(25,25,25);background: var(--bs-gray-200);margin: 2px;border-radius: 7px;border: 1px none var(--bs-gray-500);" @click="campRejct" :disabled="rejectedCamp">
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
                      <div id="calendar" class="col" />
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
// eslint-disable-next-line import/default
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import { GoogleAuth, GoogleApis } from 'google-auth-library'
import { google } from 'googleapis'

import SideBar from './inc/SideBar.vue'
import NavBar from './inc/NavBar.vue'

firebase.initializeApp(config);
const database = firebase.database();

// Authenticate with the Google Calendar API
const auth = new GoogleAuth({
  keyFile: '/path/to/keyfile.json',
  scopes: ['https://www.googleapis.com/auth/calendar']
});
const client = await auth.getClient();
const token = await auth.getAccessToken();
const calendar = google.calendar({ version: 'v3', auth: client });

export default {
  components: { SideBar, NavBar },
  data () {
    return {
      showModal: false,
      items: [],
      approvedCamp: false,
      rejectedCamp: false
    };
  },
  created () {
    // Initialize Firebase = is in nuxt.config.js
    const firebaseApp = firebase.initializeApp(config);

    // Get the data from the 'items' collection in Firestore
    const firestore = firebaseApp.firestore();
    firestore.collection('items').get()
      .then((querySnapshot) => {
        // Map the data to an array of objects
        this.items = querySnapshot.docs.map(doc => doc.data());
      });
  methods: {
    openModal() {
      this.showModal = true
      // Select the modal using the $refs property in Vue.js
      const modal = this.$refs.modal

      // Open the modal
      modal.style.display = 'block'
    };
    closeModal() {
      this.showModal = false
    };
    async campApprv() {
      this.approvedCamp = true
    };
  }
}}
// Set up a listener for changes to the event data in the Firebase Realtime Database
database.ref('events').on('value', (snapshot) => {
  const events = snapshot.val();

  // Delete all events on the calendar
  const calendarId = 'primary'; // replace with the calendar ID
  const eventsOnCalendar = await calendar.events.list({ calendarId });
  for (const event of eventsOnCalendar.data.items) {
    await calendar.events.delete({ calendarId, eventId: event.id });
  }
  if (this.approvedCamp == true) {
      // Add the new events to the calendar
    for (const event of events) {
        await calendar.events.insert({
          calendarId,
          resource: {
            summary: event.item.CampTitle,
            start: {
              date: event.item.CampSchedStart
            },
            end: {
              date: event.item.CampSchedEnd
            }
          }
        });
      }
  }
});
</script>
