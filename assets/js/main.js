const { createApp } = Vue

createApp ({
    data() {
        return {
            message:"Clicca sulla carta!",
            charizardUrl: './assets/img/004.jpg',
            backCardUrl: './assets/img/back-card.jpg',
            isFlipped: false
        }
    },
    methods: {
        flipCard() {
            this.isFlipped = !this.isFlipped;
        }
    }
}).mount ("#app")