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

We'll use **NodeJS** like a server and cron-manager, **Firebase** for storing our data and **Telegram** as messenger, because I'm a huge fan of this messenger 🥰

Of course, you need to install Node on your computer and has accounts in [Firebase](https://firebase.google.com/) and [Telegram](https://telegram.org/).

## Let's do this, captain

First of all we need to create new bot with @botfather in Telegram. It's very easy - just start your conversation with @botfather, than type /newbot command and send the name of your new bot. After that you'll receive message with the token.
