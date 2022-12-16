import VueRouter from 'vue-router';
import loginLand from '../components/login.vue'
import IndexBU from '../components/index.vue'
import HomeLand from '../components/Home.vue'
import OneLand from '../components/biaodan/One.vue'
import TwoLand from '../components/biaodan/Two.vue'
import ThreeLand from '../components/biaodan/Three.vue'
import FourLand from '../components/biaodan/Four.vue'
import FiveLand from '../components/biaodan/Five.vue'
const routes =[
    {
        path:'/',
        name:'loginLand',
        component:loginLand,

    },


    {
        path:'/indexwel',
        name:'IndexBU',
        component:IndexBU,
        children:[

           {
            path:'/HomeLand',
            name:'HomeLand',
            mata:{
                   title:'首页'
            },
            component:HomeLand,
           } ,
           {
            path:'/One',
            name:'OneLand',
            component:OneLand,
           },
           {
            path:'/Two',
            name:'TwoLand',
            component:TwoLand,
           },
           {
            path:'/Three',
            name:'ThreeLand',
            component:ThreeLand,
           },
           {
            path:'/Four',
            name:'FourLand',
            component:FourLand,
           },
           {
            path:'/Five',
            name:'FiveLand',
            component:FiveLand,
           },
        ]

    }
]

const router = new VueRouter({
   
    routes
})
 
export default router;