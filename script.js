document.getElementById("Send").addEventListener("click",function clg(){
    localStorage.clear;
    let gender = document.getElementById("gender").value;
    localStorage.setItem("gender",JSON.stringify(gender));
    let con_log = document.getElementById("Name").value;
    localStorage.setItem("person",JSON.stringify(con_log));
    open("info.html" , "_self");
});

