package com.pandey.beans.login;

public class User {
	public User() {
		
	}
	public User(String userName, String Password) {
		super();
		this.username=userName;
		this.password=Password;
	}
	private String username;
	private String password;
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
}
