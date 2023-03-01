<template>
    <h1>Forum</h1>

    <p class="font-italic mb-5">Op dit scherm staan alle mogelijke fora met bijbehorende tickets. Door te klikken op een forum naam worden de topics getoond. </p>

    <hr>

    <v-table class="rounded mt-5">
        <thead>
            <tr id="header-row">
                <th>Forum</th>
                <th>Door</th>
                <th>Bericht</th>
                <th>Reacties</th>
                <th>Gestart op</th>
                <th>Aanpassen</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts">
                <th>{{post.name}}</th>
                <th>{{post.user}}</th>
                <th>{{post.message}}</th>
                <th>(0)</th>
                <th></th>
                <th>icon + icon</th>
            </tr>
        </tbody>
    </v-table>

    <v-container class="bg-white py-2 mt-2 mb-6 rounded d-flex justify-space-between">
        <p class="align-self-center">Door op de 'Toevoegen' knop te klikken kunt u een nieuw item aanmaken.</p>
        <v-btn @click="formControll" :class="state.expand ? 'bg-warning':'bg-success'">{{state.buttonText}}</v-btn>
    </v-container>

    <div class="d-flex justify-center">
        <v-fade-transition>
            <v-card v-show="state.expand" width="600">
                <v-card-title class="d-flex justify-space-between">
                    <span>Item Aanmaken</span>
                    <span style="cursor:pointer" @click="formControll"><i class="fa-solid fa-circle-xmark text-error"></i></span>                    
                </v-card-title>

                <v-form @submit.prevent="submitPost" class="mx-4">
                    <v-text-field
                        v-model="form.name"
                        label="Item naam"
                    >
                    </v-text-field>

                    <v-text-field
                        v-model="form.message"
                        label="Bericht"
                    >
                    </v-text-field>

                    <div class="d-flex justify-end mb-2">
                        <v-btn type="submit" color="success">Submit</v-btn>
                    </div>
                </v-form>
            </v-card>
        </v-fade-transition>
    </div>
</template>

<script>
    import {reactive} from 'vue';
    import { useFirestore, useCollection } from 'vuefire';
    import { collection } from 'firebase/firestore'

    export default {
        setup() {
            const db = useFirestore();
            const posts = useCollection(collection(db, 'posts'));

            const state = reactive({ 
                forumTitle: "vaatwasser",
                buttonText: "Toevoegen",
                expand: false,
            });

            const form = reactive({
                name: '',
                message: '',
                user: 'testUser'
            })

            function formControll () {
                state.expand = !state.expand;
                
                if (state.expand == false) {
                    state.buttonText = "Toevoegen"
                } else {
                    state.buttonText = "Sluiten"
                }

                form.name = ''
                form.message = ''
            }

            function submitPost() {

                formControll();
            }

            return {
                state,
                form,
                posts,
                submitPost,
                formControll,
            }
        }
    }
</script>

<style>
    #header-row {
        background-color:  #134781;
    }

    #header-row > th{
        color: white;
    }
</style>
