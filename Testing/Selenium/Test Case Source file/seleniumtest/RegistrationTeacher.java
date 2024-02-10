package com.application.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class RegistrationTeacher {
	WebDriver driver;

	@BeforeClass
	public void InitializeDriver() {
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
	}

	//Register for User(teacher)
	// To open the web application in a chrome browser
		@Test
		public void loadApplicationPage() {
			driver.navigate().to("http://localhost:4200/");
		}

		// Click SignUp button for Register
		@Test
		public void openSignUpPage() {
			driver.findElements(By.className("create_acc")).get(0).click();
			System.out.println(driver.getTitle());
		}
		
	// Click Teacher for Register
	@Test
	public void searchTeacherSignUp() {
		driver.findElements(By.className("detail_2")).get(0).click();
		System.out.println(driver.getTitle());
	}
	
	//Enter Inputs to SignUp for User(teacher)
	@Test
	public void searchTutorial() {
		driver.findElement(By.name("teachername")).sendKeys("Anith");
		driver.findElement(By.name("teacheremail")).sendKeys("anith1238@gmail.com");
		driver.findElement(By.name("teachergender")).sendKeys("Female");
		driver.findElement(By.name("teachermobile")).sendKeys("9875234106");
		driver.findElement(By.name("pwd")).sendKeys("Anitha@11946");
		driver.findElement(By.name("institutionname")).sendKeys("VVE");
		driver.findElement(By.name("department")).sendKeys("EEE");
		driver.findElement(By.name("experience")).sendKeys("3");
		driver.findElement(By.name("degreecompleted")).sendKeys("PHD");
		driver.findElement(By.name("ConfirmPassword")).sendKeys("Anitha@11946");
		driver.findElements(By.name("remember")).get(0).click();
		driver.findElements(By.className("btnRegister")).get(0).click();
		System.out.println(driver.getTitle());
	}
		
	// Close the Browser
//	@AfterClass
//	public void close() {
//		driver.quit();
//		driver.close();
//	}
}