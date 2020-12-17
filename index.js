var app = new Vue({
  el: '#app',
  data: {
    taskTitle: '',
    taskDetail: '',
    taskList: [],
    isAddBtnDisabled: true
  },
  methods: {
    isInputted: function () {
      if (this.taskTitle.length > 0) {
        this.isAddBtnDisabled = false
      } else {
        this.isAddBtnDisabled = true
      }
    },
    addTask: function () {
      this.taskList.push({ title: this.taskTitle, detail: this.taskDetail })
      this.taskTitle = ''
      this.taskDetail = ''
      this.isAddBtnDisabled = true
    },
    deleteTask: function(index) {
      this.taskList.splice(index, 1)
    }
  }
})