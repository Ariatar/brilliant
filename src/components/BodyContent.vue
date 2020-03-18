<template>
   <v-container fluid>
      <v-container style="width: 1000px; margin: 0 auto">
         <v-layout>
            <v-flex class="header-title" xs12 md6>
               <h2>
                  OUR MISSION<br />
                  & BRAND PROMISE
               </h2>
            </v-flex>
            <v-flex xs12 md6
               ><p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Itaque aliquam voluptatem quam consequatur. Ipsum sit, nam
                  modi, consequuntur quas quisquam repellendus reiciendis itaque
                  animi inventore aliquam dolorem, qui iste totam. Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Molestias
                  excepturi consequuntur beatae dignissimos alias, sit similique
                  corporis eum voluptatum quos! Lorem, ipsum.
               </p>
            </v-flex>
         </v-layout>
         <v-layout>
            <v-flex xs12 md5>
               <v-img
                  style="transform: rotate(1deg);"
                  height="350px"
                  width="350px"
                  class="firstimg"
                  src="../assets/firstimg.png"
               ></v-img>
               <h1 class="mt-4">Lorem, ipsum.</h1>
               <p style="width: 350px" class="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam impedit possimus omnis animi facere ab quos voluptates
                  neque id sapiente!
               </p> </v-flex
            ><v-flex xs12 class="mt-12 ml-12" md6>
               <v-card></v-card>
               <div class="mt-12">
                  <v-img
                     style="transform: rotate(-1deg); position: relative; left: 40px"
                     src="../assets/secondimg.png"
                  >
                  </v-img>
                  <h1 class="mt-4 offset-md-5">Lorem, ipsum.</h1>
                  <div class="offset-md-5" style="width: 300px;">
                     <p class="mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Beatae nulla laborum illum quae ipsa dolorum
                        blanditiis rerum ea? Reprehenderit, laboriosam.
                     </p>
                  </div>
               </div>
            </v-flex>
         </v-layout>
         <v-container style="width: 800px">
            <v-layout>
               <v-flex md6>
                  <div>
                     <v-img
                        style="transform: rotate(-1deg); bottom: 60px; position: relative;"
                        height="350px"
                        width="350px"
                        class="thirdimg"
                        src="../assets/thirdimg.png"
                     ></v-img>
                  </div>
               </v-flex>
               <v-flex class="mt-12" md6>
                  <h1 class="mt-12">Lorem, ipsum.</h1>
                  <p style="width: 350px" class="mt-4">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aperiam impedit possimus omnis animi facere ab quos
                     voluptates neque id sapiente!
                  </p>
               </v-flex>
            </v-layout>
         </v-container>
      </v-container>
      <v-container fluid="">
         <v-layout style="width: 100%; height: 735px; background: yellowgreen">
            <!-- <v-flex>Video Content</v-flex> -->
            <youtube
               width="100%"
               height="100%"
               :video-id="videoId"
               ref="youtube"
               @playing="playing"
            ></youtube>
         </v-layout>
         <div class="mt-12">
            <h1 class="text-center">Our Most Popular Engagement Rings</h1>
            <p
               style="margin: 0 auto; width: 530px"
               class="text-center footer-p"
            >
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Cupiditate optio a, provident, ab dignissimos labore non illum,
               possimus aliquam suscipit qui dolore ea. Architecto sequi
               deleniti animi ipsa vero nemo!
            </p>
         </div>
         <v-layout class="mt-6" justify-center="">
            <v-flex class="footer-text" xs3 md2
               ><v-img
                  src="https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/product/set55/rm6g/red_white_diamond_1.jpg"
               ></v-img>
               <h3 class="text-center">Lorem, ipsum.</h3>
               <h5 class="text-center grey--text mt-4">SHOP NOW</h5>
            </v-flex>
            <v-flex class="footer-text" xs3 md2
               ><v-img
                  src="https://www.brandfield.com/media/catalog/product/cache/image/9df78eab33525d08d6e5fb8d27136e95/s/w/swarovski_attract_round_ring_rose_gold_1.jpg"
               ></v-img>
               <h3 class="text-center">Lorem, ipsum.</h3>
               <h5 class="text-center grey--text mt-4">SHOP NOW</h5>
            </v-flex>
            <v-flex class="footer-text" xs3 md2
               ><v-img
                  src="https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/product/set55/g100515/white_diamond_1.jpg"
               ></v-img>
               <h3 class="text-center">Lorem, ipsum.</h3>
               <h5 class="text-center grey--text mt-4">SHOP NOW</h5>
            </v-flex>
            <v-flex class="footer-text" xs3 md2
               ><v-img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRosTaaWmhBR4e0PsQYISjiIQeKNlPU81GxdoAj88Zf_071yyP1"
               ></v-img>
               <h3 class="text-center">Lorem, ipsum.</h3>
               <h5 class="text-center grey--text mt-4">SHOP NOW</h5>
            </v-flex>
         </v-layout>
         <v-layout class="mt-12 pa-12 ">
            <v-btn
               style="margin: 0 auto; border: 1px solid black"
               class="footer-btn"
               text
               large=""
               >Shop All Engagement Rings</v-btn
            >
         </v-layout>
      </v-container>
   </v-container>
</template>

<script>
export default {
   data() {
      return {
         videoId: "ydyT-Ev3r-Y"
      };
   }
};
</script>

<style lang="scss" scoped></style>
