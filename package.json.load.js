montageDefine("39f037b","package.json",{exports:{name:"Popcorn",version:"1.0.0",description:"Popcorn is a movie discovery application made using MontageJS",license:"BSD-3-Clause",author:"Montage Studio, inc. (http://montagestudio.com/)",repository:{type:"git",url:"https://github.com/montagejs/popcorn.git"},production:!0,appcache:{exclude:["**/manifest.appcache","**/ui/**/*.js*","**/ui/**/*.html*","**/ui/**/*.meta*","**/ui/**/*.css*","**/core/**/*","**/*.json","**/node_modules/**/*"]},manifest:!0,dependencies:{digit:"^3.0.2",montage:"montagejs/montage#master","query-params":"0.0.1",url:"^0.11.0"},devDependencies:{jshint:"^2.9.5",minit:"^0.5.7","montage-testing":"~0.5.1",mop:"montagejs/mop#master"},scripts:{lint:"jshint .",build:"mop .",start:"minit serve","start:dist":"minit serve -r dist",publish:"git checkout gh-pages && git subtree push --prefix dist origin gh-pages"},excludes:["**/**/mocha.css","dist","builds"],bundle:["ui/main.reel"],main:"index",hash:"39f037b",mappings:{digit:{name:"digit",hash:"fe73d5b",location:"packages/digit@fe73d5b/"},montage:{name:"montage",hash:"b4c27ac",location:"packages/montage@b4c27ac/"},"query-params":{name:"query-params",hash:"057dead",location:"packages/query-params@057dead/"},url:{name:"url",hash:"d1c2194",location:"packages/url@d1c2194/"}},useScriptInjection:!0}});