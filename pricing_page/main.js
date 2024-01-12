const toggler = document.querySelector(".toggler");
const startPrice =document.getElementById("starter-price");
const proPrice =document.getElementById("pro-price");

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        startPrice.innerHTML='$200 <span> / year </span>';
        proPrice.innerHTML='$1000 <span> / year </span>';
    }else{
        startPrice.innerHTML='$19 <span> / month </span>';
        proPrice.innerHTML='$99 <span> / month </span>';

    }
})