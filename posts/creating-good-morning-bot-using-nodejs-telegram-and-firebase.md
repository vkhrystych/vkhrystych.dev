---
title: 'How to build "good morning bot" using Node, Telegram and Firebase'
date: "2020-08-09"
emoji: "🤖"
---

One morning I understood, that I need a bot, that'll be meet me with actual news and weather for this morning. Because, why not? Let's remember [what the genius said](https://en.wikipedia.org/wiki/Three_Laws_of_Robotics):

- A robot may not injure a human being or, through inaction, allow a human being to come to harm.
- A robot must obey the orders given it by human beings except where such orders would conflict with the First Law

So, after we've dealt with the legal side of the business, we can start 👀

## Goal

Build the bot, that send message to you every morning with formatted links to the actual news and weather summary.

## Setup

We'll use **NodeJS** like a server and cron-manager, **Firebase** for storing our data and **Telegram** as messenger, because I'm a huge fan of it 🥰

Of course, you need to install Node on your computer and has accounts in [Firebase](https://firebase.google.com/) and [Telegram](https://telegram.org/).

## Let's do this, captain

### Init app

First of all we need to initialize our project. Type in your console:

```
mkdir gmbot
cd gmbot
npm init
```

Go throw npm init steps and then type in your terminal:

```
npm install dotenv telegraf firebase nodemon node-cron node-fetch  --save
```

What we installed:

1. dotenv - package for comfortable work with [environment variables](https://www.youtube.com/watch?v=zDup0I2VGmk)
2. telegraf - wrapper for Telegram bots API
3. firebase - bunch of services for serverless functionality: auth, database, file storage, etc.
4. nodemon - thing for comfortable development: restarts our node server if we change the file.
5. node-cron - run function in time intervals (each seconds, each day, etc.)
6. node-fetch - [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for NodeJS.

### Get tokens

Create file with ".env" name in root of the project folder. It will be our stakeholder for the tokens.

Then we need to do some steps for getting tokens.
After every step you can write token to our .env file in this format (you need to replace \*\*\* by your tokens):

![dotenv tokens](/images/posts/gmbot/tokens.svg)

1. [Create bot in Telegram](https://core.telegram.org/bots#3-how-do-i-create-a-bot)
2. [Create free account in Firebase](https://firebase.google.com/)
3. [Signup on openweather or other weather provider](http://openweathermap.org/)
4. Signup on some news feed with open API

How to create application on Firebase:

[![firebase gif](/images/posts/gmbot/firebase-config.gif)](/images/posts/gmbot/firebase-config.gif)

Click on picture to see the source GIF :)
