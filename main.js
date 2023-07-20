const { createApp } = Vue

const app = createApp({

    data (){

        return{
                    //array immagini

            images :[
                'imgs/01.webp',
                'imgs/02.webp',
                'imgs/03.webp',
                'imgs/04.webp',
                'imgs/05.webp',
            ],
                   
                    //array titoli

            titles:[

                'Marvel\'s Spiderman Miles Morale',
                'Ratchet & Clank: Rift Apart',
                'Fortnite',
                'Stray',
                "Marvel's Avengers",
            ],
                  
                    //array descrizioni
               
            text:[

                'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            ],

            activeIndex : 0,
            countDown: 3000,

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
    },
    mounted(){
    
        function incrementa() {
            this.activeIndex = parseInt(this.activeIndex + 1);
            console.log(this.activeIndex);
          }
          
          setInterval(incrementa, this.countDown);
    },

}).mount('#app')

