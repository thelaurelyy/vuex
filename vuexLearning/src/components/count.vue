<template>
    <div>
        <h2>{{msg}}</h2>
        <br>

        <h3>{{$store.state.count}}-{{count}}</h3>
        <div>

            <button @click="add(10)">+</button>
            <button @click="reduce">-</button>
        </div>
    </div>
</template>

<script>
    import store from '@/vuex/store.js';
    import { mapState, mapMutations } from 'vuex';

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
        methods: mapMutations(['add', 'reduce']),
        store
    }
</script>

<style scoped>

</style>
