/**Return data for each projects gallery
 * index 0 --> ddsblaze
 * index 1 --> spendingtracker
 * index 2 --> motion pong
 */
export default function GalleryData(){
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
        }, {
            type: "image",
            img: require('../assets/images/ddsblaze_send_bulk_message.jpg'),
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