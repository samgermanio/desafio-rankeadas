// Calculadora de partidas Rankeadas

/**
 * Função que calcula o saldo de Rankeadas e retorna o nível do jogador
 * @param {number} vitorias - Quantidade de vitórias do jogador
 * @param {number} derrotas - Quantidade de derrotas do jogador
 * @returns {string} Mensagem com o saldo de Rankeadas e o nível do jogador
 */
function calcularRankeadas(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas
    const saldoVitorias = vitorias - derrotas;
  
    // Define os níveis de Rankeadas
    let nivel;
    if (vitorias < 10) {
      nivel = 'Ferro';
    } else if (vitorias >= 10 && vitorias <= 20) {
      nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = 'Lendário';
    } else if (vitorias >= 101) {
      nivel = 'Imortal';
    }
  
    // Retorna a mensagem com o saldo de Rankeadas e o nível do jogador
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
  }
  
  // Exemplo de uso
  const vitorias = 25;
  const derrotas = 10;
  const resultado = calcularRankeadas(vitorias, derrotas);
  console.log(resultado); // O Herói tem de saldo de 15 está no nível de Prata