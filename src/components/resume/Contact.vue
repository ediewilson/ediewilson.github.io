<template>
    <div class="template">
        <img class="profile-pic" src="../../assets/img/headshot.jpg"/>
        <h5 class="name">Elizabeth (Edie) Wilson</h5>
        <div class="contact-card">
            <div class="display"><i class="fas fa-envelope-square contact"></i><p>ediewilson13@gmail.com</p></div>
            <div class="display"><i class="fas fa-home contact"></i><p>Marina District<br>San Francisco, CA, 94123</p></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    
    data() {
        return {
            school: "Dartmouth College",
            graduationYear: 2022,
            degree: "BA - Computer Science major, Environmental Science Minor",
            statement: "Fullstack software engineer at Pinterest.",
        }
    },
}
</script>
<style lang="scss" scoped>
.contact-card {
    padding-left: 20%;
    padding-right: 20%;
    min-height: 170px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
}

.display {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 195px;
    background-color: rgb(224,224,224);
    border-radius: 10%;
    margin: 10px;
    transition: all 0.3s;

    &:hover {
        background-color: rgb(240, 240, 240);
    }
}

.contact {
    font-size: 3.2em;
    padding-bottom: 8px;
    transition: font-size 0.3s ease-in;
}

.contact:hover {
    font-size: 3.5em;
}

.profile-pic {
  max-height: 175px;
  border-radius: 100%;
  padding: 0 12px 12px 12px;
}

.name {
    margin: 8px, 0, 25px, 0;
}
</style>
