/* eslint-disable */
var ExtractTextPlugin = require("../src/");
var loader = require.resolve('../src/loader');

describe('ExtractTextPlugin.extract()', () => {
  it('throws if given multiple arguments', () => {
    expect(() => {
      ExtractTextPlugin.extract('style-loader', 'css-loader');
    }).throws;
  });

  it('passes additional options to its own loader', () => {
    expect(ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader',
      publicPath: '/test'
    })).toEqual([
      { loader, options: { omit: 1, remove: true, publicPath: '/test' } },
      { loader: 'style-loader' },
      { loader: 'css-loader' }
    ]);
  });
});

