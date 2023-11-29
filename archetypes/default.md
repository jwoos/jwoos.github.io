---
title: {{ strings.Replace .Name "-" " " | title }}
date: {{$t := time.AsTime .Date }}{{ $t.Format "2006-01-02"}}
draft: true # Set 'false' to publish
description: ""
archive:
     - {{ $t.Year }}
tags:
-
---
