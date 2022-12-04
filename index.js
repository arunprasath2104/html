const main = document.getElementById('main');

main.addEventListener("click",()=>{ 
    document.getElementById('root').innerText= "Clicked"
    document.getElementById('root').style.marginLeft= "100px"
    document.getElementById('root').style.width= "100px"
    document.getElementById('root').style.padding= "50px"
    document.getElementById('root').style.backgroundColor= "teal"
})