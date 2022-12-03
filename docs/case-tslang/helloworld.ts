function greeter(person:string) {
    return "Hello, " + person;
}

let user = "Jane User";

window.onload = ()=>{
    document.body.innerHTML = greeter(user);
}
