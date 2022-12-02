import { defHttp } from '/@/utils/http/axios';
import { getMenuListResultModel } from './model/menuModel';
import { menu } from '../mock/menu';

enum Api {
  GetMenuList = '/sys/permission/getUserPermissionByToken',
  SwitchVue3Menu = '/sys/switchVue3Menu',
}

/**
 * @description: Get user menu based on id
 */

export const getMenuList = () => {
  return new Promise((resolve) => {
    resolve(menu);
  });
};

/**
 * 切换成vue3菜单
 */
export const switchVue3Menu = () => {
  return new Promise((resolve) => {
    defHttp.get({ url: Api.SwitchVue3Menu });
  });
};
