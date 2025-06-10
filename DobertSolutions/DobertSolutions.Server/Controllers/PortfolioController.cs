using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class PortfolioController : ControllerBase
{
    [HttpGet]
    public IActionResult GetPortfolio()
    {
        var projects = new[]
        {
            new {
                Name = "Dobert Solutions",
                ImageUrl = "/assets/projects/dobert-solutions.png",
                Description = "A fullstack React + ASP.NET Core web app for showcasing skills and projects.",
                TechStack = new[] { "React", "ASP.NET Core", "SCSS", "Azure SQL", "MVC" },
                GithubUrl = "https://github.com/trentondobert/dobertsolutions.git",
                LiveDemoUrl = "https://dobertsolutions.com"
            },
            new {
                Name = "Kerry the Card Counter",
                ImageUrl = "/assets/projects/kerry.png",
                Description = "A Tensorflow Neural Network designed to learn how to Count Cards in Blackjack.",
                TechStack = new[] { "Python", "TensorFlow.js" },
                GithubUrl = "https://github.com/trentondobert/KerryCardCounter",
                LiveDemoUrl = ""
            },
            new {
                Name = "Seamless Gutters",
                ImageUrl = "/assets/projects/Seamless-Gutters.png",
                Description = "Marketing site for a Florida gutter cleaning business.",
                TechStack = new[] { "React", "Node.js", "MVC" },
                GithubUrl = "https://github.com/trentondobert/SeamlessGutters",
                LiveDemoUrl = ""
            }
        };

        return Ok(projects);
    }
}
