const app = Vue.createApp({
    data() {
        return {
            startTime: '',
            newTitle: '',
            newIcon: '',
            endTime: '',
            newColor: '',
            time: ['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:0','11:0','12:0','13:0','14:0','15:0','16:0','17:0','18:0','19:0','20:0','21:0','22:0','23:0'],
            icons: [],
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
    methods: {
        addNewTask() {
                let obj = {}
                obj.time = this.startTime
                obj.title = this.newTitle
                obj.icon = this.newIcon
                obj.color = this.newColor
                obj.hours = this.startTime + '-' + this.endTime
                obj.time != '' && obj.title !='' && obj.icon != '' && obj.color != ''  ?  
                this.tasks.push(obj) : void(0)
        }
    },
}).mount('#app')