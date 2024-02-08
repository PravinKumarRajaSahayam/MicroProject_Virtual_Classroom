package com.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.application.model.Teacher;
import com.application.model.User;
import com.application.services.TeacherService;
import com.application.services.UserService;

@RestController
public class LoginController 
{
	@Autowired
	private UserService userService;
	
	@Autowired
	private TeacherService teacherService;
	
	//welcome page
	
	@PostMapping("/loginuser")
	@CrossOrigin(origins = "http://localhost:4200")
	public String loginUser(@RequestBody User dto) throws Exception
	{
		String currEmail = dto.getEmail();
		String currPassword = dto.getPassword();
		
		String userObj = null;
		if(currEmail != null && currPassword != null)
		{
			userObj = userService.fetchUserByEmailAndPassword(currEmail, currPassword);
		}
		if(userObj == null)
		{
			throw new Exception("User does not exists!!! Please enter valid credentials...");
		}		
		return userObj;
	}
	
	@PostMapping("/loginteacher")
	@CrossOrigin(origins = "http://localhost:4200")
	public String loginDoctor(@RequestBody Teacher teacher) throws Exception
	{
		String currEmail = teacher.getEmail();
		String currPassword = teacher.getPassword();
		
		String teacherObj = null;
		if(currEmail != null && currPassword != null)
		{
			teacherObj = teacherService.fetchTeacherByEmailAndPassword(currEmail, currPassword);
		}
		if(teacherObj == null)
		{
			throw new Exception("Teacher does not exists!!! Please enter valid credentials...");
		}		
		return teacherObj;
	}
}