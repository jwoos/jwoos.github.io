---
title: Game of Life
date: 2017-08-25
draft: false
description: ""
tags:
archive:
    - 2017
---

GitHub: [game of life](https://github.com/jwoos/haskell_gameoflife)  
Demo: N/A

<!-- more -->

<asciinema-player src="/demo/haskell_gameoflife.json" cols="290" rows="32"></asciinema-player>

Functional programming always piqued my interest so I wanted to take the time to learn one and use it in a project. What better project than one I've been meaning to do for ages. The game of life had been something I wanted to work on but never could get around to doing - so it was perfect for me to sit down and play around with to learn a language.

The process wasn't great and the code is pretty bad. Many people suggest that Haskell is one of those languages that you need to just learn first - you can't just hop into a project with it and be okay. I'd have to agree after what I went throug. I read a bit of Learn You a Haskell for Great Good, but I had stopped right after the basics of monads and it turns out that pretty much any project would require a monad. Printing out to a terminal is a change in state and thus had to be a monad - I certainly did not have fun and I never quite really figured out how to run the entire process by itself instead of taking input. Nevertheless, I was able to put in a basic argument parser and got the logic of the game working.

For future work, I want to come back to this and make it entirely automated and polish the code up. If I ever get around to it.
