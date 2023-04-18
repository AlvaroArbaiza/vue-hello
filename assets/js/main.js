const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        image: "https://cdn1.dotesports.com/wp-content/uploads/2019/09/03101714/Garen_13.jpg"
      }
    }
  }).mount('#app')