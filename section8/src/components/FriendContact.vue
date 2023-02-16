<template>
  <li>
    <h2>{{ name }}  {{isFavourite? '(Favourite)'  : ''}} </h2>

    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavs">{{ detailsAreVisible ? 'Hide' : 'Show' }} Favourites</button>

    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  <button @click="$emit('delete-contact')" >Delete Contact</button>
  </li>
</template>

<script>
export default {
  props : {
    id : {
      type : String,
      required : true
    } ,
    name : {
      type : String ,
      required : true
    } ,
    phoneNumber : {
      type : String ,
      required : true
    } ,
    emailAddress : {
      type : String ,
      required : true
    },
    isFavourite : {
      type : Boolean ,
      required : false ,
      default : false
    }
  } ,
  emits : ['toggle-favourite' , 'delete-contact'] ,
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavs() {
      this.$emit('toggle-favourite',this.id)
    }
  }
};
</script>