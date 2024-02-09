package com.application;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import com.application.controller.LoginController;
import com.application.controller.RegistrationController;
import com.application.controller.UserController;
import com.application.model.Chapter;
import com.application.model.Course;
import com.application.model.Enrollment;
import com.application.model.Teacher;
import com.application.model.User;
import com.application.services.ChapterService;
import com.application.services.CourseService;
import com.application.services.EnrollmentService;
import com.application.services.TeacherService;
import com.application.services.UserService;

import static org.junit.Assert.assertArrayEquals;
import static org.testng.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class VirtualClassroomApplicationTests {
	@Autowired
	 RegistrationController registrationcontroller;
	 String registerUser;
	 String registerTeacher;
	 String result;
	 
	@Autowired
	LoginController logincontroller;
	String loginUser;
	String loginTeacher;
	String result1;
	
	@Autowired
	UserService userservice;
	String updateUser;
	String userSave;
	List<User> list1 = new ArrayList<User>();
    List<User> list2 = new ArrayList<User>();
    List<User> list3 = new ArrayList<User>();
    User user1;
    User user2;
    User user3;
   
    @Autowired
	TeacherService teacherservice;
	String addteacher;
	String updateteacher;
	String teacherSave;
	String reject;
	String accept;
	List<Teacher> list4 = new ArrayList<Teacher>();
	List<Teacher> list5 = new ArrayList<Teacher>();
	List<Teacher> list6 = new ArrayList<Teacher>();
	Teacher teacher1;
	Teacher teacher2;
	Teacher teacher3;
	
	@Autowired
	CourseService courseservice;
	String CourseSave;
	String Courseadd;
	String EnrolledUpdate;
	List<Course> list7 = new ArrayList<Course>();
	List<Course> list8 = new ArrayList<Course>();
	List<Course> list9 = new ArrayList<Course>();
	Course course1;
	Course course2;
	Course course3;
	
	@Autowired
	ChapterService chapterservice;
	String ChapterSave;
	String Chapteradd;
	List<Chapter> list10 = new ArrayList<Chapter>();
	List<Chapter> list11 = new ArrayList<Chapter>();
	List<Chapter> list14 = new ArrayList<Chapter>();
	Chapter chapter1;
	Chapter chapter2;
	Chapter chapter3;
	
	@Autowired
	EnrollmentService enrollementservice;
	String EnrollSave;
	String Enrolladd;
	String EnrollUpdate;
	
	@Test
	@Order(1)
	void contextLoads() {
	}

	@Test
    @Order(2)
    void testPerformUserRegister() throws Exception {
      User obj = new User();
      obj.setUserid("1019");
      obj.setUsername("PravinKumar");
      obj.setProfession("EEE");
      obj.setGender("Male");
      obj.setEmail("pravinkumar1468@gmail.com");
      obj.setMobile("8095231476");
      obj.setAddress("Virudhunagar");
      obj.setPassword("PravinKumar@11946");
      registerUser = "Register Successfully";
      result = registrationcontroller.registerUser(obj);
      assertEquals(registerUser,result);
  }
	
	@Test
    @Order(3)
    void testPerformTeacherRegister() throws Exception {
      Teacher obj = new Teacher();
      obj.setTeacherid("109");
      obj.setTeachername("Preethi");
      obj.setGender("Female");
      obj.setEmail("preethi12345@gmail.com");
      obj.setMobile("9875231460");
      obj.setExperience("3");
      obj.setDepartment("ECE");
      obj.setDegreecompleted("PHD");
      obj.setInstitutionname("VVE");
      obj.setPassword("Preethi@123456");
      obj.setStatus("accept");
      registerTeacher = "Registered Successfully";
      result = registrationcontroller.registerDoctor(obj);
      assertEquals(registerTeacher,result);
  }
	
	@Test
  @Order(4)
  void testPerformUserLogin() throws Exception {
    User obj = new User();
    obj.setEmail("pravinkumar1468@gmail.com");
    obj.setPassword("PravinKumar@11946");
    loginUser = "Login Successfully";
    result1 = logincontroller.loginUser(obj);
    assertEquals(loginUser,result1);
}
	
	@Test
	  @Order(5)
	  void testPerformTeacherLogin() throws Exception {
	    Teacher obj = new Teacher();
	    obj.setEmail("preethi12345@gmail.com");
	    obj.setPassword("Preethi123mail.com");
	    loginTeacher = "Login Successfully";
	    result1 = logincontroller.loginDoctor(obj);
	    assertEquals(loginTeacher,result1);
	}
	
	 @Test
   @Order(6)
   void testPerformUserList() throws Exception {
       list1 = (List<User>) userservice.getAllUsers();
       user1 = new User("1019","PravinKumar","EEE","Male","pravinkumar1468@gmail.com","8095231476","Virudhunagar","PravinKumar@11946");
       user2 = new User("ulC9r6oDV4XN","user","csa","Male","rjpravin11111@gmail.com","8976532140","east","PravinKumar@11946");
       user3 = new User("cQvHlIylK9Cv","PravinKumarUserId","EEE","Female","rjpravin1236@gmail.com","8932541760","East","PravinKumar@11946");
       list2.add(user1);
       list2.add(user2);
       list2.add(user3);
       list3.add(user1);
       list3.add(user2);
       list3.add(user3);
       list2.equals(list3);
       assertEquals(list2, list3);
   }
     
 	@Test
   @Order(7)
   void testPerformUpdateUserProfile() throws Exception {
     User obj = new User();
     obj.setUserid("1019");
     obj.setUsername("PravinKumar");
     obj.setProfession("EEE");
     obj.setGender("Male");
     obj.setEmail("pravinkumar1468@gmail.com");
     obj.setMobile("8095231746");
     obj.setAddress("Virudhunagar");
     obj.setPassword("PravinKumar@11946");
     updateUser = "User Updated Successfully";
     result = userservice.updateUserProfile(obj);
     assertEquals(updateUser,result);
 }
	
	@Test
	   @Order(8)
	   void testPerformGetAllUsers() throws Exception {
		 list1 = userservice.getAllUsers();
       user1 = new User("1019","PravinKumar","EEE","Male","pravinkumar1468@gmail.com","8095231476","Virudhunagar","PravinKumar@11946");
       user2 = new User("ulC9r6oDV4XN","user","csa","Male","rjpravin11111@gmail.com","8976532140","east","PravinKumar@11946");
       user3 = new User("cQvHlIylK9Cv","PravinKumarUserId","EEE","Female","rjpravin1236@gmail.com","8932541760","East","PravinKumar@11946");
       list2.add(user1);
       list1.equals(list2);
       assertEquals(list1, list2);
	 }
    
    @Test
  @Order(9)
  void testPerformAddNewTeacher() throws Exception {
    Teacher obj = new Teacher();
    obj.setTeacherid("110");
    obj.setTeachername("PravinKumar");
    obj.setGender("Male");
    obj.setEmail("pravinkumar325@gmail.com");
    obj.setMobile("9875231460");
    obj.setExperience("3");
    obj.setDepartment("ECE");
    obj.setDegreecompleted("PHD");
    obj.setInstitutionname("VVE");
    obj.setPassword("Preethi@123456");
    obj.setStatus("accept");
    addteacher = "Add Successfully";
    result = teacherservice.addNewTeacher(obj);
    assertEquals(addteacher,result);
}
    
    
	@Test
  @Order(10)
  void testPerformUpdateTeacherProfile() throws Exception {
    Teacher obj = new Teacher();
  obj.setTeacherid("110");
  obj.setTeachername("PravinKumar");
  obj.setGender("Male");
  obj.setEmail("pravinkumar3256@gmail.com");
  obj.setMobile("9875231460");
  obj.setExperience("3");
  obj.setDepartment("ECE");
  obj.setDegreecompleted("PHD");
  obj.setInstitutionname("VVE");
  obj.setPassword("Preethi@123456");
  obj.setStatus("accept");
    updateteacher = "Updated Successfully";
    result = teacherservice.updateteacherProfile(obj);
    assertEquals(updateteacher,result);
}
	
	@Test
	  @Order(11)
	  void testPerformRejectStatus() throws Exception {
	    reject = "reject";
	    result = teacherservice.rejectStatus(reject);
	    assertEquals(reject,result);
	}
	
	@Test
	  @Order(12)
	  void testPerformAcceptStatus() throws Exception {
	    accept = "accept";
	    result = teacherservice.updateStatus(accept);
	    assertEquals(accept,result);
	}
	
	@Test
  @Order(13)
  void testPerformUserSave() throws Exception {
    User obj = new User();
    obj.setUserid("001");
    obj.setUsername("PravinKumar");
    obj.setProfession("EEE");
    obj.setGender("Male");
    obj.setEmail("pravinkumar1230@gmail.com");
    obj.setMobile("8095231476");
    obj.setAddress("Virudhunagar");
    obj.setPassword("PravinKumar@11946");
    userSave = "Register Successfully";
    result = userservice.saveUser(obj);
    assertEquals(userSave,result);
}
	
	@Test
  @Order(14)
  void testPerformTeacherSave() throws Exception {
    Teacher obj = new Teacher();
    obj.setTeacherid("6");
    obj.setTeachername("PravinKumar");
    obj.setGender("Male");
    obj.setEmail("pravinkumar321@gmail.com");
    obj.setMobile("9875231460");
    obj.setExperience("3");
    obj.setDepartment("ECE");
    obj.setDegreecompleted("PHD");
    obj.setInstitutionname("VVE");
    obj.setPassword("Preethi@123456");
    obj.setStatus("accept");
    teacherSave = "Registered Successfully";
    result = teacherservice.saveTeacher(obj);
    assertEquals(teacherSave,result);
}
	
	@Test
  @Order(15)
  void testPerformCourseSave() throws Exception {
    Course obj = new Course();
    obj.setCourseid("81");
    obj.setCoursename("Spring");
    obj.setCoursetype("Website");
    obj.setDescription("Sprin Boot for the freshers");
    obj.setEnrolledcount("0");
    obj.setEnrolleddate("03/09/2023");
    obj.setId(81);
    obj.setInstructorinstitution("VVE");
    obj.setInstructorname("PravinKumar");
    obj.setLanguage("English");
    obj.setSkilllevel("Basic");
    obj.setWebsiteurl("www.javatutorial.com");
    CourseSave = "Sucessfully Saved";
    result = courseservice.saveCourse(obj);
    assertEquals(CourseSave,result);
}
	
	@Test
  @Order(16)
  void testPerformNewCourseAdd() throws Exception {
    Course obj = new Course();
    obj.setCourseid("84");
    obj.setCoursename("Spring Boot");
    obj.setCoursetype("Website");
    obj.setDescription("Sprin Boot for the freshers");
    obj.setEnrolledcount("0");
    obj.setEnrolleddate("06/09/2023");
    obj.setId(81);
    obj.setInstructorinstitution("VVE");
    obj.setInstructorname("PravinKumar");
    obj.setLanguage("English");
    obj.setSkilllevel("Basic");
    obj.setWebsiteurl("www.javatutorial.com");
    Courseadd = "Successfully added";
    result = courseservice.addNewCourse(obj);
    assertEquals(Courseadd,result);
}
	
	@Test
  @Order(17)
  void testPerformUpdateEnrolledCount() throws Exception {
    Course obj = new Course();
    EnrolledUpdate = "Enrolled Updated";
    result = courseservice.updateEnrolledcount(Courseadd, 1);
    assertEquals(EnrolledUpdate,result);
}
	
	@Test
  @Order(18)
  void testPerformChapterSave() throws Exception {
    Chapter obj = new Chapter();
    obj.setChapter1id("009");
    obj.setChapter1name("Spring Boot");
    ChapterSave = "Chapter saved";
    result = chapterservice.saveChapter(obj);
    assertEquals(ChapterSave,result);
}
	
	@Test
  @Order(19)
  void testPerformNewChapterAdd() throws Exception {
    Chapter obj = new Chapter();
    obj.setChapter1id("008");
    obj.setChapter1name("Angular");
    Chapteradd = "Chapter Added";
    result = chapterservice.addNewChapter(obj);
    assertEquals(Chapteradd,result);
}
	
	@Test
  @Order(20)
  void testPerformEnrolledSave() throws Exception {
    Enrollment obj = new Enrollment();
    obj.setCourseid("81");
    obj.setCoursename("Spring");
    obj.setCoursetype("website");
    obj.setDescription("Spring");
    obj.setEnrolledcount("1");
    obj.setEnrolleddate("03/09/23");
    obj.setEnrolleduserid("y1ms1mio2l6H");
    obj.setEnrolledusername("PravinKumar");
    obj.setEnrolledusertype("user");
    EnrollSave = "Enrolled saved";
    result = enrollementservice.saveEnrollment(obj);
    assertEquals(EnrollSave,result);
}
	
	@Test
  @Order(21)
  void testPerformAddNewEnrolled() throws Exception {
    Enrollment obj = new Enrollment();
    obj.setCourseid("89");
    obj.setCoursename("Java");
    obj.setCoursetype("website");
    obj.setDescription("Java");
    obj.setEnrolledcount("1");
    obj.setEnrolleddate("03/09/23");
    obj.setEnrolleduserid("y1ms1mio2l6H");
    obj.setEnrolledusername("PravinKumar");
    obj.setEnrolledusertype("user");
    Enrolladd = "Enrolled added";
    result = enrollementservice.addNewEnrollment(obj);
    assertEquals(Enrolladd,result);
}
	
	@Test
	@Order(22)
	void testPerformGetAllTeachers() throws Exception {
    list4 = teacherservice.getAllTeachers();
    teacher1 = new Teacher("anish123@gmail.com","PHD","ECE","3","Male","VVS","0986432145","Anish@11946","accept","yMf5dqrl0evc","Anish");
    teacher2 = new Teacher("anitha1234@gmail.com","PHD","EEE","3","Female","VVS","0986432145","Anitha@11946","accept","yMf5dqrl0oia3","Anitha");
    teacher3 = new Teacher("pravinkumar123@gmail.com","PHD","CSE","3","Male","VVS","0986432145","PravinKumar@11946","accept","yMf5dqrl0ertys","PravinKumar");
    list5.add(teacher1);
    list5.add(teacher2);
    list5.add(teacher3);
    list6.add(teacher1);
    list6.add(teacher2);
    list6.add(teacher3);
    list5.equals(list6);
    assertEquals(list5, list6);
	 }
	
	@Test
	   @Order(23)
	   void testPerformGetAllCourse() throws Exception {
	       list7 = courseservice.getAllCourses();
	       course1 = new Course(84,"95","Spring Boot","website","Spring Boot","1","13/09/23","VVE","PravinKumar","English","Basic","www.javatutorial.com", "www.javatutorial.com");
	       course2 = new Course(85,"96","Spring","website","Spring","1","13/09/23","VVE","PravinKumar","English","Basic","www.javatutorial.com", "www.javatutorial.com");
	       course3 = new Course(86,"98","Java","website","Java","1","13/09/23","VVE","PravinKumar","English","Basic","www.javatutorial.com", "www.javatutorial.com");
	       list8.add(course1);
	       list8.add(course2);
	       list8.add(course3);
	       list9.add(course1);
	       list9.add(course2);
	       list9.add(course3);
	       list8.equals(list9);
	       assertEquals(list8, list9);
	   }
	
	@Test
	   @Order(24)
	   void testPerformGetAllChapter() throws Exception {
	       list10 = chapterservice.getAllChapters();
	       chapter1 = new Chapter(73,"100","Java", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
	       chapter2 = new Chapter(74,"111","Spring", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
	       chapter3 = new Chapter(75,"98","Spring Boot", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);	       list11.add(chapter1);
	       list11.add(chapter2);
	       list11.add(chapter3);
	       list14.add(chapter1);
	       list14.add(chapter2);
	       list14.add(chapter3);
	       list11.equals(list14);
	       assertEquals(list11, list14);
	   }
}
