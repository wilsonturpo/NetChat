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












*/