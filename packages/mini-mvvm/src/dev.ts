/*eslint-disable*/
import './dev.scss';
import MVVM from './core/MVVM';
import { render } from "./demo/htmlAst";
// import { h } from 'mini-vdom';

render("#app");
const CACHE_KEY = '__mini-mvvm_cache_key__';

// const vm = new MVVM({
//     el: '#app',
//     data() {
//         return {
//             activeIndex: 0,
//             tabList: [
//                 '双向绑定',
//                 '计算属性',
//                 '条件渲染',
//                 '循环/事件',
//                 'Todo List'
//             ],
//             // 双绑
//             person: {
//                 name: '花泽香菜',
//                 age: 12,
//                 sex: '女'
//             },

//             // m-if
//             showText: false,

//             // m-for
//             forTable: [],

//             // todoList
//             content: '',
//             infos: [
//                 {
//                     content: '中一次双色球，十注的 >_<#@!',
//                     done: false
//                 },
//                 {
//                     content: '然后再中一次体彩，还是十注的 0_o',
//                     done: false
//                 },
//                 {
//                     content: '我全都要 😂 🌚 🤣 💅 👅 🤠 ',
//                     done: false
//                 }
//             ],
//             filters: ['All', 'Todos', 'Dones'],
//             filterIndex: 0
//         };
//     },
//     computed: {
//         computedDescription() {
//             return `${this.person.name}的年龄是${this.person.age}，然后是个${this.person.sex}的`;
//         },

//         // 当前tab对应的数据
//         list() {
//             switch (this.filterIndex) {
//                 case 0:
//                     return this.infos;
//                 case 1:
//                     return this.infos.filter(n => !n.done);
//                 default:
//                     return this.infos.filter(n => n.done);
//             }
//         }
//     },
//     created() {
//         this.init99();

//         // todolist
//         this.restore();
//     },

//     methods: {
//         // 99 乘法表初始化
//         init99() {
//             // 构建99乘法表
//             const result = [];
//             for (let y = 1; y <= 9; y++) {
//                 const list = [];
//                 for (let x = 1; x <= 9; x++) {
//                     if (x > y) list.push('');
//                     else list.push(x + ' * ' + y + ' = ' + x * y);
//                 }
//                 result.push(list);
//             }
//             this.forTable = result;
//         },

//         //todolist 相关

//         // 新增一项
//         addItem() {
//             const content = this.content.trim();
//             if (!content.length) {
//                 return;
//             }
//             this.infos.push({
//                 content: content,
//                 done: false
//             });
//             this.content = '';
//         },

//         // 切换完成状态
//         toggleDone(item) {
//             item.done = !item.done;
//             this.infos = this.infos.slice();
//         },

//         // 删除一项
//         deleteItem(item) {
//             const index = this.infos.indexOf(item);
//             this.infos.splice(index, 1);
//         },

//         // 重置数据
//         reset() {
//             Object.assign(this.$data, this.$options.data());
//             this.init99();
//         },

//         // 从localstorage更新数据
//         restore() {
//             try {
//                 const content = localStorage[CACHE_KEY];
//                 if (!content.length) {
//                     return;
//                 }
//                 const infos = JSON.parse(content);
//                 this.infos = infos;
//             } catch (ex) {
//                 this.reset();
//             }
//         }
//     },
//     watch: {
//         // 监听infos改变，存入localstorage
//         infos() {
//             const content = JSON.stringify(this.infos);
//             localStorage[CACHE_KEY] = content;
//         }
//     }
// });


// window['vm'] = vm;

// window['mm'] = new MVVM();
