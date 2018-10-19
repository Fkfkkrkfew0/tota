const Discord = require('discord.js');
const client = new Discord.Client();
console.log("by ESMAEL");


client.on("ready", () => {
let channel =     client.channels.get("500073403391410206")
setInterval(function() {
channel.send(`lol`);
}, 999)
});
 
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
