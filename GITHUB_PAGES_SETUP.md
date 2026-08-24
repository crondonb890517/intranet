# Guía Rápida de Configuración para GitHub Pages

## Pasos Esenciales

### 1. Configurar GitHub Pages en tu Repositorio

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En la barra lateral izquierda, haz clic en **Pages**
4. En la sección **Build and deployment**:
   - En **Source**, selecciona **GitHub Actions**
   - Haz clic en **Save**

### 2. Subir tu Código a GitHub

```bash
# Inicializar repositorio (si no lo está ya)
git init

# Añadir todos los archivos
git add .

# Crear commit inicial
git commit -m "Initial commit: NexaTrade Intranet"

# Añadir remoto (reemplaza con tu URL)
git remote add origin https://github.com/TU_USUARIO/nexatrade-intranet.git

# Crear rama main y hacer push
git branch -M main
git push -u origin main
```

### 3. Verificar el Despliegue Automático

1. Ve a la pestaña **Actions** en tu repositorio de GitHub
2. Deberías ver el workflow "Deploy to GitHub Pages" ejecutándose
3. Espera a que se complete (puede tomar 2-5 minutos)
4. Una vez completado, verás un mensaje con la URL de tu sitio

### 4. Acceder a tu Sitio

Tu intranet estará disponible en:
```
https://TU_USUARIO.github.io/NOMBRE_REPOSITORIO/
```

Por ejemplo:
```
https://juanperez.github.io/nexatrade-intranet/
```

## Solución de Problemas Comunes

### El workflow falla en el paso de build

**Causa:** Puede haber errores de TypeScript o dependencias faltantes.

**Solución:**
```bash
# Ejecutar localmente para verificar
npm run check
npm run build

# Si hay errores, corrígelos antes de hacer push
```

### La página se ve pero los recursos no cargan (CSS/JS rotos)

**Causa:** El `BASE_PATH` no está configurado correctamente.

**Verificación:**
1. Revisa que `svelte.config.js` tenga:
   ```javascript
   paths: {
     base: process.env.BASE_PATH || ''
   }
   ```

2. Revisa que `deploy.yml` tenga:
   ```yaml
   - name: Build project
     env:
       BASE_PATH: /${{ github.event.repository.name }}
     run: npm run build
   ```

3. Vuelve a hacer push a `main` para activar el despliegue

### GitHub Pages muestra error 404

**Causas posibles:**
1. GitHub Pages no está configurado para usar GitHub Actions
2. El workflow no se ha ejecutado correctamente
3. Los archivos no se subieron al artifact correcto

**Solución:**
1. Verifica en Settings > Pages que la fuente sea "GitHub Actions"
2. Revisa los logs del workflow en la pestaña Actions
3. Asegúrate de que el build se completó sin errores

### Quieres usar un dominio personalizado

**Pasos:**
1. En Settings > Pages > Custom domain, añade tu dominio
2. Configura los registros DNS según las instrucciones de GitHub
3. El workflow seguirá funcionando automáticamente

## Desarrollo Local vs Producción

### Desarrollo Local
```bash
npm run dev
# Disponible en http://localhost:5173
# Sin BASE_PATH
```

### Producción (GitHub Pages)
```bash
# Automático mediante GitHub Actions
# BASE_PATH se configura como /nombre-repositorio
# Los recursos cargan desde rutas relativas correctas
```

### Prueba Local de Build de Producción
```bash
# Simular GitHub Pages localmente
BASE_PATH=/nexatrade-intranet npm run build
npm run preview
```

## Actualizar tu Sitio

Cada vez que hagas push a la rama `main`:

```bash
git add .
git commit -m "Descripción de cambios"
git push origin main
```

El workflow se activará automáticamente y desplegará los cambios en 2-5 minutos.

## Ramas Recomendadas

- `main`: Rama de producción (despliegue automático)
- `develop`: Rama de desarrollo (solo validaciones, no despliega)
- `feature/*`: Ramas para nuevas funcionalidades

## Verificar el Estado del Despliegue

1. **Actions Tab**: Ver el progreso en tiempo real
2. **Environments**: En Settings > Environments > github-pages
3. **Commit Status**: Cada commit mostrará el estado del deploy

## Notas Importantes

- ⚠️ **No elimines la carpeta `.github/workflows/`**: Contiene la configuración de CI/CD
- ⚠️ **No modifiques manualmente la carpeta `build/`**: Se genera automáticamente
- ✅ **Mantén actualizadas las dependencias**: Ejecuta `npm update` periódicamente
- ✅ **Prueba los cambios localmente**: Antes de hacer push a `main`

---

**NexaTrade Intranet** - Lista para desplegar en GitHub Pages 🚀
