document.getElementById("Send").addEventListener("click",function clg(){
    localStorage.clear;
    let con_log = document.getElementById("Name").value;
    localStorage.setItem("aperson",JSON.stringify(con_log));
    let gender = document.getElementById("gender").value;
    localStorage.setItem("gender",JSON.stringify(gender));
    open("info.html");
});

