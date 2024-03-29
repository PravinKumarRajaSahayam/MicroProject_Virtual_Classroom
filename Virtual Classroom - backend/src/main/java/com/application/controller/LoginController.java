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
	
	@GetMapping("/")
    public String welcomeMessage()
    {
    	return "Welcome to Virtual Classroom !!!";
    }
	
	@PostMapping("/loginuser")
	@CrossOrigin(origins = "http://localhost:4200")
	public User loginUser(@RequestBody User user) throws Exception
	{
		String currEmail = user.getEmail();
		String currPassword = user.getPassword();
		
		User userObj = null;
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
	public Teacher loginDoctor(@RequestBody Teacher teacher) throws Exception
	{
		String currEmail = teacher.getEmail();
		String currPassword = teacher.getPassword();
		
		Teacher teacherObj = null;
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