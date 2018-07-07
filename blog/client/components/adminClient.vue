<template>
    <div class="adminClient">
        <!-- <el-menu:default-active="activeIndex2" mode="horziontal"
        @select="handleSelect"
        background-color = "#545c64"
        text-color = "#fff"
        active-text-color="#ffd04b">

        </el-menu> -->
        <div class="head">
            <span>Admin</span>
        </div>
        <div class="adminContent">
            <div class="left-bar">
                <el-row >
                    <el-col :span="24">
                        <el-menu default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>管理操作</span>
                            </template>
                            <el-menu-item index = "1-1">
                                <i class="el-icon-document"></i>
                                <span>文章管理</span>
                                </el-menu-item>
                            <el-menu-item index = "1-2">
                                <i class="el-icon-bell"></i>
                                <span>分类管理</span>
                                </el-menu-item>
                        </el-submenu>
                    </el-menu>
                    </el-col>
                </el-row>
            </div>
            <div class="right-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style scoped>
    @import '../../static/css/adminClient.css';

</style>
<script>

export default {
    name:"adminClient",
    data(){
        return{
            article:[
                {
                    index:"#",
                    time:"创建时间",
                    target:"所属分类",
                    title:"文章标题",
                    do:"操作"
                }
            ],
        }
    },
    methods:{

    },
    mounted(){
        var self = this;
        self.$router.push({path:"/adminClient/articlesTable"})
    }
}


</script>
