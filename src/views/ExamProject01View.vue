<template>
  <div class="ExamProject01">
    <!-- Navigation -->
    <div class="nav">
      <RouterLink to="/Portfolio">// BACK TO PORTFOLIO</RouterLink>
    </div>

    <p class="title">EXAM PROJECT 01</p>

    <!-- Description -->
    <p class="description">
      Before we finished 1. semester, we of course had a small exam project to complete. <br>
      Each student was assigned some kind of business, and had to come up with a fictional firm, a visual identity, <br>
      animated video and last but not least, a coded asset-generator, that our business could benefit from. <br>
      The business I landed on, was a medical company. <br>
      I immediately knew I wanted to go for something controversial and/or destigmatize an everyday problem. <br>
      I went with a fictional company I chose to call "AETERITAS" (eternity in Latin). <br>
      This company's trademark case was personalised medication and more specifically Hormone Replacement Therapy (HRT). <br><br>
      In this case, the coded asset-generator provides different designs depending on the patient’s social security number.
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
