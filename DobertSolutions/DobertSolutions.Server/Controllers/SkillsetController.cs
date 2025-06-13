using Microsoft.AspNetCore.Mvc;
using DobertSolutions.Server.Models.Skillset; // if you're using Skill model

namespace DobertSolutions.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SkillsetController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetSkills()
        {
            var skills = new List<Skill>
            {
                new Skill { Name = "JavaScript", Score = 10, IconVariable = "js", IconColor = "#f7df1e", Prefix = "fab", Type = 1},
                new Skill { Name = "React", Score = 9, IconVariable = "react", IconColor = "#61dafb", Prefix = "fab", Type = 1 },
                new Skill { Name = "Vue.js", Score = 8, IconVariable = "vuejs", IconColor = "#42b883", Prefix = "fab", Type = 1 },
                new Skill { Name = "HTML5", Score = 9, IconVariable = "html5", IconColor = "#e34f26", Prefix = "fab", Type = 1 },
                new Skill { Name = "CSS3", Score = 8, IconVariable = "css3-alt", IconColor = "#1572B6", Prefix = "fab", Type = 1 },
                new Skill { Name = "Sass", Score = 8, IconVariable = "sass", IconColor = "#cf649a", Prefix = "fab", Type = 1},
                new Skill { Name = "Bootstrap", Score = 8, IconVariable = "bootstrap", IconColor = "#7952b3", Prefix = "fab" , Type = 1},
                new Skill { Name = "Less", Score = 6, IconVariable = "code", IconColor = "#f7df1e", Prefix = "fas", Type = 1},
                new Skill { Name = "ASP.NET", Score = 9, IconVariable = "server", IconColor = "#512bd4", Prefix = "fas", Type = 2},
                new Skill { Name = "C#", Score = 10, IconVariable = "laptop-code", IconColor = "#178600", Prefix = "fas", Type = 2},
                new Skill { Name = "Entity Framework", Score = 7, IconVariable = "server", IconColor = "#00758f", Prefix = "fas", Type = 2},
                new Skill { Name = "REST APIs", Score = 10, IconVariable = "cloud", IconColor = "#6366f1", Prefix = "fas", Type = 2},
                new Skill { Name = "SQL", Score = 8, IconVariable = "database", IconColor = "#cc2927", Prefix = "fas", Type = 2},
                new Skill { Name = "MVC/MVVM", Score = 8, IconVariable = "layer-group", IconColor = "#4B7BEC", Prefix = "fas", Type = 3 },
                new Skill { Name = "UX/UI Design", Score = 7, IconVariable = "palette", IconColor = "#F39C12", Prefix = "fas", Type = 3 },
                new Skill { Name = "Web Components", Score = 9, IconVariable = "cubes", IconColor = "#16A085", Prefix = "fas", Type = 3 },
                new Skill { Name = "Unit Testing", Score = 7, IconVariable = "vial", IconColor = "#9B59B6", Prefix = "fas", Type = 3 },
                new Skill { Name = "Dependency Injection", Score = 8, IconVariable = "sitemap", IconColor = "#E67E22", Prefix = "fas", Type = 3 },
                new Skill { Name = "LLM/AI tools", Score = 8, IconVariable = "robot", IconColor = "#cc2927", Prefix = "fas", Type = 3 },
                new Skill { Name = "Agile/Scrum", Score = 9, IconVariable = "people-group", IconColor = "#2980B9", Prefix = "fas", Type = 3 },
                new Skill { Name = "Cloud Development", Score = 6, IconVariable = "cloud", IconColor = "#3498DB", Prefix = "fas", Type = 3 },

                // Add more test skills as needed
            };

            return Ok(skills);
        }
    }
}
