import linkedl from "yallist";
import data from "./storage.json";
import fs from "fs";
import Yallist from "yallist";

export interface License {
  name: string;
  points: number;
  eyecolor: string;
  gender: string;
  expired: boolean;
  dob: number;
  donor: boolean;
  address: string;
  suspended: boolean;
  pic: string;
}
let list = linkedl.create<License>(data);
// const user = list.get(1);
// const updated = changePoints("Hugo Borsum", 40);
// if (updated) saveFile(updated);

// saveFile(suspend(15));
// printSuspended();
// console.log(sortByName(list));

function sortByName(list: linkedl<License>): linkedl<License> {
  const arr = list.toArray();
  const sorted = arr.sort((a, b) => a.name.localeCompare(b.name));
  return linkedl.create<License>(sorted);
}

function sortByGender(list: linkedl<License>): linkedl<License> {
  const arr = list.toArray();
  const sorted = arr.sort((a, b) => a.gender.localeCompare(b.gender));
  return linkedl.create<License>(sorted);
}

function sortByEye(list: linkedl<License>): linkedl<License> {
  const arr = list.toArray();
  const sorted = arr.sort((a, b) => a.eyecolor.localeCompare(b.eyecolor));
  return linkedl.create<License>(sorted);
}

function sortByDOB(list: linkedl<License>): linkedl<License> {
  const arr = list.toArray();
  const sorted = arr.sort((a, b) => (a.dob > b.dob ? a.dob : b.dob));
  return linkedl.create<License>(sorted);
}

function searchByName(name: string): linkedl<License> | null {
  const arr = list.toArray();
  const found = arr.find((person) => person.name == name);
  if (found) return linkedl.create<License>(found);
  return null;
}
function searchByDOB(dob: number): linkedl<License> | null {
  const arr = list.toArray();
  const found = arr.find((person) => person.dob == dob);
  if (found) return linkedl.create<License>(found);
  return null;
}

function searchByAddress(address: string): linkedl<License> | null {
  const arr = list.toArray();
  const found = arr.find((person) => person.address == address);
  if (found) return linkedl.create<License>(found);
  return null;
}

function changeName(name: string, value: string): linkedl<License> | null {
  const arr = list.toArray();
  const found = arr.findIndex((person) => person.name == name);
  if (found == -1) return null;
  arr[found].name = value;
  return linkedl.create<License>(arr[found]);
}

function changeAddress(name: string, value: string): linkedl<License> | null {
  const arr = list.toArray();
  const found = arr.findIndex((person) => person.name == name);
  if (found == -1) return null;
  arr[found].address = value;
  return linkedl.create<License>(arr);
}

function changeGender(name: string, value: string): linkedl<License> | null {
  const arr = list.toArray();
  const found = arr.findIndex((person) => person.name == name);
  if (found == -1) return null;
  arr[found].gender = value;
  return linkedl.create<License>(arr);
}

function changeExpired(name: string, value: boolean): linkedl<License> | null {
  const arr = list.toArray();
  const found = arr.findIndex((person) => person.name == name);
  if (found == -1) return null;
  arr[found].expired = value;
  return linkedl.create<License>(arr);
}

function changePoints(name: string, value: number): linkedl<License> | null {
  const arr = list.toArray();
  const found = arr.findIndex((person) => person.name == name);
  if (found == -1) return null;
  arr[found].points = value;
  return linkedl.create<License>(arr);
}

function changeSuspended(name: string, value: boolean): linkedl<License> | null {
  const arr = list.toArray();
  const found = arr.findIndex((person) => person.name == name);
  if (found == -1) return null;
  arr[found].suspended = value;
  return linkedl.create<License>(arr);
}

function suspend(threshold: number): linkedl<License> {
  const arr = list.toArray();
  const suspended = arr.map((person: License) => {
    const copy = person;
    if (copy.points >= threshold) copy.suspended = true;
    return copy;
  });

  return linkedl.create<License>(suspended);
}

function printSuspended() {
  const arr = list.toArray();
  arr.forEach((person) => (person.suspended ? console.log(person) : null));
}

function printExpired() {
  const arr = list.toArray();
  arr.forEach((person) => (person.expired ? console.log(person) : null));
}

function saveFile(passed: Yallist<License>) {
  fs.writeFileSync("src/storage.json", JSON.stringify(passed.toArray()));
  list = passed;
}
