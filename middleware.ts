import { authMiddleware } from "@kinde-oss/kinde-auth-nextjs/server";

export default authMiddleware;

export const config = {
  matcher: ["/dashboard"],
};
