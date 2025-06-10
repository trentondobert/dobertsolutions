namespace DobertSolutions.Server.Models.Skillset
{
    public class Skill
    {
        public string Name { get; set; }
        public int Score { get; set; }
        public string IconVariable { get; set; }
        public string IconColor { get; set; }
        public string Prefix { get; set; }
        public int Type { get; set; }       // 1 = Frontend, 2 = Backend, 3 = Other
    }
}
