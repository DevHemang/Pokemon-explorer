# Pokémon Explorer

A simple React application built with Vite that allows users to explore the first 150 Pokémon using data from the PokeAPI.

## Features

- Search Pokémon by name
- Filter Pokémon by type
- View Pokémon cards with name, image, ID, and types
- Responsive design for desktop and mobile
- Clean and simple UI with proper loading and error states
- Functional components with React Hooks

## Getting Started

### 1. Clone the repository


git clone https://github.com/your-username/pokemon-explorer.git
cd pokemon-explorer


### 2. Install dependencies

npm install


### 3. Start the development server


npm run dev


## Project Structure


src/
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── TypeFilter.jsx
│   ├── PokemonCard.jsx
│   ├── PokemonList.jsx
│   └── Footer.jsx
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css


## API Used

[PokeAPI](https://pokeapi.co/) - a free RESTful API for Pokemon data.
