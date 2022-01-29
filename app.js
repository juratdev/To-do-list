const App = {
  data() {
    return {
      inputValue: "",
      todos: []
    }
  },
  methods: {
    handleInput() {
      if (this.inputValue === "") {
        alert("Iltimos biron nima kiriting");
      } else {
        this.todos.push(this.inputValue);
        this.inputValue = "";
      }
    }
  }
}

Vue.createApp(App).mount("#app");