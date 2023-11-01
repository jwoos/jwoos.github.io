---
title: Chrome Storage
date: 2017-08-21
draft: false
description: ""
tags:
archive:
    - 2017
---

GitHub: [chrome storage](https://github.com/jwoos/chrome_storage)  
Demo: N/A

<!-- more -->

The Chrome brower has a storage API for storing data, acting as a sort of database for the extensions and now deprecated applications. However, a unique feature of the chrome storage API is the fact that the developer can opt to actually sync the data between the user's various devices.

I was interested in making an extension that would deal with storing data so I looked into the API. I thought it was very interesting but I found it a bit lackluster. It doesn't allow for an easy interaction with deeply nested object and is mostly meant as a flat structure. However, it DOES allow a user to store those objects so I thought that maybe I can make the interactions easier.

The library allows the developer to interact easily with multilevel structures as well as keeping past history in memory, potentially allowing a user to do a rollback. I think it's done for now but I won't really know until it's out in the wild being used by various developers (including myself). I am hoping to finally get around to making that extension now that the library is finished.
