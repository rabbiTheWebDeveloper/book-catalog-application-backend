import express from "express";
import { joinRoutes } from "../modules/Join/join.router";
import { mainRoutes } from "../modules/Main/main.router";
import { leadRoutes } from "../modules/Lead/lead.router";
import { userRoutes } from "../modules/User/user.router";
import { BookesRoutes } from "../modules/book/book.route";
const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/auth",
    route: userRoutes,
  },
  {
    path: "/books",
    route: BookesRoutes,
  },
  {
    path: "/main",
    route: mainRoutes,
  },
  {
    path: "/leads",
    route: leadRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
