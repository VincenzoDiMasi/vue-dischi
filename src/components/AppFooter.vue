<script>
export default {
    name: 'AppFooter',
};
</script>

<template>
    <footer>
        <div class="container">
            <div class="row my-5">
                <div class="col-4">Made whith &hearts; by Gruppo3</div>
                <div class="col-4"></div>
                <div class="col-4">
                    <ul class="d-flex justify-content-between align-items-center list-unstyled ">
                        <li><a href="#"><i class='fa-brands  fa-square-twitter fa-2x'></i></a></li>
                        <li><a href="#"><i class='fa-brands  fa-square-facebook fa-2x'></i></a></li>
                        <li><a href="#"><i class='fa-brands  fa-square-youtube fa-2x'></i></a></li>
                        <li><a href="#"><i class='fa-brands  fa-square-pinterest fa-2x'></i></a></li>

                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped >
footer {
    height: 100px;
    background-color: black;

    color: white
}

footer a {
    text-decoration: none;
    color: white
}

footer a:hover {
    color: red;
}
</style>