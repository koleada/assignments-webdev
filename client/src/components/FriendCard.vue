<template>
    <div class="box">
        <div class="media">
            <div>
            <figure>
                <div class="image is-64x64">
                <img :src="user.profileImageUrl" alt="Profile Image" />
                </div>
            </figure>
            </div>

            
            <router-link :to="`/people/${user.userId}`" style="color: black;">
                <div >
                    <p class="title is-5">{{ user.name }}</p>
                    <p class="subtitle is-6">@{{ user.username }}</p>
                </div>
            </router-link>

            
            <div>
                <button 
                v-if="showFollowButtons"
                class="button"
                :class="follow ? 'is-primary' : 'is-danger'" 
                @click.stop="handleAction"
                >
                {{ follow ? 'Follow' : 'Unfollow' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { type Friend } from '@/models/friends';
    import { type User } from '@/models/users';
    import { ref, defineProps, defineEmits } from 'vue';

    const props = defineProps<{
        user: User, 
        follow: {
            type: Boolean
            default: false
        },
        showFollowButtons: {
            type: Boolean,
            default: true
        }
    }>()

    const user = ref(props.user);

    const emits = defineEmits(["follow", "unfollow"]);

    function handleAction() {
        if (props.follow) {
            emits("follow", props.user);
        } else {
            emits("unfollow", props.user);
        }
    };

    
</script>

<style scoped>
    .box{
        background-color: #8d9195;
        cursor: pointer;
    }
    .media{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>