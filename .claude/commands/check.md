Ejecuta verificación completa de calidad Y seguridad. Reporta estado de cada ítem.

Corre en orden:

1. `npm audit --audit-level=high` — vulnerabilidades HIGH/CRITICAL en deps
2. `npm run lint` — ESLint
3. `npm run check` — tipos Astro + TypeScript
4. `npm run test:coverage` — tests con cobertura
5. `npm run build` — build de producción

Checks de seguridad adicionales:
6. `grep -rn "target=\"_blank\"" src/ --include="*.astro" -A1 | grep -v "noopener"` — links sin noopener (resultado vacío = OK)
7. `grep -rn "set:html" src/` — verificar que solo se usa con datos estáticos
8. `grep -rn "import\.meta\.env\|VITE_" src/` — vars de entorno expuestas
9. `cat vercel.json` — confirmar que los headers de seguridad están presentes

Formato del reporte final:
```
CALIDAD:
✅ Audit      — 0 HIGH/CRITICAL (N moderate en devDeps, no afectan producción)
✅ Lint        — 0 errores
✅ Types       — sin errores TypeScript/Astro
✅ Tests       — 45/45 passing | Coverage 100%
✅ Build       — 1 página generada

SEGURIDAD:
✅ Links       — todos con noopener noreferrer
✅ set:html    — solo con datos estáticos (src/utils/)
✅ Env vars    — ninguna expuesta en bundle
✅ Headers     — vercel.json con CSP, X-Frame-Options, etc.
```

Si algo falla, mostrar el error exacto y qué hay que corregir antes de poder hacer /ship.
