# 2. Criação e Versionamento — Guia de Git

## Configuração inicial

```bash
git config --global user.name "Marcus Vinicius"
git config --global user.email "seu-email@exemplo.com"
git config --global init.defaultBranch main
```

## Versão 1.0 — projeto inicial (página web)

```bash
mkdir PortfolioHUB && cd PortfolioHUB
git init
# cria README.md, .gitignore, LICENSE, index.html e assets/
git add .
git commit -m "feat: cria página inicial do portfólio (GitHub Pages)"
git tag -a v1.0.0 -m "Versão 1.0 — primeira versão da página"
git remote add origin https://github.com/sckut/PortfolioHUB.git
git push -u origin main --tags
```

## Alterações e envio ao GitHub (v1.1)

```bash
git checkout -b develop
git checkout -b feature/projetos
# ... cria pastas e READMEs dos projetos ...
git add projetos-academicos projetos-pessoais
git commit -m "docs: adiciona pastas e READMEs dos projetos"
git checkout develop
git merge --no-ff feature/projetos -m "merge: feature/projetos em develop"
git checkout main
git merge --no-ff develop -m "release: v1.1.0"
git tag -a v1.1.0 -m "Versão 1.1 — projetos, documentação e slides"
git push origin main develop --tags
```

## Fluxo de branches

```text
main     ●─────────────●────────────────●   (v1.0.0)        (v1.1.0)
          \                            /
develop    ●──────●──────────●────────●
                   \        /
feature/*           ●──●──●
```

## Boas práticas adotadas

1. **Commits pequenos e atômicos** — cada commit faz uma coisa só.
2. **Mensagens no imperativo** com prefixo: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`.
3. **Nunca commitar segredos** (chaves de API, `.env`) — protegidos pelo `.gitignore`.
4. **Tags anotadas** para cada versão (`git tag -a`).
5. **Pull Requests** para levar `develop` → `main`, usando o template em `.github/`.
6. **`git pull` antes de começar** a trabalhar, para evitar conflitos.

## Comandos úteis

| Comando | Para que serve |
|---|---|
| `git status` | Ver o que mudou |
| `git log --oneline --graph --all` | Ver o histórico em árvore |
| `git diff` | Ver as diferenças antes de commitar |
| `git tag` | Listar versões |
| `git checkout v1.0.0` | Voltar a uma versão específica |
| `git revert <hash>` | Desfazer um commit com segurança |
