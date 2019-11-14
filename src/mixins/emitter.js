function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
        const name = child.$options.name;

        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}

export default {
    methods: {
        /**
         * 子级组件向父组件传递事件信息
         *
         * @param {*} componentName 目标父组件名称
         * @param {*} eventName 事件名称
         * @param {*} params 事件参数
         */
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root,
                name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }

            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        /**
         * 父级组件向子孙组件传递事件信息
         *
         * @param {*} componentName 目标子组件名称
         * @param {*} eventName 事件名称
         * @param {*} params 事件参数
         */
        broadcast(componentName, eventName, params) {
            broadcast.call(this, componentName, eventName, params);
        }
    }
};
