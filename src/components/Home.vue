<template>
    <div>
        <h1>Trade or view your Portfolio</h1>
        <h6>You may save or load your Data</h6>
        <h6>Click on 'End Day' to begin a New day</h6>
        <p>Your Funds: {{ funds | currency}}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
           return this.$store.getters.funds 
        }
    }
}
</script>