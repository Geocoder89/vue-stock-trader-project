<template>
  <div class="col-6 offset-3 mt-2">
    <div class="card ">
      <div class="card-header bg-success">
        <h4 class="card-title text-white">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h4>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input
            class="form-control"
            type="number"
            name="stockQuantity"
            id="stockQuantity"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientFunds}"
          />
        </div>
        <div class="float-right mt-1">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled=" insufficientFunds ||quantity <= 0 || !Number.isInteger (+quantity)"
          >
            {{insufficientFunds ? 'Insufficient Funds' :'Buy'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0,
    };
  },

  computed: {
    funds() {
     return  this.$store.getters.funds
    },
      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds
      }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch('buyStock',order)
      this.quantity = 0;
    },
  },
};
</script>

<style lang="css" scoped>
.danger {
  border: 1px solid red;
}
</style>
