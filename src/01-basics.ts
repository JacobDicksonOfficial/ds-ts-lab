// 01-basics.ts

interface Friend {
    name: string;
    phone: string;
    age: number
}

const friend1: Friend = {
  name: "Jacob Dickson",
  phone: "087-12345",
  age: 20,
};

const friend2: Friend= {
  name: "Jason Carolan",
  phone: "086--12345",
  age: 20,
};

const friends = [friend1, friend2];
console.log(friends[1]);

//   -------------------

interface Contact {
  email: string;
  extension: number;
}

interface Colleague {
  name: string;
  department: string;
  contact: Contact;
}

const colleague1 = {
  name: "Noah Nolan",
  department: "Military",
  contact: {
    email: "nnolan@ecompany.com",
    extension: 101,
  },
};

const colleague2 = {
  name: "Patrick Kiersey",
  department: "Finance",
  contact: {
    email: "pkiersey@company.com",
    extension: 102,
  },
};

const colleague3 = {
  name: "Cian Sullivan",
  department: "TL",
  contact: {
    email: "csullivan@company.com",
    extension: 103,
  },
};

interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}

export const colleagues : ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

console.log(colleagues.current[0]);