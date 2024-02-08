package com.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.application.model.Teacher;
import com.application.model.User;
import com.application.services.TeacherService;
import com.application.services.UserService;

@RestController
public class RegistrationController 
{
	@Autowired
	private UserService userService;
	
	@Autowired
	private TeacherService teacherService;
	
	//register user
	
	@PostMapping("/registerteacher")
	@CrossOrigin(origins = "http://localhost:4200")
	public String registerDoctor(@RequestBody Teacher teacher) throws Exception
	{
		String currEmail = teacher.getEmail();
		String newID = getNewID();
		teacher.setTeacherid(newID);
		
		if(currEmail != null || !"".equals(currEmail))
		{
			Teacher teacherObj = teacherService.fetchTeacherByEmail(currEmail);
			if(teacherObj != null)
			{
				throw new Exception("Teacher with "+currEmail+" already exists !!!");
			}
		}
		String teacherObj = null;
		teacherObj = teacherService.saveTeacher(teacher);
		return teacherObj;
	}
	
	public String getNewID()
	{
		String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"0123456789"+"abcdefghijklmnopqrstuvxyz";
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 12; i++) 
        {
            int index = (int)(AlphaNumericString.length() * Math.random());
            sb.append(AlphaNumericString.charAt(index));
        }
        return sb.toString();
	}
}