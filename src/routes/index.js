import { App } from 'layouts'
// 论坛
import TraHome from './Home/TraHome'

// 404
import NotFound from './NotFound'

export const createRoutes = (store) => ([
  {
    path: '/',
    component: App,
    indexRoute: TraHome(store),
    childRoutes: [
    ]
  },
  {
    path: '/page/404',
    component: App,
    indexRoute: NotFound
  },
  {
    path: '*',
    component: App,
    indexRoute: NotFound
  }
])

// FIXME page/404
export default createRoutes
