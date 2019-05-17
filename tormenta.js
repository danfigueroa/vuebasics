var app = new Vue({

    el: '#cemiterio',
    // '#cemiterio' conecta o elemento com a Div de mesmo ID
    data: {
        name: 'Meias',
        race: './assets/vmSocks-green.png',
        class: 'Um par de meias',
        level: 8,
        death: ["80% algodão", "20% poliéster"],
        votes: 0
    },

    methods: {
        addToVotes() {
            this.votes+=1
        }
    }

})