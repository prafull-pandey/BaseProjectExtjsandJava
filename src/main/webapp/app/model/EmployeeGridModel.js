Ext.define('SL.model.EmployeeGridModel', {
     extend: 'Ext.data.Model',
     fields: [
         {name: 'id', type: 'int'},
         {name: 'name',  type: 'string'},
         {name: 'department',  type: 'string'}
     ]
 });