!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,i;function c(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e){return void 0===e}function h(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function d(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function y(e,t,n,s){return Tt(e,t,n,s,!0).utc()}function g(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function v(e){if(null==e._isValid){var t=g(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function p(e){var t=y(NaN);return null!=e?_(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var r=c.momentProperties=[];function w(e,t){var n,s,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),0<r.length)for(n=0;n<r.length;n++)l(i=t[s=r[n]])||(e[s]=i);return e}var t=!1;function M(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,c.updateOffset(this),t=!1)}function k(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function S(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function D(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=S(t)),n}function a(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&D(e[s])!==D(t[s]))&&a++;return a+r}function Y(e){!1===c.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return _(function(){if(null!=c.deprecationHandler&&c.deprecationHandler(null,i),a){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var s in e+="\n["+n+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}Y(i+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,O={};function T(e,t){null!=c.deprecationHandler&&c.deprecationHandler(e,t),O[e]||(Y(t),O[e]=!0)}function b(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function x(e,t){var n,s=_({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},_(s[n],e[n]),_(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=_({},s[n]));return s}function P(e){null!=e&&this.set(e)}c.suppressDeprecationWarnings=!1,c.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var W={};function C(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function H(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function R(e){var t,n,s={};for(n in e)m(e,n)&&(t=H(n))&&(s[t]=e[n]);return s}var U={};function F(e,t){U[e]=t}function L(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return L(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(s){var e,i,t,r=s.match(N);for(e=0,i=r.length;e<i;e++)E[r[e]]?r[e]=E[r[e]]:r[e]=(t=r[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<i;t++)n+=b(r[t])?r[t].call(e,s):r[t];return n}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;0<=n&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,n,s){oe[e]=b(n)?n:function(e,t){return e&&s?s:n}}function le(e,t){return m(oe,e)?oe[e](t._strict,t._locale):new RegExp(he(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function he(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var de={};function ce(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),h(n)&&(s=function(e,t){t[n]=D(e)}),t=0;t<e.length;t++)de[e[t]]=s}function fe(e,i){ce(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var me=0,_e=1,ye=2,ge=3,ve=4,pe=5,we=6,Me=7,ke=8;function Se(e){return De(e)?366:365}function De(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),C("year","y"),F("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?c.parseTwoDigitYear(e):D(e)}),ce("YY",function(e,t){t[me]=c.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),c.parseTwoDigitYear=function(e){return D(e)+(68<D(e)?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(t,n){return function(e){return null!=e?(xe(this,t,e),c.updateOffset(this,n),this):be(this,t)}}function be(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function xe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&De(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?De(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),C("month","M"),F("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=D(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:g(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ce="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var He="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Re(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=D(t);else if(!h(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Ue(e){return null!=e?(Re(this,e),c.updateOffset(this,!0),this):be(this,"Month")}var Fe=ae;var Le=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=y([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=he(s[t]),i[t]=he(i[t]);for(t=0;t<24;t++)r[t]=he(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t;if(e<100&&0<=e){var n=Array.prototype.slice.call(arguments);n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)}else t=new Date(Date.UTC.apply(null,arguments));return t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return a=o<=0?Se(r=e-1)+o:o>Se(e)?(r=e+1,o-Se(e)):(r=e,o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(Se(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),C("week","w"),C("isoWeek","W"),F("week",5),F("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=D(e)});function je(e,t){return e.slice(t,7).concat(e.slice(0,t))}I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),C("day","d"),C("weekday","e"),C("isoWeekday","E"),F("day",11),F("weekday",11),F("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=D(e)});var Ze="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var $e="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var qe=ae;var Je=ae;var Be=ae;function Qe(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=y([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=he(o[t]),u[t]=he(u[t]),l[t]=he(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Xe(){return this.hours()%12||12}function Ke(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function et(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Xe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)+L(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+L(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+L(this.minutes(),2)+L(this.seconds(),2)}),Ke("a",!0),Ke("A",!1),C("hour","h"),F("hour",13),ue("a",et),ue("A",et),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=D(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=D(e),g(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s)),g(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i)),g(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i))});var tt,nt=Te("Hours",!0),st={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Ce,monthsShort:He,week:{dow:0,doy:6},weekdays:Ze,weekdaysMin:$e,weekdaysShort:ze,meridiemParse:/[ap]\.?m?\.?/i},it={},rt={};function at(e){return e?e.toLowerCase().replace("_","-"):e}function ot(e){var t=null;if(!it[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=tt._abbr,require("./locale/"+e),ut(t)}catch(e){}return it[e]}function ut(e,t){var n;return e&&((n=l(t)?ht(e):lt(e,t))?tt=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),tt._abbr}function lt(e,t){if(null===t)return delete it[e],null;var n,s=st;if(t.abbr=e,null!=it[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=it[e]._config;else if(null!=t.parentLocale)if(null!=it[t.parentLocale])s=it[t.parentLocale]._config;else{if(null==(n=ot(t.parentLocale)))return rt[t.parentLocale]||(rt[t.parentLocale]=[]),rt[t.parentLocale].push({name:e,config:t}),null;s=n._config}return it[e]=new P(x(s,t)),rt[e]&&rt[e].forEach(function(e){lt(e.name,e.config)}),ut(e),it[e]}function ht(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return tt;if(!o(e)){if(t=ot(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=at(e[r]).split("-")).length,n=(n=at(e[r+1]))?n.split("-"):null;0<t;){if(s=ot(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&a(i,n,!0)>=t-1)break;t--}r++}return tt}(e)}function dt(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[_e]<0||11<n[_e]?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||24<n[ge]||24===n[ge]&&(0!==n[ve]||0!==n[pe]||0!==n[we])?ge:n[ve]<0||59<n[ve]?ve:n[pe]<0||59<n[pe]?pe:n[we]<0||999<n[we]?we:-1,g(e)._overflowDayOfYear&&(t<me||ye<t)&&(t=ye),g(e)._overflowWeeks&&-1===t&&(t=Me),g(e)._overflowWeekday&&-1===t&&(t=ke),g(e).overflow=t),e}function ct(e,t,n){return null!=e?e:null!=t?t:n}function ft(e){var t,n,s,i,r,a=[];if(!e._d){var o,u;for(o=e,u=new Date(c.now()),s=o._useUTC?[u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()]:[u.getFullYear(),u.getMonth(),u.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ct(t.GG,e._a[me],Ie(bt(),1,4).year),s=ct(t.W,1),((i=ct(t.E,1))<1||7<i)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(bt(),r,a);n=ct(t.gg,e._a[me],l.year),s=ct(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=ct(e._a[me],s[me]),(e._dayOfYear>Se(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ge(r,0,e._dayOfYear),e._a[_e]=n.getUTCMonth(),e._a[ye]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[ve]&&0===e._a[pe]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o;return e<100&&0<=e?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}var mt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yt=/Z|[+-]\d\d(?::?\d\d)?/,gt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],vt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function wt(e){var t,n,s,i,r,a,o=e._i,u=mt.exec(o)||_t.exec(o);if(u){for(g(e).iso=!0,t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[1])){i=gt[t][0],s=!1!==gt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=vt.length;t<n;t++)if(vt[t][1].exec(u[3])){r=(u[2]||" ")+vt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!yt.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Yt(e)}else e._isValid=!1}var Mt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function kt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),He.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=Mt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(i){var r=kt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(g(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function Yt(e){if(e._f!==c.ISO_8601)if(e._f!==c.RFC_2822){e._a=[],g(e).empty=!0;var t,n,s,i,r,a,o,u,l=""+e._i,h=l.length,d=0;for(s=j(e._f,e._locale).match(N)||[],t=0;t<s.length;t++)i=s[t],(n=(l.match(le(i,e))||[])[0])&&(0<(r=l.substr(0,l.indexOf(n))).length&&g(e).unusedInput.push(r),l=l.slice(l.indexOf(n)+n.length),d+=n.length),E[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),a=i,u=e,null!=(o=n)&&m(de,a)&&de[a](o,u._a,u,a)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=h-d,0<l.length&&g(e).unusedInput.push(l),e._a[ge]<=12&&!0===g(e).bigHour&&0<e._a[ge]&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[ge],e._meridiem),ft(e),dt(e)}else Dt(e);else wt(e)}function Ot(e){var t,n,s,i,r=e._i,a=e._f;return e._locale=e._locale||ht(e._l),null===r||void 0===a&&""===r?p({nullInput:!0}):("string"==typeof r&&(e._i=r=e._locale.preparse(r)),k(r)?new M(dt(r)):(d(r)?e._d=r:o(a)?function(e){var t,n,s,i,r;if(0===e._f.length)return g(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Yt(t),v(t)&&(r+=g(t).charsLeftOver,r+=10*g(t).unusedTokens.length,g(t).score=r,(null==s||r<s)&&(s=r,n=t));_(e,n||t)}(e):a?Yt(e):l(n=(t=e)._i)?t._d=new Date(c.now()):d(n)?t._d=new Date(n.valueOf()):"string"==typeof n?(s=t,null===(i=pt.exec(s._i))?(wt(s),!1===s._isValid&&(delete s._isValid,Dt(s),!1===s._isValid&&(delete s._isValid,c.createFromInputFallback(s)))):s._d=new Date(+i[1])):o(n)?(t._a=f(n.slice(0),function(e){return parseInt(e,10)}),ft(t)):u(n)?function(e){if(!e._d){var t=R(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ft(e)}}(t):h(n)?t._d=new Date(n):c.createFromInputFallback(t),v(e)||(e._d=null),e))}function Tt(e,t,n,s,i){var r,a={};return!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new M(dt(Ot(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function bt(e,t,n,s){return Tt(e,t,n,s,!1)}c.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),c.ISO_8601=function(){},c.RFC_2822=function(){};var xt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:p()}),Pt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:p()});function Wt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return bt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Ct=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=R(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||t.isoWeek||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,h=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Ct,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Ct.length;++s)if(e[Ct[s]]){if(n)return!1;parseFloat(e[Ct[s]])!==D(e[Ct[s]])&&(n=!0)}return!0}(t),this._milliseconds=+h+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=ht(),this._bubble()}function Rt(e){return e instanceof Ht}function Ut(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){I(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+L(~~(e/60),2)+n+L(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Nt(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Nt(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+D(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Gt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(k(e)||d(e)?e.valueOf():bt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),c.updateOffset(n,!1),n):bt(e).local()}function Vt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Et(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}c.updateOffset=function(){};var It=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,At=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function jt(e,t){var n,s,i,r=e,a=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:h(e)?(r={},t?r[t]=e:r.milliseconds=e):(a=It.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:D(a[ye])*n,h:D(a[ge])*n,m:D(a[ve])*n,s:D(a[pe])*n,ms:D(Ut(1e3*a[we]))*n}):(a=At.exec(e))?(n="-"===a[1]?-1:1,r={y:Zt(a[2],n),M:Zt(a[3],n),w:Zt(a[4],n),d:Zt(a[5],n),h:Zt(a[6],n),m:Zt(a[7],n),s:Zt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Gt(t,e),e.isBefore(t)?n=zt(e,t):((n=zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(bt(r.from),bt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&m(e,"_locale")&&(s._locale=e._locale),s}function Zt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function zt(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function $t(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(T(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),qt(this,jt(e="string"==typeof e?+e:e,t),s),this}}function qt(e,t,n,s){var i=t._milliseconds,r=Ut(t._days),a=Ut(t._months);e.isValid()&&(s=null==s||s,a&&Re(e,be(e,"Month")+a*n),r&&xe(e,"Date",be(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&c.updateOffset(e,r||a))}jt.fn=Ht.prototype,jt.invalid=function(){return jt(NaN)};var Jt=$t(1,"add"),Bt=$t(-1,"subtract");function Qt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Xt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=ht(e))&&(this._locale=t),this)}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Kt=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function en(){return this._locale}var tn=126227808e5;function nn(e,t){return(e%t+t)%t}function sn(e,t,n){return e<100&&0<=e?new Date(e+400,t,n)-tn:new Date(e,t,n).valueOf()}function rn(e,t,n){return e<100&&0<=e?Date.UTC(e+400,t,n)-tn:Date.UTC(e,t,n)}function an(e,t){I(0,[e,e.length],0,t)}function on(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:((r=Ae(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),an("gggg","weekYear"),an("ggggg","weekYear"),an("GGGG","isoWeekYear"),an("GGGGG","isoWeekYear"),C("weekYear","gg"),C("isoWeekYear","GG"),F("weekYear",1),F("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=D(e)}),fe(["gg","GG"],function(e,t,n,s){t[s]=c.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),C("quarter","Q"),F("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(D(e)-1)}),I("D",["DD",2],"Do","date"),C("date","D"),F("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=D(e.match(B)[0])});var un=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),C("dayOfYear","DDD"),F("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=D(e)}),I("m",["mm",2],0,"minute"),C("minute","m"),F("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],ve);var ln=Te("Minutes",!1);I("s",["ss",2],0,"second"),C("second","s"),F("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],pe);var hn,dn=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),C("millisecond","ms"),F("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),hn="SSSS";hn.length<=9;hn+="S")ue(hn,ne);function cn(e,t){t[we]=D(1e3*("0."+e))}for(hn="S";hn.length<=9;hn+="S")ce(hn,cn);var fn=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var mn=M.prototype;function _n(e){return e}mn.add=Jt,mn.calendar=function(e,t){var n=e||bt(),s=Gt(n,this).startOf("day"),i=c.calendarFormat(this,s)||"sameElse",r=t&&(b(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,bt(n)))},mn.clone=function(){return new M(this)},mn.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Gt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=H(t)){case"year":r=Qt(this,s)/12;break;case"month":r=Qt(this,s);break;case"quarter":r=Qt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:S(r)},mn.endOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-nn(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-nn(t,1e3)-1;break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.format=function(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},mn.from=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.fromNow=function(e){return this.from(bt(),e)},mn.to=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.toNow=function(e){return this.to(bt(),e)},mn.get=function(e){return b(this[e=H(e)])?this[e]():this},mn.invalidAt=function(){return g(this).overflow},mn.isAfter=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},mn.isBefore=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},mn.isBetween=function(e,t,n,s){var i=k(e)?e:bt(e),r=k(t)?t:bt(t);return!!(this.isValid()&&i.isValid()&&r.isValid())&&("("===(s=s||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===s[1]?this.isBefore(r,n):!this.isAfter(r,n))},mn.isSame=function(e,t){var n,s=k(e)?e:bt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},mn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},mn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},mn.isValid=function(){return v(this)},mn.lang=Kt,mn.locale=Xt,mn.localeData=en,mn.max=Pt,mn.min=xt,mn.parsingFlags=function(){return _({},g(this))},mn.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:U[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=R(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(b(this[e=H(e)]))return this[e](t);return this},mn.startOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=nn(t,6e4);break;case"second":t=this._d.valueOf(),t-=nn(t,1e3);break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.subtract=Bt,mn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},mn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},mn.toDate=function(){return new Date(this.valueOf())},mn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):b(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},mn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},mn.toJSON=function(){return this.isValid()?this.toISOString():null},mn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},mn.unix=function(){return Math.floor(this.valueOf()/1e3)},mn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},mn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},mn.year=Oe,mn.isLeapYear=function(){return De(this.year())},mn.weekYear=function(e){return on.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},mn.isoWeekYear=function(e){return on.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},mn.quarter=mn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},mn.month=Ue,mn.daysInMonth=function(){return Pe(this.year(),this.month())},mn.week=mn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},mn.isoWeek=mn.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},mn.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},mn.isoWeeksInYear=function(){return Ae(this.year(),1,4)},mn.date=un,mn.day=mn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},mn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},mn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null==e)return this.day()||7;var t,n,s=(t=e,n=this.localeData(),"string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t);return this.day(this.day()%7?s:s-7)},mn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},mn.hour=mn.hours=nt,mn.minute=mn.minutes=ln,mn.second=mn.seconds=dn,mn.millisecond=mn.milliseconds=fn,mn.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?i:Vt(this);if("string"==typeof e){if(null===(e=Nt(re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Vt(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?qt(this,jt(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this},mn.utc=function(e){return this.utcOffset(0,e)},mn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Vt(this),"m")),this},mn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Nt(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},mn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?bt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},mn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},mn.isLocal=function(){return!!this.isValid()&&!this._isUTC},mn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},mn.isUtc=Et,mn.isUTC=Et,mn.zoneAbbr=function(){return this._isUTC?"UTC":""},mn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},mn.dates=n("dates accessor is deprecated. Use date instead.",un),mn.months=n("months accessor is deprecated. Use month instead",Ue),mn.years=n("years accessor is deprecated. Use year instead",Oe),mn.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),mn.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(w(e,this),(e=Ot(e))._a){var t=e._isUTC?y(e._a):bt(e._a);this._isDSTShifted=this.isValid()&&0<a(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var yn=P.prototype;function gn(e,t,n,s){var i=ht(),r=y().set(s,t);return i[n](r,e)}function vn(e,t,n){if(h(e)&&(t=e,e=void 0),e=e||"",null!=t)return gn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=gn(e,s,n,"month");return i}function pn(e,t,n,s){t=("boolean"==typeof e?h(t)&&(n=t,t=void 0):(t=e,e=!1,h(n=t)&&(n=t,t=void 0)),t||"");var i,r=ht(),a=e?r._week.dow:0;if(null!=n)return gn(t,(n+a)%7,s,"day");var o=[];for(i=0;i<7;i++)o[i]=gn(t,(i+a)%7,s,"day");return o}yn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return b(s)?s.call(t,n):s},yn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},yn.invalidDate=function(){return this._invalidDate},yn.ordinal=function(e){return this._ordinal.replace("%d",e)},yn.preparse=_n,yn.postformat=_n,yn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return b(i)?i(e,t,n,s):i.replace(/%d/i,e)},yn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return b(n)?n(t):n.replace(/%s/i,t)},yn.set=function(e){var t,n;for(n in e)b(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},yn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},yn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},yn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=y([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=y([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},yn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Le),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},yn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Fe),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},yn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},yn.firstDayOfYear=function(){return this._week.doy},yn.firstDayOfWeek=function(){return this._week.dow},yn.weekdays=function(e,t){var n=o(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?je(n,this._week.dow):e?n[e.day()]:n},yn.weekdaysMin=function(e){return!0===e?je(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},yn.weekdaysShort=function(e){return!0===e?je(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},yn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=y([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=y([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},yn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=qe),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},yn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Je),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},yn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Be),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},yn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},yn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ut("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===D(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),c.lang=n("moment.lang is deprecated. Use moment.locale instead.",ut),c.langData=n("moment.langData is deprecated. Use moment.localeData instead.",ht);var wn=Math.abs;function Mn(e,t,n,s){var i=jt(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function kn(e){return e<0?Math.floor(e):Math.ceil(e)}function Sn(e){return 4800*e/146097}function Dn(e){return 146097*e/4800}function Yn(e){return function(){return this.as(e)}}var On=Yn("ms"),Tn=Yn("s"),bn=Yn("m"),xn=Yn("h"),Pn=Yn("d"),Wn=Yn("w"),Cn=Yn("M"),Hn=Yn("Q"),Rn=Yn("y");function Un(e){return function(){return this.isValid()?this._data[e]:NaN}}var Fn=Un("milliseconds"),Ln=Un("seconds"),Nn=Un("minutes"),Gn=Un("hours"),Vn=Un("days"),En=Un("months"),In=Un("years");var An=Math.round,jn={ss:44,s:45,m:45,h:22,d:26,M:11};var Zn=Math.abs;function zn(e){return(0<e)-(e<0)||+e}function $n(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Zn(this._milliseconds)/1e3,s=Zn(this._days),i=Zn(this._months);t=S((e=S(n/60))/60),n%=60,e%=60;var r=S(i/12),a=i%=12,o=s,u=t,l=e,h=n?n.toFixed(3).replace(/\.?0+$/,""):"",d=this.asSeconds();if(!d)return"P0D";var c=d<0?"-":"",f=zn(this._months)!==zn(d)?"-":"",m=zn(this._days)!==zn(d)?"-":"",_=zn(this._milliseconds)!==zn(d)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||h?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(h?_+h+"S":"")}var qn=Ht.prototype;return qn.isValid=function(){return this._isValid},qn.abs=function(){var e=this._data;return this._milliseconds=wn(this._milliseconds),this._days=wn(this._days),this._months=wn(this._months),e.milliseconds=wn(e.milliseconds),e.seconds=wn(e.seconds),e.minutes=wn(e.minutes),e.hours=wn(e.hours),e.months=wn(e.months),e.years=wn(e.years),this},qn.add=function(e,t){return Mn(this,e,t,1)},qn.subtract=function(e,t){return Mn(this,e,t,-1)},qn.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=H(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+Sn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Dn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},qn.asMilliseconds=On,qn.asSeconds=Tn,qn.asMinutes=bn,qn.asHours=xn,qn.asDays=Pn,qn.asWeeks=Wn,qn.asMonths=Cn,qn.asQuarters=Hn,qn.asYears=Rn,qn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*D(this._months/12):NaN},qn._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*kn(Dn(o)+a),o=a=0),u.milliseconds=r%1e3,e=S(r/1e3),u.seconds=e%60,t=S(e/60),u.minutes=t%60,n=S(t/60),u.hours=n%24,o+=i=S(Sn(a+=S(n/24))),a-=kn(Dn(i)),s=S(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},qn.clone=function(){return jt(this)},qn.get=function(e){return e=H(e),this.isValid()?this[e+"s"]():NaN},qn.milliseconds=Fn,qn.seconds=Ln,qn.minutes=Nn,qn.hours=Gn,qn.days=Vn,qn.weeks=function(){return S(this.days()/7)},qn.months=En,qn.years=In,qn.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,h,d,c=this.localeData(),f=(n=!e,s=c,i=jt(t=this).abs(),r=An(i.as("s")),a=An(i.as("m")),o=An(i.as("h")),u=An(i.as("d")),l=An(i.as("M")),h=An(i.as("y")),(d=r<=jn.ss&&["s",r]||r<jn.s&&["ss",r]||a<=1&&["m"]||a<jn.m&&["mm",a]||o<=1&&["h"]||o<jn.h&&["hh",o]||u<=1&&["d"]||u<jn.d&&["dd",u]||l<=1&&["M"]||l<jn.M&&["MM",l]||h<=1&&["y"]||["yy",h])[2]=n,d[3]=0<+t,d[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,d));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},qn.toISOString=$n,qn.toString=$n,qn.toJSON=$n,qn.locale=Xt,qn.localeData=en,qn.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",$n),qn.lang=Kt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(D(e))}),c.version="2.24.0",e=bt,c.fn=mn,c.min=function(){return Wt("isBefore",[].slice.call(arguments,0))},c.max=function(){return Wt("isAfter",[].slice.call(arguments,0))},c.now=function(){return Date.now?Date.now():+new Date},c.utc=y,c.unix=function(e){return bt(1e3*e)},c.months=function(e,t){return vn(e,t,"months")},c.isDate=d,c.locale=ut,c.invalid=p,c.duration=jt,c.isMoment=k,c.weekdays=function(e,t,n){return pn(e,t,n,"weekdays")},c.parseZone=function(){return bt.apply(null,arguments).parseZone()},c.localeData=ht,c.isDuration=Rt,c.monthsShort=function(e,t){return vn(e,t,"monthsShort")},c.weekdaysMin=function(e,t,n){return pn(e,t,n,"weekdaysMin")},c.defineLocale=lt,c.updateLocale=function(e,t){if(null!=t){var n,s,i=st;null!=(s=ot(e))&&(i=s._config),(n=new P(t=x(i,t))).parentLocale=it[e],it[e]=n,ut(e)}else null!=it[e]&&(null!=it[e].parentLocale?it[e]=it[e].parentLocale:null!=it[e]&&delete it[e]);return it[e]},c.locales=function(){return s(it)},c.weekdaysShort=function(e,t,n){return pn(e,t,n,"weekdaysShort")},c.normalizeUnits=H,c.relativeTimeRounding=function(e){return void 0===e?An:"function"==typeof e&&(An=e,!0)},c.relativeTimeThreshold=function(e,t){return void 0!==jn[e]&&(void 0===t?jn[e]:(jn[e]=t,"s"===e&&(jn.ss=t-1),!0))},c.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},c.prototype=mn,c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},c});
;(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==="object"&&typeof module==="object")module.exports=factory();else if(typeof define==="function"&&define.amd)define([],factory);else if(typeof exports==="object")exports["signalR"]=factory();else root["signalR"]=factory()})(window,function(){return function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var es6_promise_dist_es6_promise_auto_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);var es6_promise_dist_es6_promise_auto_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(es6_promise_dist_es6_promise_auto_js__WEBPACK_IMPORTED_MODULE_0__);var _index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3);__webpack_require__.d(__webpack_exports__,"VERSION",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["VERSION"]});__webpack_require__.d(__webpack_exports__,"AbortError",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["AbortError"]});__webpack_require__.d(__webpack_exports__,"HttpError",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["HttpError"]});__webpack_require__.d(__webpack_exports__,"TimeoutError",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]});__webpack_require__.d(__webpack_exports__,"HttpClient",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]});__webpack_require__.d(__webpack_exports__,"HttpResponse",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]});__webpack_require__.d(__webpack_exports__,"DefaultHttpClient",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["DefaultHttpClient"]});__webpack_require__.d(__webpack_exports__,"HubConnection",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["HubConnection"]});__webpack_require__.d(__webpack_exports__,"HubConnectionState",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["HubConnectionState"]});__webpack_require__.d(__webpack_exports__,"HubConnectionBuilder",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]});__webpack_require__.d(__webpack_exports__,"MessageType",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["MessageType"]});__webpack_require__.d(__webpack_exports__,"LogLevel",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["LogLevel"]});__webpack_require__.d(__webpack_exports__,"HttpTransportType",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["HttpTransportType"]});__webpack_require__.d(__webpack_exports__,"TransferFormat",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"]});__webpack_require__.d(__webpack_exports__,"NullLogger",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["NullLogger"]});__webpack_require__.d(__webpack_exports__,"JsonHubProtocol",function(){return _index__WEBPACK_IMPORTED_MODULE_1__["JsonHubProtocol"]});if(!Uint8Array.prototype.indexOf){Object.defineProperty(Uint8Array.prototype,"indexOf",{value:Array.prototype.indexOf,writable:true})}if(!Uint8Array.prototype.slice){Object.defineProperty(Uint8Array.prototype,"slice",{value:Array.prototype.slice,writable:true})}if(!Uint8Array.prototype.forEach){Object.defineProperty(Uint8Array.prototype,"forEach",{value:Array.prototype.forEach,writable:true})}},function(module,exports,__webpack_require__){(function(global){var require;
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.2+97478eb6
 */
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.2+97478eb6
 */
(function(global,factory){true?module.exports=factory():undefined})(this,function(){"use strict";function objectOrFunction(x){var type=typeof x;return x!==null&&(type==="object"||type==="function")}function isFunction(x){return typeof x==="function"}var _isArray=void 0;if(Array.isArray){_isArray=Array.isArray}else{_isArray=function(x){return Object.prototype.toString.call(x)==="[object Array]"}}var isArray=_isArray;var len=0;var vertxNext=void 0;var customSchedulerFn=void 0;var asap=function asap(callback,arg){queue[len]=callback;queue[len+1]=arg;len+=2;if(len===2){if(customSchedulerFn){customSchedulerFn(flush)}else{scheduleFlush()}}};function setScheduler(scheduleFn){customSchedulerFn=scheduleFn}function setAsap(asapFn){asap=asapFn}var browserWindow=typeof window!=="undefined"?window:undefined;var browserGlobal=browserWindow||{};var BrowserMutationObserver=browserGlobal.MutationObserver||browserGlobal.WebKitMutationObserver;var isNode=typeof self==="undefined"&&typeof process!=="undefined"&&{}.toString.call(process)==="[object process]";var isWorker=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function useNextTick(){return function(){return process.nextTick(flush)}}function useVertxTimer(){if(typeof vertxNext!=="undefined"){return function(){vertxNext(flush)}}return useSetTimeout()}function useMutationObserver(){var iterations=0;var observer=new BrowserMutationObserver(flush);var node=document.createTextNode("");observer.observe(node,{characterData:true});return function(){node.data=iterations=++iterations%2}}function useMessageChannel(){var channel=new MessageChannel;channel.port1.onmessage=flush;return function(){return channel.port2.postMessage(0)}}function useSetTimeout(){var globalSetTimeout=setTimeout;return function(){return globalSetTimeout(flush,1)}}var queue=new Array(1e3);function flush(){for(var i=0;i<len;i+=2){var callback=queue[i];var arg=queue[i+1];callback(arg);queue[i]=undefined;queue[i+1]=undefined}len=0}function attemptVertx(){try{var r=require;var vertx=__webpack_require__(!function webpackMissingModule(){var e=new Error("Cannot find module 'vertx'");e.code="MODULE_NOT_FOUND";throw e}());vertxNext=vertx.runOnLoop||vertx.runOnContext;return useVertxTimer()}catch(e){return useSetTimeout()}}var scheduleFlush=void 0;if(isNode){scheduleFlush=useNextTick()}else if(BrowserMutationObserver){scheduleFlush=useMutationObserver()}else if(isWorker){scheduleFlush=useMessageChannel()}else if(browserWindow===undefined&&"function"==="function"){scheduleFlush=attemptVertx()}else{scheduleFlush=useSetTimeout()}function then(onFulfillment,onRejection){var parent=this;var child=new this.constructor(noop);if(child[PROMISE_ID]===undefined){makePromise(child)}var _state=parent._state;if(_state){var callback=arguments[_state-1];asap(function(){return invokeCallback(_state,child,callback,parent._result)})}else{subscribe(parent,child,onFulfillment,onRejection)}return child}function resolve$1(object){var Constructor=this;if(object&&typeof object==="object"&&object.constructor===Constructor){return object}var promise=new Constructor(noop);resolve(promise,object);return promise}var PROMISE_ID=Math.random().toString(36).substring(16);function noop(){}var PENDING=void 0;var FULFILLED=1;var REJECTED=2;var GET_THEN_ERROR=new ErrorObject;function selfFulfillment(){return new TypeError("You cannot resolve a promise with itself")}function cannotReturnOwn(){return new TypeError("A promises callback cannot return that same promise.")}function getThen(promise){try{return promise.then}catch(error){GET_THEN_ERROR.error=error;return GET_THEN_ERROR}}function tryThen(then$$1,value,fulfillmentHandler,rejectionHandler){try{then$$1.call(value,fulfillmentHandler,rejectionHandler)}catch(e){return e}}function handleForeignThenable(promise,thenable,then$$1){asap(function(promise){var sealed=false;var error=tryThen(then$$1,thenable,function(value){if(sealed){return}sealed=true;if(thenable!==value){resolve(promise,value)}else{fulfill(promise,value)}},function(reason){if(sealed){return}sealed=true;reject(promise,reason)},"Settle: "+(promise._label||" unknown promise"));if(!sealed&&error){sealed=true;reject(promise,error)}},promise)}function handleOwnThenable(promise,thenable){if(thenable._state===FULFILLED){fulfill(promise,thenable._result)}else if(thenable._state===REJECTED){reject(promise,thenable._result)}else{subscribe(thenable,undefined,function(value){return resolve(promise,value)},function(reason){return reject(promise,reason)})}}function handleMaybeThenable(promise,maybeThenable,then$$1){if(maybeThenable.constructor===promise.constructor&&then$$1===then&&maybeThenable.constructor.resolve===resolve$1){handleOwnThenable(promise,maybeThenable)}else{if(then$$1===GET_THEN_ERROR){reject(promise,GET_THEN_ERROR.error);GET_THEN_ERROR.error=null}else if(then$$1===undefined){fulfill(promise,maybeThenable)}else if(isFunction(then$$1)){handleForeignThenable(promise,maybeThenable,then$$1)}else{fulfill(promise,maybeThenable)}}}function resolve(promise,value){if(promise===value){reject(promise,selfFulfillment())}else if(objectOrFunction(value)){handleMaybeThenable(promise,value,getThen(value))}else{fulfill(promise,value)}}function publishRejection(promise){if(promise._onerror){promise._onerror(promise._result)}publish(promise)}function fulfill(promise,value){if(promise._state!==PENDING){return}promise._result=value;promise._state=FULFILLED;if(promise._subscribers.length!==0){asap(publish,promise)}}function reject(promise,reason){if(promise._state!==PENDING){return}promise._state=REJECTED;promise._result=reason;asap(publishRejection,promise)}function subscribe(parent,child,onFulfillment,onRejection){var _subscribers=parent._subscribers;var length=_subscribers.length;parent._onerror=null;_subscribers[length]=child;_subscribers[length+FULFILLED]=onFulfillment;_subscribers[length+REJECTED]=onRejection;if(length===0&&parent._state){asap(publish,parent)}}function publish(promise){var subscribers=promise._subscribers;var settled=promise._state;if(subscribers.length===0){return}var child=void 0,callback=void 0,detail=promise._result;for(var i=0;i<subscribers.length;i+=3){child=subscribers[i];callback=subscribers[i+settled];if(child){invokeCallback(settled,child,callback,detail)}else{callback(detail)}}promise._subscribers.length=0}function ErrorObject(){this.error=null}var TRY_CATCH_ERROR=new ErrorObject;function tryCatch(callback,detail){try{return callback(detail)}catch(e){TRY_CATCH_ERROR.error=e;return TRY_CATCH_ERROR}}function invokeCallback(settled,promise,callback,detail){var hasCallback=isFunction(callback),value=void 0,error=void 0,succeeded=void 0,failed=void 0;if(hasCallback){value=tryCatch(callback,detail);if(value===TRY_CATCH_ERROR){failed=true;error=value.error;value.error=null}else{succeeded=true}if(promise===value){reject(promise,cannotReturnOwn());return}}else{value=detail;succeeded=true}if(promise._state!==PENDING){}else if(hasCallback&&succeeded){resolve(promise,value)}else if(failed){reject(promise,error)}else if(settled===FULFILLED){fulfill(promise,value)}else if(settled===REJECTED){reject(promise,value)}}function initializePromise(promise,resolver){try{resolver(function resolvePromise(value){resolve(promise,value)},function rejectPromise(reason){reject(promise,reason)})}catch(e){reject(promise,e)}}var id=0;function nextId(){return id++}function makePromise(promise){promise[PROMISE_ID]=id++;promise._state=undefined;promise._result=undefined;promise._subscribers=[]}function validationError(){return new Error("Array Methods must be provided an Array")}function validationError(){return new Error("Array Methods must be provided an Array")}var Enumerator=function(){function Enumerator(Constructor,input){this._instanceConstructor=Constructor;this.promise=new Constructor(noop);if(!this.promise[PROMISE_ID]){makePromise(this.promise)}if(isArray(input)){this.length=input.length;this._remaining=input.length;this._result=new Array(this.length);if(this.length===0){fulfill(this.promise,this._result)}else{this.length=this.length||0;this._enumerate(input);if(this._remaining===0){fulfill(this.promise,this._result)}}}else{reject(this.promise,validationError())}}Enumerator.prototype._enumerate=function _enumerate(input){for(var i=0;this._state===PENDING&&i<input.length;i++){this._eachEntry(input[i],i)}};Enumerator.prototype._eachEntry=function _eachEntry(entry,i){var c=this._instanceConstructor;var resolve$$1=c.resolve;if(resolve$$1===resolve$1){var _then=getThen(entry);if(_then===then&&entry._state!==PENDING){this._settledAt(entry._state,i,entry._result)}else if(typeof _then!=="function"){this._remaining--;this._result[i]=entry}else if(c===Promise$2){var promise=new c(noop);handleMaybeThenable(promise,entry,_then);this._willSettleAt(promise,i)}else{this._willSettleAt(new c(function(resolve$$1){return resolve$$1(entry)}),i)}}else{this._willSettleAt(resolve$$1(entry),i)}};Enumerator.prototype._settledAt=function _settledAt(state,i,value){var promise=this.promise;if(promise._state===PENDING){this._remaining--;if(state===REJECTED){reject(promise,value)}else{this._result[i]=value}}if(this._remaining===0){fulfill(promise,this._result)}};Enumerator.prototype._willSettleAt=function _willSettleAt(promise,i){var enumerator=this;subscribe(promise,undefined,function(value){return enumerator._settledAt(FULFILLED,i,value)},function(reason){return enumerator._settledAt(REJECTED,i,reason)})};return Enumerator}();function all(entries){return new Enumerator(this,entries).promise}function race(entries){var Constructor=this;if(!isArray(entries)){return new Constructor(function(_,reject){return reject(new TypeError("You must pass an array to race."))})}else{return new Constructor(function(resolve,reject){var length=entries.length;for(var i=0;i<length;i++){Constructor.resolve(entries[i]).then(resolve,reject)}})}}function reject$1(reason){var Constructor=this;var promise=new Constructor(noop);reject(promise,reason);return promise}function needsResolver(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function needsNew(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var Promise$2=function(){function Promise(resolver){this[PROMISE_ID]=nextId();this._result=this._state=undefined;this._subscribers=[];if(noop!==resolver){typeof resolver!=="function"&&needsResolver();this instanceof Promise?initializePromise(this,resolver):needsNew()}}Promise.prototype.catch=function _catch(onRejection){return this.then(null,onRejection)};Promise.prototype.finally=function _finally(callback){var promise=this;var constructor=promise.constructor;return promise.then(function(value){return constructor.resolve(callback()).then(function(){return value})},function(reason){return constructor.resolve(callback()).then(function(){throw reason})})};return Promise}();Promise$2.prototype.then=then;Promise$2.all=all;Promise$2.race=race;Promise$2.resolve=resolve$1;Promise$2.reject=reject$1;Promise$2._setScheduler=setScheduler;Promise$2._setAsap=setAsap;Promise$2._asap=asap;function polyfill(){var local=void 0;if(typeof global!=="undefined"){local=global}else if(typeof self!=="undefined"){local=self}else{try{local=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}}var P=local.Promise;if(P){var promiseToString=null;try{promiseToString=Object.prototype.toString.call(P.resolve())}catch(e){}if(promiseToString==="[object Promise]"&&!P.cast){return}}local.Promise=Promise$2}Promise$2.polyfill=polyfill;Promise$2.Promise=Promise$2;Promise$2.polyfill();return Promise$2})}).call(this,__webpack_require__(2))},function(module,exports){var g;g=function(){return this}();try{g=g||Function("return this")()||(1,eval)("this")}catch(e){if(typeof window==="object")g=window}module.exports=g},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"VERSION",function(){return VERSION});var _Errors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);__webpack_require__.d(__webpack_exports__,"AbortError",function(){return _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]});__webpack_require__.d(__webpack_exports__,"HttpError",function(){return _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"]});__webpack_require__.d(__webpack_exports__,"TimeoutError",function(){return _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]});var _HttpClient__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);__webpack_require__.d(__webpack_exports__,"HttpClient",function(){return _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]});__webpack_require__.d(__webpack_exports__,"HttpResponse",function(){return _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]});var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6);__webpack_require__.d(__webpack_exports__,"DefaultHttpClient",function(){return _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__["DefaultHttpClient"]});var _HubConnection__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10);__webpack_require__.d(__webpack_exports__,"HubConnection",function(){return _HubConnection__WEBPACK_IMPORTED_MODULE_3__["HubConnection"]});__webpack_require__.d(__webpack_exports__,"HubConnectionState",function(){return _HubConnection__WEBPACK_IMPORTED_MODULE_3__["HubConnectionState"]});var _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(16);__webpack_require__.d(__webpack_exports__,"HubConnectionBuilder",function(){return _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_4__["HubConnectionBuilder"]});var _IHubProtocol__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(15);__webpack_require__.d(__webpack_exports__,"MessageType",function(){return _IHubProtocol__WEBPACK_IMPORTED_MODULE_5__["MessageType"]});var _ILogger__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9);__webpack_require__.d(__webpack_exports__,"LogLevel",function(){return _ILogger__WEBPACK_IMPORTED_MODULE_6__["LogLevel"]});var _ITransport__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(18);__webpack_require__.d(__webpack_exports__,"HttpTransportType",function(){return _ITransport__WEBPACK_IMPORTED_MODULE_7__["HttpTransportType"]});__webpack_require__.d(__webpack_exports__,"TransferFormat",function(){return _ITransport__WEBPACK_IMPORTED_MODULE_7__["TransferFormat"]});var _Loggers__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(14);__webpack_require__.d(__webpack_exports__,"NullLogger",function(){return _Loggers__WEBPACK_IMPORTED_MODULE_8__["NullLogger"]});var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(23);__webpack_require__.d(__webpack_exports__,"JsonHubProtocol",function(){return _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_9__["JsonHubProtocol"]});var VERSION="1.1.4"},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"HttpError",function(){return HttpError});__webpack_require__.d(__webpack_exports__,"TimeoutError",function(){return TimeoutError});__webpack_require__.d(__webpack_exports__,"AbortError",function(){return AbortError});var __extends=undefined&&undefined.__extends||function(){var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p]};return function(d,b){extendStatics(d,b);function __(){this.constructor=d}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __)}}();var HttpError=function(_super){__extends(HttpError,_super);function HttpError(errorMessage,statusCode){var _newTarget=this.constructor;var _this=this;var trueProto=_newTarget.prototype;_this=_super.call(this,errorMessage)||this;_this.statusCode=statusCode;_this.__proto__=trueProto;return _this}return HttpError}(Error);var TimeoutError=function(_super){__extends(TimeoutError,_super);function TimeoutError(errorMessage){var _newTarget=this.constructor;if(errorMessage===void 0){errorMessage="A timeout occurred."}var _this=this;var trueProto=_newTarget.prototype;_this=_super.call(this,errorMessage)||this;_this.__proto__=trueProto;return _this}return TimeoutError}(Error);var AbortError=function(_super){__extends(AbortError,_super);function AbortError(errorMessage){var _newTarget=this.constructor;if(errorMessage===void 0){errorMessage="An abort occurred."}var _this=this;var trueProto=_newTarget.prototype;_this=_super.call(this,errorMessage)||this;_this.__proto__=trueProto;return _this}return AbortError}(Error)},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"HttpResponse",function(){return HttpResponse});__webpack_require__.d(__webpack_exports__,"HttpClient",function(){return HttpClient});var __assign=undefined&&undefined.__assign||Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p]}return t};var HttpResponse=function(){function HttpResponse(statusCode,statusText,content){this.statusCode=statusCode;this.statusText=statusText;this.content=content}return HttpResponse}();var HttpClient=function(){function HttpClient(){}HttpClient.prototype.get=function(url,options){return this.send(__assign({},options,{method:"GET",url:url}))};HttpClient.prototype.post=function(url,options){return this.send(__assign({},options,{method:"POST",url:url}))};HttpClient.prototype.delete=function(url,options){return this.send(__assign({},options,{method:"DELETE",url:url}))};HttpClient.prototype.getCookieString=function(url){return""};return HttpClient}()},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"DefaultHttpClient",function(){return DefaultHttpClient});var _Errors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);var _HttpClient__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);var _NodeHttpClient__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7);var _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8);var __extends=undefined&&undefined.__extends||function(){var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p]};return function(d,b){extendStatics(d,b);function __(){this.constructor=d}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __)}}();var DefaultHttpClient=function(_super){__extends(DefaultHttpClient,_super);function DefaultHttpClient(logger){var _this=_super.call(this)||this;if(typeof XMLHttpRequest!=="undefined"){_this.httpClient=new _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__["XhrHttpClient"](logger)}else{_this.httpClient=new _NodeHttpClient__WEBPACK_IMPORTED_MODULE_2__["NodeHttpClient"](logger)}return _this}DefaultHttpClient.prototype.send=function(request){if(request.abortSignal&&request.abortSignal.aborted){return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"])}if(!request.method){return Promise.reject(new Error("No method defined."))}if(!request.url){return Promise.reject(new Error("No url defined."))}return this.httpClient.send(request)};DefaultHttpClient.prototype.getCookieString=function(url){return this.httpClient.getCookieString(url)};return DefaultHttpClient}(_HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"NodeHttpClient",function(){return NodeHttpClient});var _HttpClient__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5);var __extends=undefined&&undefined.__extends||function(){var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p]};return function(d,b){extendStatics(d,b);function __(){this.constructor=d}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __)}}();var NodeHttpClient=function(_super){__extends(NodeHttpClient,_super);function NodeHttpClient(logger){return _super.call(this)||this}NodeHttpClient.prototype.send=function(){return Promise.reject(new Error("If using Node either provide an XmlHttpRequest polyfill or consume the cjs or esm script instead of the browser/signalr.js one."))};return NodeHttpClient}(_HttpClient__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"XhrHttpClient",function(){return XhrHttpClient});var _Errors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);var _HttpClient__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);var _ILogger__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9);var __extends=undefined&&undefined.__extends||function(){var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p]};return function(d,b){extendStatics(d,b);function __(){this.constructor=d}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __)}}();var XhrHttpClient=function(_super){__extends(XhrHttpClient,_super);function XhrHttpClient(logger){var _this=_super.call(this)||this;_this.logger=logger;return _this}XhrHttpClient.prototype.send=function(request){var _this=this;if(request.abortSignal&&request.abortSignal.aborted){return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"])}if(!request.method){return Promise.reject(new Error("No method defined."))}if(!request.url){return Promise.reject(new Error("No url defined."))}return new Promise(function(resolve,reject){var xhr=new XMLHttpRequest;xhr.open(request.method,request.url,true);xhr.withCredentials=true;xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");xhr.setRequestHeader("Content-Type","text/plain;charset=UTF-8");var headers=request.headers;if(headers){Object.keys(headers).forEach(function(header){xhr.setRequestHeader(header,headers[header])})}if(request.responseType){xhr.responseType=request.responseType}if(request.abortSignal){request.abortSignal.onabort=function(){xhr.abort();reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"])}}if(request.timeout){xhr.timeout=request.timeout}xhr.onload=function(){if(request.abortSignal){request.abortSignal.onabort=null}if(xhr.status>=200&&xhr.status<300){resolve(new _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](xhr.status,xhr.statusText,xhr.response||xhr.responseText))}else{reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](xhr.statusText,xhr.status))}};xhr.onerror=function(){_this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning,"Error from HTTP request. "+xhr.status+": "+xhr.statusText+".");reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](xhr.statusText,xhr.status))};xhr.ontimeout=function(){_this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning,"Timeout from HTTP request.");reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"])};xhr.send(request.content||"")})};return XhrHttpClient}(_HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"LogLevel",function(){return LogLevel});var LogLevel;(function(LogLevel){LogLevel[LogLevel["Trace"]=0]="Trace";LogLevel[LogLevel["Debug"]=1]="Debug";LogLevel[LogLevel["Information"]=2]="Information";LogLevel[LogLevel["Warning"]=3]="Warning";LogLevel[LogLevel["Error"]=4]="Error";LogLevel[LogLevel["Critical"]=5]="Critical";LogLevel[LogLevel["None"]=6]="None"})(LogLevel||(LogLevel={}))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"HubConnectionState",function(){return HubConnectionState});__webpack_require__.d(__webpack_exports__,"HubConnection",function(){return HubConnection});var _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11);var _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15);var _ILogger__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9);var _Utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13);var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true}}};var DEFAULT_TIMEOUT_IN_MS=30*1e3;var DEFAULT_PING_INTERVAL_IN_MS=15*1e3;var HubConnectionState;(function(HubConnectionState){HubConnectionState[HubConnectionState["Disconnected"]=0]="Disconnected";HubConnectionState[HubConnectionState["Connected"]=1]="Connected"})(HubConnectionState||(HubConnectionState={}));var HubConnection=function(){function HubConnection(connection,logger,protocol){var _this=this;_Utils__WEBPACK_IMPORTED_MODULE_3__["Arg"].isRequired(connection,"connection");_Utils__WEBPACK_IMPORTED_MODULE_3__["Arg"].isRequired(logger,"logger");_Utils__WEBPACK_IMPORTED_MODULE_3__["Arg"].isRequired(protocol,"protocol");this.serverTimeoutInMilliseconds=DEFAULT_TIMEOUT_IN_MS;this.keepAliveIntervalInMilliseconds=DEFAULT_PING_INTERVAL_IN_MS;this.logger=logger;this.protocol=protocol;this.connection=connection;this.handshakeProtocol=new _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_0__["HandshakeProtocol"];this.connection.onreceive=function(data){return _this.processIncomingData(data)};this.connection.onclose=function(error){return _this.connectionClosed(error)};this.callbacks={};this.methods={};this.closedCallbacks=[];this.id=0;this.receivedHandshakeResponse=false;this.connectionState=HubConnectionState.Disconnected;this.cachedPingMessage=this.protocol.writeMessage({type:_IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Ping})}HubConnection.create=function(connection,logger,protocol){return new HubConnection(connection,logger,protocol)};Object.defineProperty(HubConnection.prototype,"state",{get:function(){return this.connectionState},enumerable:true,configurable:true});HubConnection.prototype.start=function(){return __awaiter(this,void 0,void 0,function(){var handshakeRequest,handshakePromise;var _this=this;return __generator(this,function(_a){switch(_a.label){case 0:handshakeRequest={protocol:this.protocol.name,version:this.protocol.version};this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug,"Starting HubConnection.");this.receivedHandshakeResponse=false;handshakePromise=new Promise(function(resolve,reject){_this.handshakeResolver=resolve;_this.handshakeRejecter=reject});return[4,this.connection.start(this.protocol.transferFormat)];case 1:_a.sent();this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug,"Sending handshake request.");return[4,this.sendMessage(this.handshakeProtocol.writeHandshakeRequest(handshakeRequest))];case 2:_a.sent();this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information,"Using HubProtocol '"+this.protocol.name+"'.");this.cleanupTimeout();this.resetTimeoutPeriod();this.resetKeepAliveInterval();return[4,handshakePromise];case 3:_a.sent();this.connectionState=HubConnectionState.Connected;return[2]}})})};HubConnection.prototype.stop=function(){this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug,"Stopping HubConnection.");this.cleanupTimeout();this.cleanupPingTimer();return this.connection.stop()};HubConnection.prototype.stream=function(methodName){var _this=this;var args=[];for(var _i=1;_i<arguments.length;_i++){args[_i-1]=arguments[_i]}var invocationDescriptor=this.createStreamInvocation(methodName,args);var promiseQueue;var subject=new _Utils__WEBPACK_IMPORTED_MODULE_3__["Subject"];subject.cancelCallback=function(){var cancelInvocation=_this.createCancelInvocation(invocationDescriptor.invocationId);var cancelMessage=_this.protocol.writeMessage(cancelInvocation);delete _this.callbacks[invocationDescriptor.invocationId];return promiseQueue.then(function(){return _this.sendMessage(cancelMessage)})};this.callbacks[invocationDescriptor.invocationId]=function(invocationEvent,error){if(error){subject.error(error);return}else if(invocationEvent){if(invocationEvent.type===_IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion){if(invocationEvent.error){subject.error(new Error(invocationEvent.error))}else{subject.complete()}}else{subject.next(invocationEvent.item)}}};var message=this.protocol.writeMessage(invocationDescriptor);promiseQueue=this.sendMessage(message).catch(function(e){subject.error(e);delete _this.callbacks[invocationDescriptor.invocationId]});return subject};HubConnection.prototype.sendMessage=function(message){this.resetKeepAliveInterval();return this.connection.send(message)};HubConnection.prototype.send=function(methodName){var args=[];for(var _i=1;_i<arguments.length;_i++){args[_i-1]=arguments[_i]}var invocationDescriptor=this.createInvocation(methodName,args,true);var message=this.protocol.writeMessage(invocationDescriptor);return this.sendMessage(message)};HubConnection.prototype.invoke=function(methodName){var _this=this;var args=[];for(var _i=1;_i<arguments.length;_i++){args[_i-1]=arguments[_i]}var invocationDescriptor=this.createInvocation(methodName,args,false);var p=new Promise(function(resolve,reject){_this.callbacks[invocationDescriptor.invocationId]=function(invocationEvent,error){if(error){reject(error);return}else if(invocationEvent){if(invocationEvent.type===_IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion){if(invocationEvent.error){reject(new Error(invocationEvent.error))}else{resolve(invocationEvent.result)}}else{reject(new Error("Unexpected message type: "+invocationEvent.type))}}};var message=_this.protocol.writeMessage(invocationDescriptor);_this.sendMessage(message).catch(function(e){reject(e);delete _this.callbacks[invocationDescriptor.invocationId]})});return p};HubConnection.prototype.on=function(methodName,newMethod){if(!methodName||!newMethod){return}methodName=methodName.toLowerCase();if(!this.methods[methodName]){this.methods[methodName]=[]}if(this.methods[methodName].indexOf(newMethod)!==-1){return}this.methods[methodName].push(newMethod)};HubConnection.prototype.off=function(methodName,method){if(!methodName){return}methodName=methodName.toLowerCase();var handlers=this.methods[methodName];if(!handlers){return}if(method){var removeIdx=handlers.indexOf(method);if(removeIdx!==-1){handlers.splice(removeIdx,1);if(handlers.length===0){delete this.methods[methodName]}}}else{delete this.methods[methodName]}};HubConnection.prototype.onclose=function(callback){if(callback){this.closedCallbacks.push(callback)}};HubConnection.prototype.processIncomingData=function(data){this.cleanupTimeout();if(!this.receivedHandshakeResponse){data=this.processHandshakeResponse(data);this.receivedHandshakeResponse=true}if(data){var messages=this.protocol.parseMessages(data,this.logger);for(var _i=0,messages_1=messages;_i<messages_1.length;_i++){var message=messages_1[_i];switch(message.type){case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation:this.invokeClientMethod(message);break;case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamItem:case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion:var callback=this.callbacks[message.invocationId];if(callback!=null){if(message.type===_IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion){delete this.callbacks[message.invocationId]}callback(message)}break;case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Ping:break;case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Close:this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information,"Close message received from server.");this.connection.stop(message.error?new Error("Server returned an error on close: "+message.error):undefined);break;default:this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning,"Invalid message type: "+message.type+".");break}}}this.resetTimeoutPeriod()};HubConnection.prototype.processHandshakeResponse=function(data){var _a;var responseMessage;var remainingData;try{_a=this.handshakeProtocol.parseHandshakeResponse(data),remainingData=_a[0],responseMessage=_a[1]}catch(e){var message="Error parsing handshake response: "+e;this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error,message);var error=new Error(message);this.connection.stop(error);this.handshakeRejecter(error);throw error}if(responseMessage.error){var message="Server returned handshake error: "+responseMessage.error;this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error,message);this.handshakeRejecter(message);this.connection.stop(new Error(message));throw new Error(message)}else{this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug,"Server handshake complete.")}this.handshakeResolver();return remainingData};HubConnection.prototype.resetKeepAliveInterval=function(){var _this=this;this.cleanupPingTimer();this.pingServerHandle=setTimeout(function(){return __awaiter(_this,void 0,void 0,function(){var _a;return __generator(this,function(_b){switch(_b.label){case 0:if(!(this.connectionState===HubConnectionState.Connected))return[3,4];_b.label=1;case 1:_b.trys.push([1,3,,4]);return[4,this.sendMessage(this.cachedPingMessage)];case 2:_b.sent();return[3,4];case 3:_a=_b.sent();this.cleanupPingTimer();return[3,4];case 4:return[2]}})})},this.keepAliveIntervalInMilliseconds)};HubConnection.prototype.resetTimeoutPeriod=function(){var _this=this;if(!this.connection.features||!this.connection.features.inherentKeepAlive){this.timeoutHandle=setTimeout(function(){return _this.serverTimeout()},this.serverTimeoutInMilliseconds)}};HubConnection.prototype.serverTimeout=function(){this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."))};HubConnection.prototype.invokeClientMethod=function(invocationMessage){var _this=this;var methods=this.methods[invocationMessage.target.toLowerCase()];if(methods){methods.forEach(function(m){return m.apply(_this,invocationMessage.arguments)});if(invocationMessage.invocationId){var message="Server requested a response, which is not supported in this version of the client.";this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error,message);this.connection.stop(new Error(message))}}else{this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning,"No client method with the name '"+invocationMessage.target+"' found.")}};HubConnection.prototype.connectionClosed=function(error){var _this=this;var callbacks=this.callbacks;this.callbacks={};this.connectionState=HubConnectionState.Disconnected;if(this.handshakeRejecter){this.handshakeRejecter(error)}Object.keys(callbacks).forEach(function(key){var callback=callbacks[key];callback(null,error?error:new Error("Invocation canceled due to connection being closed."))});this.cleanupTimeout();this.cleanupPingTimer();this.closedCallbacks.forEach(function(c){return c.apply(_this,[error])})};HubConnection.prototype.cleanupPingTimer=function(){if(this.pingServerHandle){clearTimeout(this.pingServerHandle)}};HubConnection.prototype.cleanupTimeout=function(){if(this.timeoutHandle){clearTimeout(this.timeoutHandle)}};HubConnection.prototype.createInvocation=function(methodName,args,nonblocking){if(nonblocking){return{arguments:args,target:methodName,type:_IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation}}else{var id=this.id;this.id++;return{arguments:args,invocationId:id.toString(),target:methodName,type:_IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation}}};HubConnection.prototype.createStreamInvocation=function(methodName,args){var id=this.id;this.id++;return{arguments:args,invocationId:id.toString(),target:methodName,type:_IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamInvocation}};HubConnection.prototype.createCancelInvocation=function(id){return{invocationId:id,type:_IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].CancelInvocation}};return HubConnection}()},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"HandshakeProtocol",function(){return HandshakeProtocol});var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12);var _Utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13);var HandshakeProtocol=function(){function HandshakeProtocol(){}HandshakeProtocol.prototype.writeHandshakeRequest=function(handshakeRequest){return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].write(JSON.stringify(handshakeRequest))};HandshakeProtocol.prototype.parseHandshakeResponse=function(data){var responseMessage;var messageData;var remainingData;if(Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"])(data)||typeof Buffer!=="undefined"&&data instanceof Buffer){var binaryData=new Uint8Array(data);var separatorIndex=binaryData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].RecordSeparatorCode);if(separatorIndex===-1){throw new Error("Message is incomplete.")}var responseLength=separatorIndex+1;messageData=String.fromCharCode.apply(null,binaryData.slice(0,responseLength));remainingData=binaryData.byteLength>responseLength?binaryData.slice(responseLength).buffer:null}else{var textData=data;var separatorIndex=textData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].RecordSeparator);if(separatorIndex===-1){throw new Error("Message is incomplete.")}var responseLength=separatorIndex+1;messageData=textData.substring(0,responseLength);remainingData=textData.length>responseLength?textData.substring(responseLength):null}var messages=_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].parse(messageData);var response=JSON.parse(messages[0]);if(response.type){throw new Error("Expected a handshake response from the server.")}responseMessage=response;return[remainingData,responseMessage]};return HandshakeProtocol}()},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"TextMessageFormat",function(){return TextMessageFormat});var TextMessageFormat=function(){function TextMessageFormat(){}TextMessageFormat.write=function(output){return""+output+TextMessageFormat.RecordSeparator};TextMessageFormat.parse=function(input){if(input[input.length-1]!==TextMessageFormat.RecordSeparator){throw new Error("Message is incomplete.")}var messages=input.split(TextMessageFormat.RecordSeparator);messages.pop();return messages};TextMessageFormat.RecordSeparatorCode=30;TextMessageFormat.RecordSeparator=String.fromCharCode(TextMessageFormat.RecordSeparatorCode);return TextMessageFormat}()},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"Arg",function(){return Arg});__webpack_require__.d(__webpack_exports__,"getDataDetail",function(){return getDataDetail});__webpack_require__.d(__webpack_exports__,"formatArrayBuffer",function(){return formatArrayBuffer});__webpack_require__.d(__webpack_exports__,"isArrayBuffer",function(){return isArrayBuffer});__webpack_require__.d(__webpack_exports__,"sendMessage",function(){return sendMessage});__webpack_require__.d(__webpack_exports__,"createLogger",function(){return createLogger});__webpack_require__.d(__webpack_exports__,"Subject",function(){return Subject});__webpack_require__.d(__webpack_exports__,"SubjectSubscription",function(){return SubjectSubscription});__webpack_require__.d(__webpack_exports__,"ConsoleLogger",function(){return ConsoleLogger});var _ILogger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9);var _Loggers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14);var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true}}};var Arg=function(){function Arg(){}Arg.isRequired=function(val,name){if(val===null||val===undefined){throw new Error("The '"+name+"' argument is required.")}};Arg.isIn=function(val,values,name){if(!(val in values)){throw new Error("Unknown "+name+" value: "+val+".")}};return Arg}();function getDataDetail(data,includeContent){var detail="";if(isArrayBuffer(data)){detail="Binary data of length "+data.byteLength;if(includeContent){detail+=". Content: '"+formatArrayBuffer(data)+"'"}}else if(typeof data==="string"){detail="String data of length "+data.length;if(includeContent){detail+=". Content: '"+data+"'"}}return detail}function formatArrayBuffer(data){var view=new Uint8Array(data);var str="";view.forEach(function(num){var pad=num<16?"0":"";str+="0x"+pad+num.toString(16)+" "});return str.substr(0,str.length-1)}function isArrayBuffer(val){return val&&typeof ArrayBuffer!=="undefined"&&(val instanceof ArrayBuffer||val.constructor&&val.constructor.name==="ArrayBuffer")}function sendMessage(logger,transportName,httpClient,url,accessTokenFactory,content,logMessageContent){return __awaiter(this,void 0,void 0,function(){var _a,headers,token,responseType,response;return __generator(this,function(_b){switch(_b.label){case 0:if(!accessTokenFactory)return[3,2];return[4,accessTokenFactory()];case 1:token=_b.sent();if(token){headers=(_a={},_a["Authorization"]="Bearer "+token,_a)}_b.label=2;case 2:logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace,"("+transportName+" transport) sending data. "+getDataDetail(content,logMessageContent)+".");responseType=isArrayBuffer(content)?"arraybuffer":"text";return[4,httpClient.post(url,{content:content,headers:headers,responseType:responseType})];case 3:response=_b.sent();logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace,"("+transportName+" transport) request complete. Response status: "+response.statusCode+".");return[2]}})})}function createLogger(logger){if(logger===undefined){return new ConsoleLogger(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information)}if(logger===null){return _Loggers__WEBPACK_IMPORTED_MODULE_1__["NullLogger"].instance}if(logger.log){return logger}return new ConsoleLogger(logger)}var Subject=function(){function Subject(){this.observers=[]}Subject.prototype.next=function(item){for(var _i=0,_a=this.observers;_i<_a.length;_i++){var observer=_a[_i];observer.next(item)}};Subject.prototype.error=function(err){for(var _i=0,_a=this.observers;_i<_a.length;_i++){var observer=_a[_i];if(observer.error){observer.error(err)}}};Subject.prototype.complete=function(){for(var _i=0,_a=this.observers;_i<_a.length;_i++){var observer=_a[_i];if(observer.complete){observer.complete()}}};Subject.prototype.subscribe=function(observer){this.observers.push(observer);return new SubjectSubscription(this,observer)};return Subject}();var SubjectSubscription=function(){function SubjectSubscription(subject,observer){this.subject=subject;this.observer=observer}SubjectSubscription.prototype.dispose=function(){var index=this.subject.observers.indexOf(this.observer);if(index>-1){this.subject.observers.splice(index,1)}if(this.subject.observers.length===0&&this.subject.cancelCallback){this.subject.cancelCallback().catch(function(_){})}};return SubjectSubscription}();var ConsoleLogger=function(){function ConsoleLogger(minimumLogLevel){this.minimumLogLevel=minimumLogLevel}ConsoleLogger.prototype.log=function(logLevel,message){if(logLevel>=this.minimumLogLevel){switch(logLevel){case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Critical:case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Error:console.error("["+(new Date).toISOString()+"] "+_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel]+": "+message);break;case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Warning:console.warn("["+(new Date).toISOString()+"] "+_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel]+": "+message);break;case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information:console.info("["+(new Date).toISOString()+"] "+_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel]+": "+message);break;default:console.log("["+(new Date).toISOString()+"] "+_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel]+": "+message);break}}};return ConsoleLogger}()},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"NullLogger",function(){return NullLogger});var NullLogger=function(){function NullLogger(){}NullLogger.prototype.log=function(_logLevel,_message){};NullLogger.instance=new NullLogger;return NullLogger}()},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"MessageType",function(){return MessageType});var MessageType;(function(MessageType){MessageType[MessageType["Invocation"]=1]="Invocation";MessageType[MessageType["StreamItem"]=2]="StreamItem";MessageType[MessageType["Completion"]=3]="Completion";MessageType[MessageType["StreamInvocation"]=4]="StreamInvocation";MessageType[MessageType["CancelInvocation"]=5]="CancelInvocation";MessageType[MessageType["Ping"]=6]="Ping";MessageType[MessageType["Close"]=7]="Close"})(MessageType||(MessageType={}))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"HubConnectionBuilder",function(){return HubConnectionBuilder});var _HttpConnection__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(17);var _HubConnection__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10);var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(23);var _Loggers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14);var _Utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(13);var HubConnectionBuilder=function(){function HubConnectionBuilder(){}HubConnectionBuilder.prototype.configureLogging=function(logging){_Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(logging,"logging");if(isLogger(logging)){this.logger=logging}else{this.logger=new _Utils__WEBPACK_IMPORTED_MODULE_4__["ConsoleLogger"](logging)}return this};HubConnectionBuilder.prototype.withUrl=function(url,transportTypeOrOptions){_Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(url,"url");this.url=url;if(typeof transportTypeOrOptions==="object"){this.httpConnectionOptions=transportTypeOrOptions}else{this.httpConnectionOptions={transport:transportTypeOrOptions}}return this};HubConnectionBuilder.prototype.withHubProtocol=function(protocol){_Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(protocol,"protocol");this.protocol=protocol;return this};HubConnectionBuilder.prototype.build=function(){var httpConnectionOptions=this.httpConnectionOptions||{};if(httpConnectionOptions.logger===undefined){httpConnectionOptions.logger=this.logger}if(!this.url){throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.")}var connection=new _HttpConnection__WEBPACK_IMPORTED_MODULE_0__["HttpConnection"](this.url,httpConnectionOptions);return _HubConnection__WEBPACK_IMPORTED_MODULE_1__["HubConnection"].create(connection,this.logger||_Loggers__WEBPACK_IMPORTED_MODULE_3__["NullLogger"].instance,this.protocol||new _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_2__["JsonHubProtocol"])};return HubConnectionBuilder}();function isLogger(logger){return logger.log!==undefined}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"HttpConnection",function(){return HttpConnection});var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6);var _ILogger__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9);var _ITransport__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(18);var _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19);var _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(21);var _Utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(13);var _WebSocketTransport__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(22);var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true}}};var MAX_REDIRECTS=100;var WebSocketModule=null;var EventSourceModule=null;if(typeof window==="undefined"&&"function"!=="undefined"){var requireFunc=true?require:undefined;WebSocketModule=requireFunc("ws");EventSourceModule=requireFunc("eventsource")}var HttpConnection=function(){function HttpConnection(url,options){if(options===void 0){options={}}this.features={};_Utils__WEBPACK_IMPORTED_MODULE_5__["Arg"].isRequired(url,"url");this.logger=Object(_Utils__WEBPACK_IMPORTED_MODULE_5__["createLogger"])(options.logger);this.baseUrl=this.resolveUrl(url);options=options||{};options.logMessageContent=options.logMessageContent||false;var isNode=typeof window==="undefined";if(!isNode&&typeof WebSocket!=="undefined"&&!options.WebSocket){options.WebSocket=WebSocket}else if(isNode&&!options.WebSocket){if(WebSocketModule){options.WebSocket=WebSocketModule}}if(!isNode&&typeof EventSource!=="undefined"&&!options.EventSource){options.EventSource=EventSource}else if(isNode&&!options.EventSource){if(typeof EventSourceModule!=="undefined"){options.EventSource=EventSourceModule}}this.httpClient=options.httpClient||new _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_0__["DefaultHttpClient"](this.logger);this.connectionState=2;this.options=options;this.onreceive=null;this.onclose=null}HttpConnection.prototype.start=function(transferFormat){transferFormat=transferFormat||_ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"].Binary;_Utils__WEBPACK_IMPORTED_MODULE_5__["Arg"].isIn(transferFormat,_ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"],"transferFormat");this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug,"Starting connection with transfer format '"+_ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][transferFormat]+"'.");if(this.connectionState!==2){return Promise.reject(new Error("Cannot start a connection that is not in the 'Disconnected' state."))}this.connectionState=0;this.startPromise=this.startInternal(transferFormat);return this.startPromise};HttpConnection.prototype.send=function(data){if(this.connectionState!==1){throw new Error("Cannot send data if the connection is not in the 'Connected' State.")}return this.transport.send(data)};HttpConnection.prototype.stop=function(error){return __awaiter(this,void 0,void 0,function(){var e_1;return __generator(this,function(_a){switch(_a.label){case 0:this.connectionState=2;this.stopError=error;_a.label=1;case 1:_a.trys.push([1,3,,4]);return[4,this.startPromise];case 2:_a.sent();return[3,4];case 3:e_1=_a.sent();return[3,4];case 4:if(!this.transport)return[3,6];return[4,this.transport.stop()];case 5:_a.sent();this.transport=undefined;_a.label=6;case 6:return[2]}})})};HttpConnection.prototype.startInternal=function(transferFormat){return __awaiter(this,void 0,void 0,function(){var url,negotiateResponse,redirects,_loop_1,this_1,state_1,e_2;var _this=this;return __generator(this,function(_a){switch(_a.label){case 0:url=this.baseUrl;this.accessTokenFactory=this.options.accessTokenFactory;_a.label=1;case 1:_a.trys.push([1,12,,13]);if(!this.options.skipNegotiation)return[3,5];if(!(this.options.transport===_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets))return[3,3];this.transport=this.constructTransport(_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets);return[4,this.transport.connect(url,transferFormat)];case 2:_a.sent();return[3,4];case 3:throw Error("Negotiation can only be skipped when using the WebSocket transport directly.");case 4:return[3,11];case 5:negotiateResponse=null;redirects=0;_loop_1=function(){var accessToken_1;return __generator(this,function(_a){switch(_a.label){case 0:return[4,this_1.getNegotiationResponse(url)];case 1:negotiateResponse=_a.sent();if(this_1.connectionState===2){return[2,{value:void 0}]}if(negotiateResponse.error){throw Error(negotiateResponse.error)}if(negotiateResponse.ProtocolVersion){throw Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.")}if(negotiateResponse.url){url=negotiateResponse.url}if(negotiateResponse.accessToken){accessToken_1=negotiateResponse.accessToken;this_1.accessTokenFactory=function(){return accessToken_1}}redirects++;return[2]}})};this_1=this;_a.label=6;case 6:return[5,_loop_1()];case 7:state_1=_a.sent();if(typeof state_1==="object")return[2,state_1.value];_a.label=8;case 8:if(negotiateResponse.url&&redirects<MAX_REDIRECTS)return[3,6];_a.label=9;case 9:if(redirects===MAX_REDIRECTS&&negotiateResponse.url){throw Error("Negotiate redirection limit exceeded.")}return[4,this.createTransport(url,this.options.transport,negotiateResponse,transferFormat)];case 10:_a.sent();_a.label=11;case 11:if(this.transport instanceof _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__["LongPollingTransport"]){this.features.inherentKeepAlive=true}this.transport.onreceive=this.onreceive;this.transport.onclose=function(e){return _this.stopConnection(e)};this.changeState(0,1);return[3,13];case 12:e_2=_a.sent();this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error,"Failed to start the connection: "+e_2);this.connectionState=2;this.transport=undefined;throw e_2;case 13:return[2]}})})};HttpConnection.prototype.getNegotiationResponse=function(url){return __awaiter(this,void 0,void 0,function(){var _a,headers,token,negotiateUrl,response,e_3;return __generator(this,function(_b){switch(_b.label){case 0:if(!this.accessTokenFactory)return[3,2];return[4,this.accessTokenFactory()];case 1:token=_b.sent();if(token){headers=(_a={},_a["Authorization"]="Bearer "+token,_a)}_b.label=2;case 2:negotiateUrl=this.resolveNegotiateUrl(url);this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug,"Sending negotiation request: "+negotiateUrl+".");_b.label=3;case 3:_b.trys.push([3,5,,6]);return[4,this.httpClient.post(negotiateUrl,{content:"",headers:headers})];case 4:response=_b.sent();if(response.statusCode!==200){throw Error("Unexpected status code returned from negotiate "+response.statusCode)}return[2,JSON.parse(response.content)];case 5:e_3=_b.sent();this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error,"Failed to complete negotiation with the server: "+e_3);throw e_3;case 6:return[2]}})})};HttpConnection.prototype.createConnectUrl=function(url,connectionId){if(!connectionId){return url}return url+(url.indexOf("?")===-1?"?":"&")+("id="+connectionId)};HttpConnection.prototype.createTransport=function(url,requestedTransport,negotiateResponse,requestedTransferFormat){return __awaiter(this,void 0,void 0,function(){var connectUrl,transports,_i,transports_1,endpoint,transport,ex_1;return __generator(this,function(_a){switch(_a.label){case 0:connectUrl=this.createConnectUrl(url,negotiateResponse.connectionId);if(!this.isITransport(requestedTransport))return[3,2];this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug,"Connection was provided an instance of ITransport, using that directly.");this.transport=requestedTransport;return[4,this.transport.connect(connectUrl,requestedTransferFormat)];case 1:_a.sent();this.changeState(0,1);return[2];case 2:transports=negotiateResponse.availableTransports||[];_i=0,transports_1=transports;_a.label=3;case 3:if(!(_i<transports_1.length))return[3,9];endpoint=transports_1[_i];this.connectionState=0;transport=this.resolveTransport(endpoint,requestedTransport,requestedTransferFormat);if(!(typeof transport==="number"))return[3,8];this.transport=this.constructTransport(transport);if(!!negotiateResponse.connectionId)return[3,5];return[4,this.getNegotiationResponse(url)];case 4:negotiateResponse=_a.sent();connectUrl=this.createConnectUrl(url,negotiateResponse.connectionId);_a.label=5;case 5:_a.trys.push([5,7,,8]);return[4,this.transport.connect(connectUrl,requestedTransferFormat)];case 6:_a.sent();this.changeState(0,1);return[2];case 7:ex_1=_a.sent();this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error,"Failed to start the transport '"+_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport]+"': "+ex_1);this.connectionState=2;negotiateResponse.connectionId=undefined;return[3,8];case 8:_i++;return[3,3];case 9:throw new Error("Unable to initialize any of the available transports.")}})})};HttpConnection.prototype.constructTransport=function(transport){switch(transport){case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets:if(!this.options.WebSocket){throw new Error("'WebSocket' is not supported in your environment.")}return new _WebSocketTransport__WEBPACK_IMPORTED_MODULE_6__["WebSocketTransport"](this.httpClient,this.accessTokenFactory,this.logger,this.options.logMessageContent||false,this.options.WebSocket);case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].ServerSentEvents:if(!this.options.EventSource){throw new Error("'EventSource' is not supported in your environment.")}return new _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_4__["ServerSentEventsTransport"](this.httpClient,this.accessTokenFactory,this.logger,this.options.logMessageContent||false,this.options.EventSource);case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].LongPolling:return new _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__["LongPollingTransport"](this.httpClient,this.accessTokenFactory,this.logger,this.options.logMessageContent||false);default:throw new Error("Unknown transport: "+transport+".")}};HttpConnection.prototype.resolveTransport=function(endpoint,requestedTransport,requestedTransferFormat){var transport=_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][endpoint.transport];if(transport===null||transport===undefined){this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug,"Skipping transport '"+endpoint.transport+"' because it is not supported by this client.")}else{var transferFormats=endpoint.transferFormats.map(function(s){return _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][s]});if(transportMatches(requestedTransport,transport)){if(transferFormats.indexOf(requestedTransferFormat)>=0){if(transport===_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets&&!this.options.WebSocket||transport===_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].ServerSentEvents&&!this.options.EventSource){this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug,"Skipping transport '"+_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport]+"' because it is not supported in your environment.'")}else{this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug,"Selecting transport '"+_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport]+"'.");return transport}}else{this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug,"Skipping transport '"+_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport]+"' because it does not support the requested transfer format '"+_ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][requestedTransferFormat]+"'.")}}else{this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug,"Skipping transport '"+_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport]+"' because it was disabled by the client.")}}return null};HttpConnection.prototype.isITransport=function(transport){return transport&&typeof transport==="object"&&"connect"in transport};HttpConnection.prototype.changeState=function(from,to){if(this.connectionState===from){this.connectionState=to;return true}return false};HttpConnection.prototype.stopConnection=function(error){this.transport=undefined;error=this.stopError||error;if(error){this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error,"Connection disconnected with error '"+error+"'.")}else{this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information,"Connection disconnected.")}this.connectionState=2;if(this.onclose){this.onclose(error)}};HttpConnection.prototype.resolveUrl=function(url){if(url.lastIndexOf("https://",0)===0||url.lastIndexOf("http://",0)===0){return url}if(typeof window==="undefined"||!window||!window.document){throw new Error("Cannot resolve '"+url+"'.")}var aTag=window.document.createElement("a");aTag.href=url;this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information,"Normalizing '"+url+"' to '"+aTag.href+"'.");return aTag.href};HttpConnection.prototype.resolveNegotiateUrl=function(url){var index=url.indexOf("?");var negotiateUrl=url.substring(0,index===-1?url.length:index);if(negotiateUrl[negotiateUrl.length-1]!=="/"){negotiateUrl+="/"}negotiateUrl+="negotiate";negotiateUrl+=index===-1?"":url.substring(index);return negotiateUrl};return HttpConnection}();function transportMatches(requestedTransport,actualTransport){return!requestedTransport||(actualTransport&requestedTransport)!==0}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"HttpTransportType",function(){return HttpTransportType});__webpack_require__.d(__webpack_exports__,"TransferFormat",function(){return TransferFormat});var HttpTransportType;(function(HttpTransportType){HttpTransportType[HttpTransportType["None"]=0]="None";HttpTransportType[HttpTransportType["WebSockets"]=1]="WebSockets";HttpTransportType[HttpTransportType["ServerSentEvents"]=2]="ServerSentEvents";HttpTransportType[HttpTransportType["LongPolling"]=4]="LongPolling"})(HttpTransportType||(HttpTransportType={}));var TransferFormat;(function(TransferFormat){TransferFormat[TransferFormat["Text"]=1]="Text";TransferFormat[TransferFormat["Binary"]=2]="Binary"})(TransferFormat||(TransferFormat={}))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"LongPollingTransport",function(){return LongPollingTransport});var _AbortController__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20);var _Errors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4);var _ILogger__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9);var _ITransport__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(18);var _Utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(13);var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true}}};var LongPollingTransport=function(){function LongPollingTransport(httpClient,accessTokenFactory,logger,logMessageContent){this.httpClient=httpClient;this.accessTokenFactory=accessTokenFactory;this.logger=logger;this.pollAbort=new _AbortController__WEBPACK_IMPORTED_MODULE_0__["AbortController"];this.logMessageContent=logMessageContent;this.running=false;this.onreceive=null;this.onclose=null}Object.defineProperty(LongPollingTransport.prototype,"pollAborted",{get:function(){return this.pollAbort.aborted},enumerable:true,configurable:true});LongPollingTransport.prototype.connect=function(url,transferFormat){return __awaiter(this,void 0,void 0,function(){var pollOptions,token,pollUrl,response;return __generator(this,function(_a){switch(_a.label){case 0:_Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(url,"url");_Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(transferFormat,"transferFormat");_Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isIn(transferFormat,_ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"],"transferFormat");this.url=url;this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace,"(LongPolling transport) Connecting.");if(transferFormat===_ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"].Binary&&(typeof XMLHttpRequest!=="undefined"&&typeof(new XMLHttpRequest).responseType!=="string")){throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.")}pollOptions={abortSignal:this.pollAbort.signal,headers:{},timeout:1e5};if(transferFormat===_ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"].Binary){pollOptions.responseType="arraybuffer"}return[4,this.getAccessToken()];case 1:token=_a.sent();this.updateHeaderToken(pollOptions,token);pollUrl=url+"&_="+Date.now();this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace,"(LongPolling transport) polling: "+pollUrl+".");return[4,this.httpClient.get(pollUrl,pollOptions)];case 2:response=_a.sent();if(response.statusCode!==200){this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error,"(LongPolling transport) Unexpected response code: "+response.statusCode+".");this.closeError=new _Errors__WEBPACK_IMPORTED_MODULE_1__["HttpError"](response.statusText||"",response.statusCode);this.running=false}else{this.running=true}this.receiving=this.poll(this.url,pollOptions);return[2]}})})};LongPollingTransport.prototype.getAccessToken=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:if(!this.accessTokenFactory)return[3,2];return[4,this.accessTokenFactory()];case 1:return[2,_a.sent()];case 2:return[2,null]}})})};LongPollingTransport.prototype.updateHeaderToken=function(request,token){if(!request.headers){request.headers={}}if(token){request.headers["Authorization"]="Bearer "+token;return}if(request.headers["Authorization"]){delete request.headers["Authorization"]}};LongPollingTransport.prototype.poll=function(url,pollOptions){return __awaiter(this,void 0,void 0,function(){var token,pollUrl,response,e_1;return __generator(this,function(_a){switch(_a.label){case 0:_a.trys.push([0,,8,9]);_a.label=1;case 1:if(!this.running)return[3,7];return[4,this.getAccessToken()];case 2:token=_a.sent();this.updateHeaderToken(pollOptions,token);_a.label=3;case 3:_a.trys.push([3,5,,6]);pollUrl=url+"&_="+Date.now();this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace,"(LongPolling transport) polling: "+pollUrl+".");return[4,this.httpClient.get(pollUrl,pollOptions)];case 4:response=_a.sent();if(response.statusCode===204){this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information,"(LongPolling transport) Poll terminated by server.");this.running=false}else if(response.statusCode!==200){this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error,"(LongPolling transport) Unexpected response code: "+response.statusCode+".");this.closeError=new _Errors__WEBPACK_IMPORTED_MODULE_1__["HttpError"](response.statusText||"",response.statusCode);this.running=false}else{if(response.content){this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace,"(LongPolling transport) data received. "+Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getDataDetail"])(response.content,this.logMessageContent)+".");if(this.onreceive){this.onreceive(response.content)}}else{this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace,"(LongPolling transport) Poll timed out, reissuing.")}}return[3,6];case 5:e_1=_a.sent();if(!this.running){this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace,"(LongPolling transport) Poll errored after shutdown: "+e_1.message)}else{if(e_1 instanceof _Errors__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]){this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace,"(LongPolling transport) Poll timed out, reissuing.")}else{this.closeError=e_1;this.running=false}}return[3,6];case 6:return[3,1];case 7:return[3,9];case 8:this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace,"(LongPolling transport) Polling complete.");if(!this.pollAborted){this.raiseOnClose()}return[7];case 9:return[2]}})})};LongPollingTransport.prototype.send=function(data){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){if(!this.running){return[2,Promise.reject(new Error("Cannot send until the transport is connected"))]}return[2,Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["sendMessage"])(this.logger,"LongPolling",this.httpClient,this.url,this.accessTokenFactory,data,this.logMessageContent)]})})};LongPollingTransport.prototype.stop=function(){return __awaiter(this,void 0,void 0,function(){var deleteOptions,token;return __generator(this,function(_a){switch(_a.label){case 0:this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace,"(LongPolling transport) Stopping polling.");this.running=false;this.pollAbort.abort();_a.label=1;case 1:_a.trys.push([1,,5,6]);return[4,this.receiving];case 2:_a.sent();this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace,"(LongPolling transport) sending DELETE request to "+this.url+".");deleteOptions={headers:{}};return[4,this.getAccessToken()];case 3:token=_a.sent();this.updateHeaderToken(deleteOptions,token);return[4,this.httpClient.delete(this.url,deleteOptions)];case 4:_a.sent();this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace,"(LongPolling transport) DELETE request sent.");return[3,6];case 5:this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace,"(LongPolling transport) Stop finished.");this.raiseOnClose();return[7];case 6:return[2]}})})};LongPollingTransport.prototype.raiseOnClose=function(){if(this.onclose){var logMessage="(LongPolling transport) Firing onclose event.";if(this.closeError){logMessage+=" Error: "+this.closeError}this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace,logMessage);this.onclose(this.closeError)}};return LongPollingTransport}()},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"AbortController",function(){return AbortController});var AbortController=function(){function AbortController(){this.isAborted=false;this.onabort=null}AbortController.prototype.abort=function(){if(!this.isAborted){this.isAborted=true;if(this.onabort){this.onabort()}}};Object.defineProperty(AbortController.prototype,"signal",{get:function(){return this},enumerable:true,configurable:true});Object.defineProperty(AbortController.prototype,"aborted",{get:function(){return this.isAborted},enumerable:true,configurable:true});return AbortController}()},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"ServerSentEventsTransport",function(){return ServerSentEventsTransport});var _ILogger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9);var _ITransport__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(18);var _Utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13);var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true}}};var ServerSentEventsTransport=function(){function ServerSentEventsTransport(httpClient,accessTokenFactory,logger,logMessageContent,eventSourceConstructor){this.httpClient=httpClient;this.accessTokenFactory=accessTokenFactory;this.logger=logger;this.logMessageContent=logMessageContent;this.eventSourceConstructor=eventSourceConstructor;this.onreceive=null;this.onclose=null}ServerSentEventsTransport.prototype.connect=function(url,transferFormat){return __awaiter(this,void 0,void 0,function(){var token;var _this=this;return __generator(this,function(_a){switch(_a.label){case 0:_Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(url,"url");_Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(transferFormat,"transferFormat");_Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isIn(transferFormat,_ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"],"transferFormat");this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace,"(SSE transport) Connecting.");this.url=url;if(!this.accessTokenFactory)return[3,2];return[4,this.accessTokenFactory()];case 1:token=_a.sent();if(token){url+=(url.indexOf("?")<0?"?":"&")+("access_token="+encodeURIComponent(token))}_a.label=2;case 2:return[2,new Promise(function(resolve,reject){var opened=false;if(transferFormat!==_ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"].Text){reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));return}var eventSource;if(typeof window!=="undefined"){eventSource=new _this.eventSourceConstructor(url,{withCredentials:true})}else{var cookies=_this.httpClient.getCookieString(url);eventSource=new _this.eventSourceConstructor(url,{withCredentials:true,headers:{Cookie:cookies}})}try{eventSource.onmessage=function(e){if(_this.onreceive){try{_this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace,"(SSE transport) data received. "+Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(e.data,_this.logMessageContent)+".");_this.onreceive(e.data)}catch(error){_this.close(error);return}}};eventSource.onerror=function(e){var error=new Error(e.data||"Error occurred");if(opened){_this.close(error)}else{reject(error)}};eventSource.onopen=function(){_this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information,"SSE connected to "+_this.url);_this.eventSource=eventSource;opened=true;resolve()}}catch(e){reject(e);return}})]}})})};ServerSentEventsTransport.prototype.send=function(data){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){if(!this.eventSource){return[2,Promise.reject(new Error("Cannot send until the transport is connected"))]}return[2,Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["sendMessage"])(this.logger,"SSE",this.httpClient,this.url,this.accessTokenFactory,data,this.logMessageContent)]})})};ServerSentEventsTransport.prototype.stop=function(){this.close();return Promise.resolve()};ServerSentEventsTransport.prototype.close=function(e){if(this.eventSource){this.eventSource.close();this.eventSource=undefined;if(this.onclose){this.onclose(e)}}};return ServerSentEventsTransport}()},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"WebSocketTransport",function(){return WebSocketTransport});var _ILogger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9);var _ITransport__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(18);var _Utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13);var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),throw:verb(1),return:verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break}if(t[2])_.ops.pop();_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e];y=0}finally{f=t=0}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true}}};var WebSocketTransport=function(){function WebSocketTransport(httpClient,accessTokenFactory,logger,logMessageContent,webSocketConstructor){this.logger=logger;this.accessTokenFactory=accessTokenFactory;this.logMessageContent=logMessageContent;this.webSocketConstructor=webSocketConstructor;this.httpClient=httpClient;this.onreceive=null;this.onclose=null}WebSocketTransport.prototype.connect=function(url,transferFormat){return __awaiter(this,void 0,void 0,function(){var token;var _this=this;return __generator(this,function(_a){switch(_a.label){case 0:_Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(url,"url");_Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(transferFormat,"transferFormat");_Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isIn(transferFormat,_ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"],"transferFormat");this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace,"(WebSockets transport) Connecting.");if(!this.accessTokenFactory)return[3,2];return[4,this.accessTokenFactory()];case 1:token=_a.sent();if(token){url+=(url.indexOf("?")<0?"?":"&")+("access_token="+encodeURIComponent(token))}_a.label=2;case 2:return[2,new Promise(function(resolve,reject){url=url.replace(/^http/,"ws");var webSocket;var cookies=_this.httpClient.getCookieString(url);if(typeof window==="undefined"&&cookies){webSocket=new _this.webSocketConstructor(url,undefined,{headers:{Cookie:""+cookies}})}if(!webSocket){webSocket=new _this.webSocketConstructor(url)}if(transferFormat===_ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"].Binary){webSocket.binaryType="arraybuffer"}webSocket.onopen=function(_event){_this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information,"WebSocket connected to "+url+".");_this.webSocket=webSocket;resolve()};webSocket.onerror=function(event){var error=null;if(typeof ErrorEvent!=="undefined"&&event instanceof ErrorEvent){error=event.error}reject(error)};webSocket.onmessage=function(message){_this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace,"(WebSockets transport) data received. "+Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(message.data,_this.logMessageContent)+".");if(_this.onreceive){_this.onreceive(message.data)}};webSocket.onclose=function(event){return _this.close(event)}})]}})})};WebSocketTransport.prototype.send=function(data){if(this.webSocket&&this.webSocket.readyState===this.webSocketConstructor.OPEN){this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace,"(WebSockets transport) sending data. "+Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(data,this.logMessageContent)+".");this.webSocket.send(data);return Promise.resolve()}return Promise.reject("WebSocket is not in the OPEN state")};WebSocketTransport.prototype.stop=function(){if(this.webSocket){this.webSocket.onclose=function(){};this.webSocket.onmessage=function(){};this.webSocket.onerror=function(){};this.webSocket.close();this.webSocket=undefined;this.close(undefined)}return Promise.resolve()};WebSocketTransport.prototype.close=function(event){this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace,"(WebSockets transport) socket closed.");if(this.onclose){if(event&&(event.wasClean===false||event.code!==1e3)){this.onclose(new Error("WebSocket closed with status code: "+event.code+" ("+event.reason+")."))}else{this.onclose()}}};return WebSocketTransport}()},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"JsonHubProtocol",function(){return JsonHubProtocol});var _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15);var _ILogger__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9);var _ITransport__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(18);var _Loggers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14);var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(12);var JSON_HUB_PROTOCOL_NAME="json";var JsonHubProtocol=function(){function JsonHubProtocol(){this.name=JSON_HUB_PROTOCOL_NAME;this.version=1;this.transferFormat=_ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"].Text}JsonHubProtocol.prototype.parseMessages=function(input,logger){if(typeof input!=="string"){throw new Error("Invalid input for JSON hub protocol. Expected a string.")}if(!input){return[]}if(logger===null){logger=_Loggers__WEBPACK_IMPORTED_MODULE_3__["NullLogger"].instance}var messages=_TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__["TextMessageFormat"].parse(input);var hubMessages=[];for(var _i=0,messages_1=messages;_i<messages_1.length;_i++){var message=messages_1[_i];var parsedMessage=JSON.parse(message);if(typeof parsedMessage.type!=="number"){throw new Error("Invalid payload.")}switch(parsedMessage.type){case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Invocation:this.isInvocationMessage(parsedMessage);break;case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].StreamItem:this.isStreamItemMessage(parsedMessage);break;case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Completion:this.isCompletionMessage(parsedMessage);break;case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Ping:break;case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Close:break;default:logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information,"Unknown message type '"+parsedMessage.type+"' ignored.");continue}hubMessages.push(parsedMessage)}return hubMessages};JsonHubProtocol.prototype.writeMessage=function(message){return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__["TextMessageFormat"].write(JSON.stringify(message))};JsonHubProtocol.prototype.isInvocationMessage=function(message){this.assertNotEmptyString(message.target,"Invalid payload for Invocation message.");if(message.invocationId!==undefined){this.assertNotEmptyString(message.invocationId,"Invalid payload for Invocation message.")}};JsonHubProtocol.prototype.isStreamItemMessage=function(message){this.assertNotEmptyString(message.invocationId,"Invalid payload for StreamItem message.");if(message.item===undefined){throw new Error("Invalid payload for StreamItem message.")}};JsonHubProtocol.prototype.isCompletionMessage=function(message){if(message.result&&message.error){throw new Error("Invalid payload for Completion message.")}if(!message.result&&message.error){this.assertNotEmptyString(message.error,"Invalid payload for Completion message.")}this.assertNotEmptyString(message.invocationId,"Invalid payload for Completion message.")};JsonHubProtocol.prototype.assertNotEmptyString=function(value,errorMessage){if(typeof value!=="string"||value===""){throw new Error(errorMessage)}};return JsonHubProtocol}()}])});
//# sourceMappingURL=signalr.min.js.map
;/*!
* sweetalert2 v10.16.9
* Released under the MIT License.
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Sweetalert2 = factory());
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcon = function getIcon() {
    return elementByClass(swalClasses.icon);
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getDenyButton = function getDenyButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  };
  var getInputLabel = function getInputLabel() {
    return elementByClass(swalClasses['input-label']);
  };
  var getLoader = function getLoader() {
    return elementBySelector(".".concat(swalClasses.loader));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.display = 'none';
  };
  var setStyle = function setStyle(parent, selector, property, value) {
    var el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  var allButtonsAreHidden = function allButtonsAreHidden() {
    return !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  };
  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var loader = getLoader();
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    } // Loader


    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };

  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var setInputLabel = function setInputLabel(input, prependTo, params) {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      var label = document.createElement('label');
      var labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      addClass(label, params.customClass.inputLabel);
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    var getPadding = function getPadding(el) {
      return parseInt(window.getComputedStyle(el).paddingLeft) + parseInt(window.getComputedStyle(el).paddingRight);
    };

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + getPadding(getPopup()) + getPadding(getContent());

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block'); // Content as plain text
    } else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block'); // No content
    } else {
      hide(htmlContainer);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance);
    var icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      return hide(icon);
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      return hide(icon);
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };

  var applyStyles = function applyStyles(icon, params) {
    for (var iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var setColor = function setColor(icon, params) {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (var _i = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i < _arr.length; _i++) {
      var sel = _arr[_i];
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    warnAboutDeprecation('Swal.queue()', "async/await");
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var container = getContainer();
    var popup = getPopup(); // Width

    if (params.toast) {
      // #2170
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    } else if (typeof params.onRender === 'function') {
      params.onRender(getPopup()); // @deprecated
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Deny' button
   */

  var clickDeny = function clickDeny() {
    return getDenyButton() && getDenyButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params, priorityMixinParams) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, _extends({}, mixinParams, priorityMixinParams));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  var showLoading = function showLoading(buttonToReplace) {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement(returnFocus) {
    return new Promise(function (resolve) {
      if (!returnFocus) {
        return resolve();
      }

      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var bodyClickListenerAdded = false;
  var clickHandlers = {};
  function bindClickHandler() {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  var bodyClickListener = function bodyClickListener(event) {
    // 1. using .parentNode instead of event.path because of better support by old browsers https://stackoverflow.com/a/39245638
    // 2. using .parentNode instead of .parentElement because of IE11 + SVG https://stackoverflow.com/a/36270354
    for (var el = event.target; el && el !== document; el = el.parentNode) {
      for (var attr in clickHandlers) {
        var template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template: template
          });
          return;
        }
      }
    }
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    willOpen: undefined,
    didOpen: undefined,
    onRender: undefined,
    didRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    willClose: undefined,
    didClose: undefined,
    onDestroy: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass',
    onBeforeOpen: 'willOpen',
    onOpen: 'didOpen',
    onRender: 'didRender',
    onClose: 'willClose',
    onAfterClose: 'didClose',
    onDestroy: 'didDestroy'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
    var target = event.target;
    var container = getContainer();

    if (isStylys(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var isStylys = function isStylys(event) {
    // #1786
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  var isZoom = function isZoom(event) {
    // #1891
    return event.touches && event.touches.length > 1;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(function () {
        return triggerDidCloseAndDispose(instance, didClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    resolveValue = prepareResolveValue(resolveValue);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue);
  }

  var prepareResolveValue = function prepareResolveValue(resolveValue) {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return _extends({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose,
        willClose = innerParams.willClose,
        didClose = innerParams.didClose;
    runDidClose(popup, willClose, onClose);

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, didClose || onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, didClose || onAfterClose);
    }
  };

  var runDidClose = function runDidClose(popup, willClose, onClose) {
    if (willClose !== null && typeof willClose === 'function') {
      willClose(popup);
    } else if (onClose !== null && typeof onClose === 'function') {
      onClose(popup); // @deprecated
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, returnFocus, didClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
    setTimeout(function () {
      if (typeof didClose === 'function') {
        didClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    var params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  var getTemplateParams = function getTemplateParams(params) {
    var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }

    var templateContent = template.content || template; // IE11

    showWarningsForElements(templateContent);

    var result = _extends(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));

    return result;
  };

  var getSwalParams = function getSwalParams(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(function (param) {
      showWarningsForAttributes(param, ['name', 'value']);
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        value = false;
      }

      if (_typeof(defaultParams[paramName]) === 'object') {
        value = JSON.parse(value);
      }

      result[paramName] = value;
    });
    return result;
  };

  var getSwalButtons = function getSwalButtons(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(function (button) {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      var type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  var getSwalImage = function getSwalImage(templateContent) {
    var result = {};
    var image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };

  var getSwalIcon = function getSwalIcon(templateContent) {
    var result = {};
    var icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };

  var getSwalInput = function getSwalInput(templateContent) {
    var result = {};
    var input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    var inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(function (option) {
        showWarningsForAttributes(option, ['value']);
        var optionValue = option.getAttribute('value');
        var optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };

  var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
    var result = {};

    for (var i in paramNames) {
      var paramName = paramNames[i];
      var tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };

  var showWarningsForElements = function showWarningsForElements(template) {
    var allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(template.querySelectorAll('*')).forEach(function (el) {
      if (el.parentNode !== template) {
        // can't use template.children because of IE11
        return;
      }

      var tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
    toArray(el.attributes).forEach(function (attribute) {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    } else if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup); // @deprecated
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(function () {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    runDidOpen(popup, params);
    removeClass(container, swalClasses['no-transition']);
  };

  var runDidOpen = function runDidOpen(popup, params) {
    if (typeof params.didOpen === 'function') {
      setTimeout(function () {
        return params.didOpen(popup);
      });
    } else if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      }); // @deprecated
    }
  };

  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup);
    setTimeout(function () {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var isSelected = function isSelected(optionValue, inputValue) {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'confirm');
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleDenyButtonClick = function handleDenyButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'deny');
    } else {
      deny(instance, innerParams, false);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, innerParams, type
  /* type is either 'confirm' or 'deny' */
  ) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, innerParams, inputValue);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, innerParams, inputValue);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var handleInputValidator = function handleInputValidator(instance, innerParams, inputValue) {
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else {
        confirm(instance, innerParams, inputValue);
      }
    });
  };

  var deny = function deny(instance, innerParams, value) {
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      var preDenyPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
      });
      preDenyPromise.then(function (preDenyValue) {
        if (preDenyValue === false) {
          instance.hideLoading();
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      });
    } else {
      instance.closePopup({
        isDenied: true,
        value: value
      });
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      isConfirmed: true,
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown', 'Right', 'Down' // IE11
  ];
  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp', 'Left', 'Up' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).indexOf(e.key) !== -1) {
      handleArrows(e.key); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows(key) {
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();

    if (!([confirmButton, denyButton, cancelButton].indexOf(document.activeElement) !== -1)) {
      return;
    }

    var sibling = arrowKeysNextButton.indexOf(key) !== -1 ? 'nextElementSibling' : 'previousElementSibling';
    var buttonToFocus = document.activeElement[sibling];

    if (buttonToFocus) {
      buttonToFocus.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    showWarningsForParams(_extends({}, mixinParams, userParams));

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams, mixinParams) {
    var templateParams = getTemplateParams(userParams);

    var params = _extends({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131


    params.showClass = _extends({}, defaultParams.showClass, params.showClass);
    params.hideClass = _extends({}, defaultParams.hideClass, params.hideClass); // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          isDismissed: true,
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.denyButton.onclick = function () {
        return handleDenyButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };

  var focusButton = function focusButton(domCache, innerParams) {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    runDidDestroy(innerParams);
    disposeSwal(this);
  }

  var runDidDestroy = function runDidDestroy(innerParams) {
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    } else if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy(); // @deprecated
    }
  };

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '10.16.9';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

;"use strict";

// taken from https://raw.githubusercontent.com/alexradulescu/FreezeUI, modified and converted to ES5
(function () {
  var freezeHtml = document.createElement("div");
  freezeHtml.classList.add("freeze-ui");
  var freezedItems = [];

  var getSelector = function getSelector(selector) {
    return selector ? selector : "body";
  };

  var normalizeFreezeDelay = function normalizeFreezeDelay(delay) {
    return delay ? delay : 250;
  };

  var shouldFreezeItem = function shouldFreezeItem(selector) {
    var itemSelector = getSelector(selector);
    return freezedItems.indexOf(itemSelector) >= 0;
  };

  var addFreezedItem = function addFreezedItem(selector) {
    var itemSelector = getSelector(selector);
    freezedItems.push(itemSelector);
  };

  var removeFreezedItem = function removeFreezedItem(selector) {
    var itemSelector = getSelector(selector);

    for (var i = 0; i < freezedItems.length; i++) {
      if (freezedItems[i] === itemSelector) {
        freezedItems.splice(i, 1);
      }
    }
  };

  window.FreezeUI = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    addFreezedItem(options.selector);
    var delay = normalizeFreezeDelay(options.delay);
    setTimeout(function () {
      if (!shouldFreezeItem(options.selector)) {
        return;
      }

      var parent;

      if (options.element) {
        parent = options.element;
      } else {
        parent = document.querySelector(options.selector) || document.body;
      }

      freezeHtml.setAttribute("data-text", options.text || "Loading");

      if (document.querySelector(options.selector) || options.element) {
        freezeHtml.style.position = "absolute";
      }

      parent.appendChild(freezeHtml);
    }, delay);
  };

  window.UnFreezeUI = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    removeFreezedItem(options.selector);
    var delay = normalizeFreezeDelay(options.delay) + 250;
    setTimeout(function () {
      var freezeHtml;

      if (options.element) {
        freezeHtml = options.element.querySelector(".freeze-ui");
      } else {
        freezeHtml = document.querySelector(".freeze-ui");
      }

      if (freezeHtml) {
        freezeHtml.classList.remove("is-unfreezing");

        if (freezeHtml.parentElement) {
          freezeHtml.parentElement.removeChild(freezeHtml);
        }
      }
    }, delay);
  };
})();
;/**
 * @license
 *
 * Push v1.0.9
 * =========
 * A compact, cross-browser solution for the JavaScript Notifications API
 *
 * Credits
 * -------
 * Tsvetan Tsvetkov (ttsvetko)
 * Alex Gibson (alexgibson)
 *
 * License
 * -------
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015-2017 Tyler Nickerson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
!function(i,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(i=i||self).Push=t()}(this,function(){"use strict";var i={errors:{incompatible:"".concat("PushError:"," Push.js is incompatible with browser."),invalid_plugin:"".concat("PushError:"," plugin class missing from plugin manifest (invalid plugin). Please check the documentation."),invalid_title:"".concat("PushError:"," title of notification must be a string"),permission_denied:"".concat("PushError:"," permission request declined"),sw_notification_error:"".concat("PushError:"," could not show a ServiceWorker notification due to the following reason: "),sw_registration_error:"".concat("PushError:"," could not register the ServiceWorker due to the following reason: "),unknown_interface:"".concat("PushError:"," unable to create notification: unknown interface")}};function t(i){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(i)}function n(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function e(i,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function o(i,t,n){return t&&e(i.prototype,t),n&&e(i,n),i}function r(i,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),t&&c(i,t)}function s(i){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)})(i)}function c(i,t){return(c=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i})(i,t)}function a(i,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(i){if(void 0===i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(i):t}var u=function(){function i(t){n(this,i),this._win=t,this.GRANTED="granted",this.DEFAULT="default",this.DENIED="denied",this._permissions=[this.GRANTED,this.DEFAULT,this.DENIED]}return o(i,[{key:"request",value:function(i,t){return arguments.length>0?this._requestWithCallback.apply(this,arguments):this._requestAsPromise()}},{key:"_requestWithCallback",value:function(i,t){var n,e=this,o=this.get(),r=!1,s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e._win.Notification.permission;r||(r=!0,void 0===n&&e._win.webkitNotifications&&(n=e._win.webkitNotifications.checkPermission()),n===e.GRANTED||0===n?i&&i():t&&t())};o!==this.DEFAULT?s(o):this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._win.webkitNotifications.requestPermission(s):this._win.Notification&&this._win.Notification.requestPermission?(n=this._win.Notification.requestPermission(s))&&n.then&&n.then(s).catch(function(){t&&t()}):i&&i()}},{key:"_requestAsPromise",value:function(){var i=this,t=this.get(),n=t!==this.DEFAULT,e=this._win.Notification&&this._win.Notification.requestPermission,o=this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission;return new Promise(function(r,s){var c,a=!1,u=function(t){a||(a=!0,!function(t){return t===i.GRANTED||0===t}(t)?s():r())};n?u(t):o?i._win.webkitNotifications.requestPermission(function(i){u(i)}):e?(c=i._win.Notification.requestPermission(u))&&c.then&&c.then(u).catch(s):r()})}},{key:"has",value:function(){return this.get()===this.GRANTED}},{key:"get",value:function(){return this._win.Notification&&this._win.Notification.permission?this._win.Notification.permission:this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._permissions[this._win.webkitNotifications.checkPermission()]:navigator.mozNotification?this.GRANTED:this._win.external&&this._win.external.msIsSiteMode?this._win.external.msIsSiteMode()?this.GRANTED:this.DEFAULT:this.GRANTED}}]),i}(),f=function(){function i(){n(this,i)}return o(i,null,[{key:"isUndefined",value:function(i){return void 0===i}},{key:"isNull",value:function(i){return null===obj}},{key:"isString",value:function(i){return"string"==typeof i}},{key:"isFunction",value:function(i){return i&&"[object Function]"==={}.toString.call(i)}},{key:"isObject",value:function(i){return"object"===t(i)}},{key:"objectMerge",value:function(i,t){for(var n in t)i.hasOwnProperty(n)&&this.isObject(i[n])&&this.isObject(t[n])?this.objectMerge(i[n],t[n]):i[n]=t[n]}}]),i}(),l=function i(t){n(this,i),this._win=t},h=function(i){function t(){return n(this,t),a(this,s(t).apply(this,arguments))}return r(t,l),o(t,[{key:"isSupported",value:function(){return void 0!==this._win.Notification}},{key:"create",value:function(i,t){return new this._win.Notification(i,{icon:f.isString(t.icon)||f.isUndefined(t.icon)||f.isNull(t.icon)?t.icon:t.icon.x32,body:t.body,tag:t.tag,requireInteraction:t.requireInteraction})}},{key:"close",value:function(i){i.close()}}]),t}(),_=function(t){function e(){return n(this,e),a(this,s(e).apply(this,arguments))}return r(e,l),o(e,[{key:"isSupported",value:function(){return void 0!==this._win.navigator&&void 0!==this._win.navigator.serviceWorker}},{key:"getFunctionBody",value:function(i){var t=i.toString().match(/function[^{]+{([\s\S]*)}$/);return null!=t&&t.length>1?t[1]:null}},{key:"create",value:function(t,n,e,o,r){var s=this;this._win.navigator.serviceWorker.register(o),this._win.navigator.serviceWorker.ready.then(function(o){var c={id:t,link:e.link,origin:document.location.href,onClick:f.isFunction(e.onClick)?s.getFunctionBody(e.onClick):"",onClose:f.isFunction(e.onClose)?s.getFunctionBody(e.onClose):""};void 0!==e.data&&null!==e.data&&(c=Object.assign(c,e.data)),o.showNotification(n,{icon:e.icon,body:e.body,vibrate:e.vibrate,tag:e.tag,data:c,requireInteraction:e.requireInteraction,silent:e.silent}).then(function(){o.getNotifications().then(function(i){o.active.postMessage(""),r(i)})}).catch(function(t){throw new Error(i.errors.sw_notification_error+t.message)})}).catch(function(t){throw new Error(i.errors.sw_registration_error+t.message)})}},{key:"close",value:function(){}}]),e}(),v=function(i){function t(){return n(this,t),a(this,s(t).apply(this,arguments))}return r(t,l),o(t,[{key:"isSupported",value:function(){return void 0!==this._win.navigator.mozNotification}},{key:"create",value:function(i,t){var n=this._win.navigator.mozNotification.createNotification(i,t.body,t.icon);return n.show(),n}}]),t}(),d=function(i){function t(){return n(this,t),a(this,s(t).apply(this,arguments))}return r(t,l),o(t,[{key:"isSupported",value:function(){return void 0!==this._win.external&&void 0!==this._win.external.msIsSiteMode}},{key:"create",value:function(i,t){return this._win.external.msSiteModeClearIconOverlay(),this._win.external.msSiteModeSetIconOverlay(f.isString(t.icon)||f.isUndefined(t.icon)?t.icon:t.icon.x16,i),this._win.external.msSiteModeActivate(),null}},{key:"close",value:function(){this._win.external.msSiteModeClearIconOverlay()}}]),t}(),w=function(i){function t(){return n(this,t),a(this,s(t).apply(this,arguments))}return r(t,l),o(t,[{key:"isSupported",value:function(){return void 0!==this._win.webkitNotifications}},{key:"create",value:function(i,t){var n=this._win.webkitNotifications.createNotification(t.icon,i,t.body);return n.show(),n}},{key:"close",value:function(i){i.cancel()}}]),t}();return new(function(){function t(i){n(this,t),this._currentId=0,this._notifications={},this._win=i,this.Permission=new u(i),this._agents={desktop:new h(i),chrome:new _(i),firefox:new v(i),ms:new d(i),webkit:new w(i)},this._configuration={serviceWorker:"/serviceWorker.min.js",fallback:function(i){}}}return o(t,[{key:"_closeNotification",value:function(t){var n=!0,e=this._notifications[t];if(void 0!==e){if(n=this._removeNotification(t),this._agents.desktop.isSupported())this._agents.desktop.close(e);else if(this._agents.webkit.isSupported())this._agents.webkit.close(e);else{if(!this._agents.ms.isSupported())throw n=!1,new Error(i.errors.unknown_interface);this._agents.ms.close()}return n}return!1}},{key:"_addNotification",value:function(i){var t=this._currentId;return this._notifications[t]=i,this._currentId++,t}},{key:"_removeNotification",value:function(i){var t=!1;return this._notifications.hasOwnProperty(i)&&(delete this._notifications[i],t=!0),t}},{key:"_prepareNotification",value:function(i,t){var n,e=this;return n={get:function(){return e._notifications[i]},close:function(){e._closeNotification(i)}},t.timeout&&setTimeout(function(){n.close()},t.timeout),n}},{key:"_serviceWorkerCallback",value:function(i,t,n){var e=this,o=this._addNotification(i[i.length-1]);navigator&&navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",function(i){var t=JSON.parse(i.data);"close"===t.action&&Number.isInteger(t.id)&&e._removeNotification(t.id)}),n(this._prepareNotification(o,t))),n(null)}},{key:"_createCallback",value:function(i,t,n){var e,o=this,r=null;if(t=t||{},e=function(i){o._removeNotification(i),f.isFunction(t.onClose)&&t.onClose.call(o,r)},this._agents.desktop.isSupported())try{r=this._agents.desktop.create(i,t)}catch(e){var s=this._currentId,c=this.config().serviceWorker;this._agents.chrome.isSupported()&&this._agents.chrome.create(s,i,t,c,function(i){return o._serviceWorkerCallback(i,t,n)})}else this._agents.webkit.isSupported()?r=this._agents.webkit.create(i,t):this._agents.firefox.isSupported()?this._agents.firefox.create(i,t):this._agents.ms.isSupported()?r=this._agents.ms.create(i,t):(t.title=i,this.config().fallback(t));if(null!==r){var a=this._addNotification(r),u=this._prepareNotification(a,t);f.isFunction(t.onShow)&&r.addEventListener("show",t.onShow),f.isFunction(t.onError)&&r.addEventListener("error",t.onError),f.isFunction(t.onClick)&&r.addEventListener("click",t.onClick),r.addEventListener("close",function(){e(a)}),r.addEventListener("cancel",function(){e(a)}),n(u)}n(null)}},{key:"create",value:function(t,n){var e,o=this;if(!f.isString(t))throw new Error(i.errors.invalid_title);return e=this.Permission.has()?function(i,e){try{o._createCallback(t,n,i)}catch(i){e(i)}}:function(e,r){o.Permission.request().then(function(){o._createCallback(t,n,e)}).catch(function(){r(i.errors.permission_denied)})},new Promise(e)}},{key:"count",value:function(){var i,t=0;for(i in this._notifications)this._notifications.hasOwnProperty(i)&&t++;return t}},{key:"close",value:function(i){var t;for(t in this._notifications)if(this._notifications.hasOwnProperty(t)&&this._notifications[t].tag===i)return this._closeNotification(t)}},{key:"clear",value:function(){var i,t=!0;for(i in this._notifications)this._notifications.hasOwnProperty(i)&&(t=t&&this._closeNotification(i));return t}},{key:"supported",value:function(){var i=!1;for(var t in this._agents)this._agents.hasOwnProperty(t)&&(i=i||this._agents[t].isSupported());return i}},{key:"config",value:function(i){return(void 0!==i||null!==i&&f.isObject(i))&&f.objectMerge(this._configuration,i),this._configuration}},{key:"extend",value:function(t){var n,e={}.hasOwnProperty;if(!e.call(t,"plugin"))throw new Error(i.errors.invalid_plugin);for(var o in e.call(t,"config")&&f.isObject(t.config)&&null!==t.config&&this.config(t.config),n=new(0,t.plugin)(this.config()))e.call(n,o)&&f.isFunction(n[o])&&(this[o]=n[o])}}]),t}())("undefined"!=typeof window?window:global)});
//# sourceMappingURL=push.min.js.map

;(function (define) {
  define(['jquery'], function ($) {
    return (function () {
      var abp = window.abp || {};

      /* Application paths *****************************************/

      //Current application root path (including virtual directory if exists).
      abp.appPath = abp.appPath || '/';
      abp.pageLoadTime = new Date();

      //Converts given path to absolute path using abp.appPath variable.
      abp.toAbsAppPath = function (path) {
        if (path.indexOf('/') == 0) {
          path = path.substring(1);
        }

        return abp.appPath + path;
      };

      /* MULTITENANCY */

      abp.multiTenancy = abp.multiTenancy || {};

    abp.multiTenancy.isEnabled = false;
    abp.multiTenancy.ignoreFeatureCheckForHostUsers = false;

      abp.multiTenancy.sides = {
        TENANT: 1,
        HOST: 2
      };

      abp.multiTenancy.tenantIdCookieName = 'Abp.TenantId';

      abp.multiTenancy.setTenantIdCookie = function (tenantId) {
        if (tenantId) {
          abp.utils.setCookieValue(
            abp.multiTenancy.tenantIdCookieName,
            tenantId.toString(),
            new Date(new Date().getTime() + 5 * 365 * 86400000), //5 years
            abp.appPath,
            abp.domain
          );
        } else {
          abp.utils.deleteCookie(abp.multiTenancy.tenantIdCookieName, abp.appPath);
        }
      };

      abp.multiTenancy.getTenantIdCookie = function () {
        var value = abp.utils.getCookieValue(abp.multiTenancy.tenantIdCookieName);
        if (!value) {
          return null;
        }

        return parseInt(value);
      }

      /* SESSION */

      abp.session = abp.session ||
        {
          multiTenancySide: abp.multiTenancy.sides.HOST
        };

      /* LOCALIZATION ***********************************************/
      //Implements Localization API that simplifies usage of localization scripts generated by Abp.

      abp.localization = abp.localization || {};

      abp.localization.languages = [];

      abp.localization.currentLanguage = {};

      abp.localization.sources = [];

      abp.localization.values = {};

      abp.localization.localize = function (key, sourceName) {
        sourceName = sourceName || abp.localization.defaultSourceName;

        var source = abp.localization.values[sourceName];

        if (!source) {
          abp.log.warn('Could not find localization source: ' + sourceName);
          return key;
        }

        var value = source[key];
        if (value == undefined) {
          return key;
        }

        var copiedArguments = Array.prototype.slice.call(arguments, 0);
        copiedArguments.splice(1, 1);
        copiedArguments[0] = value;

        return abp.utils.formatString.apply(this, copiedArguments);
      };

      abp.localization.getSource = function (sourceName) {
        return function (key) {
          var copiedArguments = Array.prototype.slice.call(arguments, 0);
          copiedArguments.splice(1, 0, sourceName);
          return abp.localization.localize.apply(this, copiedArguments);
        };
      };

      abp.localization.isCurrentCulture = function (name) {
        return abp.localization.currentCulture
          && abp.localization.currentCulture.name
          && abp.localization.currentCulture.name.indexOf(name) == 0;
      };

      abp.localization.defaultSourceName = undefined;
      abp.localization.abpWeb = abp.localization.getSource('AbpWeb');

      /* AUTHORIZATION **********************************************/
      //Implements Authorization API that simplifies usage of authorization scripts generated by Abp.

      abp.auth = abp.auth || {};

      abp.auth.allPermissions = abp.auth.allPermissions || {};

      abp.auth.grantedPermissions = abp.auth.grantedPermissions || {};

      //Deprecated. Use abp.auth.isGranted instead.
      abp.auth.hasPermission = function (permissionName) {
        return abp.auth.isGranted.apply(this, arguments);
      };

      //Deprecated. Use abp.auth.isAnyGranted instead.
      abp.auth.hasAnyOfPermissions = function () {
        return abp.auth.isAnyGranted.apply(this, arguments);
      };

      //Deprecated. Use abp.auth.areAllGranted instead.
      abp.auth.hasAllOfPermissions = function () {
        return abp.auth.areAllGranted.apply(this, arguments);
      };

      abp.auth.isGranted = function (permissionName) {
        return abp.auth.grantedPermissions[permissionName] != undefined;
      };

      abp.auth.isAnyGranted = function () {
        if (!arguments || arguments.length <= 0) {
          return true;
        }

        for (var i = 0; i < arguments.length; i++) {
          if (abp.auth.isGranted(arguments[i])) {
            return true;
          }
        }

        return false;
      };

      abp.auth.areAllGranted = function () {
        if (!arguments || arguments.length <= 0) {
          return true;
        }

        for (var i = 0; i < arguments.length; i++) {
          if (!abp.auth.isGranted(arguments[i])) {
            return false;
          }
        }

        return true;
      };

      abp.auth.tokenCookieName = 'Abp.AuthToken';

      abp.auth.setToken = function (authToken, expireDate) {
        abp.utils.setCookieValue(abp.auth.tokenCookieName, authToken, expireDate, abp.appPath, abp.domain);
      };

      abp.auth.getToken = function() {
          return abp.utils.getCookieValue(abp.auth.tokenCookieName);
      };

      abp.auth.clearToken = function() {
          abp.auth.setToken();
      };

      abp.auth.refreshTokenCookieName = 'Abp.AuthRefreshToken';

      abp.auth.setRefreshToken = function (refreshToken, expireDate) {
          abp.utils.setCookieValue(abp.auth.refreshTokenCookieName, refreshToken, expireDate, abp.appPath, abp.domain);
      };

      abp.auth.getRefreshToken = function() {
          return abp.utils.getCookieValue(abp.auth.refreshTokenCookieName);
      };

      abp.auth.clearRefreshToken = function() {
          abp.auth.setRefreshToken();
      };

      /* FEATURE SYSTEM *********************************************/
      //Implements Features API that simplifies usage of feature scripts generated by Abp.

      abp.features = abp.features || {};

      abp.features.allFeatures = abp.features.allFeatures || {};

      abp.features.get = function (name) {
        return abp.features.allFeatures[name];
      }

      abp.features.getValue = function (name) {
        var feature = abp.features.get(name);
        if (feature == undefined) {
          return undefined;
        }

        return feature.value;
      }

      abp.features.isEnabled = function (name) {
        var value = abp.features.getValue(name);
        return value == 'true' || value == 'True';
      }

      /* SETTINGS **************************************************/
      //Implements Settings API that simplifies usage of setting scripts generated by Abp.

      abp.setting = abp.setting || {};

      abp.setting.values = abp.setting.values || {};

      abp.setting.get = function (name) {
        return abp.setting.values[name];
      };

      abp.setting.getBoolean = function (name) {
        var value = abp.setting.get(name);
        return value == 'true' || value == 'True';
      };

      abp.setting.getInt = function (name) {
        return parseInt(abp.setting.values[name]);
      };

      /* REALTIME NOTIFICATIONS ************************************/

      abp.notifications = abp.notifications || {};

      abp.notifications.severity = {
        INFO: 0,
        SUCCESS: 1,
        WARN: 2,
        ERROR: 3,
        FATAL: 4
      };

      abp.notifications.userNotificationState = {
        UNREAD: 0,
        READ: 1
      };

      abp.notifications.getUserNotificationStateAsString = function (userNotificationState) {
        switch (userNotificationState) {
          case abp.notifications.userNotificationState.READ:
            return 'READ';
          case abp.notifications.userNotificationState.UNREAD:
            return 'UNREAD';
          default:
            abp.log.warn('Unknown user notification state value: ' + userNotificationState)
            return '?';
        }
      };

      abp.notifications.getUiNotifyFuncBySeverity = function (severity) {
        switch (severity) {
          case abp.notifications.severity.SUCCESS:
            return abp.notify.success;
          case abp.notifications.severity.WARN:
            return abp.notify.warn;
          case abp.notifications.severity.ERROR:
            return abp.notify.error;
          case abp.notifications.severity.FATAL:
            return abp.notify.error;
          case abp.notifications.severity.INFO:
          default:
            return abp.notify.info;
        }
      };

      abp.notifications.messageFormatters = {};

      abp.notifications.messageFormatters['Abp.Notifications.MessageNotificationData'] = function (userNotification) {
        return userNotification.notification.data.message || userNotification.notification.data.properties.Message;
      };

      abp.notifications.messageFormatters['Abp.Notifications.LocalizableMessageNotificationData'] =
        function (userNotification) {
          var message = userNotification.notification.data.message ||
            userNotification.notification.data.properties.Message;
          var localizedMessage = abp.localization.localize(
            message.name,
            message.sourceName
          );

          if (userNotification.notification.data.properties) {
            if ($) {
              //Prefer to use jQuery if possible
              $.each(userNotification.notification.data.properties, function (key, value) {
                localizedMessage = localizedMessage.replace('{' + key + '}', value);
              });
            } else {
              //alternative for $.each
              var properties = Object.keys(userNotification.notification.data.properties);
              for (var i = 0; i < properties.length; i++) {
                localizedMessage = localizedMessage.replace('{' + properties[i] + '}',
                  userNotification.notification.data.properties[properties[i]]);
              }
            }
          }

          return localizedMessage;
        };

      abp.notifications.getFormattedMessageFromUserNotification = function (userNotification) {
        var formatter = abp.notifications.messageFormatters[userNotification.notification.data.type];
        if (!formatter) {
          abp.log.warn('No message formatter defined for given data type: ' + userNotification.notification.data.type)
          return '?';
        }

        if (!abp.utils.isFunction(formatter)) {
          abp.log.warn('Message formatter should be a function! It is invalid for data type: ' +
            userNotification.notification.data.type)
          return '?';
        }

        return formatter(userNotification);
      }

      abp.notifications.showUiNotifyForUserNotification = function (userNotification, options) {
        var message = abp.notifications.getFormattedMessageFromUserNotification(userNotification);
        var uiNotifyFunc = abp.notifications.getUiNotifyFuncBySeverity(userNotification.notification.severity);
        uiNotifyFunc(message, undefined, options);
      }

      /* LOGGING ***************************************************/
      //Implements Logging API that provides secure & controlled usage of console.log

      abp.log = abp.log || {};

      abp.log.levels = {
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4,
        FATAL: 5
      };

      abp.log.level = abp.log.levels.DEBUG;

      abp.log.log = function (logObject, logLevel) {
        if (!window.console || !window.console.log) {
          return;
        }

        if (logLevel != undefined && logLevel < abp.log.level) {
          return;
        }

        console.log(logObject);
      };

      abp.log.debug = function (logObject) {
        abp.log.log("DEBUG: ", abp.log.levels.DEBUG);
        abp.log.log(logObject, abp.log.levels.DEBUG);
      };

      abp.log.info = function (logObject) {
        abp.log.log("INFO: ", abp.log.levels.INFO);
        abp.log.log(logObject, abp.log.levels.INFO);
      };

      abp.log.warn = function (logObject) {
        abp.log.log("WARN: ", abp.log.levels.WARN);
        abp.log.log(logObject, abp.log.levels.WARN);
      };

      abp.log.error = function (logObject) {
        abp.log.log("ERROR: ", abp.log.levels.ERROR);
        abp.log.log(logObject, abp.log.levels.ERROR);
      };

      abp.log.fatal = function (logObject) {
        abp.log.log("FATAL: ", abp.log.levels.FATAL);
        abp.log.log(logObject, abp.log.levels.FATAL);
      };

      /* NOTIFICATION *********************************************/
      //Defines Notification API, not implements it

      abp.notify = abp.notify || {};

      abp.notify.success = function (message, title, options) {
        abp.log.warn('abp.notify.success is not implemented!');
      };

      abp.notify.info = function (message, title, options) {
        abp.log.warn('abp.notify.info is not implemented!');
      };

      abp.notify.warn = function (message, title, options) {
        abp.log.warn('abp.notify.warn is not implemented!');
      };

      abp.notify.error = function (message, title, options) {
        abp.log.warn('abp.notify.error is not implemented!');
      };

      /* MESSAGE **************************************************/
      //Defines Message API, not implements it

      abp.message = abp.message || {};

    var showMessage = function (message, title, options) {
        alert((title || '') + ' ' + message);

        if (!$) {
          abp.log.warn('abp.message can not return promise since jQuery is not defined!');
          return null;
        }

        return $.Deferred(function ($dfd) {
          $dfd.resolve();
        });
      };

    abp.message.info = function (message, title, options) {
        abp.log.warn('abp.message.info is not implemented!');
        return showMessage(message, title, options);
    };

    abp.message.success = function (message, title, options) {
        abp.log.warn('abp.message.success is not implemented!');
        return showMessage(message, title, options);
    };

    abp.message.warn = function (message, title, options) {
        abp.log.warn('abp.message.warn is not implemented!');
        return showMessage(message, title, options);
    };

    abp.message.error = function (message, title, options) {
        abp.log.warn('abp.message.error is not implemented!');
        return showMessage(message, title, options);
    };

    abp.message.confirm = function (message, title, callback, options) {
        abp.log.warn('abp.message.confirm is not implemented!');

        var result = confirm(message);
        callback && callback(result);

        if (!$) {
          abp.log.warn('abp.message can not return promise since jQuery is not defined!');
          return null;
        }

        return $.Deferred(function ($dfd) {
          $dfd.resolve();
        });
      };

      /* UI *******************************************************/

      abp.ui = abp.ui || {};

      /* UI BLOCK */
      //Defines UI Block API, not implements it

      abp.ui.block = function (elm) {
        abp.log.warn('abp.ui.block is not implemented!');
      };

      abp.ui.unblock = function (elm) {
        abp.log.warn('abp.ui.unblock is not implemented!');
      };

      /* UI BUSY */
      //Defines UI Busy API, not implements it

      abp.ui.setBusy = function (elm, optionsOrPromise) {
        abp.log.warn('abp.ui.setBusy is not implemented!');
      };

      abp.ui.clearBusy = function (elm) {
        abp.log.warn('abp.ui.clearBusy is not implemented!');
      };

      /* SIMPLE EVENT BUS *****************************************/

      abp.event = (function () {

        var _callbacks = {};

        var on = function (eventName, callback) {
          if (!_callbacks[eventName]) {
            _callbacks[eventName] = [];
          }

          _callbacks[eventName].push(callback);
        };

        var off = function (eventName, callback) {
          var callbacks = _callbacks[eventName];
          if (!callbacks) {
            return;
          }

          var index = -1;
          for (var i = 0; i < callbacks.length; i++) {
            if (callbacks[i] === callback) {
              index = i;
              break;
            }
          }

          if (index < 0) {
            return;
          }

          _callbacks[eventName].splice(index, 1);
        };

        var trigger = function (eventName) {
          var callbacks = _callbacks[eventName];
          if (!callbacks || !callbacks.length) {
            return;
          }

          var args = Array.prototype.slice.call(arguments, 1);
          for (var i = 0; i < callbacks.length; i++) {
            callbacks[i].apply(this, args);
          }
        };

        // Public interface ///////////////////////////////////////////////////

        return {
          on: on,
          off: off,
          trigger: trigger
        };
      })();

      /* UTILS ***************************************************/

      abp.utils = abp.utils || {};

      /* Creates a name namespace.
      *  Example:
      *  var taskService = abp.utils.createNamespace(abp, 'services.task');
      *  taskService will be equal to abp.services.task
      *  first argument (root) must be defined first
      ************************************************************/
      abp.utils.createNamespace = function (root, ns) {
        var parts = ns.split('.');
        for (var i = 0; i < parts.length; i++) {
          if (typeof root[parts[i]] == 'undefined') {
            root[parts[i]] = {};
          }

          root = root[parts[i]];
        }

        return root;
      };

      /* Find and replaces a string (search) to another string (replacement) in
      *  given string (str).
      *  Example:
      *  abp.utils.replaceAll('This is a test string', 'is', 'X') = 'ThX X a test string'
      ************************************************************/
      abp.utils.replaceAll = function (str, search, replacement) {
        var fix = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return str.replace(new RegExp(fix, 'g'), replacement);
      };

      /* Formats a string just like string.format in C#.
      *  Example:
      *  abp.utils.formatString('Hello {0}','Tuana') = 'Hello Tuana'
      ************************************************************/
      abp.utils.formatString = function () {
        if (arguments.length < 1) {
          return null;
        }

        var str = arguments[0];

        for (var i = 1; i < arguments.length; i++) {
          var placeHolder = '{' + (i - 1) + '}';
          str = abp.utils.replaceAll(str, placeHolder, arguments[i]);
        }

        return str;
      };

      abp.utils.toPascalCase = function (str) {
        if (!str || !str.length) {
          return str;
        }

        if (str.length === 1) {
          return str.charAt(0).toUpperCase();
        }

        return str.charAt(0).toUpperCase() + str.substr(1);
      }

      abp.utils.toCamelCase = function (str) {
        if (!str || !str.length) {
          return str;
        }

        if (str.length === 1) {
          return str.charAt(0).toLowerCase();
        }

        return str.charAt(0).toLowerCase() + str.substr(1);
      }

      abp.utils.truncateString = function (str, maxLength) {
        if (!str || !str.length || str.length <= maxLength) {
          return str;
        }

        return str.substr(0, maxLength);
      };

      abp.utils.truncateStringWithPostfix = function (str, maxLength, postfix) {
        postfix = postfix || '...';

        if (!str || !str.length || str.length <= maxLength) {
          return str;
        }

        if (maxLength <= postfix.length) {
          return postfix.substr(0, maxLength);
        }

        return str.substr(0, maxLength - postfix.length) + postfix;
      };

      abp.utils.isFunction = function (obj) {
        if ($) {
          //Prefer to use jQuery if possible
          return $.isFunction(obj);
        }

        //alternative for $.isFunction
        return !!(obj && obj.constructor && obj.call && obj.apply);
      };

      /**
       * parameterInfos should be an array of { name, value } objects
       * where name is query string parameter name and value is it's value.
       * includeQuestionMark is true by default.
       */
      abp.utils.buildQueryString = function (parameterInfos, includeQuestionMark) {
        if (includeQuestionMark === undefined) {
          includeQuestionMark = true;
        }

        var qs = '';

        function addSeperator() {
          if (!qs.length) {
            if (includeQuestionMark) {
              qs = qs + '?';
            }
          } else {
            qs = qs + '&';
          }
        }

        for (var i = 0; i < parameterInfos.length; ++i) {
          var parameterInfo = parameterInfos[i];
          if (parameterInfo.value === undefined) {
            continue;
          }

          if (parameterInfo.value === null) {
            parameterInfo.value = '';
          }

          addSeperator();

          if (parameterInfo.value.toJSON && typeof parameterInfo.value.toJSON === "function") {
            qs = qs + parameterInfo.name + '=' + encodeURIComponent(parameterInfo.value.toJSON());
          } else if (Array.isArray(parameterInfo.value) && parameterInfo.value.length) {
            for (var j = 0; j < parameterInfo.value.length; j++) {
              if (j > 0) {
                addSeperator();
              }

              qs = qs + parameterInfo.name + '[' + j + ']=' + encodeURIComponent(parameterInfo.value[j]);
            }
          } else {
            qs = qs + parameterInfo.name + '=' + encodeURIComponent(parameterInfo.value);
          }
        }

        return qs;
      }

      /**
       * Sets a cookie value for given key.
       * This is a simple implementation created to be used by ABP.
       * Please use a complete cookie library if you need.
       * @param {string} key
       * @param {string} value 
       * @param {Date} expireDate (optional). If not specified the cookie will expire at the end of session.
       * @param {string} path (optional)
       * @param {string} domain (optional)
       * @param {any} attributes (optional)
       */
      abp.utils.setCookieValue = function (key, value, expireDate, path, domain, attributes) {
        var cookieValue = encodeURIComponent(key) + '=';

        if (value) {
          cookieValue = cookieValue + encodeURIComponent(value);
        }

        if (expireDate) {
          cookieValue = cookieValue + "; expires=" + expireDate.toUTCString();
        }

        if (path) {
          cookieValue = cookieValue + "; path=" + path;
        }

        if (domain) {
          cookieValue = cookieValue + "; domain=" + domain;
        }

        for (var name in attributes) {
          if (!attributes[name]) {
            continue;
          }

          cookieValue += '; ' + name;
          if (attributes[name] === true) {
            continue;
          }

          cookieValue += '=' + attributes[name].split(';')[0];
        }

        document.cookie = cookieValue;
      };

      /**
       * Gets a cookie with given key.
       * This is a simple implementation created to be used by ABP.
       * Please use a complete cookie library if you need.
       * @param {string} key
       * @returns {string} Cookie value or null
       */
      abp.utils.getCookieValue = function (key) {
        var equalities = document.cookie.split('; ');
        for (var i = 0; i < equalities.length; i++) {
          if (!equalities[i]) {
            continue;
          }

          var splitted = equalities[i].split('=');
          if (splitted.length != 2) {
            continue;
          }

          if (decodeURIComponent(splitted[0]) === key) {
            return decodeURIComponent(splitted[1] || '');
          }
        }

        return null;
      };

      /**
       * Deletes cookie for given key.
       * This is a simple implementation created to be used by ABP.
       * Please use a complete cookie library if you need.
       * @param {string} key
       * @param {string} path (optional)
       */
      abp.utils.deleteCookie = function (key, path) {
        var cookieValue = encodeURIComponent(key) + '=';

        cookieValue = cookieValue + "; expires=" + (new Date(new Date().getTime() - 86400000)).toUTCString();

        if (path) {
          cookieValue = cookieValue + "; path=" + path;
        }

        document.cookie = cookieValue;
      }

      /**
       * Gets the domain of given url
       * @param {string} url 
       * @returns {string} 
       */
      abp.utils.getDomain = function (url) {
        var domainRegex = /(https?:){0,1}\/\/((?:[\w\d-]+\.)+[\w\d]{2,})/i;
        var matches = domainRegex.exec(url);
        return (matches && matches[2]) ? matches[2] : '';
      }

      /* TIMING *****************************************/
      abp.timing = abp.timing || {};

      abp.timing.utcClockProvider = (function () {

        var toUtc = function (date) {
          return Date.UTC(
            date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(),
            date.getUTCSeconds(), date.getUTCMilliseconds()
          );
        }

        var now = function () {
          return toUtc(new Date());
        };

        var normalize = function (date) {
          if (!date) {
            return date;
          }

          return new Date(toUtc(date));
        };

        // Public interface ///////////////////////////////////////////////////

        return {
          now: now,
          normalize: normalize,
          supportsMultipleTimezone: true
        };
      })();

      abp.timing.localClockProvider = (function () {

        var toLocal = function (date) {
          return new Date(
            date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(),
            date.getMilliseconds()
          );
        }

        var now = function () {
          return toLocal(new Date());
        }

        var normalize = function (date) {
          if (!date) {
            return date;
          }

          return toLocal(date);
        }

        // Public interface ///////////////////////////////////////////////////

        return {
          now: now,
          normalize: normalize,
          supportsMultipleTimezone: false
        };
      })();

      abp.timing.unspecifiedClockProvider = (function () {

        var now = function () {
          return new Date();
        }

        var normalize = function (date) {
          return date;
        }

        // Public interface ///////////////////////////////////////////////////

        return {
          now: now,
          normalize: normalize,
          supportsMultipleTimezone: false
        };
      })();

      abp.timing.convertToUserTimezone = function (date) {
        var localTime = date.getTime();
        var utcTime = localTime + (date.getTimezoneOffset() * 60000);
        var targetTime = parseInt(utcTime) + parseInt(abp.timing.timeZoneInfo.windows.currentUtcOffsetInMilliseconds);
        return new Date(targetTime);
      };

      /* CLOCK *****************************************/
      abp.clock = abp.clock || {};

      abp.clock.now = function () {
        if (abp.clock.provider) {
          return abp.clock.provider.now();
        }

        return new Date();
      }

      abp.clock.normalize = function (date) {
        if (abp.clock.provider) {
          return abp.clock.provider.normalize(date);
        }

        return date;
      }

      abp.clock.provider = abp.timing.unspecifiedClockProvider;

      /* SECURITY ***************************************/
      abp.security = abp.security || {};
      abp.security.antiForgery = abp.security.antiForgery || {};

      abp.security.antiForgery.tokenCookieName = 'XSRF-TOKEN';
      abp.security.antiForgery.tokenHeaderName = 'X-XSRF-TOKEN';

      abp.security.antiForgery.getToken = function () {
        return abp.utils.getCookieValue(abp.security.antiForgery.tokenCookieName);
      };

      abp.security.antiForgery.shouldSendToken = function (settings) {
        if (settings.crossDomain === undefined || settings.crossDomain === null) {
          return abp.utils.getDomain(location.href) === abp.utils.getDomain(settings.url);
        }

        return !settings.crossDomain;
      };

      return abp;
    })();
  });
}(typeof define === 'function' && define.amd
  ? define
  : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = factory(require('jquery'));
    } else {
      window.abp = factory(window.jQuery);
    }
  }));

;var abp = abp || {};

(function () {
  if (!Swal) {
    return;
  }
  /* MESSAGE **************************************************/


  var showMessage = function showMessage(type, message, title, isHtml, options) {
    if (!title) {
      title = message;
      message = undefined;
    }

    options = options || {};
    options.title = title;
    options.icon = type;
    options.confirmButtonText = options.confirmButtonText || abp.localization.abpWeb("Ok");

    if (isHtml) {
      options.html = message;
    } else {
      options.text = message;
    }

    return Swal.fire(options);
  };

  abp.message.info = function (message, title, isHtml, options) {
    return showMessage("info", message, title, isHtml, options);
  };

  abp.message.success = function (message, title, isHtml, options) {
    return showMessage("success", message, title, isHtml, options);
  };

  abp.message.warn = function (message, title, isHtml, options) {
    return showMessage("warning", message, title, isHtml, options);
  };

  abp.message.error = function (message, title, isHtml, options) {
    return showMessage("error", message, title, isHtml, options);
  };

  abp.message.confirm = function (message, titleOrCallback, callback, isHtml, options) {
    var title = undefined;

    if (typeof titleOrCallback === "function") {
      callback = titleOrCallback;
    } else if (titleOrCallback) {
      title = titleOrCallback;
    }

    options = options || {};
    options.title = title ? title : abp.localization.abpWeb("Are You Sure?");
    options.icon = "warning";
    options.confirmButtonText = options.confirmButtonText || abp.localization.abpWeb("Yes");
    options.cancelButtonText = options.cancelButtonText || abp.localization.abpWeb("Cancel");
    options.showCancelButton = true;

    if (isHtml) {
      options.html = message;
    } else {
      options.text = message;
    }

    return Swal.fire(options).then(function (result) {
      callback && callback(result.value);
    });
  };
  /* NOTIFICATION *********************************************/


  var Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000
  });

  var showNotification = function showNotification(type, message, title, options) {
    var icon = options.customClass.icon ? "<i class=\"mr-2 text-light ".concat(options.customClass.icon, "\"></i>") : "";

    if (title) {
      options.title = "".concat(icon, "<span class=\"text-light\">").concat(title, "</span>");
    }

    options.html = "".concat(title ? "" : icon, "\n    <span class=\"text-light\">").concat(message, "</span>");
    Toast.fire(options);
  };

  abp.notify.success = function (message, title, options) {
    showNotification("success", message, title, Object.assign({
      background: "#34bfa3",
      customClass: {
        icon: "fas fa-check-circle"
      }
    }, options));
  };

  abp.notify.info = function (message, title, options) {
    showNotification("info", message, title, Object.assign({
      background: "#36a3f7",
      customClass: {
        icon: "fas fa-info-circle"
      }
    }, options));
  };

  abp.notify.warn = function (message, title, options) {
    showNotification("warning", message, title, Object.assign({
      background: "#ffb822",
      customClass: {
        icon: "fas fa-exclamation-triangle"
      }
    }, options));
  };

  abp.notify.error = function (message, title, options) {
    showNotification("error", message, title, Object.assign({
      background: "#f4516c",
      customClass: {
        icon: "fas fa-exclamation-circle"
      }
    }, options));
  };
})();
;"use strict";

var abp = abp || {};

(function () {
  if (!FreezeUI || !UnFreezeUI) {
    return;
  }

  abp.ui.setBusy = function (elm, text, delay) {
    FreezeUI({
      element: elm,
      text: text ? text : " ",
      delay: delay
    });
  };

  abp.ui.clearBusy = function (elm, delay) {
    UnFreezeUI({
      element: elm,
      delay: delay
    });
  };
})();
;﻿var abp = abp || {};
(function () {
    if (!moment || !moment.tz) {
        return;
    }

    /* DEFAULTS *************************************************/

    abp.timing = abp.timing || {};

    /* FUNCTIONS **************************************************/

    abp.timing.convertToUserTimezone = function (date) {
        var momentDate = moment(date);
        var targetDate = momentDate.clone().tz(abp.timing.timeZoneInfo.iana.timeZoneId);
        return targetDate;
    };

})();
;
//# sourceMappingURL=scripts.js.map