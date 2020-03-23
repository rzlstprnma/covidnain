<template>
  <div class="container mx-auto px-5 py-5">
    <h1 class="font-bold text-xl">List Of Countries</h1>
     <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" v-for="(statistic, index) in statistics" :key="index">
          <router-link :to="{ name: 'Detail', params: { country: statistic.country, id: index} }">
            <div class="px-4 py-4 shadow-md rounded-md">
                {{ statistic.country }}
            </div>
          </router-link>
     </div>
  </div>
</template>

<script>
import axios from 'axios'
import {v4 as uuidv4} from 'uuid';
export default {
  name: "Home",
  data() {
    return {
      statistics: []
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
     
        this.statistics = res.data.response
      }) 
    }
  }
}
</script>