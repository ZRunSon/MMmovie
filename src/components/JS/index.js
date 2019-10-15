import Vue from 'vue';
import MessageBox from './MessageBox';

export var messageBox = (function () {
    var defaults = {   //默认值
        title : '',
        content : '',
        cancel : '',
        ok : '',
        handleCancel : null,
        handleOk : null
    };

    var MyComponent = Vue.extend(MessageBox);

    //返回调用弹窗时的方法
    return function (opts) {   //opts：配置参数

        for(var attr in opts){
            defaults[attr] = opts[attr];
        }

        var vm = new MyComponent({
            el : document.createElement('div'),
            data : {
                title : defaults.title,
                content : defaults.content,
                cancel : defaults.cancel,
                ok : defaults.ok
            },
            methods : {
                //弹窗的取消和确定方法，但不管点击谁弹窗都要消失
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    //删除弹窗
                    document.body.removeChild(vm.$el);
                },
                handleOk(){
                    defaults.handleOk && defaults.handleOk.call(this);
                    //删除弹窗
                    document.body.removeChild(vm.$el);
                }
            }
        });

        //添加弹窗
        document.body.appendChild(vm.$el);
    };
})();
