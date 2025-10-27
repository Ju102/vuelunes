<template>
  <nav class="menu" aria-label="Navegación principal">
    <ul class="menu__list">
      <li class="menu__item">
        <router-link class="menu__link" to="/">Inicio</router-link>
      </li>
      <li class="menu__item">
        <router-link class="menu__link" to="/collatz">Collatz</router-link>
      </li>
      <li class="menu__item">
        <router-link class="menu__link" to="/multiplicar">Multiplicación</router-link>
      </li>
    </ul>
  </nav>
  
</template>

<script>
export default {
  name: "MenuComponent",
}
</script>

<style scoped>
/* Contenedor del menú */
.menu {
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--menu-bg, #ffffff);
  color: var(--menu-fg, #1f2937);
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
}

/* Lista horizontal */
.menu__list {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0;
  list-style: none;
  overflow-x: auto; /* Evita cortes en pantallas pequeñas */
}

.menu__item {
  flex: 0 0 auto;
}

/* Enlaces */
.menu__link {
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
}

.menu__link:hover {
  background: rgba(0, 0, 0, 0.05);
}

.menu__link:focus-visible {
  outline: 2px solid #3b82f6; /* azul */
  outline-offset: 2px;
}

/* Activo (clases de Vue Router) */
.router-link-active.menu__link,
.router-link-exact-active.menu__link {
  background: #3b82f6; /* azul */
  color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}

/* Modo oscuro automático */
@media (prefers-color-scheme: dark) {
  .menu {
    background: var(--menu-bg-dark, #0b1020);
    color: var(--menu-fg-dark, #e5e7eb);
    border-bottom-color: #111827;
  }

  .menu__link:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  .router-link-active.menu__link,
  .router-link-exact-active.menu__link {
    background: #2563eb; /* azul algo más intenso en dark */
    color: #ffffff;
  }
}
</style>