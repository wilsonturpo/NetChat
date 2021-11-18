using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Channel> Channels { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Channel>()
                .HasData(new Channel
                {
                    Id = Guid.NewGuid(),
                    Name = "Dotnet Core",
                    Description = "Tecnología de Microsoft"
                },
                new Channel
                {
                    Id = Guid.NewGuid(),
                    Name = "Angular",
                    Description = "Tecnología de Google"
                },
                new Channel
                {
                    Id = Guid.NewGuid(),
                    Name = "React",
                    Description = "Tecnología de Facebook"
                });
        }
    }
}
