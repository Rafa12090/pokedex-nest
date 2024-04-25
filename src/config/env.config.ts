export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'development',
  mongodb:
    process.env.MONGODB ||
    'mongodb://monorail.proxy.rlwy.net:53894/nest-pokemon',
  port: process.env.PORT || 3000,
  defaulLimit: +process.env.DEFAULT_LIMIT || 5,
});
