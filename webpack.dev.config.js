const path = require('path');

module.exports = {
	/*入口*/
	entry:path.join(__dirname,'src/index.js'),

	/*输出*/

	output:{
	   path:path.join(__dirname,'./dist'),
	   filename:'bundle.js'
	}

}

