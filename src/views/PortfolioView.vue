

<script setup>
 import imagePathPortfolio2 from '@/assets/pngFiles/scribble09.png';
</script>

<template>
  <div class="bg-red-800 w-screen h-screen font-AndaleMo text-amber-100 pl-10 pb-20 grid grid-cols-2  ">
    
    <div class="absolute size-12/12 pt-40 opacity-40">
      <img :src="imagePathPortfolio2" alt="woopss">
    </div>

    <div class="Portfolio col-span-1 text-sm z-10 pt-20">
      <RouterLink to="/">// PORTFOLIO</RouterLink> <!--THE ROUTERLINK TO GO HOOOOME :))-->
      <br> <br><br><br><br><br><br><br><br><br><br>

      <div>
        <h1 class="text-sm z-10 pt-20">RECENT WORK</h1>
        <br>                      <!--THE <h1> AND <p> IS WRAPPED IN THE h1-div -->
          <p class="leading-loose text-sm z-10">Here's a showcase of my recent work. You'll find anything from <br>
            3D-modelling to coded designs, made in both processing, HTML, CSS, <br>
            Javascript. Go get lost, in my recent creative wonders. <br>
            - pssssst... this website is my first time working with framework!</p>
          </div>
          
        </div>
        
        
        
        
                           <!-- HERE WE GOT THE PORTFOLIO PROJECTS, THEY ARE WRAPPED IN THEIR OWN DIV-->
        <div class="flex flex-col justify-center text-center justify-around z-10 pt-20"> 
          
        
          
        <div>
          <RouterLink to="/PiDay" class="inline-block cursor-pointer hover:line-through text-3xl">PI-DAY POSTER</RouterLink>
          <div class="absolute inset-x-0 bottom-0 h-0.5 origin-x-center opacity-0 transition-opacity"></div>
         <p class="text-sm">- processing, Dec. 23</p>
       </div> 


        <div>
          <div class="absolute inset-x-0 bottom-0 h-0.5 origin-bottom transform scale-x-0 transition-transform duration-300"></div>
          <RouterLink to="/NativeAmericans" class="inline-block cursor-pointer hover:line-through text-3xl">NATIVE AMERICANS</RouterLink>
          <p class="text-sm">- processing, Dec. 23</p>
       </div> 


       <div>
        <div class="absolute inset-x-0 bottom-0 h-0.5 origin-bottom transform scale-x-0 transition-transform duration-300"></div>
        <RouterLink to="/ExamProject01" class="inline-block cursor-pointer hover:line-through text-3xl">EXAM PROJECT 01</RouterLink>
         <p class="text-sm">- product design, Jan. 24</p>
       </div> 
      

       <div>
        <div class="absolute inset-x-0 bottom-0 h-0.5 bg-black origin-bottom transform scale-x-0 transition-transform duration-300"></div>
        <RouterLink to="/LittleRobert" class="inline-block cursor-pointer hover:line-through text-3xl">LITTLE ROBERT</RouterLink>
         <p class="text-sm">- 3D-modelling, Nov. 23</p>
        </div> 


       <div>
        <div class="absolute inset-x-0 bottom-0 h-0.5 bg-black origin-bottom transform scale-x-0 transition-transform duration-300"></div>
        <RouterLink to="/CodedPostcard" class="inline-block cursor-pointer hover:line-through text-3xl">CODED POSTCARD</RouterLink>
          <p class="text-sm">- processing X axidraw, Dec. 23</p>
       </div> 
      
      
     </div> 
      
      

</div>
  </template>

  
  <style>
  </style>
  