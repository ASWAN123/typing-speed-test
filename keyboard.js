let paragraph = ["He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.", "Samantha wanted to be famous. The problem was that she had never considered all the downsides to actually being famous. Had she taken the time to objectively consider these downsides, she would have never agreed to publically sing that first song.", "Patricia's friend who was here hardly had any issues at all, but she wasn't telling the truth. Yesterday, before she left to go home, she heard that her husband is in the hospital and pretended to be surprised. It later came out that she was the person who had put him there.", "She glanced up into the sky to watch the clouds taking shape. First, she saw a dog. Next, it was an elephant. Finally, she saw a giant umbrella and at that moment the rain began to pour.", "There wasn't a whole lot more that could be done. It had become a wait-and-see situation with the final results no longer in her control. That didn't stop her from trying to control the situation. She demanded that things be done as she desperately tried to control what couldn't be."]


let starter = false ;


let firsttext = paragraph[Math.floor(Math.random()*paragraph.length)] ;

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

        // show start again button 
        document.querySelector(".refresh").style.display = "block"
    }

})





