class Botao {
    constructor (cor, tamanho, texto, borda) {
        this.cor = cor
        this.tamanho = tamanho
        this.texto = texto
        this.borda = borda
    }

    desenharBotao () {
        const criarBotao = document.createElement ('button');
        criarBotao.setAttribute ('class', `${this.cor} ${this.tamanho} ${this.borda}`);
        criarBotao.innerHTML = this.texto;
        document.getElementById("buttons-section").appendChild(criarBotao);
    }
}


// GRANDES

const botaoRoxo = new Botao('roxo', 'grande', 'default', 'sem-borda');
botaoRoxo.desenharBotao();

const botaoLilas = new Botao('lilas', 'grande', 'default', 'sem-borda');
botaoLilas.desenharBotao();

const botaoBordaRoxa = new Botao('branco', 'grande', 'default', 'borda-roxa');
botaoBordaRoxa.desenharBotao();

const botaoRoxoplus = new Botao('roxo', 'grande', '+ default', 'borda-roxa');
botaoRoxoplus.desenharBotao();

const botaoDisabled = new Botao('disabled', 'grande', 'disabled', 'sem-borda');
botaoDisabled.desenharBotao();
botaoDisabled.desenharBotao();

const botaoDisabledBorda = new Botao('disabled-white', 'grande', 'disabled', 'borda-cinza');
botaoDisabledBorda.desenharBotao();

const botaoDisabledPlus = new Botao('disabled', 'grande', '+ disabled', 'sem-borda');
botaoDisabledPlus.desenharBotao();


// PEQUENOS

const botaoRoxoPequeno = new Botao('roxo', 'pequeno', 'default', 'sem-borda');
botaoRoxoPequeno.desenharBotao();

const botaoLilasPequeno = new Botao('lilas', 'pequeno', 'default', 'sem-borda');
botaoLilasPequeno.desenharBotao();

const botaoBordaRoxaPequeno = new Botao('branco', 'pequeno', 'default', 'borda-roxa');
botaoBordaRoxaPequeno.desenharBotao();

const botaoRoxoplusPequeno = new Botao('roxo', 'pequeno', '+ default', 'borda-roxa');
botaoRoxoplusPequeno.desenharBotao();

const botaoDisabledPequeno = new Botao('disabled', 'pequeno', 'disabled', 'sem-borda');
botaoDisabledPequeno.desenharBotao();
botaoDisabledPequeno.desenharBotao();

const botaoDisabledBordaPequeno = new Botao('disabled-white', 'pequeno', 'disabled', 'borda-cinza');
botaoDisabledBordaPequeno.desenharBotao();

const botaoDisabledPlusPequeno = new Botao('disabled', 'pequeno', '+ disabled', 'sem-borda');
botaoDisabledPlusPequeno.desenharBotao();
