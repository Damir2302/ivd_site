$(document).ready(function() {

    if($("#map").length) {

        function addYaMaps() {
        
            let yaMap;
            ymaps.ready(function() {

                yaMap = new ymaps.Map("map", {
                    center: [55.765326, 37.627735],
                    zoom: 2,
                    controls: ['zoomControl', 'rulerControl', 'routeButtonControl', 'geolocationControl', 'trafficControl', 'fullscreenControl']
                }, {
                    searchControlProvider: 'yandex#search'
                })

                let myButton = new ymaps.control.Button({
                    data: {
                        // Текст на кнопке.
                        content: 'Проложить маршрут до офиса продаж',
                        // Текст всплывающей подсказки.
                        title: 'Нажмите, чтобы построить маршрут'
                    },
                    options: {
                        selectOnClick: false,
                        maxWidth: 260
                    }
                })

                myButton.events.add('press',function () {
                        let control = yaMap.controls.get('routeButtonControl');
                        // Зададим координаты пункта отправления с помощью геолокации.
                        control.routePanel.geolocate('from');
                        control.routePanel.state.set({
                            type: "auto",
                            to: '55.523631, 37.640434'
                        });
                        // Откроем панель для построения маршрутов.
                        control.state.set('expanded', true);
                    }
                )
                yaMap.controls.add(myButton, {float: "left"})

                let pl1 = new ymaps.Placemark([55.523675, 37.640949],{hintContent: 'Офис продаж', balloonContentBody: 'Офис продаж'}, {
                    iconLayout: 'default#image',
                    iconImageHref: '../img/tree.png',
                    iconImageSize: [50,70],
                    iconImageOffset: [-35,-35],
                    hideIconOnBalloonOpen: false,
                    interactiveZIndex: true,
                    zIndex: 1000000
                })
                let pl2 = new ymaps.Placemark([55.524518, 37.637470],{hintContent: 'Суханово SPA Delux', balloonContentBody: 'Суханово SPA Delux'}, {
                    iconLayout: 'default#image',
                    iconImageHref: '../img/logo2.png',
                    iconImageSize: [120,65],
                    iconImageOffset: [-10,-10],
                    hideIconOnBalloonOpen: false,
                    interactiveZIndex: true,
                    zIndex: 1000000
                })

                let pl3 = new ymaps.Placemark([55.522839, 37.638764])

                balloonLayout = ymaps.templateLayoutFactory.createClass(
                        "<span>P</span>"
                    )

                let multiRoute1 = new ymaps.multiRouter.MultiRoute({   
                    referencePoints: [
                        [55.523454, 37.639375],
                        [55.523675, 37.640949],
                    ], params: {
                    routingMode: "pedestrian"  
                    }
                }, {
                    wayPointStartIconLayout: "default#image",
                    wayPointStartIconImageHref: "img/busstop.png",
                    wayPointStartIconImageSize: [30, 30],
                    wayPointStartIconImageOffset: [-15, -5],
                    boundsAutoApply: false,
                    wayPointFinishVisible: false,
                })
                let multiRoute2 = new ymaps.multiRouter.MultiRoute({   
                    referencePoints: [
                        [55.522839, 37.638764],
                        [55.523675, 37.640949],
                    ], params: {
                    routingMode: "pedestrian"  
                    }
                }, {
                    wayPointStartIconLayout: "default#image",
                    wayPointStartIconImageHref: "img/parking.png",
                    wayPointStartIconImageSize: [30, 30],
                    wayPointStartIconImageOffset: [-15, -5],
                    boundsAutoApply: false,
                    wayPointFinishVisible: false,
                })
                let multiRoute3 = new ymaps.multiRouter.MultiRoute({   
                    referencePoints: [
                        [55.523264, 37.638751],
                        [55.523675, 37.640949],
                    ], params: {
                    routingMode: "pedestrian"  
                    }
                }, {
                    wayPointStartIconLayout: "default#image",
                    wayPointStartIconImageHref: "img/parking.png",
                    wayPointStartIconImageSize: [30, 30],
                    wayPointStartIconImageOffset: [-15, -5],
                    boundsAutoApply: false,
                    wayPointFinishVisible: false,
                })
                yaMap.geoObjects.add(multiRoute1)
                yaMap.geoObjects.add(multiRoute2)
                yaMap.geoObjects.add(multiRoute3)
                yaMap.geoObjects.add(pl1)
                yaMap.geoObjects.add(pl2)
                yaMap.geoObjects.add(pl3)
                yaMap.setBounds(yaMap.geoObjects.getBounds(), {checkZoomRange:true, zoomMargin:20})
                pl3.options.set('visible', false)
                yaMap.setCenter([55.523717, 37.638826])
                ymapsTouchScroll(yaMap, {preventScroll: true, preventTouch: true}) 
            });
            }

        addYaMaps();
    }
})

