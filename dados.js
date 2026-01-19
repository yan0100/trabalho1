/** * BANCO DE DADOS COMPLETO
 * Para adicionar novos itens, basta seguir o padrão de chaves de cada categoria.
 */
const dbHardware = [
    // --- CPUs ---
    { id: 1, nome: "Intel Core i5-12400", cat: "cpu", nucleos: "6", threads: "12", frequencia: "4.4GHz", tdp: "65W", gpu: "UHD 730", soquete: "LGA 1700", preco: 950 },
    { id: 2, nome: "AMD Ryzen 5 5600", cat: "cpu", nucleos: "6", threads: "12", frequencia: "4.4GHz", tdp: "65W", gpu: "Não", soquete: "AM4", preco: 890 },

    // --- GPUs (Placas de Vídeo) ---
    { id: 3, nome: "NVIDIA RTX 3060", cat: "gpu", vram: "12GB GDDR6", interface: "PCIe 4.0", consumo: "170W", clock: "1.78GHz", cores: "3584 CUDA", preco: 1800 },
    { id: 4, nome: "AMD Radeon RX 6600", cat: "gpu", vram: "8GB GDDR6", interface: "PCIe 4.0", consumo: "132W", clock: "2.49GHz", cores: "1792 Cores", preco: 1450 },

    // --- PLACAS-MÃE (mobo) ---
    { id: 5, nome: "ASUS Prime B550M", cat: "mobo", chipset: "B550", soquete: "AM4", ram: "4x DDR4", formato: "Micro-ATX", pcie: "4.0 x16", preco: 750 },
    { id: 6, nome: "MSI Mag B660M", cat: "mobo", chipset: "B660", soquete: "LGA 1700", ram: "4x DDR4", formato: "Micro-ATX", pcie: "4.0 x16", preco: 850 }
];

// REFERÊNCIAS DO DOM
const seletorCat = document.getElementById('tipoHardware');
const grid = document.getElementById('gridSelecao');
const btn = document.getElementById('btnComparar');
const resArea = document.getElementById('resultadoArea');
const tabelaResultado = document.getElementById('tabelaResultado');

let selecionadoA = null;
let selecionadoB = null;

// LÓGICA DE EXIBIÇÃO: Controla o que aparece na tela
seletorCat.addEventListener('change', () => {
    const temValor = seletorCat.value !== "";
    grid.style.display = temValor ? 'grid' : 'none';
    btn.style.display = temValor ? 'inline-block' : 'none';
    
    // Limpa seleções ao trocar categoria para não comparar CPU com GPU
    selecionadoA = null; 
    selecionadoB = null;
    document.getElementById('inputA').value = ""; 
    document.getElementById('inputB').value = "";
    resArea.style.display = 'none';
});

// SISTEMA DE BUSCA (AUTOCOMPLETE)
const setupBusca = (inputId, listaId, storageKey) => {
    const input = document.getElementById(inputId);
    const lista = document.getElementById(listaId);

    input.addEventListener('input', () => {
        const termo = input.value.toLowerCase();
        const categoria = seletorCat.value;
        lista.innerHTML = ""; 

        if (termo.length >= 2) {
            const achados = dbHardware.filter(p => p.cat === categoria && p.nome.toLowerCase().includes(termo));
            
            achados.forEach(p => {
                const item = document.createElement('div');
                item.innerText = p.nome;
                item.style = "padding:10px; border-bottom:1px solid #eee; cursor:pointer; background:#fff; color: #333";
                
                item.onclick = () => {
                    input.value = p.nome;
                    lista.innerHTML = "";
                    if (storageKey === 'A') selecionadoA = p;
                    else selecionadoB = p;
                };
                lista.appendChild(item);
            });
        }
    });
};

setupBusca('inputA', 'listaA', 'A');
setupBusca('inputB', 'listaB', 'B');

