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
        ListFruis: [
          {
            id: 1,
            categoryFruit: 'Fruits à noyau',
            categoryDescription: 'Les fruits à noyau',
            desciptionFruit: [
              'Tendres, sucrées et légèrement acidulées',
              'Agriculture raisonée',
              'Se concerve 3 jours au frigo',
            ],
            tittle: 'Barquette Mirabelle - 350g',
            message: '350g pour 4.5€',
            price: '3€50',
            image: 'cherry-plum-5366060_640.jpg',
            origine: 'Portugal / Espagne',
            description:
              "De belles myrtilles savoureuses, parce que sinon c'est pas vraiment l'été !",
            conservation:
              'Ce produit se conserve au réfrigérateur. Voir date limite de conservation sur l’emballage.',
            culture: 'Agriculture raisonnée',
            valeurNutri: '48 kcal pour 100g',
          },
          {
            id: 2,
            categoryFruit: 'Fruits à noyau',
            categoryDescription: 'Les fruits à noyau',
            desciptionFruit: [
              'Tendres, sucrées et légèrement acidulées',
              'Agriculture raisonée',
              'Se concerve 3 jours au frigo',
            ],
            tittle: 'Barquette de cerise - Gard',
            message: '500g',
            price: '3€90',
            image: 'cherry-3074284_640.jpg',
            origine: 'Portugal / Espagne',
            description:
              "De belles myrtilles savoureuses, parce que sinon c'est pas vraiment l'été !",
            conservation:
              'Ce produit se conserve au réfrigérateur. Voir date limite de conservation sur l’emballage.',
            culture: 'Agriculture raisonnée',
            valeurNutri: '48 kcal pour 100g',
          },
          {
            id: 3,
            categoryFruit: 'Fruits rouges',
            categoryDescription: 'Les fruits rouges',
            desciptionFruit: [
              'Très sucrées et aromatiques',
              'se conserve trois jours à température ambiante',
            ],
            tittle: 'Fraises Mariguette - 250g',
            message: '250g',
            price: '3€70',
            image: 'Fraises250g_2_9f3139dc-8d15-4fac-8e06-c55db28a0aaa.jpg',
            origine: 'Portugal / Espagne',
            description:
              "De belles myrtilles savoureuses, parce que sinon c'est pas vraiment l'été !",
            conservation:
              'Ce produit se conserve au réfrigérateur. Voir date limite de conservation sur l’emballage.',
            culture: 'Agriculture raisonnée',
            valeurNutri: '48 kcal pour 100g',
          },
          {
            id: 4,
            categoryFruit: 'Fruits rouges',
            categoryDescription: 'Les fruits rouges',
            desciptionFruit: [
              'Très sucrées et aromatiques',
              'se conserve trois jours à température ambiante',
            ],
            tittle: 'Fraises rondes Dream - 400g',
            message: '400g',
            price: '6€70',
            image: 'Fraises250GV2_1.jpg',
            origine: 'Portugal / Espagne',
            description:
              "De belles myrtilles savoureuses, parce que sinon c'est pas vraiment l'été !",
            conservation:
              'Ce produit se conserve au réfrigérateur. Voir date limite de conservation sur l’emballage.',
            culture: 'Agriculture raisonnée',
            valeurNutri: '48 kcal pour 100g',
          },
          {
            id: 5,
            categoryFruit: 'Fruits rouges',
            categoryDescription: 'Les fruits rouges',
            desciptionFruit: [
              'Tendres, sucrées et légèrement acidulées',
              'Agriculture raisonée',
              'sSe concerve 3 jours au frigo',
            ],
            tittle: 'Barquette de framboises - 125g',
            message: '125g',
            price: '3€30',
            image: 'framboises_fp_1.jpg',
            origine: 'Portugal / Espagne',
            description:
              "De belles myrtilles savoureuses, parce que sinon c'est pas vraiment l'été !",
            conservation:
              'Ce produit se conserve au réfrigérateur. Voir date limite de conservation sur l’emballage.',
            culture: 'Agriculture raisonnée',
            valeurNutri: '48 kcal pour 100g',
          },
          {
            id: 6,
            categoryFruit: 'Fruits rouges',
            categoryDescription: 'Les fruits rouges',
            desciptionFruit: [
              'Tendres, sucrées et légèrement acidulées',
              'Agriculture raisonée',
              'sSe concerve 3 jours au frigo',
            ],
            tittle: 'Myrtilles - 125g',
            message: '125g',
            price: '2€90',
            image: 'Petit-pot-de-myrtilles.jpg',
            origine: 'Portugal / Espagne',
            description:
              "De belles myrtilles savoureuses, parce que sinon c'est pas vraiment l'été !",
            conservation:
              'Ce produit se conserve au réfrigérateur. Voir date limite de conservation sur l’emballage.',
            culture: 'Agriculture raisonnée',
            valeurNutri: '48 kcal pour 100g',
          },
          {
            id: 7,
            categoryFruit: 'Fruits à noyau',
            categoryDescription: 'Fruits à noyau',
            desciptionFruit: [
              'Tendres, sucrées et légèrement acidulées',
              'Agriculture raisonée',
              'sSe concerve 3 jours au frigo',
            ],
            tittle: 'Mangue - 125g',
            message: '125g',
            price: '2€90',
            image: 'Mangue_1_ade060ad-07e8-450d-8e25-2f85b8323b69.jpg',
            origine: 'Portugal / Espagne',
            description:
              "De belles myrtilles savoureuses, parce que sinon c'est pas vraiment l'été !",
            conservation:
              'Ce produit se conserve au réfrigérateur. Voir date limite de conservation sur l’emballage.',
            culture: 'Agriculture raisonnée',
            valeurNutri: '48 kcal pour 100g',
          },
          {
            id: 8,
            categoryFruit: 'Fruits à noyau',
            categoryDescription: 'Fruits à noyau',
            desciptionFruit: [
              'Tendres, sucrées et légèrement acidulées',
              'Agriculture raisonée',
              'sSe concerve 3 jours au frigo',
            ],
            tittle: 'Nectarine - 125g',
            message: '125g',
            price: '2€90',
            image: 'fruit-3533619_640.jpg',
            origine: 'Portugal / Espagne',
            description:
              "De belles myrtilles savoureuses, parce que sinon c'est pas vraiment l'été !",
            conservation:
              'Ce produit se conserve au réfrigérateur. Voir date limite de conservation sur l’emballage.',
            culture: 'Agriculture raisonnée',
            valeurNutri: '48 kcal pour 100g',
          },
          {
            id: 9,
            categoryFruit: 'Fruits à noyau',
            categoryDescription: 'Fruits à noyau',
            desciptionFruit: [
              'Tendres, sucrées et légèrement acidulées',
              'Agriculture raisonée',
              'sSe concerve 3 jours au frigo',
            ],
            tittle: 'Prunes - 125g',
            message: '125g',
            price: '2€90',
            image: 'plums-2724160_640.jpg',
            origine: 'Portugal / Espagne',
            description:
              "De belles myrtilles savoureuses, parce que sinon c'est pas vraiment l'été !",
            conservation:
              'Ce produit se conserve au réfrigérateur. Voir date limite de conservation sur l’emballage.',
            culture: 'Agriculture raisonnée',
            valeurNutri: '48 kcal pour 100g',
          },
          {
            id: 10,
            categoryFruit: 'Fruits à noyau',
            categoryDescription: 'Fruits à noyau',
            desciptionFruit: [
              'Tendres, sucrées et légèrement acidulées',
              'Agriculture raisonée',
              'sSe concerve 3 jours au frigo',
            ],
            tittle: 'Pêche - 125g',
            message: '125g',
            price: '2€90',
            image: 'peche-2563403_640.jpg',
            origine: 'Portugal / Espagne',
            description:
              "De belles myrtilles savoureuses, parce que sinon c'est pas vraiment l'été !",
            conservation:
              'Ce produit se conserve au réfrigérateur. Voir date limite de conservation sur l’emballage.',
            culture: 'Agriculture raisonnée',
            valeurNutri: '48 kcal pour 100g',
          },
          {
            id: 11,
            categoryFruit: 'Fruits à pépins',
            categoryDescription: 'Fruits à pépins',
            desciptionFruit: [
              'Tendres, sucrées et légèrement acidulées',
              'Agriculture raisonée',
              'sSe concerve 3 jours au frigo',
            ],
            tittle: 'Poire - 125g',
            message: '125g',
            price: '2€90',
            image: 'pear-1620467_640.jpg',
            origine: 'Portugal / Espagne',
            description:
              "De belles myrtilles savoureuses, parce que sinon c'est pas vraiment l'été !",
            conservation:
              'Ce produit se conserve au réfrigérateur. Voir date limite de conservation sur l’emballage.',
            culture: 'Agriculture raisonnée',
            valeurNutri: '48 kcal pour 100g',
          },
          {
            id: 12,
            categoryFruit: 'Fruits à pépins',
            categoryDescription: 'Fruits à pépins',
            desciptionFruit: [
              'Tendres, sucrées et légèrement acidulées',
              'Agriculture raisonée',
              'sSe concerve 3 jours au frigo',
            ],
            tittle: 'Pomme - 125g',
            message: '125g',
            price: '4€90',
            image: 'apples-490474_640.jpg',
            origine: 'Portugal / Espagne',
            description:
              "De belles myrtilles savoureuses, parce que sinon c'est pas vraiment l'été !",
            conservation:
              'Ce produit se conserve au réfrigérateur. Voir date limite de conservation sur l’emballage.',
            culture: 'Agriculture raisonnée',
            valeurNutri: '48 kcal pour 100g',
          },
          {
            id: 13,
            categoryFruit: 'Fruits à pépins',
            categoryDescription: 'Fruits à pépins',
            desciptionFruit: [
              'Tendres, sucrées et légèrement acidulées',
              'Agriculture raisonée',
              'sSe concerve 3 jours au frigo',
            ],
            tittle: 'Raisin - 125g',
            message: '125g',
            price: '4€90',
            image: 'grapes-1283162_640.jpg',
            origine: 'Portugal / Espagne',
            description:
              "De belles myrtilles savoureuses, parce que sinon c'est pas vraiment l'été !",
            conservation:
              'Ce produit se conserve au réfrigérateur. Voir date limite de conservation sur l’emballage.',
            culture: 'Agriculture raisonnée',
            valeurNutri: '48 kcal pour 100g',
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
