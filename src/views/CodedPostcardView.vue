<template>
  <div class="CodedPostcard">
    <!-- Navigation -->
    <div class="nav">
      <RouterLink to="/Portfolio">// BACK TO PORTFOLIO</RouterLink>
    </div>

       <!-- Title -->
       <p class="title">CODED POSTCARDS</p>

    <!-- Description -->
    <p class="description">
      Second time using Processing in a project. <br>
      This time around, coding was used to make postcard designs! <br>
      We had an awesome first try, plotting the postcards using an AxiDraw. <br>
      I quickly decided on the same design as my last Processing experiment. <br>
      The AxiDraw let us rethink the material we could plot on — which I took advantage of. <br>
      I ended up plotting on both hard paper and glass. <br>
      The design used brightness() to control the spread and width of the ellipse().
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
        { src: '/assets/portfolioPic/CP01.png', alt: 'Image 1' },
        { src: '/assets/portfolioPic/CP02.png', alt: 'Image 2' },
      ]
    };
  }
};
</script>

<style scoped>
/* === Base Layout === */
.CodedPostcard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  width: 100vw;
  min-height: 100vh;
  background-color: #fef3c7; /* amber-100 */
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
  padding: 2rem;
}

.title {
  grid-column: 1 / 2;
  padding-left: 2rem;
  font-weight: bold;
  font-size: 1rem;
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
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 0.5rem;
}

/* === Responsive for mobile (≤ 430px) === */
@media (max-width: 430px) {
  .CodedPostcard {
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











