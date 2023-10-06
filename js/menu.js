/*-----HTML内へ記述する場合は、<script>〜</script>で、囲いましょう*/
$(function() {
    $('.Toggle').click(function() {
        $(this).toggleClass('active');
        $('.menu').toggleClass('open');
    });
});
