// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Plyr from 'plyr'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css' // only if your build system can import css, otherwise import it wherever you would import your css.
// import $ from 'jquery'
// import bootstrap from 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/reset.css'
import axios from 'axios'
import {vueBaberrage} from 'vue-baberrage'

// Vue.use($)
// Vue.use(bootstrap)
Vue.use(VuePlyr)
Vue.use(iView)
Vue.use(axios)
Vue.use(vueBaberrage)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
