# 🍽 Mandaká — Plataforma de Pedidos Online

> Sistema de pedidos próprio para restaurantes, para vender direto ao cliente sem pagar taxas de marketplace.

## 📌 Problema

Restaurantes pequenos perdem parte relevante da margem com comissões de aplicativos de delivery. O objetivo é oferecer um canal próprio de pedidos.

## ✅ Funcionalidades

- [x] Cardápio digital
- [x] Carrinho de compras
- [x] Painel da cozinha (acompanhamento de pedidos)
- [x] Painel administrativo
- [ ] Login com e-mail/senha (Supabase Auth) e perfis de acesso (cliente, cozinha, administrador)
- [ ] Pagamento online
- [ ] Multi-tenant (vários restaurantes na mesma plataforma)

## 🏗 Arquitetura

```text
Cliente (cardápio/carrinho) ──► Banco (Supabase) ◄── Painel da cozinha
                                       ▲
                                       └──────────── Painel administrativo
```

## 🛠 Tecnologias

HTML · CSS · JavaScript · Supabase (banco e autenticação)

## 🔗 Links

- Código-fonte: LINK-REPO-MANDAKA
- Restaurante piloto: Mandaká

---
⬅️ [Voltar para projetos pessoais](../)
