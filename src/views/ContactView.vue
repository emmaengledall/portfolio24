<script setup> // Image import here <33
import imagePathContact from '@/assets/pngFiles/scribble08.png';

</script>


<template>
<div class="bg-amber-100 w-screen h-screen grid grid-rows-3 font-AndaleMo pl-10">
  
    
    <div class="absolute size-12/12 pt-40 opacity-60">
    <img :src="imagePathContact" alt="woopss">
    </div>


    <div class="contact pt-20 flex flex-col text-sm z-10">
        <RouterLink to="/">// HOME</RouterLink> <!-- WORKS AS A ROUTERLINK TO HOMEPAGE-->
    </div> 

    <div class="text-3xl pt-5 z-10">
        <h1>WELL - SINCE YOU'RE HERE I'M GUESSING YOU WANNA STAY IN TOUCH?</h1>
        <br>
        <p class="text-sm leading-loose z-10 "> For business inquiries // <br>
            E-mail: emma.engledall@gmail.com <br> 
        </p>

         <div class="text-sm leading-loose z-10 "> SoMe:
            
            <a href="https://www.linkedin.com/in/emma-chantal-engledall-1a36002a0/ " class="inline-block cursor-pointer hover:underline p-1"> LinkedIn </a> 
            <a href="https://github.com/emmaengledall" class="inline-block cursor-pointer hover:underline p-1"> GitHub  </a> 
            <a href="https://www.instagram.com/emmaengledall/" class="inline-block cursor-pointer hover:underline p-1"> Instagram </a>
         </div>
    </div>

    <div class="text-sm leading-loose z-10">
        <p>For loveletters // <br>
            ... i prefer homing pigeons </p>
    </div>









</div>
  </template>







  
  <style>
  
  </style>