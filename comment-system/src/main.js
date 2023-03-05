import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles' 
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPenToSquare, faTrash);

const vuetify = createVuetify({ 
    components,
    directives,
})

const app = createApp(App)

app.use(vuetify);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app');
