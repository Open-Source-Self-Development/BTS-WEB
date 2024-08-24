import React from 'react';
import { Package2, Settings } from 'lucide-react';
import navbarContent from '@/configs/navigation.config';
import {useSelector} from "react-redux";

export default function Sidebar() {

  const userAuthority = useSelector(state => state.auth.authority.role);
  const filteredNavItems = navbarContent.filter(item => 
    item.roles.length === 0 || item.roles.includes(userAuthority)
  );

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <a
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </a>
        {filteredNavItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            {item.icon}
            <span className="sr-only">{item.name}</span>
          </a>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </a>
      </nav>
    </aside>
  );
}