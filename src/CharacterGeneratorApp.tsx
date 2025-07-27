
import { type FC } from 'react';
import { inputGroups } from './constants/inputGroups';
import { AppHeader } from './components/appHeader';
import { SidebarProvider } from './components/ui/sidebar';
import { AppSidebar } from './components/appSidebar';
import { SectionCard } from './components/sectionCard';


/** メインアプリケーション */
export const CharacterGeneratorApp: FC = () => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="w-full">
        <AppHeader />

        <main className="p-6">
          <div className="space-y-6">
            {inputGroups.map((group, idx) => (
              <SectionCard group={group} index={idx} />
            ))}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
};
