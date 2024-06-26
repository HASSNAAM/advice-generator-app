# Frontend Mentor - Advice Generator App Solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Desktop Design](./design/desktop-design.jpg)
![Mobile Design](./design/mobile-design.jpg)

### Links

- Solution URL: [Solution URL](https://github.com/HASSNAAM/advice-generator-app.git)
- Live Site URL: [Live site URL](https://hassnaam.github.io/advice-generator-app/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript (ES6+)

### What I Learned

Working on this project reinforced several key concepts in web development, including:

- **Fetch API**: Utilizing the Fetch API to make network requests and handle responses.
- **Async/Await**: Implementing `async` and `await` for cleaner and more readable asynchronous code.
- **Responsive Design**: Using CSS media queries to ensure the application looks good on different screen sizes.
- **CSS Flexbox**: Aligning and positioning elements using Flexbox for a responsive layout.

Here are some code snippets I'm particularly proud of:

```js
document.addEventListener("DOMContentLoaded", function () {
  const adviceTitle = document.querySelector(".advice-title");
  const adviceText = document.querySelector(".advice-text");
  const icon = document.querySelector(".icon");
  let isFetching = false;

  async function fetchAdvice() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const adviceNumber = data.slip.id;
      const advice = data.slip.advice;
      adviceTitle.textContent = `ADVICE # ${adviceNumber}`;
      adviceText.textContent = `"${advice}"`;
    } catch (error) {
      console.error(error);
      adviceText.textContent = "Failed to load advice. Please try again.";
    } finally {
      isFetching = false;
    }
  }

  icon.addEventListener("click", function () {
    if (!isFetching) {
      isFetching = true;
      fetchAdvice();
    }
  });
});
```

### Continued Development

For future projects, I would like to:

- Explore more advanced CSS techniques like CSS Grid.
- Implement additional features such as saving favorite pieces of advice or sharing them on social media.
- Dive deeper into performance optimization techniques to make my applications faster.

### Useful Resources

- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive documentation on web standards and JavaScript.
- [CSS-Tricks](https://css-tricks.com/) - Helpful articles and tips on using CSS effectively.

## Author

- Frontend Mentor - [@HassnaaMahmoud](https://www.frontendmentor.io/profile/HASSNAAM)

## Acknowledgments

I would like to thank the Frontend Mentor community for their support and feedback. Special thanks to anyone who took the time to review my code and provide constructive criticism. Your insights were invaluable in improving my solution.