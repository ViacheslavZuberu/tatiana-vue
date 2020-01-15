Vue.component("counter", {
  template: `
    <div>
      <p>
        <slot></slot>: {{ value }} раз
      </p>
      <button @click="updateValue()">+</button>
    </div>
  `,
  data() {
    return {
      value: 0
    };
  },
  methods: {
    updateValue() {
      this.$emit("share");
      this.value++;
    }
  }
});

let app = new Vue({
  el: "#app",
  data: {
    firstName: "Bob",
    lastName: "Smith",
    birthDate: new Date(1988, 01, 14),
    total: 0,
    items: [
      {
        id: 1,
        title: "potato",
        price: 22.2
      },
      {
        id: 2,
        title: "tomato",
        price: 25
      },
      {
        id: 3,
        title: "cheese",
        price: 15
      },
      {
        id: 4,
        title: "onion",
        price: 10
      }
    ]
  },
  methods: {
    updateTotal() {
      this.total++;
    }
  },
  computed: {
    age() {
      const MS_IN_YEAR = 1000 * 3600 * 24 * 365;
      const LIVED_MS = Date.now() - this.birthDate;

      return Math.trunc(LIVED_MS / MS_IN_YEAR);
    },
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
});
