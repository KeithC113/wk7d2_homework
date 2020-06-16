import Vue from 'vue';

document.addEventListener('DOMContentLoaded',()=>{

  new Vue({
    el:"#app",
    data: {
      currencies: [],
      selectedCurrency: null,
      numEurosAmount: null
    },
    mounted(){
      this.getCurrencies()
    },
    computed:{
      convertedCurrency: function(){
        const result = this.numEurosAmount * this.selectedCurrency;
        return result.toFixed(2)
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
