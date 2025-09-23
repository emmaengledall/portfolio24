<template>
    <div class="DataVisualization">
      <!-- Navigation -->
      <div class="nav">
        <RouterLink to="/Portfolio">// BACK TO PORTFOLIO</RouterLink>
      </div>

           <!-- Title -->
           <p class="title">DATA VISUALIZATION</p>
  
      <!-- Description -->
      <p class="description">
  In our 3rd semester data visualization course, I discovered how datasets can tell engaging stories through design and storytelling.  
  <br><br>
  We explored whether it has become harder for young people in Denmark to buy a home compared to previous generations, and created an explainer with visualizations to make the topic more accessible and engaging.  
</p>

  
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
              <source src="../assets/portfolioPic/DVvideo.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <!-- Second video under the first one -->
        <div class="video">
            <video autoplay muted loop playsinline class="video-tag">
             <source src="../assets/portfolioPic/DVvideo1.mov" type="video/mp4" />
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
          { src: '/assets/portfolioPic/DV.png', alt: 'Image 1' },
          { src: '/assets/portfolioPic/DV2.png', alt: 'Image 2' },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* === Desktop layout === */
  .DataVisualization {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto 1fr;
    width: 100vw;
    min-height: 100vh;
    background-color: #fef3c7;
    font-family: 'AndaleMo', sans-serif;
    color: black;
    font-size: 0.875rem;
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
    .DataVisualization {
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
  
    .image-tag,
    .video-tag {
      width: 100%;
    }
  }
  </style>
  