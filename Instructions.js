/*

DESCRIPCIÓN DEL PROYECTO
Se trabajará con un modelo en capas: Domain, Aplication, API, Persistence


CREACIÓN DEL PROYECTO
1. Creación de la solución: dotnet new sln 
2. Creación del proyecto Domain: dotnet new classlib -n Domain
3. Creación del proeycto Application: dotnet new classlib -n Application
4. Creación del proyecto Persitence: dotnet new classlib -n Persistence
5. Creación del proyecto API: dotnet new webapi -n API


AGREGAR PROYECTOS A LA SOLUCIÓN:
-dotnet sln add Domain/
-dotnet sln add Application/
-dotnet sln add API/
-dotnet sln add Persistence/


GENERAR REFERENCIAS
1. Application a Domain: 
    cd Application
    dotnet add reference ../Domain/
2. Aplication a Persistence:
    dotnet add reference ../Persistence/
3: API a Application:
    cd API
    dotnet add reference ../Application
4. Persistence a Domain:
    cd Persistence
    dotnet add reference ../Domain/


CREAR UNA API BÁSICA
CREAR EL DOMINIO BÁSICO

AGREGAR ENTITY FRAMEWORK AL PROYECTO PERSISTENCE
1. Ir al administrador de paquetes nuget:Versiones: 3.1.6
2. Agregar la dependencia: Microsoft.EntityFrameworkCore al proyecto "Persistence"
3. Agregar la dependencia: Microsoft.EntityFrameworkCore.Sqlite a "Persistence"
4. Agregar la dependencia: Microsoft.EntityFrameworkCore.Design a "Persistence" y "API"

CREAR LA CONEXIÓN A LA BASE DE DATOS
1. Crear la clase: DataContext
2. Hacer la configuración en: StarUp
3. Agregar la conexión a: appsettings.json

REALIZAR LAS MIGRACIONES
1. Instalar dotnet ef: dotnet tool install --global dotnet-ef
2. Realizar la migración: dotnet ef migrations add InitialCreate -p Persistence/ -s API/
	//Para remover una migración: ef migrations remove
3. Ejecutar las migraciones: Tenemos 2 opciones:
				dotnet ef database update //Actualiza la DB con las migraciones
				Escribir mediante código para que se actualice la DB
				en cada inicialización del proyecto
3.1. Incluir migraciones por código en la clase: program.cs

SEMBRADORAS:
1. Sobreescribir el método OnModelCreating de la clase: DataContext
2. Crear la migración: dotnet ef migrations add SeedData -p Persistence/ -s API/



CREAR APLICACIÓN DE CLIENTE - REACT
1. Ejecutar el comando: npx create-react-app client-app --use npm --typescript



*/