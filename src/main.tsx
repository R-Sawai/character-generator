import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { CharacterGeneratorApp } from './CharacterGeneratorApp'
import { characterDataStore } from './utils/characterDataStore';


// スクロールをスムーズにするよう変更
document.documentElement.className += ' scroll-smooth';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={characterDataStore}>
      <CharacterGeneratorApp />
    </Provider>
  </StrictMode>,
)
