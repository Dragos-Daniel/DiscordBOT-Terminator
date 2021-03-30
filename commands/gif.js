const fetch = require('node-fetch');
module.exports = async function(msg, args) {

msg.channel.send("THE GIF IS COMING");
let keywords = 'terminator';
if(args.length > 0) {
    keywords  = args.join(" ");
}
let url =`https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&limit=8`;
let response = await fetch(url);
let json = await response.json();
//console.log(json);
msg.channel.send(json.results[Math.floor(Math.random()*json.results.length)].url);
};