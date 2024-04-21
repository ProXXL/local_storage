for(let i = 0; i < localStorage.length; i++ )
{
    const key = localStorage.key(i);
    let temp = JSON.parse(localStorage.getItem(key));
    console.log(temp);
    document.getElementById("display_" + (i+1)).value = temp;
}