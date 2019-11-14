<script>
import WeComponents from '../../../../src/';  // 引入组件库

let page = new WeComponents();

export default {
    data() {
        return {
            // 初始化组件库
            page: new WeComponents(this, pageFields)
        };
    }
};
</script>
