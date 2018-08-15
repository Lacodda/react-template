module.exports = (api) => {
  const isProd = api.cache(() => process.env.NODE_ENV === 'production');

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            esmodules: !isProd,
          },
        },
      ],
      '@babel/preset-react',
      // 'minify': isProd, TODO: minify ??? - babel-preset-minify
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
    ],
  };
};
