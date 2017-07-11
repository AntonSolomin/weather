var data;

$(function () {
	$.getJSON("https://api.myjson.com/bins/i8run", onDataReady)
})

function onDataReady(datafromTheServer) {
	data = datafromTheServer;
	printGrid();
	$.each($(".main"), function (key, value) {
		var val = value.innerText;
		switch (val) {
			case "Rain":
				$(value).css({
					'color': 'white',
					'background-image': 'url(http://www.oregonscientificstore.com/images/category/icon/10.jpg)',
					'background-position': 'center'
				});
				break;
			case "Clouds":
				$(value).css({
					'color': 'white',
					'background-image': 'url(https://regmedia.co.uk/2015/05/06/cloud.jpg?x=648&y=348&crop=1)',
					'background-position': 'center'
				});
				break;
			case "Sunny":
				$(value).css({
					'color': 'white',
					'background-image': 'url(http://portugalresident.com/sites/default/files/styles/node-detail/public/field/image/istock_sunny_sky_with_grass_000005407896small.jpg?itok=flbPOoPg)',
					'background-position': 'center'
				});
				break;
			case "Sun":
				$(value).css({
					'color': 'white',
					'background-image': 'url(https://www.universetoday.com/wp-content/uploads/2014/09/sun1.jpg)',
					'background-position': 'center'
				});
				break;
			default:
				$(value).css({
					'color': 'white',
					'background-image': 'url(http://i.dailymail.co.uk/i/pix/2013/03/11/article-2291620-189071B4000005DC-520_306x390.jpg)',
					'background-position': 'center'
				});
		}
	})
}

function printGrid() {
	var output = "";
	for (var i = 0; i < data.list.length; i++) {
		output += Mustache.render($("#template").html(), data.list[i]);
	}
	$("#weatherGrid").html(output);
}
