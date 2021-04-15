const fetch = require('node-fetch');
const channelID = process.env.CHANNELID;


const gif = require("./commands/gif.js");
const greet = require("./commands/greet.js");
const p = require("./commands/manele.js");

const commands = {
    greet,
    gif,
    p
   
};

module.exports = async function(msg) {

    //console.log(msg.content);
    if(msg.channel.id == channelID){
        let tokens = msg.content.split(' ');
        let command = tokens.shift();
        if(command.charAt(0) === '!' || command.charAt(0) === '-') {
            command = command.substring(1);
            // ! reprezinta o comanda valida
            commands[command](msg, tokens);
        }

    }

}
    

