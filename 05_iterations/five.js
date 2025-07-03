const coding = ["JavaScript", "Python", "C++", "Java", "Ruby"];

// coding.forEach(function (values){
//     console.log(values);
    
// })

coding.forEach( (values) => {
    //console.log(values);
    
} )


coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr);
    
} )


const myCoding = [
    {
        languageName: "javascript",
        fileName: "js"
    },
    {
        languageName: "java",
        fileName: "java"
    },
    {
        languageName: "python",
        fileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.fileName);
    
} )