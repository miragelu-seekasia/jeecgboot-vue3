import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const shell: AppRouteModule = {
  path: '/shell',
  name: 'Shell',
  component: LAYOUT,
  redirect: '/shell/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'mdi:powershell',
    title: t('routes.shell.shell'),
    orderNo: 11,
  },
  children: [
    {
      path: 'index',
      name: 'ShellPage',
      component: () => import('/@/views/shell/index.vue'),
      meta: {
        title: t('routes.shell.shell'),
        icon: 'mdi:powershell',
        hideMenu: true,
      },
    },
  ],
};

export default shell;
