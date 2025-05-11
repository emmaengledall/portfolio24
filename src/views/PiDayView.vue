<script>

export default {
  data() {
    return {
      images: [
        { src: '/assets/portfolioPic/pPlakat1.png', alt: 'Image 1' },
        { src: '/assets/portfolioPic/pPlakat2.png', alt: 'Image 2' },
        { src: '/assets/portfolioPic/pPlakat3.png', alt: 'Image 3' },
        { src: '/assets/portfolioPic/pPlakat4.png', alt: 'Image 4' },
        // Add more images as needed <33
      ]
    };
  }
};


</script>


<template>
  <div class="PiDay grid grid-cols-2 grid-rows-3 bg-amber-100 w-screen h-screen font-AndaleMo text-black text-sm">
    <div class="pt-[10%] pl-10">   
      <RouterLink to="/Portfolio">// BACK TO PORTFOLIO</RouterLink>
    </div>

    <p class="col-start-1 row-start-2 pl-10 pt-[10%]">PI-DAY POSTER</p>
    <p class="col-start-1 row-start-2 pl-10 pt-[15%] z-20"> 
      Poster for PI-day, made with processing. <br>
      The composition and size of the sphere depends on the input from the microphone. <br>
      This was the first time experimenting with processing, and I'm pretty happy with the results!<br>
      I was going for a 90's techno vibe, which I feel like did come through.
    </p> 

    <div class="h-screen/2 bg-gray-100 flex justify-center items-center row-span-full">
      <div class="overflow-auto max-w-screen-lg w-full h-full p-8 bg-amber-100 rounded-lg">
        <div class="grid gap-10">
          <!-- Loop through your images here -->
          <div v-for="(image, index) in images" :key="index" class="relative flex justify-center items-center">
            <img :src="image.src" :alt="image.alt" class="image w-[70%] h-[auto]">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style>
.image {
  transition: transform 0.3s ease-in-out;
}

.image:nth-child(odd) {
  transform: translateY(0px); /* Moves odd images slightly up */
}

.image:nth-child(even) {
  transform: translateY(20px); /* Moves even images slightly down */
}

/* Optional: Add hover effect to enhance the staggered effect */
.image:hover {
  transform: scale(1.05) translateY(-10px); /* Slight zoom on hover */
}

</style>