<template>
  <div>
    <input class="border rounded-md py-2 px-2 w-[100%]" type="text" name="" id="" placeholder="Enter E-mail"/>
<!-- <div class="flex flex-column"> -->
  <button  @click="loginStore.next" class="bg-indigo-700 py-2 px-2 rounded-md shadow-sm w-[100%] text-white">Next </button>
  </div>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
import { useLoginStore } from '../../../../../../storage/login-store';

    const loginStore = useLoginStore()
    onMounted(()=>{
        console.log('render stap 1')
    })
</script>

<style>

</style>