<template>
  <div class="container">
    <div class="row">
      <!-- <div class="col-3" v-for="(countries, idx) in countriesName" :key="idx">
        <div class="card" style="width: 18rem">
          <img :src="countries.flag" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ countries.name }}</h5>
            <p class="card-text">IS0: {{ countries.iso2 }}</p>
          </div>
        </div>
      </div> -->
      <p>Detail Page</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailPage",
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
