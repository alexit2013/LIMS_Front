<template>
    <div class="page-content">
        <!-- BEGIN PAGE HEADER-->
        <!-- BEGIN PAGE BAR -->
        <div class="page-bar">
            <ul class="page-breadcrumb">
                <li>
                    <a href="index.html">Home</a>
                    <i class="fa fa-circle"></i>
                </li>
                <li>
                    <span>系统消息</span>
                </li>
            </ul>
        </div>
        <h1 class="page-title"> 系统消息
            <small> / 403</small>
        </h1>
        <div class="row">
            <div class="col-md-12 page-404">
                <div class="number font-red"> 403</div>
                <div class="details">
                    <h1>禁止访问</h1>
                    <p> 您可能尚未登录或无权访问当前页。
                    </p>
                    <p>
                        <a href="/login.html" class="btn red btn-outline">点此登录</a> 或
                        <a href="/login.html" class="btn  green btn-outline">联系我们</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    /* Cubic Bezier Transition */
    /***
    Error Pages
    ***/
    /* 404 page option #1 */
    .page-404 {
        text-align: center;
    }

    .page-404 .number {
        /*position: relative;*/
        /*top: 35px;*/
        display: inline-block;
        letter-spacing: -10px;
        margin-top: 0px;
        margin-bottom: 10px;
        line-height: 128px;
        font-size: 128px;
        font-weight: 300;
        color: #7bbbd6;
        text-align: right;
    }

    .page-404 .details {
        margin-left: 40px;
        display: inline-block;
        padding-top: 0px;
        text-align: left;
    }

    /* 500 page option #1 */
    .page-500 {
        text-align: center;
    }

    .page-500 .number {
        display: inline-block;
        letter-spacing: -10px;
        line-height: 128px;
        font-size: 128px;
        font-weight: 300;
        color: #ec8c8c;
        text-align: right;
    }

    .page-500 .details {
        margin-left: 40px;
        display: inline-block;
        text-align: center;
    }

    /* 404 page option #2*/
    .page-404-full-page {
        overflow-x: hidden;
        padding: 20px;
        margin-bottom: 20px;
        background-color: #fafafa !important;
    }

    .page-404-full-page .details input {
        background-color: #ffffff;
    }

    .page-404-full-page .page-404 {
        margin-top: 100px;
    }

    /* 500 page option #2*/
    .page-500-full-page {
        overflow-x: hidden;
        padding: 20px;
        background-color: #fafafa !important;
    }

    .page-500-full-page .details input {
        background-color: #ffffff;
    }

    .page-500-full-page .page-500 {
        margin-top: 100px;
    }

    /* 404 page option #3*/
    .page-404-3 {
        background: #000 !important;
    }

    .page-404-3 .page-inner img {
        right: 0;
        bottom: 0;
        z-index: -1;
        position: absolute;
    }

    .page-404-3 .error-404 {
        color: #fff;
        text-align: left;
        padding: 70px 20px 0;
    }

    .page-404-3 h1 {
        color: #fff;
        font-size: 130px;
        line-height: 160px;
    }

    .page-404-3 h2 {
        color: #fff;
        font-size: 30px;
        margin-bottom: 30px;
    }

    .page-404-3 p {
        color: #fff;
        font-size: 16px;
    }

    @media (max-width: 480px) {
        .page-404 .number,
        .page-500 .number,
        .page-404 .details,
        .page-500 .details {
            text-align: center;
            margin-left: 0px;
        }

        .page-404-full-page .page-404 {
            margin-top: 30px;
        }

        .page-404-3 .error-404 {
            text-align: left;
            padding-top: 10px;
        }

        .page-404-3 .page-inner img {
            right: 0;
            bottom: 0;
            z-index: -1;
            position: fixed;
        }
    }


</style>
<script>
    module.exports = {
        mounted(){
            handleSidebarAndContentHeight()
        }
    }

</script>