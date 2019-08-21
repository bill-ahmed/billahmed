/**Return data for each projects gallery
 * index 0 --> ddsblaze
 * index 1 --> spendingtracker
 * index 2 --> motion pong
 */
export function getProjectsGalleryData(){
    return(
        [[{
            type: "image",
            img: require('../assets/images/ddsblaze_homepage.jpg'),
            title: 'DDSBlaze Homepage',
            cols: 1,
        }, {
            type: "image",
            img: require('../assets/images/ddsblaze_undo_checkin.jpg'),
            title: 'DDSBlaze Undo Check In',
            cols: 1,
        }], [{

        }], [{
            type: "image",
            img: require('../assets/images/ultrasonic_sensor_1.jpg'),
            title: 'Ultrasonic Sensor',
            cols: 1,
        }, {
            type: "image",
            img: require('../assets/images/motion_pong_splashscreen.jpg'),
            title: 'Splash screen',
            cols: 2,
        }, {
            type: "video",
            img: require('../assets/images/motion_pong_gameplay_1_noAudio.mp4'),
            title: 'Gameplay Video',
            cols: 3,
        }, {
            type: "image",
            img: require('../assets/images/ultrasonic_sensor_2.jpg'),
            title: 'Ultrasonic Sensor, Alternate Angle',
            cols: 3,
        }]]
    );
}

export function getPortfolioGalleryData(){
    return(
        [{
            type: "image",
            img: require('../assets/portfolio/IMG_0381.JPG'),
            title: 'Clip',
            cols: 2,
        }, {
            type: "image",
            img: require('../assets/portfolio/IMG_0407.JPG'),
            title: 'Flower - Orange',
            cols: 4,
        }, {
            type: "image",
            img: require('../assets/portfolio/IMG_3606.JPG'),
            title: 'Flower - Red',
            cols: 2,
        }, {
            type: "image",
            img: require('../assets/portfolio/IMG_0481.JPG'),
            title: 'Snail in a bush',
            cols: 2,
        }, {
            type: "image",
            img: require('../assets/portfolio/IMG_3721.JPG'),
            title: 'Camp fire',
            cols: 2,
        }, {
            type: "image",
            img: require('../assets/portfolio/IMG_3245.JPG'),
            title: 'TTC Bus - Long Exposure',
            cols: 4,
        }, {
            type: "image",
            img: require('../assets/portfolio/IMG_3624.JPG'),
            title: 'Flower - Blue',
            cols: 2,
        }]
    );
}