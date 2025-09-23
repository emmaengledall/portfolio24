<template>
    <div class="ExamProject01">
      <!-- Navigation -->
      <div class="nav">
        <RouterLink to="/Portfolio">// BACK TO PORTFOLIO</RouterLink>
      </div>

         <!-- Title -->
         <p class="title">WHILE IN BATTLE I'M FREE - NEVER FREE TO REST.</p>
  
      <!-- Description -->
      <p class="description">
  "While in battle, I'm free" is a dance performance that inspired my exam project.  
  <br><br>
  I created a website, poster, and visual identity reflecting the piece’s core theme — unity through diversity. The performance combines Cullberg dancers and street dancers, choreographed by Hooman Sharifi, with music by Neda Sanai.  
  <br><br>
  To extend this idea, I designed an interactive homepage where users can draw and leave their mark, becoming part of the bigger picture.  
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
          { src: '/assets/portfolioPic/WIB.png', alt: 'Image 2' },
          { src: '/assets/portfolioPic/WIB1.png', alt: 'Image 1' },
          { src: '/assets/portfolioPic/WIB2.png', alt: 'Image 3' },
          { src: '/assets/portfolioPic/WIB3.png', alt: 'Image 4' },
         
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* === Desktop layout === */
  .ExamProject01 {
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
  
  /* === Mobile layout (≤ 430px) === */
  @media (max-width: 430px) {
    .ExamProject01 {
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
  