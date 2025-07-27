import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CharacterGeneratorApp } from './CharacterGeneratorApp'
import { DefaultCharacterData } from './utils/defaultCharacterData';


const charaData = new DefaultCharacterData();


// スクロールをスムーズにするよう変更
document.documentElement.className += ' scroll-smooth';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CharacterGeneratorApp defaultCharacterData={charaData} />
  </StrictMode>,
)
