Ejecuta una verificación completa de calidad del proyecto y reporta el estado.

Corre estos comandos en orden y muestra un resumen al final:

1. `npm run lint` — ESLint sobre todo el proyecto
2. `npm run check` — Verificación de tipos Astro + TypeScript  
3. `npm run test:coverage` — Tests con reporte de cobertura
4. `npm run build` — Build de producción completo

Formato del reporte final:
```
✅ Lint      — 0 errores
✅ Types     — sin errores TypeScript
✅ Tests     — 45/45 passing | Coverage 100%
✅ Build     — 1 página generada
```

Si alguno falla, mostrar el error exacto y proponer la corrección.
