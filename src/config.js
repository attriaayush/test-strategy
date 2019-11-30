module.exports = {
  db: {
    host: process.env.APP_DB_HOST || 'localhost',
    user: process.env.APP_DB_USER || 'johndoe',
    password: process.env.APP_DB_PASSWORD || 'passwordpickedbyjohndoe',
  },
  app: {
    externalUrl: process.env.APP_EXTERNAL_URL || 'https://superservice.com/api',
  },
}