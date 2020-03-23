<template>
    <div class="container mx-auto px-5 py-5">
        <router-link to="/" class="bg-white shadow-md px-4 py-3 rounded-md"> Back </router-link>
        <h2 class="mt-5 text-xl">Country : {{ statistic.country }}</h2>
        <h2 class="text-xl">Day : {{ statistic.day}}</h2>
        <div class="mt-2 text-center">
            <div class="px-4 py-4 card bg-red-200 rounded-md">
                <h2 class="font-bold text-gray-800">Death</h2>
                <h4>New : <span class="font-bold">{{statistic.deaths.new}}</span></h4>
                <h4>Total : <span class="font-bold">{{statistic.deaths.total}}</span></h4>
            </div>

            <div class="mt-5 px-4 py-4 card bg-red-200 rounded-md">
                <h2 class="font-bold text-gray-800">Cases</h2>
                <h4>New : <span class="font-bold">{{statistic.cases.new}}</span></h4>
                <h4>Active : <span class="font-bold">{{statistic.cases.active}}</span></h4>
                <h4>Critical : <span class="font-bold">{{statistic.cases.critical}}</span></h4>
                <h4>Recovered : <span class="font-bold">{{statistic.cases.recovered}}</span></h4>
                <h4>Total : <span class="font-bold">{{statistic.cases.total}}</span></h4>
            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "Detail",
  data() {
    return {
      statistic: [],
    }
  },
  created() {
    this.getStatistics()
  },
  methods: {
    getStatistics() {     
      axios.get('https://covid-193.p.rapidapi.com/statistics', {
        "headers": {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key": "2850e612f5msh684a9e6eae7368bp18e019jsn7497a0026ebb"
        }
      })
      .then((res) => {
        const data = res.data.response[this.$route.params.id];
        this.statistic = data;
      }) 
    }
  }
}
</script>

<style scoped>
ul li {
    list-style: none;
}
</style>