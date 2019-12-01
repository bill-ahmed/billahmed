/**Return data for each projects gallery
 * index 0 --> ddsblaze
 * index 1 --> spendingtracker
 * index 2 --> motion pong
 */
export function getProjectsGalleryData(){
    return(
        [[{ // DDSBlaze
            type: "image",
            img: require('../assets/images/ddsblaze/ddsblaze_homepage.jpg'),
            title: 'Homepage',
            cols: 2,
        }, {
            type: "image",
            img: require('../assets/images/ddsblaze/ddsblaze_undo_checkin.jpg'),
            title: 'Undo Check In',
            cols: 2,
        }, {
            type: "image",
            img: require('../assets/images/ddsblaze/ddsblaze_send_bulk_message.jpg'),
            title: 'Send Bulk Message',
            cols: 2,
        }], [{

        }], [{  // Motion Pong
            type: "image",
            img: require('../assets/images/motion_pong/ultrasonic_sensor_1.jpg'),
            title: 'Ultrasonic Sensor',
            cols: 1,
        }, {
            type: "image",
            img: require('../assets/images/motion_pong/motion_pong_splashscreen.jpg'),
            title: 'Splash screen',
            cols: 2,
        }, {
            type: "video",
            img: require('../assets/images/motion_pong/motion_pong_gameplay_1_noAudio.mp4'),
            title: 'Gameplay Video',
            cols: 3,
        }, {
            type: "image",
            img: require('../assets/images/motion_pong/ultrasonic_sensor_2.jpg'),
            title: 'Ultrasonic Sensor, Alternate Angle',
            cols: 3,
        }], [{  // Planit project
            type: "image",
            img: require('../assets/images/planit_project/splash_screen.png'),
            title: 'Splash Screen',
            cols: 2,
        },
        {
            type: "image",
            img: require('../assets/images/planit_project/login_screen.jpg'),
            title: 'Login Page',
            cols: 2,
        },
        {
            type: "image",
            img: require('../assets/images/planit_project/itineraries.jpg'),
            title: 'Itineraries Tab',
            cols: 2,
        },
        {
            type: "image",
            img: require('../assets/images/planit_project/events.jpg'),
            title: 'Events in itinerary',
            cols: 2,
        },
        {
            type: "image",
            img: require('../assets/images/planit_project/maps.jpg'),
            title: 'Google Maps Overlay',
            cols: 2,
        },
        {
            type: "image",
            img: require('../assets/images/planit_project/create_itinerary.jpg'),
            title: 'Create Itinerary',
            cols: 2,
        },
        {
            type: "image",
            img: require('../assets/images/planit_project/build_itinerary.jpg'),
            title: 'Build/Upload Itinerary',
            cols: 2,
        },
        
        ]]
    );
}

export function getPortfolioGalleryData(){
    return(
        [{
            type: "image",
            img: require('../assets/portfolio/IMG_0381.JPG'),
            title: 'Clips',
            subtext: 'After a rainy day.',
            cols: 2,
            index: 1
        }, {
            type: "image",
            img: require('../assets/portfolio/IMG_0407.JPG'),
            title: 'Flower - Orange',
            subtext: 'After a rainy day.',
            cols: 4,
            index: 2
        }, {
            type: "image",
            img: require('../assets/portfolio/IMG_3606.JPG'),
            title: 'Flower - Red',
            subtext: 'After a rainy day.',
            cols: 2,
            index: 3
        }, {
            type: "image",
            img: require('../assets/portfolio/IMG_0481.JPG'),
            title: 'Snail in a bush',
            subtext: '',
            cols: 2,
            index: 4
        }, {
            type: "image",
            img: require('../assets/portfolio/IMG_3721.JPG'),
            title: 'Camp fire',
            subtext: 'On a cool summer night.',
            cols: 2,
            index: 5
        }, {
            type: "image",
            img: require('../assets/portfolio/IMG_3245.JPG'),
            title: 'TTC Bus - Long Exposure',
            subtext: 'During a cool rainy night.',
            cols: 4,
            index: 6
        }, {
            type: "image",
            img: require('../assets/portfolio/IMG_3624.JPG'),
            title: 'Flower - Blue',
            subtext: 'Warm summer afternoon.',
            cols: 2,
            index: 7
        }]
    );
}