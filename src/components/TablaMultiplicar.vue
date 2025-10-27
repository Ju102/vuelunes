<template>
    <div style="margin-top: 50px;">
        <label>Introduzca un número: </label>
        <input type="number" v-model="num" /><br /><br />
        <button @click="generarTablaMultiplicar()">Calcular (versión 1)</button>
        <hr />
        <!------------------------------------------------------------------->
        <p>Tabla 1</p>
        <table border="1">
            <tbody v-html="html"></tbody>
        </table>
        <hr />
        <!------------------------------------------------------------------->
        <p>Tabla 2</p>
        <table border="1" v-if="num != 0">
            <tr v-for="contador in 10" :key="contador">
                <td>{{ num }} x {{ contador }}</td>
                <td>{{ num * contador }}</td>
            </tr>
        </table>
        <!------------------------------------------------------------------->
        <hr />
        <p>Tabla 3</p>
        <table border="1" v-if="num != 0">
            <tr v-for="contador in 10" :key="contador">
                <td>{{ $filters.getOperacion(this.num,contador) }}</td>
                <td>{{ $filters.getResultado(this.num,contador) }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",
    data() {
        return {
            num: 0,
            html: "",
        }
    },
    methods: {
        generarTablaMultiplicar() {
            let aux = "";
            for (var i = 1; i <= 10; i++) {
                aux += "<tr>";
                aux += `<td>${this.num} x ${i}</td><td>${this.num * i}</td>`;
                aux += "</tr>";
            }
            this.html = aux;
        },
    }
}
</script>

<style></style>