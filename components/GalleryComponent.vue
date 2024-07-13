<template>
    <section class="testimonial text-center wow fadeInUp animated">
      <div class="container">
        <div class="gallery">
          <button class="gallery-btn" @click="prevImage()">Anterior</button>
          <img :src="currentImage" alt="Gallery Image">
          <button class="gallery-btn" @click="nextImage()">Próximo</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          "images/image1.jpeg",
          "images/image2.jpeg",
          "images/image3.jpeg"
        ],
        currentIndex: 0
      };
    },
    computed: {
      currentImage() {
        return this.images[this.currentIndex];
      }
    },
    methods: {
      prevImage() {
        this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
      },
      nextImage() {
        this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
      }
    }
    // Component logic can be added here if needed
  }
  </script>
  
  <style scoped>
  /* Any custom styles for GalleryComponent can be added here */
  </style>
  