(()=>{"use strict";var e,t={2295:(e,t,n)=>{var r=n(7294),l=n(3935),o=n(4079),a=n(2459),i=n(9250),c=n(6025),u=n(7977),m=n(5147),s=n(5005),p=n(1881),f=n(9655);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(){var e,t,n=(0,i.s0)(),l=(e=(0,f.lr)(),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o,a,i=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,l=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw l}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return r.createElement(c.Z,null,r.createElement(c.Z.Header,{as:"h5"},"Filter"),r.createElement(c.Z.Body,null,r.createElement(c.Z.Text,null,"Currently Employed:"," ",r.createElement("select",{value:l.get("employed"),onChange:function(e){return n(e.target.value?"/employees?employed=".concat(e.target.value):"/employees")}},r.createElement("option",{value:""},"All"),r.createElement("option",{value:"true"},"Employed"),r.createElement("option",{value:"false"},"Not Employed")))))}var h=n(682),E=n(4051),b=n(1555);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,l=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===v(l)?l:String(l)),r)}var l}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Z(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Z(e,t)}(i,e);var t,n,l,o,a=(l=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(l);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(this,e)});function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this)).state={modalVisible:!1},e.handleSubmit=e.handleSubmit.bind(w(e)),e.handleShowModal=e.handleShowModal.bind(w(e)),e.handleHideModal=e.handleHideModal.bind(w(e)),e}return t=i,(n=[{key:"handleShowModal",value:function(){this.setState({modalVisible:!0})}},{key:"handleHideModal",value:function(){this.setState({modalVisible:!1})}},{key:"handleSubmit",value:function(e){var t=document.forms.employeeAdd,n={name:t.name.value,extension:t.ext.value,email:t.email.value,title:t.title.value};this.props.createEmployee(n),t.name.value="",t.ext.value="",t.email.value="",t.title.value="",this.setState({modalVisible:!1})}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"addEmployee"},r.createElement(s.Z,{variant:"primary",size:"sm",onClick:this.handleShowModal},"New Employee")),r.createElement(p.Z,{show:this.state.modalVisible,onHide:this.handleHideModal,centered:!0},r.createElement(p.Z.Header,{closeButton:!0},r.createElement(p.Z.Title,null,"Add New Employee")),r.createElement(p.Z.Body,null,r.createElement(h.Z,null,r.createElement("form",{name:"employeeAdd"},r.createElement(E.Z,null,r.createElement(b.Z,{md:3},"Name:"),r.createElement(b.Z,{md:"auto"}," ",r.createElement("input",{type:"text",name:"name"}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:3},"Extension:"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"ext",maxLength:4}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:3},"Email:"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"email"}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:3}," Title:"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"title"})))))),r.createElement(p.Z.Footer,null,r.createElement(s.Z,{type:"submit",variant:"success",size:"sm",className:"mt-4",onClick:this.handleSubmit},"Add Employee"))))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.Component);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,l=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(l)?l:String(l)),r)}var l}function P(e,t,n){return t&&x(e.prototype,t),n&&x(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function T(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=D(e);if(t){var l=D(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return H(e)}(this,n)}}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function M(e){var t=(0,i.TH)().search,n=new URLSearchParams(t).get("employed"),l=e.employees.filter((function(e){return!n||String(e.currentlyEmployed)===n})).map((function(t){return r.createElement(A,{key:t._id,employee:t,deleteEmployee:e.deleteEmployee})}));return r.createElement(c.Z,null,r.createElement(c.Z.Header,{as:"h5"},"All Employees ",r.createElement(u.Z,{bg:"secondary"},l.length)),r.createElement(c.Z.Body,null,r.createElement(c.Z.Text,null,r.createElement(m.Z,{striped:!0,size:"sm"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Extension"),r.createElement("th",null,"Email"),r.createElement("th",null,"Title"),r.createElement("th",null,"Date Hired"),r.createElement("th",null,"Currently Employed?"),r.createElement("th",null))),r.createElement("tbody",null,l)))))}var A=function(e){T(n,e);var t=_(n);function n(e){var r;return k(this,n),(r=t.call(this,e)).props=e,r.state={modalShow:!1},r.toggleModal=r.toggleModal.bind(H(r)),r.onDeleteClick=r.onDeleteClick.bind(H(r)),r}return P(n,[{key:"toggleModal",value:function(){this.setState({modalShow:!this.state.modalShow})}},{key:"onDeleteClick",value:function(){this.props.deleteEmployee(this.props.employee._id)}},{key:"render",value:function(){return r.createElement("tr",null,r.createElement("td",null,r.createElement(f.rU,{to:"/edit/".concat(this.props.employee._id)},this.props.employee.name)),r.createElement("td",null,this.props.employee.extension),r.createElement("td",null,this.props.employee.email),r.createElement("td",null,this.props.employee.title),r.createElement("td",null,this.props.employee.dateHired.toDateString()),r.createElement("td",null,this.props.employee.currentlyEmployed?"Yes":"No"),r.createElement("td",null,r.createElement(s.Z,{variant:"danger",size:"sm",onClick:this.toggleModal},"X"),r.createElement(p.Z,{show:this.state.modalShow,onHide:this.toggleModal,centered:!0},r.createElement(p.Z.Header,{closeButton:!0},"Delete Employee?"),r.createElement(p.Z.Body,null,"Are you sure you want to delete this employee?"),r.createElement(p.Z.Footer,null,r.createElement(s.Z,{variant:"danger",onClick:this.toggleModal},"Cancel"),r.createElement(s.Z,{variant:"success",onClick:this.onDeleteClick},"yes")))))}}]),n}(r.Component),R=function(e){T(n,e);var t=_(n);function n(){var e;return k(this,n),(e=t.call(this)).state={employees:[]},e.createEmployee=e.createEmployee.bind(H(e)),e.deleteEmployee=e.deleteEmployee.bind(H(e)),e}return P(n,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;fetch("/api/employees").then((function(e){return e.json()})).then((function(t){t.employees.forEach((function(e){e.dateHired=new Date(e.dateHired)})),e.setState({employees:t.employees})})).catch((function(e){console.log(e)}))}},{key:"createEmployee",value:function(e){var t=this;fetch("/api/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.employee.dateHired=new Date(e.employee.dateHired);var n=t.state.employees.concat(e.employee);t.setState({employees:n}),console.log("Total count of employees:",n.length)})).catch((function(e){console.log(e)}))}},{key:"deleteEmployee",value:function(e){var t=this;fetch("/api/employees/".concat(e),{method:"DELETE"}).then((function(e){e.ok?t.loadData():console.log("Failed to delete employee.")}))}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(S,{createEmployee:this.createEmployee}),r.createElement(d,null),r.createElement(M,{employees:this.state.employees,deleteEmployee:this.deleteEmployee}))}}]),n}(r.Component);function B(){return r.createElement(c.Z,null,r.createElement(c.Z.Header,{as:"h5"},"Filter"),r.createElement(c.Z.Body,null,r.createElement(c.Z.Text,null,"This is a is a placeholder for the employee report.")))}var V=n(8375);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,l=function(e,t){if("object"!==N(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===N(l)?l:String(l)),r)}var l}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(i,e);var t,n,l,o,a=(l=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(l);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return z(e)}(this,e)});function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this)).state={employee:[],alertVisible:!1,alertColor:"success",alertMessage:""},e.handleSubmit=e.handleSubmit.bind(z(e)),e}return t=i,(n=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this,t=window.location.pathname.split("/")[2];fetch("/api/employees/".concat(t)).then((function(e){return e.json()})).then((function(t){t.employee.dateHired=new Date(t.employee.dateHired),e.setState({employee:t.employee})})).catch((function(e){console.log(e)}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=document.forms.employeeUpdate,r=n.id.value,l=n.name.value,o=n.extension.value,a=n.email.value,i=n.title.value,c=n.currentlyEmployed.checked,u="/api/employees/".concat(r);fetch(u,{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json;charset-UTF=8"},body:JSON.stringify({name:l,extension:o,email:a,title:i,currentlyEmployed:c})}).then((function(e){return e.json()})).then((function(e){t.setState({alertVisible:!0,alertMessage:e.msg})}))}},{key:"render",value:function(){var e=this;return r.createElement(c.Z,null,r.createElement(c.Z.Header,{as:"h5"},"Edit ",this.state.employee.name),r.createElement(c.Z.Body,null,r.createElement(c.Z.Text,null,r.createElement(h.Z,{fluid:!0},r.createElement("form",{name:"employeeUpdate",onSubmit:this.handleSubmit},r.createElement(E.Z,null,r.createElement(b.Z,{md:2},"ID:"),r.createElement(b.Z,{md:"auto"}," ",r.createElement("input",{type:"text",name:"id",readOnly:"readOnly",defaultValue:this.state.employee._id}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:2},"Name:"),r.createElement(b.Z,{md:"auto"}," ",r.createElement("input",{type:"text",name:"name",readOnly:"readOnly",defaultValue:this.state.employee.name}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:2},"Extension:"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"extension",defaultValue:this.state.employee.extension}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:2},"Email:"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"email",defaultValue:this.state.employee.email}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:2},"Title:"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"title",defaultValue:this.state.employee.title}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:2},"Date Hired"),r.createElement(b.Z,{md:"auto"}," ",r.createElement("input",{type:"text",name:"dateHired",readOnly:"readOnly",defaultValue:this.state.employee.dateHired}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:2},"Currently Employed?"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"checkbox",name:"currentlyEmployed",defaultChecked:this.state.employee.currentlyEmployed}))),r.createElement(s.Z,{type:"submit",variant:"primary",size:"sm",className:"my-3"},"Update Employee"),r.createElement(V.Z,{variant:this.state.alertColor,show:this.state.alertVisible,onClose:function(){return e.setState({alertVisible:!1})},dismissible:!0},this.state.alertMessage))))))}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.Component);function W(){var e=function(){return r.createElement("h1",null,"Page Not Found")};return r.createElement(i.Z5,null,r.createElement(i.AW,{path:"/employees",element:r.createElement(R,null)}),r.createElement(i.AW,{path:"/edit/:id",element:r.createElement(L,null)}),r.createElement(i.AW,{path:"/report",element:r.createElement(B,null)}),r.createElement(i.AW,{path:"/",element:r.createElement(i.Fg,{replace:!0,to:"/employees"})}),r.createElement(i.AW,{path:"*",element:r.createElement(e,null)}))}function J(){return r.createElement(o.Z,{bg:"dark",variant:"dark"},r.createElement(o.Z.Brand,{href:"/"},"Employee Management Application"),r.createElement(a.Z,null,r.createElement(a.Z.Link,{href:"/employees"},"All Employees"),r.createElement(a.Z.Link,{href:"/report"},"Reports")))}function K(){return r.createElement("div",null,r.createElement(J,null),r.createElement(W,null))}l.render(r.createElement(f.VK,null,r.createElement(r.StrictMode,null,r.createElement(K,null))),document.getElementById("content"))}},n={};function r(e){var l=n[e];if(void 0!==l)return l.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,l,o)=>{if(!n){var a=1/0;for(m=0;m<e.length;m++){for(var[n,l,o]=e[m],i=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(m--,1);var u=l();void 0!==u&&(t=u)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[n,l,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={624:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var l,o,[a,i,c]=n,u=0;if(a.some((t=>0!==e[t]))){for(l in i)r.o(i,l)&&(r.m[l]=i[l]);if(c)var m=c(r)}for(t&&t(n);u<a.length;u++)o=a[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(m)},n=self.webpackChunkmodule01=self.webpackChunkmodule01||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=r.O(void 0,[736],(()=>r(2295)));l=r.O(l)})();
//# sourceMappingURL=employees.bundle.js.map