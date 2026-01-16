const bancoDePecas = {
placaMae: [
        { id: 'mb-01', nome: 'Asus B550', socket: 'AM4', tipoRam: 'DDR4', potenciaMinima: 300, imagem: 'https://via.placeholder.com/180?text=Asus+B550' },
        { id: 'mb-02', nome: 'MSI Z690', socket: 'LGA1700', tipoRam: 'DDR5', potenciaMinima: 350, imagem: 'https://via.placeholder.com/180?text=MSI+Z690' },
        { id: 'mb-03', nome: 'Gigabyte B450', socket: 'AM4', tipoRam: 'DDR4', potenciaMinima: 250, imagem: 'https://via.placeholder.com/180?text=Gigabyte+B450' }
    ],
    cpus: [
        { id: 'cpu-01', nome: 'AMD Ryzen 5 5600X', socket: 'AM4', consumo: 65, imagem: 'https://via.placeholder.com/180?text=Ryzen+5+5600X' },
        { id: 'cpu-02', nome: 'Intel Core i5-12600K', socket: 'LGA1700', consumo: 125, imagem: 'https://via.placeholder.com/180?text=i5-12600K', integrated: { nome: 'Intel UHD Graphics 770', consumo: 30 } },
        { id: 'cpu-03', nome: 'AMD Ryzen 7 5800X', socket: 'AM4', consumo: 105, imagem: 'https://via.placeholder.com/180?text=Ryzen+7+5800X' }
    ],
    rams: [
        { id: 'ram-01', nome: 'HyperX Fury 16GB (DDR4)', tipo: 'DDR4', imagem: 'https://via.placeholder.com/180?text=HyperX+16GB+DDR4' },
        { id: 'ram-02', nome: 'Corsair Vengeance 32GB (DDR5)', tipo: 'DDR5', imagem: 'https://via.placeholder.com/180?text=Corsair+32GB+DDR5' },
        { id: 'ram-03', nome: 'Crucial Ballistix 8GB (DDR4)', tipo: 'DDR4', imagem: 'https://via.placeholder.com/180?text=Crucial+8GB+DDR4' }
    ],
    gpus: [
        { id: 'gpu-01', nome: 'NVIDIA RTX 3060', consumo: 170, imagem: 'https://via.placeholder.com/180?text=RTX+3060' },
        { id: 'gpu-02', nome: 'AMD Radeon RX 6600', consumo: 132, imagem: 'https://via.placeholder.com/180?text=RX+6600' },
        { id: 'gpu-03', nome: 'NVIDIA RTX 4070', consumo: 200, imagem: 'https://via.placeholder.com/180?text=RTX+4070' }
    ],
    psus: [
        { id: 'psu-01', nome: 'Fonte 500W', potencia: 500, imagem: 'https://via.placeholder.com/180?text=Fonte+500W' },
        { id: 'psu-02', nome: 'Fonte 650W', potencia: 650, imagem: 'https://via.placeholder.com/180?text=Fonte+650W' },
        { id: 'psu-03', nome: 'Fonte 750W', potencia: 750, imagem: 'https://via.placeholder.com/180?text=Fonte+750W' }
    ]
};

// Função para popular os selects com as opções
function popularSelects() {
    // Mapeia as chaves do "bancoDePecas" para os selects no HTML
    const selects = {
        placaMae: document.getElementById('placaMaeSelect'),
        cpus: document.getElementById('cpuSelect'),
        rams: document.getElementById('ramSelect'),
        gpus: document.getElementById('gpuSelect'),
        psus: document.getElementById('psuSelect')
    };

    for (const tipoPeca in bancoDePecas) {
        const select = selects[tipoPeca];
        if (!select) continue;

        // limpa e adiciona uma opção padrão
        select.innerHTML = '';
        const padrao = document.createElement('option');
        padrao.value = '';
        padrao.textContent = '-- selecione --';
        select.appendChild(padrao);

        bancoDePecas[tipoPeca].forEach(peca => {
            const option = document.createElement('option');
            option.value = peca.id;
            option.textContent = peca.nome;
            select.appendChild(option);
        });
    }

    // Inicialmente renderiza as opções de fontes considerando o checkbox "psuSimpleMode"
    renderPsuOptions();

    // Adiciona listener para o checkbox que altera como as PSUs são exibidas
    const psuSimpleCheckbox = document.getElementById('psuSimpleMode');
    if (psuSimpleCheckbox) {
        psuSimpleCheckbox.addEventListener('change', renderPsuOptions);
    }

    // Adiciona event listeners para atualizar imagens quando a seleção mudar
    const placaSelect = document.getElementById('placaMaeSelect');
    const cpuSelect = document.getElementById('cpuSelect');
    const ramSelect = document.getElementById('ramSelect');
    const gpuSelect = document.getElementById('gpuSelect');
    const psuSelect = document.getElementById('psuSelect');

    placaSelect.addEventListener('change', () => mostrarImagem('placaMae', placaSelect.value));
    cpuSelect.addEventListener('change', () => mostrarImagem('cpus', cpuSelect.value));
    ramSelect.addEventListener('change', () => mostrarImagem('rams', ramSelect.value));
    gpuSelect.addEventListener('change', () => mostrarImagem('gpus', gpuSelect.value));
    psuSelect.addEventListener('change', () => mostrarImagem('psus', psuSelect.value));

    // Inicializa imagens (se houver algum valor padrão selecionado)
    mostrarImagem('placaMae', placaSelect.value);
    mostrarImagem('cpus', cpuSelect.value);
    mostrarImagem('rams', ramSelect.value);
    mostrarImagem('gpus', gpuSelect.value);
    mostrarImagem('psus', psuSelect.value);
}

