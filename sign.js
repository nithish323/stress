var signBar=document.querySelector(".sign-bar")
document.getElementById("sign-close").addEventListener("click",function(){
    signBar.style.display="none"
})

var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})
document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft="-60%"
})

var side