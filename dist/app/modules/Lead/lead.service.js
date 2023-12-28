"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leadservice = void 0;
const lead_model_1 = require("./lead.model");
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return lead_model_1.Leads.find().sort({ createdAt: -1 });
});
const getRecentFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return lead_model_1.Leads.find().sort({ createdAt: -1 }).limit(6);
});
const getByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lead_model_1.Leads.findById(id);
    return result;
});
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new lead_model_1.Leads(data);
    yield user.save();
    return user;
});
const updateOneInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lead_model_1.Leads.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield lead_model_1.Leads.findByIdAndDelete(id);
    return result;
});
exports.Leadservice = {
    insertIntoDB,
    getAllFromDB,
    getRecentFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB,
};
