// (Optional) Change the names below to your friends.
interface Friend {
    name: string;
    phone: string;
    age: number
}

const friend1 = {
  name: "Jacob Dickson",
  phone: "087-12345",
  age: 20,
};

const friend2 = {
  name: "Jason Carolan",
  phone: "086--12345",
  age: 20,
};

const friends = [friend1, friend2];
console.log(friends[1]);

//   -------------------
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
  department: "HTL",
  contact: {
    email: "csullivan@company.com",
    extension: 103,
  },
};
const colleagues = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

console.log(colleagues.current[0]);
