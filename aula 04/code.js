function banco(){
    const  ds = [
            {id:1,login:"ringo",senha:"12345",email:"ringo@gmail.com",fone:"9905-7785"},
             {id:2,login:"matheus",senha:"54321",email:"matheus@gmail.com",fone:"8865-7785"},
              {id:3,login:"alex",senha:"53421",email:"alex@gmail.com",fone:"4565-8880"}
    ]

    const dados =JSON.stringify(ds)

    localStorage.setItem("dados", dados)

    return dados
}

function cadCliente(){

    let id = document.getElementById("id").value
    let lg = document.getElementById("login").value
    let sn = document.getElementById("senha").value
    let em = document.getElementById("email").value
    let fn = document.getElementById("fone").value

    let meuId = parseInt(id)

    const ds = {id:meuId,login:lg,senha:sn,email:em,fone:fn}

    alert(ds)

}


