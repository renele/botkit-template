module.exports = function (controller) {

    controller.hears([/^bg$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('Ok lets check your Blood Sugar Level');

var request = require('request');
request.get({
    url: "https://rkt1d.herokuapp.com/api/v1/entries/current.json",
    json: true,
    headers: {'User-Agent': 'request'}
               }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
    var bloodsugar = data
    }
});


           
            convo.say(bloodsugar[0].sgv);
            convo.ask('ok this looks ok!', function (response, convo) {
                
                convo.next();
            });
        });

    });
};
