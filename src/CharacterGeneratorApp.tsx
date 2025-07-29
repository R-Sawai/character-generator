
import { type FC } from 'react';
import { inputGroups } from './utils/inputGroups';
import { AppHeader } from './components/appHeader';
import { SidebarProvider } from './components/ui/sidebar';
import { AppSidebar } from './components/appSidebar';
import { SectionCard } from './components/sectionCard';
import { Button } from './components/ui/button';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CharacterDataPdf } from './utils/characterDataPdf';
import { useAppSelector } from './hooks/useAppHooks';


/** メインアプリケーション */
export const CharacterGeneratorApp: FC = () => {
  const charaData = useAppSelector(state => state.characterData);

  return (
    <SidebarProvider>
      <AppSidebar />

      <div className='w-full'>
        <AppHeader />

        <main className='p-6'>
          <div className='space-y-6'>
            {/* アクションボタン */}
            <div className='flex gap-4'>
              <Button>クリア</Button>

              <PDFDownloadLink document={<CharacterDataPdf characterData={charaData} />} >
                <Button>PDF出力</Button>
              </PDFDownloadLink>

            </div>

            {/* 各セクション */}
            {inputGroups.map((group, idx) => (
              <SectionCard
                index={idx}
                key={group.id}
                group={group}
              />
            ))}

          </div>
        </main>
      </div>
    </SidebarProvider>
  )
};
