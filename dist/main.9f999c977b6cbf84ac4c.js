!function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],f=0,p=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={0:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;a.push([160,1]),n()}({160:function(e,t,n){n(161),e.exports=n(418)},351:function(e,t,n){"use strict";(function(e){n(352),n(399);e(".datepicker").datepicker({dateFormat:"yy-mm"})}).call(this,n(1))},418:function(e,t,n){"use strict";n.r(t);n(347),n(350),n(351);var r=n(59),i=n.n(r),a={url:"https://aviasales-api.herokuapp.com"};function o(e,t,n,r,i,a,o){try{var c=e[a](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,i)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function c(e){o(a,r,i,c,u,"next",e)}function u(e){o(a,r,i,c,u,"throw",e)}c(void 0)}))}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t.url}var t,n,r,a,o,s,l;return t=e,(n=[{key:"countries",value:(l=c(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(this.url,"/countries"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(){return l.apply(this,arguments)})},{key:"cities",value:(s=c(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(this.url,"/cities"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(){return s.apply(this,arguments)})},{key:"airlines",value:(o=c(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(this.url,"/airlines"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(){return o.apply(this,arguments)})},{key:"prices",value:(a=c(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(this.url,"/prices/cheap"),{params:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(e){return a.apply(this,arguments)})}])&&u(t.prototype,n),r&&u(t,r),e}())(a),l=n(420);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t,n,r,i,a,o){try{var c=e[a](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,i)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){d(a,r,i,o,c,"next",e)}function c(e){d(a,r,i,o,c,"throw",e)}o(void 0)}))}}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=new(function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=t,this.countries=null,this.cities=null,this.shortCitiesList={},this.airlines={},this.lastSearch={},this.formatDate=n.formatDate}var t,n,r,i,a;return t=e,(n=[{key:"init",value:(a=m(regeneratorRuntime.mark((function e(){var t,n,r,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this.api.countries(),this.api.cities(),this.api.airlines()]);case 2:return t=e.sent,n=h(t,3),r=n[0],i=n[1],a=n[2],this.countries=this.serializeCountries(r),this.cities=this.serializeCities(i),this.shortCitiesList=this.createShortCitiesList(this.cities),this.airlines=this.serializeAirlines(a),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"getCityCodeByKey",value:function(e){return Object.values(this.cities).find((function(t){return t.full_name===e})).code}},{key:"serializeCountries",value:function(e){return e.reduce((function(e,t){return e[t.code]=t,e}),{})}},{key:"serializeCities",value:function(e){var t=this;return e.reduce((function(e,n){var r=t.getCountryNameByCode(n.country_code);n.name=n.name||n.name_translations.en;var i="".concat(n.name||n.name_translations.en,", ").concat(r);return e[n.code]=p(p({},n),{},{countryName:r,full_name:i}),e}),{})}},{key:"serializeAirlines",value:function(e){return e.reduce((function(e,t){return t.logo="http://pics.avs.io/200/200/".concat(t.code,".png"),t.name=t.name||t.name_translations.en,e[t.code]=t,e}),{})}},{key:"getCountryNameByCode",value:function(e){return this.countries[e].name}},{key:"createShortCitiesList",value:function(e){return Object.entries(e).reduce((function(e,t){var n=h(t,2)[1];return e.push(n.full_name),e}),[])}},{key:"getCityNameByCode",value:function(e){return this.cities[e].name}},{key:"getAirlineNameByCode",value:function(e){return this.airlines[e]?this.airlines[e].name:""}},{key:"getAirlineLogoByCode",value:function(e){return this.airlines[e]?this.airlines[e].logo:""}},{key:"fetchTickets",value:(i=m(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.prices(t);case 2:n=e.sent,this.lastSearch=this.serializeTickets(n.data),console.log(this.lastSearch);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"serializeTickets",value:function(e){var t=this;return Object.values(e).map((function(e){return p(p({},e),{},{origin_name:t.getCityNameByCode(e.origin),destination_name:t.getCityNameByCode(e.destination),airline_logo:t.getAirlineLogoByCode(e.airline),airline_name:t.getAirlineNameByCode(e.airline),departure_at:t.formatDate(e.departure_at,"dd MM yyyy hh:mm"),return_at:t.formatDate(e.return_at,"dd MM yyyy hh:mm")})}))}}])&&g(t.prototype,n),r&&g(t,r),e}())(s,{formatDate:function(e,t){var n=new Date(e);return Object(l.a)(n,t)}});function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ticketsObject={},this.ticketsArray=[]}var t,n,r;return t=e,(n=[{key:"getTicketsArray",value:function(){return this.ticketsArray}},{key:"transformTicketsIntoArray",value:function(){this.ticketsArray=Object.values(this.ticketsObject)}},{key:"addFavouriteTicket",value:function(e){var t=this.createTicketKey(e);e.key=t,this.ticketsObject[t]=e,this.transformTicketsIntoArray()}},{key:"createTicketKey",value:function(e){return(e.flight_number+e.departure_at).replace(/\s/g,"")}}])&&k(t.prototype,n),r&&k(t,r),e}()),C=n(46);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.currency=document.getElementById("currencySelect"),this.dictionary={USD:"$",EUR:"€"}}var t,n,r;return t=e,(n=[{key:"getCurrencySymbol",value:function(){return this.dictionary[this.currencyValue]}},{key:"currencyValue",get:function(){return this.currency.value}}])&&O(t.prototype,n),r&&O(t,r),e}());function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=document.querySelector(".tickets-wrapper"),this.favContainer=document.querySelector(".fav-wrapper"),this.getCurrencySymbol=t.getCurrencySymbol.bind(t)}var t,n,r;return t=e,r=[{key:"emptyMsgTemplate",value:function(){return'<div class="card bg-light mb-3">\n                    <div class="card-header">No tickets</div>\n                    <div class="card-body">\n                        <h5 class="card-title">No tickets were found on your request</h5>\n                    </div>\n                </div>'}},{key:"ticketTemplate",value:function(e,t,n,r){return'<div class="card ticket bg-light mb-3" data-index='.concat(n,'>\n                    <div class="card-header">\n                        <div class="row">\n                            <div class="col-6 text-left">').concat(e.origin_name," -> ").concat(e.destination_name,'</div>\n                            <div class="col-6 text-right">\n                                ').concat("container"===r?'<div class="star btn-fav"></div>':"",'\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card-body">\n                        <img\n                          src="').concat(e.airline_logo,'"\n                          class="ticket-airline-img"\n                          style="max-width: 100px;"    \n                        />\n                        <div class="row mb-3">\n                            <div class="col-6">\n                                Flight number: ').concat(e.flight_number,"<br>\n                                Transfers: ").concat(e.transfers,'\n                            </div>\n                            <div class="col-6">\n                                ').concat(e.departure_at,"<br>\n                                Price:").concat(t," ").concat(e.price,"\n                            </div>\n                        </div>\n                    </div>\n                </div>")}}],(n=[{key:"renderTickets",value:function(t){if(this.clearContainer("container"),t.length){var n="",r=this.getCurrencySymbol();t.forEach((function(t,i){var a=e.ticketTemplate(t,r,i,"container");n+=a})),this.container.insertAdjacentHTML("afterbegin",n)}else this.showEmptyMsg()}},{key:"renderFavouriteTickets",value:function(t){this.clearContainer("favourite");var n="",r=this.getCurrencySymbol();t.forEach((function(t,i){var a=e.ticketTemplate(t,r,i,"favourte");n+=a})),this.favContainer.insertAdjacentHTML("afterbegin",n)}},{key:"clearContainer",value:function(e){"container"===e?this.container.innerHTML="":this.favContainer.innerHTML=""}},{key:"showEmptyMsg",value:function(){var t=e.emptyMsgTemplate();this.container.insertAdjacentHTML("afterbegin",t)}},{key:"tickets",get:function(){return this.container}}])&&P(t.prototype,n),r&&P(t,r),e}())(j);function x(e,t,n,r,i,a,o){try{var c=e[a](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,i)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){x(a,r,i,o,c,"next",e)}function c(e){x(a,r,i,o,c,"throw",e)}o(void 0)}))}}document.addEventListener("DOMContentLoaded",(function(){!function(){n.apply(this,arguments)}();var e=C.a.form,t=T.tickets;function n(){return(n=_(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.init();case 2:C.a.setAutocompleteData(b.shortCitiesList);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function r(){return(r=_(regeneratorRuntime.mark((function e(){var t,n,r,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.getCityCodeByKey(C.a.originValue),n=b.getCityCodeByKey(C.a.destinationValue),r=C.a.departDateValue,i=C.a.returnDateValue,a=j.currencyValue,e.next=7,b.fetchTickets({origin:t,destination:n,depart_date:r,return_date:i,currency:a});case 7:T.renderTickets(b.lastSearch);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.addEventListener("submit",(function(e){e.preventDefault(),function(){r.apply(this,arguments)}()})),t.addEventListener("click",(function(e){e.preventDefault(),e.target.classList.contains("btn-fav")&&function(e){w.addFavouriteTicket(b.lastSearch[e]),T.renderFavouriteTickets(w.getTicketsArray())}(e.target.closest(".card").dataset.index)}))}))},46:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=new(function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._form=document.forms.locationControls,this.origin=document.getElementById("originInput"),this.destination=document.getElementById("destinationInput"),this.depart=document.getElementById("datePickerDepart"),this.return=document.getElementById("datePickerReturn")}var r,i,a;return r=t,(i=[{key:"setAutocompleteData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e(".auto-complete").autocomplete({source:t,delay:500,minLength:3})}},{key:"form",get:function(){return this._form}},{key:"originValue",get:function(){return this.origin.value}},{key:"destinationValue",get:function(){return this.destination.value}},{key:"departDateValue",get:function(){return this.depart.value}},{key:"returnDateValue",get:function(){return this.return.value}}])&&n(r.prototype,i),a&&n(r,a),t}());t.a=r}).call(this,n(1))}});