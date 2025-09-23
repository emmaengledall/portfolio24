<template>
    <div class="TheBurriedPast">
      <!-- Navigation -->
      <div class="nav">
        <RouterLink to="/Portfolio">// BACK TO PORTFOLIO</RouterLink>
      </div>

           <!-- Title -->
           <p class="title">THE SNOW BURRIED PAST</p>
  
      <!-- Description -->
      <p class="description">
  During our 4th semester Experience Design course, I created a Three.js project exploring Greenland’s history and the Inuit people’s journey toward independence.  
  <br><br>
  Rather than focusing on the political tensions between the USA, Denmark, and Greenland, I wanted to highlight Greenlandic voices and their cultural history. Users navigate an interactive snowstorm, uncovering fragments of Greenland’s past—illustrations that reveal how the Inuit people shaped their way of life and preserved their traditions despite historical challenges.  
  <br><br>
  The snowstorm symbolizes the confusion and turmoil faced by the Greenlandic people, guiding users through a historical journey from early times to the present day, giving context and depth to their story in an engaging, interactive experience.
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
          <div class="video">
            <video autoplay muted loop playsinline class="video-tag">
              <source src="../assets/portfolioPic/TSBPshort1.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

            <div class="video">
            <video autoplay muted loop playsinline class="video-tag">
              <source src="../assets/portfolioPic/TSBPshort2.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
          { src: '/assets/portfolioPic/TSBP.png', alt: 'Image 2' },
          { src: '/assets/portfolioPic/TSBP1.png', alt: 'Image 1' },
          { src: '/assets/portfolioPic/TSBP2.png', alt: 'Image 3' },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* === Desktop layout === */
  .TheBurriedPast {
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
    .TheBurriedPast {
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
    .image-tag,
    .video-tag {
      width: 100%;
    }

  }
  </style>
  