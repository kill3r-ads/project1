import{_ as j,b_ as z,f as r,o as n,g as c,h as a,w as s,i as t,t as i,j as p,A as b,F as P,k,v as _,p as y,l as I,I as O,J as L}from"./app-81c86c8f.js";const N={head:{title:"All Blogs"},data:()=>({loading:!0,searchKeyword:"",currentPage:1,totalPages:1,blogs:[{},{},{}],recentBlogs:[{},{},{},{},{}],filterDrawerOpen:!1,blogCategories:[],queryParamBlog:{page:1,categorySlug:null,searchKeyword:""},currentCategory:{}}),components:{SocialShare:z},methods:{toggleFilterDrawer(e){this.filterDrawerOpen=e},pageSwitch(e){this.$router.push({query:{...this.$route.query,page:this.queryParamBlog.page}}).catch(()=>{}),this.getBlogList({page:e})},search(){this.$router.push({name:"SearchBlogs",params:this.queryParamBlog.searchKeyword.length>0?{searchKeyword:this.queryParamBlog.searchKeyword}:{},query:{page:1}}).catch(()=>{})},async getBlogCategories(){const e=await this.call_api("get","all-blog-categories");e.data.success?(this.blogCategories=e.data.data,this.recentBlogs=e.data.recentBlogs.data):this.snack({message:this.$i18n.t("something_went_wrong"),color:"red"})},async getBlogList(e){this.loading=!0;let o={...this.queryParamBlog,...e},u="all-blogs/search?";u+=`&page=${this.queryParamBlog.page}`,u+=o.categorySlug?`&category_slug=${o.categorySlug}`:"",u+=o.searchKeyword?`&searchKeyword=${o.searchKeyword}`:"";const d=await this.call_api("get",u);d.data.success&&(this.blogs=d.data.blogs.data,this.totalPages=d.data.totalPage,this.queryParamBlog.page=d.data.currentPage,this.currentCategory=d.data.currentCategory?d.data.currentCategory:{}),o.searchKeyword.length>0&&(this.searchKeyword=o.searchKeyword),this.loading=!1}},async created(){this.queryParamBlog.categorySlug=this.$route.params.categorySlug||this.queryParamBlog.categorySlug,this.queryParamBlog.searchKeyword=this.$route.params.searchKeyword||this.queryParamBlog.searchKeyword,this.$route.query.page&&(this.queryParamBlog.page=this.$route.query.page),this.getBlogCategories(),this.getBlogList({page:this.queryParamBlog.page,categorySlug:this.queryParamBlog.categorySlug,searchKeyword:this.queryParamBlog.searchKeyword})}},f=e=>(O("data-v-f1b37dea"),e=e(),L(),e),x={class:"border-bottom pa-5 d-lg-none d-flex align-center"},U=f(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},[t("path",{id:"Path_2643","data-name":"Path 2643",d:"M20,5H18.829a3,3,0,0,0-5.659,0H4A1,1,0,0,0,4,7h9.171a3,3,0,0,0,5.659,0H20a1,1,0,0,0,0-2ZM16,7a1,1,0,1,0-1-1A1,1,0,0,0,16,7ZM3,12a1,1,0,0,1,1-1H5.171a3,3,0,0,1,5.659,0H20a1,1,0,0,1,0,2H10.829a3,3,0,0,1-5.659,0H4A1,1,0,0,1,3,12Zm5,1a1,1,0,1,0-1-1A1,1,0,0,0,8,13ZM4,17a1,1,0,0,0,0,2h9.171a3,3,0,0,0,5.659,0H20a1,1,0,0,0,0-2H18.829a3,3,0,0,0-5.659,0Zm13,1a1,1,0,1,1-1-1A1,1,0,0,1,17,18Z",transform:"translate(-3 -3)",fill:"#2a2e34","fill-rule":"evenodd"})],-1)),E={class:"ms-4 fw-600 fs-14 lh-1"},J=f(()=>t("i",{class:"la la-close fs-20"},null,-1)),T=[J],G={class:"pa-5 min-100vh"},Q={class:"mb-5"},R=f(()=>t("i",{class:"las la-search fs-18 ts-05"},null,-1)),W={class:"mb-5"},X={class:"fw-700 fs-14 mb-4 border-bottom pb-3"},Y={class:"list-unstyled ps-0"},ee={class:"my-2"},te={class:"mb-6"},ae={class:"fw-700 fs-14 mb-4 border-bottom pb-3"},se={class:"list-unstyled ps-0"},oe={class:"my-2"},le={class:"pt-5 ps-lg-7"},re={class:"d-flex align-center"},ne={key:0,class:"fs-18"},ie={key:1,class:"fs-18"},ce={key:2,class:"fs-18 ml-2"},de={class:"d-lg-none ms-auto ms-sm-0"},ge=f(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},[t("path",{id:"Path_2643","data-name":"Path 2643",d:"M20,5H18.829a3,3,0,0,0-5.659,0H4A1,1,0,0,0,4,7h9.171a3,3,0,0,0,5.659,0H20a1,1,0,0,0,0-2ZM16,7a1,1,0,1,0-1-1A1,1,0,0,0,16,7ZM3,12a1,1,0,0,1,1-1H5.171a3,3,0,0,1,5.659,0H20a1,1,0,0,1,0,2H10.829a3,3,0,0,1-5.659,0H4A1,1,0,0,1,3,12Zm5,1a1,1,0,1,0-1-1A1,1,0,0,0,8,13ZM4,17a1,1,0,0,0,0,2h9.171a3,3,0,0,0,5.659,0H20a1,1,0,0,0,0-2H18.829a3,3,0,0,0-5.659,0Zm13,1a1,1,0,1,1-1-1A1,1,0,0,1,17,18Z",transform:"translate(-3 -3)",fill:"#2a2e34","fill-rule":"evenodd"})],-1)),ue=[ge],he={class:"mb-7"},_e={key:0},me={slot:"progress"},pe={class:"grey--text d-block"},ye={class:"grey--text"},fe={key:1,class:"pa-4 text-center fs-20"},ve={key:0,class:"text-center"};function we(e,o,u,d,be,h){const $=r("v-text-field"),g=r("v-col"),B=r("v-btn"),m=r("v-row"),q=r("v-form"),v=r("router-link"),S=r("SocialShare"),C=r("v-skeleton-loader"),K=r("v-progress-linear"),H=r("v-img"),A=r("v-card-title"),Z=r("v-card-text"),V=r("v-card-actions"),D=r("v-card"),M=r("v-pagination"),F=r("v-container");return n(),c("div",null,[a(F,{class:"pt-0 all-blogs"},{default:s(()=>[a(m,{"no-gutters":"",align:"start"},{default:s(()=>[a(g,{lg:"3",class:"w-lg-270px sticky-top"},{default:s(()=>[t("div",{class:b(["border-end filter-drawer",{"open c-scrollbar overflow-y-auto z-1020":e.filterDrawerOpen}])},[t("div",x,[U,t("span",E,i(e.$t("filters")),1),t("button",{type:"button",onClick:o[0]||(o[0]=p(l=>h.toggleFilterDrawer(!e.filterDrawerOpen),["stop"])),class:"ms-4 fw-600 fs-20 lh-1 ms-auto"},T)]),t("div",G,[t("div",Q,[a(q,{class:"border rounded-pill flex-grow-1",onSubmit:o[3]||(o[3]=p(l=>h.search(),["stop","prevent"])),rounded:""},{default:s(()=>[a(m,{align:"center",dense:""},{default:s(()=>[a(g,{class:""},{default:s(()=>[a($,{placeholder:e.$t("search"),type:"text","hide-details":"auto",variant:"plain",modelValue:e.queryParamBlog.searchKeyword,"onUpdate:modelValue":o[1]||(o[1]=l=>e.queryParamBlog.searchKeyword=l),solo:"",flat:"",dense:"",class:"border-0 px-3 search-input-field"},null,8,["placeholder","modelValue"])]),_:1}),a(g,{cols:"auto",class:""},{default:s(()=>[a(B,{size:"small",icon:"$vuetify",class:"me-1 shadow-none",onClick:o[2]||(o[2]=p(l=>h.search(),["stop","prevent"]))},{default:s(()=>[R]),_:1})]),_:1})]),_:1})]),_:1})]),t("div",W,[t("h4",X,i(e.$t("categories")),1),t("div",null,[t("ul",Y,[t("div",null,[t("li",ee,[a(v,{to:{name:"AllBlogs"},class:b(["text-reset fs-14",{"fw-600":e.is_empty_obj(e.currentCategory)}])},{default:s(()=>[t("span",null,i(e.$t("all_categories")),1)]),_:1},8,["class"])]),(n(!0),c(P,null,k(e.blogCategories,(l,w)=>(n(),c("li",{key:w,class:"my-2"},[e.is_empty_obj(e.currentCategory)?(n(),_(v,{key:0,to:{name:"AllBlogsFilter",params:{categorySlug:l.slug}},class:"text-reset fs-14"},{default:s(()=>[y(i(l.name),1)]),_:2},1032,["to"])):(n(),_(v,{key:1,to:{name:"AllBlogsFilter",params:{categorySlug:l.slug}},class:b(["text-reset fs-14",{"fw-600":e.currentCategory.slug===l.slug}])},{default:s(()=>[y(i(l.name),1)]),_:2},1032,["to","class"]))]))),128))])])])]),t("div",te,[t("h4",ae,i(e.$t("social_media")),1),t("div",null,[t("ul",se,[t("div",null,[t("li",oe,[a(S,{title:e.$t("all_blogs")},null,8,["title"])])])])])])])],2)]),_:1}),a(g,{lg:"9",class:"v-col-auto"},{default:s(()=>[t("div",le,[a(m,{align:"end",class:""},{default:s(()=>[a(g,{cols:"12",sm:"",class:"pb-0 pt-3"},{default:s(()=>[t("div",re,[t("div",null,[e.searchKeyword.length>0?(n(),c("h1",ne,i(e.$t("search_results_for"))+' "'+i(e.searchKeyword)+'"',1)):e.is_empty_obj(e.currentCategory)?(n(),c("h1",ce,i(e.$t("all_blogs")),1)):(n(),c("h1",ie,i(e.currentCategory.name),1))]),t("div",de,[t("button",{class:"ms-4 pa-2 border-gray-300 rounded border d-flex justify-center align-center",onClick:o[4]||(o[4]=p(l=>h.toggleFilterDrawer(!e.filterDrawerOpen),["stop"])),type:"button"},ue)])])]),_:1})]),_:1}),t("div",he,[e.blogs.length>0?(n(),_(m,{key:0,class:"row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-3 md-gutters-10"},{default:s(()=>[(n(!0),c(P,null,k(e.blogs,(l,w)=>(n(),_(g,{key:w,cols:"8",sm:"4"},{default:s(()=>[e.loading?(n(),c("div",_e,[a(C,{type:"image",class:"pa-2",height:"100"})])):(n(),_(D,{key:1,class:"mx-auto my-6 mx-lg-2 border",style:{"box-shadow":"none"}},{default:s(()=>[t("template",me,[a(K,{color:"deep-purple",height:"10",indeterminate:""})]),a(H,{height:"250",src:l.banner,cover:""},null,8,["src"]),a(A,{style:{"font-size":"1rem","line-height":"1.6","white-space":"normal"},class:"text-truncate-2 py-0 my-4 blog-title"},{default:s(()=>[y(i(l.title),1)]),_:2},1024),a(Z,{class:"pb-0"},{default:s(()=>[t("span",pe,[t("i",null,i(l.category),1)]),t("span",ye,i(l.created_at),1)]),_:2},1024),a(V,{class:"pt-1"},{default:s(()=>[a(B,{color:"primary",text:"",to:{name:"BlogDetails",params:{slug:l.slug}},class:"text-capitalize"},{default:s(()=>[y(i(e.$t("read_full_blog")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))]),_:2},1024))),128))]),_:1})):(n(),c("div",fe,i(e.$t("no_blog_found")),1))]),e.totalPages>1?(n(),c("div",ve,[a(M,{modelValue:e.queryParamBlog.page,"onUpdate:modelValue":[o[5]||(o[5]=l=>e.queryParamBlog.page=l),h.pageSwitch],length:e.totalPages,"prev-icon":"las la-angle-left","next-icon":"las la-angle-right","total-visible":7,elevation:"0",class:"my-4"},null,8,["modelValue","length","onUpdate:modelValue"])])):I("",!0)])]),_:1})]),_:1})]),_:1})])}const Pe=j(N,[["render",we],["__scopeId","data-v-f1b37dea"]]);export{Pe as default};