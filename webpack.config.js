module.exports = (env = 'dev') => {
  return require(`./webpack.${env}.js`);
}
