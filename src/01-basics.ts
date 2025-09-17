import { Friend, Colleague, ColleagueHistory } from "./myTypes";

const friend1: Friend = {
  name: "Jacob Dickson",
  phone: "087-12345",
  age: 20,
};

const friend2: Friend = {
  name: "Jason Carolan",
  phone: "086--12345",
  age: 20,
};

export const friends = [friend1, friend2];
// console.log(friends[1]);

const colleague1: Colleague = {
  name: "Noah Nolan",
  department: "Military",
  contact: {
    email: "nnolan@ecompany.com",
    extension: 101,
  },
};

const colleague2: Colleague = {
  name: "Patrick Kiersey",
  department: "Finance",
  contact: {
    email: "pkiersey@company.com",
    extension: 102,
  },
};

const colleague3: Colleague = {
  name: "Cian Sullivan",
  department: "HTL",
  contact: {
    email: "csullivan@company.com",
    extension: 103,
  },
};

export const colleagues: ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};
// console.log(colleagues.current[0]);
