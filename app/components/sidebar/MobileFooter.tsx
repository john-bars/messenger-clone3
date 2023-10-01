"use client";

import useRoutes from "@/app/hooks/useRoutes";
import useConversation from "@/app/hooks/useConversation";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div className="lg:hidden flex items-center fixed justify-between w-full bottom-0 bg-white border-t-[1px]">
      {routes.map((route) => (
        <MobileItem
          key={route.href}
          href={route.href}
          active={route.active}
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
