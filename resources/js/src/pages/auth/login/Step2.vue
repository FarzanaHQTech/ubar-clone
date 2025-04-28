<template>
  
      <input class="border rounded-md py-2 px-2 w-[100%]" type="text" name="" id="" placeholder="Enter Password"/>
  <!-- <div class="flex flex-column"> -->
    <div class="flex justify-between ">
    <button @click="loginStore.previous" class="mb-2 border border-indigo-700 text-gray-500 py-2 px-2 rounded-md shadow-sm w-[48%]">Previous</button>
   
    <button class="mb-2 bg-indigo-700 py-2 px-2 rounded-md shadow-sm w-[48%] text-white">Sign in </button>
</div>
  </template>
  
  <script lang="ts" setup>
      import { onMounted } from 'vue';
import { useLoginStore } from '../../../../../../storage/login-store';

      const loginStore = useLoginStore()
      onMounted(()=>{
          console.log('render stap 2')
      })
  </script>
  
  <style>
  
  </style>