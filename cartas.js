const baralho = []

let opcao = "3"

do{
    opcao = prompt("Cartas no baralho: " +
    baralho.length + 
    "\n" +
    "\nO que deseja fazer?:" +
    "\n(1) Adicionar uma carta" +
    "\n(2) Puxar uma carta" +
    "\n(3) Sair")
    
    switch (opcao){
        case "1":
            let carta = prompt("Qual carta você irá colocar?:")
            baralho.push(carta)
            break
        case "2":
            if(baralho.length > 0){
                let cartaRetirada = baralho.pop()
                    alert("Você retirou a carta: " + cartaRetirada)
            }else{
                alert("Você retirou todas as cartas!")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção Inválida!")
    }

}while(opcao !== "3")