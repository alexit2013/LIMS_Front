<template>
    <div>
        <h1 class="page-title"> 监测项目信息列表
            <small>／Project</small>
        </h1>
        <div class="row">
            <div class="col-md-12">
                <!-- BEGIN BORDERED TABLE PORTLET-->
                <div class="portlet light portlet-fit bordered">
                    <div class="portlet-title">
                        <div class="caption">
                            <div class="clearfix">
                                <a href="javascript:;" @click="create" class="btn btn-sm green"> 创 建
                                    <i class="fa fa-plus"></i>
                                </a>
                                <a href="javascript:;" class="btn btn-sm btn-info" @click="selectAll"> 全 选
                                    <i class="fa fa-check-square-o"></i>
                                </a>
                                <a href="javascript:;" @click="removeAll" class="btn btn-sm red"> 删 除
                                    <i class="fa fa-trash-o"></i>
                                </a>
                                <a href="javascript:;" @click="total" class="btn btn-sm default"> 全 部
                                    <i class="fa fa-list"></i>
                                </a>
                            </div>
                        </div>
                        <div class="actions">
                            <div class="input-icon right">
                                <i class="fa fa-search"></i>
                                <input type="text" class="form-control" placeholder="搜索..."
                                       @keyup.enter="search($event)">
                            </div>
                        </div>
                        <div class="actions" style="min-width: 200px;margin-right: 10px;">
                            <select class="form-control" @change="findByDepartment($event)">
                                <option value>未选择</option>
                                <template v-for="item in departmentList">
                                    <option :value="item.id">{{item.name}}</option>
                                </template>
                            </select>
                        </div>
                        <div class="actions" style="min-width: 200px;margin-right: 10px;">
                            <select class="form-control" @change="findByElement($event)">
                                <option value>未选择</option>
                                <template v-for="item in elementList">
                                    <option :value="item.id">{{item.name}}</option>
                                </template>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div class="table-scrollable table-scrollable-borderless">
                            <table class="table table-hover table-light">
                                <thead>
                                <tr class="uppercase">
                                    <th> 选择</th>
                                    <th> 编号</th>
                                    <th> 项目名称</th>
                                    <th> 所属要素</th>
                                    <th> 主管部门</th>
                                    <th> 操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="(item,index) in projectList">
                                    <tr>
                                        <td class="text-center">
                                            <label class="mt-checkbox mt-checkbox-outline">
                                                <input type="checkbox" :value="item.id" name="select"
                                                       v-model="selected">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td class="text-center"> {{index+1}}</td>
                                        <td class="text-center"> {{item.name}}</td>
                                        <td class="text-center"> <a href="javascript:;" @click="showSameElement(item.element.id)">{{item.element.name}}</a></td>
                                        <td class="text-center"> <a href="javascript:;" @click="showSameDepartment(item.department.id)">{{item.department.name}}</a></td>
                                        <td class="text-center">
                                            <button type="button" class="btn btn-sm blue btn-outline"
                                                    @click="edit(item)">修 改
                                            </button>
                                            <button type="button" class="btn btn-sm red btn-outline"
                                                    @click="remove(item.id)">删 除
                                            </button>
                                        </td>
                                    </tr>
                                </template>
                                </tbody>
                            </table>
                            <!-- Pagination -->
                            <div class="pagination pull-right">
                                <div class="M-box front pull-right" style="margin-top:10px; "></div>
                            </div>
                            <!-- End Pagination -->
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                <!-- END BORDERED TABLE PORTLET-->
            </div>

        </div>
</template>

