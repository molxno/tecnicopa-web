---
name: GitFlow
description: Use this agent for git operations, branch management, commits, pull requests, pushes, deployments, or GitFlow workflow. Triggered automatically at the end of ANY code change to handle the full delivery cycle: commit → push → PR. Also triggered when user asks to "commit", "push", "deploy", "subir", "PR", "merge", or "publicar".
---

## Rol
Responsable del ciclo completo de entrega: desde el código hasta producción.

## Repositorio
- Remote: `git@github.com:molxno/tecnicopa-web.git`
- Rama principal: `main` (auto-deploy a Vercel en cada push)
- Dominio: `tecnicopa.com` (DNS en Cloudflare → Vercel)

## GitFlow simplificado

```
main ← producción (NUNCA commit directo)
 └── feature/<nombre>   ← nuevas funcionalidades → PR a main
 └── hotfix/<nombre>    ← fixes urgentes → PR a main
```

## Flujo obligatorio para CUALQUIER cambio

```bash
# 1. Crear rama (si no existe ya)
git checkout main && git pull origin main
git checkout -b feature/<nombre-kebab-case>

# 2. Implementar cambio (aquí trabajan los otros agentes)

# 3. Verificar calidad (el hook pre-commit también lo hace)
npm run lint        # debe pasar limpio
npm run test        # 45+ tests, todos verdes
npm run build       # sin errores TypeScript ni Astro

# 4. Commit con Conventional Commits
git add <archivos-específicos>
git commit -m "tipo(scope): descripción imperativa en español o inglés"

# 5. Push y PR
git push -u origin feature/<nombre>
gh pr create --title "tipo: descripción" --body "..." --base main
```

## Tipos de commit válidos (commitlint lo valida automáticamente)
| Tipo | Cuándo |
|---|---|
| `feat` | Nueva funcionalidad visible |
| `fix` | Corrección de bug |
| `chore` | Config, deps, build, CI |
| `test` | Tests (sin cambio funcional) |
| `docs` | Solo documentación |
| `style` | Formato/Tailwind (sin lógica) |
| `refactor` | Refactor sin cambio funcional |
| `perf` | Mejora de rendimiento |
| `ci` | Cambios en CI/CD |

## Antes de CADA commit — checklist
- [ ] `npm run lint` → 0 errores, 0 warnings
- [ ] `npm run test` → todos los tests pasan
- [ ] `npm run build` → build limpio
- [ ] Solo archivos relacionados al cambio en el staging area
- [ ] Mensaje sigue Conventional Commits

## Crear PR
```bash
gh pr create \
  --title "feat(services): agregar sección de preguntas frecuentes" \
  --body "## Resumen
- Agrega componente FAQ.astro con datos en content.ts
- Tests actualizados con 100% coverage

## Testing
- \`npm test\` → todos pasan
- \`npm run build\` → OK
- Preview Vercel: <URL de preview>" \
  --base main
```

## Merges
- Solo hacer merge cuando el PR tiene CI verde (Vercel preview OK)
- Merge method: merge commit (no squash, para preservar historial)
- Borrar rama feature después del merge

## Vercel deploys
- Push a `main` → producción automática (~1-2 min)
- Push a `feature/*` → preview deployment automático
- Verificar deploy: `gh pr view --web` o dashboard de Vercel

## PROHIBIDO
- `git push --force` a main
- Commits directos a main (`git commit` mientras estás en `main`)
- Saltarse los hooks: `--no-verify`
- `git reset --hard` sin confirmar con el usuario
