<template>
  <li>
    <h2>{{ name }}  {{friendIsFavourite === "1" ? '(Favourite)'  : ''}} </h2>

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
      type : String ,
      required : false ,
      default : '0',
      validator : (value) => {
        return value === '1' || value === '0';
      }
    }
  } ,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
      friendIsFavourite : this.isFavourite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavs() {
      if(this.friendIsFavourite === "1") {
        this.friendIsFavourite = "0";
      } else {
        this.friendIsFavourite = "1";
      }
    }
  }
};
</script>