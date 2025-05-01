# Memory Game

A simple and interactive memory game designed to test and improve memory skills. Built with HTML, CSS, and JavaScript, the game features a responsive design and dynamic gameplay.

---

## Am I Responsive

The Memory Game is fully responsive and has been tested using the [Am I Responsive](http://ami.responsivedesign.is/) tool. Below is a preview of how the game looks on different devices:

![Am I Responsive Screenshot](amiresponsive.png)

---

## Table of Contents
- [Memory Game](#memory-game)
  - [Am I Responsive](#am-i-responsive)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
    - [Existing Features](#existing-features)
    - [Future Features](#future-features)
  - [Game Rules](#game-rules)
  - [Technologies Used](#technologies-used)
  - [Testing](#testing)
    - [Manual Testing](#manual-testing)
    - [Bugs Fixed](#bugs-fixed)
  - [Deployment](#deployment)
    - [Local Deployment](#local-deployment)
    - [Live Deployment](#live-deployment)
  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgements](#acknowledgements)

---

## Overview

The Memory Game is a browser-based game where players must remember and click on highlighted circles in the correct order. The game becomes progressively more challenging as the sequence length increases. It is designed to be responsive and works on all screen resolutions.

---

## Features

### Existing Features
- **Dynamic Circles**: Four circles of varying sizes and colors are displayed on the screen.
- **Score Tracking**: A scorebox in the center tracks the player's current score.
- **Responsive Design**: The layout adjusts to fit all screen sizes, from desktops to mobile devices.
- **Interactive Gameplay**: Circles light up in a sequence, and the player must replicate the sequence by clicking the circles in the correct order.
- **Start Button**: A button to start or restart the game.

### Future Features
- Add difficulty levels (easy, medium, hard).
- Include a timer for added challenge.
- Save high scores locally or in a database.

---

## Game Rules

1. Click the "Start" button to begin the game.
2. Watch the sequence of circles lighting up.
3. Repeat the sequence by clicking the circles in the same order.
4. If you click the correct sequence, your score increases, and the sequence lengthens.
5. If you click the wrong circle, the game ends, and your score is displayed.

---

## Technologies Used

- **HTML**: Structure of the game.
- **CSS**: Styling and responsive design.
- **JavaScript**: Game logic and interactivity.

---

## Testing

### Manual Testing
- Verified that the game works on various screen sizes (desktop, tablet, mobile).
- Tested the sequence logic to ensure the game progresses correctly.
- Checked the responsiveness of the layout and elements.

### Bugs Fixed
- Fixed an issue where the circles did not resize properly on smaller screens.
- Resolved a bug where the scorebox text overflowed on mobile devices.

---

## Deployment

### Local Deployment
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Open the `index.html` file in your browser.

### Live Deployment
The game can be deployed using GitHub Pages:
1. Push the code to a GitHub repository.
2. Go to the repository settings and enable GitHub Pages.
3. The game will be available at `<your-github-username>.github.io/<repository-name>`.

---

## Credits

### Content
- Game logic inspired by classic memory games.

### Media
- Colors and design inspired by modern UI trends.

### Acknowledgements
- Special thanks to testers for providing feedback on responsiveness and gameplay.

