<script setup> // Image import here <33
import imagePathAbout from '@/assets/pngFiles/scribble06.png';
import imagePortrait from '@/assets/pngFiles/portrait01.png';
import imageAsset from '@/assets/pngFiles/Asset01.png';

</script>


<template>
<div class="bg-amber-100 w-screen h-screen grid grid-rows-3 grid-cols-2">

  

  <div class="absolute size-12/12 pt-40 opacity-60 pl-10 ">
    <img :src="imagePathAbout" alt="woopss">
  </div>



  <div class="about absolute font-AndaleMo pl-10 pt-20 text-sm z-20 ">
    <RouterLink to="/">// ABOUT</RouterLink> <!-- WORKS AS A ROUTERLINK TO HOMEPAGE-->
  </div>
   



<div class="font-AndaleMo pl-10 pt-44 justify-center z-10 row-start-1 col-start-1 "> <!--MAIN TEXT ON THE ABOUT PAGE-->
  <h1 class="text-3xl">HI THERE, I'M EMMA-CHANTAL. </h1> 
  <br>
  <p class="relative text-sm leading-loose">
  A versatile Frontend Developer, Website Designer, and Coded Designer, driven by a lifelong passion 
  for art and creativity.  <br> <br>
  Drawing, painting, building, and storytelling are not just hobbies but natural expressions of my creative spirit. <br>
  
  In a rapidly evolving technical landscape, being a creative individual opens up boundless opportunities. 
  From 3D-modeling to coding and designing, I thrive on turning ideas into reality.
  My top priority is crafting unique, functional websites and coded solutions tailored 
  to my clients' needs and brand identity. <br> <br>
  I firmly believe that user experience is paramount, and I'm committed to delivering solutions that are both visually
  stunning and intuitively functional. <br>
  Currently, I am pursuing a degree in visual communication at the Danish School of Media and Journalism, specializing in coding. <br>
  Expected to graduate in June 2026, I am eager to continue pushing the boundaries of creativity and technology.</p>

  
</div>  




<img :src="imagePortrait" alt="ejjj" class="relative w-[30vw] opacity-100 col-start-2 row-start-1 justify-self-center z-20 pt-48 ">


</div>
</template>






<style>

</style>
