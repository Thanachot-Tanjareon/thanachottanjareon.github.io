var _=Object.defineProperty;var b=(i,e,t)=>e in i?_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var o=(i,e,t)=>(b(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();class w{constructor(e,t){o(this,"Body",document.querySelector("body"));o(this,"Titile",document.querySelector("title"));o(this,"app");o(this,"routes");o(this,"current_path","");e&&t&&(this.app=t,this.routes=e),this.SPALoading()}SPALoading(){this.Body.addEventListener("click",e=>{e.target instanceof HTMLAnchorElement&&e.target.nodeName==="A"&&!e.target.href.match(/^https/)&&(e.preventDefault(),this.current_path=e.target.pathname,window.history.pushState(e.target.href,"",this.current_path),this.SPARender(this.current_path))}),window.addEventListener("load",()=>{window.history.state!==null&&window.history.state===window.location.href?(this.current_path=window.location.pathname,this.SPARender(this.current_path)):(this.current_path=window.location.pathname,this.SPARender(this.current_path))})}SPARender(e){this.Titile.textContent=this.routes[e].title,this.app.innerHTML=this.routes[e].pageLayout}SPAFeatures(e){const t=new MutationObserver(e);typeof e!="function"&&window.addEventListener("DOMContentLoaded",()=>e),t.observe(this.app,{childList:!0})}}class y{constructor(e,t,n){o(this,"currentDay",new Date().getDate());o(this,"currentMonth",new Date().getMonth()+1);o(this,"currentYear",new Date().getFullYear());o(this,"birthday",1);o(this,"birthMonth",1);o(this,"birthYear",1970);o(this,"age",1);this.birthday=e,this.birthMonth=t,this.birthYear=n,this.currentMonth>=this.birthMonth&&this.currentDay>=this.birthday?this.age=this.currentYear-this.birthYear:this.currentMonth>=this.birthMonth&&this.currentDay<=this.birthday?this.age=this.currentYear-this.birthYear:this.age=this.currentYear-this.birthYear-1}}const l={name:"Thanachot Tanjareon",profileUrl:{url:"/images/profile-image.jpg",explaination_image:"Thanachot Tanjareon's profile"},age:new y(6,6,2006).age,skills:{coding:[{skill:"HTML",icon:"/images/icons/html-5-svgrepo-com.svg"},{skill:"CSS",icon:"/images/icons/css3-svgrepo-com.svg"},{skill:"JavaScript",icon:"/images/icons/js-official-svgrepo-com.svg"},{skill:"NodeJS",icon:"/images/icons/nodejs-1-logo-svgrepo-com.svg"},{skill:"TypeScript",icon:"/images/icons/typescript-logo-svgrepo-com.svg"},{skill:"PHP",icon:"/images/icons/php-svgrepo-com.svg"},{skill:"MySQL",icon:"/images/icons/mysql-logo-svgrepo-com.svg"}],graphic:[{skill:"Photoshop",icon:"/images/icons/photoshop-cc-logo-svgrepo-com.svg"}],media:[{skill:"Premiere pro",icon:"/images/icons/premiere-cc-logo-svgrepo-com.svg"}]},shortExplaination:["Web Developer.","Graphic designer.","Video editor."],qouteExplaination:"Hi, I'm Thanachot Tanjareon. I'm 17 years old (since 2023). I felt good when coding and drawing a pictures alway, which I practiced programming since I studied at grade 9, Thailand. I practiced programming as self-taught learning from more knowledges source such as Youtube, article website, and technologies docs. It's feel very good for learn a new things",projects:null,contacts:{facebook:{icon:{url:"/images/icons/facebook-color-svgrepo-com.svg",icon_explaination:"Facebook icon"},text:"Thanachot Tanjareon",url:"https://www.facebook.com/ThanachotTanjareon/"},gmail:{icon:{url:"/images/icons/gmail-old-svgrepo-com.svg",icon_explaination:"Gmail icon"},text:"thanachot2549.orther@gmail.com"},github:{icon:{url:"/images/icons/github-142-svgrepo-com.svg",icon_explaination:"Github icon"},text:"Thanachot Tanjareon",url:"https://www.github.com/Thanachot-Tanjareon/"}},copyright:{owner:"Thanachot Tanjareon",copyright_text:"Copyright 2023, All right reserved."}};class C{constructor(e,t,n){let s=document.querySelector(".--typing-effect"),a=0,r=0;function c(){a===e.length&&(a=0),r<e[a].length?(s&&(s.textContent+=e[a][r]),r+=1,setTimeout(c,t)):setTimeout(p,n)}function p(){s&&(r>=0&&s.textContent!==""?(s.textContent=e[a].substring(0,r),r===0?s.textContent="":r-=1,setTimeout(p,n)):(a+=1,setTimeout(c,t)))}setTimeout(c,t)}}class L{constructor(e,t){o(this,"current_pathName",window.location.pathname);o(this,"elementList");o(this,"className","");this.elementList=e,this.className=t,Object.values(this.elementList).map(n=>{this.current_pathName===n.pathname&&n.classList.add(this.className)})}}class d{constructor(e,t,n){o(this,"element");o(this,"targetSlider");o(this,"classToggle","");this.element=e,this.targetSlider=n,this.classToggle=t,this.element.addEventListener("click",()=>{this.targetSlider.classList.contains(this.classToggle)?(this.targetSlider.classList.remove(this.classToggle),setTimeout(()=>this.targetSlider.classList.add("--display-none"),100)):(this.targetSlider.classList.remove("--display-none"),setTimeout(()=>this.targetSlider.classList.add(this.classToggle),100))})}}class S{constructor(e){o(this,"logoText","");this.logoText=e}Layout(){return`
            <div class="logo --userSelect-none">
                <div class="logo__text">${this.logoText}</div>
            </div>
        `}}class u{constructor(){o(this,"logoComponent",new S("T-TPortfolio"))}Layout(){return`
            <nav class="navbar">
                <section class="navbar__container">
                    ${this.logoComponent.Layout()}
                    <span class="bi bi-list --userSelect-none --cursor-pointer"></span>
                </section>
            </nav>
        `}}class h{constructor(e){o(this,"contacts",{});o(this,"dom","");this.contacts=e,Object.keys(this.contacts).map(t=>{var n,s,a,r;t==="gmail"?this.dom+=`
                    <div class="${this.contacts[t].text}__contact contact">
                        ${this.contacts[t].icon?`
                            <div class="${this.contacts[t].text}__icon contact__icon --userSelect-none">
                                <img src="${(n=this.contacts[t].icon)==null?void 0:n.url}" alt="${(s=this.contacts[t].icon)==null?void 0:s.icon_explaination}" loading="lazy" />
                            </div>
                        `:`
                            <div class="${this.contacts[t].text}__icon contact__icon bi bi-envelop-fill"></div>
                        `}
                        <p>${this.contacts[t].text}</p>
                    </div>
                `:this.dom+=`
                    <div class="${this.contacts[t].text}__contact contact">
                        <a href="${this.contacts[t].url}">
                            ${this.contacts[t].icon?`
                                <div class="${this.contacts[t].text}__icon contact__icon --userSelect-none">
                                    <img src="${(a=this.contacts[t].icon)==null?void 0:a.url}" alt="${(r=this.contacts[t].icon)==null?void 0:r.icon_explaination}" loading="lazy" />
                                </div>
                            `:`
                                <div class="${this.contacts[t].url}__icon contact__icon bi bi-facebook"></div>
                            `}
                            <p>${this.contacts[t].text}</p>
                        </a>
                    </div>
                `})}Layout(){return(()=>`
            <div class="contacts__wrapper">
                <h3 class="title">Contacts</h3>

                <div class="contacts__list">
                    ${this.dom}
                </div>
            </div>
        `)()}}class m{constructor(e){o(this,"ContactsComponent");o(this,"data",{});this.data=e,this.ContactsComponent=new h(this.data.contacts)}Layout(){return`
            <aside class="sidebar --display-none">
                <section class="sidebar__container">
                    <span class="bi bi-x-lg --userSelect-none --cursor-pointer"></span>
                    <div class="profile__wrapper">
                        <div class="profile__image --userSelect-none">
                            <img src="${this.data.profileUrl.url!==""?this.data.profileUrl.url:"https://placeholder.co/150"}" alt="${this.data.profileUrl.explaination_image!==""?this.data.profileUrl.explaination_image:"Secret"}" loading="lazy" />
                        </div>
                        <div class="profile__info">
                            <h1><span>Name:</span> ${this.data.name!==""?this.data.name:"Secret"}</h1>
                            <p><span>Age:</span> ${this.data.age!==""?this.data.age:"Secret"}</p>
                        </div>
                    </div>

                    <div class="sidebar__menu">
                        <a href="/" class="link__menu --userSelect-none">About</a>
                        <a href="/projects" class="link__menu --userSelect-none">My Projects</a>

                        ${this.ContactsComponent.Layout()}
                    </div>
                </section>
            </aside>
        `}}class g{constructor(){}Layout(){return`
            <header class="header">
                <section class="header__container">
                    <h2 class="header__info">I'm <span class="--typing-effect"></span></h2>
                </section>
            </header>
        `}}class ${constructor(e){o(this,"qouteExplaination");this.qouteExplaination=e}Layout(){return`
            <div class="about__wrapper">
                <h3 class="title">About</h3>
                <p class="info">${this.qouteExplaination}</p>
            </div>
        `}}class f{constructor(e){o(this,"skills",{});o(this,"dom","");this.skills=e,Object.keys(this.skills).map(t=>{this.dom+=`
                <h4>${t} skill</h4>
                <div class="${t}__wrapper skills">
                    ${Object.values(this.skills[t]).map(n=>`
                            <div class="${n.skill}__list skill">
                                <div class="${n.skill}__icon skill__icon --userSelect-none">
                                    <img src="${n.icon}" alt="${n.skill} icon" loading="lazy" />
                                </div>
                                <p>${n.skill}</p>
                            </div>
                        `)}
                </div>
            `.replaceAll(",","")})}Layout(){return`
            <div class="skills__wrapper">
                <h3 class="title">Skills</h3>

                <div class="skills__list">
                    ${this.dom}
                </div>
            </div>
        `}}class v{constructor(e){o(this,"owner","");o(this,"copyrightMsg","");this.owner=e.owner,this.copyrightMsg=e.copyright_text}Layout(){return`
            <footer class="footer">
                <section class="footer__container">
                    <div class="copyright__wrapper">
                        <div class="copyright__icon bi bi-c-circle"></div>
                        <div class="copyright__info">
                            <p>${this.copyrightMsg}</p>
                            <p>${this.owner}</p>
                        </div>
                    </div>
                </section>
            </footer>
        `}}class T{constructor(e){o(this,"navbarComponent");o(this,"sidebarComponent");o(this,"headerComponent");o(this,"aboutComponent");o(this,"contactsComponent");o(this,"skillsComponent");o(this,"footerComponent");o(this,"copyright",{});o(this,"data",{});o(this,"qouteExplaination","");o(this,"skills",{});Object.keys(e).map(t=>{t==="copyright"?this.copyright=e[t]:t==="name"||t==="profileUrl"||t==="age"||t==="contacts"?this.data[t]=e[t]:t==="qouteExplaination"?this.qouteExplaination=e[t]:t==="skills"&&(this.skills=e[t])}),this.navbarComponent=new u,this.sidebarComponent=new m(this.data),this.headerComponent=new g,this.aboutComponent=new $(this.qouteExplaination),this.contactsComponent=new h(this.data.contacts),this.skillsComponent=new f(this.skills),this.footerComponent=new v(this.copyright)}Layout(){return`
            <!-- navbar -->
            ${this.navbarComponent.Layout()}
            <main class="container">
                <!-- sidebar -->
                ${this.sidebarComponent.Layout()}
                <!-- board -->
                <section class="board-container">
                    <!-- header -->
                    ${this.headerComponent.Layout()}
                    <!-- about -->
                    ${this.aboutComponent.Layout()}
                    <!-- skills -->
                    ${this.skillsComponent.Layout()}
                    <!-- contacts -->
                    ${this.contactsComponent.Layout()}
                </section>
            </main>
            ${this.footerComponent.Layout()}
        `}}class x{constructor(e){o(this,"projects",null);this.projects=e}Layout(){return`
            <div class="my-projects__wrapper">
                <h3 class="title">My-Projects</h3>
                ${this.projects!==null?"":`
                    <p class="project__notFound">Not found a projects.</p>
                `}
            </div>
        `}}class j{constructor(e){o(this,"navbarComponent");o(this,"sidebarComponent");o(this,"headerComponent");o(this,"contactsComponent");o(this,"skillsComponent");o(this,"footerComponent");o(this,"projectComponent");o(this,"copyright",{});o(this,"data",{});o(this,"shortExplaination",[]);o(this,"skills",{});o(this,"projects",null);Object.keys(e).map(t=>{t==="copyright"?this.copyright=e[t]:t==="name"||t==="profileUrl"||t==="age"||t==="contacts"?this.data[t]=e[t]:t==="skills"?this.skills=e[t]:t==="projects"&&(this.projects=e[t])}),this.navbarComponent=new u,this.sidebarComponent=new m(this.data),this.headerComponent=new g,this.contactsComponent=new h(this.data.contacts),this.skillsComponent=new f(this.skills),this.projectComponent=new x(this.projects),this.footerComponent=new v(this.copyright)}Layout(){return`
        <!-- navbar -->
        ${this.navbarComponent.Layout()}
        <main class="container">
            <!-- sidebar -->
            ${this.sidebarComponent.Layout()}
            <!-- board -->
            <section class="board-container">
                <!-- header -->
                ${this.headerComponent.Layout()}
                <!-- project -->
                ${this.projectComponent.Layout()}
                <!-- skills -->
                ${this.skillsComponent.Layout()}
                <!-- contacts -->
                ${this.contactsComponent.Layout()}
            </section>
        </main>
        ${this.footerComponent.Layout()}
        `}}const P=document.querySelector("#app"),A=new w({"/":{title:"Thanachot Tanjareon | Portfolio",pageLayout:new T(l).Layout()},"/projects":{title:"Thanachot Tanjareon | Projects",pageLayout:new j(l).Layout()}},P),M=145,E=230;A.SPAFeatures(()=>{const i=document.querySelectorAll("a.link__menu"),e=document.querySelector("nav.navbar span"),t=document.querySelector("aside.sidebar .sidebar__container > span"),n=document.querySelector("aside.sidebar");new C(l.shortExplaination,M,E),new L(i,"--active-link"),new d(e,"--sidebar-sliding",n),new d(t,"--sidebar-sliding",n)});
