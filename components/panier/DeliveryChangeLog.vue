<template>
  <div
    :class="{
      hidden: !deliveryInfosLog,
    }"
  >
    <div
      id="panierMerp"
      class="border border-gray-200 top-0 bottom-0 right-0 overflow-y-scroll fixed bg-white z-50 w-full sm:w-96 h-full"
    >
      <BaseCloseButton @click-event="closeDeliveryLog" />

      <div class="w-10/12 mx-auto">
        <div class="relative">
          <!-- <div>Indicateur au livreur</div> -->
          <div class="py-10 z-10">
            <p
              class="text-lg font-serif font-semibold text-center tracking-wider"
            >
              Indications au livreur
            </p>
          </div>
          <div class="z-10">
            <textarea
              v-model="deliveryIndications"
              name="textArea"
              :placeholder="
                getDeliveryAddress.deliveryIndications
                  ? getDeliveryAddress.deliveryIndications
                  : 'Nom de l\'entreprise, digicode, interphone, acceuil, étage ....'
              "
              class="w-full font-medium border border-gray-400 p-4"
              rows="5"
            ></textarea>
          </div>
        </div>

        <div class="mt-20 w-full">
          <BaseButton
            type="submit"
            name="valider"
            @click-event="addIndication(deliveryIndications)"
          />
        </div>
      </div>
    </div>
    <div
      class="hidden sm:flex inset-0 w-0 sm:w-full text-white bg-gray-900 opacity-50 md:flex-shrink-0 fixed left-0 h-screen z-40"
      @click="closeDeliveryLog"
    ></div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      deliveryIndications: '',
    }
  },
  computed: {
    ...mapState({
      deliveryInfosLog: (state) => state.panierModule.deliveryInfosLog,
    }),
    ...mapGetters('panierModule', ['getDeliveryAddress']),
  },
  methods: {
    ...mapActions('panierModule', ['closeDeliveryLog', 'addIndications']),
    addIndication() {
      if (this.deliveryIndications.length > 0) {
        this.addIndications(this.deliveryIndications)
        this.deliveryIndications = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
