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
        "While in battle, I'm free" is a dance performance that I was allowed to use as inspiration during my exam project. Based on this, I created my own take on how a possible website and poster could look.
        The performance brings together dancers from the Swedish dance company Cullberg and dancers from the street dance community, in a unique collaboration choreographed by Hooman Sharifi. <br><br>
        They come from different backgrounds and styles, which is clearly felt in the performance — where they influence each other and create something entirely new together.
        The dancers meet in both resistance and unity. They rise from the struggle — as individuals and as a group. It’s about standing up for yourself, fighting for what you believe in, and expressing yourself through your own movement and language.
        <br><br>The music, composed by Neda Sanai, is based on Iranian folk songs that have been deconstructed and reimagined to match the intense atmosphere and energy of the performance.
        Since the essence of the piece is about bringing together nationalities and dance styles to create a bigger, unified picture, I chose to reflect that in my visual concept and design choices.
       <br><br> In addition to creating a visual identity, website, and poster, I was also tasked with developing an interactive element for the site. I decided to let users draw and modify the homepage themselves.
        The idea was to invite users to leave their personal mark on the project — to become part of the bigger picture. These drawings and expressions could then be displayed during the exhibition.
        
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
          { src: 'src/assets/portfolioPic/WIB.png', alt: 'Image 2' },
          { src: 'src/assets/portfolioPic/WIB1.png', alt: 'Image 1' },
          { src: 'src/assets/portfolioPic/WIB2.png', alt: 'Image 3' },
          { src: 'src/assets/portfolioPic/WIB3.png', alt: 'Image 4' },
         
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
  