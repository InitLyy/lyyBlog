<template>
    <div class="table">
        <el-row>
            <div class="nowTip">
                        <span >管理面板 \ </span>
                        <span class="text-grey">文章管理</span>
                    </div>
                </el-row>
                <div class="operationBox">
                    <el-row><el-button type="primary" class="create-btn" v-on:click="toCreate">创建文章</el-button></el-row>
                    <div class="blogBox">
                        <el-row class="col-name">
                            <el-col class="padding-left-20" :span="2">#</el-col>
                            <el-col :span="6">创建时间</el-col>
                            <el-col :span="6">所属分类</el-col>
                            <el-col :span="6">文章标题</el-col>
                            <el-col :span="4">操作</el-col>
                        </el-row>

                        <el-row class="info-col" v-for=" (blog,index) in blogs">
                            <el-col class="padding-left-20" :span="2">{{index+1 }}</el-col>
                            <el-col :span="6">{{blog.date}}</el-col>
                            <el-col :span="6">{{blog.target}}</el-col>
                            <el-col :span="6">{{blog.content}}</el-col>
                            <el-col :span="4">
                                <el-button size="small" v-on:click="toRead(index)">查看</el-button>
                                <el-button size="small" type="primary" v-on:click="toEdit(index)"> 
                                    编辑
                                </el-button>
                                <el-button size="small" type="danger" v-on:click="deleteBlog(blog._id,index)">删除</el-button>
                            </el-col>
                        </el-row>

                    </div>
                </div>
                <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                    <span>{{dialogText}}</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span>
                    </el-dialog>

    </div>
</template>
<style scoped>
@import "../../../static/css/adminClient.css";
</style>
<script>
export default {
    name:"artticlesTable",
    data(){
        return{
            dialogVisible:false,
            dialogText:"",
            blogs:[
                {
                    title:"",
                    date:"",
                    target:"",
                    content:""
                }
            ],
            operation:[
                {
                    do:'查看',
                },
                {
                    do:"编辑",
                },
                {
                    do:'删除',
                }
            ]
        }
    },
    methods:{
        toRead(index){
            console.log(index);
            var readData = this.blogs[index];
            this.$router.push({
                name:"readArticle",
                params:{blogData:readData}
            });
        },
        toCreate(){
            this.$router.push("/editBlog");
        },
        toEdit(index){
            console.log(index);
            var editData = this.blogs[index];
            this.$router.push({
                name:"editBlog",
                params:{
                editData:editData,
                isEdit:true,
                }
            });
        },
        getBlogs(){
            var self = this;
            const axios = require('axios');
            axios.post('/api/articlesList').then(response=>{
                console.log(response);
                self.blogs = response.data;
                console.log(self.blogs);
            }).catch(error=>{
                console.log(error);
            })
        },
        deleteBlog(id,index){
            var self = this;
            console.log(index);
            const axios = require('axios');
            axios.post('/api/deleteBlog',{blogId:id}).then(response=>{
                console.log(response);
                self.dialogVisible = true;
                self.dialogText = "删除成功";
                self.blogs.splice(index,1);
            }).catch(error=>{
                self.dialogText = "删除失败";
                console.log(error);
            });
        }
    },
    mounted(){
        this.getBlogs();

    }
}
</script>

