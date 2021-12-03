import localeMessageBox from '../components/MessageBox/locale/zh-CN';
import localeWorkplace from '../pages/workplace/locale/zh-CN';
import localeSuccess from '../pages/success/locale/zh-CN';
import locale403 from '../pages/403/locale/zh-CN';
import locale404 from '../pages/404/locale/zh-CN';
import locale500 from '../pages/500/locale/zh-CN';
import localeError from '../pages/error/locale/zh-CN';
import localLoan from '../pages/Loan/local/zh-CN';
import SnkrsManage from '../pages/SnkrsManage/local/zh-CN';
import localSnkrsTrack from '../pages/SnkrsTrack/local/zh-CN';
import Electronic from '../pages/Electronic/local/zh-CN';

export default {
  'menu.dashboard': '仪表盘',
  'menu.list': '列表页',
  'menu.loan': '借贷',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'navbar.docs': '文档中心',
  'menu.electronic': '电子产品',
  ...localeMessageBox,
  ...localLoan,
  ...localeWorkplace,
  ...localeSuccess,
  ...locale403,
  ...locale404,
  ...locale500,
  ...localeError,
  ...SnkrsManage,
  ...Electronic,
  ...localSnkrsTrack,
};
