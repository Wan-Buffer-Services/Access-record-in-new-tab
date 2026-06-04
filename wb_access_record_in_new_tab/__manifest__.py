# -- coding: utf-8 --
##############################################################################
#
#    OpenERP, Open Source Management Solution
#    Copyright (C) Wan Buffer Solution (<https://wanbuffer.com/>).
#
#    For Module Support : info@wanbuffer.com  or Call : +91 9638442270
#
##############################################################################
{
    'name': 'Access Record in New Tab',
    'version': '18.0.1.0.0',
    'category': 'Productivity',
    'summary': 'Right-click on any List or Kanban record to open it in a new tab or copy its link instantly.',
    'description': """
        Access Record in New Tab adds a smart right-click context menu to Odoo's
        List and Kanban views, allowing users to:

        - Open any record in a new browser tab instantly
        - Copy the direct URL of any record to clipboard
        - Original List/Kanban view stays open — record opens in a separate tab
        - Hold Shift + Right-Click to access the browser's native context menu at any time
    """,
    'author': 'Wan Buffer Services',
    'website': 'https://wanbuffer.com',
    'support': 'support@wanbuffer.com',
    'depends': ['web'],
    'assets': {
        'web.assets_backend': [
            'wb_access_record_in_new_tab/static/src/scss/context_menu.scss',
            'wb_access_record_in_new_tab/static/src/js/context_menu.js',
            'wb_access_record_in_new_tab/static/src/js/list_renderer_patch.js',
            'wb_access_record_in_new_tab/static/src/js/kanban_renderer_patch.js',
        ],
    },
    'images': ['static/description/background.png'],
    'installable': True,
    'application': False,
    'license': 'OPL-1',
    
}
