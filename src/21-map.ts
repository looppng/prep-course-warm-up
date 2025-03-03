export { };

function tidyUpString(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = mentors.map((mentors) => {
  const cleanMentor = tidyUpString(mentors);
  return capitalise(cleanMentor);
});

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
