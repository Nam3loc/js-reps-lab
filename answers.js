// ========== PART 1 ========== \\

// HTML Intros - 5
// HTML Elements - 4
// CSS Intro - 5
// CSS Basics - 4

////////////////////////////////
// Easy Going
////////////////////////////////

for(let i = 1; i <= 20; i++){
    // console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////

for(let i = 0; i <= 200; i += 2){
    // console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        // console.log("FizzBuzz");
    } else if (i % 5 === 0){
        // console.log("Buzz");
    } else if(i % 3 === 0){
        // console.log("Fizz");
    } else {
        // console.log(i);
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]++;
// console.log(plantee);

wolfy[3] = "Gotham City";
// console.log(wolfy);

dart.push("Hawkins");
// console.log(dart);

wolfy.splice(0, 1, "Gameboy");
// console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtlesArr = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// ninjaTurtlesArr.toUpperCase();

// for (const element of ninjaTurtlesArr){
     // console.log(element.toUpperCase()); 
     // Don't understand .toUpperCase(). Did not work for me until I put it into the clg  
// }

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies[8]);

// console.log(favMovies.sort());

// favMovies.pop();
// console.log(favMovies);

// favMovies.push("Guardians of the Galaxy");
//     console.log(favMovies);

// console.log(favMovies.reverse());

// favMovies.shift();
//     console.log(favMovies);

// favMovies.unshift("Avengers: Endgame");
//     console.log(favMovies);

// console.log(favMovies.indexOf("Django Unchained")); // Had trouble finding indexOf
// favMovies.splice(15, 1, "Avatar");
//     console.log(favMovies);

// let middle = favMovies[Math.round((favMovies.length - 1) / 2)]; // Unnecessary attempts
// console.log(middle); // returns "Imitation of Life"

// console.log(favMovies.slice(Math.round((favMovies.length - 1) / 2)));

// console.log(favMovies);

// console.log(favMovies.indexOf("Fast and Furious"));

////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1, 1); // This one was weird and doesn't make much sense
    // console.log(whereIsWaldo);

whereIsWaldo[1][2] = "No One"
    // console.log(whereIsWaldo[1][2]);

// console.log(whereIsWaldo[2][1][1]); // This didn't make sense either

////////////////////////////////
//  Excited Kitten
////////////////////////////////

let annoyingCat = () => {
    return "Love me, pet me! HSSSSSS!";
}

let meow = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

// let randomMeow = meow[Math.floor(Math.random() * meow.length)];

// console.log(randomMeow);

for(let i = 1; i <= 20; i++){
    // console.log(i);
    let randomMeow = meow[Math.floor(Math.random() * meow.length)];
    if(i % 2 === 0){
        // console.log(randomMeow); // Logging the same sentence. Does not change up ???
    } else{
        // console.log(annoyingCat());
    }
}

////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// Expected output:
// => 15

nums.sort();
const mid = Math.floor(nums.length / 2);

if(nums.length % 2){
    return nums[mid];
}