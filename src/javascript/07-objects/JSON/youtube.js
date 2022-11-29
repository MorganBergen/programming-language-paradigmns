/*
 * @brief	parser for youtube json file  	
 * @date	sept 17 2022
 * @author	morgan bergen
 */

// object to hold all youtube data from json file
const yt_obj = require('./HISTORY.json');


function main() {
	console.log(`_______________________________________________________`);
	console.log(`welcome to the youtube history parser!\n\nthe following variables are available to you to query upon\n1.  title\n2.  url\n3.  channel\n4.  date & time\n`);
}

const prompt = require('prompt');
prompt.start();
prompt.get(['value'], function (err, result) {
	if (err) {
		return onErr(err);

	}));


/*
const prompt = require('prompt');

prompt.start();

prompt.get(['year', 'month'], function (err, result) {
	if (err) {
		return onErr(err);
	}
	console.log('Command-line input received:');
	console.log('  Year: ' + result.year);
	console.log('  Month: ' + result.month);
}
);

function onErr(err) {
	console.log(err);
	return 1;
}
*/

main();