let guestName = prompt("What is your name");
let guestList = [
  "James",
  "Seun",
  "Helen",
  "Timmy",
  "Adenike",
  "James",
  "Oyin",
  "Okinkansola",
  "Blessing",
  "Victoria",
  "Bruno",
  "Tomilola",
];

if (guestList.includes(guestName)) {
  alert("Hello, Welcome to Timmy's party");
} else {
  alert(
    "OOoops!!! Sorry you are not invited to this party, Because your name is not on the guest list."
  );
}
