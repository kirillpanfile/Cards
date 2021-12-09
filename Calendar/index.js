Vue.createApp({
    data() {
        return {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            weekDays: ['Su','Mo','Tu','We','Th','Fr','Sa'],
            days: [],
            currentDay : new Date().getDate()
        }
    },
    methods: {
        getDaysInMonth() {
            let arr = []
            let firstDay = new Date(this.year, this.month, 1).getUTCDay();
            for (let i = 0; i <= firstDay;i++) arr.push(' ')
            for (let i = 1; i <= new Date(this.year, this.month + 1, 0).getDate();i++) arr.push(i)
            return arr
        },
        checkCurrentDay(item) {
            if (item === this.currentDay && this.month == new Date().getMonth() && this.year == new Date().getFullYear()) 
                return true
        }
    },
    computed: {
        currentDate() {
            if (this.month > 11) {
                this.month = 0;
                this.year++
            }
            if (this.month < 0) {
                this.month = 11;
                this.year--
            }
            return this.months[this.month] + ' ' + this.year
        }
    },
}).mount('#app')