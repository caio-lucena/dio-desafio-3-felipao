class Hero{

    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade       

        let tipoValidado = this.validarTipo(tipo)

        this.tipo = tipoValidado
    }

    atacar(){
        if (this.tipo === 'mago'){
            console.log(`O ${this.tipo} atacou usando magia`)
        }
        else if (this.tipo === 'guerreiro'){
            console.log(`O ${this.tipo} atacou usando espada`)
        }
        else if (this.tipo === 'monge'){
            console.log(`O ${this.tipo} atacou usando artes marciais`)
        }
        else if (this.tipo === 'ninja'){
            console.log(`O ${this.tipo} atacou susando shuriken`)

        }
        else{
            console.log("Você sofreu 1000000000 pontos de dano e morreu pra um smile")
        }
    }

    validarTipo(tipo){
                
        let tipoString = tipo.toString().toLowerCase().trim()
           
        let condicao = tipoString === "mago" || tipoString === "guerreiro" || tipoString === "monge" || tipoString === "ninja"

        if(condicao){
            return tipoString
        }
        else {
            return "Plebeu LV1"
        }
    }

}


let mago = new Hero("Mistivam", 300, "Blade")
let guerreiro = new Hero("Arj o warden parrudo", 37, "guerreiro")

mago.atacar()
guerreiro.atacar()
