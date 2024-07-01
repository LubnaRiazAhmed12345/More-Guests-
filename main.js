//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. 
//Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • 
//Print a new set of invitation messages, one for each person in your list.
var Guest_List = ["Lubna", "Fatima", "Shahina", "aqsa"];
for (var i = 0; i < Guest_List.length; i++) {
    console.log("dear ".concat(Guest_List[i], " : \n you are invited to dinner! \n"));
}
console.log("\"Unfortunately ".concat(Guest_List[1], ", can't come to dinner.\""));
Guest_List[1] = "Fatima";
console.log("\nNew List Of INVITATION :\n");
for (var m = 0; m < Guest_List.length; m++) {
    console.log("Dear ".concat(Guest_List[m], " : \n you are invited to dinner! \n"));
}
console.log("News ! Now we have Bigger table for dinner,now we have more space for guests:\n");
Guest_List.unshift("talha");
Guest_List.splice(2, 0, "Eman");
Guest_List.push("Hamza");
for (var i = 0; i < Guest_List.length; i++) {
    console.log("Dear $(Guest_List[i]} : \n you are invited to dinner! \n");
}
