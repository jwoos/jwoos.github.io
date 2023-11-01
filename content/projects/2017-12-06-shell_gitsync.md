---
title: GitSync
date: 2016-08-21
draft: false
description: ""
tags:
archive:
    - 2017
---

GitHub: [GitSync](https://github.com/jwoos/shell_gitsync)  
Demo: N/A

<!-- more -->

GitSync is an application to sync between a remote Git source and a local Git source. I wanted this for my usage as I had wanted to sync my various devices with first, GitHub and then later, GitLab. This would allow me not to put all my code on a remote source and worry about it going down or being lost (although I doubt this will ever happen) and have it on various devices. I also use it to sync changes across multiple devices so I don't have to worry about the code being out of sync.

I chose to write it in shell but I'm starting to wonder if I shouldn't have - but nevertheless so far it has worked out if not as cleanly as in other languages. I plan on extending it to allow various remote sources and allow smarter conflict resolution than just ignoring it.
