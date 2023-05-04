const KumaUIWebpackPlugin = require("@kuma-ui/webpack-plugin").default;

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  target: "web",
  output: {
    path: __dirname + "/dist",
    filename: "out.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: KumaUIWebpackPlugin.loader,
          },
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [new KumaUIWebpackPlugin()],
};
