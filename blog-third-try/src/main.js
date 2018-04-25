// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import { store } from './store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCP69Z-0KMvj0ai4EMWjLxZpJB4fdsK2wg',
      authDomain: 'vuejs-firebase-02-56db4.firebaseapp.com',
      databaseURL: 'https://vuejs-firebase-02-56db4.firebaseio.com',
      projectId: 'vuejs-firebase-02-56db4',
      storageBucket: ''
    })
  }
})
