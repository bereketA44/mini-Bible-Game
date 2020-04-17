function newpage(){
    var name = document.getElementById("nameid").value;
    if (name =='' || name==" " )
    return false;
document.getElementById("main").style.display="none";
document.getElementById("cont3").style.display="none";
document.getElementById("main2").style.display="block";
// document.getElementById("quizcont").style.display="none";
console.log(document.getElementById("nameid").value)
var header2 = document.getElementById("header2");
header2.innerHTML += " "+name; 
return true;

}


function rules(){
    document.getElementById("startbtn").style.display = "none";
    var rules = document.getElementById("rules");
    rules.style.display="flex";
}

class userchoice{
    constructor (x){
        this.choice = x;
    }
    get (){
        return this.choice;
    }
    set (x){
        this.choice = x;
    }
}
class canswer{
    constructor (x){
        this.answer = x;
    }
    get (){
        return this.answer;
    }
    set (x){
        this.answer = x;
    }
}


// ###################################################
class timeControl {
    constructor(){
        this.time = 60;
        this.interval = 1000;
        this.sec =document.getElementById("rmtime");
        this.timer;
    }
}
var countdown = new timeControl();
function tst(x){
    if (x==0){
        countdown.timer = setInterval(function(){
            countdown.time--;
            console.log("timee::" + countdown.time)
            var sec = document.getElementById("rmtime");
            sec.innerHTML =  countdown.time;
            // y=0; x=0;
            if (countdown.time<=0){
            document.getElementById("main").style.display="none";
            document.getElementById("main2").style.display="none";
            document.getElementById("cont3").style.display="flex";
            document.getElementById("results").innerHTML += " " + document.getElementById("scoreid").innerHTML
            + "/45";
            clearInterval(countdown.timer);
            countdown.time = 60;
            }
             
            }, countdown.interval)
        }else if (x==-3) {
            clearInterval(countdown.timer);
            countdown.time -=3;
             tst(0);
        } else if (x==3){
            clearInterval(countdown.timer);
            countdown.time +=3;
            tst(0);
        }else if (x == -1){
            clearInterval(countdown.timer);
        }
}

// ########################################################



var answer = new canswer;
var user = new userchoice;
var i;
// newTime = new timeControl();
function quiz (x) {
    if (x == 0){
    document.getElementById("cont3").style.display="none";
    document.getElementById("quizcont").style.display="flex";
    tst(0);
    }
    user.set(x);
    if (x==0){
        i =0;
        var qarray = qbank();
        var quizquestion = qarray[i].question.q + '\n' + "A: " +qarray[i].question.a
        + '\n' + "B: "  +qarray[i].question.b + '\n' + "C: "  +qarray[i].question.c + 
        '\n' + "D: "  +qarray[i].question.d;
        answer.set(3);
        document.getElementById("rules").style.display = "none";
        var question =document.getElementById("question");
        question.innerHTML = quizquestion;
        console.log(user.get())
    }else {
        var qarray = qbank();
        var score = document.getElementById("scoreid");
        var addscore = score.innerHTML;
         if (x != qarray[i].question.ans)
         {
            tst(-3)
            document.getElementById("wrong").style.display="flex";
            setTimeout(function () {
            document.getElementById("wrong").style.display="none";  
            }, 400);
         } else if(x == qarray[i].question.ans)
         {
            tst(3)
            document.getElementById("right").style.display="flex";
            setTimeout(function () {
            document.getElementById("right").style.display="none";  
            }, 400);
            score.innerHTML = parseInt(parseInt(addscore)  +3);
         }
        i++;
        console.log(" i " + i)
       
        if ( i > qarray.length-1)
        {
            document.getElementById("main").style.display="none";
            document.getElementById("main2").style.display="none";
            document.getElementById("cont3").style.display="flex";
            document.getElementById("results").innerHTML += " " + document.getElementById("scoreid").innerHTML
            + "/45";
            tst(-1);
            return false
        }
        var quizquestion = qarray[i].question.q + '\n' + "A: " +qarray[i].question.a
        + '\n' + "B: "  +qarray[i].question.b + '\n' + "C: "  +qarray[i].question.c + 
        '\n' + "D: "  +qarray[i].question.d;
        var question =document.getElementById("question") ;
        question.innerHTML = quizquestion
    }

}






















