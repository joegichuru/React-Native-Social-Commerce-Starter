export default [
    {
        _id: 10,
        text: 'This is a quick reply. Do you love addidas shoes?',
        createdAt: new Date(),
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: true,
            values: [
                {
                    title: '😋 Yes',
                    value: 'yes',
                },
                {
                    title: '📷 Yes, take me to store!',
                    value: 'yes_picture',
                },
                {
                    title: '😞 Nope. What?',
                    value: 'no',
                },
            ],
        },
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 8,
        text: 'My message',
        createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
        // You can also add a video prop:
        video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        // Any additional custom parameters are passed through
    },
    {
        _id: 7,
        text: '#awesome',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Developer',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 6,
        text: 'Paris',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
        },
        image:
            'https://placeimg.com/140/140/any',
        sent: true,
        received: true,
    },
    {
        _id: 5,
        text: 'Send me a picture!',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Developer',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 4,
        text: 'here',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
        },
        sent: true,
        received: false,
        location: {
            latitude: 48.864601,
            longitude: 2.398704,
        },
    },
    {
        _id: 3,
        text: 'Where are you?',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Developer',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },
    {
        _id: 2,
        text: 'Yes, and I use #GiftedChat!',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
        },
        sent: true,
        received: true,
    },
    {
        _id: 1,
        text: 'Are you building a chat app?',
        createdAt: new Date(),
        user: {
            _id: 1,
            name: 'Developer',
            avatar: 'https://placeimg.com/140/140/any',
        },
    },

    // {
    //     _id: 1,
    //     text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
    //     createdAt: new Date(),
    //     quickReplies: {
    //         type: 'radio', // or 'checkbox',
    //         keepIt: true,
    //         values: [
    //             {
    //                 title: '😋 Yes',
    //                 value: 'yes',
    //             },
    //             {
    //                 title: '📷 Yes, let me show you with a picture!',
    //                 value: 'yes_picture',
    //             },
    //             {
    //                 title: '😞 Nope. What?',
    //                 value: 'no',
    //             },
    //         ],
    //     },
    //     user: {
    //         _id: 2,
    //         name: 'React Native',
    //     },
    // },
    // {
    //     _id: 2,
    //     text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
    //     createdAt: new Date(),
    //     quickReplies: {
    //         type: 'checkbox', // or 'checkbox',
    //         values: [
    //             {
    //                 title: 'Yes',
    //                 value: 'yes',
    //             },
    //             {
    //                 title: 'Yes, let me show you with a picture!',
    //                 value: 'yes_picture',
    //             },
    //             {
    //                 title: 'Nope. What?',
    //                 value: 'no',
    //             },
    //         ],
    //     },
    //     user: {
    //         _id: 2,
    //         name: 'React Native',
    //     },
    // },
    {
        _id: 9,
        text: 'You are officially on social commerce.',
        createdAt: new Date(),
        system: true,
    },
];
