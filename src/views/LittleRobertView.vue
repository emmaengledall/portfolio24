<template>
  <div class="LittleRobert">
    <!-- Navigation -->
    <div class="nav">
      <RouterLink to="/Portfolio">// LITTLE ROBERT</RouterLink>
    </div>

    <!-- Description -->
    <p class="description">
      Before beginning this Blender project, we went through five days of introduction to the program. <br />
      We went through the basics, like modelling, working with mesh, how to grab, scale and rotate our assets and place them. <br />
      We worked with different kinds of small basic projects to get comfy using Blender! <br />
      Later on, I settled on going for a more spacy vibe. <br />
      My scene ended up being a volcano submerged in lava with a space background. <br />
      My climber turned into a small robot (named Robert) who found himself in a sticky situation because his spaceship crashed on the island. <br />
      The surroundings were, as I mentioned, spacy, and the lava had some emission action going on. <br />
      This made the surrounding objects glow and reflect. <br />
      Basically, the lava is the most outstanding light source, which creates the wanted gloomy vibe. <br />
      The background is an HDR picture with spacy stars and colors. <br />
      The volcano is made using a landscape add-on, and afterwards I added texture and color to get the desired look! <br />
      The lava is made with an ocean modifier to give it a bumpy look, and the texture is a lava-like picture I found using BlenderKit.
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
        { src: '/assets/portfolioPic/LR01.png', alt: 'Image 1' },
        { src: '/assets/portfolioPic/LR02.png', alt: 'Image 2' },
        { src: '/assets/portfolioPic/LR03.png', alt: 'Image 3' },
      ]
    };
  }
};
</script>

<style scoped>
/* === Base Desktop Layout === */
.LittleRobert {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  width: 100vw;
  min-height: 100vh;
  background-color: #fef3c7; /* bg-amber-100 */
  font-family: 'AndaleMo', sans-serif;
  color: black;
  font-size: 0.875rem;
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

/* === Mobile Layout (≤ 430px) === */
@media (max-width: 430px) {
  .LittleRobert {
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




