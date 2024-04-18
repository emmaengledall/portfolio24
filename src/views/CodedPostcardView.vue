<template> 
    <div class="CodedPostcard grid grid-cols-2 grid-rows-3 bg-red-800 w-screen h-screen font-AndaleMo text-amber-100 text-sm ">
        <div class="pt-20 pl-10">   
            <RouterLink to="/Portfolio">// CODED POSTCARD</RouterLink>
        </div>

        <p class="col-start-1 row-start-2 pl-10 pt-10" > Second time, using processing in a project. <br>
            This time around, coding was used to make postcard designs! <br>
            We had an awesome first try, plotting the postcards using an AxiDraw. <br>
            I quickly decided on the same design as for my last processing expiriment. Beside choosing our own designs, <br>
            the AxiDraw allowed us, to rethink the material we could plot on <br> - which i took advantage of. <br>
            I ended up plotting on both hard paper and glass. Which was amazing! <br>
            The design was made by using brightness() which determined <br>
            the spread and width of the ellipse(). 


        </p> 


            <div class="h-screen/2 bg-gray-100 flex justify-center items-center row-span-full ">
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
        { src: '/assets/portfolioPic/CP01.png', alt: 'Image 1' },
        { src: '/assets/portfolioPic/CP02.png', alt: 'Image 2' },
        
        // Add more images as needed
      ]
    };
  }
};
</script>










