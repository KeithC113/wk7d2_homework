import Vue from 'vue';

document.addEventListener('DOMContentLoaded',()=>{

  new Vue({
    el:"#app",
    data: {
      currencies: [],
      selectedCurrency: null,
      numEurosAmount: 0
    },
    mounted(){
      this.getCurrencies()
    },
    computed:{
      convertedCurrency: function(){
        return this.numEurosAmount * this.currencies.rates;
      }
    },
    methods:{
      getCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(currencies => this.currencies = currencies.rates);
      }
    }
  })
})
