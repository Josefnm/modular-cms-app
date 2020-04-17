import path from 'path'

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    Config: JSON.stringify(
      process.env.NODE_ENV === 'production'
        ? {
            serverUrl: 'https://myserver.com',
          }
        : {
            serverUrl: 'http://localhost:8090',
          }
    ),
  },
}
