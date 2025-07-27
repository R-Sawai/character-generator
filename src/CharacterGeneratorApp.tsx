
import { useState, type FC } from 'react';
import { inputGroups } from './constants/inputGroups';
import { AppHeader } from './components/appHeader';
import { SidebarProvider } from './components/ui/sidebar';
import { AppSidebar } from './components/appSidebar';
import { SectionCard } from './components/sectionCard';
import type { CharacterDataType } from './types/characterDataType';
import { Button } from './components/ui/button';


interface CharacterGeneratorAppProps {
  defaultCharacterData: CharacterDataType;
}

/** メインアプリケーション */
export const CharacterGeneratorApp: FC<CharacterGeneratorAppProps> = (props) => {
  const [charaData, setcharaData] = useState<CharacterDataType>(props.defaultCharacterData);

  return (
    <SidebarProvider>
      <AppSidebar />

      <div className='w-full'>
        <AppHeader />

        <main className='p-6'>
          <div className='space-y-6'>
            {/* アクションボタン */}
            <div className='flex'>
              <Button>クリア</Button>
              <Button>PDF出力</Button>
            </div>

            {/* 各セクション */}
            {inputGroups.map((group, idx) => (
              <SectionCard
                index={idx}
                key={group.id}
                group={group}
                charaData={charaData}
                setCharaData={setcharaData}
              />
            ))}

          </div>
        </main>
      </div>
    </SidebarProvider>
  )
};
