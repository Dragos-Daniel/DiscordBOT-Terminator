const replies = [
    'Hello human, i look like Arnold',
    'GET TO THE CHOPPER. OOPS WRONG FRANCHISE',
    'I`LL BE SENDING MY REGARDS BACK ',
    'YOU ARE TERMINATED WITH HELLOES',
    'BONJOUR JE SUIS ARNOLD'
];

module.exports = function(msg, args) {

const index = Math.floor(Math.random() * replies.length);
msg.reply(replies[index]);
};