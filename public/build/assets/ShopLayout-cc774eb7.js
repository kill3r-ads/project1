import{_ as C,G as N,H as V,m as I,b as B,f as l,o,g as d,i as s,v as p,w as a,h as n,l as v,F as g,k as f,t,p as c,I as E,J as L}from"./app-81c86c8f.js";const P={components:{Swiper:N,SwiperSlide:V},data:()=>({loading:!0,shopDetails:{},carouselOption:{slidesPerView:1}}),computed:{...I("follow",["isThisFollowed"])},methods:{...B("follow",["addNewFollowedShop","removeFromFollowedShop"])},async created(){const e=await this.call_api("get",`shop/${this.$route.params.slug}`);e.data.success?(this.shopDetails=e.data.data,this.loading=!1):(this.snack({message:e.data.message,color:"red"}),this.$router.push({name:"404"}))}},w=e=>(E("data-v-e6378d33"),e=e(),L(),e),T={class:"position-relative"},G=["src","alt"],O={key:2,class:"shop-info w-100"},z={class:"pa-3 pa-md-5 position-relative mb-md-5 flex-fill d-flex",style:{"margin-right":"1px"}},A=w(()=>s("div",{class:"bg-white opacity-80 absolute-full"},null,-1)),H={class:"d-md-flex position-relative align-center minw-0"},J=["src","alt"],j={class:"ms-md-4 minw-0"},q={class:"fs-21"},x={class:"fs-12 opacity-80 text-truncate"},K={key:0},M={class:"pa-3 pa-md-5 position-relative mb-md-5"},Q=w(()=>s("div",{class:"bg-white opacity-80 absolute-full"},null,-1)),R={class:"position-relative"},U={class:"d-flex my-2"},W={class:"me-2"},X={class:"me-2 opacity-80"},Y={class:"bg-grey-darken-4 py-2"};function Z(e,i,ee,se,oe,te){const y=l("v-skeleton-loader"),b=l("swiper-slide"),k=l("swiper"),$=l("v-rating"),u=l("v-btn"),_=l("v-container"),h=l("v-list-item"),D=l("v-list"),S=l("router-view");return o(),d("div",null,[s("div",T,[e.loading?(o(),p(y,{key:0,type:"image",height:"360",class:"loader"})):(o(),p(k,{key:1,"slides-per-view":e.carouselOption.slidesPerView,class:""},{default:a(()=>[(o(!0),d(g,null,f(e.shopDetails.banners,(r,m)=>(o(),p(b,{key:m,class:"lh-0"},{default:a(()=>[s("img",{src:r,class:"h-150px h-md-360px img-fit",alt:e.shopDetails.name,onError:i[0]||(i[0]=F=>e.imageFallback(F))},null,40,G)]),_:2},1024))),128))]),_:1},8,["slides-per-view"])),e.loading?v("",!0):(o(),d("div",O,[n(_,{class:"d-md-flex"},{default:a(()=>[s("div",z,[A,s("div",H,[s("img",{src:e.shopDetails.logo,alt:e.shopDetails.name,class:"h-90px",onError:i[1]||(i[1]=r=>e.imageFallback(r))},null,40,J),s("div",j,[s("h1",q,t(e.shopDetails.name),1),s("div",x,[(o(!0),d(g,null,f(e.shopDetails.categories.data,(r,m)=>(o(),d("span",{key:m},[c(t(r.name),1),e.shopDetails.categories.data.length-m!=1?(o(),d("span",K,",")):v("",!0)]))),128))])])])]),s("div",M,[Q,s("div",R,[s("div",null,t(e.$t("ratings")),1),s("div",U,[s("span",W,t(e.shopDetails.rating.toFixed(2)),1),n($,{class:"lh-1-5","background-color":"","empty-icon":"las la-star","full-icon":"las la-star active","half-icon":"las la-star half",hover:"","half-increments":"",readonly:"",size:"12",length:"5","model-value":e.shopDetails.rating},null,8,["model-value"]),s("span",X,"("+t(e.shopDetails.reviews_count)+" "+t(e.$t("ratings"))+")",1)]),e.isThisFollowed(e.shopDetails.id)?(o(),p(u,{key:0,elevation:"0",color:"grey",onClick:i[2]||(i[2]=r=>e.removeFromFollowedShop(e.shopDetails.id)),class:"white-text darken-1"},{default:a(()=>[c(t(e.$t("unfollow")),1)]),_:1})):(o(),p(u,{key:1,elevation:"0",color:"primary",onClick:i[3]||(i[3]=r=>e.addNewFollowedShop(e.shopDetails.id))},{default:a(()=>[c(t(e.$t("follow")),1)]),_:1}))])])]),_:1})]))]),s("div",Y,[n(_,{class:"py-1"},{default:a(()=>[n(D,{class:"d-flex bg-grey-darken-4",dark:""},{default:a(()=>[n(h,{class:"flex-grow-0 flex-fill px-1 me-12 border-bottom border-2 border-transparent","active-class":"text-white border-primary",to:{name:"ShopDetails",params:{slug:e.$route.params.slug}},exact:""},{default:a(()=>[c(t(e.$t("store")),1)]),_:1},8,["to"]),n(h,{class:"flex-grow-0 flex-fill px-1 me-12 border-bottom border-2 border-transparent","active-class":"white-text border-primary",to:{name:"ShopCoupons",params:{slug:e.$route.params.slug}}},{default:a(()=>[c(t(e.$t("coupons")),1)]),_:1},8,["to"]),n(h,{class:"flex-grow-0 flex-fill px-1 border-bottom border-2 border-transparent","active-class":"white-text border-primary",to:{name:"ShopProducts",params:{slug:e.$route.params.slug}}},{default:a(()=>[c(t(e.$t("all_products")),1)]),_:1},8,["to"])]),_:1})]),_:1})]),s("div",null,[(o(),p(S,{key:e.$route.path}))])])}const le=C(P,[["render",Z],["__scopeId","data-v-e6378d33"]]);export{le as default};