const routes = [{
  order: 0,
  label: 'Home',
  path: "/",
  exact: true,
  component: () => <div>Home</div>,
},
{
  order: 1,
  label: 'Services',
  path: "/services",
  exact: true,
  component: () => <div>Services</div>,
},
{
  order: 2,
  label: 'Revolution',
  path: "/revolution",
  exact: true,
  component: () => <div>Revolution</div>,
},
{
  order: 3,
  label: 'About',
  path: "/about",
  exact: true,
  component: () => <div>About</div>,
},
{
  order: 4,
  label: 'Contact Us',
  path: "/contact",
  exact: true,
  component: () => <div>Contact Us</div>,
}];

export default routes.sort((a,b) => a.order - b.order);


/* <Route exact path="/custom-software" component={() => <div>Custom software</div> } />
<Route exact path="/web-apps" component={() => <div>Web apps</div> } />
<Route exact path="/mobile-apps" component={() => <div>Mobile apps</div> } /> */
