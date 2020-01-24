Ext.define('SL.store.EmployeeGridStore', {
    extend: 'Ext.data.Store',
    id: 'employeeGridStore',
    model: 'SL.model.EmployeeGridModel',
    proxy: {
            type: 'ajax',
            url : 'populateComponentDummyDataAction.action',
            reader: {
                         type: 'json',
                         rootProperty: 'root'
                     }
        },
        autoLoad:true
        });