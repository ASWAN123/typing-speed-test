let paragraph = "lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

let x = 0;
let placeholder = document.querySelector(".mytext")
const myArray = paragraph.split(" ");
// target text
placeholder.innerHTML = myArray.slice(x , x+6).join(" ") ;


document.body.addEventListener("keypress" , (e)=>{
    let input = document.getElementById("input1")
    let placeholder = document.querySelector(".mytext")

    // LOGIC FOR TEXT ADDING
    let mywords = input.value.split(" ")
    let placeholderCount = placeholder.textContent.split(" ")
    if(mywords[3] == placeholderCount[3]){
        console.log('ok');
        // remove first 4 elements from the array  and  asign it again ;
        x+=5 ;
        placeholder.innerHTML = "";
        placeholder.innerHTML = myArray.slice(x-1 , x+6).join(" ") ;
        input.reset() ;




    }

})

// one two three four five six 
// one two three four 





// for coloring the buttons
// let myClick = e.key ;
// console.log(myClick) ;
// let keys = document.querySelectorAll(".key") ;
// keys.forEach(element => {
//     if(myClick.toLowerCase() == element.textContent){
//         console.log(element.textContent);
//         element.classList.add("move");
//         setTimeout(()=>{
//             element.classList.remove("move");
//         } , 100) ;
//     }
// });