Inicia una nueva rama de feature siguiendo GitFlow.

Nombre del feature: $ARGUMENTS

Pasos:
1. Asegúrate de estar en `main` y que esté actualizado: `git checkout main && git pull origin main`
2. Crea la rama: `git checkout -b feature/$ARGUMENTS`
3. Confirma que la rama fue creada con `git branch --show-current`
4. Informa al usuario que puede empezar a implementar. La rama ya está lista.

Convenciones para el nombre:
- kebab-case en minúsculas
- Descriptivo y breve: `agregar-faq`, `mejorar-hero`, `nueva-seccion-blog`
- Sin espacios ni caracteres especiales
