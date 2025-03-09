import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { PowerIcon } from "lucide-react";
import { items } from "./items";
import { ModeToggle as ThemeToggle } from "@/components/theme/toggle";
import { Button } from "../ui/button";
import { signOut } from "@/lib/auth";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <ThemeToggle />
        </SidebarMenu>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
          className="mt-2"
        >
          <SidebarMenu>
            <Button variant="outline">
              <PowerIcon className="w-6" />
              Sign Out
            </Button>
          </SidebarMenu>
        </form>
      </SidebarFooter>
    </Sidebar>
  );
}
