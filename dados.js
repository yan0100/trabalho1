/** * BANCO DE DADOS COMPLETO
 * Para adicionar novos itens, basta seguir o padrão de chaves de cada categoria.
 */
const dbHardware = [
    // --- CPUs ---
    { id: 1, nome: "Intel Core i5-10400", cat: "cpu", nucleos: "6", threads: "12", frequencia: "4.3GHz", tdp: "65W", gpu: "UHD 630", soquete: "LGA 1200", preco: 750 },
    { id: 2, nome: "Intel Core i7-11700K", cat: "cpu",  nucleos: "8", threads: "16", frequencia: "5.0GHz", tdp: "125W", gpu: "UHD 750", soquete: "LGA 1200", preco: 1400 },
    { id: 3, nome: "Intel Core i5-12400", cat: "cpu",  nucleos: "6", threads: "12", frequencia: "4.4GHz", tdp: "65W", gpu: "UHD 730", soquete: "LGA 1700", preco: 950 },
    { id: 4, nome: "Intel Core i7-13700K", cat: "cpu", nucleos: "16", threads: "24", frequencia: "5.4GHz", tdp: "125W", gpu: "UHD 770", soquete: "LGA 1700", preco: 2600 },
    { id: 5, nome: "Intel Core i9-14900K", cat: "cpu", nucleos: "24", threads: "32", frequencia: "6.0GHz", tdp: "150W", gpu: "UHD 770", soquete: "LGA 1700", preco: 3900 },
    { id: 6, nome: "AMD Ryzen 5 5600", cat: "cpu", nucleos: "6", threads: "12", frequencia: "4.4GHz", tdp: "65W", gpu: "Não", soquete: "AM4", preco: 890 },
    { id: 7, nome: "AMD Ryzen 7 5800X3D", cat: "cpu", nucleos: "8", threads: "16", frequencia: "4.5GHz", tdp: "105W", gpu: "Não", soquete: "AM4", preco: 2100 },
    { id: 8, nome: "AMD Ryzen 5 7600", cat: "cpu", nucleos: "6", threads: "12", frequencia: "5.1GHz", tdp: "65W", gpu: "Radeon", soquete: "AM5", preco: 1350 },
    { id: 9, nome: "AMD Ryzen 7 7800X3D", cat: "cpu", nucleos: "8", threads: "16", frequencia: "5.0GHz", tdp: "120W", gpu: "Radeon", soquete: "AM5", preco: 2900 },
    { id: 10, nome: "AMD Ryzen 9 9950X", cat: "cpu", nucleos: "16", threads: "32", frequencia: "5.7GHz", tdp: "170W", gpu: "Radeon", soquete: "AM5", preco: 4600 },
    { id: 29, nome: "Intel Core i3-12100", cat: "cpu", nucleos: "4", threads: "8", frequencia: "4.3GHz", tdp: "60W", gpu: "UHD 730", soquete: "LGA 1700", preco: 650 },
    { id: 30, nome: "Intel Core i5-12600K", cat: "cpu", nucleos: "10", threads: "16", frequencia: "4.9GHz", tdp: "125W", gpu: "UHD 770", soquete: "LGA 1700", preco: 1500 },
    { id: 31, nome: "Intel Core i7-12700K", cat: "cpu", nucleos: "12", threads: "20", frequencia: "5.0GHz", tdp: "125W", gpu: "UHD 770", soquete: "LGA 1700", preco: 2100 },
    { id: 32, nome: "Intel Core i9-12900K", cat: "cpu", nucleos: "16", threads: "24", frequencia: "5.2GHz", tdp: "125W", gpu: "UHD 770", soquete: "LGA 1700", preco: 2900 },
    { id: 33, nome: "AMD Ryzen 3 5300G", cat: "cpu", nucleos: "4", threads: "8", frequencia: "4.2GHz", tdp: "65W", gpu: "Radeon", soquete: "AM4", preco: 550 },
    { id: 34, nome: "AMD Ryzen 5 5600X", cat: "cpu", nucleos: "6", threads: "12", frequencia: "4.6GHz", tdp: "65W", gpu: "Não", soquete: "AM4", preco: 1000 },
    { id: 35, nome: "AMD Ryzen 5 5600G", cat: "cpu", nucleos: "6", threads: "12", frequencia: "4.4GHz", tdp: "65W", gpu: "Radeon", soquete: "AM4", preco: 850 },
    { id: 36, nome: "AMD Ryzen 7 5700X", cat: "cpu", nucleos: "8", threads: "16", frequencia: "4.6GHz", tdp: "65W", gpu: "Não", soquete: "AM4", preco: 1200 },
    { id: 37, nome: "AMD Ryzen 7 5800X", cat: "cpu", nucleos: "8", threads: "16", frequencia: "4.7GHz", tdp: "105W", gpu: "Não", soquete: "AM4", preco: 1600 },
    { id: 38, nome: "AMD Ryzen 9 5900X", cat: "cpu", nucleos: "12", threads: "24", frequencia: "4.8GHz", tdp: "105W", gpu: "Não", soquete: "AM4", preco: 2400 },
    { id: 39, nome: "AMD Ryzen 9 5950X", cat: "cpu", nucleos: "16", threads: "32", frequencia: "4.9GHz", tdp: "105W", gpu: "Não", soquete: "AM4", preco: 3200 },
    // --- GPUs (Placas de Vídeo) ---
    { id: 3, nome: "NVIDIA RTX 3060", cat: "gpu", vram: "12GB GDDR6", interface: "PCIe 4.0", consumo: "170W", clock: "1.78GHz", cores: "3584 CUDA", preco: 1800 },
    { id: 4, nome: "AMD Radeon RX 6600", cat: "gpu", vram: "8GB GDDR6", interface: "PCIe 4.0", consumo: "132W", clock: "2.49GHz", cores: "1792 Cores", preco: 1450 },
    { id: 11, nome: "NVIDIA RTX 2060", cat: "gpu", vram: "6GB GDDR6", interface: "PCIe 3.0", consumo: "160W", clock: "1.68GHz", cores: "1920 CUDA", preco: 1100 },
    { id: 13, nome: "NVIDIA RTX 4070 Super", cat: "gpu", vram: "12GB GDDR6X", interface: "PCIe 4.0", consumo: "220W", clock: "2.48GHz", cores: "7168 CUDA", preco: 4200 },
    { id: 14, nome: "NVIDIA RTX 5080", cat: "gpu", vram: "16GB GDDR7", interface: "PCIe 5.0", consumo: "350W", clock: "2.7GHz", cores: "10240 CUDA", preco: 8900 },
    { id: 21, nome: "NVIDIA RTX 2050", cat: "gpu", vram: "4GB GDDR6", interface: "PCIe 4.0", consumo: "45W", clock: "1.47GHz", cores: "2048 CUDA", preco: 800 },
    { id: 22, nome: "NVIDIA RTX 2070", cat: "gpu", vram: "8GB GDDR6", interface: "PCIe 3.0", consumo: "175W", clock: "1.62GHz", cores: "2304 CUDA", preco: 1500 },
    { id: 23, nome: "NVIDIA RTX 2080", cat: "gpu", vram: "8GB GDDR6", interface: "PCIe 3.0", consumo: "215W", clock: "1.71GHz", cores: "2944 CUDA", preco: 1900 },
    { id: 24, nome: "NVIDIA RTX 2080 Ti", cat: "gpu", vram: "11GB GDDR6", interface: "PCIe 3.0", consumo: "250W", clock: "1.54GHz", cores: "4352 CUDA", preco: 2500 },
    { id: 25, nome: "NVIDIA RTX 3050", cat: "gpu", vram: "8GB GDDR6", interface: "PCIe 4.0", consumo: "130W", clock: "1.78GHz", cores: "2560 CUDA", preco: 1300 },
    { id: 26, nome: "NVIDIA RTX 3070", cat: "gpu", vram: "8GB GDDR6", interface: "PCIe 4.0", consumo: "220W", clock: "1.73GHz", cores: "5888 CUDA", preco: 2800 },
    { id: 27, nome: "NVIDIA RTX 3080 Ti", cat: "gpu", vram: "12GB GDDR6X", interface: "PCIe 4.0", consumo: "350W", clock: "1.67GHz", cores: "10240 CUDA", preco: 4500 },
    { id: 28, nome: "NVIDIA RTX 3090", cat: "gpu", vram: "24GB GDDR6X", interface: "PCIe 4.0", consumo: "350W", clock: "1.70GHz", cores: "10496 CUDA", preco: 6000 },
    // --- PLACAS-MÃE (mobo) ---
    { id: 5, nome: "ASUS Prime B550M", cat: "mobo", chipset: "B550", soquete: "AM4", ram: "4x DDR4", formato: "Micro-ATX", pcie: "4.0 x16", preco: 750 },
    { id: 6, nome: "MSI Mag B660M", cat: "mobo", chipset: "B660", soquete: "LGA 1700", ram: "4x DDR4", formato: "Micro-ATX", pcie: "4.0 x16", preco: 850 },
    { id: 15, nome: "ASUS Prime H410M", cat: "mobo", chipset: "H410", soquete: "LGA 1200", ram: "2x DDR4", formato: "Micro-ATX", pcie: "3.0", preco: 480 },
    { id: 16, nome: "MSI Mag B660M", cat: "mobo", chipset: "B660", soquete: "LGA 1700", ram: "4x DDR4", formato: "Micro-ATX", pcie: "4.0", preco: 850 },
    { id: 17, nome: "ASUS ROG Strix Z790", cat: "mobo", chipset: "Z790", soquete: "LGA 1700", ram: "4x DDR5", formato: "ATX", pcie: "5.0", preco: 2800 },
    { id: 18, nome: "ASUS Prime B550M", cat: "mobo", chipset: "B550", soquete: "AM4", ram: "4x DDR4", formato: "Micro-ATX", pcie: "4.0", preco: 750 },
    { id: 19, nome: "Gigabyte B650M DS3H", cat: "mobo", chipset: "B650", soquete: "AM5", ram: "4x DDR5", formato: "Micro-ATX", pcie: "4.0", preco: 1200 },
    { id: 20, nome: "MSI MPG X870E", cat: "mobo", chipset: "X870", soquete: "AM5", ram: "4x DDR5", formato: "ATX", pcie: "5.0", preco: 3400 }
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
// --- VERSÃO CORRIGIDA E BLINDADA ---
// Só ativa os cliques se os elementos existirem na página atual
if (document.getElementById('btnComparar') && document.getElementById('tabelaResultado')) {
    
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
        
        const historicoElem = document.getElementById('historicoConteudo');
        if (historicoElem) historicoElem.innerText = log;
        
        resArea.scrollIntoView({ behavior: 'smooth' });
    };
}
// RECUPERA HISTÓRICO AO CARREGAR
/**
 * SISTEMA DE TESTES BÁSICOS
 * Executa verificações automáticas na lógica do comparador.
 */
