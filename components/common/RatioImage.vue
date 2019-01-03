<template>
    <div class="ratio-image">
        <div class="ratio-image__img" :style="imageStyles">
            <div class="ratio-image__spacer" :style="spacerStyles"></div>
            <div class="ratio-image__loader" :style="{opacity: (state === 'waiting' || state === 'loading') ? 1 : 0 }">
                <slot><small>Loading..</small></slot>
            </div>
        </div>
    </div>

</template>

<script>

import imagesLoaded from 'imagesloaded';

export default {
    components: {},
    props: {
        src: { type: String, default: null },
        fallbackSrc: { type: String, default: null },
        ratio: { type: String, default: "1/1" },
        minWidth: { type: String, default: "10px" },
        lazyLoad: { type: Boolean, default: false }
    },

    data() {
        return {
            internalSrc: null,
            state: 'waiting', // waiting, loading, loaded
            imageStyles: { minWidth: this.minWidth }
        }
    },

    computed: {
        /**
             * Calculates padding for aspect ratio
             */
        spacerStyles() {
            return { paddingTop: eval(this.ratio.split("/").reverse().join("/")) * 100 + "%" }
        },
    },

    mounted() {
        this.init()
    },

    methods: {
        init () {
            if(true === this.lazyLoad) {
                return this.$nextTick(() => this.lazyLoadHandler())
            }

            this.state = 'loading';
        },
        /**
             * If lazy load prop is true then we check if element is in viewport
             * and we set state to load image, if its not then we set a listener
             * to check element on scroll
             */
        lazyLoadHandler() {
            if(this.isVisible(this.$el)) {
                this.state = 'loading';
                document.removeEventListener('scroll', this.lazyLoadHandler)
            } else {
                document.addEventListener('scroll', this.lazyLoadHandler)
            }
        },

        /**
             * Checks if element is in viewport
             *
             * @param elm
             * @returns {boolean}
             */
        isVisible(elm) {
            var rect = elm.getBoundingClientRect();
            var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
        },

        /**
             * Set the image source
             */
        setImage(img = null) {
            this.internalSrc = img || this.src || this.fallbackSrc;
            this.imageStyles.backgroundImage = `url('${this.internalSrc}')`
        },

        /**
             * Initialize image loaded plugin
             */
        initImageLoaded() {
            imagesLoaded(this.$el, { background:".ratio-image__img" })
                .on('always', instance => this.state = 'loaded')
            //.on('done', instance => {})
                .on('fail', instance => this.setImage(this.fallbackSrc))
            //.on('progress', (instance, image) => {})
        },

    },

    watch: {
        /**
             * Watch the state, if its set to loading then we
             * set the image src and run imageloaded
             */
        state(newVal, oldVal) {
            if (newVal === 'loading') {
                this.setImage();
                this.$nextTick(() => this.initImageLoaded())
            }
        },

        /**
             * if src is changed then we reset the component
             * @param newVal
             * @param oldVal
             */
        src(newVal, oldVal) {
            if (newVal !== oldVal) {
                document.removeEventListener('scroll', this.lazyLoadHandler);
                this.state = 'waiting'
                this.init();
            }
        }
    },

    beforeDestroy() {
        document.removeEventListener('scroll', this.lazyLoadHandler)
    }
}
</script>
<style lang="scss" scoped>
    .ratio-image {
        &__img {
            position: relative;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
        }
        &__loader {
            transition: all 250ms ease-in-out;
            background-color: white;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
    }
</style>
