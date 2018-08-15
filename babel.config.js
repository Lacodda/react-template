module.exports = (api) => {
  const isProd = api.cache(() => process.env.NODE_ENV === 'production');

  return {
    presets: [
      [
        '@babel/preset-env',
        '@babel/preset-react',
        // 'minify': isProd, TODO: minify ???
        {
          modules: false,
          targets: {
            esmodules: !isProd,
          },
        },
      ],
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
    ],
  };
};
