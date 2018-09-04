<template>
    <div>
        <h2>{{msg}}</h2>
        <br>

        <h3>{{$store.state.count}}-{{count}}</h3>

        <div>
            同步修改数据状态：
            <button @click="add(10)">+</button>
            <button @click="reduce">-</button>
        </div>
        <div>
          异步修改数据状态：
          <button @click="addActions(10)">+</button>
          <button @click="reduceActions">-</button>
        </div>
    </div>
</template>

<script>
    import store from '@/vuex/store.js';
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

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
        },
        */
        /*
        //法二：
        computed: mapState({
          count: state => state.count
        }),
        */
        //法三：也是最常用的方法
        // computed: mapState(['count']),     可将其简写为如下所示：利用ES6拓展语法  （合并对象？）  */
        computed: {
          ...mapState(['count']),
          /*count() {
            return this.$store.getters.count;
          }*/
          ...mapGetters(['count'])
        },
        // methods: mapMutations(['add', 'reduce']),
        methods: {
          ...mapMutations(['add', 'reduce']),
          ...mapActions(['addActions', 'reduceActions'])
        },
        store
    }
</script>

<style scoped>

</style>
