 学习笔记
===

>数据仓库 || 状态管理器    <br>
>vuex是一个专门为vue.js设计的集中式状态管理架构。状态？我把它理解为在data中的属性需要共享给其他vue组件使用的部分，就叫做状态。简单的说就是data中需要共用的属性。


第一讲 vuex的demo
---
根据文字讲义按步骤进行，实现按钮加减分数的vuex的demo  <br>
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

（4）新建模板components/count.vue ，首先要在模板中引用store.js，并在模板中利用 **$store.state.count** 输出count的值；  <br>
     注意：**如何调用mutations中的方法**

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

（5）注意： **模板中一定要有包裹的标签div** ，否则会编译错误 <br>
     在router/index.js文件中配置count.vue界面的路由

    import Count from '@/components/count'

    {
      path: '/count',
      name: 'Count',
      component: Count
    }


第二讲 state访问状态对象
---
>SPA共享值 => 状态（封装为对象） => 状态对象   <br>
>改变状态对象的方法，将其称之为mutations

有三种办法可以直接在界面模板中使用状态参数，其中第三种方法为最常用的方法：

        //法一：
        computed:{
          count(){
            return this.$store.state.count;
          }
        }

        //法二：
        import { mapState } from 'vuex';
        computed: mapState({
          count: state => state.count
        })

        //法三：也是最常用的方法
        import { mapState } from 'vuex';
        computed: mapState(['count']),


第三讲 Mutations修改状态
---
（1）实现参数的传递，注意：**$store.commit(funcName, (val0：默认为state),val1)**

        //改变state的数值的方法，必须写在mutations里
        const mutations = {
          add(state, n){
            state.count += n;
          },
          reduce(state){
            state.count--;
          }
        }

        <div>
            <button @click="$store.commit('add', 6)">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </div>

（2）简化调用方法，引用mapMutations

        <template>
            <div>
                <h2>{{msg}}</h2>
                <br>
                <h3>{{$store.state.count}}-{{count}}</h3>
                <div>
                    <!--
                      <button @click="$store.commit('add', 6)">+</button>
                      <button @click="$store.commit('reduce')">-</button>
                    -->
                    <button @click="add(6)">+</button>
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
                computed: mapState(['count']),
                methods: mapMutations(['add', 'reduce']),
                store
            }
        </script>


第四讲 getters计算过滤操作
---
####学习小结
在我们学习完状态管理器（state）、数据修改（mutations）后，接下来学习的是vuex数据的过滤加工（getters）。  <br>
（1）个人理解：其实我们可以将vuex中的这几部分类比为vue对象中的data、methods、computed，分别用于数据变量声明与存储、数据修改、过滤加工。 <br>
（2）需要注意的是，vuex的状态管理器（state）和过滤加工（getters）都在 vue作用域中computed属性值里引用，数据修改（mutations）在methods中引用。

####练习步骤
（1）在vuex/store.js中声明getters并对数据进行过滤加工，然后将getters暴露出来。

        //数据过滤
        const getters = {
            count: function (state) {
                return state.count += 100;
            }
        }

        export default  new Vuex.Store({
          state,
          mutations,
          getters
        });

（2）在模板界面中引用 mapGetters ，利用ES6的拓展语法，重新设置computed属性值。
    Q：如果在这里利用es6的拓展语法，那么还需要引用store.js吗？
    A：需要！数据及其方法仍在store.js中定义，引用vuex和es6的语法，只是为了简写代码使更优美。

        <script>
            import store from '@/vuex/store.js';
            import { mapState, mapMutations, mapGetters } from 'vuex';

            export default {
                name: "count",
                data(){
                  return {
                    msg: "Hello Vuex",
                  }
                },
                //法三：也是最常用的方法
                /* computed: mapState(['count']), */
                computed: {
                  ...mapState(['count']),
                  ...mapGetters(['count'])      /*  count() { return this.$store.getters.count; }  */
                },
                methods: mapMutations(['add', 'reduce']),
                store
            }
        </script>
























