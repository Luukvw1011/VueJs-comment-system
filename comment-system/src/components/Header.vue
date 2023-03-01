<template>
    <v-toolbar id="toolbar" density="compact">
        <v-tab class="text-lowercase font-weight-bold ms-10">
            <a href="/">home</a>
        </v-tab>
        <v-divider vertical></v-divider>
        <v-tab class="text-lowercase font-weight-bold">
            <a href="/balie">balie</a>
        </v-tab>
        <v-divider vertical></v-divider>
        <v-tab class="text-lowercase font-weight-bold">
            <a href="/charts">charts</a>
        </v-tab>
        <v-divider vertical></v-divider>
        <v-tab class="text-lowercase font-weight-bold">
            <a href="/forum">forum</a>
        </v-tab>
        <v-divider vertical></v-divider>
        <v-tab class="text-lowercase font-weight-bold">
            <a href="/dev">dev</a>
        </v-tab>
        <v-divider vertical></v-divider>
        <v-tab class="text-lowercase font-weight-bold">
            <a href="/functies">functies</a>
        </v-tab>
        <v-divider vertical></v-divider>

        <v-spacer></v-spacer>

        <v-divider vertical></v-divider>
        <v-tab class="text-lowercase font-weight-bold">
            <a href="#">uitloggen</a>
        </v-tab>
        <v-divider vertical></v-divider>

        <form id="search-form">
            <v-text-field label="zoeken" class="text-white"></v-text-field>
        </form>
    </v-toolbar>
</template>

<style>
    #toolbar {
        background-color: #134781;
        box-shadow: none;
    }

    #toolbar .v-tab {
        font-size: 15px;
    }

    #toolbar .v-tab a{
        color: white;
        text-decoration: none;
    }

    .v-divider {
        color: black;
    }

    #search-form {
        width: 250px;
        margin-top: 15px;
    }
</style>