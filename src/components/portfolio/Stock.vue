<template>
  <div class="col-6 offset-3 mt-2">
    <div class="card ">
      <div class="card-header bg-info">
        <h4 class="card-title text-white">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{stock.quantity}})</small>
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
            :class="{danger: insufficientQuantity}"
          />
        </div>
        <div class="float-right mt-1">
          <button
            class="btn btn-info"
            @click="sellStock"
            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(+quantity)"
          >
           {{insufficientQuantity ? 'Low stocks': 'Sell'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
   export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
          insufficientQuantity() {
              return this.quantity > this.stock.quantity;
          }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>

<style lang="css" scoped>
    .danger {
        border: 1px solid red;
    }
</style>




