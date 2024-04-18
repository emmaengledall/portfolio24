<template> 
    <div class="ExamProject01 grid grid-cols-2 grid-rows-3 bg-red-800 w-screen h-screen font-AndaleMo text-amber-100 text-sm">
        <div class="pt-20 pl-10">   
            <RouterLink to="/Portfolio">// EXAM PROJECT 01</RouterLink>
        </div>
        <p class="relative col-start-1 row-start-2 pl-10" >Before we finished 1. semester, we of course had a small exam project to complete. <br>
        Each student was assigned some kind of business, and had to come up with a fictional firm, a visual identity, <br>
        animated video and last but not least, a coded asset-generator, that our business could benefit from. <br>
        The business i landed on, was a medical company. <br> 
        I immediately knew, a wanted to go for <br>
        something controversial and/or wanted to destigmatize an everyday problem. <br>
        I went with a fictional company, i choose to call "AETERITAS" <br>
        (eternity in latin). 
        This companys trademark case, was personalised medication and more specifically  Hormone replacement therapy (HRT). <br>
        <br>
        In this case, the coded asset-generator provides different designs <br>
        depending on the patiens social security number. 
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
        { src: 'src/assets/portfolioPic/EP02.png', alt: 'Image 2' },
        { src: 'src/assets/portfolioPic/EP01.png', alt: 'Image 1' },
        { src: 'src/assets/portfolioPic/EP03.png', alt: 'Image 2' },
        { src: 'src/assets/portfolioPic/EP04.png', alt: 'Image 2' },
        { src: 'src/assets/portfolioPic/EP05.png', alt: 'Image 2' },
        { src: 'src/assets/portfolioPic/EP06.png', alt: 'Image 2' },
        { src: 'src/assets/portfolioPic/EP07.png', alt: 'Image 2' },
        
        // Add more images as needed
      ]
    };
  }
};
</script>












    














