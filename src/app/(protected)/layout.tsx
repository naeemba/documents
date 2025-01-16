import { SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/side-bar";
import { SidebarProvider } from "@/components/ui/sidebar";

const ProtectedLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="pl-8 pt-16 relative w-full pr-8">
        <SidebarTrigger className="absolute left-2 top-2" />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default ProtectedLayout;
