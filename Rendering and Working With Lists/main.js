/**
 * Created by lchristou on 31/1/2017.
 */

Vue.component('my-tasks', {
    props: ['list'],
    template: "#tasks-template",
    computed: {
        remaining: function () {
            var vm = this;

            /*return this.list.filter(function (task) {
                // return ! task.completed;
                return  vm.isInProgress(task);
            }).length;*/
            return this.list.filter(this.inProgress).length;
        }
    },

    methods: {
        isCompleted: function (task) {
            return task.completed;
        },

        inProgress: function (task) {
            return ! this.isCompleted(task);
        },
        
        deleteTask: function (task) {
            this.list.$remove(task);
        },

        clearCompleted: function () {
            this.list = this.list.filter(this.inProgress);
        }
    }
});

new Vue({
    el: "#app",

    methods: {
        toggleCompletedFor: function(task) {
            task.completed =! task.completed;
        }
    },

    data:{
        tasks:[
            { body: 'Go to the store', completed: false },
            { body: 'Go to the bank', completed: false },
            { body: 'Go to the doctor', completed: true }
        ]
    }
});