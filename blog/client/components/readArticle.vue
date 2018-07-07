<template>
    <div class="readBox">
        <div class="mainBody">
            <div class="pathBar">
                <i class="el-icon-location"></i>
                <a class="color-333366" v-on:click="toList">Home</a>
                <i class="el-icon-arrow-right"></i>
                <span class="color-2f89fc">{{article.title}}</span>
            </div>
            <br>
            <div class="articleBox mdui-shadow-2">
                <div class="readTitle">
                    {{article.title}}
                </div>  
                <div class="readDate">
                    {{article.date}}
                </div>
                <div class="readContent" v-html="renderText">
                    
                </div>  
            </div>

        </div>
        <div class="foot"></div>
    </div>
</template>
<script>

export default {
    name:"readArticle",
    data(){
        return{
            article:{
                title:"我尽力了",
                date:"2018-7-6 13:33",
                content:"火烧眉毛，脚底抹油",
                target:"生活"
            },
            value:"",
            renderText:"",
        }
    },
    methods:{
        mdToHtml(){
            const markdown = require("markdown").markdown;
            var data = this.$route.params.blogData;
            console.log(data);
            this.value = data.content;
            this.render = markdown.toHtml(this.value);
            console.log(render);
        },
        toList(){
            this.$router.push("/homePage/articlesList");
        }
    },
    mounted(){
        
        const markdown = require("markdown").markdown;
        var data = this.$route.params.blogData;
        this.article = data;
        this.value = data.content;
        this.renderText = markdown.toHTML(this.value);
        console.log(this.renderText);
    }
}
</script>
<style >
@import '../../static/css/readArticle.css';
</style>

