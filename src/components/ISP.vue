
<template>
  <div class="body">
    <h1>Independent Study</h1>
    <h3>History 097 - Summer 2021 - Dartmouth College</h3>

    <p class="course desc">
      As the world around us becomes increasingly digital, the importance of studying digital humanities grows. In the Dartmouth Digital History Initiative, research assistants helped to tag and link data entities from transcripts of oral histories, and in this course, we will be developing a data visualization tool to help people studying these oral histories understand the timeline of events and dates mentioned in interviews. Throughout the course and development process, we will reflect on bias in digital humanities, the importance and unique nature of oral histories, and analyze how these biases and limited access in digital humanities needs to drive developement to make them more accessible to a wider audience. 
    </p>
    <p class="desc">
      In place of a class this summer, I designed an independent study within the history department at Dartmouth in order to explore the digital humanities and oral histories in depth, as well as design <a href="https://ddhi-timelines.surge.sh/">my own digital humanities tool</a> for the Dartmouth Digital History Initiative (see more about that <a href="https://ddhi.dartmouth.edu/">here</a> or in the resume tab). 
    </p>
    <p class="desc">
      One of the deliverables of this class is a weekly reflection journal, where I reflect on the development process and the weekly readings. This journal, as well as other course deliverables, will be here, updated weekly. The entire syllabus for the class can be found <a href="https://docs.google.com/spreadsheets/d/1eOdC9fuAaRXj6EvKjR2AT12H0LiLUVzo14eYDXcTws8/edit?usp=sharing">here</a>.
    </p>

    <Journal v-for="article in articles" :key="article.title" :article="article" />
  </div>
</template>

<script>

import Journal from './ISP/Journal'
export default {
  name: 'ISP',
  data() {
    return {
      articles: [
        {
          title: 'Week 1',
          subtitle: 'Framing Digital Humanities and Oral History',
          text: [
            'This independent study explored how digital tools can support oral history research while preserving the ambiguity and context that make oral histories valuable.'
          ],
          sources: ['Course syllabus and Dartmouth Digital History Initiative materials'],
        },
      ],
    };
  },
  components: {
      'Journal': Journal,
  },
}
</script>
<style lang="scss" scoped>
h1 {
  margin-top: 12px;
}

.bottom-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 12px 12px 12px;
  padding-top: 8px;
  background-color: rgb(245, 245, 245);

}
.course {
  font-style: italic;
}

.desc {
  padding-left: 10%;
  padding-right: 10%;
}
</style>
