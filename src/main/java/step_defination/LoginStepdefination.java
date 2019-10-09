package step_defination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepdefination {

	WebDriver driver;
	
	
	@Given("^user is on facebook loginpage$")
	public void user_is_on_facebook_loginpage()  {
		System.setProperty("webdriver.chrome.driver","E:\\selenium\\ChromeUpdate-76\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.facebook.com/");
	   
	}
	@When("^user enter \"([^\"]*)\"and \"([^\"]*)\"$")
	public void user_enter_and(String username, String password)  {
	   driver.findElement(By.name("email")).sendKeys(username);
	   driver.findElement(By.id("pass")).sendKeys(password);
		
	}



	@Then("^user click on loginButton$")
	public void user_click_on_loginButton() throws InterruptedException{
		Thread.sleep(5000);
		if(driver.findElement(By.id("u_0_b")).isEnabled()==true)	   {
			driver.findElement(By.id("u_0_b")).click();
		}
	}

	@Then("^user is on Facebook Homepage$")
	public void user_is_on_Facebook_Homepage() throws Throwable {
	    
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Facebook – log in or sign up", title);
	}

	
	
	
	
	
	
}
