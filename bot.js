const Discord = require('discord.js');
const client = new Discord.Client();
const info = require('./info.json')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
    console.log("Ready to collect em");
    client.user.setActivity('The rain fall', { type: 'Watching' })
  });
  client.on("message", async message => {
    const args = message.content.slice(info.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.content === info.prefix+"ping") {
        const m = await message.channel.send("Ping?....");
        m.edit(`meh is on.. - Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
      }

      const Owner = client.users.get("378034334457921539");  
      if (command === "shinytest" ){
        const shinyCatch = [info.usedPokemon+" ​ Vs.​ ​ ​​★ "]
        const shinyTest = new Discord.RichEmbed()
	    .setColor('#0099ff')
	    .setAuthor(`${shinyCatch}Bulbasaur`, 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        message.channel.send(shinyTest);
      }
       if (command === "dittotest" ){
        const dittoCatch = [info.usedPokemon+" ​ Vs.​ ​ ​​Ditto"]
        const dittoTest = new Discord.RichEmbed()
	    .setColor('#0099ff')
	    .setAuthor(`${dittoCatch}`, 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        message.channel.send(dittoTest);
      }
      if(command === "say") {
      
        const sayMessage = args.join(" ");
        message.channel.send(sayMessage);
      }

  /*if(message.channel.id === '583944179218907139'){
      message.channel.fetchMessages({ limit: 1 }).then(messages => {
     const lastMessage = messages.first()
      client.channels.filter((x) => x.createdTimestamp < Date.now() - 10000).forEach((x) => x.send("bois"))
      })
  }*/

  message.embeds.forEach((embed) => {
    if (embed.description){
      const cancelNotFight = [info.usedPokemon]
      if(cancelNotFight.some(word => embed.description.includes(word)) ){
        return 0; 
      }
    }
    

    
    if (embed.author) {
  const dittoCatch = [info.usedPokemon+" ​ Vs.​ ​ ​​Ditto"]
  const searchFight = [info.usedPokemon+" ​ Vs."];
  const shinyCatch = [info.usedPokemon+" ​ Vs.​ ​ ​​★ "]
   if(dittoCatch.some(word => embed.author.name.includes(word)) ){
    setTimeout(() => { message.channel.send("lvl") }, 2000)

   }else

if(shinyCatch.some(word => embed.author.name.includes(word)) ){
Owner.send("catching a shiny")
  
  setTimeout(() => { message.channel.send("lvl") }, 1000)
}else{
  if(searchFight.some(word => embed.author.name.includes(word)) ) {
    console.log(embed.author.name)
   setTimeout(() => { message.react("1⃣") }, 1500)
    }
  const reFight2 = ["Wild battle has ended!"];
  if(reFight2.some(word => embed.author.name.includes(word)) ) {
    console.log(embed.author.name)
   setTimeout(() => { message.channel.send(".route "+info.routeNumber) }, 1000)
    }
    const reFight3 = ["Swapping"];
    if(reFight3.some(word => embed.author.name.includes(word)) ) {
      console.log(embed.author.name)
     setTimeout(() => { message.channel.send(".route "+info.routeNumber) }, 300000)
      }
  }
}
});
message.embeds.forEach((embed) => {
  if (embed.description){
    const reFight = [info.usedPokemon+" gained"];
    if(reFight.some(word => embed.description.includes(word)) ) {
     setTimeout(() => { message.channel.send(".route "+info.routeNumber) }, 500)
      }
  }

});
try{
    client.on("message", async message => {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      if (command === "spam") {
        var count = 1; 
        var maxMessages = 99999999;
        var timeToWait = null, minTime = 3600000, maxTime = 3900000;
        var content = null;
        var prune = false;
        var argLength = process.argv.length;
        for (let j = 2; j < argLength; j++) {
            var argsLeft = j + 1 < argLength;
            var arg = process.argv[j];
            var nextArg = process.argv[j + 1];
  
            if (argsLeft) {
              if (arg == "--message") {
                content = nextArg;
              } else if (arg == "--maxMessages") {
                maxMessages = nextArg;
              } else if (arg == "--setTime") {
                timeToWait = nextArg;
              } else if (arg == "--maxTime") {
                maxTime = nextArg;
              } else if (arg == "--minTime") {
                minTime = nextArg;
              }
            }
  
            if (arg == "--prune") {
              prune = true;
            }
        }
  
        function sendSpamMessage() {
          if (content === null) {
            content = ".route 1";
          }
  
          message.channel.send(content);
  
          if (count < maxMessages) {
            if (prune) {
              message.channel.send("/prune");
            }
            
            count++;
  
            if (timeToWait === null) {
              timeToWait = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
            }
  
            setTimeout(sendSpamMessage, timeToWait);
          } else {

            message.channel.send("------------------");
            message.channel.send("I AM FINISHED!!!");
            message.channel.send("------------------");
          }
        }
  
        message.delete().catch(O_o=>{})
        sendSpamMessage();
      }
  
      if (command === "prune") {
        message.channel.fetchMessages()
        .then(messages => {
          let message_array = messages.array();
          message_array.length = 2;
          message_array.map(msg => msg.delete().catch(O_o => {}));
         });
      }
    });
  } catch (error) {
    console.error("CAUGHT ERROR: " + error);
  }
  });


client.login(process.env.BOT_TOKEN);
