<template>
    <div class="demo1">
        <header>
            <Header />
        </header>
        <main>
            <Container />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
</template>

<script>
import Header from '@/components/demo1/Header.vue';
import Container from '@/components/demo1/Container.vue';
import Footer from '@/components/demo1/Footer.vue';
export default {
    name: 'LayoutDemo1',
    components: { Header, Footer, Container },
    methods: {

    }
};
</script>

<style lang="less" scoped>
.demo1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;

    header {
        height: 5rem;
    }

    main {
        flex: 1;
    }

    footer {
        height: 10rem;
    }

}
</style>