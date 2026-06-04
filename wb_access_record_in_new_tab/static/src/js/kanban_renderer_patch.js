/** @odoo-module **/
import { KanbanRecord } from '@web/views/kanban/kanban_record';
import { patch } from '@web/core/utils/patch';
import { onMounted, onPatched, onWillUnmount } from '@odoo/owl';
import { contextMenuManager } from './context_menu';

patch(KanbanRecord.prototype, {
    setup() {
        super.setup(...arguments);

        this._wbKanbanHandler = (e) => this._onWbKanbanContextMenu(e);

        onMounted(() => {
            this._wbAttachKanban();
        });

        onPatched(() => {
            this._wbWriteKanbanAttrs();
        });

        onWillUnmount(() => {
            this._wbDetachKanban();
        });
    },

    _wbWriteKanbanAttrs() {
        const el = this.rootRef?.el;
        if (!el) return;
        const record = this.props.record;
        if (record?.resId) {
            el.dataset.wbModel = record.resModel || '';
            el.dataset.wbResId = record.resId;
        }
    },

    _wbAttachKanban() {
        const el = this.rootRef?.el;
        if (!el) return;

        this._wbWriteKanbanAttrs();
        el.addEventListener('contextmenu', this._wbKanbanHandler);
        this._wbCardEl = el;
    },

    _wbDetachKanban() {
        if (this._wbCardEl) {
            this._wbCardEl.removeEventListener('contextmenu', this._wbKanbanHandler);
            this._wbCardEl = null;
        }
    },

    _onWbKanbanContextMenu(e) {
        if (e.shiftKey) return;
        if (e.currentTarget.classList.contains('o_kanban_ghost')) return;

        const resId = parseInt(e.currentTarget.dataset.wbResId, 10);
        const model = e.currentTarget.dataset.wbModel;

        if (!resId || isNaN(resId) || !model) return;

        e.preventDefault();
        e.stopPropagation();

        contextMenuManager.show({ x: e.clientX, y: e.clientY, model, resId });
    },
});
