<template>
  <div class="flex flex-col">
    <LoginForm />
    <RegisterForm />
    <Navbar />
    <DropdownMenu />
    <NotificationContainer />
    <div class="sm:mt-40">
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  components: {},

  head() {
    return {
      titleTemplate: 'LOGO - Livraison 7J/7 - Fruits et Légumes de saison / %s',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Pour faire vos courses de fruits et légumes et préparer vos plats à la maison sans se ruiner, commandez LOGO dès maintenant.Des produits frais, BIO,  et de saison à de petits prix. C'est LOGO! Plus de 300 références. Précommander maintenant. Fruits & légumes. Livraison 7j/7. ",
        },
      ],
    }
  },
}
</script>
<style></style>
