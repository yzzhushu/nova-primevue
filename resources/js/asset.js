import PrimeVue from "primevue/config";
import Listbox from "primevue/listbox";
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import DataTable from "primevue/datatable";
import Column from "primevue/column";

Nova.booting(app => {
    app.use(PrimeVue, {
        unstyled: true,
        pt: {
            Splitter: {
                root: 'w-full rounded-lg form-input-bordered form-control form-input',
                gutter: {
                    class: 'bg-gray-300 dark:bg-gray-700 ml-3 mr-3',
                    style: 'cursor: col-resize'
                }
            },
            SplitterPanel: 'flex items-center justify-center',
            Listbox: {
                root: 'w-full h-full text-center',
                header: 'w-full h-10 mt-2 mb-2',
                filtercontainer: 'w-full h-full form-control form-input form-input-bordered flex items-center justify-center',
                filterinput: 'w-full h-full text-center outline-none bg-transparent',
                emptymessage: 'mt-2',
                item: 'cursor-pointer list-box-item'
            },
            DataTable: {
                root: 'w-full',
                table: 'w-full',
                thead: 'bg-gray-50 dark:bg-gray-800 top-0 z-10',
                bodyrow: 'cursor-pointer',
            },
            Column: {
                headercell: 'text-center',
                bodycell: 'text-center',
                sorticon: {
                    class: 'ml-1',
                    style: 'margin-top: -4px;'
                }
            }
        }
    });

    app.component("Listbox", Listbox);
    app.component("Splitter", Splitter);
    app.component("SplitterPanel", SplitterPanel);
    app.component("DataTable", DataTable);
    app.component("Column", Column);

    const hxComponent = require.context('./components', true, /(Hx)\w+\.(vue)$/);
    hxComponent.keys().forEach(fileName => {
        const componentConfig = hxComponent(fileName)
        const componentName = fileName.split('/').pop().replace(/\.\w+$/, '');
        app.component(componentName, componentConfig.default || componentConfig)
    });
});
