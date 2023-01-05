let paragraph = "korem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
let starter = false ;

let tx = fetch("https://baconipsum.com/?paras=5&type=all-meat&start-with-lorem=1", {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-US,en;q=0.9,ar;q=0.8",
    },
    "method": "GET",
    'mode': 'no-cors',
});
tx.then(res => res.text()).then(data => console.log(data));






let firsttext = paragraph.split(" ").slice(0 , 40).join(" ") ;
let content = "" ;
[...firsttext].forEach((ele , index) => {
    content+= `<span class="char">${ele}</span>` ;
});

document.querySelector(".mytext").innerHTML = content ;


// start effect
let start ; 
function change(){
    start = setInterval( ()=>{
        let firstspan = document.querySelectorAll(".char") ;
        let ele = firstspan[0] ;
        if(ele.classList.contains("start")){
            ele.classList.remove('start') ;
        }else{
            ele.classList.add('start') ;
        }
    } , 500)
}

function myStopFunction() {
    clearInterval(start);
}


document.addEventListener('DOMContentLoaded', change);


document.body.addEventListener("keypress" , (e)=> {
    let firstspan = document.querySelectorAll(".char") ;


    if(firstspan.length >= 1 ){
        
        let target = firstspan[0] ;

        if(e.key == target.textContent){
            target.classList.add("verified") ;
        }else{
            target.classList.add("mistake") ;
        }

        // keyboard effect
        let keys = document.querySelectorAll(".key") ;
        keys.forEach(element => {
            // console.log(e.key , element.textContent) ;
            if(e.key == element.textContent && e.key == target.textContent){
                element.classList.add("animate__bounceIn");
                setTimeout(()=>{
                    element.classList.remove("animate__bounceIn");
                } , 100) ;

            }else{
                if(e.key == element.textContent && e.key != target.textContent){
                    element.classList.add("animate__bounceIn");
                    setTimeout(()=>{
                        element.classList.remove("animate__bounceIn");
                    } , 100) ;
                }

            }
        });
        
        // first character


        // remove classes from old ready
        target.classList.remove("char") ;
        target.classList.remove("start") ;

        // start effect
        myStopFunction()


        // next element be ready
        if(firstspan.length == 1){
            starter = "done" ;
            console.log(starter);
        }else{
            firstspan[1].classList.add("start");
            change()
        }
        



    }



    // timer
    let go ;
    if(starter == false){
        starter = true ;
        go = setInterval( () =>{
            let item = document.querySelector('.seconds');
            if(item.textContent.replace("s","") != "0"){
                item.textContent = item.textContent.replace("s", "") - 1 + "s" ;
                if(starter == "done"){
                    clearInterval(go) ;
                }
            }else{
                document.querySelector(".header").classList.add("done") ;
                starter = "done" ;
                clearInterval(go) ;
            }
        } , 1000)

    }

    if(starter == "done" ){
        document.querySelector(".header").classList.add("done") ;
        // stop the game 
        let all = document.querySelectorAll(".char") ;
        all.forEach(ele =>{
            ele.classList.remove("char") ;
        })

        // how many words  in seconds 
        let s = document.querySelector('.seconds') ;
        let x_container = document.querySelector(".words") ;
        let w = document.querySelectorAll(".verified").length ;
        x_container.textContent = Math.floor(w/4)  + " in " + (60 - s.textContent.replace("s" , ""))+"s" ;

        // how many mistakes
        let m  = document.querySelectorAll(".mistake").length ;
        let ms = document.querySelector(".mistakes") ;
        ms.textContent = m ;
    }

})





