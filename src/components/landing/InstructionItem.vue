<template>
    <div class=" big-padding-size-col"
         :class="[ normal  + 'col']">
        <img :src="icon" alt="" class="instruction__icon">
        <span class="instruction__title">{{title}}</span>
        <p class="instruction__text">
            {{descFirstLine}} <br class="mobile-only">{{descSecondLine}}
        </p>
    </div>
</template>

<script>
export default {
    name: 'instruction-item',
    props: {
        title: String,
        descFirstLine: String,
        descSecondLine: String,
        icon: String,
        normal: {
            type: String,
            default: ''
        }
        
    }
}
</script>