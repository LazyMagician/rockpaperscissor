// rock.addEventListener('click',()=>{
//     hand = document.getElementById("rock");
//     game = document.getElementsByClassName("play_1");
//     console.log(hand);
//     // hand.classList.add("play_1");
//     // console.log(hand);
//     console.log(game[0]);
//     // console.log(game[0]);
//     // document.querySelectorAll(.innerHTML = hand;
//     // conso"play_1")le.log(document.querySelectorAll("play_1"));
//     // // console.log(document.getElementById("play_1"));
//     game.innerHTML = hand;
//     // // // console.log("clicked");
//     console.log(game);

// }) 
const change_hand = (e)=>{
    let source = e.getAttribute("src");
    // console.log(e.getAttribute("src"));
    // console.log(document.getElementsByClassName("play_1"));
    document.getElementsByClassName("play_1")[0].setAttribute("src",source);
}

const main_logic = ()=>{
    let palyr_1 = document.getElementsByClassName("play_1");
    let random_hand = Math.floor(Math.random()*3)
    let source = palyr_1[0].getAttribute("src");
    let arr = [rock,paper,scissor]
    // console.log(random_hand);
    // console.log(arr[random_hand]);
    document.getElementsByClassName("comp_2")[0].setAttribute("src",arr[random_hand].getAttribute("src"));
}
let p1=0,p2=0;
let round = 0;
const score = ()=>{
    playr_1 = document.getElementsByClassName("play_1")[0].getAttribute("src");
    cpu  = document.getElementsByClassName("comp_2")[0].getAttribute("src");
    // console.log(playr_1,cpu);
    // console.log(rock);
    let score_1 = document.getElementsByClassName("score_1")[0].childNodes[3];
    let score_2 = document.getElementsByClassName("score_2")[0].childNodes[3];
    // console.lo   g(.innerText = (p1+=1));
    if(round == 5){
        console.log("game over");
        console.log(p1,p2);
        if(p1 > p2)
        {
            console.log("Player1 wins");
        }
        else
        {
            console.log("You lost");
        }
        p1 = 0;
        p2 = 0;
    }
    else{
        if(playr_1 == rock.getAttribute("src") && cpu == paper.getAttribute("src"))
    {
        score_2.innerText = (p2+=1);
        round += 1;
    }
    else if(playr_1 == rock.getAttribute("src") && cpu == scissor.getAttribute("src"))
    {
        score_1.innerText = (p1+=1);
        round += 1;
    }
    else if(playr_1 == scissor.getAttribute("src") && cpu == paper.getAttribute("src"))
    {
        score_1.innerText = (p1+=1);
        round += 1;
    }
    else if(playr_1 == scissor.getAttribute("src") && cpu == rock.getAttribute("src"))
    {
        score_2.innerText = (p1+=1);
        round += 1;

    }
    else if(playr_1 == paper.getAttribute("src") && cpu == scissor.getAttribute("src"))
    {
        score_2.innerText = (p2+=1);
        round += 1;

    }   
    else if(playr_1 == paper.getAttribute("src") && cpu == rock.getAttribute("src"))
    {
        score_1.inerText = (p1+=1);
        round += 1;
    }
    }
    
}