(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(11),i=a.n(n),r=(a(18),a(3)),l=a(7),o=a(12),j=a(23),d=a(1),b=["show"],u=function(e){var t=e.show,a=Object(o.a)(e,b);return Object(d.jsx)(j.a,{show:t,enter:"transition-opacity duration-70",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:a.children})},x=function(e){var t=e.value,a=e.onChange,c=e.options,s=e.label,n=e.name,i=e.valid,r=e.hideIcon;return Object(d.jsxs)("div",{className:"w-full",children:[Object(d.jsx)("label",{className:"input-label",htmlFor:n,children:s}),Object(d.jsxs)("div",{className:"relative",children:[Object(d.jsxs)("select",{name:n,className:"mt-1 block w-full input  ".concat(i?"border-green-700 focus:border-green:700 focus:ring-green-600 focus:ring-opacity-30":""),value:null!==t&&void 0!==t?t:"none",onChange:function(e){return a(e.target.value)},children:[Object(d.jsx)("option",{hidden:!0,disabled:!0,value:"none"}),c.map((function(e){return Object(d.jsx)("option",{children:e},e)}))]}),Object(d.jsx)(u,{show:Boolean(i)&&!r,children:Object(d.jsx)(l.a,{className:"absolute w-6 top-2 -right-7 sm:-right-8 text-green-700"})})]})]})},m=function(e){var t=e.adornmentContent,a=e.className,c=e.value,s=e.onChange,n=e.label,i=e.name,r=e.valid,o=e.error;return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{className:"input-label",htmlFor:i,children:n}),Object(d.jsxs)("div",{className:"relative",children:[Object(d.jsx)("input",{name:i,className:"".concat(a," ").concat(o?"border-red-700 focus:ring-red-200 focus:border-red-700":""," ").concat(r?"border-green-700 focus:border-green:700 focus:ring-green-600 focus:ring-opacity-30":""),type:"text",value:c,onChange:s}),Object(d.jsx)("div",{className:"absolute h-full right-0 top-0 border-l flex items-center justify-center bg-white transform scale-95 rounded-r-md w-12 ",children:Object(d.jsx)("span",{className:"px-3 font-bold text-gray-500",children:t})}),Object(d.jsx)(u,{show:Boolean(r),children:Object(d.jsx)(l.a,{className:"absolute w-6 top-2 -right-7 sm:-right-8 text-green-700"})}),Object(d.jsx)(u,{show:Boolean(o),children:Object(d.jsx)(l.b,{className:"absolute w-6 top-2 -right-7 sm:-right-8 text-red-700"})})]}),o&&Object(d.jsx)("p",{className:"text-sm mt-1 text-red-700",children:o})]})},f=a(6),h=a.n(f),O=function(e){var t=e.result,a=e.setPackagesToBuy,s=e.packagesToBuy,n=e.setPriceSum,i=e.packageTypes,l=e.initialPackSize,o=Object(c.useState)(),j=Object(r.a)(o,2),b=j[0],u=j[1],x=Object(c.useState)(""),f=Object(r.a)(x,2),O=f[0],g=f[1],v=h.a.toNumber(O.replace(",",".")),y=!h.a.isNaN(v)&&v>0;return Object(c.useEffect)((function(){if(!b)return a(void 0);var e=Math.ceil(t/b);a(e)}),[t,b]),Object(c.useEffect)((function(){if(!s||!y)return n(void 0);n(s*v)}),[s,O]),Object(c.useEffect)((function(){if(!b)return u(null!==l&&void 0!==l?l:i[0]);u(i[0])}),[i]),Object(d.jsxs)("section",{className:"my-6 flex flex-col gap-6",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h6",{className:"input-label",children:"Opakowanie:"}),Object(d.jsx)("div",{className:"flex flex-row gap-4 mt-1 flex-wrap",children:p(i,b,u)})]}),Object(d.jsx)("div",{children:Object(d.jsx)(m,{label:"Cena za opakowanie:",name:"pricePerPackage",adornmentContent:"z\u0142",className:"mt-1 block w-full input",value:O,onChange:function(e){return g(e.target.value)},error:y||O.match(/^0[.,]?$|^$/)?void 0:"Cena musi by\u0107 prawid\u0142ow\u0105 liczb\u0105 dodatni\u0105"})})]})},p=function(e,t,a){return e.map((function(e){var c=t===e?"bg-blue-600 text-white border-0":"border";return Object(d.jsx)("div",{className:"px-4 py-2 input cursor-pointer ".concat(c),onClick:function(){return a(e)},children:"".concat(e," kg")},"".concat(e))}))},g="".concat("/smig-kalkulator","/smig_thinking.png"),v=function(e){var t=e.packagesToBuy,a=e.priceSum;return Object(d.jsxs)("section",{className:"w-full flex flex-row items-center",children:[Object(d.jsx)("aside",{className:"w-2/5 relative -left-4 py-2",children:Object(d.jsx)("img",{src:g,alt:"lista_img"})}),Object(d.jsxs)("div",{className:"w-3/5 h-full flex flex-col justify-start py-4 text-right",children:[Object(d.jsx)("h5",{className:"text-gray-700 text-lg font-bold",children:"Lista zakup\xf3w:"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h6",{className:" font-roboto-slab text-gray-400 font-medium text-sm",children:"Opakowa\u0144 do kupienia:"}),Object(d.jsx)("h2",{className:"font-roboto-slab font-bold text-gray-900 text-4xl mt-2",children:t})]}),a&&Object(d.jsxs)("div",{className:"animate-slideFromRight",children:[Object(d.jsx)("h6",{className:" font-roboto-slab text-gray-400 font-medium text-sm",children:"Ca\u0142kowity koszt:"}),Object(d.jsx)("h2",{className:"font-roboto-slab font-bold text-gray-900 text-4xl mt-2",children:a.toLocaleString("pl-PL",{style:"currency",currency:"PLN"})})]})]})]})},y=Object.freeze({"F-60":{efficiencies:[1.9,2.4,3.7,4.4,5.3],packSizes:[5,15,18]},"F-2":{efficiencies:[1.9,2.4,3.7,4.4,5.3],packSizes:[5,15]},"S-3":{efficiencies:[1.8,2.4,3,3.6,4.2],packSizes:[25]},"S-4":{efficiencies:[1.8,2.4,3,3.6,4.2],packSizes:[20]},"S-6":{efficiencies:[1.8,2.4,3,3.6,4.2],packSizes:[20]},"Dw-13":{efficiencies:[1.9,2.4,3.7,4.4,5.3],packSizes:[5,15]}}),k=Object.freeze(Object.keys(y)),w=Object.freeze(["4","6","8","10","12"]),N=Object.freeze(["<30","30-60","60-100","100-150",">150"]),z=function(e){return function(e){return k.includes(e)}(e)?e:void 0},S=function(e){var t=z(e.get("name")),a=function(e,t){if(e&&t){var a=parseFloat(e);return y[t].packSizes.includes(a)?a:void 0}}(e.get("packSize"),t);return{name:t,packageSize:a}},F=a(5),P=function(e){var t=e.setResult,a=e.selectedProduct,s=e.setSelectedProduct,n=Object(c.useState)(""),i=Object(r.a)(n,2),l=i[0],o=i[1],j=Object(c.useState)(),b=Object(r.a)(j,2),u=b[0],f=b[1],O=h.a.toNumber(l.replace(",",".")),p=!h.a.isNaN(O)&&O>0;return Object(c.useEffect)((function(){if(!(a&&p&&u))return t(void 0);var e=function(e,t){var a=w.indexOf(t);return y[e].efficiencies[a]}(a,u);t(O/e)}),[a,l,u]),Object(d.jsxs)("section",{className:"my-6 flex flex-col gap-6",children:[Object(d.jsx)("div",{children:Object(d.jsx)(x,{value:a,onChange:s,label:"Produkt",name:"product",options:k,valid:Boolean(a)})}),Object(d.jsx)("div",{children:Object(d.jsx)(m,{label:"Powierzchnia:",name:"area",adornmentContent:"m\xb2",className:"mt-1 block w-full input",value:l,onChange:function(e){return o(e.target.value)},valid:p,error:p||l.match(/^0[.,]?$|^$/)?void 0:"Powierzchnia musi by\u0107 prawid\u0142ow\u0105 liczb\u0105 dodatni\u0105"})}),Object(d.jsxs)("div",{className:"flex flex-col xs:flex-row xs:justify-between xs:items-end",children:[Object(d.jsx)("div",{children:Object(d.jsx)(x,{value:u,onChange:f,label:"Rozmiar pacy z\u0119batej (mm):",name:"trowelSize",options:w,valid:Boolean(u),hideIcon:!0})}),Object(d.jsx)("div",{className:"py-3 px-1",children:Object(d.jsx)("span",{className:" text-gray-500 font-medium",children:"lub"})}),Object(d.jsx)("div",{children:Object(d.jsx)(x,{value:u,onChange:f,label:"Format p\u0142ytki (cm):",name:"tileSize",options:N.map((function(e){return T(e)})),valid:Boolean(u)})})]})]})},T=function(e){var t=N.indexOf(e);return w[t]},C=function(e){var t=e.result;return Object(d.jsxs)("section",{className:"w-full animate-slideFromRight text-center",children:[Object(d.jsx)("h5",{className:"text-gray-700 text-lg font-bold",children:"Potrzebujesz:"}),Object(d.jsx)("h2",{className:"font-roboto-slab font-bold text-gray-900 text-4xl mt-2",children:"".concat(t.toFixed(2),"kg")})]})},B=function(e){var t,a=Object(F.c)(),s=Object(r.a)(a,1)[0],n=S(s),i=Object(c.useState)(n.name),l=Object(r.a)(i,2),o=l[0],j=l[1],b=Object(c.useState)(),u=Object(r.a)(b,2),x=u[0],m=u[1],f=Object(c.useState)(),h=Object(r.a)(f,2),p=h[0],g=h[1],k=Object(c.useState)(),w=Object(r.a)(k,2),N=w[0],z=w[1];return Object(d.jsxs)("div",{className:"container mx-auto max-w-lg overflow-x-hidden",children:[Object(d.jsxs)("div",{className:"px-8 pt-6 z-10 bg-white relative",children:[Object(d.jsx)("h5",{className:"font-semibold text-gray-400 text-sm",children:"1. Zu\u017cycie kleju"}),Object(d.jsx)(P,{setResult:m,selectedProduct:o,setSelectedProduct:j}),x&&Object(d.jsx)(C,{result:x})]}),x&&o&&Object(d.jsxs)("div",{className:"px-8 py-6 animate-slideFromTop z-0 relative",children:[Object(d.jsx)("h5",{className:"font-semibold text-gray-400 text-sm",children:"2. Zakupy"}),Object(d.jsx)(O,{result:x,setPackagesToBuy:g,packagesToBuy:p,setPriceSum:z,packageTypes:(t=o,y[t].packSizes),initialPackSize:n.packageSize}),p&&Object(d.jsx)(v,{packagesToBuy:p,priceSum:N})]})]})},R=Object.freeze({"A-2":{efficiencies:[2,1,2,.4,1,.5],packSizes:[1.5,2.5,20]},"A-6":{efficiencies:[2.1,1.05,2.1,.42,1.05,.525],packSizes:[10]},"A-8":{efficiencies:[2.1,1.05,2.1,.42,1.05,.525],packSizes:[1,1.5,4]},"A-11":{efficiencies:[2.1,1.05,2.1,.42,1.05,.525],packSizes:[17]},"Dv-20":{efficiencies:[2,1,2,.4,1,.5],packSizes:[1.5,5,20]},"Dv-21":{efficiencies:[2,1,2,.4,1,.5],packSizes:[17]},"Df-16":{efficiencies:[2,1,2,.4,1,.5],packSizes:[20]}}),A=Object.freeze(Object.keys(R)),D=Object.freeze(["Tynk gipsowy","Tynk gipsowy wyg\u0142adzony mleczkiem","Tynk cementowy","G-k Q3","G-k Q4","Stara pow\u0142oka malarska"]),E=function(e){return function(e){return A.includes(e)}(e)?e:void 0},I=function(e){var t=E(e.get("name")),a=function(e,t){if(e&&t){var a=parseFloat(e);return R[t].packSizes.includes(a)?a:void 0}}(e.get("packSize"),t);return{name:t,packageSize:a}},L=function(e){var t=e.setResult,a=e.selectedProduct,s=e.setSelectedProduct,n=Object(c.useState)(""),i=Object(r.a)(n,2),l=i[0],o=i[1],j=Object(c.useState)(),b=Object(r.a)(j,2),u=b[0],f=b[1],O=h.a.toNumber(l.replace(",",".")),p=!h.a.isNaN(O)&&O>0;return Object(c.useEffect)((function(){if(!(a&&p&&u))return t(void 0);var e=function(e,t){var a=D.indexOf(t);return R[e].efficiencies[a]}(a,u);t(O/e)}),[a,l,u]),Object(d.jsxs)("section",{className:"my-6 flex flex-col gap-6",children:[Object(d.jsx)("div",{children:Object(d.jsx)(x,{value:a,onChange:s,label:"Produkt",name:"product",options:A,valid:Boolean(a)})}),Object(d.jsx)("div",{children:Object(d.jsx)(m,{label:"Powierzchnia:",name:"area",adornmentContent:"m\xb2",className:"mt-1 block w-full input",value:l,onChange:function(e){return o(e.target.value)},valid:p,error:p||l.match(/^0[.,]?$|^$/)?void 0:"Powierzchnia musi by\u0107 prawid\u0142ow\u0105 liczb\u0105 dodatni\u0105"})}),Object(d.jsx)("div",{children:Object(d.jsx)(x,{value:u,onChange:f,label:"Rodzaj pod\u0142o\u017ca:",name:"surface",options:D,valid:Boolean(u)})})]})},Z=function(e){var t=e.result;return Object(d.jsxs)("section",{className:"w-full animate-slideFromRight text-center",children:[Object(d.jsx)("h5",{className:"text-gray-700 text-lg font-bold",children:"Potrzebujesz:"}),Object(d.jsx)("h2",{className:"font-roboto-slab font-bold text-gray-900 text-4xl mt-2",children:"".concat(t.toFixed(2),"kg")})]})},$=function(){var e,t=Object(F.c)(),a=Object(r.a)(t,1)[0],s=I(a),n=Object(c.useState)(s.name),i=Object(r.a)(n,2),l=i[0],o=i[1],j=Object(c.useState)(),b=Object(r.a)(j,2),u=b[0],x=b[1],m=Object(c.useState)(),f=Object(r.a)(m,2),h=f[0],p=f[1],g=Object(c.useState)(),y=Object(r.a)(g,2),k=y[0],w=y[1];return Object(d.jsxs)("div",{className:"container mx-auto max-w-lg overflow-x-hidden",children:[Object(d.jsxs)("div",{className:"px-8 pt-6 z-10 bg-white relative",children:[Object(d.jsx)("h5",{className:"font-semibold text-gray-400 text-sm",children:Object(d.jsx)("span",{children:"1. Zu\u017cycie g\u0142adzi"})}),Object(d.jsx)(L,{setResult:x,selectedProduct:l,setSelectedProduct:o}),u&&Object(d.jsx)(Z,{result:u})]}),u&&l&&Object(d.jsxs)("div",{className:"px-8 py-6 animate-slideFromTop z-0 relative",children:[Object(d.jsx)("h5",{className:"font-semibold text-gray-400 text-sm",children:"2. Zakupy"}),Object(d.jsx)(O,{result:u,setPackagesToBuy:p,packagesToBuy:h,setPriceSum:w,packageTypes:(e=l,R[e].packSizes),initialPackSize:s.packageSize}),h&&Object(d.jsx)(v,{packagesToBuy:h,priceSum:k})]})]})},_=function(e){var t=e.currentTab,a="text-white bg-blue-600",c="font-semibold px-4 py-2 rounded-md w-24";return Object(d.jsxs)("div",{className:"w-full text-gray-700 flex gap-4 justify-center mt-8",children:[Object(d.jsx)(F.b,{to:"/gladzie",children:Object(d.jsx)("button",{className:"".concat(c," ").concat("gladzie"===t?a:"border border-gray-300"),children:"G\u0142adzie"})}),Object(d.jsx)(F.b,{to:"/kleje",children:Object(d.jsx)("button",{className:"".concat(c," ").concat("kleje"===t?a:"border border-gray-300"),children:"Kleje"})})]})},G=a(10),J="".concat("/smig-kalkulator","/smig_logo.png"),K=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("a",{href:"https://smig.pl/baza-wiedzy/",className:"hover:opacity-80 transition ease-in-out duration-200",children:"BAZA WIEDZY"}),Object(d.jsx)("a",{href:"https://smig.pl/do-pobrania/",className:"hover:opacity-80 transition ease-in-out duration-200",children:"DO POBRANIA"}),Object(d.jsx)("a",{href:"https://smig.pl/o_nas/",className:"hover:opacity-80 transition ease-in-out duration-200",children:"O NAS"})]});return Object(d.jsxs)("div",{className:"relative",children:[Object(d.jsxs)("div",{className:"w-full px-8 py-1 shadow-md flex justify-between items-center bg-white relative z-50",children:[Object(d.jsx)("a",{href:"https://smig.pl/",children:Object(d.jsx)("img",{src:J,alt:"smig_logo",className:"cursor-pointer  w-10 md:w-16",style:{maxWidth:"none"}})}),Object(d.jsx)("div",{className:"md:flex whitespace-nowrap gap-6 font-montserrat font-bold text-xs hidden",style:{color:"rgba(0,0,0,0.6)"},children:n}),Object(d.jsxs)("div",{className:"visible md:hidden w-8 cursor-pointer hover:bg-gray-100 transform ease-in-out duration-200 text-gray-800 relative",onClick:function(){return s(!a)},children:[Object(d.jsx)(j.a,{as:c.Fragment,show:a,enter:"tansition-opacity duration-200",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"tansition-opacity duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(d.jsx)("div",{className:"absolute  rounded-full p-1 -top-4",children:Object(d.jsx)(G.b,{})})}),Object(d.jsx)(j.a,{as:c.Fragment,show:!a,enter:"tansition-opacity duration-200",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"tansition-opacity duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(d.jsx)("div",{className:"absolute  rounded-full p-1 -top-4",children:Object(d.jsx)(G.a,{})})})]})]}),Object(d.jsx)(j.a,{as:c.Fragment,show:a,enter:"transform duration-300",enterFrom:"-translate-y-full",enterTo:"translate-y-0",leave:"transform duration-150",leaveFrom:"translate-y-0",leaveTo:"-translate-y-full",children:Object(d.jsx)("div",{className:"translate transform absolute bg-white w-full z-40 visible md:hidden shadow-lg border-b",children:Object(d.jsx)("div",{className:"whitespace-nowrap flex flex-col gap-4 font-montserrat font-bold text-sm px-8 py-4 text-center ",style:{color:"rgba(0,0,0,0.6)"},children:n})})})]})},M=a(2),Q=function(){return Object(d.jsx)("div",{className:"font-roboto overflow-x-hidden",children:Object(d.jsx)(F.a,{children:Object(d.jsxs)(M.c,{children:[Object(d.jsx)(M.a,{path:"/",element:Object(d.jsxs)("div",{className:"w-full flex flex-col gap-4 text-center mt-20 text-lg font-bold",children:[Object(d.jsx)(F.b,{to:"/gladzie",children:"Gladzie"}),Object(d.jsx)(F.b,{to:"/kleje",children:"Kleje"})]})}),Object(d.jsx)(M.a,{path:"/gladzie",element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(K,{}),Object(d.jsx)(_,{currentTab:"gladzie"}),Object(d.jsx)($,{})]})}),Object(d.jsx)(M.a,{path:"/kleje",element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(K,{}),Object(d.jsx)(_,{currentTab:"kleje"}),Object(d.jsx)(B,{})]})})]})})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(Q,{})}),document.getElementById("root")),W()}},[[22,1,2]]]);
//# sourceMappingURL=main.a104ad66.chunk.js.map