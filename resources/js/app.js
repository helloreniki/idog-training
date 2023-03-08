import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { Head, Link } from '@inertiajs/vue3';
import { createPinia } from 'pinia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'

const pinia = createPinia()

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

resolve: name => {
  const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
  let page = pages[`./Pages/${name}.vue`]
  page.default.layout = page.default.layout || AuthenticatedLayout
  return page
},

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: name => {
      const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
      let page = pages[`./Pages/${name}.vue`]
      page.default.layout = page.default.layout || AuthenticatedLayout
      return page
    },
    // resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(pinia)
            .component('Head', Head)
            .component('Link', Link)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

window.rsFlat = function(v) {
  return JSON.parse(JSON.stringify(v))
}

window.capitalize = function(v) {
  return v.charAt(0).toUpperCase() + v.slice(1)
}
