<template>
  <div class="PiDay">
    <!-- Navigation -->
    <div class="nav">
      <RouterLink to="/Portfolio">// BACK TO PORTFOLIO</RouterLink>
    </div>

    <!-- Title -->
    <p class="title">PI-DAY POSTER</p>

    <!-- Description -->
    <p class="description">
      Poster for PI-day, made with Processing. <br>
      The composition and size of the sphere depends on the input from the microphone. <br>
      This was the first time experimenting with Processing, and I'm pretty happy with the results!<br>
      I was going for a 90's techno vibe, which I feel like did come through.
    </p>

    <!-- Images -->
    <div class="image-container">
      <div class="images-wrapper">
        <div class="grid gap-10">
          <div
            v-for="(image, index) in images"
            :key="index"
            :class="['image', index % 2 === 0 ? 'even' : 'odd']"
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
        { src: '/assets/portfolioPic/pPlakat1.png', alt: 'Image 1' },
        { src: '/assets/portfolioPic/pPlakat2.png', alt: 'Image 2' },
        { src: '/assets/portfolioPic/pPlakat3.png', alt: 'Image 3' },
        { src: '/assets/portfolioPic/pPlakat4.png', alt: 'Image 4' },
      ]
    };
  }
};
</script>

<style scoped>
/* === Base Layout === */
.PiDay {
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
  transition: transform 0.3s ease-in-out;
}

.image.odd {
  transform: translateY(0px);
}

.image.even {
  transform: translateY(20px);
}



.image-tag {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 0.5rem;
}

/* === Responsive for mobile (≤ 430px) === */
@media (max-width: 430px) {
  .PiDay {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .nav,
  .title,
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
