export default (env: string = 'dev') => {
  return require(`./config/webpack.${env}.ts`);
};
