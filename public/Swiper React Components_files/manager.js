!function(){let i="$ta2";function e(){window.addEventListener("message",e=>{var t;(e=e).data&&"tinyadz"==e.data.sender&&e.data.action&&({action:e,data:t}=e.data,window[i])&&window[i].handleEvent(e,t)})}let n={CORNER:"corner-popup",FULL_SCREEN:"fullscreen-popup",INLINED:"inlined-ta-ad"},d={theme:"light",renderMode:"FULL_SCREEN"};window.$taWidgets||(window.$taWidgets={});class t{_v=1;_latestVisitorEngagementBroadcastTs=null;_visitorEngagement=null;_popupIframe=null;_popupContainerClassName="";_popupContainer=null;_isPopupOpened=!1;_popupWidgetId=null;_closedByUserWidgets={};_iframes=[];constructor(e){this._popupContainerClassName=e,this._prepareContent()}_prepareContent(){var e=document.createElement("div"),e=(e.className=this._popupContainerClassName,document.body.appendChild(e),document.createElement("style"));e.textContent=this._getStyles(this._popupContainerClassName),document.head.appendChild(e),this._popupContainer=document.querySelector("."+this._popupContainerClassName)}_getStyles(e){var t=`
      background-color: transparent !important;
      color-scheme: normal;
      `,i=`
        .ta-widget {
          ${t}
        }`,a=`
        border: 0;
        color-scheme: none;
        z-index: 100000000000;
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, background-color 0.3s ease-in-out, height .3s ease-in-out;
        display: none;
        transform: translateY(15px);
        opacity: 0;`,r=`
      [ta-ad-container], #TA_AD_CONTAINER {
        width: 100%;
      }

      iframe.inlined-ta-ad {
         width: 100%;
         max-width: 900px;
         margin: 0 auto;
         min-height: 100px;
         border: none;
         opacity: 0;
         ${t}
         transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, background-color 0.3s ease-in-out, height .3s ease-in-out;
         display: block;
      }`,s=`iframe.${n.CORNER} {
        position: fixed;
        bottom: 15px;
        right: 5px;
        width: 310px;
        ${a}
        z-index: 10000;
        display: block;

        ${t}
      }

      @media (max-width: 767.99px) {
          iframe.${n.CORNER} {
            left: 0;
            padding-left: 1rem;
            padding-right: 1rem;
            width: 100%;
          }
      }`;return[i,r,`.${e} iframe.${n.FULL_SCREEN} {
        ${a}
        ${t}

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        width: 100dvw;
        height: 100dvh;
        min-height: 100dvh;
        max-height: 100dvh;
        background-color: rgba(0,0,0,0.65)!important;
      }`,s].join(" ")}init(e,t={},i=!1,a={}){(e=e||this._popupWidgetId)&&(this.initPopup(e,t,a),i)&&setTimeout(()=>this.showPopup(),a.showPopupDelay||300)}_getFormParametersFromUrl(e){let i=new URL(e).searchParams;return Array.from(new URL(e).searchParams.keys()).filter(e=>e.startsWith("form-")).reduce((e,t)=>({...e,[t]:i.get(t)}),{})}_getFormParametersFromObj(i){return i?Object.keys(i).reduce((e,t)=>({...e,["form-"+t.toLowerCase().replace(/(\s|-)+/g,"-")]:i[t].toString()}),{}):""}_postMessageToIframe(e,t,i,a){i={action:i,widgetId:t,refUrl:window.location.href,sender:"tinyadz",...a||{}};e.contentWindow.postMessage(i,"*")}_getIframeUrl(e,t,i,a,r={},s={}){var o=this._getFormParametersFromUrl(location.href),r=this._getFormParametersFromObj(r);let n={ref:encodeURIComponent(location.href),snapshotId:t,seed:a,theme:i,...o,...r,...s};return"https://cdn.apitiny.net/was/%widgetId?showInPopup=true".replace("%widgetId",e)+"&"+Object.keys(n).map(e=>e+"="+n[e]).join("&")}_notifyIframeWhenShown(e,t){this._postMessageToIframe(e,t,"SHOWN",{widgetId:t,refUrl:window.location.href,parentRefUrl:document.referrer,deviceWidth:window.innerWidth,deviceHeight:window.innerHeight,visitorEngagement:this._visitorEngagement})}initPopup(e,t,i={}){this.resetContent();var a=Date.now(),{theme:i,snapshotId:r,renderMode:s="FULL_SCREEN"}=(this._popupWidgetId=e,{...d,...i}),r=this._getIframeUrl(e,r,i,a,t);return this._popupIframe=document.createElement("iframe"),this._popupIframe.className="tinyadz-iframe "+(n[s]||""),this._popupIframe.id=this.getIframeId(e,a),this._popupIframe.src=r,this._popupContainer.appendChild(this._popupIframe),new Promise((e,t)=>{setTimeout(()=>e(),500)})}getIframeId(e,t){return`widget${e}-seed`+t}getIframe(e,t){return document.querySelector("#"+this.getIframeId(e,t))||document.querySelector(`[id="${e}-${t}"]`)||document.querySelector(`[id="${e}"]`)}_saveIframe(e,t){this._iframes.find(e=>e.widgetId===t)||this._iframes.push({iframe:e,widgetId:t})}async captureVisitorEngagement(e){if(this._visitorEngagement=e,!this._latestVisitorEngagementBroadcastTs||300<this._latestVisitorEngagementBroadcastTs-Date.now()){this._latestVisitorEngagementBroadcastTs=Date.now();for(var t of this._iframes)this.passEngagementToIframe(t.iframe,t.widgetId,e);this._popupIframe&&this._popupWidgetId&&this.passEngagementToIframe(this._popupIframee,this._popupWidgetId,e)}}passEngagementToIframe(e,t,i){this._postMessageToIframe(e,t,"ENGAGEMENT_META_UPDATED",i)}async renderInlined(i,a){var{theme:a,snapshotId:r,renderMode:s="INLINED",container:o}={...d,...a};if(o){let e=o.getAttribute("tinyadz-seed"),t=(e=e||("INLINED"===s?Date.now()+"-"+Math.floor(1e5*Math.random()):"corner"),this.getIframe(i,e));t,this._closedByUserWidgets[i+"-"+e]||(t?"INLINED"!==!s&&await this.hideWidget(t):t=document.createElement("iframe"),r=this._getIframeUrl(i,r,a,e,{},{showInPopup:!1}),this._saveIframe(t,i),t.className="tinyadz-iframe "+(n[s]||""),t.id=this.getIframeId(i,e),t.src=r,"BODY"!==o.tagName&&(o.innerHTML="",o.setAttribute("tinyadz-seed",e)),o.appendChild(t))}else console.warn("No container provided for TinyAdz Ad rendering")}async showPopup(e,t,i){e&&this._popupWidgetId!==e&&(this._isPopupOpened&&await this.hidePopup(),await this.initPopup(e,t,i)),this._isPopupOpened||(this._isPopupOpened=!0)}hidePopup(){return new Promise(e=>{setTimeout(()=>{this._popupIframe.style.transform="translateY(15px)",this._popupIframe.style.opacity=0,setTimeout(()=>{e(),this._popupIframe.style.display="none",this._postMessageToIframe(this._popupIframe,this._popupWidgetId,"HIDDEN")},300)},150),this._isPopupOpened=!1})}hideWidget(t){return this._popupIframe&&t===this._popupIframe?this.hidePopup():new Promise(e=>{t.style.opacity=0,setTimeout(()=>{t.style.display="none",e()},300)})}resetContent(){this._popupContainer.innerHTML=""}changeIframeHeight(e,t,i=100){e.style.height=Math.max(i,t)+"px"}handleEvent(a,r){if(r){let{widgetId:e,seed:t}=r,i=this.getIframe(e,t);switch(a){case"CLOSE":return this._closedByUserWidgets[e+"-"+t]=!0,this.hideWidget(i);case"LINK_CLICK":return window.open(r.url,"_blank"),void this.hideWidget(i);case"WIDGET_LOADED":if(i){setTimeout(()=>{i.style.display="block",i.style.opacity=0,setTimeout(()=>{i.style.transform="translateY(0)",i.style.opacity=1},50)},100);{var[s,o,n=.75,d=1]=[i,()=>{this._notifyIframeWhenShown(i,e)}];let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&0<d&&(o(),--d<=0)&&t.unobserve(s)})},{threshold:n});t.observe(s)}window.$taWidgets[e]={iframe:i,id:e},this._postMessageToIframe(i,e,"SYNCED",{refUrl:window.location.href,parentRefUrl:document.referrer,deviceWidth:window.innerWidth,deviceHeight:window.innerHeight,visitorEngagement:this._visitorEngagement});n={...this._getFormParametersFromUrl(location.href)};this._postMessageToIframe(i,e,"INIT_FORM",{formValues:n})}return;case"RESIZED":{var{height:n,isWidgetEmpty:p}=r;let e=p?0:100;return i.attributes.hasOwnProperty("data-min-height")&&(e=Number(i.attributes["data-min-height"].value)||e),void this.changeIframeHeight(i,n,e)}case"SHOW_POPUP":p=r["widgetToShowId"];p&&void 0!==window.$ta&&this.showPopup(p)}}}}window[i]?window[i]._v:(window[i]=new t("tinyadz"),e())}();