<script type="es6">
    module.exports = {
        data(){
            return {
                departmentList: [],
                elementList: [],
                projectList: [],
                currentPage: 1,
                condition: "",
                selected: []
            }
        },
        mounted(){
            var me = this;
            me.getData();
            me.fetchDepartment();
            me.fetchElement();
        },
        methods: {
            fetchData (pageNum, rowCount) {
                var me = this;
                this.$http.get('/api/project/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: pageNum,
                        condition: this.condition
                    }
                }).then(response => {
                        var data = response.data;

                        me.projectList = data.results;
                    },
                    response => {
                        serverErrorInfo(response);
                    }
                );
            },
            fetchDepartment(){
                var me = this;
                this.$http.get('/api/department/total').then(response => {
                        var data = response.data;
                        me.departmentList = data.results;
                    }, response => {
                        serverErrorInfo(response);
                    }
                );
            },
            fetchElement(){
                var me = this;
                this.$http.get("/api/element/total").then(response => {
                    var data = response.data;
                    me.elementList = data.results;
                }, response => {
                    serverErrorInfo(response);
                });
            },
            //渲染页码
            fetchPages (rowCount) {
                var me = this;
                this.$http.get('/api/project/list', {
                    params: {
                        rowCount: rowCount,
                        currentPage: 1,
                        condition: me.condition
                    }
                }).then(response => {
                        var data = response.data;
                        jQuery(".M-box").pagination({
                            pageCount: data.totalPage || 1,
                            coping: true,
                            homePage: '首页',
                            endPage: '末页',
                            prevContent: '上页',
                            nextContent: '下页',
                            callback: function (data) {
                                me.fetchData(data.getCurrent(), rowCount, me.condition);
                                me.currentPage = data.getCurrent();
                            }
                        });
                    }, response => {
                        serverErrorInfo(response);
                    }
                )
                ;
            },
            search(e){
                var me = this;
                var value = e.target.value;
                me.currentPag = 1;
                me.condition = value ? "name=" + encodeURI(value) : "";
                me.getData();
            },
            create(){
                router.push("/project/create");
            },
            remove(id){
                var me = this;
                confirm({
                    content: "是否删除当前监测项目？",
                    success: function () {
                        me.$http.get("/api/project/delete", {
                            params: {
                                id: id
                            }
                        }).then(response => {
                                var data = response.data;
                                codeState(data.code, {
                                    200: function () {
                                        alert("监测项目删除成功！");
                                        me.getData();
                                    }
                                })
                            }, response => {
                                serverErrorInfo(response);
                            }
                        );
                    }
                })
            },
            edit(item){
                var me = this;
                router.push("/project/change?id=" + item.id);
            },
            getData(){
                var me = this;
                me.fetchData(me.currentPage, rowCount);
                me.fetchPages(rowCount);
            },
            removeAll(){
                var me = this;
                if (me.selected.length == 0) {
                    error("至少需要选择一个监测项目");
                    return;
                }
                confirm({
                    content: "是否删除当前选中监测项目？",
                    success: function () {
                        me.$http.get("/api/project/deleteAll", {
                            params: {
                                selected: me.selected
                            }
                        }).then(response => {
                                var data = response.data;
                                codeState(data.code, {
                                    200: function () {
                                        alert("监测项目删除成功！");
                                        me.getData();
                                        closeConfirm();
                                    }
                                });
                            },
                            response => {
                                serverErrorInfo(response);
                            }
                        );
                    }
                });
            },
            selectAll(){
                var me = this;
                me.selected = [];
                me.elementList.forEach(function (item, index) {
                    me.selected.push(item.id);
                })
            },
            findByDepartment(e){
                var me = this;
                var id = e.target.value;
                if (id) {
                    me.condition = "department_id=" + id;
                    me.currentPage = 1;
                    me.getData();
                } else {
                    me.total();
                }
            },
            findByElement(e){
                var me = this;
                var id = e.target.value;
                if (id) {
                    me.condition = "element_id=" + id;
                    me.currentPage = 1;
                    me.getData();
                } else {
                    me.total();
                }
            },
            showSameDepartment(id){
                var me = this;
                if (id) {
                    me.condition = "department_id=" + id;
                    me.currentPage = 1;
                    me.getData();
                } else {
                    me.total();
                }
            },
            showSameElement(id){
                var me = this;
                if (id) {
                    me.condition = "element_id=" + id;
                    me.currentPage = 1;
                    me.getData();
                } else {
                    me.total();
                }
            },
            total(){
                var me = this;
                me.condition = "";
                me.currentPage = 1;
                me.getData();
            }
        }
    }
</script>
