Ext.define('SL.view.EmployeeGrid', {
    extend:'Ext.grid.Panel',
    title: 'EmployeeDetail',
    xtype:'employeeGrid',
   itemId:'employeeGrid',
   	store:'EmployeeGridStore',
    columns: [
        { text: 'Employee ID',  dataIndex: 'id' },
        { text: 'Employee Name', dataIndex: 'name', flex: 1 },
        { text: 'Department', dataIndex: 'department' }
    ],
    height: 200,
    width: 400,
    initComponent: function() {
           this.callParent();
            console.log('employee grid panel called')
        }
});