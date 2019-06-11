using Microsoft.AspNetCore.SignalR;
using System;

namespace Iot.SignalR.Server.Hubs
{
    public class SignalRServerHub : Hub
    {
        public void SendState(bool status)
        {
            Console.WriteLine($"Status: {status}");
        }
    }
}
