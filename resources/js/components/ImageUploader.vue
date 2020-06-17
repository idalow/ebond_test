<template>

    <div>
        <div class="flex mb-2 justify-center items-center ">
            <img class="h-40 w-40 rounded-full object-cover shadow-lg" :src="showimage">
        </div>
        <div class="flex flex-col items-center justify-center">
            <label class="w-10 h-10 flex flex-col items-center justify-center py-1 px-1 bg-color4 rounded-full tracking-wide uppercase cursor-pointer hover:bg-color5">
                <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus text-white"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                <input type='file' name="image" class="hidden" @change="onInputChange"/>
            </label>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'ImageUploader',

        props: [
            'image',
        ],

        data: function () {
            return {
                showimage: this.image
            }
        },

        methods: {

            onInputChange(e) {

                if (!e.target.files[0].type.match('image.*')) {
                    alert('This is not an image!');
                    return;
                }

                this.$emit('update:field', e.target.files[0])
                this.addImage(e);

            },

            addImage(e) {

                const img = new Image(),
                    reader = new FileReader();
                reader.onload = (e) => this.showimage = e.target.result;
                reader.readAsDataURL(e.target.files[0]);

            },

        },
    }
</script>