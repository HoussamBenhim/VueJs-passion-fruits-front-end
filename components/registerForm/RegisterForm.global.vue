<template>
  <div :class="{ hidden: !registerFormIsOpen, 'bg-white': true }">
    <div
      id="loginForm"
      class="w-screen sm:w-96 bg-white md:flex-shrink-0 opacity-100 fixed right-0 h-screen z-50"
    >
      <!-- <div class="hidden md:block h-48 md:h-60 z-0"> -->
      <!-- <img
        class="h-full w-full object-cover w-auto shadow-3xl z-0"
        src="@/assets/images/background-legumes.jpg"
        alt="légumes"
      /> -->
      <!-- </div> -->
      <div class="flex justify-end focus:outline-none m-5">
        <button class="focus:outline-none" @click="toggelRegisterForm">
          <BaseIcon name="x" />
        </button>
      </div>
      <div
        class="mt-0 md:mt-10 z-50 min-h-screen flex items-start justify-center py-0 px-4 sm:px-1"
      >
        <div
          class="py-10 z-50 px-5 max-w-lg w-full space-y-8 h-4/5 bg-white-50 shadow-3xl"
        >
          <div>
            <h2 class="mt-6 text-center text-2xl font-extrabold text-gray-900">
              Créer mon compte
            </h2>
          </div>
          <form class="mt-8" @submit.prevent="register">
            <div class="rounded-sm shadow-sm space-y-3">
              <BaseInput
                id="input-prenom"
                v-model.trim="prenom"
                name="prenom"
                type="text"
                autocomplete="prenom"
                place-holder="Prénom"
                :class="{
                  error: $v.prenom.$error,
                  valid: $v.prenom.$dirty && !$v.prenom.$invalid,
                }"
                @blur-event="$v.prenom.$touch"
                @update:modelValue="prenom = $event"
              />

              <BaseInput
                id="input-name"
                v-model="nom"
                name="name"
                type="text"
                autocomplete="nom"
                place-holder="Nom"
                :class="{
                  error: $v.nom.$error,
                  valid: $v.nom.$dirty && !$v.nom.$invalid,
                }"
                @blur-event="$v.nom.$touch"
                @update:modelValue="nom = $event"
              />

              <BaseInput
                id="input-tel"
                v-model="telephone"
                name="tel"
                type="tel"
                autocomplete="tel"
                place-holder="Téléphone"
                :class="{
                  error: $v.telephone.$error,
                  valid: $v.telephone.$dirty && !$v.telephone.$invalid,
                }"
                @blur-event="$v.telephone.$touch"
                @update:modelValue="telephone = $event"
              />

              <BaseInput
                id="email-address-register-form"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                place-holder="Email"
                :class="{
                  error: $v.email.$error,
                  valid: $v.email.$dirty && !$v.email.$invalid,
                }"
                @blur-event="$v.email.$touch"
                @update:modelValue="email = $event"
              />

              <!-- <div v-if="$v.email.$error">
                <span
                  :class="{ errorMessage: $v.email.required.$invalid }"
                  v-show="$v.email.required.$invalid"
                >
                  veuillez saisir un mail
                </span>

                <div
                  :class="{ errorMessage: $v.email.email.$invalid }"
                  v-show="$v.email.email.$invalid"
                >
                  mail invalid
                </div>
              </div> -->

              <div class="relative">
                <div
                  :class="{ hidden: !show_password_notification }"
                  class="polygone absolute bg-gray-200 left-0 w-72 h-24 z-50 bottom-0 mb-8"
                >
                  <div class="font-bold text-left text-xs px-3 pb-2 pt-2 ml-0">
                    Choisissez un mot de passe sécurisé
                  </div>
                  <div class="flex text-xs text-left px-4">
                    <BaseIcon
                      name="x-circle"
                      :color="isRedOrGreenPassowrdIcon"
                      width="13"
                      height="13"
                    />

                    <div class="px-1">6 caractères minimum</div>
                  </div>
                  <div class="flex text-xs text-left px-4">
                    <BaseIcon
                      name="x-circle"
                      :color="isRedOrGreen2"
                      width="13"
                      height="13"
                    />

                    <div class="px-1">
                      1 chiffre ou un caractère spéciale (!@#$&*,)
                    </div>
                  </div>
                </div>

                <BaseInput
                  id="password-register-form"
                  v-model="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  place-holder="Mot de passe"
                  :class="{
                    error: $v.password.$error,
                    valid: $v.password.$dirty && !$v.password.$invalid,
                  }"
                  @click-event="$v.password.$touch"
                  @update:modelValue="password = $event"
                  @focus-event="showNotification"
                  @focusout-event="showNotification"
                />
              </div>
            </div>

            <!-- <div>{{ $v.$errors }}</div> -->
            <div class="mt-5">
              <BaseButton
                :disabled="$v.invalid"
                name="Créer mon compte"
                type="submit"
              >
                <svg
                  class="h-5 w-5 text-white group-hover:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </BaseButton>
            </div>

            <span v-if="$v.anyError" class="errorMessage"
              >Plese full out the required fields
            </span>
          </form>
          <p class="mt-2 text-center text-sm text-gray-600">
            Déjà inscrit
            <button
              class="font-bold text-gray-900 hover:text-gray-600 hover:underline"
              @click.prevent="toggelLoginForm"
            >
              Se connecter
            </button>
          </p>
        </div>
      </div>
    </div>
    <div
      class="w-full text-white bg-gray-900 opacity-50 md:flex-shrink-0 fixed left-0 h-screen z-40"
      @click.prevent="toggelRegisterForm"
    ></div>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  helpers,
  numeric,
  maxLength,
} from 'vuelidate/lib/validators'
import gsap from 'gsap'
import { mapState } from 'vuex'

