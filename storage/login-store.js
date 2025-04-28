import { defineStore } from "pinia";
import {ref} from 'vue'
export const useLoginStore = defineStore('login',()=>{
    const currentStap = ref("currentStep")

    const step1 = ref('step1')
    const step2 = ref('step2')

    function next(){
        currentStap.value=step1.value
    }
    function previous(){
        currentStap.value=step1.value
    }
    return {
        step1,
        step2,
        next,
        previous,
        currentStap,
    }
}) 

