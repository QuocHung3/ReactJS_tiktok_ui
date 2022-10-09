import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

//public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/Upload', component: Upload, layout: null },
    { path: '/Search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
