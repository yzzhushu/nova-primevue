import PrimeVue from "primevue/config";
import Listbox from "primevue/listbox";
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';

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
                    class: 'flex align-items-center justify-content-center'
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
                }
            }
        }
    });

    app.component("Listbox", Listbox);
    app.component("Splitter", Splitter);
    app.component("SplitterPanel", SplitterPanel);
});
