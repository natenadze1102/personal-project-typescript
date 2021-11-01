"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
var helperFunctions_1 = require("./helperFunctions");
var Transaction = /** @class */ (function () {
    function Transaction() {
        this.store = {};
        this.logs = [];
    }
    Transaction.prototype.dispatch = function (scenario) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _i, scenario_1, current, _c, _d, e_1, _e, _f, e_2, i, e_3;
            var _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        //sort scenario
                        scenario = scenario.sort(function (first, second) { return first.index - second.index; });
                        _i = 0, scenario_1 = scenario;
                        _j.label = 1;
                    case 1:
                        if (!(_i < scenario_1.length)) return [3 /*break*/, 16];
                        current = scenario_1[_i];
                        (0, helperFunctions_1.validate)(current);
                        _j.label = 2;
                    case 2:
                        _j.trys.push([2, 4, , 15]);
                        _d = (_c = this.logs).push;
                        _g = {
                            index: current.index,
                            meta: current.meta,
                            storeBefore: current
                        };
                        return [4 /*yield*/, current.call()];
                    case 3:
                        _d.apply(_c, [(_g.storeAfter = _j.sent(),
                                _g.error = null,
                                _g)]);
                        this.store = null;
                        return [3 /*break*/, 15];
                    case 4:
                        e_1 = _j.sent();
                        this.logs.push({
                            index: current.index,
                            meta: current.meta,
                            storeBefore: current,
                            error: { name: e_1.name, message: e_1.message, stack: e_1.stack },
                        });
                        if (!current.restore) return [3 /*break*/, 14];
                        _j.label = 5;
                    case 5:
                        _j.trys.push([5, 7, , 14]);
                        _f = (_e = this.logs).push;
                        _h = {
                            index: current.index,
                            meta: current.meta,
                            storeBefore: current
                        };
                        return [4 /*yield*/, current.restore()];
                    case 6:
                        _f.apply(_e, [(_h.storeAfter = _j.sent(),
                                _h)]);
                        return [3 /*break*/, 14];
                    case 7:
                        e_2 = _j.sent();
                        this.store = {};
                        this.logs.push({
                            index: current.index,
                            meta: current.meta,
                            error: { name: e_2.name, message: e_2.message, stack: e_2.stack },
                        });
                        i = current.index - 2;
                        _j.label = 8;
                    case 8:
                        if (!(i >= 0)) return [3 /*break*/, 13];
                        if (!scenario[i].restore)
                            throw new Error("Cannot restore because there is no restore ! on index " + scenario[i].index);
                        _j.label = 9;
                    case 9:
                        _j.trys.push([9, 11, , 12]);
                        return [4 /*yield*/, ((_b = (_a = scenario[i]).restore) === null || _b === void 0 ? void 0 : _b.call(_a))];
                    case 10:
                        _j.sent();
                        this.logs.push({
                            index: scenario[i].index,
                            meta: scenario[i].meta,
                            error: null,
                        });
                        return [3 /*break*/, 12];
                    case 11:
                        e_3 = _j.sent();
                        this.logs.push({
                            index: scenario[i].index,
                            meta: scenario[i].meta,
                            error: { name: e_3.name, message: e_3.message, stack: e_3.stack },
                        });
                        return [3 /*break*/, 12];
                    case 12:
                        i--;
                        return [3 /*break*/, 8];
                    case 13: return [3 /*break*/, 16];
                    case 14: return [3 /*break*/, 15];
                    case 15:
                        _i++;
                        return [3 /*break*/, 1];
                    case 16: return [2 /*return*/, this.logs];
                }
            });
        });
    };
    return Transaction;
}());
exports.Transaction = Transaction;
