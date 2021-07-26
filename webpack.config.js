module.exports = {
  entry: "./src/main.jsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
    libraryTarget: "commonjs2",
  },
  devtool: false,
  externals: {
    application: "application",
    uxp: "uxp",
    scenegraph: "scenegraph",
    clipboard: "clipboard",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: [
            "@babel/plugin-proposal-object-rest-spread",
            "@babel/plugin-transform-react-jsx",
          ],
        },
      },
      {
        test: /\.(jpg|png|gif)$/,
        exclude: /node_modules/,
        loader: "file-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};