// FUNÇÃO QUE ESCOLHE A TABELA CERTA BASEADA NA CATEGORIA
const gerarTabelaHTML = (pA, pB) => {
    let linhasDinamicas = "";

    if (pA.cat === "cpu") {
        linhasDinamicas = `
            <tr><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Núcleos / Threads</td><td style="padding:10px; border:1px solid #ddd;">${pA.nucleos} / ${pA.threads}</td><td style="padding:10px; border:1px solid #ddd;">${pB.nucleos} / ${pB.threads}</td></tr>
            <tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Frequência</td><td style="padding:10px; border:1px solid #ddd;">${pA.frequencia}</td><td style="padding:10px; border:1px solid #ddd;">${pB.frequencia}</td></tr>
            <tr><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">TDP (Consumo)</td><td style="padding:10px; border:1px solid #ddd;">${pA.tdp}</td><td style="padding:10px; border:1px solid #ddd;">${pB.tdp}</td></tr>
            <tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Gráfico Integrado</td><td style="padding:10px; border:1px solid #ddd;">${pA.gpu}</td><td style="padding:10px; border:1px solid #ddd;">${pB.gpu}</td></tr>
            <tr><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Soquete</td><td style="padding:10px; border:1px solid #ddd;">${pA.soquete}</td><td style="padding:10px; border:1px solid #ddd;">${pB.soquete}</td></tr>`;
    } 
    else if (pA.cat === "gpu") {
        linhasDinamicas = `
            <tr><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Memória (VRAM)</td><td style="padding:10px; border:1px solid #ddd;">${pA.vram}</td><td style="padding:10px; border:1px solid #ddd;">${pB.vram}</td></tr>
            <tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Cores (Processamento)</td><td style="padding:10px; border:1px solid #ddd;">${pA.cores}</td><td style="padding:10px; border:1px solid #ddd;">${pB.cores}</td></tr>
            <tr><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Velocidade (Clock)</td><td style="padding:10px; border:1px solid #ddd;">${pA.clock}</td><td style="padding:10px; border:1px solid #ddd;">${pB.clock}</td></tr>
            <tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Interface</td><td style="padding:10px; border:1px solid #ddd;">${pA.interface}</td><td style="padding:10px; border:1px solid #ddd;">${pB.interface}</td></tr>
            <tr><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Consumo (TDP)</td><td style="padding:10px; border:1px solid #ddd;">${pA.consumo}</td><td style="padding:10px; border:1px solid #ddd;">${pB.consumo}</td></tr>`;
    }
    else if (pA.cat === "mobo") {
        linhasDinamicas = `
            <tr><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Chipset</td><td style="padding:10px; border:1px solid #ddd;">${pA.chipset}</td><td style="padding:10px; border:1px solid #ddd;">${pB.chipset}</td></tr>
            <tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Soquete</td><td style="padding:10px; border:1px solid #ddd;">${pA.soquete}</td><td style="padding:10px; border:1px solid #ddd;">${pB.soquete}</td></tr>
            <tr><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Memória RAM</td><td style="padding:10px; border:1px solid #ddd;">${pA.ram}</td><td style="padding:10px; border:1px solid #ddd;">${pB.ram}</td></tr>
            <tr style="background:#f9f9f9;"><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">Formato</td><td style="padding:10px; border:1px solid #ddd;">${pA.formato}</td><td style="padding:10px; border:1px solid #ddd;">${pB.formato}</td></tr>
            <tr><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">PCI Express</td><td style="padding:10px; border:1px solid #ddd;">${pA.pcie}</td><td style="padding:10px; border:1px solid #ddd;">${pB.pcie}</td></tr>`;
    }

    return `
        <table style="width:100%; border-collapse: collapse; background:#fff; border: 2px solid #2c3e50; font-family: sans-serif;">
            <tr style="background:#2c3e50; color:white;">
                <th style="padding:12px; border:1px solid #ddd;">Especificação</th>
                <th style="padding:12px; border:1px solid #ddd;">${pA.nome}</th>
                <th style="padding:12px; border:1px solid #ddd;">${pB.nome}</th>
            </tr>
            ${linhasDinamicas}
            <tr style="background:#e8f5e9; font-weight:bold; font-size: 1.1em;">
                <td style="padding:10px; border:1px solid #ddd;">Preço Médio</td>
                <td style="padding:10px; border:1px solid #ddd; color:#2e7d32;">R$ ${pA.preco}</td>
                <td style="padding:10px; border:1px solid #ddd; color:#2e7d32;">R$ ${pB.preco}</td>
            </tr>
        </table>`;
};

// BOTÃO COMPARAR
btn.onclick = () => {
    if (!selecionadoA || !selecionadoB) {
        alert("Selecione os dois itens nas listas antes de comparar!");
        return;
    }
    resArea.style.display = 'block';
    tabelaResultado.innerHTML = gerarTabelaHTML(selecionadoA, selecionadoB);
    
    // Salva no LocalStorage
    const log = `${selecionadoA.nome} vs ${selecionadoB.nome}`;
    localStorage.setItem('u_busca', log);
    document.getElementById('historicoConteudo').innerText = log;
    
    resArea.scrollIntoView({ behavior: 'smooth' });
};

// RECUPERA HISTÓRICO AO CARREGAR
window.onload = () => {
    const salvo = localStorage.getItem('u_busca');
    if (salvo) document.getElementById('historicoConteudo').innerText = salvo;
};