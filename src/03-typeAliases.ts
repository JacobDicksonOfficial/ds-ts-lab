import {
  ColleagueV2,
  Friend,
  Buddy,
  BuddyList,
  Administrator,
} from "./myTypes";
import { friends } from "./01-basics";

const colleague1: ColleagueV2 = {
  name: "Noah Nolan",
  department: "Engineering", // must be Engineering | Finance | HR
  contact: {
    email: "nnolan@ecompany.com",
    extension: 101,
  },
};

const colleague2: ColleagueV2 = {
  name: "Patrick Kiersey",
  department: "Finance",
  contact: {
    email: "pkiersey@company.com",
    extension: 102,
  },
};

const colleague3: ColleagueV2 = {
  name: "Cian Sullivan",
  department: "HR",
  contact: {
    email: "csullivan@company.com",
    extension: 103,
  },
};

function makeBuddyList(
  name: string,
  buddies: Buddy[],
  admin?: Administrator
): BuddyList {
  return {
    name,
    members: buddies,
    administrator: admin,
  } as BuddyList;
  // The as operator above casts an object to a specific type.
}
// Tests for makeBuddyList
const myFootballBuddies = makeBuddyList(
  "Football team",
  [colleague1, friends[0], colleague2],
  colleague1
)

const myBandBuddies = makeBuddyList(
    "Band name",
    [colleague1, friends[1]]
    // No administrator
  )

console.log(myFootballBuddies)
console.log(myBandBuddies)
//--------------------------------------
function findBuddyContact(list: BuddyList, name: string): string | undefined {
  for (const buddy of list.members) {
    if (buddy.name === name) {
      if ("phone" in buddy) {
        return buddy.phone;
      }
      else {
        return buddy.contact.email;
      }
    }
    return undefined;
  }
}
// Test for findBuddyContact.
console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Ralph Graham"));

function getBuddyListFriends(list: BuddyList): Friend[] {
  return list.members.reduce((friendsArr: Friend[], buddy) => {
    if ("phone" in buddy) {
      friendsArr.push(buddy);
    }
    return friendsArr;
  }, []);
}

// Test
console.log("Friends in football buddies:", getBuddyListFriends(myFootballBuddies));
console.log("Friends in band buddies:", getBuddyListFriends(myBandBuddies));

