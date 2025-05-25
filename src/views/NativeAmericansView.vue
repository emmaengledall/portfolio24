<template>
  <div class="NativeAmericans">
    <!-- Navigation -->
    <div class="nav">
      <RouterLink to="/Portfolio">// BACK TO PORTFOLIO</RouterLink>
    </div>

    <!-- Title -->
    <p class="title">NATIVE AMERICANS</p>

    <!-- Description -->
    <p class="description">
      First time using Processing! In this project, I wanted to go for a good <br />
      old 90’s style, coded aesthetic. <br />
      At the same time, I wanted to make a contrast, by using an old image of <br />
      a Native American woman. The picture itself isn’t shown on the sketch. <br />
      I’ve extracted the brightness value using the `brightness()` function, and <br />
      afterwards these values determine the width and scale of the different ellipses.
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
        { src: '/assets/portfolioPic/NA01.png', alt: 'Image 1' },
        { src: '/assets/portfolioPic/NA02.png', alt: 'Image 2' },
        // Add more images if needed
      ]
    };
  }
};
</script>

<style scoped>
/* === Base Layout === */
.NativeAmericans {
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

/* === Mobile Layout (≤ 430px) === */
@media (max-width: 430px) {
  .NativeAmericans {
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










    


