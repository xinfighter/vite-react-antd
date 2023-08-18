import { ConfigProvider, App, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';

// import dayjs from 'dayjs'
// import 'dayjs/locale/zh-cn';
// dayjs.locale('zh-cn');

const AntdProvider = ({ children }) => {
  const config = {
    token: {
      // 1. 单独使用暗色算法
      //algorithm: theme.darkAlgorithm
      // 2. 组合使用暗色算法与紧凑算法
      //algorithm: [theme.darkAlgorithm, theme.compactAlgorithm]
      // Seed Token，影响范围大
      // colorPrimary: '#00b96b',
      // borderRadius: 2,
      // // 派生变量，影响范围小
      // colorBgContainer: '#f6ffed'
    }
  };

  return (
    <ConfigProvider
      locale={zhCN}
      componentSize={'default'}
      theme={config}
    >
      <App>{children}</App>
    </ConfigProvider>
  );
};

export default AntdProvider;
