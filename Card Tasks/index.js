const app = Vue.createApp({
    data() {
        return {
            startTime: '',
            newTitle: '',
            newIcon: '',
            endTime: '',
            newColor: '',
            time: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:0', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
            tasks: [{
                time: '8:00',
                title: 'Working on SocialLens ',
                icon: '💻',
                hours: '8:00 - 9:00',
                color: 'bg-blue-500',
            },
            {
                time: '9:00',
                title: 'Design Team Standup ',
                icon: '✏',
                hours: '9:00 - 10:00',
                color: 'bg-yellow-600',
            },
            {
                time: '10:00',
                title: 'Take launch with the team ',
                icon: '🍽',
                hours: '10:00 - 11:00',
                color: 'bg-red-500',
            }
            ]
        }
    },

    mounted() {
        if (localStorage.getItem('tasks'))
            this.tasks = JSON.parse(localStorage.getItem('tasks'))
    },
    updated() {
        console.log(1);
    },
    methods: {
        updateLocalStorage() {
            localStorage.setItem('tasks',JSON.stringify(this.tasks))
        },
        addNewTask() {
                let obj = {}
                obj.time = this.startTime
                obj.title = this.newTitle
                obj.icon = this.newIcon
                obj.color = this.newColor
                obj.hours = this.startTime + '-' + this.endTime
            if (obj.time != '' && obj.title != '' && obj.icon != '' && obj.color != '') {
                this.tasks.push(obj)
                this.updateLocalStorage()
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
            this.updateLocalStorage()
        }
    },
}).mount('#app')