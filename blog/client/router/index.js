import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import homePage from "@/components/homePage"
import adminClient from "@/components/adminClient"
import articlesTable from "@/components/小组件/articlesTable"
import editBlog from "@/components/editBlog"
import articlesList from "@/components/articlesList"
import readArticle from "@/components/readArticle"
// import { read } from 'fs';
Vue.use(Router)

export default new Router({
  routes: [
      {
        path:"/",
        redirect:"/homePage/articlesList"
      },    
    {   
        path:"/homePage",
        name:"homePage",
        component:homePage,
        children:[
            {
                path:"/homePage/articlesList",
                component:articlesList
            },
            {
                path:"/homePage/readArticle",
                name:"readArticle",
                component:readArticle,
            }
        ] 
    },
    {
        path:'/adminClient',
        name:'adminClient',
        component:adminClient,
        children:[
            {
                path:"/adminClient/articlesTable",
                component:articlesTable,
            }
        ]
    },  
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path:"/editBlog",
        name:"editBlog",
        component:editBlog,
    }
  ]
})
