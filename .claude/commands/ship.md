Entrega el trabajo actual: seguridad → calidad → commit → push → PR.

Contexto opcional: $ARGUMENTS

Ejecuta en orden, deteniéndote en cualquier fallo:

1. **Verificar rama**
   ```bash
   git branch --show-current
   ```
   - Si es `main` o `develop` → PARAR. Pedir al usuario que cree una rama con `/feature` o `/hotfix`.
   - Anotar si es `feature/*` (PR va a `develop`) o `hotfix/*` (PR va a `main`).

2. **Seguridad** (agente `security`)
   ```bash
   npm audit --audit-level=high
   ```
   Si hay HIGH o CRITICAL → PARAR. No hay entrega con vulnerabilidades HIGH/CRITICAL.

3. **Lint**
   ```bash
   npm run lint
   ```
   Si falla → corregir antes de continuar.

4. **Tests**
   ```bash
   npm run test
   ```
   Si falla → corregir antes de continuar.

5. **Build**
   ```bash
   npm run build
   ```
   Si falla → corregir antes de continuar.

6. **Revisar cambios**
   ```bash
   git diff --stat && git status
   ```
   Entender exactamente qué se entrega.

7. **Staging selectivo** — añadir solo archivos del cambio actual (nunca `git add .` si hay archivos sin relación).

8. **Commit** con Conventional Commits. El hook de commitlint rechazará mensajes inválidos.

9. **Push**
   ```bash
   git push -u origin <rama-actual>
   ```

10. **PR** — determinar base según tipo de rama:
    - `feature/*` → `--base develop`
    - `hotfix/*` → `--base main` (y crear un segundo PR a `develop` si aplica)
    - `release/*` → `--base main`

    ```bash
    gh pr create \
      --title "tipo(scope): descripción" \
      --body "## Qué cambia
    - ...

    ## Seguridad
    - npm audit --audit-level=high: 0 HIGH/CRITICAL ✅
    - Links externos con noopener: ✅
    - set:html solo con datos estáticos: ✅

    ## Testing
    - npm test: X/X ✅
    - npm run build: OK ✅" \
      --base <develop|main>
    ```

11. Mostrar URL del PR al usuario.
