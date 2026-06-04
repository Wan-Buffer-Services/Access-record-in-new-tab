/** @odoo-module **/
class ContextMenuManager {
    constructor() {
        this.menuEl = null;
        this._onOutsideEvent = this._onOutsideEvent.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
    }

    show({ x, y, model, resId }) {
        this.hide();

        const url = `${window.location.origin}/web#model=${model}&id=${resId}&view_type=form`;

        const menu = document.createElement('div');
        menu.className = 'wb_ctx_menu';
        menu.style.left = `${x}px`;
        menu.style.top = `${y}px`;

        menu.appendChild(this._buildItem({
            icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                   </svg>`,
            label: 'Open in New Tab',
            onClick: () => { window.open(url, '_blank'); this.hide(); },
        }));

        menu.appendChild(this._buildItem({
            icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                   </svg>`,
            label: 'Copy Link Address',
            onClick: () => {
                navigator.clipboard.writeText(url).then(() => this._showToast('Link copied!'));
                this.hide();
            },
        }));

        document.body.appendChild(menu);
        this.menuEl = menu;

        const rect = menu.getBoundingClientRect();
        if (rect.right > window.innerWidth)  { menu.style.left = `${x - rect.width}px`; }
        if (rect.bottom > window.innerHeight) { menu.style.top  = `${y - rect.height}px`; }

        requestAnimationFrame(() => menu.classList.add('wb_ctx_menu--open'));

        setTimeout(() => {
            document.addEventListener('click',       this._onOutsideEvent);
            document.addEventListener('contextmenu', this._onOutsideEvent);
            document.addEventListener('keydown',     this._onKeyDown);
        }, 0);
    }

    hide() {
        if (!this.menuEl) return;
        this.menuEl.classList.remove('wb_ctx_menu--open');
        const el = this.menuEl;
        setTimeout(() => el.remove(), 150);
        this.menuEl = null;
        document.removeEventListener('click',       this._onOutsideEvent);
        document.removeEventListener('contextmenu', this._onOutsideEvent);
        document.removeEventListener('keydown',     this._onKeyDown);
    }

    _buildItem({ icon, label, onClick }) {
        const item = document.createElement('div');
        item.className = 'wb_ctx_menu_item';
        item.innerHTML = `<span class="wb_ctx_menu_icon">${icon}</span><span class="wb_ctx_menu_label">${label}</span>`;
        item.addEventListener('click', onClick);
        return item;
    }

    _onOutsideEvent(e) {
        if (this.menuEl && !this.menuEl.contains(e.target)) { this.hide(); }
    }

    _onKeyDown(e) {
        if (e.key === 'Escape') { this.hide(); }
    }

    _showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'wb_ctx_toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('wb_ctx_toast--show'));
        setTimeout(() => {
            toast.classList.remove('wb_ctx_toast--show');
            setTimeout(() => toast.remove(), 300);
        }, 2200);
    }
}

export const contextMenuManager = new ContextMenuManager();
