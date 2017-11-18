using DataSearchUI.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DataSearchUI.Controllers
{
    public class DataController : ApiController
    {
        private IEnumerable<ClientAccount> ReadJsonFile()
        {
            string allText = System.IO.File.ReadAllText(System.Web.Hosting.HostingEnvironment.MapPath("~/Data/Data.json"));

            var clientAccounts = JsonConvert.DeserializeObject<IEnumerable<ClientAccount>>(allText);
            return clientAccounts;
        }
        // GET api/<controller>
        public IEnumerable<ClientAccount> Get()
        {
            var clientAccounts = ReadJsonFile();
            return clientAccounts.Select(x=> new ClientAccount { AccountId= x.AccountId, AccountName= x.AccountName });  
        }

        // GET api/<controller>/5
        public IEnumerable<ClientProperty> Get(int id)
        {
            var clientAccounts = ReadJsonFile();
            var clientProperties = clientAccounts.Where(x => x.AccountId == id).SelectMany(x => x.Properties);
            return clientProperties;
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}