
const produtos = [
    {
        nome: "TM Volta S1",
        descricao: "Compacta e ágil para o dia a dia urbano. Autonomia de 130km por carga com recarga rápida.",
        preco: 13900,
        img: "./src/assets/moto1.webp"
    },
    {
        nome: "TM Racer R7",
        descricao: "Motor de 10kW e zero a 80km/h em 3.5 segundos. Para quem quer adrenalina com consciência.",
        preco: 24500,
        img: "./src/assets/moto2.webp"
    },
    {
        nome: "TM Kargo K3",
        descricao: "Baú integrado de 50 litros e autonomia de 110km. A parceira ideal para entregas profissionais.",
        preco: 18200,
        img: "./src/assets/moto3.webp"
    },
    {
        nome: "TM Xpedition X9",
        descricao: "Suspensão reforçada, pneus All-Terrain e 95km de autonomia off-road. A estrada escolhe quem passa.",
        preco: 29800,
        img: "./src/assets/moto4.webp"
    },
    {
        nome: "TM Vortex V12",
        descricao: "O topo da linha. Motor de 18kW, painel digital com GPS e 200km de autonomia real.",
        preco: 41900,
        img: "./src/assets/moto5.webp"
    }
];


function formatarPreco(valor) {
    return "R$ " + valor.toFixed(2);
}


const containerProdutos = document.getElementById("lista-produtos");

if (containerProdutos) {

    let htmlProdutos = "";

    for (let i = 0; i < produtos.length; i++) {
        let moto = produtos[i];

        htmlProdutos += `
            <div class="card-produto">
                <img src="${moto.img}" alt="${moto.nome}">
                <div class="card-info">
                    <h3>${moto.nome}</h3>
                    <p>${moto.descricao}</p>
                    <span class="preco">${formatarPreco(moto.preco)}</span>
                </div>
            </div>
        `;
    }

    
    containerProdutos.innerHTML = htmlProdutos;
}


const carrinho = [
    { nome: "VoltRide X1",        quantidade: 1, preco: 12500 },
    { nome: "VoltRide Sport S3",  quantidade: 2, preco: 21900 },
    { nome: "VoltRide Cargo Pro", quantidade: 1, preco: 16800 }
];


const containerCarrinho = document.getElementById("lista-carrinho");
const elementoTotal     = document.getElementById("total-compra");
const elementoSubtotal  = document.getElementById("subtotal");
const msgDesconto       = document.getElementById("msg-desconto");


let descontoAplicado = false;


function calcularTotal() {
    const total = carrinho.reduce(function(acumulador, item) {
        return acumulador + (item.preco * item.quantidade);
    }, 0);

    return total;
}


function mostrarCarrinho() {

    if (!containerCarrinho) return;

    let htmlItens = "";

    for (let i = 0; i < carrinho.length; i++) {
        let item = carrinho[i];

        htmlItens += `
            <div class="item-carrinho">
                <div class="item-info">
                    <h4>${item.nome}</h4>
                    <p>Quantidade: ${item.quantidade}</p>
                </div>
                <span class="item-preco">${formatarPreco(item.preco * item.quantidade)}</span>
            </div>
        `;
    }

    
    containerCarrinho.innerHTML = htmlItens;

    const total = calcularTotal();
    elementoSubtotal.innerText = formatarPreco(total);
    elementoTotal.innerText    = formatarPreco(total);

    descontoAplicado = false;
    msgDesconto.innerText = "";
}


function aplicarDesconto() {

    if (descontoAplicado) {
        msgDesconto.innerText = "Desconto já foi aplicado!";
        return;
    }

    const totalOriginal = calcularTotal();

    const totalComDesconto = totalOriginal * 0.90;
    const valorEconomizado = totalOriginal * 0.10;

    
    elementoTotal.innerText = formatarPreco(totalComDesconto);

    
    msgDesconto.innerText = "Desconto de 10% aplicado! Voce economizou " + formatarPreco(valorEconomizado);

    descontoAplicado = true;
}


function finalizarCompra() {
    alert("Compra finalizada com sucesso! Obrigado por escolher a VoltRide!");
}


mostrarCarrinho();
