package com.application.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.application.model.Chapter;
import com.application.model.Course;
import com.application.model.Teacher;
import com.application.model.User;
import com.application.model.Wishlist;
import com.application.services.ChapterService;
import com.application.services.CourseService;
import com.application.services.TeacherService;
import com.application.services.WishlistService;

@RestController
public class TeacherController 
{	
	@Autowired
	private TeacherService teacherService;
	
	@Autowired
	private CourseService courseService;
	
	@Autowired
	private ChapterService chapterService;
	
	@Autowired
	private WishlistService wishlistService;
	
	@GetMapping("/teacherlist")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Teacher>> getTeacherList() throws Exception
	{
		List<Teacher> teachers = teacherService.getAllTeachers();
		return new ResponseEntity<List<Teacher>>(teachers, HttpStatus.OK);
	}
	
	@GetMapping("/youtubecourselist")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Course>> getYoutubeCourseList() throws Exception
	{
		List<Course> youtubeCourseList = courseService.fetchByCoursetype("Youtube");
//		for(Course list:youtubeCourseList)
//		{
//			System.out.println(list.getYoutubeurl());
//		}
		return new ResponseEntity<List<Course>>(youtubeCourseList, HttpStatus.OK);
	}
	
	@GetMapping("/websitecourselist")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Course>> getWebsiteCourseList() throws Exception
	{
		List<Course> websiteCourseList = courseService.fetchByCoursetype("Website");
		return new ResponseEntity<List<Course>>(websiteCourseList, HttpStatus.OK);
	}
	
	@GetMapping("/courselistbyname/{coursename}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Course>> getCourseListByName(@PathVariable String coursename) throws Exception
	{
		Course courseList = courseService.fetchCourseByCoursename(coursename);
		System.out.println(courseList.getCoursename()+" ");
		List<Course> courselist = new ArrayList<>();
		courselist.add(courseList);
		return new ResponseEntity<List<Course>>(courselist, HttpStatus.OK);
	}
	
	@GetMapping("/teacherlistbyemail/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Teacher>> getTeacherListByEmail(@PathVariable String email) throws Exception
	{
		List<Teacher> teachers = teacherService.getteachersByEmail(email);
		return new ResponseEntity<List<Teacher>>(teachers, HttpStatus.OK);
	}
	
	@PostMapping("/addTeacher")
	@CrossOrigin(origins = "http://localhost:4200")
	public Teacher addNewTeacher(@RequestBody Teacher teacher) throws Exception
	{
		Teacher teacherObj = null;
		String newID = getNewID();
		teacher.setTeacherid(newID);
		teacherObj = teacherService.addNewTeacher(teacher);
		teacherService.updateStatus(teacher.getEmail());
		return teacherObj;
	}
	
	@PostMapping("/addCourse")
	@CrossOrigin(origins = "http://localhost:4200")
	public Course addNewCourse(@RequestBody Course course) throws Exception
	{
		Course courseObj = null;
		String newID = getNewID();
		course.setCourseid(newID);
		
		courseObj = courseService.addNewCourse(course);
		return courseObj;
	}
	
	@PostMapping("/addnewchapter")
	@CrossOrigin(origins = "http://localhost:4200")
	public Chapter addNewChapters(@RequestBody Chapter chapter) throws Exception
	{
		Chapter chapterObj = null;
		chapterObj = chapterService.addNewChapter(chapter);
		return chapterObj;
	}
	
	@GetMapping("/acceptstatus/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<String>> updateStatus(@PathVariable String email) throws Exception
	{
		teacherService.updateStatus(email);
		List<String> al=new ArrayList<>();
		al.add("accepted");
		return new ResponseEntity<List<String>>(al,HttpStatus.OK);
	}
	
	@GetMapping("/rejectstatus/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<String>> rejectStatus(@PathVariable String email) throws Exception
	{
		teacherService.rejectStatus(email);
		List<String> al=new ArrayList<>();
		al.add("rejected");
		return new ResponseEntity<List<String>>(al,HttpStatus.OK);
	}
	
	@GetMapping("/teacherprofileDetails/{email}")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Teacher>> getProfileDetails(@PathVariable String email) throws Exception
	{
		List<Teacher> teachers = teacherService.fetchProfileByEmail(email);
		return new ResponseEntity<List<Teacher>>(teachers, HttpStatus.OK);
	}
	
	@PutMapping("/updateteacher")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<Teacher> updateTeacherProfile(@RequestBody Teacher teacher) throws Exception
	{
		Teacher teacherobj = teacherService.updateteacherProfile(teacher);
		return new ResponseEntity<Teacher>(teacherobj, HttpStatus.OK);
	}
	
	@GetMapping("/gettotalteachers")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Integer>> getTotalTeachers() throws Exception
	{
		List<Teacher> teachers = teacherService.getAllTeachers();
		List<Integer> teachersCount = new ArrayList<>();
		teachersCount.add(teachers.size());
		return new ResponseEntity<List<Integer>>(teachersCount, HttpStatus.OK);
	}
	
	@GetMapping("/gettotalchapters")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Integer>> getTotalChapters() throws Exception
	{
		List<Chapter> chapters = chapterService.getAllChapters();
		List<Integer> chaptersCount = new ArrayList<>();
		chaptersCount.add(chapters.size());
		return new ResponseEntity<List<Integer>>(chaptersCount, HttpStatus.OK);
	}
	
	@GetMapping("/gettotalcourses")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Integer>> getTotalCourses() throws Exception
	{
		List<Course> courses = courseService.getAllCourses();
		List<Integer> coursesCount = new ArrayList<>();
		coursesCount.add(courses.size());
		return new ResponseEntity<List<Integer>>(coursesCount, HttpStatus.OK);
	}
	
	@GetMapping("/gettotalwishlist")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<Integer>> getTotalWishlist() throws Exception
	{
		List<Wishlist> wishlists = wishlistService.getAllLikedCourses();
		List<Integer> wishlistCount = new ArrayList<>();
		wishlistCount.add(wishlists.size());
		return new ResponseEntity<List<Integer>>(wishlistCount, HttpStatus.OK);
	}
  
  @GetMapping("/getcoursenames")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<List<String>> getCourseNames() throws Exception
	{
		List<Course> courses = courseService.getAllCourses();
		List<String> coursenames = new ArrayList<>();
		for(Course obj : courses)
		{
			coursenames.add(obj.getCoursename());
		}
		return new ResponseEntity<List<String>>(coursenames, HttpStatus.OK);
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
