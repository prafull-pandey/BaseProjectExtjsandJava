package com.pandey.action;

import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import com.opensymphony.xwork2.ActionSupport;
import com.pandey.beans.login.User;

public class LoginAction extends ActionSupport implements SessionAware{

	/**
	 * 
	 */
	private static final long serialVersionUID = -3276230382012850846L;

	private String username;
	private String password;
	private Map<String,Object> session;
	
	private boolean isValidUser(User user) {
		if(user.getUsername().equalsIgnoreCase("PRAFULL") && user.getPassword().equals("password")) {
			return true;
		}
		return false;
	}
	
	@Override
	public String execute() {
		clearFieldErrors();
		User user=(User)session.get("user");
		if (user!=null) {
			return SUCCESS;
		}
		user = new User(username,password);
		if(isValidUser(user)) {
			session.put("user", user);
			return SUCCESS;
		}
		addFieldError("invalid", "Invalid Username or Password");
		return ERROR;
		
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public void setSession(Map<String, Object> session) {
		this.session=session;
	}
	
	

}
