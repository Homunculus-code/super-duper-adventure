const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const Discord = require("discord.js");
const client = new Discord.Client();
var myid = process.env.myid.toString();
var id2 = process.env.sebid.toString();
var id3 = process.env.dakshinid.toString();
const ytdl = require("ytdl-core");
const fs = require("fs");
const randomValue = Math.random();
const ffmpeg = require("ffmpeg");
let commieSwitch;
let gaySwitch = true;

const embedDev =
    {
      "title": "Who developed BetaBot?",
      "description": "'Twas  <@280014222505672705>, emblazoned in the annals of history as the greatest communist known to mankind, who developed me in his humble abode in Stalingrad. To silence any of you nasty detractors out there, here is the link to the code that birthed me:\nhttps://repl.it/@DeepakSrinivas/ChartreuseConsideratePolygons#index.js",
      "url": "https://repl.it/@DeepakSrinivas/ChartreuseConsideratePolygons#index.js",
      "color": 1197019,
      "author": {
        "name": "воnк"
      }
    }

        
  
    



client.on("message", receivedMessage => {
  if (receivedMessage.author == client.user) {
    return;
  }
  receivedMessage.content = receivedMessage.content.toUpperCase();
  if (
    receivedMessage.content.includes(client.user.toString()) &&
    !receivedMessage.content.includes(
      "STFU " + "<@" + process.env.botid.toString() + ">"
    )
  ) {
    receivedMessage.channel.send(
      "wdyw, trying to sleep rn " + receivedMessage.author.toString()
    );
    return;
  }
  if (
    receivedMessage.content.includes("PLS FIGHT " + "<@" + myid + ">") ||
    receivedMessage.content.includes("PLS FIGHT " + "<@" + id2 + ">")
  ) {
    receivedMessage.channel.send(
      "Oh. You're approaching me?" + receivedMessage.author.toString(),
      {
        files: [
          "https://i.kym-cdn.com/entries/icons/mobile/000/028/775/Screen_Shot_2019-03-06_at_4.32.48_PM.jpg"
        ]
      }
    );
  }
});

client.on("message", receivedMessage => {
  receivedMessage.content = receivedMessage.content.toUpperCase();
  const channel = client.channels.cache.get(process.env.channelId.toString());
  if (!channel) {
    return;
  }

  if (receivedMessage.content.includes("PLS FIGHT " + "<@" + myid + ">")) {
    receivedMessage.channel.send("*anime background music kicks in*");
    channel
      .join()
      .then(connection => {
        const stream = ytdl("https://www.youtube.com/watch?v=2MtOpB5LlUA/", {
          filter: "audioonly"
        });
        const dispatcher = connection.play(stream);
        dispatcher.on("finish", () => channel.leave());
      })
      .catch(e => {
        console.error(e);
      });
  }
});

client.on("message", receivedMessage => {
  receivedMessage.content = receivedMessage.content.toUpperCase();
  if (receivedMessage.author == client.user) {
    return;
  }
  if (receivedMessage.content.includes("!PLAY SONG FOR DENISE")) {
    receivedMessage.channel.send("All hail the Soviet Union.", {
      files: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/800px-Flag_of_the_Soviet_Union.svg.png"
      ]
    });
  }
});

client.on("message", receivedMessage => {
  receivedMessage.content = receivedMessage.content.toUpperCase();
  const channel = client.channels.cache.get(process.env.channelId.toString());
  if (receivedMessage.author == client.user) {
    return;
  }
  if (receivedMessage.content.includes("HAIL THE SOVIET UNION")) {
    receivedMessage.channel.send("Приветствую Советский Союз", {
      files: [
        "https://media1.tenor.com/images/d1cb6fbd85a8f506e8040587a550b42e/tenor.gif?itemid=16872580"
      ]
    });
    channel
      .join()
      .then(connection => {
        const stream = ytdl("https://www.youtube.com/watch?v=x72w_69yS1A", {
          filter: "audioonly"
        });
        const dispatcher = connection.play(stream);
        dispatcher.on("finish", () => channel.leave());
      })
      .catch(e => {
        console.error(e);
      });
  }
});

