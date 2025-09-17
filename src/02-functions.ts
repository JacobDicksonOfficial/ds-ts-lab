import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) { // Inferred return type adjustment as per lab (i)
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

// AllOlder Function for an Array of Friends
console.log(older(friends[0]))

function allOlder(fs: Friend[]) { // Inferred return type adjustment as per lab (ii)
  return fs.map((f) => {
    f.age +=1
    return `${f.name} is now ${f.age}`
 });
}

console.log(allOlder(friends))  

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred return type (iii)
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


function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return result 
}

console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));