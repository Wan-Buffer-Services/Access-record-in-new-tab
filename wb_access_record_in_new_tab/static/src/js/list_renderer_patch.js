/** @odoo-module **/
import { ListRenderer } from '@web/views/list/list_renderer';
import { patch } from '@web/core/utils/patch';
import { onMounted, onWillUnmount } from '@odoo/owl';
import { contextMenuManager } from './context_menu';

patch(ListRenderer.prototype, {
    setup() {
        super.setup(...arguments);

        this._wbDocContextMenu = (e) => {
            if (e.shiftKey) return;
            const row = e.target.closest('tr.o_data_row');
            if (!row) return;

            const datapointId = row.dataset.id;
            if (!datapointId) return;

            const record = this.props.list.records.find(
                (r) => String(r.id) === datapointId
            );
            const resId = record?.resId;
            if (!resId) return;

            const model = this.props.list.resModel;
            if (!model) return;

            e.preventDefault();
            e.stopPropagation();

            contextMenuManager.show({ x: e.clientX, y: e.clientY, model, resId });
        };

        onMounted(() => {
            document.addEventListener('contextmenu', this._wbDocContextMenu, true);
        });

        onWillUnmount(() => {
            document.removeEventListener('contextmenu', this._wbDocContextMenu, true);
        });
    },
});
