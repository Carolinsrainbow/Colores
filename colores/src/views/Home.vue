<template>
  <div class="home">
    <input type="text" placeholder="Busquemos un color" />
    <button>Buscar</button>

    <!-- Incorporación de cards de color -->
    <div class="container">
      <div clas="row">
        <div class="col-2">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex"

export default {
  name: "Home",
  computed:{
    ...mapState(["colores"])
  },
  methods:{
    ...mapActions(["getColores"])
  },
  created(){
    this.getColores()
  }

};
</script>
