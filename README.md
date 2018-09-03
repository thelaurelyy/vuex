 学习笔记
===

>数据仓库 || 状态管理器    <br>
>vuex是一个专门为vue.js设计的集中式状态管理架构。状态？我把它理解为在data中的属性需要共享给其他vue组件使用的部分，就叫做状态。简单的说就是data中需要共用的属性。


第一讲 vuex的demo
---
根据文字讲义按步骤进行，实现按钮加减分数的vuexdemo  <br>
（1）利用webpack模板初始化项目，并安装vuex

        vue init webpack vuexLearning
        npm install vuex --save

（2）新建vuex/store.js

        import Vue from 'vue';
        import Vuex from 'vuex';
        Vue.use(Vuex);     //引用Vuex

（3）在vuex/store.js 中新建常量、方法并抛出

        const state = {
          count: 1
        }

        //改变state的数值的方法，必须写在mutations里
        const mutations = {
          add(state){
            state.count++;
          },
          reduce(state){
            state.count--;
          }
        }

        export default  new Vuex.Store({
          state,
          mutations
        });

（4）新建模板components/count.vue ，首先要在模板中引用store.js，并在模板中利用 ** $store.state.count ** 输出count的值；  <br>
注意：** 如何调用mutations中的方法 **

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

