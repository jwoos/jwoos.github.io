---
title: Pocketistic
draft: false
date: 2016-06-30
description: ""
tags:
archive:
	- 2016
---

I like to think that I am a decent reader - Pocket certainly seemed to think so. Around the end of last year, I got an email from them claiming that I had made it to the top 5% of their readers. Wow! An amazing feat especially considering that I had started using the service around October or November (or perhaps people just don't read much on it...). I was pretty surprised reading the email, which led me to think about exactly how much I had read and that would have been that except Pocket does not provide *ANY* statistics at all.

<!-- more -->

Naturally, I was curious and decided to do some research as to if they had stats elsewhere. I did not find any such thing but I did get a look at their API documentation, which gave me hope. So, thinking that this would be a rather short project I decided to jump right into it. I set up a static page and wrote JavaScript to make a call to their API to retrieve data; after writing it I was pretty satisfied with myself and decided to give it a test run. I load the page and nothing. What? That couldn't possibly be right.

```
No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://test-cors.org' is therefore not allowed access.
```

Of course they didn't enable CORS... last time the API was updated was in 2012. So what would have been a relatively simple static website suddenly needed a backend to proxy the calls. Alright, no big deal I'd use Node.js and Express to create a simple proxy. However, when I started working on it something in me would not let me do a half assed job - if I'm going to do it, I might as well try my best. I spent a while thinking about how my files might be structured and how I might be able to scale the codebase later on. Not only that, but as I worked on authentication in the backend, I realized that there was a much greater potential. I could make a full fledged web app and not only show basic stats but calculate them as well. I could show which domain one had the most articles from, average word count, monthly average, percentile among users, etc. In short, I could become the stats provider that Pocket was missing.

So I got to work. I decided to use postgresql as my RDBMS mostly because it's simple to set up on Heroku and I didn't want to bother to deploy it on AWS or pay for it for that matter. I stuck with Express and Node.js for backend and got to writing code. In writing the authentication calls, I realized that I needed a way to manage sessions. It would have been quite annoying to have to log in every time I refreshed or quit the browser, so I was thinking about using cookies. After much research, I was ready to implement the sessions when I came across the express-session middleware and connect-pg-simple. The former made it **extremely** easy to manage sessions and interact with it while the latter allowed me to actually store these sessions in a database, allowing for persistence. After authentication was seen to be working I started working on proxying the calls, which wasn't too difficult. I just defined a GET endpoint which takes query parameters and then take all of it and send it off to Pocket to get the actual data.

After I set up the proxying endpoint, it was the moment of truth: what kind of data was I going to get from this (their documentation doesn't specify)? Id, title, url, created, updated, read, etc... Nothing that I wasn't expecting but it's certanly still a lot of data that I'd be able to work with. I was especially excited that they had the word count field which reduced the work for me and since it was my initial reason for starting this whole project. I pored over the data a while before I realized that I couldn't make an API call to get all this data each time. The list for mine was huge and I can imagine a user refreshing the page a few times on a slow connection or for whatever reason. It just would not be optimal to be proxying that much data constantly so I decided I wanted it to be in the database to access without rate limits and a dependency of outside sopurce. So I started thinking about how I might construct this when I realized that I'd need an ORM. Here we go again with a scope increase.

Looking for JavaScript ORM's I settled for Sequelize. I had to drop the current tables in the database and run Sequelize to generate models as well as migrations. This was becoming way too big for a side project, but surprisingly I enjoyed this increase in scope. A rather nice compliment for what I've been doing at work. After having done that, I realized that I'd need some way of relating sessions and users (a user can have multiple sessions: desktop, mobile, laptop, etc.). It would have been a perfect chance to create a migration to add a column to the session table with a foreign key on the user's primary key... except I had no idea how to do it. My session manager is still currently using connect-pg-simple, meaning that it does not use the ORM and that it doesn't seem like I have much option to change what gets saved. I took a look at sequelize-session and while it seems to give more options, it did not seem to do what I want it to do so I might have to fork it and just implement the feature myself. I also want to implement logic to cache all the data in a one to many relationship (user to articles) in the database which would refresh if it passes a certain threshold or is triggered manually. Sounds like extensive work and I'd have to think about the optimal way to do it.

Despite the huge increase in work, this has been a pretty good experience so far. I've learned a lot and hopefully I can learn more as I continue to work on this. Planning on having the core features done by at least a month from now (this is a sideproject after all). As a sidenote I hope I can find a session manager with all the features I want since I don't really want to implement it myself...