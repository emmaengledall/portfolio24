
<template> 
    <div class="PiDay grid grid-cols-2 grid-rows-3 bg-red-800 w-screen h-screen font-AndaleMo text-amber-100 text-sm">
        <div class="pt-20 pl-10">   
            <RouterLink to="/Portfolio">// PI-DAY POSTER</RouterLink>
        </div>

            <p class="col-start-1 row-start-2 pl-10 pt-20" >Poster for PI-day, made with processing. <br>
            The composition and size of the sphere, depends on the input from the microphone. <br>
            This was the first time experimenting with processing, and I'm pretty happy with the results!<br>
            I was going for a 90' techno kinda vibe, which I feel like did come through.</p> 


            <div class="h-screen/2 bg-gray-100 flex justify-center items-center row-span-full">
               <div class="overflow-auto max-w-screen-lg w-full h-full p-8 bg-amber-100 rounded-lg ">
                  <div class="grid gap-5 ">
        
        <!-- Loop through your pictures here -->
                  <div v-for="(image, index) in images" :key="index" class="relative flex justify-center items-center">
                      <img :src="image.src" :alt="image.alt" class="w-[80%] h-[auto] ">
                  </div>
                 </div>
              </div>
          </div>
        

 </div>
</template>



<script>
export default {
  data() {
    return {
      images: [
        { src: 'src/assets/portfolioPic/pPlakat1.png', alt: 'Image 1' },
        { src: 'src/assets/portfolioPic/pPlakat2.png', alt: 'Image 2' },
        { src: 'src/assets/portfolioPic/pPlakat3.png', alt: 'Image 3' },
        { src: 'src/assets/portfolioPic/pPlakat4.png', alt: 'Image 4' },
        // Add more images as needed
      ]
    };
  }
};
</script>


<style>
</style>