"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GithubusersService = void 0;
var core_1 = require("@angular/core");
var GithubusersService = /** @class */ (function () {
    function GithubusersService(http) {
        this.http = http;
        this.api_url = "https://api.github.com";
    }
    GithubusersService.prototype.sendusers = function () {
        return this.http.get(this.api_url + "/users");
    };
    GithubusersService.prototype.senduserrepo = function (username) {
        return this.http.get(this.api_url + "/users/" + username + "/repos");
    };
    GithubusersService.prototype.sendusername = function (uname) {
        return this.http.get(this.api_url + "/users/" + uname);
    };
    GithubusersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], GithubusersService);
    return GithubusersService;
}());
exports.GithubusersService = GithubusersService;
