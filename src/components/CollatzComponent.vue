<template>
  <div>
    <h3>Conjetura de Collatz</h3>
    <label>Introduce un número: </label>
    <input type="number" v-model="numero" />
    <button @click="calcularCollatz()">Calcular</button>
    <hr/>
    <ul style="list-style: none; padding-left: 0px;">
      <li v-for="numero in lista" :key="numero" v-html="$filters.parImpar(numero)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CollatzComponent",

  data() {
    return {
      numero: 0,
      lista: []
    }
  },
  methods: {
    calcularCollatz() {
      this.lista = [];
      this.lista.push(this.numero);
      var aux = this.numero;

      while (aux != 1) {
        if (aux % 2 == 0) {
          aux = aux / 2;
          this.lista.push(aux);
        }
        else {
          aux = aux * 3 + 1;
          this.lista.push(aux);
        }
      }
    }
  }
}
</script>

<style></style>