<template>
  <div class="home">
    <input
      type="text"
      placeholder="Busquemos un color"
      v-model="colorBuscado"
    />
    <button>Buscar</button>

    <!-- Incorporación de cards de color -->
    <div class="container pa-5 my-5 mb-5 text-center">
      <div class="row">
        <div class="col-2" v-for="(color, index) in colores" :key="index">
          <b-card
            no-body
            style="max-width: 20rem"
          >
                <div id="cajaColor"></div>
            <b-card-text> Color: {{index}}</b-card-text>
            <b-card-text> Código: {{ color }} </b-card-text>
          </b-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      colorBuscado: ""
    };
  },
  computed: {
    ...mapState(["colores", "arreglado"]),
    coloresFiltrados() {
      return this.colores.filter((c) => c.colores.includes(this.colorBuscado))
      .sort();
    },
  },
  methods: {
    ...mapActions(["getColores"]),
  },
  created() {
    this.getColores();
  },
};
</script>

<style lang="scss" scoped>
#cajaColor {
  background-color: aqua;
  width: 158px;
  height: 100px;
}
</style>
