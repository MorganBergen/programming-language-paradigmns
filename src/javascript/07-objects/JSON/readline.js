const prompt = require('prompt');

prompt.start();

prompt.get(['username', 'email'], function (err, result) {
    if (err) {
        return onErr(err);
    }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.email);
});


function main() {
    console.log(result.email);
}

function onErr(err) {
    console.log(err);
    return 1;
}


/*

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


const prompt = require('please enter the time in the following format\nyyyy-mm-ddThh:mm:ss:msmsms\n');

prompt.start();

prompt.get(['variable_time'], function (err, result) {
    if (err) {
        return onErr(err);
    }

    if (yt_obj.time === result.time) {
        console.log(`title: ${yt_obj.title}\nurl: ${yt_obj.url}\nchannel: ${yt_obj.channel}\n`);
    }
});

function onErr(err) {
    console.log(err);
    return 1;
}


main();

* /