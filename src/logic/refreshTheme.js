function refreshTheme(){
	const themeData = JSON.parse(localStorage.getItem('theming'))
	if (themeData){
		document.body.classList = Object.values(themeData).reduce(function (last, now){
			if(last.length>0){
				return last+" "+now;
			}
			return now;
		}, "")
	}
}

export default refreshTheme