const rodarTestes = () => {
    console.group("Iniciando Testes Básicos de Sistema");
    let testesPassaram = 0;
    let totalTestes = 0;

    const assert = (condicao, nomeTeste) => {
        totalTestes++;
        if (condicao) {
            console.log(`Passou: ${nomeTeste}`);
            testesPassaram++;
        } else {
            console.error(`Falhou: ${nomeTeste}`);
        }
    };

    // Teste 1: Integridade do Banco de Dados
    assert(dbHardware.length > 0, "O Banco de Dados deve conter itens.");

    // Teste 2: Validação de Atributos Obrigatórios (CPU)
    const primeiraCPU = dbHardware.find(p => p.cat === 'cpu');
    assert(primeiraCPU.hasOwnProperty('nucleos') && primeiraCPU.hasOwnProperty('preco'), 
        "Itens da categoria CPU devem ter núcleos e preço.");

    // Teste 3: Lógica de Busca (Simulando busca por 'RTX')
    const termoBusca = "rtx";
    const resultadosGpu = dbHardware.filter(p => p.cat === 'gpu' && p.nome.toLowerCase().includes(termoBusca));
    assert(resultadosGpu.length > 0, "A busca deve retornar itens ao pesquisar por 'RTX' em GPUs.");

    // Teste 4: Verificação de Preços Numéricos
    const precoInvalido = dbHardware.some(p => typeof p.preco !== 'number');
    assert(!precoInvalido, "Todos os itens devem ter preços do tipo número (para cálculos).");

    // Resumo final
    console.log(`--- Resumo: ${testesPassaram}/${totalTestes} testes aprovados. ---`);
    console.groupEnd();
};

// Executa os testes assim que a página carregar
window.addEventListener('load', rodarTestes);

// Recupera o histórico de forma segura
window.addEventListener('load', () => {
    const salvo = localStorage.getItem('u_busca');
    const historicoElem = document.getElementById('historicoConteudo');
    if (salvo && historicoElem) {
        historicoElem.innerText = salvo;
    }
});