// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var RootPath = path.resolve(__dirname, '../app');
var PluginsPath = path.resolve(__dirname, '../app/global/plugins');
var JsPath = path.resolve(__dirname, '../app/global/js');
var StylePath = path.resolve(__dirname, '../app/global/style');
var GlobalPath = path.resolve(__dirname, '../app/global');
module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: {
        index: [
            './build/dev-client',
            path.resolve(__dirname, '../app/index/index.js')
        ],
        login: path.resolve(__dirname, '../app/login/index.js'),
        lock: path.resolve(__dirname, '../app/lockScreen/index.js'),
    },
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, '../output/static'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'mod/vue': 'vue/dist/vue.js',
            'mod/vue-resource': path.resolve(PluginsPath, 'vue-resource.min'),
            'mod/vue-router': path.resolve(PluginsPath, 'vue-router'),
            'mod/jquery': path.resolve(JsPath, 'jquery-vendor.js'),
            'mod/cookie': path.resolve(PluginsPath, 'js.cookie.js'),
            'mod/blockui': path.resolve(PluginsPath, 'jquery.blockui.min.js'),
            'mod/slimscorll': path.resolve(PluginsPath, 'jquery-slimscroll/jquery.slimscroll.js'),
            'mod/bootstrap': path.resolve(PluginsPath, 'bootstrap/js/bootstrap.min.js'),
            'mod/switch': path.resolve(PluginsPath, 'bootstrap-switch/js/bootstrap-switch.js'),
            'mod/validate': path.resolve(PluginsPath, 'jquery-validation/js/jquery.validate.js'),
            'mod/valudate_additional': path.resolve(PluginsPath, 'jquery-validation/js/additional-methods.js'),
            'mod/select2': path.resolve(PluginsPath, 'select2/js/select2.full.js'),
            'mod/backstretch': path.resolve(PluginsPath, 'backstretch/jquery.backstretch.js'),
            'mod／utils': path.resolve(JsPath, 'BlogUtils.js'),
            'mod/iziToast': path.resolve(PluginsPath, 'iziToast/dist/js/iziToast.js'),
            'mod/iziModal': path.resolve(PluginsPath, 'iziModal/js/iziModal.js'),
            'mod/theme': path.resolve(JsPath, 'app.js'),
            'mod/layout': path.resolve(PluginsPath, 'layout/scripts/layout.js'),
            'mod/layout_demo': path.resolve(PluginsPath, 'layout/scripts/demo.js'),
            'mod/sidebar': path.resolve(JsPath, 'quick-sidebar.js'),
            'mod/nav': path.resolve(JsPath, 'quick-nav.js'),
            'mod/multiselect': path.resolve(PluginsPath, 'jquery-multi-select/js/jquery.multi-select.js'),
            'mod/fileinput': path.resolve(PluginsPath, 'bootstrap-fileinput/bootstrap-fileinput.js'),
            'mod/select': path.resolve(PluginsPath, 'bootstrap-select/js/bootstrap-select.js'),
            'mod/pagination': path.resolve(JsPath, 'jquery.pagination.js'),
            'mod/jqueryUI': path.resolve(PluginsPath, 'jquery-ui/jquery-ui.min.js'),
            'mod/dropzone': path.resolve(PluginsPath, 'dropzone/dropzone-amd-module.js'),
            'mod/wizard': path.resolve(PluginsPath, 'bootstrap-wizard/jquery.bootstrap.wizard.js'),
            'mod/datarangepicker': path.resolve(PluginsPath, 'bootstrap-daterangepicker/daterangepicker.js'),
            'mod/moment': path.resolve(PluginsPath, 'moment.min'),
            'mod/maxlength': path.resolve(PluginsPath, 'bootstrap-maxlength/bootstrap-maxlength.js'),
            'mod/taginput': path.resolve(PluginsPath, 'bootstrap-tagsinput/bootstrap-tagsinput.js'),
            'mod/datepicker': path.resolve(PluginsPath, 'bootstrap-datepicker/js/bootstrap-datepicker.min.js'),
            'mod/datepicker_locales': path.resolve(PluginsPath, 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min.js'),
            'mod/sparkline': path.resolve(PluginsPath, 'jquery.sparkline.min.js'),
            'mod/touchspin': path.resolve(PluginsPath, 'bootstrap-touchspin/bootstrap.touchspin.js'),
            'mod/fullcalendar': path.resolve(PluginsPath, 'fullcalendar/fullcalendar.js'),
            'mod/fullcalendar_zh_CN': path.resolve(PluginsPath, 'fullcalendar/lang/zh-cn.js'),
            'mod/minicolors': path.resolve(PluginsPath, 'jquery-minicolors/jquery.minicolors.js'),
            'mod/wysihtml5': path.resolve(PluginsPath, 'bootstrap-wysihtml5/bootstrap-wysihtml5.js'),
            'mod/editable': path.resolve(PluginsPath, 'bootstrap-editable/bootstrap-editable/js/bootstrap-editable.js'),

            'mod/pushlet': path.resolve(JsPath, 'ajax-pushlet-client.js'),

            'style/font_sans': path.resolve(StylePath, 'font_sans.css'),
            'style/font_awesome': path.resolve(PluginsPath, 'font-awesome/css/font-awesome.min.css'),
            'style/line_icon': path.resolve(PluginsPath, 'simple-line-icons/simple-line-icons.min.css'),
            'style/bootstrap': path.resolve(PluginsPath, 'bootstrap/css/bootstrap.css'),
            'style/switch': path.resolve(PluginsPath, 'bootstrap-switch/css/bootstrap-switch.min.css'),
            'style/select': path.resolve(PluginsPath, 'bootstrap-select/css/bootstrap-select.css'),
            'style/select2': path.resolve(PluginsPath, 'select2/css/select2.min.css'),
            'style/select2_bootstrap': path.resolve(PluginsPath, 'select2/css/select2-bootstrap.min.css'),

            'style/component': path.resolve(StylePath, 'components.min.css'),
            'style/plugins': path.resolve(StylePath, 'plugins.min.css'),

            'style/layout': path.resolve(PluginsPath, 'layout/css/layout.min.css'),
            'style/theme': path.resolve(PluginsPath, 'layout/css/themes/grey.min.css'),
            'style/custom': path.resolve(PluginsPath, 'layout/css/custom.min.css'),

            'style/iziToast': path.resolve(PluginsPath, 'iziToast/dist/css/iziToast.css'),
            'style/iziModal': path.resolve(PluginsPath, 'iziModal/css/iziModal.css'),
            'style/multiselect': path.resolve(PluginsPath, 'jquery-multi-select/css/multi-select.css'),
            'style/fileinput': path.resolve(PluginsPath, 'bootstrap-fileinput/bootstrap-fileinput.css'),
            'style/select': path.resolve(PluginsPath, 'bootstrap-select/css/bootstrap-select.css'),
            'style/pagination': path.resolve(StylePath, 'pagination.css'),
            'style/jqueryUI': path.resolve(PluginsPath, 'jquery-ui/jquery-ui.min.css'),
            'style/dropzone': path.resolve(PluginsPath, 'dropzone/dropzone.css'),
            'style/datarangepicker': path.resolve(PluginsPath, 'bootstrap-daterangepicker/daterangepicker.css'),
            'style/taginput': path.resolve(PluginsPath, 'bootstrap-tagsinput/bootstrap-tagsinput.css'),

            'style/login': path.resolve(StylePath, 'login.css'),

            'style/contract_list': path.resolve(StylePath, 'contract_list.css'),
            'style/socicon': path.resolve(PluginsPath, 'socicon/socicon.css'),
            'style/touchspin': path.resolve(PluginsPath, 'bootstrap-touchspin/bootstrap.touchspin.css'),

            'style/fullcalendar': path.resolve(PluginsPath, 'fullcalendar/fullcalendar.css'),
            'style/minicolors': path.resolve(PluginsPath, 'jquery-minicolors/jquery.minicolors.css'),
            'style/wysihtml5': path.resolve(PluginsPath, 'bootstrap-wysihtml5/bootstrap-wysihtml5.js'),
            'style/editable': path.resolve(PluginsPath, 'bootstrap-editable/bootstrap-editable/css/bootstrap-editable.css'),
            'style/main': path.resolve(StylePath, 'main.css'),

            'globalPath': path.resolve(GlobalPath)
        }
    },
    module: {

        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            }
        ]
    },
    babel: {
        presets: ['es2015']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'app/index/index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            inject: true
        })
    ]
}