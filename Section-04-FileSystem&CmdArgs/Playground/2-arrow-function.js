const square = function(x){
    return x * x;
}

const square6 = (x) => {
    return x * x;
}

const sqre = (x) => x * x;

console.log(square(3));
console.log(square6(45));
console.log(sqre(33));

const event = {
    name: "Party",
    guestList : ["Samara","Suha"],
    printGuest(){
        console.log("Guest List for "+ this.name);

        this.guestList.forEach((guest)=>{
            console.log(guest + " is attending "+this.name);
        })

    }
}

event.printGuest();