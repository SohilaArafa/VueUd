<template>
  <li>
    <h2>{{ name }}  {{friendIsFavourite? '(Favourite)'  : ''}} </h2>

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
  </li>
</template>

<script>
export default {
  props : {
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
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavourite : this.isFavourite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavs() {
      this.friendIsFavourite = !this.friendIsFavourite;
    }
  }
};
</script>