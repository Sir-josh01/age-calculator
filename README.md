# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Designing an age calculator that calculates one from age from the correct data inputed from the years, months and days.

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./Screenshots/Screenshot%20(74).png)
![](./Screenshots/Screenshot%20(75).png)
![](./Screenshots/Screenshot%20(76).png)
![](./Screenshots/Screenshot%20(77).png)
![](./Screenshots/Screenshot%20(78).png)


### Links

- Solution URL: [Add solution URL here](https://github.com/Sir-josh01/age-calculator)
- Live Site URL: [Add live site URL here](https://sir-josh01.github.io/age-calculator/)

## My process
- structure by HTML, designs and color by CSS and javascript handles the functionality and animation.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

- The designs was beautiful and enhanced my CSS skills. The javascript however was very challenging for me. Especially the logic behind the working of the age calculator. The bonus i added is still a big challenge for me i had to do alot of googling to finally get that. This is my best projecct yet...

```html
<h1>
  <!-- Proud of this syntax -->
  <div class="date-box">
    <label for="days">DAY</label>
    <input type="text" placeholder="DD" class="day-input" required />
    <div class="error-msg">Must be a valid day</div>
  </div>
</h1>
```

```css
.proud-of-this-css {
  .header .date-box .year-input,
  .header .date-box .month-input,
  .header .date-box .day-input {
    width: 70px;
  }
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
  document
    .querySelector(".day-input + .error-msg")
    .classList.remove("error-msg-active");
  document
    .querySelector(".month-input + .error-msg")
    .classList.remove("error-msg-active");
  document
    .querySelector(".year-input + .error-msg")
    .classList.remove("error-msg-active");
};
```

### Continued development

-Grid
-DOM manipulation
-Animation

### Useful resources

- [Example resource 1](https://www.w3school/cssMediaquery.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.w3school/CSS-animation.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@sir_josh01](https://www.frontendmentor.io/profile/sir_josh01)
- Twitter - [@sir_josh01](https://www.twitter.com/Sir_josh01)


## Acknowledgments

what can i say?? Google be doing the most
chatGPT is also been helpful in the process.
