import { defineConfig }  from '@modern-js/app-tools';

export default defineConfig({
  tools: {
    devServer: {
      proxy: {
        '/tx': {
          target: 'http://service-3k8gkc1x-1255468759.sh.apigw.tencentcs.com',
          changeOrigin: true,
          pathRewrite:{'^/tx':''}
        },
      },
    },
  },
});
