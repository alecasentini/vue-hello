const { createApp } = Vue

createApp ({
    data() {
        return {
            message:"Hello Vue!",
            charizardUrl: './assets/img/004.jpg',
            backCardUrl: './assets/img/back-card.jpg'
        }
    }
}).mount ("#app")