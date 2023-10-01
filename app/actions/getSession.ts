//Get the logged in user's info (name, email, image)

import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function getSession() {
  return await getServerSession(authOptions);
}
