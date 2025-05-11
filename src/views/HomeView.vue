
<script setup> // FIRST IMPORT IMG. FILES INTO THE SCRIPT PART - SECOND BRING IT INTO YOUR DIVS
  import imagePath1 from '@/assets/pngFiles/scribble01.png'; // IMG. IMPORT HERE <33
  import imagePath2 from '@/assets/pngFiles/scribble03.png'; 
  import imagePath3 from '@/assets/pngFiles/scribble04.png'; 
  import imagePath4 from '@/assets/pngFiles/scribble05.png'; 

  import imagePathAbout from '@/assets/pngFiles/scribble06.png';
  import imagePathPortfolio from '@/assets/pngFiles/scribble07.png';
  import imagePathContact from '@/assets/pngFiles/scribble08.png';

</script>







<template>
    <div>
                                    <!-- DIV FOR ONLY ROUTERLINK STYLE-->
  <div class="wrapper text-sm absolute bg-amber-100 font-AndaleMo w-screen h-screen grid grid-cols-2 md:grid-cols-2 md:pt-[3%] md:pl-[3%] sm:grid-cols-1 grid-rows-3"> 
    
    <!-- HOMEPAGE BUTTON/LOGO?? if needed -->
      <div class=""> 
        <RouterLink to="/"></RouterLink> 
      </div>
          



                                      <!-- ABOUT LINK PÅ HOMEPAGE -->
      <div class=" relative row-start-1 md:pl-14 flex flex-col justify-center sm:pl-0"> 
        <h1 class="titler">// ABOUT</h1>
        <div class="bgPic size-9/12 pl-14">
          <img :src="imagePathAbout" alt="woopss">
        </div> 
        <!--draw dash -->
        <div class="about size-7/12 absolute top-[4rem] left-[7rem] z-10 opacity-50">
        <RouterLink to="/about" >
          <svg class="svgDraw" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326.34 140.2">
            <path class="cls cls-1" d="M.11,139.15C22.32,96.01,49.8,55.59,81.75,19.08c6.73-7.7,14.08-15.5,23.74-18.87-12.86,34.33-25.72,68.65-38.58,102.98-1.8,4.81-3.63,9.98-2.44,14.98s6.8,9.25,11.45,7.06"/>
            <path class="cls cls-2" d="M95.23,126.77c4.69-13.64,13.27-25.92,24.46-35.02,1.71,3.91-.62,8.28-2.56,12.09-3.98,7.82-6.49,16.38-7.37,25.11,16.42-10.51,27.97-27.63,44.93-37.25.57-.32,1.23-.65,1.85-.45.83.26,1.12,1.27,1.24,2.13,1.88,13.59-8.1,25.91-10.19,39.47,12.74-3.69,22.43-14.97,35.4-17.75,1.02-.22,2.21-.34,2.99.35.67.59.79,1.57.87,2.46.28,3.04.55,6.07.83,9.11,12.96-5.95,25.91-11.89,38.87-17.84.99-.46,2.14-.92,3.14-.47,2.83,1.26-.36,6.16,1.54,8.61,1.18,1.52,3.54,1.13,5.39.59,6.61-1.93,13.21-3.86,19.82-5.79,4.75-1.39,11.31-2.01,13.29,2.53,1.25,2.87-.17,6.62,1.77,9.08,1.46,1.85,4.15,2.05,6.51,2.02,15.96-.21,31.65-3.88,47.18-7.54"/>
            <path class="cls cls-3" d="M256.43,88.58c5.32-1.52,10.64-3.04,15.95-4.56"/>
          </svg> 
        </RouterLink>    
        </div>

      </div>
      






                                    <!-- PORTFOLIOOOOOOOO LINK PÅ HOMEPAGE -->
      <div class="relative row-start-2 md:pl-14 flex flex-col justify-center pt-5"> 
        <h1 class="titler">// PORTFOLIO</h1>
        <div class="size-9/12 pl-14">
          <img :src="imagePathPortfolio" alt="wooops2">
        </div>
        <!--draw dash -->
        <div class="portfolio size-7/12 absolute top-[4rem] left-[7rem] z-10 opacity-50 stroke-black fill-none">
        <RouterLink to="/portfolio">
          <svg class="svgDraw" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 361.84 131.34">
            <path class="por por-1" d="M.23,126.74C14.58,90.14,32.79,55.07,54.47,22.28"/>
            <path class="por por-2" d="M16.79,33.69c2.91-7.76,9.64-13.43,16.64-17.86C48.94,6.01,67.2.56,85.57.26c11.48-.19,24.55,2.61,30.29,12.55,4.58,7.93,2.86,18.38-2.28,25.96-5.14,7.58-13.15,12.73-21.35,16.8-22.68,11.24-48.69,15.65-73.81,12.5"/>
            <path class="por por-3" d="M51.08,102.6c-9.89,2.37-16.59,13.78-13.83,23.57,6.09,5.9,16.57,1.71,22.3-4.53,5.74-6.24,9.84-14.47,17.44-18.22,2.73,8.48,2.43,17.91-.84,26.2,7.58-10.42,16.84-19.6,27.33-27.08,3.36-2.4,9.48-3.7,10.38.33.38,1.7-.65,3.42-.58,5.16.12,3.21,4.01,5.18,7.16,4.53,3.15-.65,5.62-3.01,7.92-5.27,12.27-12.08,25.34-24.37,41.77-29.51-5.31,13.73-10.62,27.46-15.93,41.19-1.24,3.2-2.18,7.5.6,9.5,1.71,1.23,4.07.89,6.08.25,7.49-2.36,13.51-7.86,19.35-13.11s12.07-10.58,19.69-12.47,16.99.82,20.12,8.02c1.45,3.34,1.68,7.61,4.7,9.65,1.67,1.13,3.79,1.25,5.8,1.31,15.36.45,30.78-.91,45.83-4.02,4.48-.93,9.13-2.01,13.58-.94,5.24,1.26,9.31,5.29,14.14,7.67,17.76,8.75,37.95-6.45,57.73-7"/>
            <path class="por por-4" d="M203.78,82.6h5.83"/>
          </svg>
        </RouterLink>
        </div>

      </div>






                                        <!-- CONTACT LINK PÅ HOMEPAGE -->
      <div class="relative row-start-3 text-start md:pl-14 flex flex-col justify-center pt-5"> 
        <h1 class="titler">// CONTACT</h1>
        <div class="size-9/12 pl-14">
          <img :src="imagePathContact" alt="wooops3" >
        </div>
                                                <!--draw dash -->
          <div class="contact size-8/12 absolute top-[4rem] left-[7rem] z-10 opacity-50 stroke-black fill-none">
          <RouterLink to="/contact">
            <svg class="svgDraw" id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379.17 117.52">
              <path class="con con-1" d="M106.33,14.14C101.79,4.74,92.19.1,83.14.39s-17.64,4.73-25.59,9.92c-16.74,10.94-31.8,25.58-44.19,42.97-4.82,6.77-9.32,14.12-11.58,22.6-2.26,8.48-1.99,18.32,2.22,25.66,5.53,9.65,16.11,12.73,25.79,14.12,19.04,2.72,38.45,1.72,57.22-2.96"/>
              <path class="con con-2" d="M129.01,82.12c-5.89-3.32-13.63-2.58-19.2,1.25-5.57,3.83-8.96,10.4-9.59,17.13-.35,3.74.24,7.86,2.9,10.52,3.11,3.12,8.13,3.35,12.43,2.36,17.58-4.04,27.52-23.28,44.01-30.6-1.89,7.67-3.79,15.33-5.68,23,6.74-10.4,16.9-18.54,28.52-22.86,1.44-.53,2.98-1.02,4.49-.73,4.09.77,5.11,6.17,4.67,10.31s-1.1,9.09,2.09,11.75c14.3-18.42,32.28-33.98,52.56-45.49-8.05,13.69-21.38,24.98-24.03,40.64-.15.87-.25,1.82.19,2.58.65,1.14,2.17,1.39,3.48,1.38,6.39-.01,12.38-2.95,18.04-5.91,11.82-6.17,23.44-12.74,34.82-19.7-1.69,4.7-3.38,9.41-5.07,14.11-.65,1.81-1.18,4.15.28,5.4.97.84,2.41.77,3.67.56,9.44-1.59,17.25-8.47,26.57-10.62,1.06-.25,2.2-.42,3.22-.03,1.27.5,2.04,1.75,2.94,2.78,5.63,6.44,15.92,3.84,24.39,4.95,7.13.93,13.67,4.84,20.84,5.32,7.88.53,16.25-3.08,23.44.21"/>
            </svg>
          </RouterLink>
          </div>
        
      </div>




                                            <!-- WELCOME TEXT ON WEBSITE-->
      <div class="mainText relative leading-loose flex-col justify-center pt-[10%] pl-[5%] md:row-start-3 sm:row-start-4" > 
        <h1 class="md:text-sm"> EMMA-CHANTAL ENGLEDALL</h1> 
        
          <p class="md:text-sm"> 
              frontend developer // website designer // coded designer <br><br>
              With a strong technical background and a passion for aesthetics <br> and design. 
              Currently pursuing a degree in Visual Communication <br>
              with a focus on programming at the Danish School of Media and Journalism </p>
      </div>







    </div>
      
  </div>  

