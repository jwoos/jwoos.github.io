---
title: Rainbow GIF
date: 2019-02-16
draft: false
description: ""
tags:
archive:
    - 2019
---

GitHub: [rainbowgif](https://github.com/jwoos/go_rainbowgif)  
Demo: N/A

<!-- more -->

I'm a huge fan of Slack's custom emojis and the various collections that have surfaced. Among them, my favorite is the party parrot one. What stood out to me is the rainbow color that it has and I thought it'd be fun if I could apply it to any GIF to produce fun emojis. So naturally, I did.

# What does it do?
It overlays colors over each frame of the GIF to produce a rainbow effect similar to that of the party parrot. It seems to shift between colors gradually thanks to some math I'll get into in a bit! It should work with short GIFs but works best with longer ones as the color change will be more gradual.

# How?
## TL;DR
A gradient is generated based on the number of frames the input GIF has. Then the colors are applied to the respective frame and made into a new GIF.

All the colors in this uses [colorful](https://github.com/lucasb-eyer/go-colorful) as the standard color library did not have everything I needed.

## Gradient
Prior to constructing a gradient we have the colors that the gradient will use as its points: red, orange, yellow, green, blue, orange, violet, and red prime. As you may have noticed, these are the colors of the rainbow - the last color is to create the illusion of an endless loop in a GIF. These main 8 colors are constant throughout inputs - I hope to allow custom starting colors in the future.

Once the 8 colors are ready to go the program then takes the number of frames a GIF has. There are three cases that can arise from this: the number of frames can be less than, equal to, or greater than 8. All cases are basically handled the same way but the second case has a special attribute to it. If there are 8 frames then the colors used will be just the 8 starting colors I mentioned previously. However, this will obviously yield a very abrupt change frame to frame and will not look nice at all (this also applies to the first case).

How do we get the color for a GIF whose frame count is not equal to 8? The answer is to use positions. If we imagine those 8 colors to represent positions between 0 and 1, with the first color being 0 and last color being 1 then we can have a distribution. Since there are infinite points since 0 and 1 it would be impossible to generate every possible color (besides there being finite colors). Fortunately, the number of colors needed is known - the number of frames in the GIF.

The frames are also distributed into a distribution between 0 and 1, with the first frame being 0 and the last frame being 1. Now we have both our frames and the colors on the same scale. However, that still doesn't give us the colors for most if not all of the frames.

### Relative Position
In order to get the colors for all the frames, it is necessary to know what two colors a frame is located between in terms of the distribution which is why the positions were calculated beforehand. Knowing their absolute distribution, or position, we can get the relative position - or the position relative to two absolute positions.

It gets the closest color(s) based on the absolute position. Using this color as the new 0 and the next color as the new 1, the position of the frame can be scaled. This is the relative position of the color to be applied to the frame. The relative position shows how close the frame's color is to either color and is used in blending. Doing this for all of the frames results in a smooth transition between colors as well as looping.

## Blending
Now that the color for the frame is know, we can just overlay it right? Wrong. It turns out that the science of blending colors is actually pretty complex. I initially just tried overlaying it with different opacity and it looked horrible. I later learned that this is called alpha blending (or normal) since it works with the alpha channel. After some trial and error in Photoshop, I found one that would retain the underlying image's features - color blending.

Color blending works in HCL (hue, chroma, luma) and preserves the bottom layer's luma while adopting the top layer's hue and chroma. This yielded the result I wanted. I also had to ignore and pixel with an alpha value of 0 in order to avoid accidentally coloring in any pixel that shouldn't have been visible. Just blend all the pixels and voila we're done!

## Conclusion
This was definitely a fun project and I learned that colors are actually very complex, especially when it comes to color space and blending. I hope to extend the functionalities in the future but for now, I think it's good enough to create some new emojis for Slack!
