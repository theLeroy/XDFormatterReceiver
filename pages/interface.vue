<template>
  <!-- https://bitbucket.org/TheDiligentDev/vue-kanban-board/src/master/ -->
  <div class="flex h-screen w-screen text-white">
    <div class="w-2/12 h-full p-4 bg-[#2a2a2a]">
        <div class="mb-10">Not Assigned</div>
      <NotAssigned :group="NotAssigned"/>
    </div>

    <div class="h-full w-10/12 bg-[#212121] p-4">
        <div class="mb-10">Fonts</div>
        <div class="grid grid-rows-3 grid-cols-5 grid-flow-row-dense gap-4 ">

        <FontCard :group="group1" :name="group1Name" />
        <FontCard :group="group2" :name="group2Name" />
        <FontCard :group="group3" :name="group3Name" />
        <FontCard :group="group4" :name="group4Name" />
        <FontCard :group="group5" :name="group5Name" />
        <FontCard :group="group6" :name="group6Name" />
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
      group2Name: ".typo-100",
      group3Name: ".typo-100",
      group4Name: ".typo-100",
      group5Name: ".typo-100",
      group6Name: ".typo-100",
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
          classes: []
        };
    let typoOutput  = this.$store.getters['typoOutput/getTypo']

      for (let index = 0; index < typoOutput.length; index++) {
         this.NotAssigned.push({
          prefix: null,
          classes: typoOutput[index]
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
  },
};
</script>