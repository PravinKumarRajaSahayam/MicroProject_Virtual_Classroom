package com.application.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.application.model.Teacher;
import com.application.repository.TeacherRepository;

@Service
public class TeacherService 
{
	@Autowired
	private TeacherRepository teacherRepo;
	
	public Teacher saveTeacher(Teacher teacher)
	{
		return teacherRepo.save(teacher);
	}
	
	public Teacher addNewTeacher(Teacher teacher)
	{
		return teacherRepo.save(teacher);
	}
	
	public Teacher updateteacherProfile(Teacher teacher)
	{
		return teacherRepo.save(teacher);
	}
	
	public List<Teacher> getAllTeachers()
	{
		return (List<Teacher>)teacherRepo.findAll();
	}
	
	public List<Teacher> getTeacherListByEmail(String email) 
	{
		return (List<Teacher>)teacherRepo.findTeacherListByEmail(email);
	}
	
	public Teacher fetchTeacherByEmail(String email)
	{
		return teacherRepo.findByEmail(email);
	}
	
	public Teacher fetchTeacherByTeachername(String teachername)
	{
		return teacherRepo.findByTeachername(teachername);
	}
	
	public Teacher fetchTeacherByEmailAndPassword(String email, String password)
	{
		return teacherRepo.findByEmailAndPassword(email, password);
	}
	
	public List<Teacher> fetchProfileByEmail(String email)
	{
		return (List<Teacher>)teacherRepo.findProfileByEmail(email);
	}

	public void updateStatus(String email) 
	{
		teacherRepo.updateStatus(email);
	}

	public void rejectStatus(String email) 
	{
		teacherRepo.rejectStatus(email);
	}

	public List<Teacher> getteachersByEmail(String email)
	{
		return teacherRepo.findTeacherListByEmail(email);
	}
}