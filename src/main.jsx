import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './components/App.jsx'
import FavouritePokemonList from './components/FavouritePokemonList.jsx'
import PageLayout from './components/_PageLayout.jsx'
import ButtonCounter from './components/ButtonCounter.jsx'

// Find an element on the current webpage that we can latch on to
// let reactRootElement = document.getElementById("root");

// This would replace the ENTIRE body with React, which isn't always great
// reactRoot = document.body;

// Initialise React inside the chosen HTML element
// let readyReactRoot = createRoot(reactRootElement);

// Tell React to start rendering and running
// readyReactRoot.render(<div>Hello, world!</div>)

createRoot(document.getElementById('root')).render(
  // React app starts now!!!
  <StrictMode>

    <PageLayout>

      <ButtonCounter />
      
      <FavouritePokemonList />

    </PageLayout>

    {/* <FavouritePokemonList />
    <App /> */}
  </StrictMode>,
)
