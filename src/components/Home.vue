<template>
  <div class="home">
    <div class="header"></div>
    <h3>Personal Profile Statement (not exactly the resumé kind)</h3>
    <ul>
      <li>{{ this.intro }}</li>
      <li><i class="fas fa-leaf spacer"></i></li>
      <li>{{ this.blog }}</li>
      <li><i class="fas fa-leaf spacer"></i></li>
      <li>{{ this.blogTwo }}</li>
      <li><i class="fas fa-leaf spacer"></i></li>
      <li>{{ this.blogThree }}</li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      intro: 'My name is Elizabeth Derry Wilson, but everyone calls me Edie (pronounced E-Dee), and I graduated from Dartmouth College in 2022, where I majored in computer science and minored in environmental science. Though I risk sounding like a complete nerd (spoiler alert... I 100% am), or maybe just seeming like I\'m trying a little too hard to impress prospective employers (I virtually pinky promise I\'m being genuine), I loved school, computer science, and every class that I had the privilege of taking as a part of my liberal arts education.',
      blog: 'In March of 2019, I learned how to program. I was a likely engineering major at Dartmouth College, following closely in the footsteps of my father, who had gone through college to become an industrial engineer. However, in my first year as an engineer, nothing really excited me. I definitely don\'t remember the first thing that I learned in introductory physics, but I very clearly remember my first programming class. Print and if/else statements. As clear as day, I remember that first time feeling of watching my terminal print out the numbers one through ten, followed by the odd numbers in the same range. Something that I now know is so simple absolutely electrified me with excitement.',
      blogTwo: 'Long story short, I decided that even if I had to be the only sophomore computer science major who didn\'t really know how to code yet, I would be alright. What I lacked in previous knowledge, I quickly made up for with my newly discovered passion for programming. Turns out I made the right decision; I\'ve had (in my completely biased opinion) some of the coolest internships in the world, and had the chance to work on a bunch of other awesome projects. So here, scattered throughout this site, are some of the projects I\'ve worked on, more about me, my resumé, and how to reach out to me.',
      blogThree: 'When I\'m not coding, I love to make art, listen to music, live sustainably, and play with my dog. I ran the 400m at a division 1 NCAA school, and love to sail and rollerblade. I\'m passionate about astrology, snd to an extent that some may consider embarrassing, am a die hard Star Wars fan. I have recently developed a (mild) chess addiction. Most of all, I love to make things happen, create things that excite me, and watch my passions and dreams become reality in my local development environment. I hope you find something here that sparks your interest!',
    }
  }
}


  window.watsonAssistantChatOptions = {
      integrationID: "ad674d02-614b-4a8d-ad12-a8d24f4812cf", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "a235c2ae-c072-4d92-89a8-9561fbcf58c7", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });

</script>
<style scoped>
  .profile-pic {
    max-height: 250px;
    border-radius: 100%;
    padding: 12px;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    padding-left: 10%;
    padding-right: 10%;
  }

  .spacer {
    font-size: 10px;
  }

  .home {
    padding-bottom: 32px;
  }
  
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/img/sunset.png');
    background-size: cover;
    height: 300px;
  } 

  h1 {
    position: relative;
    top: -45px;
  }
  h3 {
    padding-top: 2.5%;
  }
</style>
