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
                root: {
                    class: 'w-full rounded-lg form-input-bordered form-control form-input'
                },
                gutter: {
                    class: 'bg-gray-300 dark:bg-gray-700 ml-3 mr-3',
                    style: 'cursor: col-resize'
                }
            },
            SplitterPanel: {
                root: {
                    class: 'flex items-center justify-center'
                }
            },
            Listbox: {
                root: {
                    class: 'w-full h-full text-center'
                },
                header: {
                    style: 'height: 40px;',
                    class: 'w-full mt-2 mb-2'
                },
                filtercontainer: {
                    class: 'w-full h-full form-control form-input form-input-bordered flex items-center justify-center'
                },
                filterinput: {
                    class: 'w-full h-full text-center',
                    style: 'outline: none;background-color: transparent;'
                },
                emptymessage: {
                    class: 'mt-2'
                },
                item: {
                    class: 'cursor-pointer list-box-item',
                    style: 'line-height: 40px'
                }
            },
            DataTable: {
                root: 'w-full',
                table: 'w-full divide-y divide-gray-100 dark:divide-gray-700',
                thead: 'bg-gray-50 dark:bg-gray-800 top-0 z-10',
                tbody: 'divide-y divide-gray-100 dark:divide-gray-700'
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
    })
});
