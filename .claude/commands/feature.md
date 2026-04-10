Inicia una nueva rama de feature siguiendo GitFlow (base: develop).

Nombre del feature: $ARGUMENTS

Pasos:
1. Asegúrate de estar en `develop` actualizado:
   ```bash
   git checkout develop && git pull origin develop
   ```
2. Crea la rama:
   ```bash
   git checkout -b feature/$ARGUMENTS
   ```
3. Confirma con `git branch --show-current`
4. Informa al usuario que puede empezar. Al terminar usar `/ship` para entregar (PR va a `develop`, no a `main`).

Convenciones para el nombre: kebab-case minúsculas, descriptivo y breve.
Ejemplos: `agregar-faq`, `mejorar-hero`, `nueva-seccion-blog`, `fix-meta-description`
