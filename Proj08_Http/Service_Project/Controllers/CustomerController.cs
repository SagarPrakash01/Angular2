using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Service_Project.Models;

namespace Service_Project.Controllers
{
    public class CustomerController : ApiController
    {
        // GET: api/Customer
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Customer/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Customer
        //public HttpResponseMessage Post(System.Net.Http.Formatting.FormDataCollection formData)
        //{
        //    //apply enumerator on formData and Enumerate
        //    IEnumerator<KeyValuePair<string, string>> data = formData.GetEnumerator();
        //    //move to next position
        //    data.MoveNext();
        //    //take the current value
        //    KeyValuePair<string, string> currentData = data.Current;
        //    //read data into string valriable
        //    string str = currentData.Key;

        //    List<Customer> customerList = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Customer>>(str);


        //    foreach (var item in customerList)
        //    {
        //        item.CustomerName = item.CustomerName.ToUpper();
        //    }
        //    return Request.CreateResponse(HttpStatusCode.OK, customerList);
        //}



        public HttpResponseMessage Post(System.Net.Http.Formatting.FormDataCollection formData)
        {
            //apply enumerator on formData and Enumerate
            IEnumerator<KeyValuePair<string, string>> data = formData.GetEnumerator();
            //move to next position
            data.MoveNext();
            //take the current value
            KeyValuePair<string, string> currentData = data.Current;
            //read data into string valriable
            string str = currentData.Key;

            List<CustomerData> customerList = Newtonsoft.Json.JsonConvert.DeserializeObject<List<CustomerData>>(str);

            Database1Entities service = new Database1Entities();
           
            foreach (var item in customerList)
            {
                // item.CustomerName = item.CustomerName.ToUpper();
                service.CustomerDatas.Add(item);
            }
            service.SaveChanges();

            customerList = new List<CustomerData>();

            customerList = service.CustomerDatas.ToList();

            return Request.CreateResponse(HttpStatusCode.OK, customerList);
        }
        // PUT: api/Customer/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Customer/5
        public void Delete(int id)
        {
        }
    }
}
