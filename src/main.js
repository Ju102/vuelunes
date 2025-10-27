import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app = createApp(App);

app.config.globalProperties.$filters = {
    parImpar(num) {
        return num % 2 == 0 ? ("<span style='color: green'>" + num + "</span>")
            : ("<span style='color: red'>" + num + "</span>");
    },

    getResultado(numero, multi) {
        return numero * multi;
    },

    getOperacion(numero, multi) {
        return numero + " x " + multi;
    }

}

app.use(router).mount('#app')
