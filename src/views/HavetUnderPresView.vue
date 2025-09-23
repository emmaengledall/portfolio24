<template>
    <div class="HavetUnderPres">
      <!-- Navigation -->
      <div class="nav">
        <RouterLink to="/Portfolio">// BACK TO PORTFOLIO</RouterLink>
      </div>

       <!-- Title -->
       <p class="title">HAVET UNDER PRES</p>
  
      <!-- Description -->
      <p class="description">
  At the end of our 4th semester, we created an educational VR experience about the Danish sea and its environmental challenges, focusing on overfishing.  
  <br><br>
  The project was designed for a traveling exhibition aimed at 12–13-year-old schoolchildren, with Videnskab.dk as the sender. Our goal was to communicate a complex topic in a way that was both engaging and trustworthy.  
  <br><br>
  We developed "Havet under pres," where children, guided by the fish Torben, explore the seabed through a VR headset. They experience the ocean’s past, present, and a possible future—where responsible choices lead to thriving marine life.  
</p>

  
      <!-- Images -->
            <!-- Images and Video -->
            <div class="image-container">
        <div class="images-wrapper">
          <div class="grid gap-5">
            <div
              v-for="(image, index) in images"
              :key="index"
              class="image"
            >
              <img :src="image.src" :alt="image.alt" class="image-tag" />
            </div>
          </div>
  
          <!-- Video under images -->
          <!-- <div class="video">
            <video autoplay muted loop playsinline class="video-tag">
              <source src="../assets/portfolioPic/FM2short.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> -->



        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { src: '/assets/portfolioPic/HUP.png', alt: 'Image 2' },
          { src: '/assets/portfolioPic/HUP1.png', alt: 'Image 1' },
          { src: '/assets/portfolioPic/HUP2.png', alt: 'Image 3' },
          { src: '/assets/portfolioPic/HUP6.png', alt: 'Image 7' },
          { src: '/assets/portfolioPic/HUP3.png', alt: 'Image 4' },
          { src: '/assets/portfolioPic/HUP4.png', alt: 'Image 5' },
          { src: '/assets/portfolioPic/HUP5.png', alt: 'Image 6' },
       
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* === Desktop layout === */
  .HavetUnderPres {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto 1fr;
    width: 100vw;
    min-height: 100vh;
    background-color: #fef3c7; /* bg-amber-100 */
    font-family: 'AndaleMo', sans-serif;
    color: black;
    font-size: 0.875rem; /* text-sm */
    overflow-y: auto;
  }
  
  .nav {
    grid-column: 1 / 2;
    padding: 5rem 2rem 1rem;
  }

  .title {
  grid-column: 1 / 2;
  padding-left: 2rem;
  font-weight: bold;
  font-size: 1rem;
}
  
  .description {
    grid-column: 1 / 2;
    padding: 1rem 2rem 2rem;
  }
  
  .image-container {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
    padding: 2rem;
    overflow-y: auto;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;
  }
  
  .images-wrapper {
    width: 100%;
    max-width: 600px;
  }
  
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image-tag {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 0.5rem;
  }

  /* Video styling */
  .video {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
  
  .video-tag {
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  
  /* === Mobile layout (≤ 430px) === */
  @media (max-width: 430px) {
    .HavetUnderPres {
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }
  
    .nav,
    .description,
    .image-container {
      width: 100%;
      padding: 1rem 0;
    }
  
    .image-container {
      order: 3;
      max-height: none;
      overflow: visible;
    }
  
    .images-wrapper {
      width: 100%;
      padding: 0;
    }
  
    .image-tag {
      width: 100%;
    }

    .video-tag {
      width: 100%;
    }
  }
  </style>
  