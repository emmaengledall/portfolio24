<template>
    <div class="FroggyMan">
      <!-- Navigation -->
      <div class="nav">
        <RouterLink to="/Portfolio">// FROGGY MAN</RouterLink>
      </div>
  
      <!-- Description -->
      <p class="description">
        The final course before wrapping up our 4th semester was Game Design — a course many of us had been looking forward to, especially me. After our Experience Design module, I had discovered a hidden passion for creating immersive and interactive experiences through code and technology.
It was also the first time we had the opportunity to work with Unity, under the guidance of two external instructors.
<br><br>The first two weeks were spent getting familiar with the Unity engine, and then we had four days to develop our own game from scratch.
I worked alongside two Interactive Design students: Rasmus Hauge and Carolina Díaz.
Together, we created a simple game using self-produced assets and characters. We named the game "Froggy Man", and the goal was simple: reach the top by jumping across lily pads!
<br><br>The process was fun, collaborative, and a great experience overall. It was a lighthearted product we could laugh about, and the project strengthened our skills — and confidence — in working with Unity.
        
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
              <source src="../assets/portfolioPic/FM2.mov" type="video/mp4" />
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
          { src: 'src/assets/portfolioPic/FM.png', alt: 'Image 2' },
          { src: 'src/assets/portfolioPic/FM1.png', alt: 'Image 1' },
       
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* === Desktop layout === */
  .FroggyMan {
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
    .FroggyMan {
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
  