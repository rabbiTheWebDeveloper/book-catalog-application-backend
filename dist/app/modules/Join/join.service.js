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
exports.Joinservice = void 0;
const join_model_1 = require("./join.model");
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return join_model_1.Joins.find().sort({ createdAt: -1 });
});
const getByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield join_model_1.Joins.findById(id);
    return result;
});
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new join_model_1.Joins(data);
    yield user.save();
    return user;
});
const updateOneInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield join_model_1.Joins.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield join_model_1.Joins.findByIdAndDelete(id);
    return result;
});
exports.Joinservice = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB,
};
