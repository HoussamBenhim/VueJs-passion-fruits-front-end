<template>
  <div class="block">
    <div class="flex flex-col">
      <HeroVideo
        url-video="https://static.frichti.co/assets/videos/hypermarket.mp4"
        titre="Des plats délicieux"
        soustitre="en direct de nos cuisine."
        shadow-color="3px 3px #fff190"
      />

      <MainLyout class="relative" :dataObject="dataObject" />
    </div>
  </div>
</template>

<script>
import mainLyout from '@/components/mainLyout/MainLyout.vue'
export default {
  layout: 'commonLayouts',

  components: {
    mainLyout,
  },
  data() {
    return {
      dataObject: {
        titre: 'Des Fruits Frais et Bio',
        description: 'Toujours de saison, en direct du producteur.',
        ListCategories: [
          {
            id: 1,
            categoryName: 'Fruits à noyau',
            categoryDescription: 'Les fruits à noyau',
            categoryProductList: [
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '2',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'limon.jpg',
              },
              {
                id: '3',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'Fraises250g.jpg',
              },
              {
                id: '4',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'Kiwi piwi',
                message: '1 kilo pour 3 euros',
                price: 4,
                image: 'KiwiJaunex1_1.jpg',
              },
              {
                id: '5',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'fruit de la passion',
                message: '1 kilo pour 3 euros',
                price: 5,
                image: 'Fruitdelapassion.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
            ],
          },
          {
            id: 2,
            categoryName: 'Fruits à pépin',
            categoryDescription: 'Les fruits à noyau',
            categoryProductList: [
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '2',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'limon.jpg',
              },
              {
                id: '3',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'Fraises250g.jpg',
              },
              {
                id: '4',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'Kiwi piwi',
                message: '1 kilo pour 3 euros',
                price: 4,
                image: 'KiwiJaunex1_1.jpg',
              },
              {
                id: '5',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'fruit de la passion',
                message: '1 kilo pour 3 euros',
                price: 5,
                image: 'Fruitdelapassion.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
            ],
          },

          {
            id: 3,
            categoryName: 'Fruits à coque',
            categoryDescription: 'Les fruits à noyau',
            categoryProductList: [
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '2',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'limon.jpg',
              },
              {
                id: '3',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'Fraises250g.jpg',
              },
              {
                id: '4',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'Kiwi piwi',
                message: '1 kilo pour 3 euros',
                price: 4,
                image: 'KiwiJaunex1_1.jpg',
              },
              {
                id: '5',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'fruit de la passion',
                message: '1 kilo pour 3 euros',
                price: 5,
                image: 'Fruitdelapassion.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
              {
                id: '1',
                desciption: {
                  firstComment: 'Tendres, sucrées ',
                  secondComment: 'légèrement acidulées',
                  thirdComment: 'se conserve au frigo 5 jours',
                },
                tittle: 'framboise acidulés',
                message: '1 kilo pour 3 euros',
                price: 3,
                image: 'framboises_fp_1.jpg',
              },
            ],
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
