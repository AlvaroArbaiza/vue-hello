const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        message2: 'This is Garen, the best champ of the League of Legends!',
        image: 'https://cdn1.dotesports.com/wp-content/uploads/2019/09/03101714/Garen_13.jpg'
      }
    }
  }).mount('#app')