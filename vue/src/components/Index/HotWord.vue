<template>
  <div class="hotword">
    <ul>
      <li v-for="(l,index) in list" :key="l.name" :class="{active:list1[index] == nowurl}" @click="changeColor(index)">
        <router-link :to="'/home/'+list1[index]">
        	{{l.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    import data from '../../data/hotword.json'
    export default {
        name: "hot-word",
        data(){
          return{
            list:[],
            nowurl:'',
            list1:[
            	'zero','one','two','three','four','five','six','seven','eight'
            ]
          }
        },
        mounted(){
          this.list = data.data.tabs;
          this.nowurl = window.location.href.slice(29);
//					console.log(window.location.href.slice(29))
//        console.log(this.list)
        },
        methods:{
        	changeColor(e){
        		var li = document.getElementsByTagName('li')[e];
        		var allli = document.getElementsByTagName('li');
        		for (var i = 0; i < allli.length; i++) {
        			if (i == e) {
        				li.className = 'active'
        			} else{
        				allli[i].className = ''
        			}
        		}
        	}
        }
    }
</script>

<style scoped>
.hotword{
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  /*height: 2rem;*/
  font-size: 0.8rem;
}
.hotword ul li{
  display: inline-block;
  color: rgb(116, 116, 116);
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
}
.hotword ul li:hover{
  color: rgb(237,91,0);
  border-bottom: 1px solid rgb(237,91,0);
}
.active{
  	border-bottom: 1px solid rgb(237,91,0);
  	color: rgb(237,91,0)!important;
}
</style>
