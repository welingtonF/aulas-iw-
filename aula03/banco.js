function dados(){

    const ds = [
        {id:1,login:"bruno",senha:"12345",email:"1100631677dp@gmail.com"},
        {id:2,login:"maria",senha:"54321",email:"maria@gmail.com"},
        {id:3,login:"mappa",senha:"5555",email:"mappa@gmail.com"}
    ]
    
    const dados = JSON.stringify(ds)//passa para o formato JSON texto

    localStorage.setItem("nome", dados)//insere no armazenamneto do navegador
    
    return dados
}

function removerbd(){

    localStorage.removeItem("nome")

}






                //TESTE
//const num = dados()

//imprimir um por um ex:login,senha,email.

//console.log(num[].senha)

//inteira de cada id
//console.log(num)

//function storage(){
    //let planeta = "Thais Carla"

   // localStorage.setItem("nome", nome2)

    
//}

//Storage()