client.on("message", receivedMessage => {
  receivedMessage.content = receivedMessage.content.toUpperCase();
  const channel = client.channels.cache.get(process.env.channelId.toString());
  if (receivedMessage.author == client.user) {
    return;
  }
  if (
    receivedMessage.content.includes(
      "STFU " + "<@" + process.env.botid.toString() + ">"
    )
  ) {
    channel.leave();
    receivedMessage.channel.send("bye");
    return;
  }
});



client.on("message", receivedMessage => {
  receivedMessage.content = receivedMessage.content.toUpperCase();
  if (receivedMessage.author == client.user) {
    return;
  }
  if (receivedMessage.content.includes("VOTE ")) {
    const receivedMessageData = receivedMessage.content;
    const newMessage = receivedMessageData.slice(5);
    receivedMessage.channel.send(
      "yeah bro i saw " + newMessage.toLowerCase() + " jump in vent"
    );
    setTimeout(function() {
      receivedMessage.channel.send(client.user.toString() + " 𝗵𝗮𝘀 𝘃𝗼𝘁𝗲𝗱.");
    }, 2000);
    setTimeout(function() {
      receivedMessage.channel.send(
        "<@" + receivedMessage.author + ">" + " 𝗵𝗮𝘀 𝘃𝗼𝘁𝗲𝗱."
      );
    }, 4000);
    setTimeout(function() {
      receivedMessage.channel.send(
        `. 　　　。　　　　•　 　ﾟ　　。 　　.

　　　.　　　 　　.　　　　　。　　 。　. 　

.　　 。　　　　　 ඞ 。 . 　　 • 　　　　•

　　ﾟ.        ` +
        newMessage.toLowerCase() +
        ` was An Impostor.　 。　.

　　'　　　 0 Impostors remain. 　 　　。

　　ﾟ　　　.　　　. ,　　　　.　 .`
      );
    }, 6000);
  }
});

client.on("message", receivedMessage => {
  receivedMessage.content = receivedMessage.content.toUpperCase();
  if ((client.user == receivedMessage.author) || receivedMessage.webhookID || commieSwitch === false) {
    return;
  }
  if (receivedMessage.content.includes('MY')) {
    var content1 = receivedMessage.content;
    var content2 = content1.replace('MY', '**our**');
    let finalMessage = 'I think you meant to say, ' + '*' + content2.toLowerCase() + '*' ;
    receivedMessage.channel.createWebhook('Stalin', {
	avatar: 'https://www.historycrunch.com/uploads/4/1/1/6/41169839/hcstalin1_orig.jpg',
})
	.then(webhook =>
    webhook.send((finalMessage))
  )
  }
  if (receivedMessage.content.includes('YOUR')) {
    var content11 = receivedMessage.content;
    var content3 = content11.replace('YOUR', '**our**');
    receivedMessage.channel.createWebhook('Stalin', {
	avatar: 'https://www.historycrunch.com/uploads/4/1/1/6/41169839/hcstalin1_orig.jpg',
})
	.then(webhook =>
    webhook.send(('I think you meant to say, ' + '*' + content3.toLowerCase() + '*')))
  }
  if(true){
   receivedMessage.channel.fetchWebhooks().then((webhooks) => { if (webhooks.size <= 6)
       {webhooks.forEach((wh) => wh.delete())};
   });
}
})