const checkPasswordSpecialCaracter = (value) => {
  const regex = new RegExp('(\\W+|[0-9]+)', 'g')
  return !helpers.req(value) || regex.test(value)
}
export default {
  components: {},
  data() {
    return {
      prenom: '',
      nom: '',
      telephone: '',
      email: '',
      password: '',
      show_password_notification: false,
    }
  },
  computed: {
    ...mapState('loginModule', ['registerFormIsOpen']),
    isRedOrGreenPassowrdIcon() {
      return this.password.length === 0
        ? 'red'
        : this.$v.password.minLength
        ? 'green'
        : 'red'
    },
    isRedOrGreen2() {
      return this.password.length === 0
        ? 'red'
        : this.$v.password.checkPasswordSpecialCaracter
        ? 'green'
        : 'red'
    },
  },
  watch: {
    loginFormState() {
      gsap.from('#loginForm', {
        duration: 1,
        x: 200,
        ease: 'power4',
      })
    },
  },

  validations: {
    email: { required, email },
    password: {
      required,
      minLength: minLength(6),
      checkPasswordSpecialCaracter,
    },
    prenom: { required },
    telephone: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(10),
      numeric,
    },
    nom: { required },
  },
  methods: {
    async register() {
      if (this.$v.$invalid) {
        const notification = {
          type: 'error',
          tittle: 'Formulaire invalid!',
          message: 'Veuillez compléter correctement le formulaire',
        }
        this.$store.dispatch('notificationModule/add', notification)
      } else {
        try {
          await this.$store.dispatch('loginModule/registerClient', {
            nom: this.nom,
            prenom: this.prenom,
            telephone: this.telephone,
            email: this.email,
            password: this.password,
          })
          this.toggelRegisterForm()
          this.$router.push({ path: '/fruits' })
        } catch (e) {
          if (e && e.response) {
            this.add_notification_to_user(
              'error',
              'Erreur',
              e.response.data.message
            )
          } else {
            this.add_notification_to_user('error', 'Erreur', e.message)
          }
        }
      }
    },
    add_notification_to_user(type, tittle, message) {
      const notification = {
        type,
        tittle,
        message,
      }
      this.$store.dispatch('notificationModule/add', notification)
    },
    toggelRegisterForm() {
      this.$store.dispatch('loginModule/setRegisterFormState')
    },
    toggelLoginForm() {
      this.$store.dispatch('loginModule/setRegisterFormState').then(() => {
        this.$store.dispatch('loginModule/setLoginFormState')
      })
    },
    showNotification() {
      this.show_password_notification = !this.show_password_notification
    },
  },
}
</script>

<style scoped>
.polygone {
  clip-path: polygon(100% 0, 100% 91%, 20% 91%, 16% 100%, 13% 91%, 0 91%, 0 0);
}
</style>
