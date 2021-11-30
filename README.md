# vue-news

A VueJS application that shows worldwide news in one place via [NewsAPI](https://newsapi.org/). 

This application is built using Vue 2, Vuex, VueRouter, axios, and Vuetify as UI framework.

It consists of 2 pages:

- a Home page with a list of latest headline news
- a Headline page to view each headline

On Home page, the user will also be able to: 

- search headlines by title
- filter out headlines by source
- see which article they have already read
- update title of each headline

### Note:
The app is deployed [here](https://vue-news-a4efc.firebaseapp.com/) on firebase. However, due to changes in [pricing model](https://newsapi.org/pricing) by **NewsAPI**, requests from the browser are not allowed on the Developer plan, except from localhost. Hence, the hosted site would result in Error 426, but runs and functions as it should on a local machine with Free Plan.

![Screenshot of Home screen](https://github.com/burmesepotato/git-readme/blob/main/vue-news/vue-news-home.jpg)

![Screenshot of Headline screen](https://github.com/burmesepotato/git-readme/blob/main/vue-news/vue-news-headline.jpg)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
