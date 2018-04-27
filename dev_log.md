# Tic Tac Toe on Grids

### What I learned:

* To manipulate `<canvas>` to draw lines or shapes (`.moveTo`, `lineTo`, `.stroke` and etc)

* To navigate location on user screen using window. properties, event, HTMLElement properties(`window.innerWidth`, `window,innerHeight`, `HTMLElement.offsetTop`,`HTMLElement.offsetLeft`, `MouseEvent.clientX`, `MounseEvent.clientY`, `HTMLElement.getBoundingClientReact` and etc)

* Importance of code architecture and thorough planning before starting to write codes.

### What I would like to improve:

* Understand Graph search algorithms and replace function `diagnolCheck` and function `verticalHorizontalCheck` with more elegant algorithms

* Draw canvas which enables user to zoom-in and zoom out on canvas, which does not modify the viewport.

* Find an approach to find a grid location without using `Math.trunc`

### Favorite piece of code:

* Inner function `findPoint` of function `verticalHorizontalCheck` and function `diagnolCheck`. It iterates `[x, y]` of each of clicked grids and finds elements which have potential winning line (by checking 4 steps away for 4 different directions).

### Thoughts:

* window and HTML object have a countless number of useful properties which I would like to take time to explore.

* I need to invest much more time on studying data structure and from basic to advanced algorithms step by step in order to come up with more dynamic and element ways to solve problems
