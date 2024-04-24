var inp = document.getElementById("inp")
function numbers(id){
    inp.value += id
    if(id === "AC"){
        inp.value = "";
    }
    if( id === "DEL"){
        inp.value.tostring().slice(0,1);
    }
}