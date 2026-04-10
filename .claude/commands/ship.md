Entrega el trabajo actual: verifica calidad, hace commit, push y crea PR a main.

Contexto opcional: $ARGUMENTS (se usa como descripción del PR si se pasa)

Ejecuta estos pasos en orden, deteniéndote si alguno falla:

1. **Verificar rama**: `git branch --show-current` — si es `main`, PARAR y avisar al usuario que debe estar en una rama feature/* o hotfix/*

2. **Lint**: `npm run lint` — si falla, corregir los errores antes de continuar

3. **Tests**: `npm run test` — si falla, corregir antes de continuar

4. **Build**: `npm run build` — si falla, corregir antes de continuar

5. **Ver cambios**: `git diff --stat` y `git status` para entender qué se entrega

6. **Staging inteligente**: añadir solo los archivos relacionados al cambio (no `git add .` a ciegas si hay archivos no relacionados)

7. **Commit**: Crear mensaje en formato Conventional Commits que describa los cambios reales. Usar `git commit -m "..."` con el formato correcto.

8. **Push**: `git push -u origin <rama-actual>`

9. **PR**: Crear PR con `gh pr create` con:
   - Título en Conventional Commits
   - Body con resumen de cambios, qué se probó y enlace a preview de Vercel (Vercel lo genera automáticamente)
   - Base: `main`

10. Mostrar al usuario la URL del PR creado.

Si algún paso falla, reportar el error exacto y qué hay que corregir.
