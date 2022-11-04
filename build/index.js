"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yallist_1 = __importDefault(require("yallist"));
const storage_json_1 = __importDefault(require("./storage.json"));
const fs_1 = __importDefault(require("fs"));
const list = yallist_1.default.create(storage_json_1.default);
const user = list.get(1);
console.log(sortByName(list));
saveFile(list);
function sortByName(list) {
    const arr = list.toArray();
    const sorted = arr.sort((a, b) => a.name.localeCompare(b.name));
    return yallist_1.default.create(sorted);
}
function sortByGender(list) {
    const arr = list.toArray();
    const sorted = arr.sort((a, b) => a.gender.localeCompare(b.gender));
    return yallist_1.default.create(sorted);
}
function sortByEye(list) {
    const arr = list.toArray();
    const sorted = arr.sort((a, b) => a.eyecolor.localeCompare(b.eyecolor));
    return yallist_1.default.create(sorted);
}
function sortByDOB(list) {
    const arr = list.toArray();
    const sorted = arr.sort((a, b) => (a.dob > b.dob ? a.dob : b.dob));
    return yallist_1.default.create(sorted);
}
function saveFile(list) {
    fs_1.default.writeFileSync("storage.json", JSON.stringify(list.toArray()));
}
