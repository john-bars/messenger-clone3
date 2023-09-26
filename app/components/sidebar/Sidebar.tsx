const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main className="h-full lg:pl-20">{children}</main>
    </div>
  );
};

export default Sidebar;
