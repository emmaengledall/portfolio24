<script setup> // Image import here <33
import imagePathAbout from '@/assets/pngFiles/scribble06.png';
import imagePortrait from '@/assets/pngFiles/portrait01.png';
import imageAsset from '@/assets/pngFiles/Asset01.png';

</script>


<template>
  <div class="wrapper relative bg-amber-100 w-screen h-screen grid grid-rows-3 grid-cols-2">
    <div class="absolute size-12/12 sm:pt-[2%] md:pt-[7%] opacity-60">
      <img :src="imagePathAbout" alt="woopss">
    </div>

    <div class="about absolute font-AndaleMo text-sm z-20 md:pl-[3%] md:pt-[5%]">
      <RouterLink to="/">// HOME</RouterLink>
    </div>

    <div class="font-AndaleMo pl-10 pt-[26%] justify-center z-10 row-start-1 col-start-1">
      <h1 class="text-3xl">HI THERE, I'M EMMA-CHANTAL.</h1>
      <br>
      <p class="mainText relative text-sm leading-loose">
        A versatile Frontend Developer, Website Designer, and Coded Designer, driven by a lifelong passion 
        for art and creativity. <br> <br>
        Drawing, painting, building, and storytelling are not just hobbies but natural expressions of my creative spirit. <br>
  
        In a rapidly evolving technical landscape, being a creative individual opens up boundless opportunities. 
        From 3D-modeling to coding and designing, I thrive on turning ideas into reality.
        My top priority is crafting unique, functional websites and coded solutions tailored 
        to my clients' needs and brand identity. <br> <br>
        I firmly believe that user experience is paramount, and I'm committed to delivering solutions that are both visually
        stunning and intuitively functional. <br>
        Currently, I am pursuing a degree in visual communication at the Danish School of Media and Journalism, specializing in coding. <br>
        Expected to graduate in June 2026, I am eager to continue pushing the boundaries of creativity and technology.
      </p>
    </div>

    <!-- Billedet -->
    <img :src="imagePortrait" alt="ejjj" class="miPhoto relative w-[30vw] opacity-100 md:col-start-2 row-start-1 justify-self-center z-20 pt-48">
  </div>
</template>

<style>
@media (max-width: 640px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr; /* En kolonne layout */
    gap: 1rem;
    font-size: small;
    overflow-y: auto;
  }

  /* Justér margin/padding for tekst for at få det til at se bedre ud */
  .mainText {
    padding-top: 50%;
  }
  
  /* Fjerner kolonneopsætning for billeder og tekst */
  .miPhoto {
    grid-column-start: 1; /* Sikrer, at billedet ikke bruger en anden kolonne */
  }
}
</style>

