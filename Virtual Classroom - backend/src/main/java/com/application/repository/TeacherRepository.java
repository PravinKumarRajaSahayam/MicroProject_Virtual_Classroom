package com.application.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.application.model.Teacher;

public interface TeacherRepository extends CrudRepository<Teacher, Integer>
{
    public Teacher findByEmail(String email);
    
    public List<Teacher> findTeacherListByEmail(String email);
	
	public Teacher findByTeachername(String teachername);
	
	public Teacher findByEmailAndPassword(String email, String password);
	
	public List<Teacher> findProfileByEmail(String email);
	
	@Transactional
	@Modifying
	@Query(value = "update teacher set status = 'accept' where email = ?1", nativeQuery = true)
	public void updateStatus(String email);
	
	@Transactional
	@Modifying
	@Query(value = "update teacher set status = 'reject' where email = ?1", nativeQuery = true)
	public void rejectStatus(String email);
	
}