// Mostra a imagem do tipo informado ('placaMae'|'cpus'|'rams'|'gpus'|'psus') para o id dado
function mostrarImagem(tipo, id) {
    // mapeia tipo para o id do elemento <img>
    const imgMap = {
        placaMae: 'placaMaeImg',
        cpus: 'cpuImg',
        rams: 'ramImg',
        gpus: 'gpuImg',
        psus: 'psuImg'
    };

    const imgEl = document.getElementById(imgMap[tipo]);
    if (!imgEl) return;

    if (!id) {
        imgEl.src = '';
        imgEl.alt = 'Sem imagem selecionada';
        return;
    }

    const lista = bancoDePecas[tipo];
    if (!lista) return;
    const peca = lista.find(p => p.id === id);
    if (!peca || !peca.imagem) {
        imgEl.src = '';
        imgEl.alt = 'Imagem não disponível';
        return;
    }

    imgEl.src = peca.imagem;
    imgEl.alt = peca.nome;
}

// Função principal de verificação de compatibilidade
function verificarCompatibilidade() {
    const placaMaeId = document.getElementById('placaMaeSelect').value;
    const cpuId = document.getElementById('cpuSelect').value;
    const ramId = document.getElementById('ramSelect').value;
    const gpuId = document.getElementById('gpuSelect').value;
    const psuId = document.getElementById('psuSelect').value;

    // Obtém os objetos completos das peças selecionadas
    const placaMae = bancoDePecas.placaMae.find(p => p.id === placaMaeId);
    const cpu = bancoDePecas.cpus.find(p => p.id === cpuId);
    const ram = bancoDePecas.rams.find(p => p.id === ramId);
    const gpu = bancoDePecas.gpus.find(p => p.id === gpuId);
    const psu = bancoDePecas.psus.find(p => p.id === psuId);

    // Verifica se os campos obrigatórios foram selecionados (GPU é opcional porque pode haver integrada)
    if (!placaMae || !cpu || !ram || !psu) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `<h2>Selecione a placa-mãe, CPU, RAM e a fonte para verificar a compatibilidade.</h2>`;
        resultadoDiv.style.color = 'orange';
        return;
    }

    // Se não houver GPU dedicada selecionada, mas a CPU tiver GPU integrada, usamos ela
    let usadoGpu = null; // objeto: { nome, consumo, integrated }
    if (gpu) {
        usadoGpu = gpu;
    } else if (cpu && cpu.integrated) {
        usadoGpu = { nome: cpu.integrated.nome || 'GPU integrada', consumo: cpu.integrated.consumo || 0, integrated: true };
    }

    let incompatibilidades = [];

    // Regra 1: CPU e Placa-Mãe
    if (cpu.socket !== placaMae.socket) {
        incompatibilidades.push(`Incompatibilidade: O socket do processador (${cpu.socket}) não corresponde ao da placa-mãe (${placaMae.socket}).`);
    }

    // Regra 2: RAM e Placa-Mãe
    if (ram.tipo !== placaMae.tipoRam) {
        incompatibilidades.push(`Incompatibilidade: O tipo de memória RAM (${ram.tipo}) não corresponde ao da placa-mãe (${placaMae.tipoRam}).`);
    }

    // Regra 3: Consumo de energia (usa GPU dedicada se houver, caso contrário usa integrada se disponível)
    const consumoTotal = cpu.consumo + (usadoGpu ? (usadoGpu.consumo || 0) : 0) + placaMae.potenciaMinima;
    if (psu.potencia < consumoTotal) {
        // Calcula sugestão de fonte (20% de margem, arredondado para múltiplo de 50W)
        const sugerido = Math.ceil(consumoTotal * 1.2 / 50) * 50;
        incompatibilidades.push(`Incompatibilidade: A potência da fonte (${psu.potencia}W) é insuficiente para a configuração (Consumo estimado: ${consumoTotal}W). Necessita de uma nova fonte de pelo menos ${sugerido}W.`);
    }

    const resultadoDiv = document.getElementById('resultado');
    if (incompatibilidades.length > 0) {
        resultadoDiv.innerHTML = `<h2>Incompatibilidade(s) encontrada(s):</h2><ul>${incompatibilidades.map(err => `<li>${err}</li>`).join('')}</ul>`;
        resultadoDiv.style.color = 'red';
    } else {
        let nota = '';
        if (usadoGpu && usadoGpu.integrated && !gpu) {
            nota = `<p><strong>Nota:</strong> Nenhuma GPU dedicada selecionada — usando GPU integrada: ${usadoGpu.nome}.</p>`;
        }
        resultadoDiv.innerHTML = `<h2>Tudo compatível!</h2><p>Parabéns, seu PC pode ser montado com estas peças.</p>${nota}`;
        resultadoDiv.style.color = 'green';
    }
}

