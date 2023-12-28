"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_router_1 = require("../modules/Main/main.router");
const lead_router_1 = require("../modules/Lead/lead.router");
const user_router_1 = require("../modules/User/user.router");
const book_route_1 = require("../modules/book/book.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: "/auth",
        route: user_router_1.userRoutes,
    },
    {
        path: "/books",
        route: book_route_1.BookesRoutes,
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
