<template>
    <div class="aHopeWithin">
      <!-- Navigation -->
      <div class="nav">
        <RouterLink to="/Portfolio">// A HOPE WITHIN</RouterLink>
      </div>
  
      <!-- Description -->
      <p class="description">
        In the spring of 2025, we had a course focused on projection mapping. The beginning of the course was unlike anything we had tried before, as we were given the opportunity to create an actual artwork for an exhibition at Thoravej 29 – SNART.
We were introduced to the exhibition by art curator Majken Overgaard, with whom we collaborated to create a piece that communicated the right message.
<br><br>The theme we were asked to work with was hope. In collaboration with the organization Generation Hope, each of us was assigned to create a projection for a vase. Our projection had to interpret and visually represent selected letters written by other young people over the past six months. These letters were “love letters to the future” — filled with messages of hope and wishes for a better world: no more war, no more hunger, no more climate crisis.
<br>However, some letters were also filled with fear and skepticism about whether the world would actually improve. The few letters where hope was expressed ironically or brutally were the ones I found the most interesting.
I teamed up with Mille Rørbæk to create a brutal image of ironic hope — a hope that could be found from within, quite literally. One of the letters we chose to interpret spoke about death. The writer mentioned they were looking forward to dying in a war they had nothing to do with and couldn’t wait for their homeland to be submerged by rising sea levels.
<br><br>We decided to create a visually harsh yet meaningful narrative — a story of hope that emerges from within, spreading with a twist of fear and grotesque symbolism.
We ended up filling pig intestines with soil and blood, and filmed them being cut open. On top of that, we animated short but powerful quotes from the letters. This act symbolized hope being cut free from within — a dark yet poetic way to show that even the most brutal beginnings can give rise to something new.
        
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
              <source src="../assets/portfolioPic/tarmvideo2.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <!-- Second video under the first one -->
        <div class="video">
            <video autoplay muted loop playsinline class="video-tag">
             <source src="../assets/portfolioPic/Tarmvideo1.mov" type="video/mp4" />
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
          { src: 'src/assets/portfolioPic/HW.jpg', alt: 'Image 2' },
          { src: 'src/assets/portfolioPic/HW1.jpg', alt: 'Image 1' },
          { src: 'src/assets/portfolioPic/HW2.jpg', alt: 'Image 3' },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* === Desktop layout === */
  .aHopeWithin {
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
    .aHopeWithin {
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
  