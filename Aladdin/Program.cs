using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace AladdinDotNetNew
{
    public static void Main(string[] args)
    {
        var host = new WebHostBuilder()
            .UseKestrel()
            .UseContentRoot(Directory.GetCurrentDirectory())
            .UseSetting("detailedErrors", "true")
            .UseIISIntegration()
            .UseStartup<Startup>()
            .CaptureStartupErrors(true)
            .UseApplicationInsights()
            .Build();

        host.Run();
    }
}
