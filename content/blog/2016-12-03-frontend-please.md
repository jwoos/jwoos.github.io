---
title: Frontend Please
draft: false
date: 2016-12-03
description: ""
tags:
archive:
	- 2015
---

Ever since I finally got around to uninstalling Lazarus, I had determined that I would make an extension to fulfill the void that it left. About a week ago, I finally got around to start developing it - initially I was going to use plain JavaScript, HTML, and CSS but I decided that I might as well do it properly. So, I went ahead and took some time to configure Gulp so that I would be able to compile my Pug, SASS, lint my JavaScript and minify everything. This alone took a few hours as I searched for the best available solutions on the web and reading up on options and APIs. I didn't mind it too much - soon I was able to start writing actual code.

<!-- more -->

Not too far into writing my code, I realized that for the UI it would be infinitely easier on myself if I had some kind of reusable components. Now, reusable components is a big thing among frameworks these days - AngularJS, React, Inferno, Vue, Polymer - they all try to uphold the virtue DRY. So I started looking into these frameworks - I immediately dismissed AngularJS as I had trouble setting it up for web applications alone and the thought of setting it up for a different environment was not too appealing to me. I then took a look at VueJS - which seemed simple enough. But nothing is as easy as drop and go anymore - I had errors executing the script and found out that I would have to set up an environment and compile it. No thank you. I then took a look at ReactJS, one of the major frameworks and one which I had yet to learn. It would be a fine experience learning it while making something - or so I thought. I could not figure out how to set it up and did not want to spend the time so once again I dropped it.

Perhaps I was being too greedy? After all I had worked without a framework and still achieved things prior to this, but I got the nagging feeling that there must be something better than spending half my time wondering how to modularize my code if someone else took the pain to do so already. Finally, I decided to look at Polymer again - something I had taken an interest in when it was first announced. I looked at the scaffolded application and it seemed simple enough, so I immediately got down to work. I was able to get it working in a few hours but there were some weird quirks which took another few hours to hammer out. Overall I spent pretty much the whole day migrating my codebase to Polymer. Now to be fair, most of the web flows are directed at full web applications and not extensions so it would be fair I have some problems setting it up. However, I haven't learned React because of the high barrier of entry of setting it up.

Despite the difficulties I had and the headache I got trying to resolve them, I believe that it is worth it - at least for this project. I would write a few custom elements which would make up the majoprity of the UI that I need and Polymer's helper functions are sure to help a great deal. Although I could have probably gotten a feature or two down today, the setup in itself was a learning experience and and interesting one at that. However, next time I might set aside a chunk of time to specifically focus on the frameworks rather than trying to learn it in the middle of project. I really do hope that these setups become easier and stabilize out - learning new frameworks, variations on languages, and build tools are not fun at all and heavily impeded everyone's productivity. But until then, I shudder everytime I need to start a new project...
