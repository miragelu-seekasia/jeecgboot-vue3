import { defHttp } from '/@/utils/http/axios';

enum Api {
  listCementByUser = '/sys/annountCement/listByUser',
  editCementSend = '/sys/sysAnnouncementSend/editByAnntIdAndUserId',
}

/**
 * 列表接口
 * @param params
 */
export const listCementByUser = () => {
  return { sysMsgList: [], anntMsgTotal: 0, sysMsgTotal: 0, anntMsgList: [] };
};

export const editCementSend = (anntId, params?) => defHttp.put({ url: Api.editCementSend, params: { anntId, ...params } });
