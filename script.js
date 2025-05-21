const terminal = document.getElementById("terminal");
const input = document.getElementById("command");

const commands = {
  help: `Available commands:
whoami        About Jaya
skills        Technical skills
projects      View projects
experience    Work experience
education     Academic background
contact       Contact details
clear         Clear the terminal
help          List all commands`,

  whoami: `Name      : Jaya Sarath Chandh Thaticherla
  Full Stack Developer | Java | Spring MVC | Angular | JavaScript | HTML5 | CSS3 | SQL Server
Profile   : ASP.NET Developer with 3+ years experience in secure APIs, DevOps, and Angular frontend.`,

  skills: `Frameworks   : ASP.NET Core, MVC, Web API, Razor Pages
Languages    : C#, JavaScript, TypeScript, HTML, CSS, T-SQL
Frontend     : Angular, RxJS, Bootstrap, jQuery
Database     : SQL Server, EF Core, LINQ, Oracle
DevOps       : AWS EB, Jenkins, GitHub Actions
Testing      : Postman, Swagger, NUnit, MSTest`,

  projects: `• Healthcare appointment app (Dell)
• Dashboard performance optimizer (Comcast)
• User management portal (VMware)`,

  experience: `Dell Technologies (2025–Present)
Accenture (2021–2023)
VMware (2021)
VMware Intern (2020)`,

  education: `M.S. IT – University of Cincinnati (2023–2024)
B.Tech CSE – Gitam University (2017–2021)`,

  contact: `Email   : jthaticherla@gmail.com
Phone   : +1 (805) 253-3848
LinkedIn: linkedin.com/in/jaya-sarath-chandh-thaticherla-t-679b841b4`,

  clear: "__clear__"
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    const output = document.createElement("div");
    output.className = "output";
    output.textContent = `visitor@jaya-terminal:~$ ${cmd}`;
    terminal.insertBefore(output, input.parentNode);

    if (commands[cmd]) {
      if (commands[cmd] === "__clear__") {
        terminal.innerHTML = '';
        location.reload();
      } else {
        const response = document.createElement("div");
        response.className = "output";
        response.textContent = commands[cmd];
        terminal.insertBefore(response, input.parentNode);
      }
    } else {
      const err = document.createElement("div");
      err.className = "output";
      err.textContent = `Command not found: ${cmd}. Type 'help' for a list of commands.`;
      terminal.insertBefore(err, input.parentNode);
    }

    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});
