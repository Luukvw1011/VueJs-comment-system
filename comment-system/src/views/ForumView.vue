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
            <tr v-for="post in posts.fetchedData">
                <th>{{post.name}}</th>
                <th>{{post.user}}</th>
                <th>{{post.message}}</th>
                <th>(0)</th>
                <th>{{post.created_at}}</th>
                <th>icon + icon</th>
            </tr>
        </tbody>
    </v-table>

    <v-container class="bg-white py-2 mt-2 mb-6 rounded d-flex justify-space-between">
        <p class="align-self-center">Door op de 'Toevoegen' knop te klikken kunt u een nieuw item aanmaken.</p>
        <v-btn @click="formControll" :class="global.expand ? 'bg-warning':'bg-success'">{{global.buttonText}}</v-btn>
    </v-container>

    <div class="d-flex justify-center">
        <v-fade-transition>
            <v-card v-show="global.expand" width="600">
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
    import {supabase} from '../supabase.js'

    export default {
        setup() {
            getPosts();

            //All fecthed posts from the database.
            const posts = reactive({
                fetchedData: []
            })

            //Global values for multiple use cases.
            const global = reactive({ 
                buttonText: "Toevoegen",
                expand: false,
            });

            //Data from the form after a submit.
            const form = reactive({
                name: '',
                message: '',
                user: 'testUser'
            })

            //Toggle the form element and set standard values to empty strings.
            function formControll () {
                global.expand = !global.expand;
                
                if (global.expand == false) {
                    global.buttonText = "Toevoegen"
                } else {
                    global.buttonText = "Sluiten"
                }

                form.name = ''
                form.message = ''
            }

            //Add post object to the database.
            async function submitPost() {
                try {
                    await supabase.from("posts").insert([
                        {...form}
                    ])
                } catch(error) {
                    if (error instanceof Error) {
                        console.log(error.message)
                    }
                }

                formControll();
                //Temp. Hard Reload.
                window.location.reload();
            }

            //Fetch all posts from the database.
            async function getPosts () {
                try {
                    const postsRef = await supabase.from("posts").select("*");
                    posts.fetchedData = postsRef.data;
                } catch (error) {
                    if (error instanceof Error) {
                        console.log(error.message)
                    }
                }
            } 

            return {
                global,
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
