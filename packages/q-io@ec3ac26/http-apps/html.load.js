montageDefine("ec3ac26","http-apps/html",{dependencies:["q"],factory:function(e,t,n){function l(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var a=e("q");t.HandleHtmlFragmentResponses=function(e,n){return n=n||t.handleHtmlFragmentResponse,function(t){return t.handleHtmlFragmentResponse=n,a.fcall(e,t).then(function(e){return e.htmlFragment?a.fcall(n,e):e})}},t.handleHtmlFragmentResponse=function(e){var t=e.htmlFragment;return delete e.htmlFragment,e.headers["content-type"]="text/html; charset=utf-8",e.body={forEach:function(n){n("<!doctype html>\n"),n("<html>\n"),n("    <head>\n"),void 0!==e.htmlTitle&&n("        <title>"+l(e.htmlTitle)+"</title>\n"),n("    </head>\n"),n("    <body>\n"),t.forEach(function(e){n("        "+e)}),n("    </body>\n"),n("</html>\n")}},e},t.escapeHtml=l}});