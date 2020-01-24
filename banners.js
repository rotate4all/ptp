function SetBanners(){
	var randNumber = Math.floor((Math.random() * 17) + 0);
	var banners = [];

	banners[0] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin0.png" /></a>';
	banners[1] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin1.png" /></a>';
	banners[2] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin2.png" /></a>';
	banners[3] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/qysjOQ8.gif" /></a>';
	banners[4] = '<a href="https://freebitco.in/?r=109131" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://cdn.jsdelivr.net/gh/rotate4all/ptp/freebitcoin4.png" /></a>';
	banners[5] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/J5pA0Ml.gif" /></a>';
	banners[6] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/8UIBouq.gif" /></a>';
	banners[7] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/g2uzcOD.gif" /></a>';
	banners[8] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/iVaTzik.gif" /></a>';
	banners[9] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/CQwP1Pg.gif" /></a>';
	banners[10] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/t0qcdLO.gif" /></a>';
	banners[11] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/hKNNXJd.gif" /></a>';
	banners[12] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/0e0M39U.gif" /></a>';
	banners[13] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/CSTihHg.gif" /></a>';
	banners[14] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/DcPfU7y.gif" /></a>';
	banners[15] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/ZmDvYNj.gif" /></a>';
	banners[16] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/wPvu8JG.gif" /></a>';
	banners[17] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/gRlkax0.gif" /></a>';
	banners[18] = '<a href="https://www.stake.com/?c=d326b9ce20" target="_blank"><img title="Earn Free Bitcoin NOW!" alt="freebitco.in" src="https://i.imgur.com/2f93SHr.gif" /></a>';
	
	var currentBanner = banners[randNumber];

	$('.banners').hide().html(currentBanner).fadeIn('slow');
}

$(document).ready(function(){
	SetBanners();
});
