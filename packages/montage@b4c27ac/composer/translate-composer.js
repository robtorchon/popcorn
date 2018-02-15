var Composer=require("./composer").Composer,defaultEventManager=require("../core/event/event-manager").defaultEventManager,TranslateComposer=exports.TranslateComposer=Composer.specialize({_NATIVE_ELEMENTS:{value:["A","IFRAME","EMBED","OBJECT","VIDEO","AUDIO","CANVAS","LABEL","INPUT","BUTTON","SELECT","TEXTAREA","KEYGEN","DETAILS","COMMAND"]},_WHEEL_POINTER:{value:"wheel",writable:!1},_MOUSE_POINTER:{value:"mouse",writable:!1},_TOUCH_POINTER:{value:"touch",writable:!1},CLAIM_POINTER_POLICIES:{value:{DEFAULT:"default",MOVE:"move"}},enabled:{value:!0},_externalUpdate:{value:!0},isAnimating:{value:!1},isMoving:{value:!1},frame:{value:function(){this.isAnimating&&this._animationInterval(),this._externalUpdate=!1}},_pointerSpeedMultiplier:{value:1},pointerSpeedMultiplier:{get:function(){return this._pointerSpeedMultiplier},set:function(t){this._pointerSpeedMultiplier=t}},pointerStartEventPosition:{value:null},shouldCancelOnSroll:{value:!0},_shouldDispatchTranslate:{value:!1},_isSelfUpdate:{value:!1},_allowFloats:{value:!1},allowFloats:{get:function(){return this._allowFloats},set:function(t){this._allowFloats!==t&&(this._allowFloats=t,this.translateX=this._translateX,this.translateY=this._translateY)}},allowTranslateOuterExtreme:{value:!1},_translateX:{value:0},translateX:{get:function(){return this._translateX},set:function(t){if("vertical"===this._axis)this._translateX=this._minTranslateX||0;else{var e=isNaN(t)?0:this._allowFloats?parseFloat(t):t>>0;null!==this._minTranslateX&&e<this._minTranslateX&&(e=this._minTranslateX),null!==this._maxTranslateX&&e>this._maxTranslateX&&(e=this._maxTranslateX),this._isSelfUpdate||(this.isAnimating=!1),this._translateX=e}}},_translateY:{value:0},translateY:{get:function(){return this._translateY},set:function(t){if("horizontal"===this._axis)this._translateY=this._minTranslateY||0;else{var e=isNaN(t)?0:this._allowFloats?parseFloat(t):t>>0;null!==this._minTranslateY&&e<this._minTranslateY&&(e=this._minTranslateY),null!==this._maxTranslateY&&e>this._maxTranslateY&&(e=this._maxTranslateY),this._isSelfUpdate||(this.isAnimating=!1),this._translateY=e}}},_minTranslateX:{value:null},minTranslateX:{get:function(){return this._minTranslateX},set:function(t){null!==t&&(t=parseFloat(t)),this._minTranslateX!==t&&(null!==t&&this._translateX<t&&(this.translateX=t),this._minTranslateX=t)}},_maxTranslateX:{value:null},maxTranslateX:{get:function(){return this._maxTranslateX},set:function(t){null!==t&&(t=parseFloat(t)),this._maxTranslateX!==t&&(null!==t&&this._translateX>t&&(this.translateX=t),this._maxTranslateX=t)}},_minTranslateY:{value:null},minTranslateY:{get:function(){return this._minTranslateY},set:function(t){null!==t&&(t=parseFloat(t)),this._minTranslateY!==t&&(null!==t&&this._translateY<t&&(this.translateY=t),this._minTranslateY=t)}},_maxTranslateY:{value:null},maxTranslateY:{get:function(){return this._maxTranslateY},set:function(t){null!==t&&(t=parseFloat(t)),this._maxTranslateY!==t&&(null!==t&&this._translateY>t&&(this.translateY=t),this._maxTranslateY=t)}},_axis:{value:"both"},axis:{get:function(){return this._axis},set:function(t){switch(t){case"vertical":case"horizontal":this._axis=t,this.translateX=this._translateX,this.translateY=this._translateY;break;default:this._axis="both"}}},invertAxis:{depends:["invertXAxis","invertYAxis"],get:function(){return this._invertXAxis===this._invertYAxis?this._invertXAxis:null},set:function(t){this.invertXAxis=t,this.invertYAxis=t}},_invertXAxis:{value:!1},invertXAxis:{get:function(){return this._invertXAxis},set:function(t){this._invertXAxis=!!t}},_invertYAxis:{value:!1},invertYAxis:{get:function(){return this._invertYAxis},set:function(t){this._invertYAxis=!!t}},_hasMomentum:{value:!0},hasMomentum:{get:function(){return this._hasMomentum},set:function(t){this._hasMomentum=!!t}},__momentumDuration:{value:650},_momentumDuration:{get:function(){return this.__momentumDuration},set:function(t){this.__momentumDuration=isNaN(t)?1:t>>0,this.__momentumDuration<1&&(this.__momentumDuration=1)}},_pointerX:{value:null},_pointerY:{value:null},_touchIdentifier:{value:null},_isFirstMove:{value:!1},_observedPointer:{value:null},eventManager:{get:function(){return defaultEventManager}},_mouseRadiusThreshold:{value:2},_touchRadiusThreshold:{value:8},_listenToWheelEvent:{value:!1},listenToWheelEvent:{set:function(t){t=!!t,this._listenToWheelEvent!==t&&(this._listenToWheelEvent=t,this._isLoaded&&(t?this._addWheelEventListener():this._removeWheelEventListener()))},get:function(){return this._listenToWheelEvent}},_claimPointerPolicy:{value:null},load:{value:function(){window.PointerEvent?(this._element.addEventListener("pointerdown",this,!0),this._element.style.touchAction="none"):window.MSPointerEvent&&window.navigator.msPointerEnabled?this._element.addEventListener("MSPointerDown",this,!0):(this._element.addEventListener("touchstart",this,!0),this._element.addEventListener("mousedown",this,!0)),this._listenToWheelEvent&&this._addWheelEventListener(),this.eventManager.isStoringPointerEvents=!0}},unload:{value:function(){window.PointerEvent?(this._element.removeEventListener("pointerdown",this,!0),this._element.style.touchAction="auto"):window.MSPointerEvent&&window.navigator.msPointerEnabled?this._element.removeEventListener("MSPointerDown",this,!0):(this._element.removeEventListener("touchstart",this,!0),this._element.removeEventListener("mousedown",this,!0)),this._listenToWheelEvent&&this._removeWheelEventListener()}},surrenderPointer:{value:function(t,e){var i=this.callDelegateMethod("surrenderPointer",t,e);return("undefined"==typeof i||i!==!1)&&(this._cancel(),!0)}},addEventListener:{value:function(t,e,i){Composer.prototype.addEventListener.call(this,t,e,i),"translate"===t&&(this._shouldDispatchTranslate=!0)}},capturePointerdown:{value:function(t){t.pointerType===this._MOUSE_POINTER||window.MSPointerEvent&&t.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_MOUSE?this.captureMousedown(t):(t.pointerType===this._TOUCH_POINTER||window.MSPointerEvent&&t.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_TOUCH)&&this.captureTouchstart(t)}},capturePointermove:{value:function(t){t.pointerType===this._MOUSE_POINTER||window.MSPointerEvent&&t.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_MOUSE?this.captureMousemove(t):(t.pointerType===this._TOUCH_POINTER||window.MSPointerEvent&&t.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_TOUCH)&&this.captureTouchmove(t)}},handlePointerup:{value:function(t){t.pointerType===this._MOUSE_POINTER||window.MSPointerEvent&&t.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_MOUSE?this.handleMouseup(t):(t.pointerType===this._TOUCH_POINTER||window.MSPointerEvent&&t.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_TOUCH)&&this.handleTouchend(t)}},handlePointercancel:{value:function(t){(t.pointerType===this._TOUCH_POINTER||window.MSPointerEvent&&t.pointerType===window.MSPointerEvent.MSPOINTER_TYPE_TOUCH)&&this.handleTouchcancel(t)}},captureMousedown:{value:function(t){this.enabled&&0===t.button&&(this._observedPointer=this._MOUSE_POINTER,this._start(t.clientX,t.clientY,t.target,t.timeStamp))}},captureMousemove:{value:function(t){this.enabled&&this._handleMove(t)}},handleMouseup:{value:function(t){this.enabled&&this._end(t)}},captureTouchstart:{value:function(t){if(this.enabled&&null===this._observedPointer)if(void 0!==t.pointerId)this._observedPointer=t.pointerId,this._start(t.clientX,t.clientY,t.target,t.timeStamp),this._preventDefaultIfNeeded(t);else{var e=t.targetTouches;if(e&&1===e.length){var i=e[0];this._preventDefaultIfNeeded(t),this._observedPointer=i.identifier,this._start(i.clientX,i.clientY,i.target,t.timeStamp)}}}},captureTouchmove:{value:function(t){if(this.enabled)if(void 0!==t.pointerId)this._handleMove(t);else{var e=this._findObservedTouch(t.changedTouches);e&&this._handleMove(t,e)}}},handleTouchend:{value:function(t){if(this.enabled)if(void 0!==t.pointerId)this._end(t);else{var e=this._findObservedTouch(t.changedTouches);e&&this._end(e)}}},handleTouchcancel:{value:function(t){if(this.enabled)if(void 0!==t.pointerId)this._cancel(t);else{var e=this._findObservedTouch(t.changedTouches);e&&this._cancel(e)}}},captureScroll:{value:function(t){t.target.contains(this.element)&&this._cancel(t)}},_shouldPreventDefault:{value:function(t){return!defaultEventManager.isPassiveEventType(t.type)&&!!t.target.tagName&&this._NATIVE_ELEMENTS.indexOf(t.target.tagName)===-1&&!t.target.isContentEditable}},_preventDefaultIfNeeded:{value:function(t){!t.defaultPrevented&&this._shouldPreventDefault(t)&&t.preventDefault()}},_addWheelEventListener:{value:function(){if(this._element){var t="undefined"!=typeof window.onwheel||"undefined"!=typeof window.WheelEvent?"wheel":"mousewheel";this._element.addEventListener(t,this,!1),this._element.addEventListener(t,this,!0)}}},_removeWheelEventListener:{value:function(){if(this._element){var t="undefined"!=typeof window.onwheel||"undefined"!=typeof window.WheelEvent?"wheel":"mousewheel";this._element.removeEventListener(t,this,!1),this._element.removeEventListener(t,this,!0)}}},_start:{value:function(t,e,i,n){this.pointerStartEventPosition={pageX:t,pageY:e,target:i,timeStamp:n},this._pointerX=t,this._pointerY=e,window.PointerEvent?(this._element.addEventListener("pointerdown",this,!1),document.addEventListener("pointermove",this,!0),document.addEventListener("pointerup",this,!1),document.addEventListener("pointercancel",this,!1),this.shouldCancelOnSroll&&document.addEventListener("scroll",this,!0)):window.MSPointerEvent&&window.navigator.msPointerEnabled?(this._element.addEventListener("MSPointerDown",this,!1),document.addEventListener("MSPointerMove",this,!0),document.addEventListener("MSPointerUp",this,!1),document.addEventListener("MSPointerCancel",this,!1),this.shouldCancelOnSroll&&document.addEventListener("scroll",this,!0)):this._observedPointer===this._MOUSE_POINTER?(this._element.addEventListener("mousedown",this,!1),document.addEventListener("mousemove",this,!0),document.addEventListener("mouseup",this,!1),this.shouldCancelOnSroll&&document.addEventListener("scroll",this,!0)):(this._element.addEventListener("touchstart",this,!1),this._element.addEventListener("touchmove",this,!0),this._element.addEventListener("touchend",this,!1),this._element.addEventListener("touchcancel",this,!1)),this.isAnimating&&(this.isAnimating=!1,this._dispatchTranslateEnd()),this._isFirstMove=!0}},_handleStart:{value:function(t){this._claimPointerPolicy=this.eventManager.componentClaimingPointer(this._observedPointer)?this.CLAIM_POINTER_POLICIES.MOVE:this.CLAIM_POINTER_POLICIES.DEFAULT}},_findObservedTouch:{value:function(t){for(var e,i=null,n=0;(e=t[n])&&null===i;n++)e.identifier===this._observedPointer&&(i=e);return i}},_handleMove:{value:function(t,e){var i=this.eventManager,n=this.pointerStartEventPosition;if(e||(e=t),this._isFirstMove){var s=i.componentClaimingPointer(this._observedPointer);if(s){var a=!0;if(this._claimPointerPolicy===this.CLAIM_POINTER_POLICIES.MOVE){var r=this._observedPointer===this._MOUSE_POINTER?this._mouseRadiusThreshold:this._touchRadiusThreshold,o=n.pageX-e.clientX,l=n.pageY-e.clientY;a=Composer.isCoordinateOutsideRadius(o,l,r),a&&(n.pageX=e.clientX,n.pageY=e.clientY,n.target=e.target,n.timeStamp=t.timeStamp,this._pointerX=e.clientX,this._pointerY=e.clientY)}if(!a)return void this._preventDefaultIfNeeded(t)}i.claimPointer(this._observedPointer,this)}i.isPointerClaimedByComponent(this._observedPointer,this)?(this._preventDefaultIfNeeded(t),(this.allowTranslateOuterExtreme||this._shouldMove(t,e.clientX,e.clientY))&&(this._isFirstMove?this._firstMove():this._move(e.clientX,e.clientY))):this._releaseInterest()}},_shouldMove:{value:function(t,e,i){var n,s,a,r,o=this._translateY,l=this._translateX,h=this._minTranslateY,u=this._maxTranslateY,v=this._minTranslateX,d=this._maxTranslateX,_=!0;return"wheel"===t.type||"mousewheel"===t.type?("vertical"!==this._axis&&(a=20*(t.wheelDeltaX||-t.deltaX||0)/120),"horizontal"!==this._axis&&(r=20*(t.wheelDeltaY||-t.deltaY||0)/120),_=!("horizontal"===this._axis&&0===a||"vertical"===this._axis&&0===r||0===a&&0===r)):("vertical"!==this._axis&&(a=-(this._invertXAxis?this._pointerX-e:e-this._pointerX)),"horizontal"!==this._axis&&(r=-(this._invertYAxis?this._pointerY-i:i-this._pointerY))),_&&(r&&(n=this._isNegativeNumber(r),null!==h&&(_=o!==h||o===h&&n),null!==u&&_&&(_=o!==u||o===u&&!n)),a&&(s=this._isNegativeNumber(a),null!==v&&_&&(_=l!==v||l===v&&s),null!==d&&_&&(_=l!==d||l===d&&!s))),_}},_firstMove:{value:function(){this._isFirstMove&&(this._dispatchTranslateStart(this._translateX,this._translateY),this._isFirstMove=!1,this.isMoving=!0)}},_move:{value:function(t,e){var i;this._isSelfUpdate=!0,"vertical"!==this._axis&&(i=this._invertXAxis?this._pointerX-t:t-this._pointerX,this.translateX+=i*this._pointerSpeedMultiplier),"horizontal"!==this._axis&&(i=this._invertYAxis?this._pointerY-e:e-this._pointerY,this.translateY+=i*this._pointerSpeedMultiplier),this._isSelfUpdate=!1,this._pointerX=t,this._pointerY=e,this._shouldDispatchTranslate&&this._dispatchTranslate()}},_end:{value:function(t){this.startTime=Date.now(),this.endX=this.posX=this.startX=this._translateX,this.endY=this.posY=this.startY=this._translateY;var e=t.velocity;this._hasMomentum&&(e.speed>40||this.translateStrideX||this.translateStrideY)?("vertical"!==this._axis?this.momentumX=e.x*this._pointerSpeedMultiplier*(this._invertXAxis?1:-1):this.momentumX=0,"horizontal"!==this._axis?this.momentumY=e.y*this._pointerSpeedMultiplier*(this._invertYAxis?1:-1):this.momentumY=0,this.endX=this.startX-this.momentumX*this.__momentumDuration/2e3,this.endY=this.startY-this.momentumY*this.__momentumDuration/2e3,this.startStrideXTime=null,this.startStrideYTime=null,this.animateMomentum=!0):this.animateMomentum=!1,this.animateMomentum?this._animationInterval():this._isFirstMove||(this.isMoving=!1,this._dispatchTranslateEnd()),this._releaseInterest()}},_cancel:{value:function(t){this.startTime=Date.now(),this.endX=this.posX=this.startX=this._translateX,this.endY=this.posY=this.startY=this._translateY,this.animateMomentum=!1,this._isFirstMove||(this.isMoving=!1,this._dispatchTranslateCancel()),this._releaseInterest()}},_releaseInterest:{value:function(){window.PointerEvent?(this._element.removeEventListener("pointerdown",this,!1),document.removeEventListener("pointermove",this,!0),document.removeEventListener("pointerup",this,!1),document.removeEventListener("pointercancel",this,!1),this.shouldCancelOnSroll&&document.removeEventListener("scroll",this,!0)):window.MSPointerEvent&&window.navigator.msPointerEnabled?(this._element.removeEventListener("MSPointerDown",this,!1),document.removeEventListener("MSPointerMove",this,!0),document.removeEventListener("MSPointerUp",this,!1),document.removeEventListener("MSPointerCancel",this,!1),this.shouldCancelOnSroll&&document.removeEventListener("scroll",this,!0)):this._observedPointer===this._MOUSE_POINTER?(this._element.removeEventListener("mousedown",this,!1),document.removeEventListener("mousemove",this,!0),document.removeEventListener("mouseup",this,!1),this.shouldCancelOnSroll&&document.removeEventListener("scroll",this,!0)):(this._element.removeEventListener("touchstart",this,!1),this._element.removeEventListener("touchmove",this,!0),this._element.removeEventListener("touchend",this,!1),this._element.removeEventListener("touchcancel",this,!1)),this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null,this._isFirstMove=!1,this.isMoving=!1}},_isAxisMovement:{value:function(t){var e,i,n,s,a,r,o,l=t.velocity,h=.7853981633974483,u=2.356194490192345,v=-2.356194490192345,d=-.7853981633974483;if("both"===this.axis)return!0;if(!l||0===l.speed||isNaN(l.speed)?(r=this.pointerStartEventPosition.pageX-t.clientX,o=this.pointerStartEventPosition.pageY-t.clientY,a=Math.atan2(o,r)):a=l.angle,"horizontal"===this.axis){if(n=a<=h&&a>=d,s=a>=u||a<=v,n||s)return!0}else if("vertical"===this.axis&&(e=a<=d&&a>=v,i=a>=h&&a<=u,e||i))return!0;return!1}},_translateEndTimeout:{value:null},_handleWheelTimeout:{value:null},_isNegativeNumber:{value:function(t){return t=+t,isNaN(t)||(t=1/t),t<0}},captureWheel:{value:function(t){this._shouldMove(t)?this.eventManager.isPointerClaimedByComponent(this._WHEEL_POINTER,this)||this.eventManager.claimPointer(this._WHEEL_POINTER,this):this.eventManager.isPointerClaimedByComponent(this._WHEEL_POINTER,this)&&this.eventManager.forfeitPointer(this._WHEEL_POINTER,this)}},handleWheel:{value:function(t){if(this.enabled&&this.eventManager.isPointerClaimedByComponent(this._WHEEL_POINTER,this)){if(this._observedPointer=this._WHEEL_POINTER,this._translateEndTimeout?clearTimeout(this._translateEndTimeout):this._dispatchTranslateStart(),"vertical"!==this.axis&&(this.translateX=this._translateX-20*(t.wheelDeltaX||-t.deltaX||0)/120),"horizontal"!==this.axis&&(this.translateY=this._translateY-20*(t.wheelDeltaY||-t.deltaY||0)/120),this.isMoving=!0,this._dispatchTranslate(),"function"!=typeof this._handleWheelTimeout){var e=function(){this._translateEndTimeout=null,this._dispatchTranslateEnd(),this.isMoving=!1,this.eventManager.isPointerClaimedByComponent(this._WHEEL_POINTER,this)&&this.eventManager.forfeitPointer(this._WHEEL_POINTER,this)};this._handleWheelTimeout=e.bind(this)}this._translateEndTimeout=setTimeout(this._handleWheelTimeout,400),t.preventDefault()}}},_bezierTValue:{value:function(t,e,i,n,s){var a,r,o,l,h=1-3*n+3*e,u=3*n-6*e,v=3*e,d=.5;for(r=0;r<10;r++)l=d*d,a=3*h*l+2*u*d+v,o=1-d,d-=(3*(o*o*d*e+o*l*n)+l*d-t)/a;return l=d*d,o=1-d,3*(o*o*d*i+o*l*s)+l*d}},_dispatchTranslateStart:{value:function(t,e){var i=document.createEvent("CustomEvent");i.initCustomEvent("translateStart",!0,!0,null),i.translateX=t,i.translateY=e,i.scroll=0,i.pointer=this._observedPointer,this.dispatchEvent(i)}},_dispatchTranslateEnd:{value:function(){var t=document.createEvent("CustomEvent");t.initCustomEvent("translateEnd",!0,!0,null),t.translateX=this._translateX,t.translateY=this._translateY,t.scroll=0,t.pointer=this._observedPointer,this.dispatchEvent(t)}},_dispatchTranslateCancel:{value:function(){var t=document.createEvent("CustomEvent");t.initCustomEvent("translateCancel",!0,!0,null),t.translateX=this._translateX,t.translateY=this._translateY,t.scroll=0,t.pointer=this._observedPointer,this.dispatchEvent(t)}},_dispatchTranslate:{value:function(){var t=document.createEvent("CustomEvent");t.initCustomEvent("translate",!0,!0,null),t.translateX=this._translateX,t.translateY=this._translateY,t.scroll=0,t.pointer=this._observedPointer,this.dispatchEvent(t)}},animateBouncingX:{value:!1,enumerable:!1},startTimeBounceX:{value:!1,enumerable:!1},animateBouncingY:{value:!1,enumerable:!1},startTimeBounceY:{value:!1,enumerable:!1},animateMomentum:{value:!1,enumerable:!1},startTime:{value:null,enumerable:!1},startX:{value:null,enumerable:!1},posX:{value:null,enumerable:!1},endX:{value:null,enumerable:!1},startY:{value:null,enumerable:!1},posY:{value:null,enumerable:!1},endY:{value:null,enumerable:!1},translateStrideX:{value:null},translateStrideY:{value:null},translateStrideDuration:{value:330},_animationInterval:{value:function(){var t,e,i,n,s=Date.now(),a=!1;this.animateMomentum&&(t=s-this.startTime,t<this.__momentumDuration?(this.posX=this.startX-(this.momentumX+this.momentumX*(this.__momentumDuration-t)/this.__momentumDuration)*t/1e3/2,this.posY=this.startY-(this.momentumY+this.momentumY*(this.__momentumDuration-t)/this.__momentumDuration)*t/1e3/2,this.translateStrideX&&null===this.startStrideXTime&&(this.__momentumDuration-t<this.translateStrideDuration||Math.abs(this.posX-this.endX)<.75*this.translateStrideX)&&(this.startStrideXTime=s),this.translateStrideY&&null===this.startStrideYTime&&(this.__momentumDuration-t<this.translateStrideDuration||Math.abs(this.posY-this.endY)<.75*this.translateStrideY)&&(this.startStrideYTime=s)):this.animateMomentum=!1),e=Math.round(this.endX/this.translateStrideX),this.startStrideXTime&&s-this.startStrideXTime>0&&(s-this.startStrideXTime<this.translateStrideDuration?(t=this._bezierTValue((s-this.startStrideXTime)/this.translateStrideDuration,.275,0,.275,1),this.posX=this.posX*(1-t)+e*this.translateStrideX*t,a=!0):this.posX=e*this.translateStrideX),e=Math.round(this.endY/this.translateStrideY),this.startStrideYTime&&s-this.startStrideYTime>0&&(s-this.startStrideYTime<this.translateStrideDuration?(t=this._bezierTValue((s-this.startStrideYTime)/this.translateStrideDuration,.275,0,.275,1),this.posY=this.posY*(1-t)+e*this.translateStrideY*t,a=!0):this.posY=e*this.translateStrideY),i=this.posX,n=this.posY,this._isSelfUpdate=!0,this.translateX=i,this.translateY=n,this._shouldDispatchTranslate&&this._dispatchTranslate(),this._isSelfUpdate=!1,this.isAnimating=this.animateMomentum||a,this.isAnimating?this.needsFrame=!0:this._dispatchTranslateEnd()}}});TranslateComposer.prototype.captureMSPointerDown=TranslateComposer.prototype.capturePointerdown,TranslateComposer.prototype.captureMSPointerMove=TranslateComposer.prototype.capturePointermove,TranslateComposer.prototype.handleMSPointerUp=TranslateComposer.prototype.handlePointerup,TranslateComposer.prototype.handleMSPointerCancel=TranslateComposer.prototype.handlePointercancel,TranslateComposer.prototype.handleMousewheel=TranslateComposer.prototype.handleWheel,TranslateComposer.prototype.handleMSPointerDown=TranslateComposer.prototype._handleStart,TranslateComposer.prototype.handlePointerdown=TranslateComposer.prototype._handleStart,TranslateComposer.prototype.handleMousedown=TranslateComposer.prototype._handleStart,TranslateComposer.prototype.handleTouchstart=TranslateComposer.prototype._handleStart,void 0!==Math.sign&&(TranslateComposer.prototype._isNegativeNumber=function(t){return Math.sign(t)===-1});