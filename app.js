const app = Vue.createApp({
    data: () => {
        return {
            title: "REGISTRATION",
            pages: [
                {id: 1, description: "1111111111111111", active: false, complete: false},
                {id: 2, description: "2222222222222222", active: false, complete: false},
                {id: 3, description: "3333333333333333", active: false, complete: false},
                {id: 4, description: "4444444444444444", active: false, complete: false},
                {id: 5, description: "5555555555555555", active: false, complete: false}
            ],
            currentPage: 0,
        }
    },
    methods: {
        nextPage() {
            if (!(this.currentPage >= (this.pages.length - 1))) {
                this.pages[this.currentPage].complete = true;
                this.currentPage += 1;
            }
        },
        backPage() {
            if (!this.currentPage.length) {
                this.pages[this.currentPage].active = !this.pages[this.currentPage].active;
                this.pages[this.currentPage - 1].complete = false;
                this.currentPage -= 1
            }
        },
    },
    mounted() {
        this.pages[this.currentPage].active = true;
    },
    updated() {
        this.pages[this.currentPage].active = true;
    },
    template: `
<div class="wrapper">
    <div class="container">
    <div class="content-wrapper">
        <h1>{{ title }}</h1>    
        <div class="">
            {{ pages[currentPage].description }}
        </div>
    </div>
    
    <div class="step-items-wrapper">
        <div class="container-step-items">
            <div class="step-item"
                 v-for="(item, index) in pages"  
                 v-bind:class="{ active: item.active, complete: item.complete }"> {{index + 1}} 
            </div>
        </div>
        <div class="line"></div>  
    </div>
    
    
    <div class="button-container">
        <div>
            <button v-on:click = 'backPage()'>back</button>    
            <button v-on:click = 'nextPage()'>next</button>
        </div>
        <div>
            <button v-if = "currentPage === pages.length - 1" >SUBMIT</button>
        </div>
    </div
    
    </div>
</div>
       
`
})

app.mount('#app');

