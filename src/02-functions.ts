import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

// AllOlder Function for an Array of Friends
console.log(older(friends[0]))

function allOlder(fs: Friend[]): string[] {
  return fs.map((f) => {
    f.age +=1
    return `${f.name} is now ${f.age}`
 });
}

console.log(allOlder(friends))  

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

// Add a colleague with extension = highest + 1
function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
  const highest = highestExtension(cs).contact.extension;
  cs.push({name, department, contact: { email, extension: highest + 1,
    },
  });
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));