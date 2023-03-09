<template>
  <div class="container">
    <div class="card mb-3" style="width: fit-content">
      <div class="row g-0">
        <div class="card-body">
          <h2 class="card-title text-capitalize">{{ pokemon.name }}</h2>
          <h6 class="card-text">Abilities</h6>
          <ul>
            <li
              v-for="(item, idx) in pokemon.abilities"
              :key="idx"
              class="mb-0"
            >
              {{ item.ability.name }}
            </li>
          </ul>
          <div class="d-flex">
            <img
              v-for="(item, idx) in pokemon.sprites"
              :src="item"
              :key="idx"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailPage",
  data() {
    return {
      pokemon: {},
    };
  },

  methods: {
    fetchData() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id} `, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.pokemon = data;
        });
    },
  },

  mounted() {
    // console.log("route", this.$route);
    this.fetchData();
  },

  // methods: {
  //   fetchData() {
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id} `, {
  //       method: "GET",
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data.results);
  //         // this.pokemon = data.results;
  //       });
  //   },
  // },

  // mounted() {
  //   console.log("route", route);
  //   // this.fetchData();
  // },
};
</script>

<!-- <script>
export default {
  name: "Country",

  data() {

  },

  setup() {
    const state = reactive({
      countriesName: {},
      countries: "",
    });
    console.log(state.countries);
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.data);
        state.countriesName = data.data;
      });
    return {
      ...toRefs(state),
    };
  },
};
</script> -->
