# White Rabbit Telegram Bot
I am sharing the telegram robot I prepared to follow the latest music played on the online radio that is Kıyı Radio Turkce. 

## Features

- I get the name of the latest playing song on the Kıyı Radio Turkce.
- After then, I check the name that whether it is the same as the previously played song.
- If the music has changed, I send the message to the telegram channel. 

I have created a telegram channel to be informed about the latest playing music and I send the music names as a message to that channel. In order to catch the changing music on the radio, I had to trigger my code with a scheduled task. I deployed the project on heroku and installed the scheduled task plugin so that my code was constantly triggered.

## What did i use
- NodeJS
- HTTP
- Telegraf

## Installation and Bot Token

First of all, you need to create a telegram robot. Start talking to the robot at the link here https://telegram.me/BotFather

***Write a message***
```sh
/newbot
```

***Give your bot a name***
```sh
white_rabbit_bot
```

When you see the congratulations message, you now have a telegram bot.

## Last Step
Now change the telegram bot token information you get from the relevant line below in data.js.
```sh
var bot = new Telegraf('YOUR_TOKEN_HERE');
```

Now, you can run the project!  If you want to receive regular message notifications, you can publish this project on heroku and turn it into a background worker with the scheduled tasks plugin.
