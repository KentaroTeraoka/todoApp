Vue.component('modal', {
  props: ['taskList', 'targetTaskIndex'],
  data: function (){
    return{
      editedTaskTitle: this.taskList[this.targetTaskIndex].title,
      editedTaskDetail: this.taskList[this.targetTaskIndex].detail
    }
  },
  template: `
    <div class="modal">
          <div class="modal__overlay" v-on:click.self="closeModalTrigger">
              <div class="modal__contents">
                  <span class="modal__close-icon" v-on:click="closeModalTrigger"><i class="fas fa-times"></i></span>
                  <form action="" class="task-form">
                      <div>
                          <label for="task-title">taskTitle</label>
                          <input 
                              name="task-title" 
                              type="text" 
                              placeholder="taskTitleを編集"
                              v-model="editedTaskTitle">
                      </div>
                      <div>
                          <label for="task-detail">taskDetail</label>
                          <input 
                              name="task-detail" 
                              type="text" 
                              placeholder="taskDetailを編集"
                              v-model="editedTaskDetail">
                      </div>
                      <button type="button" v-on:click="editTask()" v-bind:disabled="isEditBtnDisabled">Todoを編集</button>
                  </form>
              </div>
          </div>
      </div>
  `,
  methods: {
    editTask: function () {
      this.taskList[this.targetTaskIndex] = { title: this.editedTaskTitle, detail: this.editedTaskDetail }
      this.closeModalTrigger()
    },
    closeModalTrigger: function () {
      this.$emit('close-modal')
    }
  },
  computed: {
    isEditBtnDisabled: function () {
      return this.editedTaskTitle.length === 0
    }
  }
})


var app = new Vue({
  el: '#app',
  data: {
    taskTitle: '',
    taskDetail: '',
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
  },
  computed: {
    isAddBtnDisabled: function () {
      return !(this.taskTitle.length > 0)
    }
  }
})