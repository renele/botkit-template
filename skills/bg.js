module.exports = function (controller) {

    controller.hears([/^bg$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('Ok lets check your Blood Sugar Level');

            var fs = require('fs');
            var bloodsugar = fs.readFileSync('value.txt', 'utf-8')

           
            convo.say(bloodsugar);
            convo.ask('ok this looks ok!', function (response, convo) {
                
                convo.next();
            });
        });

    });
};