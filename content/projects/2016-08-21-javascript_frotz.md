---
title: JavaScript Frotz
date: 2016-08-21
draft: false
description: ""
tags:
archive:
    - 2016
---

GitHub: [JavaScript Frotz](https://github.com/jwoos/javascript_frotz)  
Demo: N/A

<!-- more -->

Frotz is a zmachine interpreter for text based games, such as Zork. I was interested in making a Slack bot to play these games and wondered how I might be able to get it into a JavaScript environment. Fortuantely, while Frotz uses an ncurses interface normally, it can be compiled to use just plain text output.

Like most other languages, NodeJS allows execution of other processes using builtin modules so I decided to run the binary and feed the output to the application making use of the library. This way any application might make use of it. In addition to that, the library can take states to continue where the application left off last time. It can take a bit of tweaking but it works for now!
