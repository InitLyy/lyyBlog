<template>
    <div class="container">

        <ul class="width-30 ul-list" v-for=" index in 4">
            <li v-for="(article,index) in articles">
                <div class="blogCard  mdui-shadow-1">
                    <div class="titleBox">
                        {{article.title}}
                        <span class="font-size-08">
                            <i class="el-icon-location-outline" size="mini"></i>
                            {{article.target}}
                        </span>
                    </div>
                    <div class="date">
                        {{article.date}}   
                    </div>
                    <div class="preview">
                        {{article.content}}
                    </div>
                    <el-button class="readBtn"type="primary" size="mini" v-on:click="toRead(index)">read</el-button>
                </div>
            </li>  
        </ul>
    </div>
</template>
<script>
export default {
    name:"articlesList",
    data(){
        return{
            articles:[
                {
                    title:"我尽力了",
                    date:"2018-07-06 14:33:33",
                    preview:"    了啦啦啦啦啦啦啦啦啦",
                    target:"#生活"

                }
            ]
        }
    },
    methods:{
        toRead(index){
            var self = this;
            this.$router.push(
                {
                    name:"readArticle",
                    params:{
                        blogData:self.articles[index]
                    }
                }
            );
            // this.$router.push("/homePage/readArticle");
        },
        getBlogs(){
            var self = this;
            const axios = require('axios');
            axios.post("/api/articlesList").then(response=>{
              console.log(response);
              self.articles = response.data;
              console.log(self.articles);
            })
        }
    },
    mounted(){
        this.getBlogs();
    }
}
</script>
<style scrop>
@import '../../static/css/articlesList.css';
</style>

