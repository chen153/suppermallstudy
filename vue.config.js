module.exports = {
  configureWebpack: {
  	resolve: {
  		alias: {
				'assets': '@/assets',
				'components': '@/components',
				'common': '@components/common',
				'network': '@/network',
				'views': '@/views',
			}
  	}
  }
}