function qbank() {
    // var question = {q:"", a:"", b:"", c:"", d:""}
    const questionArray = [
        {
            question : { 
                q: "In what city was Jesus born? ",
                a: "rome",
                b:"Bethlehem",
                c: "Ethiopia",
                d: "israel",
                ans: "b",
            }
        },
        {
            question : { 
                q: "How many books are in the New Testament? ",
                a: "66",
                b:"21",
                c: "29",
                d: "27",
                ans: "d",
            }
        },
        {
            question : { 
                q: "What type of insect did John the Baptist eat in the desert? ",
                a: "snail",
                b:"Locusts",
                c: "termite",
                d: "Scorpions",
                ans: "b",
            }
        },
        {
            question : { 
                q: "Who was/were the first apostle/s called to follow Jesus? ",
                a: "Peter and Jhon",
                b:"Jhon alone",
                c: "Andrew",
                d: "Peter and Andrew",
                ans: "d",
            }
        },
        {
            question : { 
                q: "Who recognized Jesus as the Messiah when he was presented at the Temple as a baby?",
                a: "Simeon",
                b:"Barnabas",
                c: "Peter",
                d: "Jhon the baptist",
                ans: "a",
            }
        },
        {
            question : { 
                q: "Who asked Pilate for Jesus’ body after the crucifixion?  ",
                a: "James of rome",
                b:"Joseph marry's husband",
                c: "Joseph of Arimathea",
                d: "Joseph of Nazreth",
                ans: "c",
            }
        },
        {
            question : { 
                q: "Paul was shipwrecked on what island?  ",
                a: "Malta",
                b:"Rodas",
                c: "Remagos",
                d: "imasset",
                ans: "a",
            }
        },
        {
            question : { 
                q: "What is the shortest book in the New Testament?  ",
                a: "1 Tim",
                b:"Titus",
                c: "1 Jhon",
                d: "2 Jhon",
                ans: "d",
            }
        },
        {
            question : { 
                q: "Matthew was a _________ ",
                a: "Fisher",
                b:"Preacher",
                c: "Tax collector",
                d: "Carpenter",
                ans: "c",
            }
        },
        {
            question : { 
                q: "To what city was Saul traveling when he encountered a great and blinding light?  ",
                a: "Macedonia",
                b:"Lystra",
                c: "Iconium",
                d: "Damascus",
                ans: "d",
            }
        },
        {
            question : { 
                q: "Who was the first person to come upon the injured man in the parable of the Good Samaritan?  ",
                a: "priest",
                b:"merchant",
                c: "The good samaritan",
                d: "jew",
                ans: "a",
            }
        },
        {
            question : { 
                q: " Finish this verse. “In every battle you will need faith as your ______ to stop the fiery arrows aimed at you by Satan.”  ",
                a: "Armour",
                b:"Sword",
                c: "Dagger",
                d: "Shield",
                ans: "d",
            }
        },
        {
            question : { 
                q: "Whose example does Paul say Christians should follow in Chapter 5 of Ephesians? ",
                a: "Jesus's",
                b:"Paul's",
                c: "Angels",
                d: "israel's",
                ans: "a",
            }
        },
        {
            question : { 
                q: "Who murders John the Baptist? ",
                a: "Herod Antipas",
                b:"Herolas arthmes",
                c: "Caiaphas",
                d: "ceasar",
                ans: "a",
            }
        },
        {
            question : { 
                q: "After Jesus fed 5,000+ people with two fish and five loaves of bread, how many baskets were left over? ",
                a: "8",
                b:"7",
                c: "12",
                d: "13",
                ans: "d",
            }
        },
    ]







return questionArray;
    console.log(questionArray[14].question.q)
}