<template> 
    <div class="NativeAmericans grid grid-cols-2 grid-rows-3 bg-red-800 w-screen h-screen font-AndaleMo text-amber-100 text-sm">
        <div class="pt-20 pl-10">   
            <RouterLink to="/Portfolio">// NATIVE AMERICANS</RouterLink>
        </div>
        <p class="col-start-1 row-start-2 pl-10 pt-20" >First time using Processing! In this project, I wanted to go for a good <br> old 90’ style, coded aesthetic. <br>
At the same time, I wanted to make a contrast, by using an old image of <br> a Native American woman. The picture it self isn’t shown, on the sketch. <br>
I’ve extracted the brightness value, using brightness function, and afterwards these values determines the width and scale of the different ellipses.</p> 


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
        { src: 'src/assets/portfolioPic/NA01.png', alt: 'Image 1' },
        { src: 'src/assets/portfolioPic/NA02.png', alt: 'Image 2' },
        
        // Add more images as needed
      ]
    };
  }
};
</script>


<style>
</style>









    


