// Função para gerar etiquetas de identificação em letras maiúsculas
export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

// Função para verificar se um animal de estimação pode ser adotado com base na idade e no tamanho
export function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 1 && porte === "M";
}

// Função para calcular o consumo alimentar diário
export function calcularConsumoDeRacao(nome, idade, peso) {
  // Cálculo base: 300g por kg de peso
  return Math.round(peso * 300);
}

// Função para decidir o tipo de atividade com base no tamanho do animal de estimação
export function decidirTipoDeAtividadePorPorte(porte) {
  const atividades = {
    pequeno: "brincar dentro de casa",
    medio: "passear no parque",
    grande: "correr em campo aberto",
  };
  return atividades[porte.toLowerCase()] || "atividade não definida";
}

// Função assíncrona para simular busca de dados
export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pipoca");
    }, 100);
  });
}
