<template>
    <div class="editBlog">
        <el-row >
            <el-col :span="10">
                <div class="inputLabel">标题: </div>
                <el-input class="titleInput" 
                type="textarea" placeholdr="请输入标题" 
                :autosize="{minRows:1,maxRows:2}"
                v-model="titleInput" clearable></el-input>
            </el-col>
        </el-row>
        <div class="editorContainer">   
            <mavon-editor ref="editor" class="editor" v-model="value" style="min-height:300px"/>
            <el-row>
                <el-col :span="6">
                    <el-dropdown class="targetSelection"  @command="selectComand">
                        <span class="el-dropdown-link">
                            {{selectItem}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="生活">生活</el-dropdown-item>
                            <el-dropdown-item command="后端">后端</el-dropdown-item>
                            <el-dropdown-item command="前端">前端</el-dropdown-item>
                            <el-dropdown-item command="考试">考试</el-dropdown-item>
                            <el-dropdown-item command="新建">新建</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <el-button type="primary" class="publishBtn" v-on:click="saveArticles">发布</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name:"editBlog",
    data(){
        return{
            vaule:"",
            titleInput:"",
            IntroInput:"",
            selectItem:"选择标签",
        }
    },
    methods:{
        saveArticles:function(){   
            const axios = require('axios');
            //时间获取
            
            let mydate, y, m, d, hh, mm, ss;
            mydate = new Date()
            y = mydate.getFullYear()
            m = mydate.getMonth()+1
            d = mydate.getDate()
            hh = mydate.getHours()
            mm = mydate.getMinutes()
            ss = mydate.getSeconds()
            if (m < 10) m = '0' + m
            if (d < 10) d = '0' + d
            if (hh < 10) hh = '0' + hh
            if (mm < 10) mm = '0' + mm
            if (ss < 10) ss = '0' + ss
            var mytime = y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
            //内容获取
            var self = this;
            var content = this.value;
            //标题获取
            var titleInput = this.titleInput;

            //标签获取
            var selectItem = this.selectItem;
            console.log(selectItem);
            var data = {
                title:titleInput,
                date:mytime,
                target:selectItem,
                content:content
            };
            axios.post('/api/saveArticle',{artcileInformation:data}).then(function(response){
                console.log(response);
                self.$router.push("/homePage/articlesList");
            })
            .catch(error=>{
                console.log(error);
            }
                
            );
        },
        selectComand:function(command){
            this.selectItem=command;    
            // this.$message('click on item ' + command);
        }
    },
    mounted(){
        console.log(this.$route.params.editData);
        var data = this.$route.params.editData;
        console.log(data.isEdit);
        if( this.$route.params.isEdit){
            this.titleInput = data.title;
            this.value = data.content;
            this.selectItem = data.target;
        }
    }
}
</script>
<style>
@import '../../static/css/editBlog.css';
</style>

