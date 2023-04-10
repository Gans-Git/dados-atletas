class Atleta{
    constructor(nome,idade,peso,altura,notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria(){
        if(this.idade>= 9 && this.idade <= 11){
            return "Infantil"
        }
        if(this.idade >=12 && this.idade <=13){
            return "Juvenil"
        }
        if(this.idade>=14 && this.idade<=15){
            return "Intermediário"
        }
        if(this.idade >=16 && this.idade<=30){
            return "Adulto"
        } else {
            return "Sem categoria"
        }
    }
    calculaIMC(){
        let calculaIMC = this.peso/this.altura*this.altura
        return calculaIMC
    }
    calculaMediaValida(){
        let notasCut = atleta.notas.sort(function(a,b){
            if(a>b) return 1
            if(a<b) return - 1
            return 0
          });
          let notasValidas = notasCut.slice(1,4)
          let somaNota = 0
          for(let i = 0; i <notasValidas.length; i++){
            somaNota+=notasValidas[i]
          }
          return somaNota / notasValidas.length
    }
    obtemNomeAtleta(){
        return this.nome;
    }
    obtemIdadeAtleta(){
        return this.idade;
    }
    obtemPesoAtleta(){
       return this.peso;
    }
    obtemAlturaAtleta(){
        return this.altura
    }
    obtemNotasAtleta(){
        return this.notas
    }
}
console.log("Nome: " + atleta.obtemNomeAtleta())
console.log("Idade: " + atleta.obtemIdadeAtleta())
console.log("Peso: " + atleta.obtemPesoAtleta())
console.log("Altura: " + atleta.obtemAlturaAtleta())
console.log("Notas: " + atleta.obtemNotasAtleta())
console.log("Categoria: " + atleta.calculaCategoria())
console.log("IMC: " + atleta.calculaIMC())
console.log("Média Válida: " + atleta.calculaMediaValida())