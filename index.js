var app = new Vue({
  el: '#app',
  data: {
    taskTitle: '',
    taskDetail: '',
    editedTaskTitle: '',
    editedTaskDetail: '',
    targetTaskIndex: 0,
    taskList: [],
    showModal: false
  },
  methods: {
    addTask: function () {
      this.taskList.push({ title: this.taskTitle, detail: this.taskDetail })
      this.taskTitle = ''
      this.taskDetail = ''
    },
    editTask: function () {
      this.taskList[this.targetTaskIndex] = { title: this.editedTaskTitle, detail: this.editedTaskDetail }
      this.editedTaskTitle = ''
      this.editedTaskDetail = ''
      this.closeModal()
    },
    deleteTask: function (index) {
      this.taskList.splice(index, 1)
    },
    openModal: function (index) {
      this.targetTaskIndex = index
      this.showModal = true
      this.isBtnDisabled()
    },
    closeModal: function () {
      this.showModal = false
    }
  },
  computed: {
    isBtnDisabled: function () {
      console.log(!(this.taskTitle.length > 0 || this.editedTaskTitle.length > 0))
      return !(this.taskTitle.length > 0 || this.editedTaskTitle.length > 0)
    }
  }
})