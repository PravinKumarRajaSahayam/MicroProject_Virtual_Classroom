package com.application.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class UpdateUserStudentEnrolledCountTeacher {
	WebDriver driver;

	@BeforeClass
	public void InitializeDriver() {
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
	}

	// Load the Applicatoin
	// To open the web application in a chrome browser
	@Test
	public void loadApplicationPage() {
		driver.navigate().to("http://localhost:4200/");
	}

	// Click Login button for Choose
	@Test
	public void openLoginPage() {
		driver.findElements(By.className("log")).get(2).click();
		System.out.println(driver.getTitle());
	}

	// Click Teacher Login for Login
	@Test
	public void searchTeacherLogin() {
		driver.findElements(By.className("detail_2")).get(0).click();
		System.out.println(driver.getTitle());
	}

	// Enter Inputs to Login for Teacher
	@Test
	public void searchTutorial() {
		driver.findElement(By.name("teacheremail")).sendKeys("rjpravin160@gmail.com");
		driver.findElement(By.name("pwd")).sendKeys("PravinKumar@11946");
		driver.findElements(By.tagName("button")).get(1).click();
		System.out.println(driver.getTitle());
	}

	// Click Update Enrolled Count button
	@Test
	public void searchUpdateEnrolledCount() {
		driver.findElements(By.tagName("div")).get(0).click();
		System.out.println(driver.getTitle());
	}

	// Admin update the user(Student) Enrolled count
	@Test
	public void updateEnrolledCount() {

//			driver.findElement(By.id("coursename")).sendKeys("Java");
//			driver.findElement(By.id("courseid")).sendKeys("90");
//			driver.findElement(By.id("enrolledcount")).sendKeys("6");
//			driver.findElement(By.id("update")).click();

	}

	// Close the Browser
//	@AfterClass
//	public void close() {
//		driver.quit();
//		driver.close();
//	}

}