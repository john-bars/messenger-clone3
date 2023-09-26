"use client";

import { signOut } from "next-auth/react";
import EmptyState from "../components/EmptyState";

const Users = () => {
  return (
    <div className="hidden lg:block h-full lg:pl-80">
      <EmptyState />
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Users;
