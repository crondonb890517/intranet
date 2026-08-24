# NexaTrade Intranet

Intranet corporativa estática para la empresa ficticia **NexaTrade**, especializada en comercio y distribución de productos.

## 🚀 Características

- **Framework:** SvelteKit con Svelte 5
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Hosting:** GitHub Pages (sitio estático)
- **Sin backend:** Todos los datos son simulados localmente
- **Responsive:** Diseño adaptable a escritorio, tablet y móvil
- **Accesible:** Cumple con WCAG, navegación por teclado y contraste adecuado

## 📁 Estructura del Proyecto

```
nexatrade-intranet/
├── .github/
│   ├── workflows/
│   │   ├── pr-check.yml       # Validación de Pull Requests
│   │   └── deploy.yml         # Despliegue a GitHub Pages
│   └── CICD_DOCUMENTATION.md  # Documentación CI/CD
├── src/
│   ├── lib/
│   │   ├── components/        # Componentes reutilizables
│   │   └── data/              # Datos simulados
│   ├── routes/
│   │   ├── +layout.svelte     # Layout principal
│   │   ├── +layout.ts         # Configuración del layout
│   │   ├── +page.svelte       # Página de inicio
│   │   ├── news/              # Página de noticias
│   │   ├── documents/         # Página de documentos
│   │   ├── directory/         # Directorio de empleados
│   │   ├── events/            # Página de eventos
│   │   └── resources/         # Recursos corporativos
│   └── app.html
├── static/                    # Archivos estáticos
├── build/                     # Output de compilación (generado)
├── package.json
├── svelte.config.js
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Instalación y Desarrollo

### Requisitos Previos

- Node.js >= 20 (versión LTS recomendada)
- npm >= 9

### Pasos de Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/[TU_USUARIO]/nexatrade-intranet.git
cd nexatrade-intranet
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Ejecutar en modo desarrollo:**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📦 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con hot-reload |
| `npm run build` | Genera la versión estática para producción |
| `npm run preview` | Vista previa de la construcción estática |
| `npm run check` | Verificación de tipos con TypeScript |

## 🌐 Despliegue en GitHub Pages

### Configuración Automática (CI/CD)

El proyecto incluye flujos de GitHub Actions que automatizan:

1. **Validación en Pull Requests:**
   - Verificación de tipos
   - Construcción del proyecto
   - Subida de artefactos para revisión

2. **Despliegue automático a production:**
   - Se activa con push a la rama `main`
   - Configura automáticamente `BASE_PATH` según el nombre del repositorio
   - Despliega a GitHub Pages

### Pasos para Activar el Despliegue

1. **Configurar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Navega a **Settings > Pages**
   - En **Source**, selecciona **GitHub Actions**
   - Guarda la configuración

2. **Hacer push a la rama `main`:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. **Verificar el despliegue:**
   - Ve a la pestaña **Actions** en GitHub
   - Observa el workflow "Deploy to GitHub Pages"
   - Una vez completado, tu sitio estará disponible en:
     ```
     https://[TU_USUARIO].github.io/[NOMBRE_REPOSITORIO]/
     ```

### Despliegue Manual Local

Si prefieres generar y subir manualmente los archivos estáticos:

```bash
# Para un repositorio de proyecto (subdirectorio)
BASE_PATH=/nombre-repositorio npm run build

# Para un dominio personalizado o GitHub User/Org site
npm run build

# Los archivos generados estarán en la carpeta build/
```

## 🎨 Sistema de Diseño

### Colores Corporativos

| Color | Valor | Uso |
|-------|-------|-----|
| Rojo Principal | `#D92D20` | Elementos primarios, branding |
| Rojo Oscuro | `#8F1717` | Fondos destacados, hover states |
| Rojo Intenso | `#E3261E` | CTAs, botones principales |
| Negro Carbón | `#1F1F1F` | Texto principal, encabezados |
| Gris Claro | `#F3F3F3` | Fondos secundarios |
| Blanco | `#FFFFFF` | Fondos principales |

### Tipografía

- **Familia:** Inter, system-ui, sans-serif
- **Encabezados:** Bold/Semi-bold, tamaños grandes
- **Cuerpo:** Regular, altura de línea cómoda

### Componentes Principales

- `Header` - Barra de navegación superior
- `Hero` - Sección destacada de bienvenida
- `QuickAccess` - Accesos rápidos a funcionalidades
- `NewsCard` - Tarjeta de noticia
- `DocumentList` - Listado de documentos
- `EmployeeCard` - Tarjeta de empleado
- `EventCard` - Tarjeta de evento
- `MetricCard` - Indicadores clave
- `Footer` - Pie de página

## 📄 Páginas Incluidas

1. **Inicio** (`/`)
   - Hero con mensaje corporativo
   - Accesos rápidos
   - Noticias destacadas
   - Próximos eventos
   - Panel de indicadores

2. **Noticias** (`/news`)
   - Listado completo de noticias
   - Filtros por categoría
   - Buscador integrado

3. **Documentos** (`/documents`)
   - Biblioteca de archivos
   - Filtros por categoría y tipo
   - Simulación de descarga

4. **Directorio** (`/directory`)
   - Listado de empleados
   - Filtros por departamento
   - Información de contacto

5. **Eventos** (`/events`)
   - Calendario de actividades
   - Estados de inscripción
   - Detalles por evento

6. **Recursos** (`/resources`)
   - Herramientas internas
   - Enlaces agrupados por categoría

## 🔒 Seguridad y Mejores Prácticas

- No se exponen credenciales en el código
- Permisos mínimos en workflows de GitHub Actions
- Validación de tipos estricta con TypeScript
- Contraste de colores conforme a WCAG
- Navegación accesible por teclado

## 🤝 Contribución

1. Crea una rama desde `develop` o `main`
2. Realiza tus cambios
3. Abre un Pull Request
4. Espera la validación automática del CI
5. Revisa los artefactos generados si es necesario
6. Solicita revisión y merge

## 📝 Licencia

Este proyecto es de uso interno corporativo. Todos los derechos reservados.

---

**NexaTrade** - Conectamos personas, productos y oportunidades.
