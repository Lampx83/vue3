import {createRouter,createWebHashHistory} from "vue-router"
import DcHero from './pages/DcHero'
import CalenDar from './pages/CalenDar'
import HomePage from './pages/HomePage'
import MarkDown from './pages/MarkDown'
import SliderCarousel from './pages/SliderCarousel'
import CalculatorApp from './pages/CalculatorApp'
import ReuseableModal from './pages/ReuseableModal'
const routes = [
    {
        path:'/',component:HomePage
    },
    {
        path:'/dc-heros',component:DcHero
    },
    {
        path:'/calendar',component:CalenDar
    },
    {
        path:'/markdown',component:MarkDown
    },
    {
        path:'/slider-carousel',component:SliderCarousel
    },
    {
        path:'/calculator',component:CalculatorApp
    },
    {
        path:'/reuseable-modal',component:ReuseableModal
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes

})

export default router