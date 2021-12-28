module.exports = {
  port: 8001,
  exclude: /should-be-ignore/,
  source: {
    api: './api',
  },
  theme: 'bisheng-theme-blog-site',
  lessConfig: {
    javascriptEnabled: true,
  },
  webpackConfig(config) {
    return config;
  },
  themeConfig: {
    home: '/',
    sitename: '筋斗云 openAPI',
  },
  root: '/',
  hash: true,
};