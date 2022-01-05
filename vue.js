  Vue.component('fiche-produit', {
    template: `
      <div class="col-3">
        <p class="jumbotron"> {{ nom }} <br>
             <button v-on:click="passer_commande(nom)" v-if="role == 'commande'">Commander !</button>
        </p>
      </div>
      `,
    props: ['nom', 'role'],
    methods: {
        passer_commande: function(produit){
            this.$emit('commande-passee', produit)
        }
    }
  });
  var app = new Vue({
        el: "#app",
        data: {
            user: "Paule",
            produits: ["Pizza", "Hamburger", "Wrap", "Tacos"],
            commandes: [],
            affichage: "display-1"
        },
        methods:{
            commander: function(produit){
                this.commandes.push(produit);
            }
        }
    })   
    