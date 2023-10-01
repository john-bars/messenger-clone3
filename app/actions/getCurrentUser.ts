// Use the email of the user that is logged in and find the infos of the same person from the database using the email and use it.
import prisma from "@/app/libs/prismadb";

import getSession from "./getSession";

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    // console.log("Session: ", session);
    // console.log("Current User: ", currentUser);

    return currentUser;
  } catch (error: any) {
    return null;
  }
};

export default getCurrentUser;
