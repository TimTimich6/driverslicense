import linkedl from "yallist";
import data from "./storage.json";
import fs from "fs";
import Yallist from "yallist";

interface License {
  name: string;
  points: number;
  eyecolor: string;
  gender: string;
  expired: boolean;
}
const list = linkedl.create<License>(data);
const user = list.get(1);
// console.log(sortByName(list));
// saveFile(list);

function sortByName(list: linkedl<License>): linkedl<License> {
  const arr = list.toArray();
  const sorted = arr.sort((a, b) => a.name.localeCompare(b.name));
  return linkedl.create<License>(sorted);
}
function saveFile(list: Yallist<License>) {
  fs.writeFileSync("storage.json", JSON.stringify(list.toArray()));
}
