function soma(n1,n2,n3){
    if (Number.isInteger(n1 && n2 && n3)) {
        var r = (n1+n2+n3);
        return r;
    }
    else{
        var x1 = parseInt(n3);
        var x2 = parseInt(n2);
        var x3 = parseInt(n1);
        var r = (x1+x2+x3);
        return r;
    }
}
function print(txt){
    window.alert(txt)
}
function ExibeMsg(id,txt){
    document.getElementById(id).innerHTML = txt;
}
var n1 = Number(window.prompt("Digite um numero: "))
var n2 = Number(window.prompt("Digite um outro numero:"))
var n3 = Number(window.prompt("Digite um outro numero:"))
var s = soma(n1,n2,n3)
print(`O resulado da soma foi: ${s}`)
ExibeMsg('demo',"Mensagem no html")
ExibeMsg('para',`O resultado da soma foi: ${s}`)

