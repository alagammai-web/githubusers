"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(githubusers) {
        this.githubusers = githubusers;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.githubusers.sendusers().subscribe(function (data) {
            _this.result = data;
            console.log(_this.result);
        }, function (err) {
            console.log("error coming");
        });
    };
    HomeComponent.prototype.onClick = function (user) {
        var _this = this;
        this.githubusers.senduserrepo(user.login).subscribe(function (repo) {
            _this.repodetails = repo;
            console.log(_this.repodetails);
        }, function (err) {
            console.log("error showing in repo");
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
