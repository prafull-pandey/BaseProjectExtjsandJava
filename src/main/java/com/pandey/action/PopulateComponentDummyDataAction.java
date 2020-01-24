package com.pandey.action;

import com.opensymphony.xwork2.ActionSupport;
import com.pandey.beans.GridBean;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PopulateComponentDummyDataAction extends ActionSupport {
    private static final long serialVersionUID = -3276230382012850846L;
    public List<GridBean> getGridbeanList() {
        return gridbeanList;
    }

    public void setGridbeanList(List<GridBean> gridbeanList) {
        this.gridbeanList = gridbeanList;
    }

    List<GridBean> gridbeanList;

    @Override
    public String execute() throws Exception {
        gridbeanList=new ArrayList<>();
        //			Class.forName("org.postgresql.Driver");

        try (Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", "postgres", "postgres")) {

            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT * FROM employeedetails");
            while (resultSet.next()) {
                gridbeanList.add(new GridBean(resultSet.getInt("id"),resultSet.getString("name"),resultSet.getString("dept")));
            }


        } catch (SQLException e) {
            System.out.println("Connection failure.");
           return ERROR;
        }
        return SUCCESS;
    }
}