</template>







<style>

/* ABOUT DRAW DASH */
.cls{
  fill: none;
  stroke: #000000;
  stroke-width: 0.3rem;
  stroke-miterlimit: 10;
  transition: stroke-dashoffset 3s ease;
}
.about:hover .cls{
  stroke-dashoffset: 0;
}
.cls-1 {
  stroke-dasharray: 450;
  stroke-dashoffset: 450;
}
.cls-2 {
  stroke-dasharray: 450;
  stroke-dashoffset: 450;
}
.cls-3 {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
}






/* PORTFOLIO DRAW DASH */
.por{
  fill: none;
  stroke: #000000;
  stroke-width: 0.3rem;
  stroke-miterlimit: 10;
  transition: stroke-dashoffset 3s ease;
}
.portfolio:hover .por{
  stroke-dashoffset: 0;
}
.por-1 {
  stroke-dasharray: 120;
  stroke-dashoffset: 120;
}
.por-2 {
  stroke-dasharray: 250;
  stroke-dashoffset: 250;
}
.por-3 {
  stroke-dasharray: 550;
  stroke-dashoffset: 550;
}
.por-4 {
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
}







/* CONTACT DRAW DASH */
.con{
  fill: none;
  stroke: #000000;
  stroke-width: 0.3rem;
  stroke-miterlimit: 10;
  transition: stroke-dashoffset 3s ease;
}
.contact:hover .con{
  stroke-dashoffset: 0;
}
.con-1 {
  stroke-dasharray: 270;
  stroke-dashoffset: 270;
}
.con-2 {
  stroke-dasharray: 530;
  stroke-dashoffset: 530;
}

