function carregartecnico (){
    var qualquercoisa = document.getElementById("tecnicos1")
    fetch(apibase_url + '/cadastro')
  .then((response) => response.json())
  .then((data) => qualquercoisa.innerHTML= JSON.stringify(data,null,2))
}
