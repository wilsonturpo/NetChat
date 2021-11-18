using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class SeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Channels",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { new Guid("daaca8bb-133c-4599-ad25-8bd8147e65c7"), "Tecnología de Microsoft", "Dotnet Core" });

            migrationBuilder.InsertData(
                table: "Channels",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { new Guid("e25ac6b5-a7e4-4cf4-9c4d-65eca21f2ed8"), "Tecnología de Google", "Angular" });

            migrationBuilder.InsertData(
                table: "Channels",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { new Guid("bc13420d-8ec1-4df7-b1d3-79e5c148939e"), "Tecnología de Facebook", "React" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Channels",
                keyColumn: "Id",
                keyValue: new Guid("bc13420d-8ec1-4df7-b1d3-79e5c148939e"));

            migrationBuilder.DeleteData(
                table: "Channels",
                keyColumn: "Id",
                keyValue: new Guid("daaca8bb-133c-4599-ad25-8bd8147e65c7"));

            migrationBuilder.DeleteData(
                table: "Channels",
                keyColumn: "Id",
                keyValue: new Guid("e25ac6b5-a7e4-4cf4-9c4d-65eca21f2ed8"));
        }
    }
}
