<template>
    <div class="nav">
        <ul @click="goRoute($event)">
            <li data-route-name="home">
                <span>home</span>
                <!-- <router-link :to="{ name: 'home' }">Home</router-link> -->
            </li>
            <li data-route-name="demo1">
                <span>demo1</span>
                <!-- <router-link :to="{ name: 'demo1' }">Demo1</router-link> -->
            </li>
            <li data-route-name="wechat">
                <span>WeChat</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'LayoutNav',
    created() {
    },
    watch: {
        $route: function () {
            console.log('当前路由：' + this.$route.name);
        }
    },
    methods: {
        goRoute(e) {
            const el = e.target.closest('li');
            if (!(el && el.dataset.routeName)) return;
            this.$router.push({ name: el.dataset.routeName });
        }
    }
};
</script>

<style lang="less" scoped>
a {
    color: black;
    text-decoration: none;
}


.nav {
    display: inline-block;
    margin-left: 1rem;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.4rem;
    border-radius: .5rem;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, .1);
    box-sizing: border-box;

    ul {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        li {
            list-style: none;
            border-bottom: 1px solid #efefef;
            text-align: center;

            a,
            span {
                display: inline-block;
                padding: .2rem 1rem;
                cursor: pointer;
                user-select: none;

            }

        }

    }
}
</style>