import VInput from "../components/input/input.vue";
import VContainer from "../components/container/container.vue";
import VButton from "../components/button/button.vue";
import VTable from "../components/table/table.vue";
import VText from "../components/text/text.vue";
import VRadio from "../components/radio/radio.vue";
import VCheckbox from "../components/checkbox/checkbox.vue";
import VProcessor from "../components/processor/processor.vue";
import VTextarea from "../components/textarea/textarea.vue";
import VSelect from "../components/select/select.vue";
import VUpload from "../components/upload/upload.vue";
import VTab from "../components/tab/tab.vue";
import VCalendar from "../components/calendar/calendar.vue";
import VChart from "../components/chart/chart.vue";

let componentMap = new Map([
    ["input", VInput],
    ["button", VButton],
    ["submit", VButton],
    ["container", VContainer],
    ["form", VContainer],
    ["modal", VContainer],
    ["table", VTable],
    ["radio", VRadio],
    ["checkbox", VCheckbox],
    ["processor", VProcessor],
    ["textarea", VTextarea],
    ["select", VSelect],
    ["text", VText],
    ["html", VText],
    ["upload", VUpload],
    ["tab", VTab],
    ["calendar", VCalendar],
    ["pie", VChart],
    ["ring", VChart],
    ["line", VChart],
    ["bar", VChart],
    ["graph", VChart],
    ["chart", VChart]
]);

export default componentMap;
