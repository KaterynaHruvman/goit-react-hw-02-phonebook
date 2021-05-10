(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={btnDelete:"ContactList_btnDelete__1uBjl",contactListItem:"ContactList_contactListItem__1l6Fa"}},12:function(t,e,n){t.exports={App:"App_App__16ZpL",Form:"App_Form__3oXAM"}},19:function(t,e,n){},2:function(t,e,n){t.exports={btnAddContact:"ContactForm_btnAddContact__2bijG",form:"ContactForm_form__1fuOn",input:"ContactForm_input__gm87B"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),o=n(11),c=n.n(o),i=n(13),s=n(3),u=n(4),l=n(7),h=n(6),d=n(5),m=n(23),p=n(2),b=n.n(p),f=n(0),j={name:"",phone:""},C=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state=j,t.handleChangeForm=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.phone,o=t.props.onAdd;t.validateForm()&&(o({id:Object(m.a)(),name:a,phone:r}),t.resetForm())},t.validateForm=function(){var e=t.state,n=e.name,a=e.phone,r=t.props.onCheckUnique;return n&&a?r(n):(alert("Some field is empty"),!1)},t.resetForm=function(){t.setState(j)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return Object(f.jsxs)("form",{onSubmit:this.handleFormSubmit,className:b.a.form,children:[Object(f.jsx)("input",{className:b.a.input,type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChangeForm}),Object(f.jsx)("input",{className:b.a.input,type:"tel",name:"phone",placeholder:"Enter phone number",value:n,onChange:this.handleChangeForm,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"Enter a correct Pnone-number",required:!0}),Object(f.jsx)("button",{type:"submit",className:b.a.btnAddContact,children:"Add contact"})]})}}]),n}(a.Component),v=n(9),O=n(10),x=n.n(O),g=function(t){var e=t.id,n=t.name,a=t.phone,r=t.onRemove;return Object(f.jsxs)("li",{className:x.a.contactListItem,children:[n,": ",a," ",Object(f.jsx)("button",{onClick:function(){return r(e)},className:x.a.btnDelete,children:"delete"})]})},_=function(t){var e=t.contacts,n=t.onRemove;return 0===e.lenght?null:Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsx)(g,Object(v.a)(Object(v.a)({},t),{},{onRemove:n}))}))})},A=function(t){var e=t.filter,n=t.onChange;return Object(f.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(t){var e=t.target;return n(e.value)},placeholder:"Entert name for Search"})},F=n(12),y=n.n(F),k=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleAddContact=function(e){return t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(i.a)(n),[e])}}))},t.handleCheckUnique=function(e){var n=!!t.state.contacts.find((function(t){return t.name===e}));return n&&alert("Contact already exists"),!n},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.handleFilterChange=function(e){return t.setState({filter:e})},t.handleRemoveContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(f.jsxs)("div",{className:y.a.App,children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(C,{onAdd:this.handleAddContact,onCheckUnique:this.handleCheckUnique}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(A,{filter:t,onChange:this.handleFilterChange}),Object(f.jsx)(_,{contacts:e,onRemove:this.handleRemoveContact})]})}}]),n}(a.Component);n(19),n(20);c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.5f2a195f.chunk.js.map