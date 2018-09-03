<template>
    <div>
        <h2>{{msg}}</h2>
        <br>

        <h3>{{$store.state.count}}</h3>
        <div>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </div>
    </div>
</template>

<script>
    import store from '@/vuex/store.js';

    export default {
        name: "count",
        data(){
          return {
            msg: "Hello Vuex",
          }
        },
        store
    }
</script>

<style scoped>

</style>
