montageDefine("3b82d9a","lib/trie",{dependencies:[],factory:function(e,n,c){function i(e){var n=Object.keys(e),c={value:void 0,children:{}},r={};n.forEach(function(n){if(0===n.length)c.value=e[n];else{var i=n[0];r[i]||(r[i]={});var t=n.slice(1);r[i][t]=e[n]}});var t=Object.keys(r);return t.forEach(function(e){c.children[e]=i(r[e])}),c}c.exports=i}});