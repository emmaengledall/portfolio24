

<script setup>
 import imagePathPortfolio2 from '@/assets/pngFiles/scribble09.png';
</script>

<template>
  <div class="Wrapper bg-red-800 max-w-screen min-h-screen overflow-hidden font-AndaleMo text-amber-100 pl-[7%] pr-[7%] pb-20 grid grid-cols-1 
  md:grid-cols-2 grid-rows-1 gap-1 ">

    <div class="bgPic absolute pt-[10%] opacity-40  sm:pt-[10%] md:pt-[9%] pr-[3%]">
      <img :src="imagePathPortfolio2" alt="woopss">
    </div>

    <div class="Portfolio col-span-1 text-sm z-10 pt-[3%] md:pt-[10%] ">
      <RouterLink to="/">// HOME</RouterLink>
      <br><br><br><br><br>

      <div class="md:pt-[25%] sm:pt-[0%]">
        <h1 class="text-sm z-10">RECENT WORK</h1>
        <br>
        <p class="leading-loose text-sm z-10">
          Here's a showcase of my recent work. You'll find anything from <br>
          3D-modelling to coded designs, made in both processing, HTML, CSS, <br>
          Javascript. Go get lost, in my recent creative wonders. <br>
          - pssssst... this website is my first time working with framework!
        </p>
      </div>
    </div>

    <div class="flex flex-col justify-center text-center justify-around z-10 md:pt-[40%] md:pl-[30%]"> 
      <div class="scroll-snap-card">

        <!-- Slide Group 1 -->
        <div class="slide-group">
          <div class="project text-center sm:text-left w-full">
            <RouterLink to="/PiDay" class="inline-block cursor-pointer hover:line-through text-xl sm:text-3xl text-white">PI-DAY POSTER</RouterLink>
            <p class="text-sm">- processing, Dec. 23</p>
          </div>
          <div class="project text-center sm:text-left w-full">
            <RouterLink to="/NativeAmericans" class="inline-block cursor-pointer hover:line-through text-xl sm:text-3xl text-white">NATIVE AMERICANS</RouterLink>
            <p class="text-sm">- processing, Dec. 23</p>
          </div>
          <div class="project text-center sm:text-left w-full">
            <RouterLink to="/ExamProject01" class="inline-block cursor-pointer hover:line-through text-xl sm:text-3xl text-white">EXAM PROJECT 01</RouterLink>
            <p class="text-sm">- product design, Jan. 24</p>
          </div>
        </div>

        <!-- Slide Group 2 -->
        <div class="slide-group">
          <div class="project text-center sm:text-left w-full">
            <RouterLink to="/LittleRobert" class="inline-block cursor-pointer hover:line-through text-xl sm:text-3xl text-white">LITTLE ROBERT</RouterLink>
            <p class="text-sm">- 3D-modelling, Nov. 23</p>
          </div>
          <div class="project text-center sm:text-left w-full">
            <RouterLink to="/CodedPostcard" class="inline-block cursor-pointer hover:line-through text-xl sm:text-3xl text-white">CODED POSTCARD</RouterLink>
            <p class="text-sm">- processing X axidraw, Dec. 23</p>
          </div>
          <div class="project text-center sm:text-left w-full">
            <RouterLink to="/WhileInBattle" class="inline-block cursor-pointer hover:line-through text-xl sm:text-3xl text-white">WHILE IN BATTLE, I'M FREE</RouterLink>
            <p class="text-sm">- Interactive website, Jun. 24</p>
          </div>
        </div>

        <!-- Slide Group 3 -->
        <div class="slide-group">
          <div class="project text-center sm:text-left w-full">
            <RouterLink to="/DataVisualization" class="inline-block cursor-pointer hover:line-through text-xl sm:text-3xl text-white">DATA VISUALIZATION</RouterLink>
            <p class="text-sm">- Storytelling with data, Sep. 24</p>
          </div>
          <div class="project text-center sm:text-left w-full">
            <RouterLink to="/TheBurriedPast" class="inline-block cursor-pointer hover:line-through text-xl sm:text-3xl text-white">THE SNOW BURRIED PAST</RouterLink>
            <p class="text-sm">- Experience Design, Apr. 25</p>
          </div>
          <div class="project text-center sm:text-left w-full">
            <RouterLink to="/aHopeWithin" class="inline-block cursor-pointer hover:line-through text-xl sm:text-3xl text-white">A HOPE WITHIN</RouterLink>
            <p class="text-sm">- Projection mapping, Mar. 25</p>
          </div>
        </div>

        <!-- Slide Group 4 -->
        <div class="slide-group">
          <div class="project text-center sm:text-left w-full">
            <RouterLink to="/FroggyMan" class="inline-block cursor-pointer hover:line-through text-xl sm:text-3xl text-white">FROGGY MAN</RouterLink>
            <p class="text-sm">- Game Design, May. 25</p>
          </div>

          <div class="project text-center sm:text-left w-full">
            <RouterLink to="/HavetUnderPres" class="inline-block cursor-pointer hover:line-through text-xl sm:text-3xl text-white">HAVET UNDER PRES</RouterLink>
            <p class="text-sm">- VR learning experience, June 25</p>
          </div>

        </div>

      </div>

      <!-- Scroll instruction -->
      <p class="scroll text-white text-sm mr-[45%] animate-bounce">scroll!</p>

    </div>
  </div>
</template>






<style>
/* Container for scrollable slides */
.scroll-snap-card {
  height: 450px;
  width: 100%;
  max-width: 600px;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  border-radius: 10px;
}

/* Group of 3 projects */
.slide-group {
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Ensure no space at top/bottom of group */
  height: 450px;
  padding: 0;
  gap: 0.25rem; /* Default tight spacing for smaller screens */
}

/* Individual project styling */
.project {
  margin-bottom: 0.25rem; /* Controls space between projects inside a group */
}

/* For larger screens (e.g., desktop, tablets), increase gap between groups */
@media (min-width: 768px) {
  .slide-group {
    gap: 4.5rem; /* SPACE MELLEM PROJEKTER */
    
  }
}



/* For very small screens (iPhones, etc.), make space tighter */
@media (max-width: 640px) {
  .project {
    margin-bottom: 0.25rem; /* Tighten project spacing */
    margin-top: 02rem;
  }


  .slide-group {
    gap: 0.25rem; /* Maintain tight spacing between groups on small screens */
  }

  .scroll {
    display: none;  }

 

}

/* Basic styling for body */
html, body {
  height: 100%;
  margin: 0;
  background-color: #991b1b; /* Tailwind bg-red-800 */
}
</style>

