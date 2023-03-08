<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2" v-for="(item, idx) in pokemon" :key="idx">
        <div class="card mb-4">
          <div class="card-body text-center">
            <h5 class="card-title mb-3 text-center text-capitalize">
              {{ item.name }}
            </h5>
            <RouterLink
              :to="`/detail/${item.name}`"
              class="btn btn-primary w-100"
              >Lihat Detail</RouterLink
            >
            <!-- <RouterLink :to="`/shows/${props.id}`" class="card-link">
              Lihat detail</RouterLink
            > -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",

  data() {
    return {
      pokemon: [],
    };
  },

  methods: {
    fetchData() {
      fetch("https://pokeapi.co/api/v2/pokemon", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results);
          this.pokemon = data.results;
        });
    },
  },
  mounted() {
    this.fetchData();
  },
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
