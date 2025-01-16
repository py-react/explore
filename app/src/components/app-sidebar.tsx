import * as React from "react";
import {
  LayoutDashboard,
  DockIcon as Docker,
  Box,
  Database,
  Network,
  MessageSquare,
  Cpu,
  Server,
  ChevronLeft,
  ChevronRight,
  Computer,
  BoxIcon,
  LockIcon,
  ShieldIcon,
  DatabaseIcon,
  LayersIcon,
  RotateCwIcon,
  ShuffleIcon,
  HandCoinsIcon,
  FileKeyIcon,
  BadgeIcon as Certificate,
  GlobeIcon,
  WaypointsIcon
} from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import CustomLink from "@/libs/Link";

export type MenuItem = string;

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {}

function SidebarToggle() {
  const { state, toggleSidebar } = useSidebar();
  return (
    <SidebarTrigger
      onClick={toggleSidebar}
      className="absolute right-[-12px] top-6 z-20 flex h-6 w-6 items-center justify-center rounded-full border bg-background shadow-sm"
    >
      {state === "expanded" ? (
        <ChevronLeft className="h-4 w-4" />
      ) : (
        <ChevronRight className="h-4 w-4" />
      )}
    </SidebarTrigger>
  );
}

// Menu items.
const items = {
  header: {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  items: {
    message_queue: {
      title: "Message Queues",
      url: "/queues",
      childs: [
        {
          title: "BullMQ Queues",
          url: "/",
          icon: MessageSquare,
          items: [],
        },
      ],
    },
    docker: {
      title: "Docker",
      url: "/docker",
      childs: [
        {
          title: "Overview",
          url: "/",
          icon: Docker,
          items: [
            {
              title: "Conatiner",
              url: "container",
              icon: Server,
            },
            {
              title: "Packages",
              url: "packages",
              icon: Box,
            },
            {
              title: "Storages",
              url: "storages",
              icon: Database,
            },
            {
              title: "Hub",
              url: "hub",
              icon: Computer,
            },
          ],
        },
      ],
    },
    orchestration: {
      title: "Orchestration",
      url: "/orchestration",
      childs: [
        {
          title: "Docker Swarms",
          url: "/swarms",
          icon: Network,
          items: [],
        },
        {
          title: "Kubernetes",
          url: "/kubernetes",
          icon: Cpu,
          items: [
            {
              title: "Deployment",
              url: "/namespaced/deployment",
              icon: RotateCwIcon,
            },
            {
              title: "Config Map",
              url: "/namespaced/configmap",
              icon: ShieldIcon,
            },
            {
              title: "Pods",
              url: "/namespaced/pods",
              icon: BoxIcon,
            },
            {
              title: "Secrets",
              url: "/namespaced/secrets",
              icon: FileKeyIcon,
            },
            {
              title: "Services",
              url: "/namespaced/services",
              icon: DatabaseIcon,
            },
            {
              title: "Ingress",
              url: "/namespaced/ingress",
              icon: GlobeIcon,
            },
            {
              title: "certificate",
              url: "/namespaced/certificate",
              icon: Certificate,
            },
            {
              title: "issuer",
              url: "/namespaced/issuer",
              icon: HandCoinsIcon,
            },
          ],
        },
      ],
    },
    infraManager: {
      title: "Infra",
      url: "/infra",
      childs: [
        {
          title: "Manager",
          url: "/manager",
          icon: WaypointsIcon,
          items: [],
        },
      ],
    },
  },
};

export function AppSidebar({ ...props }: AppSidebarProps) {
  return (
    <>
      <Sidebar {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <CustomLink href={items.header.url}>
                  <items.header.icon className="h-6 w-6" />
                  <span className="font-semibold">{items.header.title}</span>
                </CustomLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          {Object.values(items.items).map((value) => {
            if (!value) return null;
            return (
              <SidebarGroup key={value.url}>
                <SidebarGroupLabel>{value.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {value.childs.map((item) => {
                      return (
                        <SidebarMenuItem key={value.url + item.url}>
                          <SidebarMenuButton asChild>
                            <CustomLink key={value.url + item.url} href={value.url + item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                            </CustomLink>
                          </SidebarMenuButton>
                          <SidebarMenuSub>
                            {item.items.map((subItem) => {
                              if (!subItem) return null;
                              return (
                                <SidebarMenuSubItem key={value.url + item.url + subItem.url}>
                                  <SidebarMenuSubButton asChild>
                                    <CustomLink key={value.url + item.url + subItem.url} href={value.url + item.url + subItem.url}>
                                      <subItem.icon className="mr-2 h-4 w-4" />
                                      {subItem.title}
                                    </CustomLink>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              );
                            })}
                          </SidebarMenuSub>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            );
          })}
        </SidebarContent>
        <SidebarToggle />
      </Sidebar>
    </>
  );
}
