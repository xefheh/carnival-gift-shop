const input = require('sync-input');
let gifts = [{"name" : "Teddy Bear", "price" : 10, "id" : 1}, {"name" : "Big Red Ball", "price" : 5, "id" : 2},
    {"name" : "Huge Bear", "price"  : 50, "id" : 3}, {"name" : "Candy", "price" : 8, "id" : 4},
    {"name" : "Stuffed Tiger", "price" : 15, "id" : 5}, {"name" : "Stuffed Dragon", "price" : 30, "id" : 6},
    {"name" : "Skateboard", "price" : 100, "id" : 7}, {"name" : "Toy Car", "price" : 25, "id" : 8},
    {"name" : "Basketball", "price" : 20, "id" : 9}, {"name" : "Scary Mask", "price" : 75, "id" : 10}];
let tickets = 0;

function greetings() {
    console.log("WELCOME TO THE CARNIVAL GIFT SHOP!\n" +
        "Hello friend! Thank you for visiting the carnival!");
}

function listOfGifts() {
    console.log("Here's the list of gifts:\n");
    gifts.forEach((gift) =>
        console.log(`${gift["id"]}- ${gift["name"]}, Cost: ${gift["price"]} tickets`));
}

function chooseOption() {
    while (true) {
        console.log("What do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
        let chosen_option = Number(input())
        switch (chosen_option) {
            case 1:
                if (gifts.length === 0) {
                    console.log("Wow! There are no gifts to buy.");
                    continue;
                }
                let gift = Number(input("Enter the number of the gift you want to get:"));
                if (Number.isNaN(gift)) {
                    console.log("Please enter a valid number!");
                } else {
                    let info = gifts.find(e => e.id === gift);
                    if (info == null) {
                        console.log("There is no gift with that number!");
                        continue;
                    }
                    if (info.price > tickets) {
                        console.log("You don't have enough tickets to buy this gift.");
                        console.log(`Total tickets: ${tickets}`)
                        continue;
                    }
                    console.log(`Here you go, one ${info.name}!\nTotal tickets: ${tickets -= info.price}\n`);
                    gifts.splice(gifts.indexOf(info), 1);
                }
                continue;
            case 2:
                let amount = Number(input("Enter the ticket amount:"));
                if (Number.isNaN(amount) || amount > 1000 || amount < 0) {
                    console.log("Please enter a valid number between 0 and 1000.");
                    continue;
                }
                console.log(`Total tickets: ${tickets += amount}\n`);
                continue;
            case 3:
                console.log(`Total tickets: ${tickets}\n`);
                continue;
            case 4:
                listOfGifts();
                continue;
            case 5:
                console.log("Have a nice day!");
                break;
            default:
                console.log("Please enter a valid number!");
                continue;
        }
        break;
    }
}

greetings();
listOfGifts();
chooseOption()
