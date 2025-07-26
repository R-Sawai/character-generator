
import type { FC } from 'react';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { InputWithLabel } from './components/inputWithLabel'
export const CharacterGeneratorApp: FC = () => {

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem key="test">
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <span>test</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>

              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <main className="w-full p-6">
        <SidebarTrigger size="default" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputWithLabel id="name" label={<>名前 <span className="form-label-note">(フルネーム、ふりがな)</span></>} placeholder="例: 鈴木 太郎 (すずき たろう)" />
          <InputWithLabel id="name-origin" label={<>名前の由来 <span className="form-label-note">(任意)</span></>} placeholder="親が込めた意味など" />
          <InputWithLabel id="gender" label={<>性別</>} placeholder="例: 男性" />
          <InputWithLabel id="bloodtype" label={<>血液型</>} placeholder="例: A / B / O / AB" />
          <InputWithLabel id="class" label={<>学年・クラス</>} placeholder="例: 高校2年A組" />
          <InputWithLabel id="age" label={<>年齢</>} placeholder="例: 17" />
          <InputWithLabel id="birthday" label={<>誕生日</>} placeholder="例: 4月1日 (牡羊座)" />
          <InputWithLabel id="height" label={<>身長</>} placeholder="例: 175cm" />
          <InputWithLabel id="weight" label={<>体重</>} placeholder="例: 普通、細身、65kg" />
          <InputWithLabel id="firstPerson" label={<>一人称</>} placeholder="例: 俺 / 僕" />
          <InputWithLabel id="secondPerson" label={<>二人称</>} placeholder="例: お前 / 君" />
          <InputWithLabel id="nickname" label={<>呼ばれ方</>} placeholder="例: あだ名 / ニックネーム" />
          <InputWithLabel id="birthplace" label={<>出身地 <span className="form-label-note">(任意)</span></>} placeholder="方言や文化的な影響のヒントに" />
        </div>
      </main>
    </SidebarProvider>
  )
};
