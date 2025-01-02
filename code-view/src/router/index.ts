import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CodeViewer from '../views/CodeViewer.vue';
import Documentation from '../views/Documentation.vue';
import License from '../views/License.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/code-viewer', name: 'CodeViewer', component: CodeViewer },
    { path: '/documentation', name: 'Documentation', component: Documentation },
    { path: '/license', name: 'License', component: License },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;