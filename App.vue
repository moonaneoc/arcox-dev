<template>
    <div id="app">
        <div class="ed">
            <textarea id="editor"></textarea>
            <div id="renderer" class="arcox-renderer"></div>
        </div>
        <button @click="handleClick">format</button>
        <button @click="bind">bind</button>
        <button @click="unbind">unbind</button>
        <ins>inserted</ins>
        <mark>inserted</mark>
    </div>
</template>

<script>
    import "./base.css";
    import "./arcox/css/arcox.css"
    import './arcox/css/highlight.css'

    let { Editor, Renderer } = require("./arcox");

    export default {
        name: 'App',
        mounted() {
            this.editor = new Editor("#editor");
            this.renderer = new Renderer({
                el: "#renderer",
                lang: "js"
            });
            this.editor.bind(this.renderer);
            this.editor.setContent(`
\`\`\`
function(){
    var a=2;
}
\`\`\``);
        },
        methods: {
            handleClick() {
                if (!this.editor.renderer) this.editor.bind(this.renderer);
                else this.editor.unbind();
            },
            bind() {
                this.renderer.bind(this.editor);
            },
            unbind() {
                this.renderer.unbind(this.editor);
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