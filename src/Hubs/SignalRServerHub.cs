using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace Iot.SignalR.Server.Hubs
{
    public class SignalRServerHub : Hub
    {
        private bool lastStatus;

        public override Task OnConnectedAsync()
        {
            Console.WriteLine("Connected");
            Console.WriteLine($"{Context.ConnectionId}");
            Clients.Client(Context.ConnectionId).SendAsync("Notify", lastStatus);
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            Console.WriteLine("Desconnected");
            Console.WriteLine($"{Context.ConnectionId}");
            return base.OnDisconnectedAsync(exception);
        }

        public void ReceiveStateFromDevice(bool status)
        {
            lastStatus = status;
            Clients.All.SendAsync("Notify", status);
            Console.WriteLine($"Status received: {status}");
        }

        public void SendStateToDevice(bool status)
        {
            Clients.All.SendAsync("SendStateToDevice", status);
        }
    }
}
