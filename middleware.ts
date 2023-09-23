import { withAuth } from "next-auth/middleware";

//automatically redirect to the login page
// protect the initial login page http://localhost:3000/
export default withAuth({
  pages: {
    signIn: "/",
  },
});

// protect the route (users)
export const config = {
  matcher: ["/users/:path*"], //protect all of the routes inside the users with /:path*
};