// Re-renderiza as opções do select de PSUs dependendo do estado do checkbox
function renderPsuOptions() {
    const psuSelect = document.getElementById('psuSelect');
    const simple = document.getElementById('psuSimpleMode') && document.getElementById('psuSimpleMode').checked;
    if (!psuSelect) return;

    // limpa e adiciona opção padrão
    psuSelect.innerHTML = '';
    const padrao = document.createElement('option');
    padrao.value = '';
    padrao.textContent = '-- selecione --';
    psuSelect.appendChild(padrao);

    bancoDePecas.psus.forEach(psu => {
        const option = document.createElement('option');
        option.value = psu.id;
        option.textContent = simple ? `${psu.potencia}W` : psu.nome;
        psuSelect.appendChild(option);
    });

    // mantém o listener de imagem
    psuSelect.addEventListener('change', () => mostrarImagem('psus', psuSelect.value));
}

// Calcula o consumo total estimado (watts) das peças selecionadas
function calcularWatts() {
    const cpuId = document.getElementById('cpuSelect').value;
    const gpuId = document.getElementById('gpuSelect').value;
    const placaMaeId = document.getElementById('placaMaeSelect').value;

    const cpu = bancoDePecas.cpus.find(p => p.id === cpuId);
    const gpu = bancoDePecas.gpus.find(p => p.id === gpuId);
    const placaMae = bancoDePecas.placaMae.find(p => p.id === placaMaeId);

    const resultadoDiv = document.getElementById('resultado');

    if (!cpu && !gpu && !placaMae) {
        resultadoDiv.innerHTML = `<h2>Selecione pelo menos uma peça para calcular o consumo.</h2>`;
        resultadoDiv.style.color = 'orange';
        return;
    }

    const consumoCpu = cpu ? cpu.consumo : 0;
    const consumoGpu = gpu ? gpu.consumo : 0;
    const consumoPlaca = placaMae ? placaMae.potenciaMinima : 0;

    const consumoTotal = consumoCpu + consumoGpu + consumoPlaca;

    // Sugestão de potência da fonte: adicionar 20% de margem
    const sugerido = Math.ceil(consumoTotal * 1.2 / 50) * 50; // arredonda para múltiplo de 50

    resultadoDiv.innerHTML = `<h2>Consumo estimado: ${consumoTotal}W</h2><p>Fonte sugerida (com 20% de margem): ${sugerido}W</p>`;
    resultadoDiv.style.color = 'blue';
}

// Decide qual ação executar com base no rádio selecionado
function performAction() {
    const acao = document.querySelector('input[name="acao"]:checked').value;
    if (acao === 'comparar') {
        verificarCompatibilidade();
    } else if (acao === 'calcular') {
        calcularWatts();
    }
}

// Executa a função para popular os selects quando a página carregar
window.onload = popularSelects;
