const { createApp } = Vue

const app = createApp({

    data (){

        return{
                    //dichiarazione immagini

            images :[
                'imgs/01.webp',
                'imgs/02.webp',
                'imgs/03.webp',
                'imgs/04.webp',
                'imgs/05.webp',
            ],

            titles:[

                'Marvel\'s Spiderman Miles Morale',
                'Ratchet & Clank: Rift Apart',
                'Fortnite',
                'Stray',
                "Marvel's Avengers",
            ],
               
            text:[

                'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            ],
            activeIndex : 0,
            
            
        }

    },

    methods: {

        onThumbClick(thumbIndex){
            this.activeIndex=thumbIndex;
        },

        upBtnClick(){
            this.activeIndex--;
            if ( this.activeIndex < 0){
                 this.activeIndex = 4;
            }

        },

        downBtnClick(){
            this.activeIndex++;
            if ( this.activeIndex > 4){
                 this.activeIndex = 0;
            }
        }
    }

}).mount('#app')

/*const cards = [
    {
        image: 'imgs/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'imgs/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'imgs/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'imgs/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'imgs/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
]*/