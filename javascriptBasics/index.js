let ctr=0;
function clock(){
    document.querySelectorAll("h2")[0].innerHTML=ctr;
    ctr=ctr+1;
}
setInterval(clock,1000);