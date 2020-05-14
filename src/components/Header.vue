<template>
  <nav class="navbar navbar-expand-sm bg-light navbar-light">
    <router-link to="/" class="navbar-brand">
      <i class="fas fa-chart-line"></i> Vue Stock Trader</router-link
    >
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
       <strong class="navbar-textt navbar-right">Funds: {{funds | currency}}</strong>
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <router-link to="/portfolio" activeClass="nav-item active" tag="li">
          <a class="nav-link"
            >Portfolio <span class="sr-only">(current)</span></a
          ></router-link
        >

        <router-link to="/stocks" activeClass=" nav-item active" tag="li">
          <a class="nav-link">Stocks <span class="sr-only">(current)</span></a></router-link
        >
        
        <li class="nav-item">
          <a class="nav-link" @click="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown open">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" @click="saveData">Save Data</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" @click="loadData">Load Data</a>
          </div>
        </li>

      </ul>
     
    </div>
  </nav>
</template>


<script>
import {mapActions} from 'vuex'
export default {
  computed: {
    funds(){
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions({
     randomizeStocks :'randomizeStocks',
     fetchData: 'loadData'

    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }

      this.$http.put('data.json',data)
    },
    loadData() {
      this.fetchData
    }
  },
}
</script>