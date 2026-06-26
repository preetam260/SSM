using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartSociety.Repository.Migrations
{
    /// <inheritdoc />
    public partial class AddOwnershipModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsOwner",
                table: "Residents");

            migrationBuilder.AddColumn<Guid>(
                name: "BilledToUserId",
                table: "MaintenanceBills",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<bool>(
                name: "IsVacantRate",
                table: "MaintenanceBills",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<Guid>(
                name: "OwnerId",
                table: "Apartments",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_MaintenanceBills_BilledToUserId",
                table: "MaintenanceBills",
                column: "BilledToUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Apartments_OwnerId",
                table: "Apartments",
                column: "OwnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Apartments_Users_OwnerId",
                table: "Apartments",
                column: "OwnerId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_MaintenanceBills_Users_BilledToUserId",
                table: "MaintenanceBills",
                column: "BilledToUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Apartments_Users_OwnerId",
                table: "Apartments");

            migrationBuilder.DropForeignKey(
                name: "FK_MaintenanceBills_Users_BilledToUserId",
                table: "MaintenanceBills");

            migrationBuilder.DropIndex(
                name: "IX_MaintenanceBills_BilledToUserId",
                table: "MaintenanceBills");

            migrationBuilder.DropIndex(
                name: "IX_Apartments_OwnerId",
                table: "Apartments");

            migrationBuilder.DropColumn(
                name: "BilledToUserId",
                table: "MaintenanceBills");

            migrationBuilder.DropColumn(
                name: "IsVacantRate",
                table: "MaintenanceBills");

            migrationBuilder.DropColumn(
                name: "OwnerId",
                table: "Apartments");

            migrationBuilder.AddColumn<bool>(
                name: "IsOwner",
                table: "Residents",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }
    }
}
