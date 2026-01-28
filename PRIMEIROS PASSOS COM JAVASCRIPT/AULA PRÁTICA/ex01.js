// Cálculo de média

const n1 = 5;
const n2 = 5;
const n3 = 5;

const media = (n1 + n2 + n3) / 3;

// Classificação

console.log("MÉDIA DO ALUNO");
console.log();

const nota = "Nota: " + media;

if (media < 5) {
  console.log("Aluno Reprovado! " + nota);
} else if (media <= 5 && media <= 7) {
  console.log("Aluno de Recuperação! " + nota);
} else {
  console.log("Aluno Aprovado! " + nota);
}
