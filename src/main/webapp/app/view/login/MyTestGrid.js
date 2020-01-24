Ext.define('SL.view.login.MyTestGrid', {
extends:'Ext.grid.Panel',
    title: 'EmployeeDetail',
    columns: [
        { text: 'Id',  dataIndex: 'id' },
        { text: 'Employee Name', dataIndex: 'name', flex: 1 },
        { text: 'Department', dataIndex: 'department' }
    ],
    height: 200,
    width: 400,
});