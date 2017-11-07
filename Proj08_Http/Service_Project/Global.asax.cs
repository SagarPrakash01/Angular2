using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace Service_Project
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            var formatter = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            formatter.SerializerSettings = new Newtonsoft.Json.JsonSerializerSettings
            {
                Formatting = Newtonsoft.Json.Formatting.Indented,
                TypeNameHandling = Newtonsoft.Json.TypeNameHandling.Objects
            };

        }

        protected void Application_BeginRequest()
        {
            /*
             in every request for cross domain, client first rquest is OPTION request
             this is to check with server, whether in cross domain server support Get, Post, Put, Delete
             if answer is negative then client will not initate the request
             * */
            if (Request.Headers.AllKeys.Contains("Origin") && Request.HttpMethod == "OPTIONS")
            {
                //so if the request is Option, just do not do any thing
                Response.Flush();
            }
        }
    }
}
