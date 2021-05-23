<template>
  <div
    :class="{
      hidden: !loginFormState,
      ' flex flex-row inset-0 overflow-hidden fixed z-50': true,
    }"
  >
    <div
      class="w-full text-white bg-gray-900 opacity-50 md:flex-shrink-0 fixed left-0 h-screen z-40"
      @click.prevent="toggelLoginForm"
    ></div>

    <div
      id="loginForm"
      class="w-screen sm:w-96 bg-white md:flex-shrink-0 opacity-100 fixed right-0 h-screen z-50"
    >
      <div
        id="close-button"
        class="w-9 pl-1 pt-1 focus:outline-none border-2 border-gray-200 rounded-full shadow-xl mt-5 ml-5"
      >
        <button class="focus:outline-none" @click="toggelLoginForm">
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
              Se connecter
            </h2>
          </div>
          <form class="mt-8 space-y-6" @submit.prevent="login">
            <div class="rounded-sm shadow-sm -space-y-px">
              <div class="mb-5">
                <BaseInput
                  id="email-address-login-form"
                  v-model="email"
                  :model-value="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  place-holder="Mon E-mail"
                  :class="{
                    error: $v.email.$error,
                    valid: $v.email.$dirty && !$v.email.$invalid,
                  }"
                  @blur-event="$v.email.$touch"
                  @update:modelValue="email = $event"
                />
              </div>

              <div v-if="$v.email.$error">
                <span
                  v-show="$v.email.required.$invalid"
                  :class="{ errorMessage: $v.email.required.$invalid }"
                >
                  veuillez saisir un mail
                </span>

                <div
                  v-show="$v.email.email.$invalid"
                  :class="{ errorMessage: $v.email.email.$invalid }"
                >
                  mail invalid
                </div>
              </div>

              <BaseInput
                id="password"
                v-model="password"
                :model-value="password"
                name="password"
                type="password"
                autocomplete="current-password"
                place-holder="Mon mot de passe"
                :class="{
                  error: $v.password.$error,
                  valid: $v.password.$dirty && !$v.password.$invalid,
                }"
                @blur-event="$v.password.$touch"
                @update:modelValue="password = $event"
              />
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div class="text-sm">
                <a
                  href="#"
                  class="text-xs font-bold text-gray-900 hover:text-gray-600 hover:underline"
                >
                  Mot de passe oublié?
                </a>
              </div>
            </div>

            <BaseButton
              :disabled="$v.invalid"
              name="se connecter"
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
            <span v-if="$v.anyError" class="errorMessage"
              >Plese full out the required fields
            </span>
          </form>
          <p class="mt-2 text-center text-sm text-gray-600">
            Pas encore inscrit?
            <button
              class="font-bold text-gray-900 hover:text-gray-600 hover:underline"
              @click.prevent="toggelRegisterForm"
            >
              Créez un compte
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import gsap from 'gsap'
import { mapState } from 'vuex'
export default {
  components: {},
  data() {
    return {
      email: '',
      password: '',
    }
  },
  validations: {
    email: { required, email },
    password: { required },
  },
  computed: {
    ...mapState({
      loginFormState: (state) => state.loginModule.loginFormIsOppen,
    }),
  },
  watch: {
    loginFormState() {
      gsap.fromTo(
        '#loginForm',
        {
          x: 50,
        },
        {
          x: 0,
          ease: 'power4',
          duration: 1,
        }
      )
    },
  },
  methods: {
    async login() {
      if (this.$v.$invalid) {
        const notification = {
          type: 'error',
          tittle: 'Formulaire invalid!',
          message: 'Veuillez compléter correctement le formulaire',
        }
        this.$store.dispatch('notificationModule/add', notification)
      } else {
        try {
          await this.$store.dispatch('loginModule/logClient', {
            email: this.email,
            password: this.password,
          })
          this.email = ''
          this.password = ''
          this.toggelLoginForm()
        } catch (error) {
          //   console.log(error)
        }
      }
    },
    toggelLoginForm() {
      this.$store.dispatch('loginModule/setLoginFormState')
    },
    toggelRegisterForm() {
      this.$store.dispatch('loginModule/setRegisterFormState').then(() => {
        this.$store.dispatch('loginModule/setLoginFormState')
      })
    },
  },
}
</script>

<style scoped></style>
