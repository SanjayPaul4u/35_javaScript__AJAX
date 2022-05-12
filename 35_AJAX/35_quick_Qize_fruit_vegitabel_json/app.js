console.log("This is quick qize for making fruit and vegitable json and inplement get method");

let populateBtn = document.getElementById("populateBtn");
populateBtn.addEventListener("click", populateHandler);

function populateHandler(){
    console.log("populate btn is clicked");
    //initiate xhr object📌📌📌FOR FIRST ONE
    const xhr = new XMLHttpRequest();

    //open
    xhr.open("GET", "fruit.json", true);

    //response
    xhr.onload = function (){
        if(this.status === 200){
            // console.log(this.responseText);
            let obj = JSON.parse(this.responseText)
            console.log(obj);

            let listForFruit = document.getElementById("listForFruit");
            let html = "";
            for(key in obj){
                html +=`<li>${obj[key].f_name}</li>`
            }
            listForFruit.innerHTML = html;


        }
        else{
            console.log("some error occured.");
        }
    }

    //send
    xhr.send();


    //----------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------
    //initiate xhr object📌📌📌FOR SECOND ONE
    const xhr2 = new XMLHttpRequest();

    //open
    xhr2.open("GET", "vegitable.json", true);

    //response
    xhr2.onload = function (){
        if(this.status === 200){
            // console.log(this.responseText);
            let obj = JSON.parse(this.responseText)
            console.log(obj);

            let listForVeg = document.getElementById("listForVeg");
            let html = "";
            for(key in obj){
                html +=`<li>${obj[key].v_name}</li>`
            }
            listForVeg.innerHTML = html;


        }
        else{
            console.log("some error occured.");
        }
    }

    //send
    xhr2.send();
    console.log("We are done fetching fruit json and fetching vegitable json");
}
