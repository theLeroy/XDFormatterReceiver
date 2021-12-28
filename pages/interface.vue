<template>
  <!-- https://bitbucket.org/TheDiligentDev/vue-kanban-board/src/master/ -->
  <div class="flex h-screen w-screen text-white">
    <div class="w-2/12 h-full p-4 bg-[#2a2a2a] flex flex-col">
      <div class="mb-10 font-medium tracking-wider">Not Assigned</div>
      <NotAssigned :group="NotAssigned" />
      <button @click="runExport()" class="bg-white rounded text-black py-3">
        Export
      </button>
    </div>

    <div class="h-full w-10/12 bg-[#212121] p-4">
      <div class="mb-10 font-medium tracking-wider">Fonts</div>
      <div class="grid grid-rows-3 grid-cols-5 grid-flow-row-dense gap-4">
        <FontCard :group="group1"><input v-model="group1Name" /></FontCard>
        <FontCard :group="group2"><input v-model="group2Name" /></FontCard>
        <FontCard :group="group3"><input v-model="group3Name" /></FontCard>
        <FontCard :group="group4"><input v-model="group4Name" /></FontCard>
        <FontCard :group="group5"><input v-model="group5Name" /></FontCard>
        <FontCard :group="group6"><input v-model="group6Name" /></FontCard>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    //import draggable as a component
    draggable,
  },
  data() {
    return {
      group1Name: ".typo-100",
      group2Name: ".typo-200",
      group3Name: ".typo-300",
      group4Name: ".typo-400",
      group5Name: ".typo-500",
      group6Name: ".typo-600",
      NotAssigned: [],
      group1: [],
      group2: [],
      group3: [],
      group4: [],
      group5: [],
      group6: [],
    };
  },
  mounted() {
    let font = {
      prefix: null,
      classes: [],
    };
    let typoOutput = this.$store.getters["typoOutput/getTypo"];

    for (let index = 0; index < typoOutput.length; index++) {
      this.NotAssigned.push({
        prefix: null,
        classes: typoOutput[index],
      });
    }

    // let color = this.$store.getters['typoOutput/getColors']
  },
  methods: {
    //add new tasks method
    add: function () {
      if (this.newTask) {
        this.arrBackLog.push({ name: this.newTask });
        this.newTask = "";
      }
    },
    runExport() {
      console.log("Export");
    },
    onNameChage(value) {
      console.log(value);
    },
  },
};
</script>