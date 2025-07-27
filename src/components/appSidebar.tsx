import type { FC } from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar';
import { inputGroups } from "@/utils/inputGroups";

/** サイドバー */
export const AppSidebar: FC = () => (
    <Sidebar>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel className="text-sm">入力フィールド</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem key="inputField">
                            {inputGroups.map((group, idx) => (
                                <SidebarMenuButton
                                    asChild
                                    key={group.id}
                                >
                                    <a href={`#${group.id}`}>{`${idx + 1}. ${group.title}`}</a>
                                </SidebarMenuButton>
                            ))}
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
);
