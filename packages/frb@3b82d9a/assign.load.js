montageDefine("3b82d9a","assign",{dependencies:["./parse","./compile-assigner","./scope"],factory:function(e,n,s){function r(e,n,s,r,t,c){var i;i="string"==typeof n?a(n):n;var m=o(i),f=new p(e);return f.parameters=r,f.document=t,f.components=c,m(s,f)}var a=e("./parse"),o=e("./compile-assigner"),p=e("./scope");s.exports=r}});