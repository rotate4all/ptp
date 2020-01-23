function SetBanners(){
	var randNumber = Math.floor((Math.random() * 7) + 0);
	var banners = [];

	banners[0] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin0.png" /></a>';
	banners[1] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin1.png" /></a>';
	banners[2] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin2.png" /></a>';
	banners[3] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/qysjOQ8.gif" /></a>';
	banners[4] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin4.png" /></a>';
	banners[5] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/J5pA0Ml.gif" /></a>';
	banners[6] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/8UIBouq.gif" /></a>';
	
	var currentBanner = banners[randNumber];

	$('.banners').hide().html(currentBanner).fadeIn('slow');
}

$(document).ready(function(){
	SetBanners();
});
