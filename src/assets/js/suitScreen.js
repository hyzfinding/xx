const suitScreenApi = {
	isMobile:function(){
		let width = document.body.clientWidth;
		if(width >= 900){
			return true;
		}else{
			return false;
		}
	}
}
export default suitScreenApi