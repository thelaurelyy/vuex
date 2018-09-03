<template>
    <div>
        <h2>{{msg}}</h2>
        <br>

        <h3>{{$store.state.count}}-{{count}}</h3>
        <div>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </div>
    </div>
</template>

<script>
    import store from '@/vuex/store.js';
    import { mapState } from 'vuex';

    export default {
        name: "count",
        data(){
          return {
            msg: "Hello Vuex",
          }
        },
        /*
        //法一：
        computed:{
          count(){
            return this.$store.state.count;
          }
        },*/
        /*
        //法二：
        computed: mapState({
          count: state => state.count
        }),*/
        //法三：也是最常用的方法
        computed: mapState(['count']),
        store
    }
</script>

<style scoped>

</style>
