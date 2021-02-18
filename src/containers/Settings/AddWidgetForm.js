import React from 'react';
import classes from './Settings.module.css';
import Option from './Option';
import * as forms from '../../widgetForms';

const AddWidgetForm = () => {
    const formList = Object.values(forms);
    return (
        <div className={classes.Settings}>
            <header>
                <h1>Add Widget</h1>
                <h3>Choose a Widget:</h3>
            </header>
            <section>
                {formList.map(form => <Option key={form.key} opt={form}/>)}
            </section>
        </div>
    )
}

export default AddWidgetForm;