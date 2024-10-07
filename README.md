# Simpsons Memory Cards

## Overview
This project is part of [**The Odin Project**](https://www.theodinproject.com/) curriculum, focusing on hands-on projects to build practical skills in web development. The Simpsons Memory Cards project is a memory game developed using **React**, where the goal is to click on cards without repeating. The project also integrates character quotes fetched from the [**Simpsons Quote API**](https://thesimpsonsquoteapi.glitch.me/).

## Technologies Used
* **React**: A JavaScript library for building user interfaces.
* **TypeScript**: A typed superset of JavaScript.
* **Redux Toolkit**: For state management and handling game logic.
* **Vite**: A fast build tool and development server for modern web projects.
* **Tilt Animation**: Adds interactive [tilt effects](https://github.com/mkosir/react-parallax-tilt) to the cards.
* **Simpsons Quote API**: Fetches quotes and images from *The Simpsons*.

## Features
* A fun and interactive memory card game.
* Fetches Simpsons character data and quotes from an external API.
* Players must click 10 unique cards to win.
* **Redux Toolkit** for managing game state, including asynchronous data fetching with `createAsyncThunk`.
* Cards shuffle after every round, and CSS animations are applied to rotate and shuffle the cards.
* Tilt effect when hovering over cards for an immersive user experience.

## Live Demo
Check out the live version of the Simpsons memory cards application [here](https://simpsons-memory-cards.netlify.app/).

## Installation
To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd odin-memory-card
npm install
npm run dev
```
## Logos
* **Main logo**: Sourced from [Wikipedia Commons](https://en.m.wikipedia.org/wiki/File:The_Simpsons_yellow_logo.svg).
* **Loading logo**: Sourced from [All Free Download and Brands of the World](https://all-free-download.com/free-vector/download/the_simpsons_6_142572.html).
