var app = new Vue({
  el: '#app',
  data: {
    taskTitle: '',
    taskDetail: '',
    editedTaskTitle: '',
    editedTaskDetail: '',
    targetTaskIndex: 0,
    taskList: [],
    isBtnDisabled: true,
    showModal: false
  },
  methods: {
    isInputted: function () {
      if (this.taskTitle.length > 0 || this.editedTaskTitle.length > 0) {
        this.isBtnDisabled = false
      } else {
        this.isBtnDisabled = true
      }
    },
    addTask: function () {
      this.taskList.push({ title: this.taskTitle, detail: this.taskDetail })
      this.taskTitle = ''
      this.taskDetail = ''
      this.isBtnDisabled = true
    },
    editTask: function () {
      this.taskList[this.targetTaskIndex] = { title: this.editedTaskTitle, detail: this.editedTaskDetail }
      this.editedTaskTitle = ''
      this.editedTaskDetail = ''
      this.isBtnDisabled = true
      this.closeModal()
    },
    deleteTask: function (index) {
      this.taskList.splice(index, 1)
    },
    openModal: function (index) {
      this.targetTaskIndex = index
      this.showModal = true
    },
    closeModal: function () {
      this.showModal = false
    }
  }
})