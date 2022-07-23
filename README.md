# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Page preview](https://user-images.githubusercontent.com/57645180/180589377-8a4c1503-2d08-453e-88fc-4c860590d7eb.png)

### Links

- Live Site URL: [Live Demo](https://cacosted.github.io/advice-generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Sass
- Flexbox
- CSS Grid
- Mobile-first workflow
- Node

### What I learned

I installed Sass preprocessor to handle styling, was really interesting to set it up with node:

```js
  //Installed as a developer dependency and without caret(ˆ)
  npm install sass -ED
```

In this project a learn how works `@use` to modularize the styling files:
```css
  @use 'card' as card

  /* Here is inserted the styles from card.sass */
  card
```

### Useful resources

- [Sass documentation](https://sass-lang.com/) - The official documentation helped me setup `sass` with `npm`.
- [Sass modules](https://css-tricks.com/introducing-sass-modules/) - This was a great article to understand better `@use` and how to use it to modularize the styles.

## Author

- Frontend Mentor - [@cacosted](https://www.frontendmentor.io/profile/cacosted)
- Twitter - [@cacosted](https://www.twitter.com/cacosted)

