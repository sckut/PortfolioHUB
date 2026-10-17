# 1. Planejamento do Repositório

## Objetivo

Criar um repositório único (**PortfolioHUB**) que funcione como vitrine profissional: reúne projetos acadêmicos e pessoais, documenta cada um e publica um site via GitHub Pages que pode ser divulgado no LinkedIn.

## Seções definidas

| Seção | Pasta | Finalidade |
|---|---|---|
| Site (GitHub Pages) | `/` (`index.html`, `assets/`) | Página pública do portfólio |
| Projetos acadêmicos | `projetos-academicos/` | Trabalhos do curso no CEUB |
| Projetos pessoais | `projetos-pessoais/` | Projetos próprios e de empreendedorismo |
| Documentação | `documentacao/` | Planejamento, guias e roteiro |
| Apresentações | `apresentacoes/` | Slides do vídeo de apresentação |
| Governança | `.github/`, `CONTRIBUTING.md`, `CHANGELOG.md`, `LICENSE` | Padrões de colaboração e histórico |

## Estrutura básica de diretórios

```text
PortfolioHUB/
├── index.html
├── assets/{css,js,img}/
├── projetos-academicos/<projeto>/README.md
├── projetos-pessoais/<projeto>/README.md
├── documentacao/
├── apresentacoes/
└── .github/
```

## Convenções

- **Nomes de pastas:** minúsculas, sem acento, separadas por hífen (`kebab-case`). Ex.: `clinica-vida-plus`.
- **Um README por projeto**, sempre com: descrição, objetivo, funcionalidades, tecnologias, como executar e links.
- **Commits** no padrão Conventional Commits (`feat:`, `docs:`, `fix:`, `style:`, `chore:`).
- **Versões** com tags SemVer (`v1.0.0`, `v1.1.0`, ...), registradas no `CHANGELOG.md`.
- **Branches:** `main` (publicada), `develop` (integração), `feature/<nome>` (novas funcionalidades).
