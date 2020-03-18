<template>
   <v-app>
      <div class="page4 mt-4">
         <div class="page4__bg">
            <div class="header-text mt-8">
               <p class="mt-4 pb-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Neque, consectetur.
               </p>
            </div>
         </div>
      </div>
      <v-content>
         <BodyContent />
      </v-content>
      <v-footer></v-footer>
   </v-app>
</template>

<script>
import BodyContent from "./components/BodyContent";
export default {
   components: {
      BodyContent
   },
   data: () => ({
      //
   })
};
</script>

<style lang="scss" scoped></style>
