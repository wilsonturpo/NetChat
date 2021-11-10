using System;

namespace Domain
{
    public class Channel
    {
        //[Key]: Declaración explícita de un ID
        public Guid Id {get; set;}
        public string Name {get; set;}
        public string Description {get; set;}

    }
}
