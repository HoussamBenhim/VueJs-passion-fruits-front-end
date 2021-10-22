<template>
  <div
    :class="{
      hidden: !statusAddressChangeLog,
    }"
  >
    <div
      id="panierMerp"
      class="top-0 bottom-0 right-0 overflow-y-scroll fixed bg-white z-50 w-full sm:w-96 h-full"
    >
      <BaseCloseButton @click-event="closeAddressChangeLog" />
      <div class="py-5">
        <p class="text-lg font-serif font-semibold text-center tracking-wider">
          Adresse de Livraison
        </p>
      </div>
      <div class="w-10/12 mx-auto">
        <div class="p-2 flex flex-row h-16 border-2 shadow-lg border-black">
          <BaseIcon
            name="map-pin"
            width="18"
            height="18"
            class="mr-2 flex flex-col place-content-center"
          />
          <BaseInput
            id="adressLivraison"
            place-holder="Adresse de livraison"
            type="text"
            :model-value="typedAdresse"
            @update:modelValue="typedAdresse = $event"
            @keyup-event="filtreAddress"
          />
        </div>
        <div class="relative">
          <div class="w-full absolute top-0 bg-white shadow-lg">
            <div v-if="typedAdresse && typedAdresse.length > 0">
              <div
                v-for="address in addressArray"
                :key="address"
                class="text-xs font-serif font-semibold hover:bg-gray-100 h-10 text-center py-2"
                :value="address"
                @click="chooseAddress($event.target)"
              >
                {{ address }}
              </div>
            </div>
          </div>
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
                getDeliveryAddress.deliveryIndications.length > 0
                  ? getDeliveryAddress.deliveryIndications
                  : ' Nom de l\'entreprise, digicode, interphone, acceuil, étage ....'
              "
              class="w-full font-medium border border-gray-400 p-4"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div class="mt-20 w-full">
          <BaseButton type="submit" name="valider" @click-event="addAddress" />
        </div>
      </div>
    </div>
    <div
      class="hidden sm:flex inset-0 w-0 sm:w-full text-white bg-gray-900 opacity-50 md:flex-shrink-0 fixed left-0 h-screen z-40"
      @click="closeAddressChangeLog"
    ></div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import adressAPI from '@/services/adresseAPI.js'
export default {
  data() {
    return {
      typedAdresse: '',
      addressArray: [],
      deliveryIndications: '',
      eanableSubmit: false,
    }
  },

  computed: {
    ...mapState({
      statusAddressChangeLog: (state) =>
        state.panierModule.adressChangeLogState,
    }),
    ...mapGetters('panierModule', ['getDeliveryAddress']),
  },

  methods: {
    ...mapActions('panierModule', ['closeAddressChangeLog', 'setAddress']),
    addAddress() {
      if (this.typedAdresse.length > 0 && this.eanableSubmit) {
        this.setAddress({
          address: this.typedAdresse,
          deliveryIndications: this.deliveryIndications,
        })
        this.deliveryIndications = ''
        this.closeAddressChangeLog()
      }
    },
    addBorder() {
      this.borderStatus = true
    },
    removeBorder() {
      this.borderStatus = false
    },
    filtreAddress() {
      if (this.typedAdresse.length < 2) {
        return []
      }
      this.eanableSubmit = false
      this.fetchData()
    },
    async fetchData() {
      if (this.typedAdresse.length > 0) {
        const returnedAddresses = await adressAPI.getAdress(this.typedAdresse)
        this.addressArray = returnedAddresses
      }
    },
    chooseAddress(choice) {
      this.eanableSubmit = true
      this.typedAdresse = choice.innerHTML.trim()
      this.addressArray = []
    },
  },
}
</script>

<style lang="scss" scoped></style>
