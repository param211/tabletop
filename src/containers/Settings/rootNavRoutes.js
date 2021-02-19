import React from 'react';
import AddWidgetForm from './AddWidgetForm';
import RemoveWidgetForm from './RemoveWidgetForm';
import SecretsForm from './SecretsForm';

const rootNavRoutes = [
    { 
        key: 'addWidget',
        img: '', 
        name: 'Add Widget', 
        next: <AddWidgetForm />
    },
    { 
        key: 'removeWidget',
        img: '', 
        name: 'Remove Widgets', 
        next: <RemoveWidgetForm />
    },
    { 
        key: 'config',
        img: '', 
        name: 'Configure', 
        next: null
    },
    { 
        key: 'secrets',
        img: '', 
        name: 'Secrets', 
        next: <SecretsForm />
    },
];

export default rootNavRoutes;