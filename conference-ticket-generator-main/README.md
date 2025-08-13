
# Frontend Mentor – Conference Ticket Generator

![Design preview for the Conference Ticket Generator coding challenge](./preview.jpg)

## Overview

This is my solution to the [Conference Ticket Generator Challenge](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w) on Frontend Mentor.
The goal was to build an accessible and responsive form that generates a personalized conference ticket once submitted.

### The Challenge

Users should be able to:

* Fill out the form with their details
* See validation messages if:

  * Any field is left empty
  * The email address is invalid
  * The uploaded avatar is too large or in an unsupported format
* Navigate and complete the form entirely using a keyboard
* Hear inputs, hints, and error messages announced via a screen reader
* View the generated conference ticket upon successful submission
* See optimal layouts depending on device screen size
* See hover and focus states for all interactive elements

### Screenshot

![Screenshot of my solution](./screenshot.jpg)

### Links

* **Solution URL:** [Add solution URL here](https://your-solution-url.com)
* **Live Site URL:** [Add live site URL here](https://your-live-site-url.com)

---

## My Process

### Built With

* Semantic **HTML5** markup
* **CSS custom properties**
* **Flexbox** and **CSS Grid** for layout
* **Mobile-first** workflow
* Vanilla **JavaScript** for interactivity and validation
* Accessibility best practices (ARIA attributes, keyboard navigation, screen reader support)

### What I Learned

This challenge helped me strengthen my skills in:

* Implementing accessible form validation
* Using JavaScript to dynamically generate and style DOM elements
* Managing responsive design for complex layouts
* Handling file uploads and validating image size/type

Example: Form validation snippet

```js
if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
  showError("Please enter a valid email address");
}
```

### Continued Development

I’d like to focus more on:

* Improving accessibility for complex interactive components
* Implementing animations to enhance user experience
* Refactoring validation logic to be reusable across projects

### Useful Resources

* [MDN Web Docs – Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
* [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-complete-guide-to-flexbox/)
* [Frontend Mentor Community](https://www.frontendmentor.io/community)

---

## Author

* **Website:** [Your Name](https://your-website.com)
* **Frontend Mentor:** [@yourusername](https://www.frontendmentor.io/profile/yourusername)
* **Twitter:** [@yourusername](https://twitter.com/yourusername)

---

## Acknowledgments

Thanks to the Frontend Mentor community for feedback and accessibility tips during development.

---

If you want, I can also make a **shorter, portfolio-friendly version** of this README that looks more polished for recruiters. That would make it easier to showcase in your GitHub profile. Would you like me to create that next?
