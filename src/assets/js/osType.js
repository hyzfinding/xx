const osType = {
	isMac:function(){
		// console.log(navigator.userAgent.indexOf('Mac'));
		// console.log(navigator.userAgent.indexOf('Chrome'));
		console.log(navigator.userAgent);
		//console.log(navigator.mimeTypes['application/x-shockwave-flash']);
		if( navigator.userAgent.indexOf('Mac') >=0 && navigator.userAgent.indexOf('Chrome') >= 0){
           return true;
           //console.log('a');
        }else{
           return false;
        }
	}
}
export default osType;