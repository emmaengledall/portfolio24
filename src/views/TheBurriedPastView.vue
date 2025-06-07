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
        During the 4th semester, we had a course in Experience Design. We had the pleasure of being taught by two talented designers from Manyone, who acted both as mentors and as a helping hand—especially when we were shaping our experiences and the code wasn’t always on our side.
        <br>The focus of my project was the political tension between the USA, Denmark, and Greenland. At the time of the project, the debate was at its peak, particularly following the public exchange between Donald Trump and Mette Frederiksen.
        <br>After extensive research and several brainstorming sessions, I decided that I didn’t want my project to reflect the political debate itself. Instead, I wanted to highlight the Greenlandic people and their right to freedom and independence. I felt that their voices weren’t being heard, and that not enough attention was being given to their history and the oppression they have experienced as a people.
        <br><br>I chose to create an experience in Three.js, where users could explore Greenland’s past by uncovering fragments of its history—hidden within a snowstorm. The snowstorm was designed to symbolize the confusion and turmoil the Greenlandic people have had to navigate while building their culture—a political storm that has long neglected their traditions and silenced their voices.
       <br>Within this snowstorm, users can move across the Greenlandic ice sheet, discovering memories within the storm. These memories contain illustrations that tell the story of the Inuit people—from their early days in Greenland and how they shaped their way of life based on the natural environment, to the present day.
        <br>The intention was for the stories to guide the user through Greenland’s historical journey, all the way to modern times.
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
  