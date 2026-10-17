"""Jogo de adivinhação de números — Lógica de Programação (CEUB)."""
import random

NIVEIS = {
    "1": ("Fácil", 20, 6),
    "2": ("Médio", 50, 7),
    "3": ("Difícil", 100, 7),
}


def ler_inteiro(mensagem: str) -> int:
    """Lê um número inteiro, repetindo até a entrada ser válida."""
    while True:
        try:
            return int(input(mensagem))
        except ValueError:
            print("⚠️  Digite apenas números inteiros.")


def escolher_nivel() -> tuple:
    while True:
        opcao = input("Escolha a dificuldade (1-Fácil, 2-Médio, 3-Difícil): ").strip()
        if opcao in NIVEIS:
            return NIVEIS[opcao]
        print("Opção inválida.")


def jogar() -> None:
    nome, limite, tentativas = escolher_nivel()
    secreto = random.randint(1, limite)
    print(f"\n[{nome}] Adivinhe o número entre 1 e {limite}. Você tem {tentativas} tentativas.")

    for tentativa in range(1, tentativas + 1):
        palpite = ler_inteiro(f"Tentativa {tentativa}: ")
        if palpite == secreto:
            print(f"🎉 Acertou em {tentativa} tentativa(s)!")
            return
        dica = "MAIOR" if palpite < secreto else "MENOR"
        print(f"{'📈' if dica == 'MAIOR' else '📉'} O número é {dica}.")

    print(f"😢 Fim de jogo! O número era {secreto}.")


if __name__ == "__main__":
    print("=== JOGO DE ADIVINHAÇÃO ===")
    while True:
        jogar()
        if input("\nJogar novamente? (s/n): ").strip().lower() != "s":
            print("Até a próxima!")
            break
