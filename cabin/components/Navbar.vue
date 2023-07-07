<template>
    <ClientOnly>
        <div class="navbar">
            <h1 id="title">Brayden Hill [Vespertine]</h1>
            <div class="links">

                <font-awesome-icon class="icon" icon="fa-solid fa-code" size="xl"/>

                <font-awesome-icon class="icon" 
                @mouseover="hovered('pen-to-square')" 
                @mouseleave="clearHover()" 
                :fade="'pen-to-square' == hoveredString"
                icon="pen-to-square" 
                size="xl"/> 

            </div>
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped>
@import url("~/assets/css/navbar.scss");
</style>

<script setup lang="ts">
let hoveredString: string = "";

function hovered(iconString: string){
    hoveredString = iconString;
    console.log(`Changed to ${hoveredString}`);
}

function checkHover(string){
    console.log(string);
    return false;
}

function clearHover(){
    hoveredString = "";
}
</script>

