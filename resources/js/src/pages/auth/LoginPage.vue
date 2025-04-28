<script lang="ts" setup>
  import { onMounted } from 'vue';
import { App } from '../../api/api';
  import Step1 from './login/Step1.vue';
  import Step2 from './login/Step2.vue';
import { useLoginStore } from '../../../../../storage/login-store';

  const loginStore = useLoginStore()
  onMounted(()=>{
    loginStore.currentStap=Step1;
    loginStore.stap1 = Step1
    loginStore.stap2 = Step2
  })
</script>
<template>
  <div class="flex flex-row justify-between mt-40">
   <div></div>
   <div class="w-[300px]">
    <h1 class="mb-3 text-3xl font-semibold">Sign In</h1>
    <component :is="loginStore.currentStap"/>
    <!-- <Step1/> -->
    <!-- <Step2/> -->
      <div class="flex mb-2 mt-2">
        <hr class="h-[1px] bg-black w-[48%] mt-3 ">
        <div>or</div>
        <hr class="h-[1px] bg-black w-[48%] mt-3 ">
      </div>

    <button class="bg-gray-300 flex justify-center rounded-md py-2 px-2  gap-2 w-[100%]">
    
      <img :src="App.baseUrl+'/img/google.svg'" alt="logo">
      <span class="">Continue with Google</span></button>
    <!-- </div> -->
   </div>
   <div></div>
  </div>
</template>



<style>

</style>