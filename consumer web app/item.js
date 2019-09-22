
$(function () {
    var user = null;
    user = {};

    //https://vuejsexamples.com/simple-lightbox-component-for-vue-applications/
    Vue.use(Lightbox);
    var images = [
        { 'name': 'dummy.jpg', 'alt': 'The Dolomites', 'filter': 'nature' },
        { 'name': 'logo only.png', 'alt': 'It is a bird', 'filter': 'animals' }
    ];

    var indexApp = new Vue({
        el: "#indexApp",
        data: {
            user: user,
            images: images,
            thumbnailDir: "./img"
        },
        methods: {

        }
    });
});