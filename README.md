# Itzfizz_web_development_internship
It is a internship assignment
To recreate the hero section of the reference site "Pha5e" with animations and interactive effects, let's go over the implementation in HTML, CSS, and JavaScript. I'll explain each step in the code to clarify how each functionality is achieved. Additionally, we'll use GSAP (GreenSock Animation Platform) for smoother animations and CSS transitions for hover effects. Here's the structured guide and the code to build this hero section.

Code Overview
1. HTML Structure
The HTML consists of a main hero section with several images and text elements. Each image and text block is wrapped in a container to enable positioning and interactivity.
2. CSS Styling and Animations
In styles.css, we'll add initial styles for the hero section, the text, and the images. We'll set up hover effects and transitions.
Animation Effects: The hover effects use transform: scale(1.1) to enlarge the hovered image, while other images turn grayscale for the vector-like effect.
Hover Styling: filter: grayscale(100%) is applied to non-hovered images to create the contrast effect.
3. JavaScript Interactivity with GSAP
We use GSAP for smooth animations on load and hover interactions. script.js will manage animations for initial text appearance and image hover.
Explanation of JavaScript Functionality
Initial Load Animation: We animate the text and images using GSAP, fading them in and moving them slightly from the top (y: -50) or bottom (y: 50).
Mouse Movement Effect:
The mousemove event listener calculates the position of the mouse relative to each image and adjusts the x and y coordinates to give a subtle parallax effect.
When the mouse leaves, the mouseleave event listener resets the image position to (0, 0).
Optional Improvements
If you want additional style or flexibility, consider adding:

Bootstrap for responsive structure.
WordPress Integration by embedding this hero section in a WordPress theme.
GSAP Advanced Features for more complex animations.
This setup provides a sleek, interactive hero section as described. With these animations and hover effects, the section dynamically engages users on page load and through their interactions.
