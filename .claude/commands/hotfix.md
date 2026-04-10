Inicia una rama de hotfix para un fix urgente en producción.

Descripción del fix: $ARGUMENTS

Pasos:
1. `git checkout main && git pull origin main`
2. `git checkout -b hotfix/$ARGUMENTS`
3. Confirma la rama con `git branch --show-current`
4. Informa al usuario que implemente el fix. Cuando termine, usar `/ship` para entregar.

Diferencia con feature: los hotfix van directos a main sin pasar por develop.
Nombre en kebab-case: `fix-whatsapp-url`, `corregir-meta-description`
