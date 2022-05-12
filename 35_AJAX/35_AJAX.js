console.log("AJAX in one video");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler(){
    console.log("you haved clicked to fetchBtn");

    // instantiate an xhr Object📌📌📌
    const xhr = new XMLHttpRequest();

    // open the object📌

    // this is for get
    // xhr.open("GET", "35_for35_paul.txt", true);
    // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    // this is for post
    xhr.open("POST", "	http://dummy.restapiexample.com/api/v1/create", true);

    xhr.getResponseHeader("Content-type", "application/x-www-form-urlencoded")
    // xhr.getResponseHeader("Content-type", "application/json")

    // what to do on progress(optional)📌THIS PROGRESS IS FOR SHOWING SPINNER
    xhr.onprogress = function(){
        console.log("on Progress");
    }

    // onreadystatechange📌
    xhr.onreadystatechange = function(){
        console.log("ready state is: ", xhr.readyState);
    }

    // what to do when Response is ready📌
    xhr.onload = function(){
        // console.log(this.responseText);
        if(this.status===200){
            console.log(this.responseText);
        }
        else{
            console.log("some error occured.");
        }
    }

    //send the request📌
    params = `	{"name":"teeeeeeeeeest","salary":"123","age":"23"}`
    xhr.send(params);

    console.log("We are done");
}

let populateBtn = document.getElementById("populateBtn");
populateBtn.addEventListener("click", popHandler);

function popHandler(){
    console.log("you click the pophandlet button");
    // instantiate an xhr Object📌📌📌
    const xhr = new XMLHttpRequest();

    // open the object📌
    xhr.open("GET", "https://jsonplaceholder.typicode.com/comments?postId=1", true);//this link is from https://jsonplaceholder.typicode.com/

    // what to do on progress(optional)📌THIS PROGRESS IS FOR SHOWING SPINNER
    // xhr.onprogress = function(){
    //     console.log("on Progress");
    // }

    // onreadystatechange📌
    // xhr.onreadystatechange = function(){
    //     console.log("ready state is: ", xhr.readyState);
    // }

    // what to do when Response is ready📌
    xhr.onload = function(){
        // console.log(this.responseText);
        if(this.status===200){
            let obj = JSON.parse(this.responseText)
            console.log("This is object",obj);
            let obj2 = obj.data
            let list = document.getElementById("list");
            str = "";
            for(key in obj){
                str+=`<li>${obj[key].name} </li>`
            }
            list.innerHTML = str;
        }
        else{
            console.log("some error occured.");
        }
    }

    //send the request📌
    xhr.send();
    console.log("we are done fetching employee api");
}