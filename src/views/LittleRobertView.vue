<template> 
    <div class="LittleRobert grid grid-cols-2 grid-rows-3 bg-amber-100 w-screen h-screen font-AndaleMo text-black text-sm">
        <div class="pt-20 pl-10">   
            <RouterLink to="/Portfolio">// LITTLE ROBERT</RouterLink>
        </div>

        <p class="col-start-1 row-start-2 pl-10 " >Before begining this blender project, we went through five days of introduction to the program. <br>
We went through the basics, like modelling, working with mesh, how to grap, scale and rotate our assets and place them. <br>
We worked with different kinds of small basic projects, to get comfy using blender! 
later on i settled on going for a more spacy vibe. 
My scene enden up, being a vulcano submerged in lava with a space background. My climber turned into a small robot (named robert) <br>
who found himself in a sticky situation, because his spaceship crashed on the island. <br>
The surroundings were as i mentioned spacy, and the lava also have some emission action going on. <br>
This made the surrounding objekts glow and reflect. <br>
Basically the lava is the most outstanding light source, with creates the wanted gloomy vibe. <br>
The background is a HDR picture, with spacy stars and colors. <br>
The vulcano is made, by using a landscape add-on, and afterwards i added texture, and colored it, to get the desired look! <br>
The lava is made with a ocean modifier, to give it a bumpy look and the texture is a lava-like picture i found using blenderKit. 
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
        { src: '/assets/portfolioPic/LR01.png', alt: 'Image 1' },
        { src: '/assets/portfolioPic/LR02.png', alt: 'Image 2' },
        { src: '/assets/portfolioPic/LR03.png', alt: 'Image 2' },
        
        // Add more images as needed
      ]
    };
  }
};
</script>


<style>
</style>









    