@media (max-width: 768px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr; /* ✅ korrekt */
    grid-template-rows: repeat(4, auto);
    gap: 1rem;
    padding-top: 0%;
    font-size: small;
  }

  .mainText {
    grid-row-start: 4;
    grid-column-start: 1;
    grid-column: 1;
    padding-top: 1%;
    font-size: small;   
    overflow-y: auto;  
  }

  .titler {
    padding-left: 10%;
    font-size: small;
  }




  .about {
    left: 2rem !important; /* mindre offset på mobil */
    width: 80% !important; /* giv mere bredde hvis nødvendigt */
    top: 2rem;
    transform: scale(0.8); /* skalerer SVG lidt ned */
  }

  .about svg {
    width: 100%;
    height: auto;
  }


  .portfolio {
    left: 2rem !important; /* mindre offset på mobil */
    width: 80% !important; /* giv mere bredde hvis nødvendigt */
    top: 2rem;
    transform: scale(0.8); /* skalerer SVG lidt ned */
  }

  .portfolio svg {
    width: 100%;
    height: auto;
  }


  .contact {
    left: 2rem !important; /* mindre offset på mobil */
    width: 80% !important; /* giv mere bredde hvis nødvendigt */
    top: 2rem;
    transform: scale(0.8); /* skalerer SVG lidt ned */
  }

  .contact svg {
    width: 100%;
    height: auto;
  }

  




}
  
</style>