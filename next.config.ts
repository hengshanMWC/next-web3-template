import type { NextConfig } from 'next'
import UnoCSS from '@unocss/webpack'
import { presetUno } from 'unocss'
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack(config, context) {
    config.plugins.push(UnoCSS({ presets: [presetUno()] }))

    if (context.buildId !== 'development') {
      // * disable filesystem cache for build
      // * https://github.com/unocss/unocss/issues/419
      // * https://webpack.js.org/configuration/cache/
      config.cache = false
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    }) // 针对 SVG 的处理规则

    return config
  },
}

export default nextConfig
