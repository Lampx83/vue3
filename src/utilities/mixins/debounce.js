// import {ref} from "vue"
// export default function useDebounce(){
//     const timeout=ref("");

//     function debounce(func, wait=1000){
//         clearTimeout(timeout.value);
//        timeout.value = setTimeout(func,wait);
//     }
//     return {debounce}
// }

export default {
    data(){
        return {
            timeout:"",
        }
    },
    methods:{
        debounce(func, wait=1000){
            clearTimeout(this.timeout)
            this.timeout = setTimeout(func, wait);
        }
    }
}