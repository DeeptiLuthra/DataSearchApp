using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataSearchUI.Models
{
    //[Serializable]
    public class ClientAccount
    {
        public int AccountId { get; set; }
        public string AccountName { get; set; }
        public IEnumerable<ClientProperty> Properties { get; set; }
        
    }
}
