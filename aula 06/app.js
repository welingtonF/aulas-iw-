function dados(){
    const ds = [
                
                {id:1,login:"pango",senha:"1234",email:"pango@gmail.com"},
                {id:2,login:"Pingo",senha:"5321",email:"pingo@gmail.com"},
                {id:3,login:"chico",senha:"4321",email:"chico@gmail.com"},
    ]
    return ds
}

function login(user,password){

    const usuarios = dados()

for(let i=0;i<usuarios.length;i++){
    if(user == usuarios[i].login && password == usuarios[1].senha){
        console.log("Você logou")
        break
    }

}
}


function logar(){
    let lg = document.getElementById("login").value
    let sn =document.getElementById("senha").value

    login(lg,sn)
}