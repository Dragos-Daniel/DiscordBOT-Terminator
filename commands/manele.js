const { TeamMember } = require("discord.js");
const ytsr = require("ytsr");

const keywords = [
    "SALAM",
    "GUTA",
    "JADOR",
    "HIT",
    "Velea",
    "2020",
    "2021",
    "MINUNE",
    "Adi",
    "TZANCA",
    "Stojan"
];

module.exports = async (msg, args) => {

    const query = args.join(" ");
    const res = await ytsr(query).catch( e => {
        return msg.channel.send("No results fleshling!")
    });

    const video = res.items.filter( i => i.type === "video")[0];
    if(!video)
        return msg.channel.send("No results fleshling!");
    const titlu = video.title.split(" ");
    const fraer = msg.member;
    for (const keyword of keywords){
        for(const cuv of titlu){
            if(cuv.toLowerCase() == keyword.toLowerCase()){
                fraer.voice.kick();
                msg.channel.send("You got kicked, you fat disgrace!")
                member.voice.kick();
            }
        }
        
    }
}