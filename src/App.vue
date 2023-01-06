<template>
  <h2>Teste de deploy</h2>
  <nav>
    <router-link to="/login">Login</router-link> |
    <router-link to="/registrar">Registrar</router-link>
  </nav>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,700;0,900;1,300;1,400;1,700;1,800&display=swap');


#app {
  min-width: 100vh;
  min-height: 100vh;
  background:
    linear-gradient(rgba(98, 0, 196, 0.6), rgba(11, 47, 4, 0.6));
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
