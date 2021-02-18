var campoDeFiltro = document.querySelector("#filtrar-tabela");

campoDeFiltro.addEventListener("input", function(){
    
    var pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 0 ){
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); // para buscar sem se importar com maiúsculas e minusculas
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }   
        }

    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel")
        }

    }
    
});