montageDefine("39f037b","ui/moviestrip.reel/moviestrip.html",{"text":"<!DOCTYPE html><html manifest=../../manifest.appcache><head><meta http-equiv=content-type content=\"text/html; charset=utf-8\"><style>.Moviestrip{position:absolute;top:50%;margin-top:-500px;left:0;right:0;height:1000px}.Moviestrip-flow .montage-Flow-Repetition{opacity:1;-webkit-transition:opacity .5s;-moz-transition:opacity .5s;-ms-transition:opacity .5s;transition:opacity .5s}.Moviestrip-flow.is-hidden .montage-Flow-Repetition{opacity:0}.montage-Flow-Slot{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d}.Moviestrip-flow .Moviestrip-image{position:absolute;width:180px;height:267px;margin-left:-90px;margin-top:-130px;cursor:pointer;background:#000;background-repeat:no-repeat;background-size:cover;background-position:center center}.Moviestrip-flow .Moviestrip-image:before{content:\"\";position:absolute;top:-26px;left:-33px;width:246px;height:332px;background-image:url(ui/moviestrip.reel/frame.png);pointer-events:none;background-size:246px 332px;background-repeat:no-repeat}</style><script type=text/montage-serialization>{\"owner\":{\"values\":{\"element\":{\"#\":\"owner\"},\"movieFlow\":{\"@\":\"movieFlow\"}}},\"movieFlow\":{\"prototype\":\"montage/ui/flow.reel\",\"values\":{\"element\":{\"#\":\"movieFlow\"},\"cameraFov\":77.06934,\"cameraPosition\":[0,0,400],\"cameraTargetPoint\":[0,0,0],\"delegate\":{\"@\":\"owner\"},\"hasSelectedIndexScrolling\":true,\"isSelectionEnabled\":true,\"linearScrollingVector\":[-90,0],\"paths\":[{\"knots\":[{\"knotPosition\":[-480,0,0],\"nextHandlerPosition\":[-480,0,-62.87],\"previousHandlerPosition\":[-480,0,62.87],\"previousDensity\":1,\"nextDensity\":1,\"rotateY\":1.571},{\"knotPosition\":[-443.46,0,-183.69],\"nextHandlerPosition\":[-419.4,0,-241.77],\"previousHandlerPosition\":[-467.52,0,-125.6],\"previousDensity\":1,\"nextDensity\":1,\"rotateY\":1.178},{\"knotPosition\":[-339.41,0,-339.41],\"nextHandlerPosition\":[-294.96,0,-383.87],\"previousHandlerPosition\":[-383.87,0,-294.96],\"previousDensity\":1,\"nextDensity\":1,\"rotateY\":0.785},{\"knotPosition\":[-183.69,0,-443.46],\"nextHandlerPosition\":[-125.6,0,-467.52],\"previousHandlerPosition\":[-241.77,0,-419.4],\"previousDensity\":1,\"nextDensity\":1,\"rotateY\":0.393},{\"knotPosition\":[0,0,-200],\"nextHandlerPosition\":[62.87,0,-200],\"previousHandlerPosition\":[-62.87,0,-200],\"previousDensity\":1,\"nextDensity\":1,\"rotateY\":0},{\"knotPosition\":[183.67,0,-443.46],\"nextHandlerPosition\":[241.77,0,-419.4],\"previousHandlerPosition\":[125.6,0,-467.52],\"previousDensity\":1,\"nextDensity\":1,\"rotateY\":-0.393},{\"knotPosition\":[339.41,0,-339.41],\"nextHandlerPosition\":[383.87,0,-294.96],\"previousHandlerPosition\":[294.96,0,-383.87],\"previousDensity\":1,\"nextDensity\":1,\"rotateY\":-0.785},{\"knotPosition\":[443.46,0,-183.67],\"nextHandlerPosition\":[467.52,0,-125.6],\"previousHandlerPosition\":[419.4,0,-241.77],\"previousDensity\":1,\"nextDensity\":1,\"rotateY\":-1.178},{\"knotPosition\":[480,0,0],\"nextHandlerPosition\":[480,0,62.87],\"previousHandlerPosition\":[480,0,-62.87],\"previousDensity\":1,\"nextDensity\":1,\"rotateY\":-1.571}],\"units\":{\"rotateY\":\"rad\"},\"headOffset\":4,\"tailOffset\":4}],\"scrollingTransitionDuration\":\"600\",\"slotContent\":{\"@\":\"overlay\"},\"stride\":1,\"classList.has('is-hidden')\":{\"<-\":\"@owner._flowHidden\"},\"contentController\":{\"<-\":\"@owner._displayedContentController\"}}},\"overlay\":{\"prototype\":\"./overlay.reel\",\"values\":{\"element\":{\"#\":\"overlay\"}}},\"poster\":{\"prototype\":\"./image.reel\",\"values\":{\"element\":{\"#\":\"poster\"},\"label\":{\"<-\":\"@movieFlow:iteration.object.title\"},\"src\":{\"<-\":\"'https://image.tmdb.org/t/p/w300' + @movieFlow:iteration.object.poster_path\"}}},\"keyUp\":{\"prototype\":\"montage/composer/key-composer\",\"values\":{\"keys\":\"up\",\"identifier\":\"previous\",\"component\":{\"@\":\"owner\"}}},\"keyDown\":{\"prototype\":\"montage/composer/key-composer\",\"values\":{\"keys\":\"down\",\"identifier\":\"next\",\"component\":{\"@\":\"owner\"}}},\"keyLeft\":{\"prototype\":\"montage/composer/key-composer\",\"values\":{\"keys\":\"left\",\"identifier\":\"previous\",\"component\":{\"@\":\"owner\"}}},\"keyRight\":{\"prototype\":\"montage/composer/key-composer\",\"values\":{\"keys\":\"right\",\"identifier\":\"next\",\"component\":{\"@\":\"owner\"}}}}</script></head><body><div data-montage-id=owner class=Moviestrip><div data-montage-id=overlay></div><div data-montage-id=movieFlow class=Moviestrip-flow><div data-montage-id=poster class=Moviestrip-image></div></div><div class=film></div></div></body></html>"})