client.on('message', receivedMessage =>{
  receivedMessage.content = receivedMessage.content.toUpperCase();
  if (receivedMessage.content.includes('!DISABLE COMMUNIST LINGO') && !(receivedMessage.content.includes('>'))){
      commieSwitch = false;
      receivedMessage.channel.send('Communist Lingo has been disabled. The USSR will contact you shortly.')
  }
  if (receivedMessage.content.includes('!ENABLE COMMUNIST LINGO') && !(receivedMessage.content.includes('>'))){
      commieSwitch = true;
      receivedMessage.channel.send('Communist Lingo has been enabled. All hail the USSR.')
  }
  if (receivedMessage.author == client.user || commieSwitch === false){
    return;
  }
  if (receivedMessage.content.includes('OUR') && (!receivedMessage.content.includes('>')) && receivedMessage.webhookID){
  let randomInt = Math.random();
  console.log(randomInt);
  if (randomInt <= 0.3){
    receivedMessage.channel.createWebhook('USA', {
	avatar: 'https://miro.medium.com/max/2470/0*o0-6o1W1DKmI5LbX.png',
}).then(webhook => setTimeout(function() {
      webhook.send("> " + receivedMessage.content.toLowerCase() + "\n"+ "guys communism isn't cool");
    }, 2000))
   receivedMessage.channel.createWebhook('USA', {
	avatar: 'https://miro.medium.com/max/2470/0*o0-6o1W1DKmI5LbX.png',
}).then(webhook => setTimeout(function() {
      webhook.send("btw you guys got any oil on you");
    }, 4000))
  receivedMessage.channel.createWebhook('USA', {
	avatar: 'https://miro.medium.com/max/2470/0*o0-6o1W1DKmI5LbX.png',
}).then(webhook => setTimeout(function() {
      webhook.send("asking for a friend");
    }, 6000))
  
  }
  if (randomInt > 0.7){
    receivedMessage.channel.createWebhook('Bald birb', {
	avatar: 'https://kids.nationalgeographic.com/content/dam/kidsea/kids-core-objects/animals/5-reasons/5-reasons-eagle.adapt.1900.1.jpg',
}).then(webhook => webhook.send('> ' + receivedMessage.content.toLowerCase() + '\n' + 'caw caw motherfuckers'))
}
} 
})


client.on('message', receivedMessage =>{
  receivedMessage.content = receivedMessage.content.toUpperCase();
  if (client.user == receivedMessage.author){
    return;
  }
  if (receivedMessage.content.includes('!DISABLE SIMON') && !(receivedMessage.content.includes('>'))){
      gaySwitch = false;
      receivedMessage.channel.send("Simon has been disabled...but this debate will rage on for decades to come: why are you gae?")
  }
  if (receivedMessage.content.includes('!ENABLE SIMON') && !(receivedMessage.content.includes('>'))){
    gaySwitch = true;
    receivedMessage.channel.send('Simon has been enabled, and has this to say.');
    receivedMessage.channel.createWebhook('Simon Kaggwa Njala', {
	 avatar: 'https://memegenerator.net/img/images/72764888.jpg',
    }).then(webhook => setTimeout(function() {
      webhook.send(" Hello, and welcome back. This is the Topical Discussion on the Morning Breeze on NBS television. My name is Simon Congangula. We are also weighing on the raging debate on homosexuality in Uganda, which has taken another twist today, with questions as to whether Uganda is indeed becoming a safe haven for homosexuals. The President on Monday attended the inauguration of the new archbishop of the Church of Uganda at the Cathedral has insisted that he has no problems with homosexuals, as long as they do not promote the practice. We bring you in this studio this morning, one of the gay rights activist. Mr Julian Pepe Ozimma. Thank you for coming in. Should I call you Mr? Why are you gay?");
    }, 4000))
  }
  if ((receivedMessage.content.includes('GAY') || receivedMessage.content.includes('GAE')) && !(receivedMessage.content.includes('>')) && (gaySwitch === true) && (!receivedMessage.webhookID)){
    receivedMessage.channel.createWebhook('Simon Kaggwa Njala', {
	avatar: 'https://memegenerator.net/img/images/72764888.jpg',
}).then(webhook => webhook.send('> ' + receivedMessage.content.toLowerCase() + '\n' + '𝚠𝚑𝚢 𝚊𝚛𝚎 𝚢𝚘𝚞 𝚐𝚊𝚎?'))
  }
}
)

client.on("message", receivedMessage => {
  receivedMessage.content = receivedMessage.content.toUpperCase();
  if (client.user == receivedMessage.author) {
    return;
  }
  if (receivedMessage.content.includes('WHO THE FUCK DEVELOPED YOU ' + "BETABOT") || receivedMessage.content.includes('WHO DEVELOPED YOU ' + "BETABOT")||receivedMessage. content.includes('!DEVELOPER BETABOT')) {
    receivedMessage.channel.send( {embed:embedDev})
  }
})
client.login(process.env.token.toString());
