import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const shell: AppRouteModule = {
  path: '/db',
  name: 'DB',
  component: LAYOUT,
  redirect: '/db/index',
  meta: {
    title: 'routes.db.database',
    icon: 'ant-design:database-filled',
    orderNo: 12,
  },
  children: [
    {
      path: 'wording',
      name: 'WordingPage',
      component: () => import('/@/views/db/wording/index.vue'),
      meta: {
        title: 'routes.db.wording',
        icon: 'fluent:text-whole-word-20-regular',
      },
    },
    {
      path: 'execSql',
      name: 'ExecSqlPage',
      component: () => import('/@/views/db/execSql/index.vue'),
      meta: {
        title: 'routes.db.execSql',
        icon: 'codicon:run-all',
      },
    },
    {
      path: 'jobAndJobSeeker',
      name: 'jobAndJobSeekerPage',
      component: () => import('/@/views/db/jobAndJobSeeker/index.vue'),
      meta: {
        title: 'routes.db.jobAndJobSeeker',
        icon: 'tabler:row-insert-top',
      },
    },
  ],
};

export default shell;
