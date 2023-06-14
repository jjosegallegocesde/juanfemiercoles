let memoria=JSON.parse(localStorage.getItem("memoria"))
console.log(memoria)

//usando la memoria
memoria.forEach(function(reserva){
    let fila=document.createElement("div")
    fila.classList.add("row","my-5","shadow")
    let columna=document.createElement("div")
    columna.classList.add("col-4")
    let columna2=document.createElement("div")
    columna2.classList.add("col-8")  
    let nombre=document.createElement("h3")
    nombre.textContent=reserva.nombreUsuario
})