import express from "express";
import { offerRoutes } from "../modules/Offer/offer.router";
import { joinRoutes } from "../modules/Join/join.router";
import { mainRoutes } from "../modules/Main/main.router";
import { leadRoutes } from "../modules/Lead/lead.router";
const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/auth",
    route: offerRoutes,
  },
  {
    path: "/join",
    route: joinRoutes,
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
