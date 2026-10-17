# PortfolioHUB — Marcus Vinicius Preard Resende

[![GitHub Pages](https://img.shields.io/badge/site-GitHub%20Pages-8b2c8f?logo=github)](https://sckut.github.io/PortfolioHUB/)
[![Versão](https://img.shields.io/github/v/tag/sckut/PortfolioHUB?label=vers%C3%A3o&color=d6338a)](https://github.com/sckut/PortfolioHUB/tags)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-perfil-0a66c2?logo=linkedin)](https://www.linkedin.com/in/SEU-LINKEDIN/)
[![Licença: MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-555)](LICENSE)

> Repositório central de portfólio com meus projetos **acadêmicos** (Engenharia de Software — CEUB) e **pessoais**, versionado com Git e publicado com GitHub Pages.

🌐 **Site:** https://sckut.github.io/PortfolioHUB/
🎥 **Apresentação (YouTube, 5 min):** LINK-DO-VIDEO

---

## 📑 Sumário

- [Sobre mim](#-sobre-mim)
- [Estrutura do repositório](#-estrutura-do-repositório)
- [Projetos](#-projetos)
- [Como executar o site localmente](#-como-executar-o-site-localmente)
- [Versionamento](#-versionamento)
- [Documentação](#-documentação)
- [Contato](#-contato)

## 👤 Sobre mim

Estudante de **Engenharia de Software no CEUB** (Brasília/DF) e empreendedor. Tenho experiência prática na operação de uma empresa de eventos (som, iluminação, painéis de LED e estruturas), o que me levou a desenvolver soluções de software para problemas reais de negócio. Interesses principais: **Cibersegurança** e **IA/Dados**.

## 🗂 Estrutura do repositório

```text
PortfolioHUB/
├── index.html                 # Página principal (GitHub Pages)
├── assets/                    # CSS, JS e imagens do site
│   ├── css/style.css
│   ├── js/main.js
│   └── img/
├── projetos-academicos/       # Trabalhos do curso (CEUB)
│   ├── study-hub/
│   ├── clinica-vida-plus/
│   └── jogo-adivinhacao-python/
├── projetos-pessoais/         # Projetos próprios / empreendedorismo
│   ├── mandaka-pedidos/
│   ├── gestao-eventos/
│   └── pontoapp/
├── documentacao/              # Planejamento, guia de Git, LinkedIn, roteiro
├── apresentacoes/             # Slides usados na apresentação em vídeo
├── .github/                   # Templates de issue e pull request
├── CHANGELOG.md               # Histórico de versões
├── CONTRIBUTING.md            # Padrões de commit, branches e PR
└── LICENSE
```

## 🚀 Projetos

### Acadêmicos

| Projeto | Descrição | Tecnologias |
|---|---|---|
| [Study Hub](projetos-academicos/study-hub/) | Projeto integrador do Bootcamp I: documento base, arquitetura de pastas e pitch | Google Docs, GitHub, YouTube |
| [Clínica Vida+](projetos-academicos/clinica-vida-plus/) | Modelagem de um sistema de agendamento médico (diagramas de componentes, fluxo, ER e arquitetura) | UML, Modelagem ER |
| [Jogo de Adivinhação](projetos-academicos/jogo-adivinhacao-python/) | Jogo em Python para praticar lógica, laços e validação de entrada | Python, Jupyter |

### Pessoais

| Projeto | Descrição | Tecnologias | Status |
|---|---|---|---|
| [Mandaká — Pedidos Online](projetos-pessoais/mandaka-pedidos/) | Plataforma de pedidos para restaurantes sem taxas de marketplace: cardápio, carrinho, painel da cozinha e painel admin | HTML/JS, Supabase | 🟡 Em evolução |
| [Gestão de Eventos](projetos-pessoais/gestao-eventos/) | SaaS de gestão para empresas de equipamentos para eventos — Fase 1: inventário | Next.js, TypeScript, Supabase, Tailwind | 🟡 Em desenvolvimento |
| [PontoApp](projetos-pessoais/pontoapp/) | Sistema web de registro de ponto de funcionários | HTML, CSS, JavaScript | 🟢 Funcional |

## 💻 Como executar o site localmente

```bash
git clone https://github.com/sckut/PortfolioHUB.git
cd PortfolioHUB
# Opção 1: abrir o index.html direto no navegador
# Opção 2: servidor local
python -m http.server 8000   # acesse http://localhost:8000
```

## 🏷 Versionamento

O projeto segue **[Versionamento Semântico](https://semver.org/lang/pt-BR/)** (`MAJOR.MINOR.PATCH`) e **[Conventional Commits](https://www.conventionalcommits.org/pt-br/)**.

| Versão | Descrição |
|---|---|
| `v1.0.0` | Primeira versão da página web (GitHub Pages) e estrutura base do repositório |
| `v1.1.0` | Pastas e READMEs dos projetos, documentação, slides e página reformulada |

Fluxo de trabalho: `main` (estável/publicada) ← `develop` ← `feature/*`. Detalhes em [CONTRIBUTING.md](CONTRIBUTING.md) e [documentacao/guia-versionamento-git.md](documentacao/guia-versionamento-git.md).

## 📚 Documentação

- [Planejamento do repositório](documentacao/planejamento-repositorio.md)
- [Guia de versionamento com Git](documentacao/guia-versionamento-git.md)
- [Publicação no GitHub Pages](documentacao/github-pages.md)
- [Integração com o LinkedIn](documentacao/integracao-linkedin.md)
- [Roteiro da apresentação (5 min)](documentacao/roteiro-apresentacao.md)

## 📬 Contato

- **E-mail:** mvp.resende@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/SEU-LINKEDIN/
- **GitHub:** https://github.com/sckut

---

<sub>Distribuído sob a licença MIT. Veja [LICENSE](LICENSE).</sub>
