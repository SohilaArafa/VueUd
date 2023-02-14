<template>
    <li>
        <h2> {{friends.name}} </h2>
        <button>Show Details</button>
        <ul>
            <li><strong>Phone:  </strong> {{friends.phone}} </li>
            <li><strong>email:  </strong> {{friends.email}} </li>

        </ul>
    </li>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>