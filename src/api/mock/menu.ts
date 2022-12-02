// single
const dashboardRoute = {
  path: '/dashboard',
  name: 'Dashboard',
  component: 'LAYOUT',
  redirect: '/dashboard/welcome',
  meta: {
    title: 'routes.dashboard.dashboard',
    hideChildrenInMenu: true,
    icon: 'bx:bx-home',
  },
  children: [
    {
      path: 'welcome',
      name: 'Welcome',
      component: '/dashboard/welcome/index',
      meta: {
        hideMenu: true,
        hideBreadcrumb: true,
        title: 'routes.dashboard.welcome',
        currentActiveMenu: '/dashboard',
        icon: 'bx:bx-home',
      },
    },
  ],
};

// icon from https://iconify.design/
const shellRoute = {
  path: '/shell',
  name: 'Shell',
  component: '/shell/index',
  meta: {
    title: 'routes.shell.shell',
    icon: 'mdi:powershell',
  },
};

const dbRoute = {
  path: '/db',
  name: 'Database',
  component: 'LAYOUT',
  meta: {
    title: 'routes.db.database',
    icon: 'ant-design:database-filled',
  },

  children: [
    {
      path: 'wording',
      name: 'Wording',
      component: '/db/wording/index',
      meta: {
        title: 'routes.db.wording',
        icon: 'fluent:text-whole-word-20-regular',
      },
    },
  ],
};
export const menu = [dashboardRoute, shellRoute, dbRoute];
