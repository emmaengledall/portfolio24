<script setup>
// Image import here <33
import imagePathContact from '@/assets/pngFiles/scribble08.png';
</script>

<template>
  <div class="wrapper bg-amber-100 w-screen h-screen font-AndaleMo md:pl-[3%]">
    <div class="contactScribble absolute size-12/12 md:pt-[10%] opacity-60">
      <img :src="imagePathContact" alt="woopss">
    </div>

    <div class="text-left flex contact md:pt-[3%] text-sm z-20 relative">
      <RouterLink to="/" class="home-link"> // HOME</RouterLink> <!-- WORKS AS A ROUTERLINK TO HOMEPAGE-->
    </div>

    <div class="text md:text-3xl md:pt-[15%] z-20 relative ">
      <h1>WELL - SINCE YOU'RE HERE I'M GUESSING YOU WANNA STAY IN TOUCH?</h1>
      <br>
      <p class="text-sm leading-loose z-20 relative"> For business inquiries // <br>
        E-mail: emma.engledall@gmail.com <br> 
      </p>

      <div class="text-sm leading-loose z-20 relative"> SoMe:
        <a href="https://www.linkedin.com/in/emma-chantal-engledall-1a36002a0/" class="inline-block cursor-pointer hover:underline p-1"> LinkedIn - </a> 
        <a href="https://github.com/emmaengledall" class="inline-block cursor-pointer hover:underline p-1"> GitHub - </a> 
        <a href="https://www.instagram.com/emmaengledall/" class="inline-block cursor-pointer hover:underline p-1"> Instagram </a>
      </div>
    </div>

    <div class="texttwo text-sm leading-loose z-20 relative md:pt-[5%]">
      <p>For loveletters // <br> ... i prefer homing pigeons </p>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 640px) {
  /* Use flexbox layout for small screens */
  .wrapper {
    display: flex;
    flex-direction: column; /* Stack all elements vertically */
    justify-content: flex-start; /* Align items to the top */
    font-size: small;
    overflow-y: auto;
    padding-left: 0;
    padding-right: 0;
  }

  /* Ensure the image stays behind the content */
  .contactScribble {
    position: absolute; /* Keeps the image in the background */
    top: 0;
    left: 0;
    z-index: 10; /* Ensure it's behind other content */
    width: 100%;
    height: auto;
  }

  .contact {
    position: relative; /* Make sure the text is positioned above the image */
    z-index: 40; /* Higher z-index to ensure it's above the image */
    padding-top: 1%;
    padding-left: 10px; /* Add some padding to the left for spacing */
    text-align: left; /* Align "HOME" link to the left */
  }

  /* Ensure the "HOME" link stays left aligned */
  .home-link {
    text-align: left;
    display: inline-block; /* Ensure it's a block-level element */
    padding-left: 0; /* Remove any added padding from parent */
    margin-top: 20px;
  }

  /* Ensure all text elements are on top of the image */
  .text, .texttwo {
    position: relative; /* Make sure the text is positioned above the image */
    z-index: 20; /* Higher z-index to ensure it's above the image */
    padding-top: 50%;
  }

  .text {
    font-size: large;
  }

  /* Adjust the "for loveletters" text positioning */
  .texttwo {
    margin-top: -10px;  /* Move it up slightly */
    padding-top: 10%; /* Remove padding */
  }

  /* Make the image responsive */
  .contactScribble img {
    width: 100%;
    height: auto;
  }

  /* Ensure all text elements align nicely */
  .text, .text-sm, .contact {
    text-align: center;
    padding-left: 0;
    padding-right: 0;
  }

  .texttwo {
    text-align: center; /* Center the text */
  }
}
</style>
