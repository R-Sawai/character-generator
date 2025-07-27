import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CharacterGeneratorApp } from './CharacterGeneratorApp'

// スクロールをスムーズにするよう変更
document.documentElement.className += ' scroll-smooth';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CharacterGeneratorApp />
  </StrictMode>,
)
