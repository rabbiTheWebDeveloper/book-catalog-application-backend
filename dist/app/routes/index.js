"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const offer_router_1 = require("../modules/Offer/offer.router");
const join_router_1 = require("../modules/Join/join.router");
const main_router_1 = require("../modules/Main/main.router");
const lead_router_1 = require("../modules/Lead/lead.router");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: "/auth",
        route: offer_router_1.offerRoutes,
    },
    {
        path: "/join",
        route: join_router_1.joinRoutes,
    },
    {
        path: "/main",
        route: main_router_1.mainRoutes,
    },
    {
        path: "/leads",
        route: lead_router_1.leadRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
