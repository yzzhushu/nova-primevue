import PrimeVue from "primevue/config";
import Listbox from "primevue/listbox";
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tree from "primevue/tree";

Nova.booting(app => {
    app.use(PrimeVue, {
        unstyled: true,
        pt: {
            Splitter: {
                root: 'w-full rounded-lg form-control form-control-bordered form-input',
                gutter: {
                    class: 'bg-gray-300 dark:bg-gray-700 ml-3 mr-3',
                    style: 'cursor: col-resize'
                }
            },
            SplitterPanel: {
                root: 'flex items-center justify-center'
            },
            Listbox: {
                root: 'w-full h-full text-center',
                header: 'w-full h-10 mt-2 mb-2',
                filtercontainer: 'w-full h-full form-control form-control-bordered form-input flex items-center justify-center',
                filterinput: 'w-full h-full text-center outline-none bg-transparent',
                emptymessage: 'mt-2',
                item: 'cursor-pointer hx-list-column'
            },
            DataTable: {
                root: 'w-full',
                wrapper: 'relative',
                resizehelper: {
                    class: 'z-10 absolute hidden',
                    style: 'width: 1px'
                },
                table: 'w-full',
                thead: 'bg-gray-100 dark:bg-gray-700 top-0 z-10',
                virtualscrollerspacer: 'flex',
                bodyrow: 'cursor-pointer hx-list-column',
            },
            Column: {
                headercell: 'text-center',
                bodycell: 'text-center',
                sorticon: {
                    class: 'ml-1',
                    style: 'margin-top: -4px;'
                }
            },
            Tree: {
                root: 'w-full',
                wrapper: 'w-full h-full overflow-auto',
                container: 'm-0 p-0 list-none overflow-auto',
                content: 'p-2 flex items-center cursor-pointer hx-list-column',
                toggler: ({props, state, context}) => ({
                    class: (context.leaf ? 'invisible' : '') + ' w-6 h-6 mr-2 select-none',
                    style: 'color: #6c757d;'
                }),
                checkboxcontainer: 'w-6 h-6 mr-2 flex items-center',
                checkbox: ({props, state, context}) => ({
                    class: (context.checked ? 'p-tree-checked dark:p-tree-checked' : 'p-tree-unchecked dark:p-tree-unchecked') + ' rounded flex items-center justify-center',
                    style: 'width: 18px;height: 18px;'
                }),
                subgroup: {
                    style: 'margin-left: 1rem;'
                },
                checkboxicon: {
                    style: 'stroke-width: 3px;'
                }
            }
        }
    });

    app.component("Listbox", Listbox);
    app.component("Splitter", Splitter);
    app.component("SplitterPanel", SplitterPanel);
    app.component("DataTable", DataTable);
    app.component("Column", Column);
    app.component("Tree", Tree);

    const hxComponent = require.context('./components', true, /(Hx)\w+\.(vue)$/);
    hxComponent.keys().forEach(fileName => {
        const componentConfig = hxComponent(fileName)
        const componentName = fileName.split('/').pop().replace(/\.\w+$/, '');
        app.component(componentName, componentConfig.default || componentConfig)
    });
});
