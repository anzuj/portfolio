module.exports = {
    transpileDependencies:  ['vuetify', 'dotenv'],
    publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/',
    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'de',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
  }
