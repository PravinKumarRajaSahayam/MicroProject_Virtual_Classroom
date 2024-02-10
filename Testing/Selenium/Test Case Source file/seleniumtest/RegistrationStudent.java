package com.application.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class RegistrationStudent {
	WebDriver driver;

	@BeforeClass
	public void InitializeDriver() {
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	//Register for User(student)
		// To open the web application in a chrome browser
			@Test
			public void loadApplicationPage() {
				driver.navigate().to("http://localhost:4200/");
			}

			// Click SignUp for Register
			@Test
			public void openSignUpPage() {
				driver.findElements(By.className("create_acc")).get(0).click();
				System.out.println(driver.getTitle());
			}
			
		// Click Student for Register
		@Test
		public void searchStudentSignUp() {
			driver.findElements(By.className("detail_3")).get(0).click();
			System.out.println(driver.getTitle());
		}
		
		//Enter Inputs to SignUp for User(student)
		@Test
		public void searchTutorial() {
			driver.findElement(By.name("username")).sendKeys("Pooja");
			driver.findElement(By.name("usergender")).sendKeys("Female");
			driver.findElement(By.name("userprofession")).sendKeys("EEE");
			driver.findElement(By.name("pwd")).sendKeys("Pooja@123");
			driver.findElement(By.name("useremail")).sendKeys("Pooja@11946");
			driver.findElement(By.name("usermobile")).sendKeys("985231406");
			driver.findElement(By.name("useraddress")).sendKeys("East");
			driver.findElement(By.name("ConfirmPassword")).sendKeys("Pooja@123");
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