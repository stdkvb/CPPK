const takeControlYandexMap = () => {
	if (document.getElementById('yandex-map') !== null) {
		function init() {
			let map = new ymaps.Map('yandex-map', {
				center: [54.723044, 55.950624],
				zoom: 18
			});
			let placemark = new ymaps.Placemark([54.723044, 55.950624], {}, {
				iconLayout: 'default#image',
				// iconImageHref: './files/icons/map-mark.svg',
				iconImageSize: [35, 45],
				iconImageOffset: [-19, -44]
			});
			map.geoObjects.add(placemark);
		}
		ymaps.ready(init);
	}
};

export default takeControlYandexMap;
