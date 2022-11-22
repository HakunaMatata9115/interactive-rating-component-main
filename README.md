# Frontend Mentor - Interactive rating component solution

![component](./design/component.gif)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

<p align="center">
  <img src="./design/mobile.gif">
</p>

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

✨ main features below:

- hover states for all interactive elements

```css
.score {
  background-color: var(--color-dark-blue);
  color: var(--color-light-grey);
  width: 45px;
  height: 45px;
  padding: 15px 18px;
  margin-right: 15px;
  margin-bottom: 20px;
  border-radius: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.score:hover {
  background-color: var(--color-orange);
  color: var(--color-white);
  cursor: pointer;
}

.score:active {
  background-color: var(--color-midium-grey);
  color: var(--color-white);
  cursor: pointer;
}

.submit-btn {
  border: none;
  width: 250px;
  height: 40px;
  border-radius: 30px;
  background-color: var(--color-orange);
  color: var(--color-white);
  margin-left: 15px;
}

.submit-btn:hover {
  background-color: var(--color-white);
  color: var(--color-orange);
  cursor: pointer;
}
```

```css
.reset-btn {
  position: relative;
  top: 40px;
  left: 250px;
  border: none;
  width: 40px;
  height: 40px;
  padding: 10px 10px;
  border-radius: 30px;
  background-color: var(--color-light-grey);
  color: var(--color-white);
  margin-left: 15px;
  opacity: 0.35;
}

.reset-btn:hover {
  opacity: 0.6;
  cursor: pointer;
}
```

```css
.hidden {
  display: none;
}
```

- See the "Thank you" card state after submitting a rating and see the "Rating page" again after click a reset button.

```js
function handleSubmit() {
  thankyouComponent.classList.toggle("hidden");
  return ratingComponent.classList.toggle("hidden");
}

submitBtn.addEventListener("click", handleSubmit);
resetBtn.addEventListener("click", handleSubmit);
};
```

## Author

- Frontend Mentor - [@Hyeyoung-Lucia](https://www.frontendmentor.io/profile/Hyeyoung-Lucia)
