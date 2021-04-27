<template>
  <div>
    <button
      class="mb-3 inline-flex items-center justify-center font-sm text-black focus:outline-none left-0 flex items-center"
      aria-expanded="false"
      @click.prevent="$emit('switch_icon')"
    >
      <svg
        width="45"
        height="45"
        viewBox="0 0 250 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="undraw_Preferences_re_49in 1">
          <path
            id="bare3"
            d="M224.622 160.073H67.3607C65.334 160.071 63.391 159.264 61.9586 157.83C60.5263 156.396 59.7218 154.452 59.7218 152.425C59.7218 150.399 60.5263 148.455 61.9586 147.021C63.391 145.587 65.334 144.78 67.3607 144.778H224.622C226.648 144.78 228.591 145.587 230.024 147.021C231.456 148.455 232.261 150.399 232.261 152.425C232.261 154.452 231.456 156.396 230.024 157.83C228.591 159.264 226.648 160.071 224.622 160.073Z"
            fill="#100101"
          />
          <path
            id="bare2"
            :class="{ hidden: burgerStatus }"
            d="M224.622 224.123H67.3607C65.3324 224.123 63.3872 223.317 61.953 221.883C60.5187 220.449 59.713 218.503 59.713 216.475C59.713 214.447 60.5187 212.501 61.953 211.067C63.3872 209.633 65.3324 208.827 67.3607 208.827H224.622C226.648 208.83 228.591 209.636 230.024 211.07C231.456 212.504 232.261 214.448 232.261 216.475C232.261 218.502 231.456 220.446 230.024 221.88C228.591 223.314 226.648 224.12 224.622 224.123Z"
            fill="#100101"
          />
          <path
            id="bare1"
            d="M224.622 288.172H67.3607C65.3324 288.172 63.3872 287.367 61.953 285.932C60.5187 284.498 59.713 282.553 59.713 280.525C59.713 278.496 60.5187 276.551 61.953 275.117C63.3872 273.683 65.3324 272.877 67.3607 272.877H224.622C226.648 272.879 228.591 273.686 230.024 275.12C231.456 276.554 232.261 278.498 232.261 280.525C232.261 282.551 231.456 284.495 230.024 285.929C228.591 287.363 226.648 288.17 224.622 288.172Z"
            fill="#100101"
          />
        </g>
      </svg>
    </button>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  props: {
    burgerStatus: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  watch: {
    burgerStatus() {
      if (this.burgerStatus) {
        const tl = gsap.timeline()
        tl.to('#bare1', {
          duration: 0.1,
          ease: 'power1',
          rotate: -50,
        })
        tl.to(
          '#bare3',
          {
            duration: 0.1,
            ease: 'power1',
            rotate: 45,
          },
          '<'
        )
      } else {
        const tl2 = gsap.timeline()
        tl2.fromTo(
          '#bare1',
          {
            rotate: -45,
            duration: 0,
            ease: 'power1',
          },
          {
            rotate: 0,
          }
        )
        tl2.fromTo(
          '#bare3',
          {
            rotate: 45,
            duration: 0,
            ease: 'power1',
          },
          {
            rotate: 0,
          },
          '<'
        )
      }
    },
  },
}
</script>
