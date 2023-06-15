#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["DATN-ASPSERVER.API/DATN-ASPSERVER.API.csproj", "DATN-ASPSERVER.API/"]
RUN dotnet restore "DATN-ASPSERVER.API/DATN-ASPSERVER.API.csproj"
COPY . .
WORKDIR "/src/DATN-ASPSERVER.API"
RUN dotnet build "DATN-ASPSERVER.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DATN-ASPSERVER.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DATN-ASPSERVER.API.dll"]