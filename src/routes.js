import { flatMap } from "lodash";
import { LandingPage } from "./components/ui/LandingPage";
import { Services } from "./components/ui/Services";

const routes = [{
  order: 0,
  tabId: 0,
  label: 'Home',
  path: "/",
  exact: true,
  component: LandingPage,
},
{
  order: 1,
  tabId: 1,
  label: 'Services',
  path: "/services",
  exact: true,
  component: Services,
  menuId: 'services-menu',
  subRoutes: [{
    order: 5,
    tabId: 1,
    label: 'Custom Software',
    path: "/custom-software",
    exact: true,
    component: () => <div>Custom Software</div>,
  }, {
    order: 6,
    tabId: 1,
    label: 'Web apps',
    path: "/web-apps",
    exact: true,
    component: () => <div>Web apps</div>,
  },
  {
    order: 7,
    tabId: 1,
    label: 'Mobile apps',
    path: "/mobile-apps",
    exact: true,
    component: () => <div>Mobile apps</div>,
  }],
},
{
  order: 2,
  tabId: 2,
  label: 'Revolution',
  path: "/revolution",
  exact: true,
  component: () => <div>Revolution</div>,
},
{
  order: 3,
  tabId: 3,
  label: 'About',
  path: "/about",
  exact: true,
  component: () => <div>About</div>,
},
{
  order: 4,
  tabId: 4,
  label: 'Contact Us',
  path: "/contact",
  exact: true,
  component: () => <div>Contact Us</div>,
}];

export const flatRoutes = flatMap(routes, r => [r, ...(r.subRoutes || [])]);

export default routes.sort((a, b) => a.order - b.order);
