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
exports.Bookservice = void 0;
const book_model_1 = require("./book.model");
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new book_model_1.Book(data);
    yield user.save();
    return user;
});
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return book_model_1.Book.find().sort({ createdAt: -1 });
});
const getByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findById(id);
    return result;
});
const updateOneInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findByIdAndDelete(id);
    return result;
});
exports.Bookservice = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB,
};
