<template>
    <div class="homePage">
        <div class="head muui-shadow-2">
            <div class="guide width-30">
                <div class="guideItem" v-for="item,index in midHeads" v-on:click="selectItem(index)"
                v-bind:class="{selected:index==selectedIndex}"
                >{{midHeads[index]}}</div>
                <!-- <div class="guideItem selected" v-on:click="selecteItem">Articles
                </div>
                <div class="guideItem"
                v-on:click="selecteItem" >Achieve</div>
                <div class="guideItem"
                v-on:click="selecteItem">
                    About</div> -->
            </div>
        </div>
        <div class="content">  
            <div class="ownerInfoBox">
                <div class="infoImgContainer">
                    <img class="infoImg" v-bind:src="infoSrc" alt=""/>
                </div>
                <div class="ownerHeadimg">
                    <img class="headImg" v-bind:src="headImg" alt=""/>
                </div>
                <div class="ownerInfo">
                    <div class="ownerName">
                    Someone
                    </div>
                    <div class="ownerIntro">
                        天道酬勤
                    </div>
                </div>
                <el-row class="row-style">
                    <el-col :span='24'>
                        <el-menu default-active="2">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i></i>
                                    <span class="row-style" >lastest</span>
                                </template>
                                <!-- <el-menu-item v-for="(item,index) in lastestArt"
                                index = "1-"+index>{{item.title}} </el-menu-item> -->
                                <el-menu-item class="row-style" index="1-1">文章1</el-menu-item>
                                <el-menu-item class="row-style" index="1-2">文章2</el-menu-item>
                                <el-menu-item class="row-style" index="1-3">文章3</el-menu-item>
                                <el-menu-item class="row-style" index="1-4">文章4</el-menu-item>
                                <el-menu-item class="row-style" index="1-6">文章5</el-menu-item>
                            </el-submenu>
                        </el-menu>
                        <el-menu default-active="2" >
                            <el-submenu index="1">
                                <template slot="title">
                                    <i></i>
                                    <span class="row-style" >target</span>
                                </template>
                                <!-- <el-menu-item v-for="(item,index) in lastestArt"
                                index = "1-"+index>{{item.title}} </el-menu-item> -->
                                <el-menu-item class="row-style" index="1-1"  >生活</el-menu-item>
                                <el-menu-item index="1-2" class="row-style" >nodejs</el-menu-item>
                                <el-menu-item index="1-3" class="row-style" >vue</el-menu-item>
                                <el-menu-item index="1-4" class="row-style" >考试</el-menu-item>
                                <el-menu-item index="1-6" class="row-style" >情感</el-menu-item>
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
<script>
export default {
    name:"homePage",
    data(){
        return{
            leftHead:"Normal People",
            midHeads:[
                "Articles",
                "Achieve",
                "About"
            ],
            rightHead:"Welcome",
            selectedIndex:1,
            infoSrc:"../../static/img/infoImg.jpg",
            headImg:"../../static/img/headImg.jpg",
            lastestArt:[
                {
                    index:"",
                    title:"",
                    content:"",
                    date:"",
                    target:"",
                }
            ],
        }
    },
    methods:{
        selectItem:function(index){
            this.selectedIndex = index;
        }
    },
    mounted(){
        this.selectItem(0);
    }    
}
</script>


<style>
@import '../../static/css/homePage.css';
</style>

