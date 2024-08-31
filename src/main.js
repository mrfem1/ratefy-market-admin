import './assets/main.css';

import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
// import 'primevue/resources/themes/lara-light-green/theme.css'
import Tailwind from 'primevue/passthrough/tailwind'
import 'primeicons/primeicons.css'
import App from './App.vue'
import router from './router'

import AutoComplete from 'primevue/autocomplete';
import Calendar from 'primevue/calendar';
import CascadeSelect from 'primevue/cascadeselect';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import TabMenu from 'primevue/tabmenu';
import SpeedDial from 'primevue/speeddial';
import Password from 'primevue/password';
import SplitButton from 'primevue/splitbutton';
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row'; 
import MegaMenu from 'primevue/megamenu';
import Fieldset from 'primevue/fieldset';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Dropdown from 'primevue/dropdown';
import Rating from 'primevue/rating';
import Tag from 'primevue/tag';
import FileUpload from 'primevue/fileupload';
import Panel from 'primevue/panel';
import ProgressSpinner from 'primevue/progressspinner';
import Listbox from 'primevue/listbox';
import Skeleton from 'primevue/skeleton';
import ScrollPanel from 'primevue/scrollpanel';
import './assets/global.css';

const app = createApp(App)
app.use(PrimeVue, {unstyled:false,  pt: Tailwind})
app.component('DataViewLayoutOptions', DataViewLayoutOptions)
app.component('AutoComplete',  AutoComplete)
app.component('Calendar', Calendar)
app.component('CascadeSelect', CascadeSelect)
app.component('Checkbox', Checkbox)
app.component('Button', Button)
app.component('SpeedDial', SpeedDial)
app.component('SplitButton', SplitButton)
app.component('Menubar', Menubar)
app.component('InputText', InputText)
app.component('TabMenu', TabMenu)
app.component('Password', Password)
app.component('Card', Card)
app.component('Divider', Divider)
app.component('Toast', Toast)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('MegaMenu', MegaMenu)
app.component('Fieldset', Fieldset)
app.component('InputGroup', InputGroup)
app.component('InputGroupAddon', InputGroupAddon)
app.component('Dropdown', Dropdown)
app.component('Rating', Rating)
app.component('Tag', Tag)
app.component('FileUpload', FileUpload)
app.component('Panel', Panel)
app.component('ProgressSpinner', ProgressSpinner)
app.component('Listbox', Listbox)
app.component('Skeleton', Skeleton)
app.component('ScrollPanel ', ScrollPanel )
app.use(createPinia())
app.use(router)
app.use(ToastService)
app.mount('#app')
