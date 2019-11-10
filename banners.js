function SetBanners(){
	var randNumber = Math.floor((Math.random() * 7) + 0);
	var banners = [];

	banners[0] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin0.png" /></a>';
	banners[1] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin1.png" /></a>';
	banners[2] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin2.png" /></a>';
	banners[3] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin3.png" /></a>';
	banners[4] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin4.png" /></a>';
	banners[5] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin5.png" /></a>';
	banners[6] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin6.png" /></a>';
	
	var currentBanner = banners[randNumber];

	$('.banners').hide().html(currentBanner).fadeIn('slow');
}

$(document).ready(function(){
	SetBanners();
});
