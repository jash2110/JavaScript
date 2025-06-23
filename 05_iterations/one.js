// for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);   
// }


for(let i = 1; i <= 20; i++){
    if(i == 10){
        console.log(`loop break at ${i}`);
        break; // Exits the loop when i equals 10

    }

    console.log(i);
    
}
for(let i = 1; i <= 20; i++){
    if(i == 10){
        console.log(`loop skip at ${i}`);
        continue; // Skips the current iteration when i equals 10

    }
    console.log(i);
}