package com.pandey.beans;

public class GridBean {
    int id;
    String name;
    String department;

    public GridBean(int id, String name, String dept) {
        this.id=id;
        this.name=name;
        this.department=dept;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
