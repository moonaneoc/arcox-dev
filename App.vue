<template>
    <div id="app">
        <div class="ed">
            <textarea id="editor"></textarea>
            <div id="renderer"></div>
        </div>
        <button @click="handleClick">format</button>
    </div>
</template>

<script>
    import "./base.css";

    let { Editor, Renderer } = require("./arcox");

    export default {
        name: 'App',
        mounted() {
            this.editor = new Editor("#editor");
            this.renderer = new Renderer("#renderer");
            this.editor.bind(this.renderer);
        },
        methods: {
            handleClick() {
                console.log("click");
                this.editor.format("bold");
            }
        }
    }
</script>

<style scoped>
    .ed {
        display: flex;
        width: 100%;
    }

    #editor,
    #renderer {
        width: 600px;
        height: 600px;
        resize: none;
        padding: 16px;
        border: 1px solid #979797;
        overflow: auto;
    }
</style>