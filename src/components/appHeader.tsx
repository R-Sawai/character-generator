import type { FC } from 'react';
import { SidebarTrigger } from './ui/sidebar';

/** ヘッダー */
export const AppHeader: FC = () => (
    <div className='w-[100%] h-16 p-3 sticky top-0 flex items-center bg-background'>
        <SidebarTrigger size='lg' />
        <label className='text-2xl font-bold'>キャラクタージェネレーター</label>
    </div>
);
