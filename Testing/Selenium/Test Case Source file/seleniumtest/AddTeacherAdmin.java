package com.application.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class AddTeacherAdmin {
	WebDriver driver;

	@BeforeClass
	public void InitializeDriver() {
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
	}

	// Load the Application
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

	// Click Admin Login for Login
	@Test
	public void searchAdminLogin() {
		driver.findElements(By.className("detail_1")).get(0).click();
		System.out.println(driver.getTitle());
	}

	// Enter Inputs to Login for Admin
	@Test
	public void searchTutorial() {
		driver.findElement(By.name("email")).sendKeys("admin@gmail.com");
		driver.findElement(By.name("pwd")).sendKeys("admin123");
		driver.findElements(By.tagName("button")).get(1).click();
		System.out.println(driver.getTitle());
	}

	// Click Add teacher button
	@Test
	public void searchAddTeacher() {
		driver.findElements(By.tagName("label")).get(0).click();
		System.out.println(driver.getTitle());
	}
	
	// Admin add the new teacher
	@Test
	public void addTeacher() {

//		driver.findElement(By.id("teachername")).sendKeys("Anitha");
//		driver.findElement(By.id("email")).sendKeys("anith1236@gmail.com");
//		driver.findElement(By.id("gender")).sendKeys("Female");
//		driver.findElement(By.id("mobile")).sendKeys("8976052341");		
//		driver.findElement(By.id("pwd")).sendKeys("PravinKumar@11946");
//		driver.findElement(By.id("institutionname")).sendKeys("VVE");
//		driver.findElement(By.id("department")).sendKeys("EEE");
//		driver.findElement(By.id("experience")).sendKeys("3");
//		driver.findElement(By.id("degreecompleted")).sendKeys("PHD");
//		driver.findElement(By.id("register")).click();

	}
	// Close the Browser
//	@AfterClass
//	public void close() {
//		driver.quit();
//		driver.close();
//	}

}