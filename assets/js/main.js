const { createApp } = Vue

createApp ({
    data() {
        return {
            message:"Hello Vue!",
            charizardUrl: './assets/img/004.jpg'
        }
    }
}).mount ("#app")