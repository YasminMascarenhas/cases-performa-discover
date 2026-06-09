## Mudanças em `src/pages/Index.tsx`

1. **Remover o bloco de cabeçalho** da seção `#results`:
   - Excluir o `<div className="mb-8 flex items-end justify-between">…</div>` que contém o `<h2>` ("Todos os cases" / categoria ativa) e o contador (`N cases encontrados` / `N segmentos`).

2. **Aproximar as faixas de cases do topo**:
   - Reduzir o padding vertical da seção `#results` de `py-16` para algo como `pt-6 pb-16` (ou `py-8`), para que as faixas horizontais subam visivelmente logo após o hero/filtros.

Nada mais é alterado: a busca, os chips de categoria, o agrupamento por empresa, o scroll horizontal e o footer permanecem idênticos.