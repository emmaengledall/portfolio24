<template>
    <div class="DataVisualization">
      <!-- Navigation -->
      <div class="nav">
        <RouterLink to="/Portfolio">// DATA VISUALIZATION</RouterLink>
      </div>
  
      <!-- Description -->
      <p class="description">
        
      </p>
  
      <!-- Images -->
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
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { src: '/assets/portfolioPic/EP02.png', alt: 'Image 2' },
          { src: '/assets/portfolioPic/EP01.png', alt: 'Image 1' },
          { src: '/assets/portfolioPic/EP03.png', alt: 'Image 3' },
          { src: '/assets/portfolioPic/EP04.png', alt: 'Image 4' },
          { src: '/assets/portfolioPic/EP05.png', alt: 'Image 5' },
          { src: '/assets/portfolioPic/EP06.png', alt: 'Image 6' },
          { src: '/assets/portfolioPic/EP07.png', alt: 'Image 7' }
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
  
    .image-tag {
      width: 100%;
    }
  }
  </style>
  