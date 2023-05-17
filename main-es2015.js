(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+MmB":
/*!*************************************************************!*\
  !*** ./src/app/board/components/client/client.component.ts ***!
  \*************************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_models_Client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/Client */ "Hmdo");
/* harmony import */ var src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/enums/gRPCMode */ "KpZ9");
/* harmony import */ var src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/enums/Protocol */ "qEx5");
/* harmony import */ var src_models_RequestData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/RequestData */ "LEJs");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/OperatorComponent */ "RW4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../info-tooltip/info-tooltip.component */ "q+md");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Shared_slider_described_slider_described_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Shared/slider-described/slider-described.component */ "lxjM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















const _c0 = ["endpointSelect"];
const _c1 = ["methodSelect"];
function ClientComponent_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientComponent_div_6_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r18.sendData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ClientComponent_div_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientComponent_div_6_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r20.establishConnection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Establish");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Connection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ClientComponent_div_6_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientComponent_div_6_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r22.endConnection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " End");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Connection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ClientComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ClientComponent_div_6_button_1_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ClientComponent_div_6_button_2_Template, 4, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ClientComponent_div_6_button_3_Template, 4, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("left", ctx_r2.LogicClient.options.X, "px")("top", ctx_r2.LogicClient.options.Y, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.canSend);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.canEstablishConnection);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.canEndConnection);
} }
function ClientComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const endpoint_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", endpoint_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](endpoint_r24.url);
} }
function ClientComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ClientComponent_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const method_r25 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", method_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r9.formatMethod(ctx_r9.HTTPMethod[method_r25 + ""], ctx_r9.protocol == ctx_r9.Protocol.Database));
} }
function ClientComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "GET");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ClientComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r26.establishConnection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Establish Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ClientComponent_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientComponent_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r28.endConnection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "End Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class ClientComponent extends _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_6__["OperatorComponent"] {
    constructor() {
        super(...arguments);
        this.LogicClient = new src_models_Client__WEBPACK_IMPORTED_MODULE_1__["Client"]();
        this.availableEndpoints = [];
        this.availableMethods = [];
        this.canAutoSend = true;
        this.canSend = false;
        this.canEstablishConnection = false;
        this.canEndConnection = false;
        this.isAutomaticSending = false;
    }
    ngAfterViewInit() {
        this.Init(true);
    }
    handleEndpointChange() {
        this.LogicClient.options.endpointRef.method = this.LogicClient.options.endpointRef.endpoint.supportedMethods[0];
        this.availableMethods = this.endpointSelect.value.supportedMethods;
        this.protocol = this.LogicClient.options.endpointRef.endpoint.protocol;
        this.afterChange();
    }
    updateSelection() {
        this.LogicClient.updateEndpoint();
        let currEdp = this.endpointSelect.value;
        let currMth = this.methodSelect.value;
        this.LogicClient.options.endpointRef.endpoint = null;
        this.endpointSelect.value = null;
        this.availableEndpoints = this.LogicClient.getAvailableEndpoints();
        if (this.availableEndpoints.length == 0) {
            this.availableMethods = [];
            this.updateCanSendData();
            this.updateCanEstablishStream();
            this.updateCanEndStream();
            return;
        }
        if (currEdp != null && currMth != null) {
            let was = false;
            for (let e of this.availableEndpoints) { // need this workaround to keep values in material select....
                if (e.url == currEdp.url && Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_5__["arrayEquals"])(e.supportedMethods, currEdp.supportedMethods)) {
                    was = true;
                    this.LogicClient.options.endpointRef.endpoint = e;
                    this.endpointSelect.value = e;
                    this.availableMethods = e.supportedMethods;
                }
            }
            this.LogicClient.options.endpointRef.method = currMth;
            if (!was) {
                this.LogicClient.options.endpointRef.endpoint = this.availableEndpoints[0];
                this.availableMethods = this.LogicClient.options.endpointRef.endpoint.supportedMethods;
                this.LogicClient.options.endpointRef.method = this.availableMethods[0];
            }
        }
        else {
            this.LogicClient.options.endpointRef.endpoint = this.availableEndpoints[0];
            this.availableMethods = this.LogicClient.options.endpointRef.endpoint.supportedMethods;
            this.LogicClient.options.endpointRef.method = this.availableMethods[0];
        }
        this.protocol = this.LogicClient.options.endpointRef.endpoint.protocol;
        this.updateCanSendData();
        this.updateCanEstablishStream();
        this.updateCanEndStream();
        if (this.isReadOnly)
            this.cdRef.detectChanges();
    }
    handleClick(event) {
        super.handleClick(event);
        this.updateSelection();
    }
    getLogicComponent() {
        return this.LogicClient;
    }
    toggleAutomaticSend() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isAutomaticSending = !this.isAutomaticSending;
            if (this.isAutomaticSending) {
                if (this.canAutoSend) {
                    this.canAutoSend = false;
                    this.canAutoSend = yield this.stream();
                }
            }
            if (this.isReadOnly)
                this.cdRef.detectChanges();
        });
    }
    updateCanSendData() {
        if (this.LogicClient.options.endpointRef.endpoint == null) {
            this.canSend = false;
            return;
        }
        this.canSend = this.LogicClient.options.endpointRef.endpoint.grpcMode != src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_2__["gRPCMode"]['Server Streaming'] &&
            this.LogicClient.isConnectedToEndpoint ||
            this.LogicClient.options.endpointRef.endpoint.grpcMode == src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_2__["gRPCMode"].Unary && this.LogicClient.options.endpointRef.endpoint.protocol != src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_3__["Protocol"].WebSockets;
        if (this.isReadOnly)
            this.cdRef.detectChanges();
    }
    updateCanEstablishStream() {
        this.canEstablishConnection = this.LogicClient.options.endpointRef.endpoint != null &&
            (this.LogicClient.options.endpointRef.endpoint.grpcMode != src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_2__["gRPCMode"].Unary ||
                this.LogicClient.options.endpointRef.endpoint.protocol == src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_3__["Protocol"].WebSockets) &&
            !this.LogicClient.isConnectedToEndpoint;
        if (this.isReadOnly)
            this.cdRef.detectChanges();
    }
    updateCanEndStream() {
        this.canEndConnection = this.LogicClient.options.endpointRef.endpoint != null &&
            (this.LogicClient.options.endpointRef.endpoint.grpcMode != src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_2__["gRPCMode"].Unary ||
                this.LogicClient.options.endpointRef.endpoint.protocol == src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_3__["Protocol"].WebSockets) &&
            this.LogicClient.isConnectedToEndpoint;
        if (this.isReadOnly)
            this.cdRef.detectChanges();
    }
    stream() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_5__["sleep"])((1 / Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_5__["getRateFromOutputRate"])(this.LogicClient.options.outputRate)) * 1000);
            this.updateCanSendData();
            if (!this.isAutomaticSending || !this.canSend)
                return true;
            this.sendData();
            if (this.isReadOnly)
                this.cdRef.detectChanges();
            return yield this.stream();
        });
    }
    sendData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let request = new src_models_RequestData__WEBPACK_IMPORTED_MODULE_4__["RequestData"]();
            request.header = new src_models_RequestData__WEBPACK_IMPORTED_MODULE_4__["RequestDataHeader"](this.LogicClient.options.endpointRef, this.LogicClient.options.protocol);
            request.origin = this.LogicClient.outputPort.connections[0];
            request.originID = this.LogicClient.originID;
            if (this.LogicClient.connectedId != null) {
                request.requestId = this.LogicClient.connectedId;
                request.header.stream = true;
            }
            else
                request.requestId = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_5__["UUID"])();
            let res = this.LogicClient.sendData(request);
            if (this.isReadOnly)
                this.cdRef.detectChanges();
            this.updateSelection();
            if (!(yield res)) {
                this.isAutomaticSending = false;
                this.canAutoSend = true;
                if (this.isReadOnly)
                    this.cdRef.detectChanges();
            }
        });
    }
    establishConnection() {
        if (this.LogicClient.isConnectedToEndpoint)
            return;
        this.LogicClient.isConnectedToEndpoint = true;
        let id = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_5__["UUID"])();
        let request = new src_models_RequestData__WEBPACK_IMPORTED_MODULE_4__["RequestData"]();
        request.header = new src_models_RequestData__WEBPACK_IMPORTED_MODULE_4__["RequestDataHeader"](this.LogicClient.options.endpointRef, this.LogicClient.options.protocol, true);
        request.origin = this.LogicClient.outputPort.connections[0];
        request.originID = this.LogicClient.originID;
        request.requestId = id;
        this.LogicClient.connectedId = id;
        this.LogicClient.sendData(request);
        this.updateSelection();
        if (this.isReadOnly)
            this.cdRef.detectChanges();
    }
    endConnection() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.LogicClient.isConnectedToEndpoint)
                return;
            let id = this.LogicClient.connectedId;
            if (id == null)
                return;
            let request = new src_models_RequestData__WEBPACK_IMPORTED_MODULE_4__["RequestData"]();
            request.header = new src_models_RequestData__WEBPACK_IMPORTED_MODULE_4__["RequestDataHeader"](this.LogicClient.options.endpointRef, this.LogicClient.options.protocol, false);
            request.origin = this.LogicClient.outputPort.connections[0];
            request.originID = this.LogicClient.originID;
            request.requestId = id;
            this.LogicClient.connectedId = null;
            this.canAutoSend = true;
            this.isAutomaticSending = false;
            yield this.LogicClient.sendData(request);
            this.LogicClient.isConnectedToEndpoint = false;
            this.updateSelection();
            if (this.isReadOnly)
                this.cdRef.detectChanges();
        });
    }
    static getColor() {
        let c = new src_models_Client__WEBPACK_IMPORTED_MODULE_1__["Client"]();
        return c.color;
    }
}
ClientComponent.ɵfac = function ClientComponent_Factory(t) { return ɵClientComponent_BaseFactory(t || ClientComponent); };
ClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["client"]], viewQuery: function ClientComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.endpointSelect = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.methodSelect = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 43, vars: 27, consts: [["anchorRef", ""], ["conn", ""], [1, "img-container", 3, "mousedown", "touchstart", "click"], ["src", "./assets/client.svg"], ["class", "read-only-controls", 3, "left", "top", 4, "ngIf"], [2, "display", "none"], ["options", ""], [1, "options-endpoint"], [1, "property-name", "endpoint-title"], [3, "Message"], [1, "endpoint-protocol"], ["appearance", "fill", 1, "endpoint-url"], [3, "ngModel", "selectionChange", "ngModelChange"], ["endpointSelect", ""], [3, "value", 4, "ngFor", "ngForOf"], ["emptyEndpoint", ""], ["appearance", "fill", 1, "endpoint-method", 2, "display", "flex"], ["methodSelect", ""], ["emptyMethod", ""], [1, "mt", 3, "Model", "Title", "Property", "AfterChange", "Tooltip"], ["actions", ""], [1, "options-actions"], [1, "actions-container"], [3, "click", 4, "ngIf"], [3, "disabled", "click"], [1, "options-button-icon", "inactive", "auto-send", 3, "click"], [1, "fas", "fa-sync-alt"], [1, "read-only-controls"], ["class", "icon", 3, "click", 4, "ngIf"], ["class", "bottom", 3, "click", 4, "ngIf"], [1, "icon", 3, "click"], ["src", "./assets/send.svg"], [3, "click"], [1, "bottom", 3, "click"], [3, "value"], ["value", "/", "disabled", ""], ["value", "/"], ["value", "GET", "disabled", ""], ["value", "GET"]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "template", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousedown", function ClientComponent_Template_div_mousedown_4_listener($event) { return ctx.handleMousedown($event); })("touchstart", function ClientComponent_Template_div_touchstart_4_listener($event) { return ctx.handleMousedown($event); })("click", function ClientComponent_Template_div_click_4_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ClientComponent_div_6_Template, 4, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Target Endpoint: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "info-tooltip", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function ClientComponent_Template_mat_select_selectionChange_20_listener() { return ctx.handleEndpointChange(); })("ngModelChange", function ClientComponent_Template_mat_select_ngModelChange_20_listener($event) { return ctx.LogicClient.options.endpointRef.endpoint = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, ClientComponent_mat_option_22_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ClientComponent_ng_template_23_Template, 3, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-select", 12, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function ClientComponent_Template_mat_select_selectionChange_26_listener() { return ctx.afterChange(); })("ngModelChange", function ClientComponent_Template_mat_select_ngModelChange_26_listener($event) { return ctx.LogicClient.options.endpointRef.method = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, ClientComponent_mat_option_28_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, ClientComponent_ng_template_29_Template, 3, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "slider-described", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, ClientComponent_button_36_Template, 2, 0, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, ClientComponent_button_37_Template, 2, 0, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientComponent_Template_button_click_39_listener() { return ctx.sendData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Send Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ClientComponent_Template_span_click_41_listener() { return ctx.toggleAutomaticSend(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("left", ctx.LogicClient.options.X, "px")("top", ctx.LogicClient.options.Y, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("side-menu", ctx.isReadOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isReadOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("Message", "The endpoint that data will be sent to using selected method.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Protocol[ctx.protocol]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.LogicClient.options.endpointRef.endpoint);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.availableEndpoints);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.LogicClient.options.endpointRef.method);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.availableMethods);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("Model", ctx.LogicClient)("Title", "Output rate")("Property", "outputRate")("AfterChange", ctx.afterChange)("Tooltip", "Change the speed at which data is sent.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.canEstablishConnection);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.canEndConnection);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.canSend);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.isAutomaticSending)("inactive", !ctx.isAutomaticSending)("disabled", !ctx.canSend);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_9__["InfoTooltipComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _Shared_slider_described_slider_described_component__WEBPACK_IMPORTED_MODULE_13__["SliderDescribedComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.options-endpoint[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  width: 100%;\n  gap: 0.3em;\n  margin-top: 0.3em;\n}\n\n.options-endpoint[_ngcontent-%COMP%]   .endpoint-url[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.options-endpoint[_ngcontent-%COMP%]   .endpoint-method[_ngcontent-%COMP%] {\n  flex-basis: 30%;\n  flex-shrink: 0;\n}\n\n.endpoint-protocol[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: right;\n}\n\n.endpoint-protocol[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  color: var(--main);\n}\n\n.actions-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 0.5em;\n}\n\n.actions-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.read-only-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  z-index: 1500;\n}\n\n.read-only-controls[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.read-only-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.2em 0.6em;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  border: 0;\n  opacity: 0;\n  font-size: 10px;\n  outline: none;\n  cursor: pointer;\n  transform: translate(-100%, 0);\n  background-color: var(--main);\n  color: var(--text);\n  transition: opacity 0.2s ease-in, background-color 0.2s ease-in-out;\n}\n\n.read-only-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.read-only-controls[_ngcontent-%COMP%]   button.icon[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translate(-90%, -10px);\n  border-radius: 50%;\n  padding-left: 6px;\n  width: 24px;\n  height: 24px;\n}\n\n.read-only-controls[_ngcontent-%COMP%]   button.bottom[_ngcontent-%COMP%] {\n  transform: translate(-25%, 40px);\n  position: absolute;\n}\n\n.read-only-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: var(--main);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NsaWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQUk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQUVSOztBQUFJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFFUjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUVKOztBQURJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUdSOztBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQUdKOztBQUZJO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBSVI7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZRO0VBQ0ksVUFBQTtBQUlaOztBQURJO0VBQ0ksb0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1FQUFBO0FBR1I7O0FBRlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUlaOztBQUZRO0VBQ0ksa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUlaOztBQUZRO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtBQUlaOztBQUZRO0VBQ0ksNkJBQUE7QUFJWiIsImZpbGUiOiJjbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vcHRpb25zLWVuZHBvaW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogMC4zZW07XG4gICAgbWFyZ2luLXRvcDogMC4zZW07XG4gICAgJiAuZW5kcG9pbnQtdXJse1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIH1cbiAgICAmIC5lbmRwb2ludC1tZXRob2R7XG4gICAgICAgIGZsZXgtYmFzaXM6IDMwJTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgfVxufVxuLmVuZHBvaW50LXByb3RvY29se1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAmIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMC41NXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLW1haW4pO1xuICAgIH1cbn1cbi5hY3Rpb25zLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBnYXA6IDAuNWVtO1xuICAgICYgYnV0dG9ue1xuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgfVxufVxuLnJlYWQtb25seS1jb250cm9sc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHotaW5kZXg6IDE1MDA7XG4gICAgJjpob3ZlcntcbiAgICAgICAgJiBidXR0b257XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgICYgYnV0dG9ue1xuICAgICAgICBwYWRkaW5nOiAwLjJlbSAwLjZlbTtcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICYgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgJi5pY29ue1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTkwJSwgLTEwcHgpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgICAgICAmLmJvdHRvbXtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNSUsIDQwcHgpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
const ɵClientComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](ClientComponent);


/***/ }),

/***/ "/Mf1":
/*!*******************************************************************!*\
  !*** ./src/app/board/components/textfield/textfield.component.ts ***!
  \*******************************************************************/
/*! exports provided: TextfieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextfieldComponent", function() { return TextfieldComponent; });
/* harmony import */ var src_models_TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/TextField */ "nVqF");
/* harmony import */ var _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/OperatorComponent */ "RW4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_resizable_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/resizable-textarea */ "91po");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");









const _c0 = ["field"];
function TextfieldComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class TextfieldComponent extends _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__["OperatorComponent"] {
    constructor() {
        super(...arguments);
        this.LogicTextField = new src_models_TextField__WEBPACK_IMPORTED_MODULE_0__["TextField"]();
    }
    ngAfterViewInit() {
        super.Init(false);
        this.field.nativeElement.addEventListener('keydown', function (e) {
            if (e.key == 'Tab') {
                e.preventDefault();
                var start = this.selectionStart;
                var end = this.selectionEnd;
                this.value = this.value.substring(0, start) +
                    "\t" + this.value.substring(end);
                this.selectionStart =
                    this.selectionEnd = start + 1;
            }
        });
        this.onViewInit.forEach(e => e());
        this.cdRef.detectChanges();
    }
    handleMousedown(event) {
        if (this.selectionService.currentSelections.indexOf(this) == -1)
            super.handleMousedown(event);
    }
    getLogicComponent() {
        return this.LogicTextField;
    }
    toggleBold() {
        this.LogicTextField.options.isBold = !this.LogicTextField.options.isBold;
    }
    toggleItalic() {
        this.LogicTextField.options.isItalic = !this.LogicTextField.options.isItalic;
    }
    resize(e) {
        this.LogicTextField.options.width = e.width;
        this.LogicTextField.options.height = e.height;
    }
}
TextfieldComponent.ɵfac = function TextfieldComponent_Factory(t) { return ɵTextfieldComponent_BaseFactory(t || TextfieldComponent); };
TextfieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TextfieldComponent, selectors: [["textfield"]], viewQuery: function TextfieldComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.field = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 41, vars: 43, consts: [[3, "mousedown", "touchstart", "click"], ["anchorRef", ""], ["spellcheck", "false", "maxlength", "250", 1, "img-container", 3, "ngModel", "ngModelChange", "resize"], ["field", ""], [2, "display", "none"], ["options", ""], [1, "property-name"], [1, "text-format-container"], ["appearance", "fill", 1, "endpoint-url"], [3, "ngModel", "selectionChange", "ngModelChange"], [3, "value"], ["emptyEndpoint", ""], [1, "options-button-icon", 3, "click"], [1, "fas", "fa-bold"], [1, "fas", "fa-italic"], [1, "text-format-contianer"], [3, "value", "cpPosition", "colorPicker", "colorPickerChange"], ["value", "/", "disabled", ""], ["value", "/"]], template: function TextfieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function TextfieldComponent_Template_div_mousedown_0_listener($event) { return ctx.handleMousedown($event); })("touchstart", function TextfieldComponent_Template_div_touchstart_0_listener($event) { return ctx.handleMousedown($event); })("click", function TextfieldComponent_Template_div_click_0_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "textarea", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TextfieldComponent_Template_textarea_ngModelChange_2_listener($event) { return ctx.LogicTextField.options.title = $event; })("resize", function TextfieldComponent_Template_textarea_resize_2_listener($event) { return ctx.resize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Font Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function TextfieldComponent_Template_mat_select_selectionChange_12_listener() { return ctx.afterChange(); })("ngModelChange", function TextfieldComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.LogicTextField.options.fontSize = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "8px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "10px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "12px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "14px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "16px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "18px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "20px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, TextfieldComponent_ng_template_27_Template, 3, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TextfieldComponent_Template_span_click_29_listener() { ctx.toggleBold(); return ctx.afterChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TextfieldComponent_Template_span_click_31_listener() { ctx.toggleItalic(); return ctx.afterChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("colorPickerChange", function TextfieldComponent_Template_input_colorPickerChange_36_listener($event) { return ctx.LogicTextField.options.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Background color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("colorPickerChange", function TextfieldComponent_Template_input_colorPickerChange_40_listener($event) { return ctx.LogicTextField.options.backgroundColor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx.LogicTextField.options.X, "px")("top", ctx.LogicTextField.options.Y, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-size", ctx.LogicTextField.options.fontSize + "px")("width", ctx.LogicTextField.options.width + "px")("height", ctx.LogicTextField.options.height + "px")("background-color", ctx.LogicTextField.options.backgroundColor)("color", ctx.LogicTextField.options.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bold", ctx.LogicTextField.options.isBold)("italic", ctx.LogicTextField.options.isItalic);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.LogicTextField.options.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.LogicTextField.options.fontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("inactive", !ctx.LogicTextField.options.isBold)("active", ctx.LogicTextField.options.isBold);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("inactive", !ctx.LogicTextField.options.isItalic)("active", ctx.LogicTextField.options.isItalic);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.LogicTextField.options.color)("cpPosition", "top-right")("colorPicker", ctx.LogicTextField.options.color)("cpPosition", "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.LogicTextField.options.backgroundColor)("cpPosition", "top-right")("colorPicker", ctx.LogicTextField.options.backgroundColor)("cpPosition", "top");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _shared_resizable_textarea__WEBPACK_IMPORTED_MODULE_4__["ResizableTextAreaDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerDirective"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.component[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  padding: 0;\n  border-radius: 0;\n  z-index: 0;\n}\n\n.component.read-only[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.component[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-family: Arial;\n  font-size: 12px;\n  max-width: 360px;\n  max-height: 200px;\n  height: 40px;\n  min-height: 20px;\n  outline: none;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  background-color: var(--background);\n  color: #fff;\n  padding: 0.2em;\n  cursor: move;\n  transition: background-color 0.1s linear;\n}\n\n.component[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar {\n  background-color: transparent;\n}\n\n.component[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  display: none;\n}\n\n.component[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  display: none;\n}\n\n.component[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #a1a1a1;\n  -moz-transition: transform 0.1s ease-out;\n  transition: transform 0.1s ease-out;\n}\n\n.component[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #a1a1a1;\n  -ms-transition: transform 0.1s ease-out;\n  transition: transform 0.1s ease-out;\n}\n\n.component[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #a1a1a1;\n  transition: transform 0.1s ease-out;\n}\n\n.component[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover {\n  background-color: var(--background-light);\n}\n\n.component[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover::-moz-placeholder {\n  transform: translateX(10px);\n}\n\n.component[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover:-ms-input-placeholder {\n  transform: translateX(10px);\n}\n\n.component[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover::placeholder {\n  transform: translateX(10px);\n}\n\n.component[_ngcontent-%COMP%]   textarea.italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.component[_ngcontent-%COMP%]   textarea.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.component.is-current-selection[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  cursor: text;\n}\n\n.text-format-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.35em;\n}\n\n.text-format-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.endpoint-protocol[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: right;\n}\n\n.endpoint-protocol[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.55rem;\n  color: var(--main);\n}\n\n.actions-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 0.5em;\n}\n\n.actions-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RleHRmaWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDUTtFQUNJLFlBQUE7QUFDWjs7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FBQVI7O0FBQ1E7RUFDSSw2QkFBQTtBQUNaOztBQUNRO0VBQ0ksYUFBQTtBQUNaOztBQUNRO0VBQ0ksYUFBQTtBQUNaOztBQUNRO0VBQ0ksY0FBQTtFQUNBLHdDQUFBO0VBQUEsbUNBQUE7QUFDWjs7QUFIUTtFQUNJLGNBQUE7RUFDQSx1Q0FBQTtFQUFBLG1DQUFBO0FBQ1o7O0FBSFE7RUFDSSxjQUFBO0VBQ0EsbUNBQUE7QUFDWjs7QUFDUTtFQUNJLHlDQUFBO0FBQ1o7O0FBQVk7RUFDSSwyQkFBQTtBQUVoQjs7QUFIWTtFQUNJLDJCQUFBO0FBRWhCOztBQUhZO0VBQ0ksMkJBQUE7QUFFaEI7O0FBQ1E7RUFDSSxrQkFBQTtBQUNaOztBQUNRO0VBQ0ksaUJBQUE7QUFDWjs7QUFHUTtFQUNJLFlBQUE7QUFEWjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBRko7O0FBR0k7RUFDSSxTQUFBO0FBRFI7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFFSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFBUjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUFBSjs7QUFDSTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQUNSIiwiZmlsZSI6InRleHRmaWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb21wb25lbnR7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB6LWluZGV4OiAwO1xuXG4gICAgJi5yZWFkLW9ubHl7XG4gICAgICAgICYgdGV4dGFyZWF7XG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJiB0ZXh0YXJlYXtcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1heC13aWR0aDogMzYwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAwLjJlbTtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgbGluZWFyO1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgJjo6cGxhY2Vob2xkZXJ7XG4gICAgICAgICAgICBjb2xvcjogI2ExYTFhMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2Utb3V0O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVye1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLml0YWxpY3tcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuICAgICAgICAmLmJvbGR7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmlzLWN1cnJlbnQtc2VsZWN0aW9ue1xuICAgICAgICAmIHRleHRhcmVhe1xuICAgICAgICAgICAgY3Vyc29yOiB0ZXh0OztcbiAgICAgICAgfVxuICAgIH1cbn1cbi50ZXh0LWZvcm1hdC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDAuMzVlbTtcbiAgICAmIHNwYW57XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG4uZW5kcG9pbnQtcHJvdG9jb2x7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICYgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAwLjU1cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbik7XG4gICAgfVxufVxuLmFjdGlvbnMtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGdhcDogMC41ZW07XG4gICAgJiBidXR0b257XG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICB9XG59XG4iXX0= */"] });
const ɵTextfieldComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TextfieldComponent);


/***/ }),

/***/ "/XK+":
/*!*******************************!*\
  !*** ./src/models/Options.ts ***!
  \*******************************/
/*! exports provided: Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
class Options {
    constructor() {
        this.title = "Component";
        this.X = 0;
        this.Y = 0;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/honzaap/School/MP/zdroj/src/main.ts */"zUnb");


/***/ }),

/***/ "1MSx":
/*!**********************************!*\
  !*** ./src/models/APIGateway.ts ***!
  \**********************************/
/*! exports provided: APIGateway, APIGatewayOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIGateway", function() { return APIGateway; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIGatewayOptions", function() { return APIGatewayOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _EndpointOperator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndpointOperator */ "7KcZ");
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Endpoint */ "CIzy");
/* harmony import */ var _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums/gRPCMode */ "KpZ9");
/* harmony import */ var _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enums/HTTPMethod */ "axtL");
/* harmony import */ var _enums_Protocol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums/Protocol */ "qEx5");
/* harmony import */ var _Port__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Port */ "WjXT");
/* harmony import */ var _RequestData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RequestData */ "LEJs");









class APIGateway extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_2__["EndpointOperator"] {
    constructor() {
        super();
        this.connectionTable = {};
        this.color = "#2C5364";
        this.inputPort = new _Port__WEBPACK_IMPORTED_MODULE_7__["Port"](this, false, true);
        this.outputPort = new _Port__WEBPACK_IMPORTED_MODULE_7__["Port"](this, true, true);
        this.options = new APIGatewayOptions();
        this.options.title = "API Gateway";
    }
    receiveData(data, fromOutput) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (fromOutput) {
                let targetConnection = this.connectionTable[data.responseId];
                if (targetConnection == null) // connection could be ended before last data was sent
                    return;
                // Checking if endpoint wasn't removed before stream end
                this.fireReceiveData(data);
                if (data.header.stream) {
                    let hasAction = false;
                    this.getEndpoints().forEach(endpoint => {
                        endpoint.actions.forEach(action => {
                            if (action.endpoint.url === data.header.endpoint.endpoint.url &&
                                Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["arrayEquals"])(action.endpoint.supportedMethods, data.header.endpoint.endpoint.supportedMethods)) {
                                hasAction = true;
                            }
                        });
                    });
                    if (!hasAction) { // send end of stream to out if the action no longer exists
                        data.header.stream = false;
                        data.requestId = data.responseId;
                        data.responseId = null;
                        let result = this.outputPort.sendData(data, data.origin);
                        if (result)
                            this.connectionTable[data.responseId] = null;
                        return;
                    }
                    let result = yield this.inputPort.sendData(data, this.connectionTable[data.responseId]);
                    if (!result && data.header.stream) { // send end stream to out if the client doesn't exist 
                        data.header.stream = false;
                        data.requestId = data.responseId;
                        data.responseId = null;
                        let res = this.outputPort.sendData(data, data.origin);
                        if (res)
                            this.connectionTable[data.responseId] = null;
                    }
                }
                else {
                    if (data.header.endpoint.endpoint.protocol == _enums_Protocol__WEBPACK_IMPORTED_MODULE_6__["Protocol"].WebSockets || data.header.endpoint.endpoint.grpcMode == _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_4__["gRPCMode"]["Bidirectional Streaming"] || data.header.endpoint.endpoint.grpcMode == _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_4__["gRPCMode"]["Server Streaming"])
                        yield this.inputPort.sendData(data, this.connectionTable[data.responseId]);
                }
            }
            else {
                if (data.requestId == "" || data.requestId == null)
                    throw new Error("Request ID can not be null");
                if (data.header.endpoint == null)
                    throw new Error("Endpoint can not be null");
                let targetEndpoint = this.getTargetEndpoint(data);
                if (targetEndpoint == null)
                    return;
                this.fireReceiveData(data);
                let sendResponse = false;
                let isFirstStreamRequest = this.connectionTable[data.requestId] == null && data.header.stream;
                let isLastStreamRequest = this.connectionTable[data.requestId] != null && !data.header.stream;
                let dontSendRequestResponse = (isFirstStreamRequest || isLastStreamRequest);
                // Send data to every action 
                for (let action of targetEndpoint.actions) {
                    // Get connection to given action endpoint
                    if (action.endpoint == null || action.endpoint.url == null)
                        continue;
                    let targetConnection;
                    for (let connection of this.outputPort.connections) {
                        let endpoints = connection.getOtherPort(this.outputPort).parent.getAvailableEndpoints();
                        if (endpoints.find(endpoint => endpoint.url == action.endpoint.url && Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["arrayEquals"])(endpoint.supportedMethods, action.endpoint.supportedMethods)) != null) {
                            targetConnection = connection;
                            break;
                        }
                    }
                    if (targetConnection == null)
                        continue;
                    let isStream = action.endpoint.protocol == _enums_Protocol__WEBPACK_IMPORTED_MODULE_6__["Protocol"].WebSockets || action.endpoint.grpcMode != _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_4__["gRPCMode"].Unary;
                    if (data.header.stream && isStream && action.endpoint.grpcMode == _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_4__["gRPCMode"]["Server Streaming"]
                        && !dontSendRequestResponse || dontSendRequestResponse && !isStream) {
                        continue;
                    }
                    let requestId = (isStream && !data.header.stream && !isLastStreamRequest) ? Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["UUID"])() : data.requestId;
                    let request = new _RequestData__WEBPACK_IMPORTED_MODULE_8__["RequestData"]();
                    let epRef = new _Endpoint__WEBPACK_IMPORTED_MODULE_3__["EndpointRef"]();
                    epRef.endpoint = action.endpoint;
                    epRef.method = _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_5__["EndpointActionHTTPMethod"][action.method] == "Inherit" ? data.header.endpoint.method : _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_5__["HTTPMethod"][_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_5__["EndpointActionHTTPMethod"][action.method]];
                    request.header = new _RequestData__WEBPACK_IMPORTED_MODULE_8__["RequestDataHeader"](epRef, action.endpoint.protocol, data.header.stream);
                    request.origin = targetConnection;
                    request.originID = this.originID;
                    request.requestId = requestId;
                    if (isStream)
                        this.outputPort.sendData(request, targetConnection);
                    else {
                        if (!data.header.stream)
                            sendResponse = true;
                        if (action.asynchronous) {
                            this.outputPort.sendData(request, targetConnection);
                        }
                        else {
                            yield this.outputPort.sendData(request, targetConnection);
                            if (data.sendResponse)
                                this.connectionTable[requestId] = data.origin;
                        }
                    }
                }
                if (isFirstStreamRequest)
                    this.connectionTable[data.requestId] = data.origin;
                if (targetEndpoint.grpcMode == _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_4__["gRPCMode"]["Server Streaming"]) {
                    if (isFirstStreamRequest) {
                        // Initiate server stream 
                        this.serverStream(this.getResponse(data), targetEndpoint);
                        // this.serverStream(data, targetEndpoint);
                    }
                    if (isLastStreamRequest)
                        this.connectionTable[data.requestId] = null;
                }
                if ((sendResponse || targetEndpoint.actions.length == 0 && !data.header.stream) && data.sendResponse) {
                    // Send response back
                    this.connectionTable[data.requestId] = data.origin;
                    yield this.sendData(this.getResponse(data));
                }
            }
        });
    }
    sendData(response, clear = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let targetConnection = this.connectionTable[response.responseId];
            if (targetConnection == null)
                return;
            let result = yield this.inputPort.sendData(response, targetConnection);
            if (!result && response.header.stream) {
                response.header.stream = false;
                response.requestId = response.responseId;
                response.responseId = null;
                let res = this.outputPort.sendData(response, response.origin);
                if (res) {
                    console.log("clear 1");
                    this.connectionTable[response.responseId] = null;
                }
            }
            else if (clear) {
                this.connectionTable[response.responseId] = null;
            }
        });
    }
    serverStream(data, streamingEndpoint) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["sleep"])(700);
            console.log(data.responseId);
            console.log(data.requestId);
            console.log("----");
            if (streamingEndpoint.actions.filter(action => action.endpoint.grpcMode != _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_4__["gRPCMode"]["Server Streaming"]).length == 0
                || this.connectionTable[data.responseId] == null
                || (streamingEndpoint.grpcMode != _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_4__["gRPCMode"]["Server Streaming"])
                || this.getEndpoints().indexOf(streamingEndpoint) == -1)
                return;
            for (let action of streamingEndpoint.actions) {
                // Get connection to given action endpoint
                if (action.endpoint == null || action.endpoint.url == null || action.endpoint.grpcMode != _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_4__["gRPCMode"].Unary || action.endpoint.protocol == _enums_Protocol__WEBPACK_IMPORTED_MODULE_6__["Protocol"].WebSockets)
                    continue;
                let targetConnection;
                for (let connection of this.outputPort.connections) {
                    let endpoints = connection.getOtherPort(this.outputPort).parent.getAvailableEndpoints();
                    if (endpoints.find(endpoint => endpoint.url == action.endpoint.url && Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["arrayEquals"])(endpoint.supportedMethods, action.endpoint.supportedMethods)) != null) {
                        targetConnection = connection;
                        break;
                    }
                }
                if (targetConnection == null)
                    continue;
                let newReqId = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["UUID"])();
                this.connectionTable[newReqId] = data.origin;
                let request = new _RequestData__WEBPACK_IMPORTED_MODULE_8__["RequestData"]();
                let epRef = new _Endpoint__WEBPACK_IMPORTED_MODULE_3__["EndpointRef"]();
                epRef.endpoint = action.endpoint;
                epRef.method = _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_5__["EndpointActionHTTPMethod"][action.method] == "Inherit" ? data.header.endpoint.method : _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_5__["HTTPMethod"][_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_5__["EndpointActionHTTPMethod"][action.method]];
                request.header = new _RequestData__WEBPACK_IMPORTED_MODULE_8__["RequestDataHeader"](epRef, action.endpoint.protocol);
                request.origin = targetConnection;
                request.originID = this.originID;
                request.requestId = newReqId;
                yield this.outputPort.sendData(request, targetConnection);
            }
            yield this.sendData(data, false);
            yield this.serverStream(data, streamingEndpoint);
        });
    }
    getEndpoints() {
        return this.options.restEndpoints
            .concat(this.options.rpcEndpoints)
            .concat(this.options.grpcEndpoints)
            .concat(this.options.graphqlEndpoints)
            .concat(this.options.websocketsEndpoints);
    }
}
class APIGatewayOptions extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_2__["EndpointOptions"] {
    constructor() {
        super(...arguments);
        this.restEndpoints = [];
        this.rpcEndpoints = [];
        this.graphqlEndpoints = [];
        this.grpcEndpoints = [];
        this.websocketsEndpoints = [];
    }
}


/***/ }),

/***/ "38ki":
/*!***********************************!*\
  !*** ./src/app/export.service.ts ***!
  \***********************************/
/*! exports provided: ExportService, ExportPngOptions, ExportSvgOptions, EmbedIFrameOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportService", function() { return ExportService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportPngOptions", function() { return ExportPngOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportSvgOptions", function() { return ExportSvgOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbedIFrameOptions", function() { return EmbedIFrameOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_models_APIGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/APIGateway */ "1MSx");
/* harmony import */ var src_models_ClientCluster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/ClientCluster */ "MhgW");
/* harmony import */ var src_models_MessageQueue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/MessageQueue */ "PsCE");
/* harmony import */ var src_models_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/TextField */ "nVqF");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _placing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./placing.service */ "epgU");
/* harmony import */ var _saving_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./saving.service */ "Wbgk");









class ExportService {
    constructor(placingService, savingService) {
        this.placingService = placingService;
        this.savingService = savingService;
        this.svgns = "http://www.w3.org/2000/svg";
        this.getBase64FromUrl = (url) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield fetch(url);
            const blob = yield data.blob();
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onloadend = () => {
                    const base64data = reader.result;
                    resolve(base64data);
                };
            });
        });
    }
    getComponentSize(component) {
        if (component instanceof src_models_TextField__WEBPACK_IMPORTED_MODULE_4__["TextField"])
            return { width: component.options.width, height: component.options.height };
        return { width: component instanceof src_models_MessageQueue__WEBPACK_IMPORTED_MODULE_3__["MessageQueue"] ? 80 : 40, height: component instanceof src_models_APIGateway__WEBPACK_IMPORTED_MODULE_1__["APIGateway"] || component instanceof src_models_ClientCluster__WEBPACK_IMPORTED_MODULE_2__["ClientCluster"] ? 80 : 40 };
    }
    getCanvas(components, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let canvas = document.createElement("canvas");
            canvas.width = this.placingService.boardWidth;
            canvas.height = this.placingService.boardHeight;
            let offsetX = 0;
            let offsetY = 0;
            if (options.captureUsed) { // Crop the board
                let { minX, minY, maxX, maxY } = this.captureUsedArea(components);
                offsetX = Math.max(0, minX - 40);
                offsetY = Math.max(0, minY - 40);
                canvas.width = Math.min(this.placingService.boardWidth, maxX + 40 - offsetX);
                canvas.height = Math.min(this.placingService.boardHeight, maxY + 40 - offsetY);
            }
            let ctx = canvas.getContext("2d");
            if (!options.transparentBackground) {
                ctx.fillStyle = options.lightMode ? "#fff" : "#282A37";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            for (let component of components) {
                // Render component
                ctx.beginPath();
                ctx.fillStyle = component.color;
                let { width, height } = this.getComponentSize(component);
                // Render image
                if (component instanceof src_models_TextField__WEBPACK_IMPORTED_MODULE_4__["TextField"]) {
                    ctx.fillStyle = component.options.backgroundColor;
                    ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
                    ctx.lineWidth = 2;
                    ctx.rect(component.options.X - offsetX, component.options.Y - offsetY, component.options.width, component.options.height);
                    ctx.fill();
                    ctx.stroke();
                    ctx.fillStyle = component.options.color;
                    ctx.font = `${component.options.isBold ? "bold" : ""}  ${component.options.isItalic ? "italic" : ""} ${component.options.fontSize}px Arial`;
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'alphabetic';
                    this.wrapCanvasText(ctx, component.options.title, component.options.X - offsetX + 3, component.options.Y - offsetY + component.options.fontSize + 3, component.options.width - 6, component.options.height - 6, component.options.fontSize + 3);
                }
                else {
                    this.roundRect(ctx, component.options.X - offsetX, component.options.Y - offsetY, width, height, 5);
                    let img = new Image();
                    yield new Promise(r => { img.onload = r; img.src = `./assets/${this.savingService.getComponentType(component).toLowerCase()}.svg`; });
                    ctx.drawImage(img, component.options.X - offsetX + width / 2 - 20 + 7, component.options.Y - offsetY + height / 2 - 20 + 7, 26, 26);
                    if (options.showTitles)
                        this.renderComponentTitleToCanvas(ctx, component, options.transparentBackground ? options.lightTitles : !options.lightMode, offsetX, offsetY);
                }
                ctx.fillStyle = options.lightMode ? "#fff" : "#282A37";
                ctx.lineWidth = 2;
                if (component["inputPort"]) {
                    // Render connections
                    this.renderConnectionsToCanvas(ctx, options.transparentBackground ? options.lightTitles : !options.lightMode, component, offsetX, offsetY);
                }
            }
            ctx.fillStyle = "#282A37";
            this.renderPortsToCanvas(ctx, components, offsetX, offsetY, options.lightMode);
            return canvas;
        });
    }
    wrapCanvasText(context, text, x, y, maxWidth, maxHeight, lineHeight) {
        let line = '';
        let height = lineHeight;
        for (let letter of text) {
            var newLine = line + letter;
            var metrics = context.measureText(newLine);
            var newWidth = metrics.width;
            if (newWidth > maxWidth) {
                context.fillText(line, x, y);
                line = letter;
                y += lineHeight;
                height += lineHeight;
                if (height >= maxHeight) {
                    return;
                }
            }
            else {
                line = newLine;
            }
        }
        context.fillText(line, x, y);
    }
    renderPortsToCanvas(ctx, components, offsetX, offsetY, lightMode) {
        if (lightMode) {
            ctx.fillStyle = "#fff";
        }
        for (let component of components) { // Render ports (render them over connections)
            ctx.strokeStyle = component.color;
            ctx.lineWidth = 2;
            let { width, height } = this.getComponentSize(component);
            if (component["inputPort"] && component["inputPort"].connections.length > 0) { // Render input port
                ctx.beginPath();
                ctx.arc(component.options.X - offsetX - 12, component.options.Y - offsetY + height / 2, 7.5, 0, 2 * Math.PI, false);
                ctx.fill();
                ctx.stroke();
            }
            if (component["outputPort"] && component["outputPort"].connections.length > 0) { // Render output port
                ctx.beginPath();
                ctx.arc(component.options.X - offsetX + width + 12, component.options.Y - offsetY + height / 2, 7.5, 0, 2 * Math.PI, false);
                ctx.fill();
                ctx.stroke();
            }
        }
    }
    renderConnectionsToCanvas(ctx, lightMode, component, offsetX, offsetY) {
        for (let connection of component["inputPort"].connections) {
            let { width, height } = this.getComponentSize(component);
            let component2 = connection.getOtherPort(component["inputPort"]).parent;
            let size2 = this.getComponentSize(component2);
            var grad = ctx.createLinearGradient(component.options.X - offsetX, component.options.Y - offsetY, component2.options.X - offsetX + size2.width, component2.options.Y - offsetY + size2.height);
            grad.addColorStop(0, component.color);
            grad.addColorStop(1, component2.color);
            ctx.strokeStyle = grad;
            let comp2 = connection.getOtherPort(component["inputPort"]).parent;
            let comp2Size = this.getComponentSize(comp2);
            let comp2Width = comp2Size.width;
            let comp2Height = comp2Size.height;
            if (connection.lineBreaks == null || connection.lineBreaks.length == 0) {
                ctx.beginPath();
                ctx.moveTo(component.options.X - offsetX - 12, component.options.Y - offsetY + height / 2);
                ctx.lineTo(comp2.options.X - offsetX + comp2Width + 12, comp2.options.Y - offsetY + comp2Height / 2);
                ctx.stroke();
                ctx.closePath();
            }
            else {
                ctx.beginPath();
                ctx.moveTo(connection.lineBreaks[0].x - offsetX, connection.lineBreaks[0].y - offsetY);
                ctx.closePath();
                for (let lineBreak of connection.lineBreaks) {
                    ctx.lineTo(lineBreak.x - offsetX, lineBreak.y - offsetY);
                    ctx.stroke();
                }
            }
            if (connection.lineBreaks && connection.title) {
                // Draw text along the path
                ctx.font = "12px Arial";
                ctx.textBaseline = "bottom";
                ctx.strokeStyle = "transparent";
                ctx.fillStyle = lightMode ? "#dadada" : "#454545";
                let lineBreaks = [];
                connection.lineBreaks.forEach(br => { lineBreaks.push(...[br.x - offsetX, br.y - offsetY]); });
                ctx.textPath(connection.title || "", lineBreaks);
            }
        }
    }
    renderComponentTitleToCanvas(ctx, component, lightMode, offsetX, offsetY) {
        let { width, height } = this.getComponentSize(component);
        ctx.fillStyle = lightMode ? "#c9c9c9" : "#454545";
        ctx.setLineDash([0]);
        ctx.font = 'normal 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';
        ctx.fillText(component.options.title, component.options.X - offsetX + width / 2, component.options.Y - offsetY - 10);
    }
    wrapSvgText(svg, text, color, x, y, maxWidth, maxHeight, lineHeight, fontSize, isBold = false, isItalic = false) {
        let line = '';
        let height = lineHeight;
        for (let letter of text) {
            var newLine = line + letter;
            let newSvgLine = this.createSvgText(newLine, color, x, y, fontSize, isBold, isItalic);
            svg.appendChild(newSvgLine);
            let newWidth = newSvgLine.getComputedTextLength();
            svg.removeChild(newSvgLine);
            if (newWidth > maxWidth) {
                let newText = this.createSvgText(line, color, x, y, fontSize, isBold, isItalic);
                svg.appendChild(newText);
                line = letter;
                y += lineHeight;
                height += lineHeight;
                if (height >= maxHeight) {
                    return;
                }
            }
            else {
                line = newLine;
            }
        }
        let newText = this.createSvgText(line, color, x, y, fontSize, isBold, isItalic);
        svg.appendChild(newText);
    }
    createSvgText(text, color, x, y, fontSize, isBold = false, isItalic = false) {
        let textSvg = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textSvg.setAttributeNS(null, "x", (x).toString());
        textSvg.setAttributeNS(null, "y", (y).toString());
        textSvg.setAttributeNS(null, "font-size", `${fontSize}px`);
        textSvg.setAttributeNS(null, "font-family", 'Arial');
        textSvg.setAttributeNS(null, "font-weight", `${isBold ? "bold" : "normal"}`);
        textSvg.setAttributeNS(null, "font-style", `${isItalic ? "italic" : "normal"}`);
        textSvg.setAttributeNS(null, "fill", color);
        textSvg.textContent = text;
        return textSvg;
    }
    /**
     * Returns minimal and maximal x and y coordinates of the given components
     */
    captureUsedArea(components) {
        let minX = Number.MAX_VALUE;
        let minY = Number.MAX_VALUE;
        let maxX = 0;
        let maxY = 0;
        for (let component of components) {
            let width;
            let height;
            if (component instanceof src_models_TextField__WEBPACK_IMPORTED_MODULE_4__["TextField"]) {
                width = component.options.width;
                height = component.options.height;
            }
            else {
                let sizes = this.getComponentSize(component);
                width = sizes.width;
                height = sizes.height;
            }
            let outputPort = component["outputPort"];
            if (outputPort) {
                let connections = outputPort.connections;
                connections.forEach(connection => {
                    connection.lineBreaks.forEach(lineBreak => {
                        minX = Math.min(minX, lineBreak.x);
                        minY = Math.min(minY, lineBreak.y);
                        maxX = Math.max(maxX, lineBreak.x);
                        maxY = Math.max(maxY, lineBreak.y);
                    });
                });
            }
            minX = Math.min(minX, component.options.X);
            minY = Math.min(minY, component.options.Y);
            maxX = Math.max(maxX, component.options.X + width);
            maxY = Math.max(maxY, component.options.Y + height);
        }
        return { minX, minY, maxX, maxY };
    }
    getSvg(components, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (components.length == 0)
                return null;
            let svg = document.createElementNS(this.svgns, "svg");
            document.getElementsByTagName("body")[0].appendChild(svg);
            let offsetX = 0;
            let offsetY = 0;
            // Crop the board
            let { minX, minY, maxX, maxY } = this.captureUsedArea(components);
            offsetX = Math.max(0, minX - 40);
            offsetY = Math.max(0, minY - 40);
            svg.setAttribute("width", `${Math.min(this.placingService.boardWidth, maxX + 40 - offsetX)}`);
            svg.setAttribute("height", `${Math.min(this.placingService.boardHeight, maxY + 40 - offsetY)}`);
            for (let component of components) {
                let { width, height } = this.getComponentSize(component);
                // Render image
                if (component instanceof src_models_TextField__WEBPACK_IMPORTED_MODULE_4__["TextField"]) {
                    let rect = document.createElementNS(this.svgns, 'rect');
                    rect.setAttributeNS(null, 'x', (component.options.X - offsetX).toString());
                    rect.setAttributeNS(null, 'y', (component.options.Y - offsetY).toString());
                    rect.setAttributeNS(null, 'width', component.options.width.toString());
                    rect.setAttributeNS(null, 'height', component.options.height.toString());
                    rect.setAttributeNS(null, 'fill', component.options.backgroundColor);
                    rect.setAttributeNS(null, 'stroke-width', '2');
                    rect.setAttributeNS(null, 'stroke', "rgba(0, 0, 0, 0.1)");
                    svg.appendChild(rect);
                    this.wrapSvgText(svg, component.options.title, component.options.color, component.options.X - offsetX + 3, component.options.Y - offsetY + component.options.fontSize + 3, component.options.width - 6, component.options.height - 6, component.options.fontSize, component.options.fontSize, component.options.isBold, component.options.isItalic);
                }
                else {
                    let rect = document.createElementNS(this.svgns, 'rect');
                    rect.setAttributeNS(null, 'x', (component.options.X - offsetX).toString());
                    rect.setAttributeNS(null, 'y', (component.options.Y - offsetY).toString());
                    rect.setAttributeNS(null, 'rx', "3");
                    rect.setAttributeNS(null, 'ry', "3");
                    rect.setAttributeNS(null, 'width', width.toString());
                    rect.setAttributeNS(null, 'height', height.toString());
                    rect.setAttributeNS(null, 'fill', component.color);
                    svg.appendChild(rect);
                    let img = document.createElementNS(this.svgns, 'image');
                    img.setAttributeNS(null, 'height', '26');
                    img.setAttributeNS(null, 'width', '26');
                    //img.setAttributeNS('http://www.w3.org/1999/xlink','href', `http://localhost:4200/assets/${this.savingService.getComponentType(component).toLowerCase()}.svg`);
                    const encoded = yield this.getBase64FromUrl(`https://janpane019.github.io/mp2023/assets/${this.savingService.getComponentType(component).toLowerCase()}.svg`);
                    img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', encoded.toString());
                    img.setAttributeNS(null, 'x', (component.options.X - offsetX + width / 2 - 20 + 7).toString());
                    img.setAttributeNS(null, 'y', (component.options.Y - offsetY + height / 2 - 20 + 7).toString());
                    img.setAttributeNS(null, 'visibility', 'visible');
                    svg.appendChild(img);
                    if (options.showTitles)
                        this.renderComponentTitleToSvg(svg, component, options.lightTitles, offsetX, offsetY);
                }
                if (component["inputPort"]) {
                    this.renderConnectionsToSvg(svg, component, options.lightTitles, offsetX, offsetY);
                }
            }
            this.renderPortsToSvg(svg, components, options.lightTitles, offsetX, offsetY);
            return svg;
        });
    }
    renderPortsToSvg(svg, components, lightMode, offsetX, offsetY) {
        for (let component of components) { // Render ports (render then over connections)
            let { width, height } = this.getComponentSize(component);
            if (component["inputPort"] && component["inputPort"].connections.length > 0) { // Render input port
                let port = document.createElementNS(this.svgns, "circle");
                port.setAttribute("cx", (component.options.X - offsetX - 12).toString());
                port.setAttribute("cy", (component.options.Y - offsetY + height / 2).toString());
                port.setAttribute("r", "7.5");
                port.setAttribute("fill", "#fff");
                port.setAttribute("stroke", component.color);
                port.setAttribute("stroke-width", "2");
                svg.appendChild(port);
            }
            if (component["outputPort"] && component["outputPort"].connections.length > 0) { // Render output port
                let port = document.createElementNS(this.svgns, "circle");
                port.setAttribute("cx", (component.options.X - offsetX + width + 12).toString());
                port.setAttribute("cy", (component.options.Y - offsetY + height / 2).toString());
                port.setAttribute("r", "7.5");
                port.setAttribute("fill", "#fff");
                port.setAttribute("stroke", component.color);
                port.setAttribute("stroke-width", "2");
                svg.appendChild(port);
            }
        }
    }
    renderConnectionsToSvg(svg, component, lightMode, offsetX, offsetY) {
        // Render connections
        for (let connection of component["inputPort"].connections) {
            var newLine = document.createElementNS(this.svgns, 'path');
            let grad = document.createElementNS(this.svgns, "linearGradient");
            let stop1 = document.createElementNS(this.svgns, "stop");
            let stop2 = document.createElementNS(this.svgns, "stop");
            let id = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_5__["UUID"])().slice(0, 6);
            grad.id = id;
            newLine.id = `con-${id}`;
            grad.setAttribute("x1", "0");
            grad.setAttribute("y1", "0");
            grad.setAttribute("x2", "100%");
            grad.setAttribute("y2", "0");
            stop1.setAttribute("offset", "0%");
            stop2.setAttribute("offset", "100%");
            stop1.setAttribute("stop-color", connection.getOtherPort(component["inputPort"]).parent.color);
            stop2.setAttribute("stop-color", component.color);
            let line = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_5__["createRoundedPath"])(connection.lineBreaks.map(br => { return { x: br.x - offsetX, y: br.y - offsetY }; }), 10, false);
            newLine.setAttribute("d", line);
            newLine.setAttribute("stroke", `url(#${id})`);
            newLine.setAttribute("fill", "transparent");
            newLine.setAttribute("stroke-width", "2");
            grad.appendChild(stop1);
            grad.appendChild(stop2);
            svg.appendChild(grad);
            svg.appendChild(newLine);
            if (connection.lineBreaks && connection.title) {
                let text = document.createElementNS(this.svgns, "text");
                let textPath = document.createElementNS(this.svgns, "textPath");
                text.setAttribute("text-anchor", "middle");
                text.setAttribute("fill", lightMode ? "#dadada" : "454545");
                text.setAttribute("font-size", "12px");
                text.setAttribute("font-family", "Arial");
                textPath.setAttribute("startOffset", "50%");
                textPath.setAttribute("href", `#con-${id}`);
                textPath.setAttribute("dominant-baseline", "text-after-edge");
                textPath.textContent = connection.title;
                text.appendChild(textPath);
                svg.appendChild(text);
            }
        }
    }
    renderComponentTitleToSvg(svg, component, lightMode, offsetX, offsetY) {
        let { width, height } = this.getComponentSize(component);
        let newText = this.createSvgText(component.options.title, lightMode ? "#fff" : "#000", component.options.X - offsetX + width / 2, component.options.Y - offsetY - 10, 12);
        newText.setAttributeNS(null, "text-anchor", 'middle');
        newText.setAttributeNS(null, "fill", lightMode ? "#c9c9c9" : "#454545");
        svg.appendChild(newText);
    }
    roundRect(ctx, x, y, width, height, radius = 5) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        ctx.fill();
    }
}
ExportService.ɵfac = function ExportService_Factory(t) { return new (t || ExportService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_placing_service__WEBPACK_IMPORTED_MODULE_7__["PlacingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_saving_service__WEBPACK_IMPORTED_MODULE_8__["SavingService"])); };
ExportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ExportService, factory: ExportService.ɵfac, providedIn: 'root' });
class ExportPngOptions {
    constructor() {
        /**
         * Capture only used part of board instead of the whole board
         */
        this.captureUsed = false;
        this.transparentBackground = false;
        this.showTitles = true;
        this.lightTitles = true;
        this.lightMode = false;
    }
}
class ExportSvgOptions {
    constructor() {
        this.showTitles = true;
        this.lightTitles = true;
    }
}
class EmbedIFrameOptions {
    constructor() {
        this.showTitles = true;
        this.darkMode = false;
    }
}


/***/ }),

/***/ "42aj":
/*!*********************************************!*\
  !*** ./src/shared/DelayedHoverDirective.ts ***!
  \*********************************************/
/*! exports provided: DelayedHoverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayedHoverDirective", function() { return DelayedHoverDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-take-until-destroy */ "DnKK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class DelayedHoverDirective {
    constructor(element) {
        this.element = element;
        this.delay = "1500";
        this.hoverEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        const hide$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element.nativeElement, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_ => false));
        const show$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element.nativeElement, 'mouseenter').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_ => true));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(hide$, show$)
            .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(show => {
            if (!show) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(parseInt(this.delay)));
        }))
            .subscribe(show => {
            if (show) {
                this.hoverEvent.emit();
            }
        });
    }
    ngOnDestroy() { }
}
DelayedHoverDirective.ɵfac = function DelayedHoverDirective_Factory(t) { return new (t || DelayedHoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DelayedHoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DelayedHoverDirective, selectors: [["", "delayed-hover", ""]], inputs: { delay: "delay" }, outputs: { hoverEvent: "delayed-hover" } });


/***/ }),

/***/ "7KcZ":
/*!****************************************!*\
  !*** ./src/models/EndpointOperator.ts ***!
  \****************************************/
/*! exports provided: EndpointOperator, EndpointOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointOperator", function() { return EndpointOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointOptions", function() { return EndpointOptions; });
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _enums_HTTPStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums/HTTPStatus */ "WIHy");
/* harmony import */ var _LogicComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LogicComponent */ "dxLX");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Options */ "/XK+");
/* harmony import */ var _RequestData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RequestData */ "LEJs");





class EndpointOperator extends _LogicComponent__WEBPACK_IMPORTED_MODULE_2__["LogicComponent"] {
    constructor() {
        super();
        this.requestCount = 0;
    }
    getConnectableEndpoints() {
        let connectableEndpoints = [];
        for (let connection of this.outputPort.connections) {
            connection.getOtherPort(this.outputPort).parent.getAvailableEndpoints().forEach(endpoint => {
                let duplicate = (connectableEndpoints.find(ep => ep.url === endpoint.url) != null);
                if (!duplicate)
                    connectableEndpoints.push(endpoint);
            });
        }
        return connectableEndpoints;
    }
    getTargetEndpoint(data) {
        // Checking for 404 and 405
        let hasEndpoint = false;
        let notAllowed = false;
        let targetEndpoint;
        let targetUrl = data.header.endpoint.endpoint.url;
        this.getEndpoints().filter(endpoint => endpoint.url == targetUrl).forEach(endpoint => {
            hasEndpoint = true;
            if (endpoint.supportedMethods.indexOf(data.header.endpoint.method) == -1)
                notAllowed = true;
            else {
                // Found wanted endpoint
                notAllowed = false;
                targetEndpoint = endpoint;
                return;
            }
        });
        if (!hasEndpoint) {
            this.fireShowStatusCode(_enums_HTTPStatus__WEBPACK_IMPORTED_MODULE_1__["HTTPStatus"]["Not Found"]);
            return null;
        }
        if (notAllowed) {
            this.fireShowStatusCode(_enums_HTTPStatus__WEBPACK_IMPORTED_MODULE_1__["HTTPStatus"]["Method Not Allowed"]);
            return null;
        }
        return targetEndpoint;
    }
    /**
     * Gets response to given request
     * @param request request the response belongs to
     */
    getResponse(request) {
        let response = new _RequestData__WEBPACK_IMPORTED_MODULE_4__["RequestData"]();
        response.header = new _RequestData__WEBPACK_IMPORTED_MODULE_4__["RequestDataHeader"](request.header.endpoint, request.header.protocol, request.header.stream);
        response.origin = request.origin;
        response.originID = this.originID;
        response.requestId = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_0__["UUID"])();
        response.responseId = request.requestId;
        return response;
    }
    getEndpoints() {
        return this.options.endpoints;
    }
    getAvailableEndpoints() {
        return this.getEndpoints();
    }
}
class EndpointOptions extends _Options__WEBPACK_IMPORTED_MODULE_3__["Options"] {
    constructor() {
        super(...arguments);
        this.endpoints = [];
    }
}


/***/ }),

/***/ "8D7W":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class PagesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(); };
PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 2, vars: 0, consts: [[1, "page"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".page[_ngcontent-%COMP%] {\n  background-color: var(--background-light);\n  color: #fefefe;\n  overflow-y: scroll;\n  height: 100vh;\n  max-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSiIsImZpbGUiOiJwYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xuICAgIGNvbG9yOiAjZmVmZWZlO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"] });


/***/ }),

/***/ "8NQF":
/*!**********************************************************************************!*\
  !*** ./src/app/board/tutorials/tutorial-controls/tutorial-controls.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TutorialSlide, TutorialControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialSlide", function() { return TutorialSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialControlsComponent", function() { return TutorialControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TutorialControlsComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 19);
} }
function TutorialControlsComponent_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 20);
} }
function TutorialControlsComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialControlsComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TutorialControlsComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialControlsComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TutorialControlsComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialControlsComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TutorialSlide {
    constructor(image, title, text) {
        this.image = image;
        this.title = title;
        this.text = text;
    }
}
class TutorialControlsComponent {
    constructor() {
        this.closeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.slides = [];
        this.isMinimized = false;
        this.currentSlideIndex = 0;
        this.slides.push(new TutorialSlide("gifs/tutorial0.gif", "Introduction tutorial", "This quick tutorial will take you through the basics of this design tool."));
        this.slides.push(new TutorialSlide("gifs/tutorial1.gif", "Moving the board", "To move the board, you can use right or middle mouse button. To zoom in or out, use the mouse wheel."));
        this.slides.push(new TutorialSlide("gifs/tutorial2.gif", "Create components ", "To create a component, simply drag & drop the component from the component menu."));
        this.slides.push(new TutorialSlide("gifs/tutorial3.gif", "Move components", "To move a component on the board, simply click on the component and hold, then move it with mouse."));
        this.slides.push(new TutorialSlide("gifs/tutorial4.gif", "Copy and paste components", "Copy and paste can be done by selecting component and using keyboard shortcuts, or by using top menu copy/paste buttons."));
        this.slides.push(new TutorialSlide("gifs/tutorial5.gif", "Remove components", 'Removing components can be done by selecting component and pressing the [del] button, or by using top menu remove button.'));
        this.slides.push(new TutorialSlide("gifs/tutorial8.gif", "Select multiple components", 'To select multiple components, use the left mouse button and select some components. You can then do any action you would do with a single component.'));
        this.slides.push(new TutorialSlide("gifs/tutorial6.gif", "Connecting components", 'To connect components together, click and hold on a port of component, then drag the connection to the second component port and release.'));
        this.slides.push(new TutorialSlide("gifs/tutorial9.gif", "Connection line breaking", 'You can change the shape of connection by hovering over it, and then clicking and dragging the dots.'));
        this.slides.push(new TutorialSlide("gifs/tutorial10.gif", "Connection titles", 'You can add captions to connection that are displayed in the center of the connection.'));
        this.slides.push(new TutorialSlide("gifs/tutorial7.gif", "Changing properties", 'Properties of component can be altered by selecting the component, and accessing the "Properties" section in the options side menu.'));
        this.currentSlide = this.slides[0];
    }
    ngOnInit() {
    }
    close() {
        this.closeMenu.emit();
    }
    toggleMinimize() {
        this.isMinimized = !this.isMinimized;
    }
    previous() {
        this.currentSlideIndex--;
        this.currentSlide = this.slides[this.currentSlideIndex];
    }
    next() {
        this.currentSlideIndex++;
        this.currentSlide = this.slides[this.currentSlideIndex];
    }
}
TutorialControlsComponent.ɵfac = function TutorialControlsComponent_Factory(t) { return new (t || TutorialControlsComponent)(); };
TutorialControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TutorialControlsComponent, selectors: [["tutorial-controls"]], outputs: { closeMenu: "closeMenu" }, decls: 23, vars: 13, consts: [[1, "window"], [1, "progress"], [1, "progress-bar"], [1, "progress-text"], [1, "window-controls"], [1, "close", 3, "click"], [1, "fas", "fa-times"], [1, "min", 3, "click"], ["class", "fas fa-minus", 4, "ngIf"], ["class", "fas fa-chevron-up", 4, "ngIf"], [1, "content"], [1, "image"], [3, "src"], [1, "title"], [1, "line"], [1, "text"], [1, "controls"], ["class", "prev", 3, "click", 4, "ngIf"], ["class", "next", 3, "click", 4, "ngIf"], [1, "fas", "fa-minus"], [1, "fas", "fa-chevron-up"], [1, "prev", 3, "click"], [1, "next", 3, "click"]], template: function TutorialControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialControlsComponent_Template_button_click_6_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialControlsComponent_Template_button_click_8_listener() { return ctx.toggleMinimize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TutorialControlsComponent_i_9_Template, 1, 0, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TutorialControlsComponent_i_10_Template, 1, 0, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TutorialControlsComponent_button_20_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TutorialControlsComponent_button_21_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TutorialControlsComponent_button_22_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("minimized", ctx.isMinimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", (ctx.currentSlideIndex + 1) / ctx.slides.length * 100 + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentSlideIndex + 1 + "/" + ctx.slides.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMinimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMinimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/", ctx.currentSlide.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentSlide.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentSlide.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSlideIndex > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSlideIndex < ctx.slides.length - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSlideIndex == ctx.slides.length - 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".window[_ngcontent-%COMP%] {\n  height: 20.5rem;\n  width: 19rem;\n  border: 0.1rem solid var(--border);\n  background-color: var(--background-dark);\n  color: var(--text);\n  position: relative;\n  font-size: 0.8em;\n  z-index: 1000;\n  display: flex;\n  flex-flow: column nowrap;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  transition: bottom 0.2s ease-in-out;\n}\n.window[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 1rem;\n  background-color: #959595;\n  top: -1.5rem;\n  left: 15%;\n  right: 15%;\n  text-align: center;\n  color: var(--background);\n  font-weight: bold;\n}\n.window[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: var(--main);\n  position: absolute;\n}\n.window[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n.window[_ngcontent-%COMP%]   .window-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: -1.7rem;\n  transition: top 0.5s ease-in-out, right 0.5s ease-in-out;\n}\n.window[_ngcontent-%COMP%]   .window-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  height: 1.2rem;\n  outline: none;\n  border: 0;\n  display: block;\n  cursor: pointer;\n}\n.window[_ngcontent-%COMP%]   .window-controls[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%] {\n  background-color: var(--main);\n  color: #fff;\n}\n.window[_ngcontent-%COMP%]   .window-controls[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.25);\n}\n.window[_ngcontent-%COMP%]   .window-controls[_ngcontent-%COMP%]   button.min[_ngcontent-%COMP%] {\n  background-color: var(--main);\n  filter: saturate(0.3);\n  color: #fff;\n}\n.window[_ngcontent-%COMP%]   .window-controls[_ngcontent-%COMP%]   button.min[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.8);\n}\n.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: var(--text);\n  font-weight: 600;\n  text-align: center;\n  margin-top: 0.4em;\n}\n.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0.4em auto 0.8em;\n  border-color: var(--text);\n}\n.window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding: 0 0.8em 1em;\n}\n.window[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: auto;\n  padding: 0.5em;\n}\n.window[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  outline: none;\n  border: 0;\n  cursor: pointer;\n  padding: 0.5em;\n  width: 120px;\n}\n.window[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-right: auto;\n  background-color: var(--main);\n  filter: saturate(0.4);\n}\n.window[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.1);\n  background-color: var(--main);\n  color: #fff;\n}\n.window[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: auto;\n  background-color: var(--main);\n}\n.window[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.25);\n}\n.window.minimized[_ngcontent-%COMP%] {\n  bottom: -395px;\n}\n.window.minimized[_ngcontent-%COMP%]   .window-controls[_ngcontent-%COMP%] {\n  top: -1.6rem;\n  right: 0;\n}\n.window.minimized[_ngcontent-%COMP%]   .window-controls[_ngcontent-%COMP%]   .min[_ngcontent-%COMP%] {\n  transform: translate(100%, -100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3R1dG9yaWFsLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQUVSO0FBRFE7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUdaO0FBRFE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBR1o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSx3REFBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFHWjtBQUZZO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0FBSWhCO0FBSGdCO0VBQ0ksd0JBQUE7QUFLcEI7QUFGWTtFQUNJLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBSWhCO0FBSGdCO0VBQ0ksdUJBQUE7QUFLcEI7QUFDUTtFQUNJLFdBQUE7QUFDWjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNaO0FBQ1E7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQUNaO0FBQ1E7RUFDSSxvQkFBQTtBQUNaO0FBRUk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQVI7QUFDUTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQ1o7QUFDUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFDWjtBQUFZO0VBQ0ksdUJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFFaEI7QUFDUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBQ1o7QUFBWTtFQUNJLHdCQUFBO0FBRWhCO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFDUTtFQUNJLFlBQUE7RUFDQSxRQUFBO0FBQ1o7QUFBWTtFQUNJLGlDQUFBO0FBRWhCIiwiZmlsZSI6InR1dG9yaWFsLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpbmRvd3tcbiAgICBoZWlnaHQ6IDIwLjVyZW07XG4gICAgd2lkdGg6IDE5cmVtO1xuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICYgLnByb2dyZXNze1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk1OTU5NTtcbiAgICAgICAgdG9wOiAtMS41cmVtO1xuICAgICAgICBsZWZ0OiAxNSU7XG4gICAgICAgIHJpZ2h0OiAxNSU7IFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICYgLnByb2dyZXNzLWJhcntcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgICYgLnByb2dyZXNzLXRleHR7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJiAud2luZG93LWNvbnRyb2xze1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IC0xLjdyZW07XG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjVzIGVhc2UtaW4tb3V0LCByaWdodCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAmIGJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxLjJyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgICAgIFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgJi5jbG9zZXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5taW57XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgwLjMpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmIC5jb250ZW50e1xuICAgICAgICAmIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgICYgLnRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjRlbTtcbiAgICAgICAgfVxuICAgICAgICAmIC5saW5le1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMC40ZW0gYXV0byAwLjhlbTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHR7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAuOGVtIDFlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmIC5jb250cm9sc3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICAgICYgPiBidXR0b257XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJiAucHJldntcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XG4gICAgICAgICAgICBmaWx0ZXI6IHNhdHVyYXRlKDAuNCk7XG4gICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYgLm5leHR7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XG4gICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjI1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLm1pbmltaXplZHtcbiAgICAgICAgYm90dG9tOiAtMzk1cHg7XG4gICAgICAgICYgLndpbmRvdy1jb250cm9sc3tcbiAgICAgICAgICAgIHRvcDogLTEuNnJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgJiAubWlue1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC0xMDAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "91po":
/*!******************************************!*\
  !*** ./src/shared/resizable-textarea.ts ***!
  \******************************************/
/*! exports provided: ResizableTextAreaDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableTextAreaDirective", function() { return ResizableTextAreaDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ResizableTextAreaDirective {
    constructor(renderer) {
        this.renderer = renderer;
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onMouseDown(el) {
        this.width = el.offsetWidth;
        this.height = el.offsetHeight;
        this.mouseMoveListener = this.renderer.listen('document', 'mousemove', () => {
            if (this.width !== el.offsetWidth || this.height !== el.offsetHeight) {
                this.resize.emit({ width: el.offsetWidth, height: el.offsetHeight });
            }
        });
    }
    onMouseUp(el) {
        this.ngOnDestroy();
    }
    ngOnDestroy() {
        if (this.mouseMoveListener) {
            this.mouseMoveListener();
        }
    }
}
ResizableTextAreaDirective.ɵfac = function ResizableTextAreaDirective_Factory(t) { return new (t || ResizableTextAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ResizableTextAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ResizableTextAreaDirective, selectors: [["textarea", "resize", ""]], hostBindings: function ResizableTextAreaDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ResizableTextAreaDirective_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event.target); })("mouseup", function ResizableTextAreaDirective_mouseup_HostBindingHandler() { return ctx.onMouseUp(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, outputs: { resize: "resize" } });


/***/ }),

/***/ "9Ctj":
/*!*******************************************************!*\
  !*** ./src/app/board/components/cdn/cdn.component.ts ***!
  \*******************************************************/
/*! exports provided: CDNComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDNComponent", function() { return CDNComponent; });
/* harmony import */ var src_models_CDN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/CDN */ "wKdh");
/* harmony import */ var _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/OperatorComponent */ "RW4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Shared_endpoint_select_endpoint_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/endpoint-select/endpoint-select.component */ "acqn");




class CDNComponent extends _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__["OperatorComponent"] {
    constructor() {
        super(...arguments);
        this.LogicCDN = new src_models_CDN__WEBPACK_IMPORTED_MODULE_0__["CDN"]();
    }
    getLogicComponent() {
        return this.LogicCDN;
    }
    static getColor() {
        let c = new src_models_CDN__WEBPACK_IMPORTED_MODULE_0__["CDN"]();
        return c.color;
    }
}
CDNComponent.ɵfac = function CDNComponent_Factory(t) { return ɵCDNComponent_BaseFactory(t || CDNComponent); };
CDNComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CDNComponent, selectors: [["cdn"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 10, consts: [["anchorRef", ""], ["conn", ""], [1, "img-container", 3, "mousedown", "touchstart", "click"], ["src", "./assets/cdn.svg"], [2, "display", "none"], ["options", ""], [3, "Model", "Type", "Multiple", "HasActions", "ModifiableMethods", "AfterChange"]], template: function CDNComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "template", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function CDNComponent_Template_div_mousedown_4_listener($event) { return ctx.handleMousedown($event); })("touchstart", function CDNComponent_Template_div_touchstart_4_listener($event) { return ctx.handleMousedown($event); })("click", function CDNComponent_Template_div_click_4_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "endpoint-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx.LogicCDN.options.X, "px")("top", ctx.LogicCDN.options.Y, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Model", ctx.LogicCDN)("Type", ctx.APIType.REST)("Multiple", false)("HasActions", false)("ModifiableMethods", false)("AfterChange", ctx.afterChange);
    } }, directives: [_Shared_endpoint_select_endpoint_select_component__WEBPACK_IMPORTED_MODULE_3__["EndpointSelectComponent"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Nkbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoiY2RuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"] });
const ɵCDNComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](CDNComponent);


/***/ }),

/***/ "9kwT":
/*!*********************************************************************!*\
  !*** ./src/app/board/components/apigateway/apigateway.component.ts ***!
  \*********************************************************************/
/*! exports provided: ApiGatewayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiGatewayComponent", function() { return ApiGatewayComponent; });
/* harmony import */ var src_models_APIGateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/APIGateway */ "1MSx");
/* harmony import */ var _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/OperatorComponent */ "RW4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Shared_endpoint_select_endpoint_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/endpoint-select/endpoint-select.component */ "acqn");




class ApiGatewayComponent extends _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__["OperatorComponent"] {
    constructor() {
        super(...arguments);
        this.LogicApiGateway = new src_models_APIGateway__WEBPACK_IMPORTED_MODULE_0__["APIGateway"]();
    }
    handleClick(event) {
        super.handleClick(event);
        this.updateSelection();
    }
    updateSelection() {
        this.connectableEndpoints = this.LogicApiGateway.getConnectableEndpoints();
        let endpoints = this.LogicApiGateway.getEndpoints();
        for (let j = 0; j < endpoints.length; j++) {
            let endpoint = endpoints[j];
            for (let i = 0; i < endpoint.actions.length; i++) {
                let action = endpoint.actions[i];
                let currEdp = action.endpoint;
                let currMth = action.method;
                endpoints[j].actions[i].endpoint = null;
                if (this.connectableEndpoints.length == 0) {
                    this.connectableEndpoints = [];
                    endpoint.actions = [];
                    return;
                }
                if (currEdp != null && currMth != null) {
                    for (let e of this.connectableEndpoints) { // need this workaround to keep values in material select....
                        if (e.url == currEdp.url)
                            endpoints[j].actions[i].endpoint = e;
                    }
                    endpoint.actions[i].method = currMth;
                }
                else
                    endpoint.actions.splice(i, 1);
            }
        }
    }
    getLogicComponent() {
        return this.LogicApiGateway;
    }
    static getColor() {
        let c = new src_models_APIGateway__WEBPACK_IMPORTED_MODULE_0__["APIGateway"]();
        return c.color;
    }
}
ApiGatewayComponent.ɵfac = function ApiGatewayComponent_Factory(t) { return ɵApiGatewayComponent_BaseFactory(t || ApiGatewayComponent); };
ApiGatewayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ApiGatewayComponent, selectors: [["apigateway"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 44, consts: [["anchorRef", ""], ["conn", ""], [1, "img-container", 3, "mousedown", "touchstart", "click"], ["src", "./assets/apigateway.svg"], [2, "display", "none"], ["options", ""], [1, "endpoint-select-container"], [3, "Model", "Type", "Property", "Title", "AfterChange", "HasStreamActions", "ConnectableEndpoints", "ShowCounter"], [3, "Model", "Property", "Type", "Title", "AfterChange", "HasStreamActions", "ConnectableEndpoints", "ShowCounter"]], template: function ApiGatewayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "template", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ApiGatewayComponent_Template_div_mousedown_4_listener($event) { return ctx.handleMousedown($event); })("touchstart", function ApiGatewayComponent_Template_div_touchstart_4_listener($event) { return ctx.handleMousedown($event); })("click", function ApiGatewayComponent_Template_div_click_4_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "endpoint-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "endpoint-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "endpoint-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "endpoint-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "endpoint-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx.LogicApiGateway.options.X, "px")("top", ctx.LogicApiGateway.options.Y, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Model", ctx.LogicApiGateway)("Type", ctx.APIType.REST)("Property", "restEndpoints")("Title", "Endpoints (REST):")("AfterChange", ctx.afterChange)("HasStreamActions", true)("ConnectableEndpoints", ctx.connectableEndpoints)("ShowCounter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Model", ctx.LogicApiGateway)("Type", ctx.APIType.RPC)("Property", "rpcEndpoints")("Title", "Endpoints (RPC):")("AfterChange", ctx.afterChange)("HasStreamActions", true)("ConnectableEndpoints", ctx.connectableEndpoints)("ShowCounter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Model", ctx.LogicApiGateway)("Type", ctx.APIType.gRPC)("Property", "grpcEndpoints")("Title", "Endpoints (gRPC):")("AfterChange", ctx.afterChange)("HasStreamActions", true)("ConnectableEndpoints", ctx.connectableEndpoints)("ShowCounter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Model", ctx.LogicApiGateway)("Type", ctx.APIType.GraphQL)("Property", "graphqlEndpoints")("Title", "Endpoints (GraphQL):")("AfterChange", ctx.afterChange)("HasStreamActions", true)("ConnectableEndpoints", ctx.connectableEndpoints)("ShowCounter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Model", ctx.LogicApiGateway)("Property", "websocketsEndpoints")("Type", ctx.APIType.WebSockets)("Title", "Endpoints (WebSockets):")("AfterChange", ctx.afterChange)("HasStreamActions", true)("ConnectableEndpoints", ctx.connectableEndpoints)("ShowCounter", true);
    } }, directives: [_Shared_endpoint_select_endpoint_select_component__WEBPACK_IMPORTED_MODULE_3__["EndpointSelectComponent"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.component[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\n.endpoint-select-container[_ngcontent-%COMP%] {\n  padding: 0.15em;\n  margin-top: 0.55em;\n  background-color: rgba(0, 0, 0, 0.15);\n}\n\n.property-name[_ngcontent-%COMP%] {\n  font-size: 1em !important;\n}\n\n.options-endpoint-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: stretch;\n  height: 2em;\n}\n\n.options-endpoint-inputs[_ngcontent-%COMP%]   .endpoint-url[_ngcontent-%COMP%] {\n  height: 100%;\n  flex-grow: 1;\n  padding: 0;\n}\n\n.options-endpoint-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 0.1em;\n}\n\n.options-endpoint-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n}\n\n.options-endpoint-action[_ngcontent-%COMP%]   .action-endpoint[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.options-endpoint-action[_ngcontent-%COMP%]   .action-method[_ngcontent-%COMP%] {\n  flex-basis: 35%;\n  flex-shrink: 0;\n}\n\n.options-endpoint-action[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  flex-basis: 10%;\n  flex-shrink: 0;\n  align-self: center;\n}\n\n.options-endpoint-actions-container[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\n\n.options-endpoint-actions-container[_ngcontent-%COMP%]   .property-name[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n\n.options-endpoints-top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n}\n\n.options-endpoints-top[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  gap: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaWdhdGV3YXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFJSjs7QUFISTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUtSOztBQUZBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQUtKOztBQUhBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FBTUo7O0FBTEk7RUFDSSxZQUFBO0FBT1I7O0FBTEk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQU9SOztBQUxJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQU9SOztBQUpBO0VBQ0ksZ0JBQUE7QUFPSjs7QUFOSTtFQUNJLGdCQUFBO0FBUVI7O0FBTEE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQVFKOztBQVBJO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQVNSIiwiZmlsZSI6ImFwaWdhdGV3YXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29tcG9uZW50e1xuICAgIGhlaWdodDogODBweDtcbn1cblxuLmVuZHBvaW50LXNlbGVjdC1jb250YWluZXJ7XG4gICAgcGFkZGluZzogMC4xNWVtO1xuICAgIG1hcmdpbi10b3A6IDAuNTVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMTUpO1xufVxuLnByb3BlcnR5LW5hbWV7XG4gICAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbn1cbi5vcHRpb25zLWVuZHBvaW50LWlucHV0c3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICAmIC5lbmRwb2ludC11cmx7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cbi5vcHRpb25zLWVuZHBvaW50LWFjdGlvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgZ2FwOiAwLjFlbTtcbn1cbi5vcHRpb25zLWVuZHBvaW50LWFjdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAmIC5hY3Rpb24tZW5kcG9pbnR7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG4gICAgJiAuYWN0aW9uLW1ldGhvZHtcbiAgICAgICAgZmxleC1iYXNpczogMzUlO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICB9XG4gICAgJiAuYnV0dG9uLWljb257XG4gICAgICAgIGZsZXgtYmFzaXM6IDEwJTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG59XG4ub3B0aW9ucy1lbmRwb2ludC1hY3Rpb25zLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgICYgLnByb3BlcnR5LW5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxufVxuLm9wdGlvbnMtZW5kcG9pbnRzLXRvcHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgJiA+IGRpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICBnYXA6IDAuNWVtO1xuICAgIH1cbn0iXX0= */"] });
const ɵApiGatewayComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ApiGatewayComponent);


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bly8":
/*!************************************************!*\
  !*** ./src/models/enums/BalancingAlgorithm.ts ***!
  \************************************************/
/*! exports provided: BalancingAlgorithm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalancingAlgorithm", function() { return BalancingAlgorithm; });
var BalancingAlgorithm;
(function (BalancingAlgorithm) {
    BalancingAlgorithm[BalancingAlgorithm["Round Robin"] = 0] = "Round Robin";
    BalancingAlgorithm[BalancingAlgorithm["IP Hash"] = 1] = "IP Hash";
    BalancingAlgorithm[BalancingAlgorithm["Least Connections"] = 2] = "Least Connections";
    BalancingAlgorithm[BalancingAlgorithm["URL Hash"] = 3] = "URL Hash";
})(BalancingAlgorithm || (BalancingAlgorithm = {}));


/***/ }),

/***/ "CIzy":
/*!********************************!*\
  !*** ./src/models/Endpoint.ts ***!
  \********************************/
/*! exports provided: Endpoint, EndpointRef, EndpointAction, DatabaseEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Endpoint", function() { return Endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointRef", function() { return EndpointRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointAction", function() { return EndpointAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseEndpoint", function() { return DatabaseEndpoint; });
/* harmony import */ var _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums/gRPCMode */ "KpZ9");
/* harmony import */ var _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums/HTTPMethod */ "axtL");
/* harmony import */ var _enums_Protocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums/Protocol */ "qEx5");



class Endpoint {
    constructor(url, supportedMethods = []) {
        this.supportedMethods = [];
        this.protocol = _enums_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].HTTP;
        this.actions = [];
        this.grpcMode = _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_0__["gRPCMode"].Unary;
        this.url = url;
        this.supportedMethods = supportedMethods;
    }
}
class EndpointRef {
    constructor() {
        this.method = _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_1__["HTTPMethod"].GET;
    }
}
class EndpointAction {
    constructor() {
        this.method = _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_1__["EndpointActionHTTPMethod"].Inherit;
        this.asynchronous = false;
    }
}
class DatabaseEndpoint extends Endpoint {
    constructor(url) {
        super(url, [_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_1__["HTTPMethod"].GET, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_1__["HTTPMethod"].POST, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_1__["HTTPMethod"].PUT, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_1__["HTTPMethod"].DELETE]);
        this.actions = null;
        this.grpcMode = _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_0__["gRPCMode"].Unary;
        this.protocol = _enums_Protocol__WEBPACK_IMPORTED_MODULE_2__["Protocol"].Database;
    }
}


/***/ }),

/***/ "CV3C":
/*!**************************************************!*\
  !*** ./src/shared/vue-event-modifiers.plugin.ts ***!
  \**************************************************/
/*! exports provided: VueEventModifiersPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueEventModifiersPlugin", function() { return VueEventModifiersPlugin; });
// I provide support for DOM event-modifiers that are inspired by Vue.js. These allow
// for events to be qualified with the following suffixes:
// --
// - .stop
// - .prevent
// - .capture
// - .self
// - .once
// - .passive
// --
class VueEventModifiersPlugin {
    // I initialize the event plug-in.
    constructor() {
        this.supportsPassive = this.detectPassiveSupport();
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I bind the given event handler to the given element. Returns a function that
    // tears-down the event binding.
    addEventListener(element, higherOrderEventName, handler) {
        var eventConfig = this.parseHigherOrderEventName(higherOrderEventName);
        return (this.setupEventBinding(element, eventConfig, handler));
    }
    // I bind the given event handler to the given global element selector. Returns a
    // function that tears-down the event binding.
    addGlobalEventListener(higherOrderElement, higherOrderEventName, handler) {
        var target = this.parseHigherOrderElement(higherOrderElement);
        var eventConfig = this.parseHigherOrderEventName(higherOrderEventName);
        return (this.setupEventBinding(target, eventConfig, handler));
    }
    // I determine if the given event name is supported by this plug-in. For each event
    // binding, the plug-ins are tested in the reverse order of the EVENT_MANAGER_PLUGINS
    // multi-collection. Angular will use the first plug-in that supports the event.
    supports(eventName) {
        var eventPattern = /^[a-z]+(?:\.(?:stop|prevent|capture|self|once|passive))+$/;
        return (eventPattern.test(eventName));
    }
    // ---
    // PRIVATE METHODS.
    // ---
    // I determine if the current environment supports Passive event handlers.
    detectPassiveSupport() {
        var support = false;
        // This approach is more-or-less taken from the Mozilla Developer Network:
        // --
        // READ MORE: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
        try {
            var handler = function () { };
            var options = {
                get passive() {
                    return (support = true);
                }
            };
            window.addEventListener("test", handler, options);
            window.removeEventListener("test", handler, options);
        }
        catch (error) {
            // ...
        }
        return (support);
    }
    // I parse the "higher order" element selector into an actual browser DOM reference.
    parseHigherOrderElement(selector) {
        switch (selector) {
            case "window":
                return (window);
                break;
            case "document":
                return (document);
                break;
            case "body":
                return (document.body);
                break;
            default:
                throw (new Error(`Element selector [${selector}] not supported.`));
                break;
        }
    }
    // I parse the "higher order" event name into the event configuration that will be
    // used to bind the underlying event handler.
    parseHigherOrderEventName(eventName) {
        var parts = eventName.split(".");
        var config = {
            name: parts.shift(),
            isStop: false,
            isPrevent: false,
            isCapture: false,
            isSelf: false,
            isOnce: false,
            isPassive: false
        };
        // While this is different in Vue.js, we're not going to care about the order in
        // which the event modifiers are defined. Each modifier will just act as an
        // independent flag to be consumed when configuring the subsequent event-handler.
        while (parts.length) {
            switch (parts.shift()) {
                case "stop":
                    config.isStop = true;
                    break;
                case "prevent":
                    config.isPrevent = true;
                    break;
                case "capture":
                    config.isCapture = true;
                    break;
                case "self":
                    config.isSelf = true;
                    break;
                case "once":
                    config.isOnce = true;
                    break;
                case "passive":
                    config.isPassive = true;
                    break;
                default:
                    throw (new Error(`Event config [${eventName}] not supported.`));
                    break;
            }
        }
        return (config);
    }
    // I bind the given event handler to the given event target using the given event
    // configuration. I can be used for both local and global targets. Returns a function
    // that tears-down the event binding.
    setupEventBinding(target, eventConfig, handler) {
        var options = eventConfig.isCapture;
        // If the event requires a "passive" modifier, then we have to change the way
        // that we define the event-phase. Passive mode requires an EventListerOptions
        // object that is only supported in some browsers.
        if (this.supportsPassive && eventConfig.isPassive) {
            options = {
                passive: true,
                capture: eventConfig.isCapture
            };
        }
        // NOTE: We are remaining inside the Angular Zone (if it is loaded).
        addProxyFunction();
        return (removeProxyFunction);
        // -- Hoisted Functions -- //
        function addProxyFunction() {
            target.addEventListener(eventConfig.name, proxyFunction, options);
        }
        function removeProxyFunction() {
            target.removeEventListener(eventConfig.name, proxyFunction, options);
        }
        function proxyFunction(event) {
            // NOTE: If the target is not Self, the handler won't be called. But, a
            // change-digest will still be triggered. This is because we're not bothering
            // to bind the handler outside of the Angular Zone (since most cases will be
            // a one-to-one mapping of event-to-handler invocation).
            if (eventConfig.isSelf && (event.target !== target)) {
                return;
            }
            // If the handler is only intended to be invoked once, let's unbind before
            // we call the underlying handler.
            if (eventConfig.isOnce) {
                removeProxyFunction();
            }
            if (eventConfig.isStop) {
                event.stopPropagation();
            }
            if (eventConfig.isPrevent) {
                event.preventDefault();
            }
            handler(event);
        }
    }
}


/***/ }),

/***/ "Cf/E":
/*!***********************************************!*\
  !*** ./src/models/enums/ReplacementPolicy.ts ***!
  \***********************************************/
/*! exports provided: ReplacementPolicy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacementPolicy", function() { return ReplacementPolicy; });
var ReplacementPolicy;
(function (ReplacementPolicy) {
    ReplacementPolicy[ReplacementPolicy["Least Recently Used"] = 0] = "Least Recently Used";
    ReplacementPolicy[ReplacementPolicy["Least Frequently Used"] = 1] = "Least Frequently Used";
    ReplacementPolicy[ReplacementPolicy["First in First out"] = 2] = "First in First out";
    ReplacementPolicy[ReplacementPolicy["First in Last out"] = 3] = "First in Last out";
})(ReplacementPolicy || (ReplacementPolicy = {}));


/***/ }),

/***/ "FtUi":
/*!********************************!*\
  !*** ./src/models/Database.ts ***!
  \********************************/
/*! exports provided: Database, DatabaseOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Database", function() { return Database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseOptions", function() { return DatabaseOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _EndpointOperator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndpointOperator */ "7KcZ");
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Endpoint */ "CIzy");
/* harmony import */ var _enums_Protocol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums/Protocol */ "qEx5");
/* harmony import */ var _Port__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Port */ "WjXT");
/* harmony import */ var _RequestData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RequestData */ "LEJs");
/* harmony import */ var _Shared_EventDispatcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Shared/EventDispatcher */ "GLam");








class Database extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_2__["EndpointOperator"] {
    constructor() {
        super();
        this.connectionTable = {};
        this.color = "#E94057";
        this.removeShardDispatcher = new _Shared_EventDispatcher__WEBPACK_IMPORTED_MODULE_7__["EventDispatcher"]();
        this.inputPort = new _Port__WEBPACK_IMPORTED_MODULE_5__["Port"](this, false, true);
        this.outputPort = null; //new Port(this,true,true);      
        this.options = new DatabaseOptions();
        this.options.title = "Database";
        this.options.endpoints = [
            new _Endpoint__WEBPACK_IMPORTED_MODULE_3__["DatabaseEndpoint"]("/database")
        ];
    }
    receiveData(request, fromOutput = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (fromOutput)
                return;
            let targetEndpoint = this.getTargetEndpoint(request);
            if (targetEndpoint == null)
                return;
            this.fireReceiveData(request);
            if (this.options.isMasterShard) {
                let length = this.outputPort.connections.length;
                if (length == 0)
                    this.options.isMasterShard = false;
                else {
                    let shardRequest = new _RequestData__WEBPACK_IMPORTED_MODULE_6__["RequestData"]();
                    let conn = this.outputPort.connections[Math.round(Math.random() * (length - 1))]; // Select random shard to send data to 
                    let epRef = new _Endpoint__WEBPACK_IMPORTED_MODULE_3__["EndpointRef"]();
                    epRef.method = request.header.endpoint.method;
                    epRef.endpoint = new _Endpoint__WEBPACK_IMPORTED_MODULE_3__["DatabaseEndpoint"]("/shard");
                    shardRequest.header = new _RequestData__WEBPACK_IMPORTED_MODULE_6__["RequestDataHeader"](epRef, _enums_Protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].HTTP);
                    shardRequest.origin = conn;
                    shardRequest.originID = this.originID;
                    shardRequest.requestId = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["UUID"])();
                    this.connectionTable[shardRequest.requestId] = shardRequest.origin;
                    yield this.outputPort.sendData(shardRequest, conn);
                }
            }
            this.connectionTable[request.requestId] = request.origin;
            // Send response back
            if (request.sendResponse)
                yield this.sendData(this.getResponse(request));
        });
    }
    onConnectionUpdate(wasOutput = false) {
        if (wasOutput && this.outputPort != null && this.outputPort.connections.length == 0) {
            this.options.isMasterShard = false;
            this.outputPort = null;
            this.fireRemoveShard({});
        }
    }
    sendData(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let targetConnection = this.connectionTable[response.responseId];
            if (targetConnection == null)
                throw new Error("Target connection can not be null");
            this.connectionTable[response.responseId] = null; // reset request id
            yield this.inputPort.sendData(response, targetConnection);
        });
    }
    canConnectTo(port, connectingWithOutput) {
        if (!super.canConnectTo(port, connectingWithOutput))
            return false;
        // Output of database can connect only to database shard of the same type
        if (!connectingWithOutput)
            return true;
        if (port.parent instanceof Database && this.options.isMasterShard && port.parent.options.isShard && port.parent.options.type == this.options.type)
            return true;
        this.fireFailedConnect({ message: "Output of a Database can only be connected to database shard of same type." });
        return false;
    }
    onRemoveShard(handler) {
        this.removeShardDispatcher.register(handler);
    }
    fireRemoveShard(event) {
        this.removeShardDispatcher.fire(event);
    }
}
class DatabaseOptions extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_2__["EndpointOptions"] {
}


/***/ }),

/***/ "G1KI":
/*!*************************************!*\
  !*** ./src/models/enums/APIType.ts ***!
  \*************************************/
/*! exports provided: APIType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIType", function() { return APIType; });
var APIType;
(function (APIType) {
    APIType[APIType["REST"] = 0] = "REST";
    APIType[APIType["GraphQL"] = 1] = "GraphQL";
    APIType[APIType["RPC"] = 2] = "RPC";
    APIType[APIType["gRPC"] = 3] = "gRPC";
    APIType[APIType["WebSockets"] = 4] = "WebSockets";
})(APIType || (APIType = {}));


/***/ }),

/***/ "GLam":
/*!**********************************************!*\
  !*** ./src/models/Shared/EventDispatcher.ts ***!
  \**********************************************/
/*! exports provided: EventDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return EventDispatcher; });
class EventDispatcher {
    constructor() {
        this.handlers = [];
    }
    fire(event) {
        for (let h of this.handlers)
            h(event);
    }
    register(handler) {
        this.handlers.push(handler);
    }
}


/***/ }),

/***/ "Hmdo":
/*!******************************!*\
  !*** ./src/models/Client.ts ***!
  \******************************/
/*! exports provided: Client, ClientOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientOptions", function() { return ClientOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Endpoint */ "CIzy");
/* harmony import */ var _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums/gRPCMode */ "KpZ9");
/* harmony import */ var _enums_Protocol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums/Protocol */ "qEx5");
/* harmony import */ var _LogicComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogicComponent */ "dxLX");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Options */ "/XK+");
/* harmony import */ var _Port__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Port */ "WjXT");








class Client extends _LogicComponent__WEBPACK_IMPORTED_MODULE_5__["LogicComponent"] {
    constructor() {
        super();
        this.isConnectedToEndpoint = false; // For streaming/websockets
        this.color = "#0EC35B";
        this.outputPort = new _Port__WEBPACK_IMPORTED_MODULE_7__["Port"](this, true, false);
        this.options = new ClientOptions();
        this.options.title = "Client";
    }
    receiveData(data) {
        this.fireReceiveData(data);
        if (data.header.endpoint.endpoint.protocol == _enums_Protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].WebSockets || data.header.endpoint.endpoint.grpcMode == _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_3__["gRPCMode"]["Bidirectional Streaming"] || data.header.endpoint.endpoint.grpcMode == _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_3__["gRPCMode"]["Server Streaming"]) {
            if (data.header.stream == true) {
                if (this.connectedId == null)
                    return;
                this.isConnectedToEndpoint = true;
            }
            else {
                this.isConnectedToEndpoint = false;
                this.connectedId = null;
            }
        }
    }
    sendData(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateEndpoint();
            return yield this.outputPort.sendData(data);
        });
    }
    getAvailableEndpoints() {
        let availableEndpoints = [];
        for (let connection of this.outputPort.connections) {
            connection.getOtherPort(this.outputPort).parent.getAvailableEndpoints().forEach(endpoint => {
                let duplicate = (availableEndpoints.find(ep => ep.url === endpoint.url && Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["arrayEquals"])(endpoint.supportedMethods, ep.supportedMethods)) != null);
                if (!duplicate)
                    availableEndpoints.push(endpoint);
            });
        }
        return availableEndpoints;
    }
    updateEndpoint() {
        let availableEndpoints = this.getAvailableEndpoints();
        if (this.options.endpointRef.endpoint == null) { // Set default endpoint if available
            if (availableEndpoints.length == 0)
                return;
            this.options.endpointRef.endpoint = availableEndpoints[0];
            this.options.endpointRef.method = availableEndpoints[0].supportedMethods[0];
        }
        else {
            let isAvailable = false;
            for (let endpoint of availableEndpoints) {
                if (this.options.endpointRef.endpoint === endpoint) {
                    isAvailable = true;
                    break;
                }
            }
            if (!isAvailable) { // If current endpoint is no longer available, replace it
                if (availableEndpoints.length == 0)
                    return;
                this.options.endpointRef.endpoint = availableEndpoints[0];
                this.options.endpointRef.method = availableEndpoints[0].supportedMethods[0];
            }
        }
    }
}
class ClientOptions extends _Options__WEBPACK_IMPORTED_MODULE_6__["Options"] {
    constructor() {
        super(...arguments);
        this.protocol = _enums_Protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].HTTP; // Is decided by endpoint, cannot be changed from client
        this.endpointRef = new _Endpoint__WEBPACK_IMPORTED_MODULE_2__["EndpointRef"]();
        this.outputRate = 4;
    }
}


/***/ }),

/***/ "HvJx":
/*!*********************************************************!*\
  !*** ./src/app/board/components/port/port.component.ts ***!
  \*********************************************************/
/*! exports provided: PortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortComponent", function() { return PortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_placing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/placing.service */ "epgU");


const _c0 = ["port"];
const _c1 = ["portImage"];
class PortComponent {
    constructor(placingService, cdRef) {
        this.placingService = placingService;
        this.cdRef = cdRef;
        this.IsReadOnly = false;
        this.connectionComponents = [];
        this.lineStartX = 0;
        this.lineStartY = 0;
        this.lineCurrX = 0;
        this.lineCurrY = 0;
        this.linePrevX = 0;
        this.linePrevY = 0;
        this.destroySelf = () => { };
        this.cdRef.detach();
    }
    ngOnInit() {
        this.LogicPort = this.LogicParent.getPort(this.IsOutput);
        this.board = document.getElementById("board");
        this.svgCanvas = document.getElementById("svg-canvas");
        this.LogicPort.onDropRequest(() => {
            let dirX = -1 - Math.random();
            let dirY = Math.random();
            let x = this.port.nativeElement.offsetLeft + this.port.nativeElement.clientWidth / 2;
            let y = this.port.nativeElement.offsetTop + this.port.nativeElement.clientHeight / 2;
            if (this.IsOutput)
                dirX *= -1;
            if (Math.random() > 0.5)
                dirY *= -1;
            let data = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            data.classList.add("dropped-data");
            data.setAttribute("r", "5");
            this.svgCanvas.appendChild(data);
            data.style.transform = `translate(${x}px, ${y}px)`;
            setTimeout(() => {
                data.style.transform = `translate(${x + dirX * 30}px, ${y + dirY * 30}px)`;
                data.style.opacity = "0";
            }, 50);
            setTimeout(() => {
                data.remove();
            }, 1000);
        });
        this.cdRef.detectChanges();
    }
    removeConnection(connection) {
        let index = this.connectionComponents.findIndex(con => con === connection);
        if (index !== -1) {
            this.connectionComponents.splice(index, 1);
        }
        this.cdRef.detectChanges();
    }
    addConnection(connection) {
        if (this.IsReadOnly && this.port != null)
            this.port.nativeElement.style.display = "block";
        let index = this.connectionComponents.findIndex(con => con === connection);
        if (index === -1)
            this.connectionComponents.push(connection);
        this.cdRef.detectChanges();
    }
    getConnectionComponent(logicConnection) {
        return this.connectionComponents.find(connection => connection.LogicConnection === logicConnection);
    }
    autoAttach() {
        if (this.placingService.isConnecting) {
            this.placingService.canMoveConnection = false;
            let line = this.svgCanvas.children[0];
            let style = line.getAttribute("d");
            style = style.split("L")[0] + `L${this.port.nativeElement.offsetLeft + this.port.nativeElement.clientWidth / 2} ${this.port.nativeElement.offsetTop + this.port.nativeElement.clientHeight / 2}`;
            line.setAttribute("d", style);
        }
        this.cdRef.detectChanges();
    }
    detach() {
        this.placingService.canMoveConnection = true;
        this.cdRef.detectChanges();
    }
    getPortComponent() {
        return this;
    }
    handleClick(event) {
        if (event instanceof MouseEvent) {
            if (this.placingService.isConnecting)
                this.placingService.stopConnecting();
            else {
                this.placingService.startConnecting(this);
                this.line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                this.svgCanvas.appendChild(this.line);
                this.lineCurrX = event.clientX;
                this.lineCurrY = event.clientY;
                this.linePrevX = event.clientX;
                this.linePrevY = event.clientY;
                this.lineCurrX = this.port.nativeElement.offsetLeft + this.port.nativeElement.clientWidth / 2;
                this.lineCurrY = this.port.nativeElement.offsetTop + this.port.nativeElement.clientHeight / 2;
                this.lineStartX = this.port.nativeElement.offsetLeft + this.port.nativeElement.clientWidth / 2;
                this.lineStartY = this.port.nativeElement.offsetTop + this.port.nativeElement.clientHeight / 2;
                this.line.setAttribute('d', `M${this.lineStartX} ${this.lineStartY} L${this.lineCurrX} ${this.lineCurrY}`);
                this.line.style.stroke = "#6059DF";
                this.line.style.strokeWidth = "2";
                this.line.style.strokeLinecap = "round";
                this.line.style.strokeDasharray = "3";
                this.line.style.fill = "none";
                this.board.onmousemove = (event) => {
                    if (this.placingService.canMoveConnection) {
                        if (!this.placingService.isConnecting)
                            this.placingService.startConnecting(this);
                        this.lineCurrX = this.lineCurrX - (this.linePrevX - event.clientX) / this.placingService.boardScale;
                        this.lineCurrY = this.lineCurrY - (this.linePrevY - event.clientY) / this.placingService.boardScale;
                        this.line.setAttribute('d', `M${this.lineStartX} ${this.lineStartY} L${this.lineCurrX} ${this.lineCurrY}`);
                        this.linePrevX = event.clientX;
                        this.linePrevY = event.clientY;
                    }
                    this.cdRef.detectChanges();
                };
            }
        }
        else if (event instanceof TouchEvent) {
            if (this.placingService.isConnecting)
                this.placingService.stopConnecting();
            else {
                this.placingService.startConnecting(this);
                this.line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                this.svgCanvas.appendChild(this.line);
                this.lineCurrX = event.touches[0].clientX;
                this.lineCurrY = event.touches[0].clientY;
                this.linePrevX = event.touches[0].clientX;
                this.linePrevY = event.touches[0].clientY;
                this.lineCurrX = this.port.nativeElement.offsetLeft + this.port.nativeElement.clientWidth / 2;
                this.lineCurrY = this.port.nativeElement.offsetTop + this.port.nativeElement.clientHeight / 2;
                this.lineStartX = this.port.nativeElement.offsetLeft + this.port.nativeElement.clientWidth / 2;
                this.lineStartY = this.port.nativeElement.offsetTop + this.port.nativeElement.clientHeight / 2;
                this.line.setAttribute('d', `M${this.lineStartX} ${this.lineStartY} L${this.lineCurrX} ${this.lineCurrY}`);
                this.line.style.stroke = "#6059DF";
                this.line.style.strokeWidth = "2";
                this.line.style.strokeLinecap = "round";
                this.line.style.strokeDasharray = "3";
                this.line.style.fill = "none";
                this.board.ontouchmove = (event) => {
                    if (this.placingService.canMoveConnection) {
                        if (!this.placingService.isConnecting)
                            this.placingService.startConnecting(this);
                        this.lineCurrX = this.lineCurrX - (this.linePrevX - event.touches[0].clientX) / this.placingService.boardScale;
                        this.lineCurrY = this.lineCurrY - (this.linePrevY - event.touches[0].clientY) / this.placingService.boardScale;
                        this.line.setAttribute('d', `M${this.lineStartX} ${this.lineStartY} L${this.lineCurrX} ${this.lineCurrY}`);
                        this.linePrevX = event.touches[0].clientX;
                        this.linePrevY = event.touches[0].clientY;
                    }
                    this.cdRef.detectChanges();
                };
                this.board.ontouchend = () => {
                    this.board.ontouchmove = null;
                    this.board.ontouchend = null;
                    this.svgCanvas.innerHTML = "";
                    this.placingService.stopConnecting();
                    this.cdRef.detectChanges();
                };
            }
        }
        this.cdRef.detectChanges();
    }
    handleMouseUp(e) {
        if (this.placingService.isConnecting) {
            if (this !== this.placingService.connectingPort) {
                if (this.IsOutput) {
                    if (this.placingService.connectPorts(this, this.placingService.connectingPort))
                        this.placingService.componentChanged.emit();
                }
                else {
                    if (this.placingService.connectPorts(this.placingService.connectingPort, this))
                        this.placingService.componentChanged.emit();
                }
            }
        }
        this.cdRef.detectChanges();
    }
    ngAfterViewInit() {
        this.portImage.nativeElement.style.borderColor = this.LogicParent.color;
        if (this.IsReadOnly && this.port != null)
            this.port.nativeElement.style.display = "none";
        this.cdRef.detectChanges();
    }
}
PortComponent.ɵfac = function PortComponent_Factory(t) { return new (t || PortComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_placing_service__WEBPACK_IMPORTED_MODULE_1__["PlacingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PortComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortComponent, selectors: [["port"]], viewQuery: function PortComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.port = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.portImage = _t.first);
    } }, inputs: { LogicParent: "LogicParent", IsOutput: "IsOutput", IsReadOnly: "IsReadOnly" }, decls: 4, vars: 0, consts: [[1, "port", 3, "mousedown", "mouseup", "mouseover", "mouseleave"], ["port", ""], [1, "port-image"], ["portImage", ""]], template: function PortComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function PortComponent_Template_div_mousedown_0_listener($event) { return ctx.handleClick($event); })("mouseup", function PortComponent_Template_div_mouseup_0_listener($event) { return ctx.handleMouseUp($event); })("mouseover", function PortComponent_Template_div_mouseover_0_listener() { return ctx.autoAttach(); })("mouseleave", function PortComponent_Template_div_mouseleave_0_listener() { return ctx.detach(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -25px;\n  right: -25px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.port[_ngcontent-%COMP%] {\n  padding: 0.3em;\n  z-index: 2;\n  position: fixed;\n}\n\n.port[_ngcontent-%COMP%]:hover {\n  cursor: pointer !important;\n}\n\n.port[_ngcontent-%COMP%]   .port-image[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: var(--background-light);\n  border: 2px solid;\n}\n\n.right[_nghost-%COMP%] {\n  justify-content: flex-end;\n}\n\n.left[_nghost-%COMP%] {\n  justify-content: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBRUo7O0FBREk7RUFDSSwwQkFBQTtBQUdSOztBQURJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7QUFHUjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBREE7RUFDSSwyQkFBQTtBQUlKIiwiZmlsZSI6InBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAtMjVweDtcbiAgICByaWdodDogLTI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ucG9ydHtcbiAgICBwYWRkaW5nOiAwLjNlbTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAmOmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICB9XG4gICAgJiAucG9ydC1pbWFnZXtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgfVxufVxuOmhvc3QucmlnaHR7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbjpob3N0LmxlZnR7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "INeE":
/*!******************************!*\
  !*** ./src/models/PubSub.ts ***!
  \******************************/
/*! exports provided: PubSub, PubSubOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubSub", function() { return PubSub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubSubOptions", function() { return PubSubOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _RequestData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestData */ "LEJs");
/* harmony import */ var _Port__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Port */ "WjXT");
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Endpoint */ "CIzy");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _EndpointOperator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EndpointOperator */ "7KcZ");
/* harmony import */ var _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums/HTTPMethod */ "axtL");







class PubSub extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_5__["EndpointOperator"] {
    constructor() {
        super();
        this.connectionTable = {};
        this.color = "#FF7D35";
        this.inputPort = new _Port__WEBPACK_IMPORTED_MODULE_2__["Port"](this, false, true);
        this.outputPort = new _Port__WEBPACK_IMPORTED_MODULE_2__["Port"](this, true, true);
        this.options = new PubSubOptions();
        this.options.title = "Pub/Sub Model";
        this.options.endpoints = [
            new _Endpoint__WEBPACK_IMPORTED_MODULE_3__["Endpoint"]("post.postCreated", [_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].GET, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].POST, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].PUT, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].PATCH, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].DELETE])
        ];
    }
    receiveData(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data.requestId == "" || data.requestId == null)
                throw new Error("requestId can not be null. Please specify property requestId of RequestData");
            this.fireReceiveData(data);
            // Put data to queue 
            data.header.stream = false;
            this.sendToConsumers(data);
            // Return response to publisher
            let response = new _RequestData__WEBPACK_IMPORTED_MODULE_1__["RequestData"]();
            response.responseId = data.requestId;
            response.requestId = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_4__["UUID"])();
            response.header = data.header;
            response.origin = data.origin;
            response.originID = this.originID;
            // Send response back
            if (data.sendResponse)
                yield this.inputPort.sendData(response, data.origin);
        });
    }
    sendToConsumers(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sendData(message);
        });
    }
    sendData(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            data.originID = this.originID;
            data.sendResponse = false;
            let targetEndpoint = data.header.endpoint.endpoint.url;
            let connections = this.outputPort.connections
                .filter(connection => connection.getOtherPort(this.outputPort).parent.getAvailableEndpoints()
                .find(ep => ep.url == targetEndpoint) != null);
            for (let connection of connections) {
                data.origin = connection;
                this.outputPort.sendData(data, data.origin);
            }
        });
    }
}
class PubSubOptions extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_5__["EndpointOptions"] {
}


/***/ }),

/***/ "JD7n":
/*!**************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.component.ts ***!
  \**************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class LandingPageComponent {
    constructor() { }
    ngOnInit() {
        document.getElementsByClassName("page")[0].scrollTop = 0;
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["landing-page"]], decls: 109, vars: 0, consts: [[1, "container"], [1, "header-info"], ["routerLink", "create", 1, "btn-main", "link-main"], [1, "code"], [2, "text-align", "center", "margin", "30px 0"], [2, "text-align", "center"], ["src", "./assets/gifs/tutorial1.gif", "alt", "Tutorial 1"], ["src", "./assets/gifs/tutorial2.gif", "alt", "Tutorial 2"], ["src", "./assets/gifs/tutorial3.gif", "alt", "Tutorial 3"], ["src", "./assets/gifs/tutorial4.gif", "alt", "Tutorial 4"], ["src", "./assets/gifs/tutorial5.gif", "alt", "Tutorial 5"], ["src", "./assets/gifs/tutorial8.gif", "alt", "Tutorial 8"], ["src", "./assets/gifs/tutorial6.gif", "alt", "Tutorial 6"], ["src", "./assets/gifs/tutorial9.gif", "alt", "Tutorial 9"], ["src", "./assets/gifs/tutorial10.gif", "alt", "Tutorial 10"], ["src", "./assets/gifs/tutorial7.gif", "alt", "Tutorial 7"], ["src", "./assets/gifs/tutorial0.gif", "alt", "Tutorial 0"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Maturitn\u00ED pr\u00E1ce 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Jan P\u00E1nek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "P4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "P\u0159ej\u00EDt do aplikace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Instalace backendu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Backend nen\u00ED pot\u0159eba, jedin\u00E1 \u010D\u00E1st aplikace kter\u00E1 ho vyu\u017E\u00EDv\u00E1 je generov\u00E1n\u00ED k\u00F3du pro vno\u0159ov\u00E1n\u00ED pomoc\u00ED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "iframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pro backend je pot\u0159eba m\u00EDt nainstalovan\u00FD composer a PHP (+ m\u00EDt p\u0159\u00EDkaz php v prom\u011Bnn\u00FDch prost\u0159ed\u00ED)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Duplikovat soubor .env.example a p\u0159ejmenovat na .env");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "$ php artisan key:gen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Je nutn\u00E9 m\u00EDt spu\u0161t\u011Bn\u00FD MySQL datab\u00E1zov\u00FD server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pot\u00E9 \u00FAdaje pro p\u0159\u00EDstup do datab\u00E1ze vyplnit do souboru .env");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "$ php artisan migrate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "$ php artisan db:seed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "P\u0159ilo\u017Een\u00FD n\u00E1vrh syst\u00E9mu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "V souborech se nach\u00E1z\u00ED soubor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Navrh_steamovaci_platformy.json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ", kter\u00FD na\u010Dte syst\u00E9m na kter\u00E9m lze aplikaci otestovat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Ovl\u00E1d\u00E1n\u00ED aplikace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Kr\u00E1tk\u00FD n\u00E1vod jak aplikaci pou\u017E\u00EDvat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Pohyb s deskou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Prav\u00FDm tla\u010D\u00EDtkem my\u0161i lze s deskou pohyboavat. P\u0159ibl\u00ED\u017Een\u00ED a odd\u00E1len\u00ED se prov\u00E1d\u00ED prost\u0159edn\u00EDm tla\u010D\u00EDtkem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Vytv\u00E1\u0159en\u00ED uzl\u016F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Uzel vytvo\u0159\u00EDte p\u0159et\u00E1hnut\u00EDm uzlu z menu na plochu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Pohyb s uzly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Uzel lze vybrat kliknut\u00EDm lev\u00E9ho tla\u010D\u00EDtka my\u0161i, n\u00E1sledn\u00FDm dr\u017Een\u00EDm lze s uzelm pohyboat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Kop\u00EDrov\u00E1n\u00ED a vkl\u00E1d\u00E1n\u00ED uzl\u016F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Lze prov\u00E1d\u011Bt pomoc\u00ED horn\u00ED li\u0161ty, nebo pou\u017Eit\u00EDm zkratek CTRL+C/V.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Odstran\u011Bn\u00ED uzl\u016F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Uzel lze odstranit kl\u00E1vesou delete nebo tla\u010D\u00EDtkem v horn\u00ED li\u0161t\u011B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Vybr\u00E1n\u00ED v\u00EDce uzl\u016F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Lev\u00FDm tla\u010D\u00EDtkem lze vybrat v\u0161echny uzly v dan\u00E9 oblasti.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "P\u0159ipojov\u00E1n\u00ED uzl\u016F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Uzly p\u0159ipoj\u00EDte kliknut\u00EDm na port dan\u00E9ho uzlu. Vstupn\u00ED port je nalevo, v\u00FDstupn\u00ED port napravo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Zalamov\u00E1n\u00ED spojov\u00FDch \u010Dar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "P\u0159ejet\u00EDm my\u0161i p\u0159es spojov\u00E9 \u010D\u00E1ry umo\u017En\u00ED \u010D\u00E1ru veprost\u0159ed zalomit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Nadpisy spojov\u00FDch \u010Dar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Kliknut\u00EDm na spojovou \u010D\u00E1ru lze p\u0159idat nadpis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Zm\u011Bna nastaven\u00ED uzlu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Po vybr\u00E1n\u00ED uzlu se uk\u00E1\u017Ee menu s nastaven\u00EDm. Ka\u017Ed\u00FD uzel m\u016F\u017Ee m\u00EDt jin\u00E9 nastaven\u00ED.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Simulace syst\u00E9mu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Simulaci lze prov\u00E9st pomoc\u00ED uzlu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, ", kter\u00FD m\u00E1 v menu s nastaven\u00EDm sekci ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " ve kter\u00E9 lze pos\u00EDlat data na vybran\u00FD endpoint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "P\u0159ej\u00EDt do aplikace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  flex-grow: 1;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: unset;\n}\n\n.code[_ngcontent-%COMP%] {\n  background-color: #E0E0E0;\n  font-style: italic;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 2.5em 0 2em;\n  color: var(--text);\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  font-weight: 500;\n  font-size: 1.25rem;\n}\n\n.header-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.link-main[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 10px auto;\n  display: block;\n  border: 2px solid #999;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxpQkFBQTtBQUNSOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUFKIiwiZmlsZSI6ImxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxudWwge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcblxuICAgIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZTogdW5zZXQ7XG4gICAgfVxufVxuXG4uY29kZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAyLjVlbSAwIDJlbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbmgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmg0IHtcbiAgICBtYXJnaW46IDFlbSAwIDAuMjVlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLmhlYWRlci1pbmZvIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmxpbmstbWFpbiB7XG4gICAgbWFyZ2luLXRvcDogMi41ZW07XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5pbWcge1xuICAgIG1heC13aWR0aDogNjAwcHg7IFxuICAgIG1hcmdpbjogMTBweCBhdXRvOyBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTk5O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn0iXX0= */"] });


/***/ }),

/***/ "K+oz":
/*!*****************************************************************!*\
  !*** ./src/app/board/components/database/database.component.ts ***!
  \*****************************************************************/
/*! exports provided: DatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseComponent", function() { return DatabaseComponent; });
/* harmony import */ var src_models_Database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/Database */ "FtUi");
/* harmony import */ var src_models_Endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/Endpoint */ "CIzy");
/* harmony import */ var src_models_Port__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/Port */ "WjXT");
/* harmony import */ var _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/OperatorComponent */ "RW4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../info-tooltip/info-tooltip.component */ "q+md");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Shared_endpoint_select_endpoint_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Shared/endpoint-select/endpoint-select.component */ "acqn");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












function DatabaseComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", type_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.DatabaseType[type_r5]);
} }
class DatabaseComponent extends _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_3__["OperatorComponent"] {
    constructor() {
        super(...arguments);
        this.LogicDatabase = new src_models_Database__WEBPACK_IMPORTED_MODULE_0__["Database"]();
        this.SHARDS_PER_SHRARD = 3;
    }
    ngAfterViewInit() {
        if (this.LogicDatabase.options.isMasterShard) {
            this.LogicDatabase.outputPort = new src_models_Port__WEBPACK_IMPORTED_MODULE_2__["Port"](this.LogicDatabase, true, true);
        }
        super.Init();
        this.LogicDatabase.onRemoveShard(() => {
            this.outputPortRef.destroySelf();
            this.outputPortRef = null;
        });
    }
    getLogicComponent() {
        return this.LogicDatabase;
    }
    changeDatabaseType() {
        if (this.LogicDatabase.outputPort == null)
            return;
        for (let conn of this.LogicDatabase.outputPort.connections) {
            let options = conn.getOtherPort(this.LogicDatabase.outputPort).parent.options;
            if (options instanceof src_models_Database__WEBPACK_IMPORTED_MODULE_0__["DatabaseOptions"])
                options.type = this.LogicDatabase.options.type;
        }
    }
    createOutputPort() {
        this.LogicDatabase.outputPort = new src_models_Port__WEBPACK_IMPORTED_MODULE_2__["Port"](this.LogicDatabase, true, true);
        this.cdRef.detectChanges();
        this.createPort(true);
    }
    shard() {
        this.LogicDatabase.options.isMasterShard = true;
        this.createOutputPort();
        let dirX = 0;
        let dirY = 0;
        let initX = this.LogicDatabase.options.X;
        let initY = this.LogicDatabase.options.Y;
        if (this.LogicDatabase.options.X <= 1920) { // Positioning shards
            dirY = this.LogicDatabase.options.Y <= 960 - this.SHARDS_PER_SHRARD * 80 ? 1 : -1;
            initY = dirY > 0 ? Math.min(Math.max(this.LogicDatabase.options.Y - 70, 0), 960) : Math.min(Math.max(this.LogicDatabase.options.Y, 0), 960);
            initX += 120;
        }
        else if (this.LogicDatabase.options.X <= 1960 - this.SHARDS_PER_SHRARD * 80 && this.LogicDatabase.options.Y >= 60) {
            dirX = 1;
            initY = this.LogicDatabase.options.Y - 40;
        }
        else {
            dirX = -1;
            initY = this.LogicDatabase.options.Y + (this.LogicDatabase.options.Y <= 960 - 70 ? 70 : -70);
        }
        let ep = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_1__["DatabaseEndpoint"]("/shard");
        for (let i = 0; i < this.SHARDS_PER_SHRARD; i++) {
            let comp = this.placingService.createComponent(DatabaseComponent, initX + dirX * 80 * i, initY + dirY * 70 * i, { type: this.LogicDatabase.options.type, isShard: true, title: `Shard ${i + 1}`, endpoints: [ep] });
            comp.onViewInit.push(() => {
                this.placingService.connectPorts(this.getPortComponent(true), comp.getPortComponent(false));
                this.placingService.pushComponent.emit(comp);
            });
            comp.onAfterDestroySelf = () => {
                if (this.LogicDatabase.outputPort.connections.length == 0)
                    this.LogicDatabase.options.isMasterShard = false;
            };
        }
        setTimeout(() => {
            this.afterChange();
            this.cdRef.detectChanges();
        }, 300);
    }
    static getColor() {
        let c = new src_models_Database__WEBPACK_IMPORTED_MODULE_0__["Database"]();
        return c.color;
    }
}
DatabaseComponent.ɵfac = function DatabaseComponent_Factory(t) { return ɵDatabaseComponent_BaseFactory(t || DatabaseComponent); };
DatabaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DatabaseComponent, selectors: [["database"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 16, consts: [["anchorRef", ""], ["conn", ""], [1, "img-container", 3, "mousedown", "touchstart", "click"], ["src", "./assets/database.svg"], [2, "display", "none"], ["options", ""], [1, "options-type-container"], [1, "property-name"], [3, "Message"], ["appearance", "fill", 1, "action-endpoint"], [3, "disabled", "ngModel", "selectionChange", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "Model", "Type", "DatabaseEndpoints", "Multiple", "HasActions", "ModifiableMethods", "AfterChange"], ["actions", ""], [1, "options-actions"], [1, "actions-container"], [3, "disabled", "click"], [3, "value"]], template: function DatabaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "template", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function DatabaseComponent_Template_div_mousedown_4_listener($event) { return ctx.handleMousedown($event); })("touchstart", function DatabaseComponent_Template_div_touchstart_4_listener($event) { return ctx.handleMousedown($event); })("click", function DatabaseComponent_Template_div_click_4_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Type: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "info-tooltip", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function DatabaseComponent_Template_mat_select_selectionChange_15_listener() { ctx.changeDatabaseType(); return ctx.afterChange(); })("ngModelChange", function DatabaseComponent_Template_mat_select_ngModelChange_15_listener($event) { return ctx.LogicDatabase.options.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, DatabaseComponent_mat_option_16_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "endpoint-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DatabaseComponent_Template_button_click_22_listener() { return ctx.shard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Shard Database");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("left", ctx.LogicDatabase.options.X, "px")("top", ctx.LogicDatabase.options.Y, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Message", "Changes the type of the database. This does not have any effect on the visualization.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.LogicDatabase.options.isShard)("ngModel", ctx.LogicDatabase.options.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.DatabaseTypeKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Model", ctx.LogicDatabase)("Type", ctx.APIType.REST)("DatabaseEndpoints", true)("Multiple", false)("HasActions", false)("ModifiableMethods", false)("AfterChange", ctx.afterChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.LogicDatabase.options.isMasterShard || ctx.LogicDatabase.options.isShard);
    } }, directives: [_info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_5__["InfoTooltipComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _Shared_endpoint_select_endpoint_select_component__WEBPACK_IMPORTED_MODULE_10__["EndpointSelectComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.options-type-container[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2RhdGFiYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUoiLCJmaWxlIjoiZGF0YWJhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ub3B0aW9ucy10eXBlLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4iXX0= */"] });
const ɵDatabaseComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](DatabaseComponent);


/***/ }),

/***/ "Khja":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board/board.component */ "LcVa");
/* harmony import */ var _board_boardUI_boardUI_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../board/boardUI/boardUI.component */ "Y1pD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _placing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../placing.service */ "epgU");
/* harmony import */ var _saving_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../saving.service */ "Wbgk");
/* harmony import */ var _viewing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../viewing.service */ "nesx");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _board_componentmenu_componentmenu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../board/componentmenu/componentmenu.component */ "yf1P");
/* harmony import */ var _board_optionsmenu_optionsmenu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../board/optionsmenu/optionsmenu.component */ "PxqJ");
/* harmony import */ var _board_tutorials_tutorial_controls_tutorial_controls_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../board/tutorials/tutorial-controls/tutorial-controls.component */ "8NQF");
















function CreateComponent_div_0_app_board_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-board", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeSystemName", function CreateComponent_div_0_app_board_2_Template_app_board_changeSystemName_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.changeSystemName($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-board", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeSystemName", function CreateComponent_div_0_ng_template_3_Template_app_board_changeSystemName_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.changeSystemName($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loadedSave", ctx_r5.viewerSave);
} }
function CreateComponent_div_0_tutorial_controls_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tutorial-controls", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeMenu", function CreateComponent_div_0_tutorial_controls_8_Template_tutorial_controls_closeMenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.closeTutorialMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CreateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "board-ui", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("newFile", function CreateComponent_div_0_Template_board_ui_newFile_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.newFile(); })("saveFile", function CreateComponent_div_0_Template_board_ui_saveFile_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.saveFile($event); })("loadFile", function CreateComponent_div_0_Template_board_ui_loadFile_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.loadFile($event); })("showSaved", function CreateComponent_div_0_Template_board_ui_showSaved_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.showSaved(); })("save", function CreateComponent_div_0_Template_board_ui_save_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.save(); })("exportPng", function CreateComponent_div_0_Template_board_ui_exportPng_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.exportPng($event); })("exportSvg", function CreateComponent_div_0_Template_board_ui_exportSvg_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.exportSvg($event); })("copyComponent", function CreateComponent_div_0_Template_board_ui_copyComponent_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.copy(); })("pasteComponent", function CreateComponent_div_0_Template_board_ui_pasteComponent_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.paste(); })("selectAllComponents", function CreateComponent_div_0_Template_board_ui_selectAllComponents_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.selectAll(); })("cutComponent", function CreateComponent_div_0_Template_board_ui_cutComponent_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.cut(); })("delComponent", function CreateComponent_div_0_Template_board_ui_delComponent_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.deleteComponent(); })("undo", function CreateComponent_div_0_Template_board_ui_undo_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r26.undo(); })("redo", function CreateComponent_div_0_Template_board_ui_redo_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.redo(); })("clearBoard", function CreateComponent_div_0_Template_board_ui_clearBoard_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r28.clearBoard(); })("fullscreen", function CreateComponent_div_0_Template_board_ui_fullscreen_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.fullscreen(); })("zoomIn", function CreateComponent_div_0_Template_board_ui_zoomIn_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r30.zoomIn(); })("zoomOut", function CreateComponent_div_0_Template_board_ui_zoomOut_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r31.zoomOut(); })("changeScale", function CreateComponent_div_0_Template_board_ui_changeScale_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r32.handleScaleChange($event); })("resetView", function CreateComponent_div_0_Template_board_ui_resetView_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r33.resetView(); })("onboardTutorial1", function CreateComponent_div_0_Template_board_ui_onboardTutorial1_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r34.openTutorialMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CreateComponent_div_0_app_board_2_Template, 1, 0, "app-board", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CreateComponent_div_0_ng_template_3_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-componentmenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-optionsmenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CreateComponent_div_0_tutorial_controls_8_Template, 1, 0, "tutorial-controls", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("getComponents", ctx_r0.getComponents());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.showEdit)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isTutorialMenuOpen);
} }
function CreateComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-board", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("loadedSave", ctx_r1.viewerSave)("isReadOnly", true)("viewerEditLink", ctx_r1.viewerEditLink);
} }
function CreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "System preview is not available");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "The system is either corrupted or outdated.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class CreateComponent {
    constructor(route, placingService, savingService, viewingService, titleService) {
        this.route = route;
        this.placingService = placingService;
        this.savingService = savingService;
        this.viewingService = viewingService;
        this.titleService = titleService;
        this.API_URL = "http://127.0.0.1:8000";
        this.isTutorialMenuOpen = false;
        this.showOnboardIntro = false;
        this.showReadOnlyViewer = false;
        this.showReadOnlyViewerError = false;
        this.showBoard = true;
        this.showEdit = false;
    }
    ngOnInit() {
        this.titleService.setTitle("Návrh systému");
        let seenIntroTutorial = localStorage.getItem("seenIntroTutorial");
        this.route.queryParams
            .subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (params.viewer) {
                this.showBoard = false;
                try {
                    this.viewerEditLink = `http://localhost:4200/create?edit=${params.viewer}`;
                    const save = yield this.getBoard(params.viewer);
                    if (Array.isArray(save)) {
                        this.viewerSave = this.savingService.getSaveFromOptimizedSave(save);
                    }
                    else {
                        this.viewingService.setDarkMode(save.darkMode, false);
                        this.viewingService.setTitlesHidden(!save.showTitles, false);
                        this.viewerSave = this.savingService.getSaveFromOptimizedSave(save.comp);
                    }
                    this.showReadOnlyViewer = true;
                }
                catch (_a) {
                    this.showReadOnlyViewerError = true;
                }
            }
            if (params.edit) {
                try {
                    this.showEdit = true;
                    const save = yield this.getBoard(params.edit);
                    if (Array.isArray(save)) {
                        this.viewerSave = this.savingService.getSaveFromOptimizedSave(save);
                    }
                    else {
                        this.viewingService.setDarkMode(save.darkMode, false);
                        this.viewingService.setTitlesHidden(!save.showTitles, false);
                        this.viewerSave = this.savingService.getSaveFromOptimizedSave(save.comp);
                    }
                    this.showReadOnlyViewer = false;
                }
                catch (_b) {
                    this.showReadOnlyViewerError = true;
                }
            }
            this.showOnboardIntro = params["showOnboardTutorial"] == "true";
        }));
        if (seenIntroTutorial != "true" || this.showOnboardIntro) {
            this.openTutorialMenu();
            localStorage.setItem("seenIntroTutorial", "true");
        }
    }
    getBoard(uuid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.API_URL}/api/board/${uuid}`, {
                method: "GET",
            });
            const body = yield response.json();
            const encoded = body.json_data;
            const result = JSON.parse(atob(encoded));
            return result;
        });
    }
    getComponents() {
        return () => {
            return this.board.allLogicComponents;
        };
    }
    newFile() {
        this.board.newFile();
    }
    saveFile(name) {
        if (this.board.allLogicComponents.length == 0) {
            this.placingService.showSnack("There is nothing to save...");
            return;
        }
        let file = this.savingService.getBoardJson(this.board.allLogicComponents, name, this.board.currentBoardId);
        this.save();
        Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["download"])(`${name}.json`, file);
    }
    loadFile(json) {
        // Pass the file to board component
        this.board.loadFromJson(json);
    }
    showSaved() {
        this.board.openSavedBoards();
    }
    save() {
        this.board.save(true);
    }
    exportPng(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let canvas = yield this.board.getCurrentBoardCanvas(options);
            if (canvas == null) {
                this.placingService.showSnack("You can't export an empty board.");
                return;
            }
            Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["downloadPng"])(this.ui.name + ".png", canvas.toDataURL('image/png', 1));
        });
    }
    exportSvg(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let svg = yield this.board.getCurrentBoardSvg(options);
            if (svg == null) {
                this.placingService.showSnack("You can't export an empty board.");
                return;
            }
            Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["downloadSvg"])(this.ui.name + ".svg", svg);
        });
    }
    copy() {
        this.board.copyItem();
    }
    paste() {
        this.board.pasteItem();
    }
    selectAll() {
        this.board.selectAll();
    }
    cut() {
        this.board.cutItem();
    }
    deleteComponent() {
        this.board.delete();
    }
    undo() {
        this.board.undo();
    }
    redo() {
        this.board.redo();
    }
    clearBoard() {
        this.board.clearBoard(false);
        this.board.componentChanged();
    }
    fullscreen() {
        document.body.requestFullscreen();
    }
    zoomIn() {
        this.board.zoomIn();
    }
    zoomOut() {
        this.board.zoomOut();
    }
    resetView() {
        this.board.resetView();
    }
    openTutorialMenu() {
        this.isTutorialMenuOpen = true;
    }
    closeTutorialMenu() {
        this.isTutorialMenuOpen = false;
    }
    changeSystemName(name) {
        if (this.ui == null) {
            setTimeout(() => { this.changeSystemName(name); }, 50);
        }
        else {
            this.ui.changeName(name);
        }
    }
    handleScaleChange(scale) {
        this.placingService.boardScale = scale;
        this.board.updateBoardTransform();
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_placing_service__WEBPACK_IMPORTED_MODULE_6__["PlacingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_saving_service__WEBPACK_IMPORTED_MODULE_7__["SavingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_viewing_service__WEBPACK_IMPORTED_MODULE_8__["ViewingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], viewQuery: function CreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_board_boardUI_boardUI_component__WEBPACK_IMPORTED_MODULE_3__["BoardUIComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.board = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.ui = _t.first);
    } }, inputs: { queryParams: "queryParams" }, decls: 3, vars: 3, consts: [["class", "page", 4, "ngIf"], ["class", "viewer-error", 4, "ngIf"], [1, "page"], [3, "getComponents", "newFile", "saveFile", "loadFile", "showSaved", "save", "exportPng", "exportSvg", "copyComponent", "pasteComponent", "selectAllComponents", "cutComponent", "delComponent", "undo", "redo", "clearBoard", "fullscreen", "zoomIn", "zoomOut", "changeScale", "resetView", "onboardTutorial1"], [3, "changeSystemName", 4, "ngIf", "ngIfElse"], ["editTemplate", ""], [1, "onboard-tutorial-container"], [3, "closeMenu", 4, "ngIf"], [3, "changeSystemName"], [3, "loadedSave", "changeSystemName"], [3, "closeMenu"], [3, "loadedSave", "isReadOnly", "viewerEditLink"], [1, "viewer-error"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CreateComponent_div_0_Template, 9, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CreateComponent_div_1_Template, 2, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CreateComponent_div_2_Template, 5, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showBoard);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showReadOnlyViewer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showReadOnlyViewerError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _board_boardUI_boardUI_component__WEBPACK_IMPORTED_MODULE_3__["BoardUIComponent"], _board_componentmenu_componentmenu_component__WEBPACK_IMPORTED_MODULE_11__["ComponentmenuComponent"], _board_optionsmenu_optionsmenu_component__WEBPACK_IMPORTED_MODULE_12__["OptionsmenuComponent"], _board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"], _board_tutorials_tutorial_controls_tutorial_controls_component__WEBPACK_IMPORTED_MODULE_13__["TutorialControlsComponent"]], styles: [".page[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  background-color: var(--background);\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.page[_ngcontent-%COMP%]    > app-board[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.onboard-tutorial-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 20.5rem;\n}\n\n.mobile-no-pass[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: var(--background);\n  z-index: 1200;\n  color: var(--text);\n  text-align: center;\n  font-size: 1.5em;\n  padding: 0.2em;\n}\n\n.mobile-no-pass[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 1em 0;\n}\n\n.mobile-no-pass[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0.5em auto;\n}\n\n.viewer-error[_ngcontent-%COMP%] {\n  background-color: var(--background-dark);\n  color: var(--text);\n  height: 100vh;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 0.5em;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8rem;\n}\n\n.viewer-error[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n\n.viewer-error[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--main);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUhJO0VBQ0ksYUFBQTtBQUtSOztBQUhJO0VBQ0ksa0JBQUE7QUFLUjs7QUFGQTtFQUNJLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUpJO0VBQ0ksZ0JBQUE7QUFNUjs7QUFKSTtFQUNJLGtCQUFBO0FBTVIiLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2V7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIGZsZXgtZmxvdzpjb2x1bW4gbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ucGFnZSA+IGFwcC1ib2FyZHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZmxleC1zaHJpbms6IDE7XG59XG4ub25ib2FyZC10dXRvcmlhbC1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMjAuNXJlbTtcbn1cbi5tb2JpbGUtbm8tcGFzc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIHotaW5kZXg6IDEyMDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHBhZGRpbmc6IDAuMmVtO1xuICAgICYgcHtcbiAgICAgICAgbWFyZ2luOiAxZW0gMDtcbiAgICB9XG4gICAgJiBhe1xuICAgICAgICBtYXJnaW46IDAuNWVtIGF1dG87XG4gICAgfVxufVxuLnZpZXdlci1lcnJvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGdhcDogMC41ZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAmIGg1e1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cbiAgICAmIGF7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "KpZ9":
/*!**************************************!*\
  !*** ./src/models/enums/gRPCMode.ts ***!
  \**************************************/
/*! exports provided: gRPCMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gRPCMode", function() { return gRPCMode; });
var gRPCMode;
(function (gRPCMode) {
    gRPCMode[gRPCMode["Unary"] = 0] = "Unary";
    gRPCMode[gRPCMode["Client Streaming"] = 1] = "Client Streaming";
    gRPCMode[gRPCMode["Server Streaming"] = 2] = "Server Streaming";
    gRPCMode[gRPCMode["Bidirectional Streaming"] = 3] = "Bidirectional Streaming";
})(gRPCMode || (gRPCMode = {}));


/***/ }),

/***/ "LEJs":
/*!***********************************!*\
  !*** ./src/models/RequestData.ts ***!
  \***********************************/
/*! exports provided: RequestData, RequestDataHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestData", function() { return RequestData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDataHeader", function() { return RequestDataHeader; });
class RequestData {
    constructor() {
        this.sendResponse = true;
    }
}
class RequestDataHeader {
    constructor(endpointRef, protocol, stream = false) {
        this.endpoint = endpointRef;
        this.protocol = protocol;
        this.stream = stream;
    }
}


/***/ }),

/***/ "LcVa":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _export_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../export.service */ "38ki");
/* harmony import */ var _components_api_api_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/api/api.component */ "N3Nn");
/* harmony import */ var _components_apigateway_apigateway_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/apigateway/apigateway.component */ "9kwT");
/* harmony import */ var _components_cache_cache_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cache/cache.component */ "OF2t");
/* harmony import */ var _components_cdn_cdn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cdn/cdn.component */ "9Ctj");
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/client/client.component */ "+MmB");
/* harmony import */ var _components_clientcluster_clientcluster_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/clientcluster/clientcluster.component */ "m5Z1");
/* harmony import */ var _components_cloudstorage_cloudstorage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cloudstorage/cloudstorage.component */ "pWwo");
/* harmony import */ var _components_database_database_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/database/database.component */ "K+oz");
/* harmony import */ var _components_loadbalancer_loadbalancer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/loadbalancer/loadbalancer.component */ "bjmQ");
/* harmony import */ var _components_messagequeue_messagequeue_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/messagequeue/messagequeue.component */ "xuq0");
/* harmony import */ var _components_proxy_proxy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/proxy/proxy.component */ "Zebe");
/* harmony import */ var _components_pubsub_pubsub_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pubsub/pubsub.component */ "W6y1");
/* harmony import */ var _components_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/textfield/textfield.component */ "/Mf1");
/* harmony import */ var _components_webserver_webserver_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/webserver/webserver.component */ "z8l2");
/* harmony import */ var _placing_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../placing.service */ "epgU");
/* harmony import */ var _selection_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../selection.service */ "nCka");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _saving_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../saving.service */ "Wbgk");
/* harmony import */ var _changes_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../changes.service */ "XUGb");
/* harmony import */ var _viewing_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../viewing.service */ "nesx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");




























const _c0 = ["conn"];
const _c1 = ["savedBoardsRef"];
function BoardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_5_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r8.pasteItem(ctx_r8.contextMenuX, ctx_r8.contextMenuY); return ctx_r8.showContextMenu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Paste here");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_5_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r10.selectAll(); return ctx_r10.showContextMenu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select all");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_5_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r11.zoomIn(); return ctx_r11.showContextMenu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Zoom in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_5_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r12.zoomOut(); return ctx_r12.showContextMenu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Zoom out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_5_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r13.undo(); return ctx_r13.showContextMenu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_5_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r14.redo(); return ctx_r14.showContextMenu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Redo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_5_Template_div_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r15.save(true); return ctx_r15.showContextMenu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_5_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r16.resetView(); return ctx_r16.showContextMenu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Reset view");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", "scale(" + 1 / ctx_r2.placingService.boardScale + ")")("top", ctx_r2.contextMenuY, "px")("left", ctx_r2.contextMenuX, "px");
} }
function BoardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_6_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r17.delete(); return ctx_r17.showComponentContextMenu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_6_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r19.copyItem(); return ctx_r19.showComponentContextMenu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_6_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r20.cutItem(); return ctx_r20.showComponentContextMenu = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cut");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", "scale(" + 1 / ctx_r3.placingService.boardScale + ")")("top", ctx_r3.contextMenuY, "px")("left", ctx_r3.contextMenuX, "px");
} }
function BoardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BoardComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BoardComponent_div_8_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "You don't have any saved boards...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BoardComponent_div_8_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r24.selectedSavedBoard.board.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" component", ctx_r24.selectedSavedBoard.board.length == 1 ? "" : "s", "");
} }
function BoardComponent_div_8_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BoardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BoardComponent_div_8_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click.self", function BoardComponent_div_8_Template_div_click_self_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.closeSavedBoards(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.closeSavedBoards(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Your saved systems");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Note that these systems are saved in your browser and aren't permanent!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BoardComponent_div_8_span_14_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, BoardComponent_div_8_span_19_Template, 4, 2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_8_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.deleteSelectedSavedBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_8_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.loadSelectedSavedBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Load");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, BoardComponent_div_8_span_31_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_8_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.openSavedBoards(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Show all");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.isAutosaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx_r5.showSavedBoards ? "flex" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.savedBoards == null || ctx_r5.savedBoards.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.selectedSavedBoard == null ? "Select a board" : ctx_r5.selectedSavedBoard.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.selectedSavedBoard != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r5.selectedSavedBoard == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r5.selectedSavedBoard == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", ctx_r5.showSavedBoardsPopup ? "translateX(0)" : "translateX(calc(100% - 2.15em))");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.savedBoards.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("You have ", ctx_r5.savedBoards.length, " saved system");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.savedBoards.length != 1);
} }
function BoardComponent_div_9_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_9_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r34.startAllClients(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", "Start animation");
} }
function BoardComponent_div_9_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_9_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r36.stopAllClients(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", "Stop animation");
} }
function BoardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BoardComponent_div_9_button_2_Template, 2, 1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BoardComponent_div_9_button_3_Template, 2, 1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_9_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.zoomIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_9_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.zoomOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_9_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.resetView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_9_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.toggleTitles(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.isAllClientsSendingData);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.isAllClientsSendingData);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", "Zoom in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", "Zoom out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", "Reset view");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", "Toggle titles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r6.viewerEditLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", "Edit board");
} }
function BoardComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ?\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", "You can also hover over individual Clients to send data");
} }
class SavedBoard {
    constructor(title, board, save) {
        this.title = title;
        this.board = board;
        this.save = save;
    }
}
class BoardComponent {
    constructor(placingService, selectionService, snackBar, savingService, changeRef, changesService, exportService, viewingService, renderer) {
        this.placingService = placingService;
        this.selectionService = selectionService;
        this.snackBar = snackBar;
        this.savingService = savingService;
        this.changeRef = changeRef;
        this.changesService = changesService;
        this.exportService = exportService;
        this.viewingService = viewingService;
        this.renderer = renderer;
        this.posX = 0;
        this.posY = 0;
        this.boardMoved = false;
        this.isLoading = false;
        this.isAutosaving = false;
        this.currentBoardId = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_2__["UUID"])();
        this.isAllClientsSendingData = false;
        this.canToggleClientsSendingData = true;
        this.isReadOnly = false;
        this.AUTOSAVE_INTERVAL = 30;
        /**
         * Converting types of logic component to angular component
         */
        this.componentTypes = {
            Client: _components_client_client_component__WEBPACK_IMPORTED_MODULE_8__["ClientComponent"],
            ClientCluster: _components_clientcluster_clientcluster_component__WEBPACK_IMPORTED_MODULE_9__["ClientclusterComponent"],
            API: _components_api_api_component__WEBPACK_IMPORTED_MODULE_4__["ApiComponent"],
            APIGateway: _components_apigateway_apigateway_component__WEBPACK_IMPORTED_MODULE_5__["ApiGatewayComponent"],
            Cache: _components_cache_cache_component__WEBPACK_IMPORTED_MODULE_6__["CacheComponent"],
            CloudStorage: _components_cloudstorage_cloudstorage_component__WEBPACK_IMPORTED_MODULE_10__["CloudStorageComponent"],
            Database: _components_database_database_component__WEBPACK_IMPORTED_MODULE_11__["DatabaseComponent"],
            LoadBalancer: _components_loadbalancer_loadbalancer_component__WEBPACK_IMPORTED_MODULE_12__["LoadbalancerComponent"],
            MessageQueue: _components_messagequeue_messagequeue_component__WEBPACK_IMPORTED_MODULE_13__["MessagequeueComponent"],
            PubSub: _components_pubsub_pubsub_component__WEBPACK_IMPORTED_MODULE_15__["PubsubComponent"],
            Proxy: _components_proxy_proxy_component__WEBPACK_IMPORTED_MODULE_14__["ProxyComponent"],
            TextField: _components_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_16__["TextfieldComponent"],
            WebServer: _components_webserver_webserver_component__WEBPACK_IMPORTED_MODULE_17__["WebserverComponent"],
            CDN: _components_cdn_cdn_component__WEBPACK_IMPORTED_MODULE_7__["CDNComponent"]
        };
        this.changeSystemName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.allLogicComponents = [];
        this.allComponents = [];
        /**
         * The Json representation of the board before change was made
         */
        this.beforeState = "";
        this.savedBoards = [];
        this.showContextMenu = false;
        this.showComponentContextMenu = false;
        this.lastTouchMoveX = 0;
        this.lastTouchMoveY = 0;
        this.handleMousemove = (e) => {
            if (e instanceof MouseEvent) {
                this.boardMoved = true;
                this.showContextMenu = false;
                this.showComponentContextMenu = false;
                this.posX += e.movementX;
                this.posY += e.movementY;
            }
            else if (e instanceof TouchEvent) {
                this.boardMoved = true;
                this.showContextMenu = false;
                this.showComponentContextMenu = false;
                this.posX += e.touches[0].clientX - this.lastTouchMoveX;
                this.posY += e.touches[0].clientY - this.lastTouchMoveY;
                this.lastTouchMoveX = e.touches[0].clientX;
                this.lastTouchMoveY = e.touches[0].clientY;
            }
            this.updateBoardTransform();
        };
        this.handleMouseup = (e) => {
            if (e instanceof MouseEvent) {
                if (e.button === 2 && !this.boardMoved && !this.isReadOnly) {
                    this.showContextMenu = true;
                    this.showComponentContextMenu = false;
                    this.contextMenuX = e.offsetX;
                    this.contextMenuY = e.offsetY;
                }
                this.boardMoved = false;
                this.board.classList.remove("moving");
                this.board.removeEventListener("mousemove", this.handleMousemove);
                window.removeEventListener("mouseup", this.handleMouseup);
            }
            else if (e instanceof TouchEvent) {
                this.boardMoved = false;
                this.board.classList.remove("moving");
                this.board.removeEventListener("touchmove", this.handleMousemove);
                window.removeEventListener("touchend", this.handleMouseup);
            }
        };
        this.handleClick = () => {
            if (this.placingService.isConnecting) {
                this.placingService.stopConnecting();
                this.board.onmousemove = null;
                document.getElementsByClassName("svg-canvas")[0].innerHTML = "";
            }
        };
    }
    scroll(event) {
        event.preventDefault();
        if (event.deltaY < 0)
            this.zoomIn();
        else
            this.zoomOut();
    }
    ngOnInit() {
        this.board = document.getElementById("board");
        this.board.style.width = `${this.placingService.boardWidth}px`;
        this.board.style.height = `${this.placingService.boardHeight}px`;
        this.board.onwheel = (e) => { this.scroll(e); };
        this.updateBoardTransform();
        this.board.addEventListener("resize", e => {
            e.preventDefault();
        });
        if (!this.isReadOnly) { // These events will not be used in readonly board
            this.selectionService.onStopSelecting.subscribe((e) => {
                for (let component of this.allComponents) {
                    let logicComponent = component.getLogicComponent();
                    let size = this.exportService.getComponentSize(logicComponent);
                    let pos = { top: logicComponent.options.Y, left: logicComponent.options.X };
                    if (pos.top >= e.top && pos.left >= e.left && pos.left + size.width < e.left + e.width && pos.top + size.height < e.top + e.height) {
                        setTimeout(() => {
                            this.selectionService.addSelection(component, true);
                        }, 20);
                    }
                }
            });
            this.board.addEventListener("mouseup", (e) => {
                if (this.placingService.isCreating) {
                    let component = this.placingService.createComponent(this.placingService.creatingItem, e.offsetX - 20, e.offsetY - 20, this.placingService.creatingItemOptions);
                    this.pushComponent(component);
                    this.placingService.stopCreating();
                    this.componentChanged();
                }
            });
            window.addEventListener("touchstart", (e) => { this.lastTouch = e.touches[0]; });
            window.addEventListener("touchmove", (e) => { this.lastTouch = e.touches[0]; });
            window.addEventListener("touchend", (e) => {
                if (this.placingService.isCreating) {
                    let posX = (this.posX - this.placingService.boardWidth * (this.placingService.boardScale - 1) / 2);
                    let posY = (this.posY - this.placingService.boardHeight * (this.placingService.boardScale - 1) / 2);
                    var x = Math.max(Math.min((this.lastTouch.pageX - posX) / this.placingService.boardScale - 20, this.placingService.boardWidth), 0);
                    var y = Math.max(Math.min((this.lastTouch.pageY - posY) / this.placingService.boardScale - 80 / this.placingService.boardScale, this.placingService.boardWidth), 0);
                    let component = this.placingService.createComponent(this.placingService.creatingItem, x, y, this.placingService.creatingItemOptions);
                    this.pushComponent(component);
                    this.placingService.stopCreating();
                    this.componentChanged();
                }
                return true;
            });
            this.placingService.componentChanged.subscribe(() => {
                // Some component just got changed, change will be added for undo
                this.componentChanged();
            });
            this.placingService.pushComponent.subscribe((component) => {
                // A component was created somewhere else and needs to be added to the state of the board
                this.pushComponent(component);
            });
            this.placingService.showComponentContextMenu.subscribe((e) => {
                // Display a context menu on component
                this.showComponentContextMenu = true;
                this.showContextMenu = false;
                this.contextMenuX = e.x;
                this.contextMenuY = e.y;
            });
            setInterval(() => {
                if (this.allLogicComponents.length != 0) {
                    this.save();
                }
            }, this.AUTOSAVE_INTERVAL * 1000);
        }
    }
    copyItem() {
        let selections = [];
        for (let selection of this.selectionService.currentSelections) {
            let outputConnectionsList = [];
            let component = selection.getLogicComponent();
            let outputPort = selection.getPortComponent(true);
            if (outputPort) {
                outputConnectionsList = outputConnectionsList.concat(outputPort.LogicPort.connections.map(conn => {
                    return {
                        from: outputPort.LogicParent.originID,
                        to: conn.getOtherPort(outputPort.LogicPort).parent.originID,
                        lineBreaks: conn.lineBreaks,
                        title: conn.title
                    };
                }));
            }
            selections.push({
                component: selection.constructor,
                logicComponent: selection.getLogicComponent(),
                options: Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_2__["clone"])(component.options),
                outputConnectionsList: outputConnectionsList
            });
        }
        this.placingService.copyItems(selections);
    }
    pasteItem(x = -1, y = -1) {
        this.selectionService.clearSelection();
        this.selectionService.clearCurrentConnectionSelections();
        for (let component of this.placingService.pasteItem(x, y)) {
            this.pushComponent(component);
            component.onViewInit.push(() => {
                this.selectionService.addSelection(component, true);
            });
        }
        this.componentChanged();
    }
    cutItem() {
        this.copyItem();
        this.delete();
    }
    selectAll() {
        for (let component of this.allComponents) {
            this.selectionService.addSelection(component, true);
        }
    }
    ngAfterViewChecked() { this.changeRef.detectChanges(); }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.placingService.connectionRef = this.conn;
            this.placingService.snackBar = this.snackBar;
            if (this.loadedSave) {
                this.loadFromSave(this.loadedSave);
            }
            else if (!this.isReadOnly) {
                this.loadLatestBoard();
            }
            if (!this.isReadOnly) {
                // Loading saved boards
                let savedBoardsJson = this.savingService.getSavedBoardsJson();
                if (savedBoardsJson == null)
                    return;
                let savedBoards = JSON.parse(savedBoardsJson);
                if (savedBoards.length == 0)
                    return;
                for (let board of savedBoards) { // Convert all boards to IDataOperator[]
                    let convertedBoard = this.savingService.getComponentsFromSave(board.components);
                    if (convertedBoard)
                        this.savedBoards.push(new SavedBoard(board.name || "Untitled System", convertedBoard, board));
                }
                for (let savedBoard of this.savedBoards) {
                    this.displaySavedBoard(savedBoard);
                }
                this.showSavedBoardsPopup = true;
                setTimeout(() => {
                    this.showSavedBoardsPopup = false;
                }, 6500);
            }
            else {
                this.resetView();
            }
        });
    }
    displaySavedBoard(savedBoard) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let divContainer = this.renderer.createElement('div');
            divContainer.className = "saved-board";
            divContainer.id = savedBoard.save.id;
            divContainer.onclick = () => {
                // Display options
                if (this.selectedSavedBoard) {
                    document.getElementById(this.selectedSavedBoard.save.id).classList.remove("selected");
                }
                this.selectedSavedBoard = savedBoard;
                document.getElementById(this.selectedSavedBoard.save.id).classList.add("selected");
            };
            divContainer.ondblclick = () => {
                // Load board
                this.closeSavedBoards();
                this.loadFromSave(savedBoard.save);
            };
            const expOptions = new _export_service__WEBPACK_IMPORTED_MODULE_3__["ExportPngOptions"]();
            expOptions.lightMode = !this.viewingService.isDarkMode();
            let canvas = yield this.exportService.getCanvas(savedBoard.board, expOptions);
            canvas.style.width = "100%";
            canvas.style.marginBottom = "-5px";
            let title = this.renderer.createElement("span");
            title.innerText = savedBoard.title;
            title.className = "saved-board-title";
            let existing = document.getElementById(savedBoard.save.id);
            if (existing)
                this.savedBoardsRef.nativeElement.removeChild(existing);
            this.renderer.appendChild(divContainer, canvas);
            this.renderer.appendChild(divContainer, title);
            this.renderer.appendChild(this.savedBoardsRef.nativeElement, divContainer);
        });
    }
    openSavedBoards() {
        this.showSavedBoards = true;
        this.showSavedBoardsPopup = false;
        let savedBoard = this.savedBoards.find(board => board.save.id == this.currentBoardId);
        if (savedBoard)
            this.displaySavedBoard(savedBoard);
    }
    closeSavedBoards() {
        this.showSavedBoards = false;
    }
    deleteSelectedSavedBoard() {
        this.savedBoardsRef.nativeElement.removeChild(document.getElementById(this.selectedSavedBoard.save.id));
        this.savedBoards.splice(this.savedBoards.findIndex(board => board === this.selectedSavedBoard), 1);
        this.selectedSavedBoard = null;
        this.savingService.saveBoards(this.savedBoards.map(board => board.save));
    }
    loadSelectedSavedBoard() {
        this.changesService.reset();
        if (this.allLogicComponents.length != 0)
            this.saveCurrentBoardToAllBoards();
        this.closeSavedBoards();
        this.loadFromSave(this.selectedSavedBoard.save);
    }
    getCurrentBoardCanvas(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.exportService.getCanvas(this.allLogicComponents, options);
        });
    }
    getCurrentBoardSvg(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.exportService.getSvg(this.allLogicComponents, options);
        });
    }
    loadLatestBoard() {
        let latestBoardJson = this.savingService.getLatestBoardJson();
        if (latestBoardJson) {
            try {
                this.loadFromJson(latestBoardJson, false);
            }
            catch (e) {
                console.log(e);
                this.isLoading = false;
            }
        }
        setTimeout(() => {
            this.beforeState = this.getCurrentBoardJson();
        }, 1000);
    }
    handleMousedown(e) {
        if (e instanceof MouseEvent) {
            if (e.button == 0 && !this.isReadOnly) {
                // Start selecting
                this.showContextMenu = false;
                this.showComponentContextMenu = false;
                this.selectionService.startSelecting(e, this.placingService.boardScale);
            }
            else if (this.isReadOnly || e.button == 1 || e.button == 2) {
                e.preventDefault();
                if (!this.placingService.canDrag())
                    return;
                this.board.classList.add("moving");
                this.board.addEventListener("mousemove", this.handleMousemove);
                window.addEventListener("mouseup", this.handleMouseup);
            }
        }
        else if (e instanceof TouchEvent) {
            e.preventDefault();
            if (!this.placingService.canDrag())
                return;
            this.lastTouchMoveX = e.touches[0].clientX;
            this.lastTouchMoveY = e.touches[0].clientY;
            this.board.classList.add("moving");
            this.board.addEventListener("touchmove", this.handleMousemove);
            window.addEventListener("touchend", this.handleMouseup);
        }
    }
    updateBoardTransform() {
        this.board.style.transform = `translateX(${this.posX}px) translateY(${this.posY}px) scale(${this.placingService.boardScale})`;
    }
    handleSelfClick() {
        this.selectionService.clearSelection();
        this.selectionService.clearConnectionSelection();
        this.selectionService.clearCurrentConnectionSelections();
        this.selectionService.clearLineBreakSelection();
    }
    zoomOut(modifier = 1) {
        this.placingService.boardScale = Math.max(this.placingService.boardScale - (0.1 / modifier), 0.1);
        this.updateBoardTransform();
    }
    zoomIn(modifier = 1) {
        this.placingService.boardScale = Math.min(this.placingService.boardScale + (0.1 / modifier), 2);
        this.updateBoardTransform();
    }
    toggleTitles() {
        this.viewingService.setTitlesHidden(!this.viewingService.isTitlesHidden(), false);
    }
    resetView() {
        if (this.allLogicComponents.length == 0 || !this.isReadOnly) {
            this.posX = (window.innerWidth - this.placingService.boardWidth) / 2;
            this.posY = (window.innerHeight - this.placingService.boardHeight) / 2;
            this.placingService.boardScale = 1;
        }
        else {
            let minX = Number.MAX_VALUE;
            let minY = Number.MAX_VALUE;
            let maxX = 0;
            let maxY = 0;
            for (let component of this.allLogicComponents) {
                minX = Math.min(component.options.X, minX);
                minY = Math.min(component.options.Y, minY);
                let { width, height } = this.exportService.getComponentSize(component);
                maxX = Math.max(component.options.X + width, maxX);
                maxY = Math.max(component.options.Y + height, maxY);
            }
            // Size of components
            let width = maxX - minX + 80;
            let height = maxY - minY + 30;
            // Adjust scale to fit size
            this.placingService.boardScale = Math.max(Math.min(Math.round((window.innerWidth / width) / 0.1) * 0.1, 2), 0.3);
            this.placingService.boardScale = Math.max(Math.min(Math.round((window.innerHeight / height) / 0.1) * 0.1, this.placingService.boardScale), 0.3);
            let xFromCenter = (this.placingService.boardWidth / 2) - minX;
            let yFromCenter = (this.placingService.boardHeight / 2) - minY;
            this.posX = -minX + xFromCenter + (window.innerWidth - width * this.placingService.boardScale) / 2 + 20;
            this.posY = -minY + yFromCenter + (window.innerHeight - height * this.placingService.boardScale) / 2 + 15;
            // Get the board in view
            for (let i = 2; i > this.placingService.boardScale; i -= 0.1) {
                this.posX -= xFromCenter / 10;
                this.posY -= yFromCenter / 10;
            }
        }
        this.updateBoardTransform();
    }
    /**
     * Triggers every client in the board to send data automatically
     */
    startAllClients() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isAllClientsSendingData || !this.canToggleClientsSendingData)
                return;
            this.canToggleClientsSendingData = false;
            this.isAllClientsSendingData = true;
            for (let component of this.allComponents) {
                if (component instanceof _components_client_client_component__WEBPACK_IMPORTED_MODULE_8__["ClientComponent"]) {
                    if (component.canEstablishConnection) {
                        component.establishConnection();
                    }
                    component.toggleAutomaticSend();
                    yield Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_2__["sleep"])(300); // Make some delay between
                }
                else if (component instanceof _components_clientcluster_clientcluster_component__WEBPACK_IMPORTED_MODULE_9__["ClientclusterComponent"]) {
                    component.LogicClientCluster.startSendingData();
                    yield Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_2__["sleep"])(300); // Make some delay between
                }
            }
            setTimeout(() => {
                this.canToggleClientsSendingData = true;
            }, 400);
        });
    }
    stopAllClients() {
        if (!this.isAllClientsSendingData || !this.canToggleClientsSendingData)
            return;
        this.canToggleClientsSendingData = false;
        this.isAllClientsSendingData = false;
        for (let component of this.allComponents) {
            if (component instanceof _components_client_client_component__WEBPACK_IMPORTED_MODULE_8__["ClientComponent"]) {
                if (component.canEndConnection) {
                    component.endConnection();
                }
                else {
                    component.toggleAutomaticSend();
                }
            }
            else if (component instanceof _components_clientcluster_clientcluster_component__WEBPACK_IMPORTED_MODULE_9__["ClientclusterComponent"]) {
                component.LogicClientCluster.stopSendingData();
            }
        }
        setTimeout(() => {
            this.canToggleClientsSendingData = true;
        }, 400);
    }
    componentChanged() {
        this.changesService.pushChange(this.beforeState);
        this.beforeState = this.getCurrentBoardJson();
    }
    getCurrentBoardJson() {
        return this.savingService.getBoardJson(this.allLogicComponents, this.savingService.systemName, this.currentBoardId);
    }
    undo() {
        let undoState = this.changesService.getUndo(this.getCurrentBoardJson());
        if (undoState)
            this.loadFromJson(undoState, false);
        setTimeout(() => {
            this.beforeState = this.getCurrentBoardJson();
        }, 400);
    }
    redo() {
        let redoState = this.changesService.getRedo();
        if (redoState)
            this.loadFromJson(redoState, false);
        setTimeout(() => {
            this.beforeState = this.getCurrentBoardJson();
        }, 400);
    }
    delete() {
        let components = this.selectionService.currentSelections;
        for (let component of components) {
            let logicComponent = component.getLogicComponent();
            this.allComponents.splice(this.allComponents.findIndex(comp => comp === component), 1);
            this.allLogicComponents.splice(this.allLogicComponents.findIndex(comp => comp.originID == logicComponent.originID), 1);
        }
        if (this.selectionService.deleteSelection())
            this.componentChanged();
    }
    newFile() {
        if (this.allLogicComponents.length != 0)
            this.saveCurrentBoardToAllBoards();
        this.currentBoardId = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_2__["UUID"])();
        this.changeSystemName.emit("Untitled system");
        this.clearBoard(true);
        this.resetView();
        this.changesService.reset();
    }
    save(showIcon = false) {
        if (this.isReadOnly)
            return;
        this.savingService.save(this.allLogicComponents, this.currentBoardId);
        this.saveCurrentBoardToAllBoards();
        if (showIcon) {
            this.isAutosaving = true;
            setTimeout(() => {
                this.isAutosaving = false;
            }, 1000);
        }
    }
    loadFromJson(json, showInfo = true) {
        try {
            let file = JSON.parse(json);
            this.loadFromSave(file);
        }
        catch (e) {
            console.log(e);
            if (showInfo)
                this.placingService.showSnack("This file could not be loaded because it is corrupted or not supported.");
            setTimeout(() => {
                this.isLoading = false;
            }, 100);
            return;
        }
    }
    /**
     * Loads the board from save object generated by saving service
     */
    loadFromSave(save, showInfo = true) {
        this.clearBoard();
        this.isLoading = true;
        let wasError = false;
        let components;
        components = save;
        if (save.components)
            components = save.components;
        if (components == null || components.length == 0) {
            this.isLoading = false;
            return;
        }
        if (save.name)
            this.changeSystemName.emit(save.name);
        if (save.id != null && save.id != "undefined")
            this.currentBoardId = save.id;
        else
            this.currentBoardId = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_2__["UUID"])();
        let connectionTable = [];
        let outputPortsTable = {};
        let index = 0;
        for (let logicComponent of components) {
            let type = this.getComponentTypeFromName(logicComponent.type);
            if (type == null || logicComponent.options == null) {
                wasError = true;
                if (index == components.length - 1) {
                    this.connectLoadedComponents(connectionTable, outputPortsTable);
                }
                index++;
                continue;
            }
            let left = logicComponent.options.X;
            let top = logicComponent.options.Y;
            let component = this.placingService.createComponent(type, left, top, logicComponent.options, this.isReadOnly);
            this.pushComponent(component);
            const currentComponentIndex = index;
            component.onViewInit.push(() => {
                if (component instanceof _components_database_database_component__WEBPACK_IMPORTED_MODULE_11__["DatabaseComponent"] && component.getLogicComponent().options.isMasterShard) {
                    component.createOutputPort();
                }
                let outputPort = component.getPortComponent(true);
                let inputPort = component.getPortComponent(false);
                if (outputPort) {
                    outputPortsTable[logicComponent.id] = outputPort;
                }
                if (inputPort) {
                    let connection = {};
                    connection.port = inputPort;
                    connection.id = logicComponent.id;
                    connection.to = logicComponent.connections;
                    connectionTable.push(connection);
                }
                if (currentComponentIndex == components.length - 1) {
                    setTimeout(() => {
                        this.connectLoadedComponents(connectionTable, outputPortsTable);
                    }, 150);
                }
            });
            index++;
        }
        if (wasError && showInfo)
            this.placingService.showSnack("There were errors loading the file and some components couldn't be loaded.");
    }
    saveCurrentBoardToAllBoards() {
        let boardSave = this.savingService.getBoardSave(this.allLogicComponents, this.savingService.systemName, this.currentBoardId);
        let currentBoardIndex = this.savedBoards.findIndex(board => board.save.id == this.currentBoardId);
        let savedBoard = new SavedBoard(boardSave.name, this.allLogicComponents, boardSave);
        if (currentBoardIndex != -1)
            this.savedBoards.splice(currentBoardIndex, 1);
        else
            this.displaySavedBoard(savedBoard);
        this.savedBoards.push(savedBoard);
        this.savingService.saveBoards(this.savedBoards.map(board => board.save));
    }
    connectLoadedComponents(connectionTable, outputPortsTable) {
        for (let connection of connectionTable) {
            connection.to.filter(con => con.isFromOutput == null || !con.isFromOutput).forEach(con => {
                this.placingService.connectPorts(outputPortsTable[con.to], connection.port, this.isReadOnly, con.lineBreaks, con.title);
            });
        }
        setTimeout(() => {
            this.isLoading = false;
            this.save();
            this.updateComponents();
        }, 100);
    }
    updateComponents() {
        for (let component of this.allComponents) {
            if (component.updateSelection) {
                component.updateSelection();
            }
        }
    }
    clearBoard(clearLocalStorage = false) {
        for (let component of this.allComponents) {
            this.selectionService.currentSelections = [component];
            try { // Deleting element while sending data could throw error
                this.selectionService.deleteSelection();
            }
            catch (_a) { }
        }
        if (clearLocalStorage)
            localStorage.setItem(this.savingService.LOCALSTORAGE_AUTOSAVE_KEY, "");
        this.allComponents = [];
        this.allLogicComponents = [];
    }
    getComponentTypeFromName(name) {
        return this.componentTypes[name];
    }
    pushComponent(component) {
        this.allComponents.push(component);
        this.allLogicComponents.push(component.getLogicComponent());
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_placing_service__WEBPACK_IMPORTED_MODULE_18__["PlacingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_selection_service__WEBPACK_IMPORTED_MODULE_19__["SelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_saving_service__WEBPACK_IMPORTED_MODULE_21__["SavingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_changes_service__WEBPACK_IMPORTED_MODULE_22__["ChangesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_export_service__WEBPACK_IMPORTED_MODULE_3__["ExportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_viewing_service__WEBPACK_IMPORTED_MODULE_23__["ViewingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], viewQuery: function BoardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.conn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.savedBoardsRef = _t.first);
    } }, inputs: { isReadOnly: "isReadOnly", loadedSave: "loadedSave", viewerEditLink: "viewerEditLink" }, outputs: { changeSystemName: "changeSystemName" }, decls: 11, vars: 6, consts: [["id", "board", "oncontextmenu", "return false;", 1, "board", "infocus", 3, "mousedown.self", "click.self", "click", "touchstart.self", "pinchout", "pinchin"], ["board", ""], ["conn", ""], ["id", "svg-canvas", 1, "svg-canvas"], ["oncontextmenu", "return false;", "class", "context-menu", 3, "transform", "top", "left", 4, "ngIf"], ["class", "backdrop-centralized loading", 4, "ngIf"], [4, "ngIf"], ["class", "read-only-controls", 4, "ngIf"], ["class", "read-only-tip", 3, "matTooltip", 4, "ngIf"], ["oncontextmenu", "return false;", 1, "context-menu"], [1, "menu"], [1, "item", 3, "click"], [1, "line"], [1, "backdrop-centralized", "loading"], ["src", "./assets/logo.svg"], ["class", "autosave", 4, "ngIf"], [1, "backdrop-centralized", 3, "click.self"], [1, "saved-boards"], [1, "close", 3, "click"], [1, "saved-boards-top"], [1, "title"], [1, "note"], [1, "saved-boards-main-container"], [1, "saved-boards-main"], ["savedBoardsRef", ""], [1, "saved-boards-side"], [1, "selected-title"], [1, "selected-info"], [1, "selected-actions"], [1, "delete", 3, "disabled", "click"], [1, "load", 3, "disabled", "click"], [1, "saved-boards-popup"], [1, "hidden"], [1, "show"], [1, "text"], [3, "click"], [1, "autosave"], [1, "far", "fa-save"], [1, "highlight"], [1, "read-only-controls"], [1, "controls"], [3, "matTooltip", "click", 4, "ngIf"], [3, "matTooltip", "click"], [1, "fas", "fa-search-plus"], [1, "fas", "fa-search-minus"], [1, "fas", "fa-search"], [1, "fas", "fa-heading"], ["target", "_blank", 3, "href", "matTooltip"], [1, "fas", "fa-edit"], [1, "fas", "fa-play"], [1, "fas", "fa-stop"], [1, "read-only-tip", 3, "matTooltip"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown.self", function BoardComponent_Template_div_mousedown_self_0_listener($event) { return ctx.handleMousedown($event); })("click.self", function BoardComponent_Template_div_click_self_0_listener() { return ctx.handleSelfClick(); })("click", function BoardComponent_Template_div_click_0_listener() { return ctx.handleClick(); })("touchstart.self", function BoardComponent_Template_div_touchstart_self_0_listener($event) { ctx.handleMousedown($event); return ctx.handleSelfClick(); })("pinchout", function BoardComponent_Template_div_pinchout_0_listener() { return ctx.zoomIn(8); })("pinchin", function BoardComponent_Template_div_pinchin_0_listener() { return ctx.zoomOut(8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "template", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BoardComponent_div_5_Template, 22, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BoardComponent_div_6_Template, 9, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, BoardComponent_div_7_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, BoardComponent_div_8_Template, 34, 13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, BoardComponent_div_9_Template, 14, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BoardComponent_p_10_Template, 2, 1, "p", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showContextMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showComponentContextMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isReadOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isReadOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isReadOnly);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_24__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltip"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  min-height: 100vh;\n  overflow: hidden;\n}\n\n.board[_ngcontent-%COMP%] {\n  background: var(--background-light);\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);\n  z-index: -1;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='90' height='90' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.068' fill-rule='evenodd'%3E%3Ccircle cx='4' cy='4' r='1'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.board.infocus[_ngcontent-%COMP%]:hover {\n  cursor: default;\n}\n\n.board.moving[_ngcontent-%COMP%] {\n  cursor: -webkit-grab !important;\n  cursor: grab !important;\n}\n\n.svg-canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.backdrop-centralized[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.loading[_ngcontent-%COMP%] {\n  gap: 1em;\n  font-size: 2em;\n  color: var(--text);\n}\n\n.loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-animation: loadingAnim 1s ease-in-out infinite;\n          animation: loadingAnim 1s ease-in-out infinite;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  color: var(--text);\n  top: 0.2em;\n  right: 0.2em;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  cursor: pointer;\n  font-size: 1.1em;\n}\n\n.close[_ngcontent-%COMP%]:hover {\n  color: var(--text);\n}\n\n.autosave[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3em;\n  right: 1em;\n  color: #fff;\n  background-color: var(--main);\n  width: 2em;\n  height: 2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.35em;\n  border-radius: 50%;\n  opacity: 0.5;\n  -webkit-animation: autosave 1s ease-in-out;\n          animation: autosave 1s ease-in-out;\n}\n\n.saved-boards[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 800px;\n  max-width: 950px;\n  color: var(--text);\n  background-color: var(--background-light);\n  padding: 1em;\n}\n\n.saved-boards[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.saved-boards[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: 0.65em;\n  font-weight: normal;\n  text-align: center;\n  display: block;\n  color: var(--text);\n}\n\n.saved-boards[_ngcontent-%COMP%]   .saved-boards-main-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5em;\n}\n\n.saved-boards[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  outline: 0.2em solid var(--main) !important;\n}\n\n.saved-boards[_ngcontent-%COMP%]   .saved-boards-main[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  padding: 1em;\n  flex-basis: 70%;\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 1em;\n  max-height: 70vh;\n  overflow-y: scroll;\n}\n\n.saved-boards[_ngcontent-%COMP%]   .saved-boards-main[_ngcontent-%COMP%]   .saved-board[_ngcontent-%COMP%] {\n  position: relative;\n  transition: filter 0.2s ease-in-out;\n  outline: 0.1rem solid var(--background-dark);\n  cursor: pointer;\n}\n\n.saved-boards[_ngcontent-%COMP%]   .saved-boards-main[_ngcontent-%COMP%]   .saved-board[_ngcontent-%COMP%]:hover {\n  filter: brightness(80%);\n}\n\n.saved-boards[_ngcontent-%COMP%]   .saved-boards-main[_ngcontent-%COMP%]   .saved-board[_ngcontent-%COMP%]   .saved-board-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.3em;\n  right: 0.5em;\n  color: var(--text);\n}\n\n.saved-boards[_ngcontent-%COMP%]   .saved-boards-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  gap: 0.5em;\n  padding: 0.5em;\n  flex-grow: 1;\n  color: var(--text);\n}\n\n.saved-boards[_ngcontent-%COMP%]   .saved-boards-side[_ngcontent-%COMP%]   .selected-title[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  text-align: center;\n  display: block;\n}\n\n.saved-boards[_ngcontent-%COMP%]   .saved-boards-side[_ngcontent-%COMP%]   .selected-info[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n}\n\n.saved-boards[_ngcontent-%COMP%]   .saved-boards-side[_ngcontent-%COMP%]   .selected-info[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: var(--main);\n}\n\n.saved-boards[_ngcontent-%COMP%]   .saved-boards-side[_ngcontent-%COMP%]   .selected-actions[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  align-self: center;\n  display: flex;\n  gap: 1.4em;\n}\n\n.saved-boards[_ngcontent-%COMP%]   .saved-boards-side[_ngcontent-%COMP%]   .selected-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: normal;\n  border: 0;\n  outline: 0;\n  padding: 0.3em 1em;\n  color: #fff;\n  border-radius: 0.1em;\n  cursor: pointer;\n}\n\n.saved-boards[_ngcontent-%COMP%]   .saved-boards-side[_ngcontent-%COMP%]   .selected-actions[_ngcontent-%COMP%]   button.delete[_ngcontent-%COMP%] {\n  background-color: #b82525;\n}\n\n.saved-boards[_ngcontent-%COMP%]   .saved-boards-side[_ngcontent-%COMP%]   .selected-actions[_ngcontent-%COMP%]   button.load[_ngcontent-%COMP%] {\n  background-color: var(--main);\n}\n\n.saved-boards[_ngcontent-%COMP%]   .saved-boards-side[_ngcontent-%COMP%]   .selected-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  filter: grayscale(100%);\n  cursor: not-allowed;\n}\n\n.saved-boards-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 100px;\n  background-color: var(--background-light);\n  font-size: 0.8em;\n  right: 0;\n  display: flex;\n  color: var(--text);\n  border: 0.1rem solid var(--border);\n  transition: transform 0.4s ease-in-out;\n}\n\n.saved-boards-popup[_ngcontent-%COMP%]:hover {\n  transform: translateX(0) !important;\n}\n\n.saved-boards-popup[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  width: 1.75em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-weight: bold;\n  font-size: 1.25em;\n  background-color: var(--main);\n}\n\n.saved-boards-popup[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] {\n  padding: 0.5em 1em;\n}\n\n.saved-boards-popup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n  width: 80px;\n  outline: 0;\n  border: 0;\n  padding: 0.5em 0.5em;\n  color: #fff;\n  background-color: var(--main);\n  cursor: pointer;\n  transition: filter 0.1s linear;\n}\n\n.saved-boards-popup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.25);\n}\n\n.read-only-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.5em;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin: 0 auto;\n}\n\n.read-only-controls[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5em;\n  transition: background-color 0.2s ease-in-out;\n  padding: 0.5em 1em;\n  border-radius: 2em;\n  background-color: var(--background-dark);\n  border: 0.15rem solid var(--border);\n}\n\n.read-only-controls[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]:hover {\n  background-color: var(--background);\n}\n\n.read-only-controls[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .read-only-controls[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 0;\n  font-size: 1.5rem;\n  outline: none;\n  padding: 0.2em;\n  background-color: transparent;\n  color: var(--text);\n  cursor: pointer;\n}\n\n.read-only-controls[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .read-only-controls[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .read-only-controls[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .read-only-controls[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.read-only-watermark[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1em;\n  bottom: 0.5em;\n  color: var(--text);\n  opacity: 0.5;\n  font-weight: 100;\n  font-size: 12px;\n}\n\n.read-only-watermark[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.read-only-watermark[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--main);\n}\n\n.read-only-tip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5em;\n  left: 0.5em;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1.5em;\n  height: 1.5em;\n  background: var(--main);\n  border-radius: 50%;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.context-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 140;\n  background-color: var(--background);\n  border: 0.15rem solid var(--border);\n  color: var(--text);\n  font-size: 0.9rem;\n  transform-origin: top left;\n  white-space: nowrap;\n}\n\n.context-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.context-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 0.75em 1em;\n  flex-grow: 1;\n  cursor: pointer;\n}\n\n.context-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background-color: var(--background-dark);\n}\n\n.context-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 80%;\n  background-color: var(--text);\n  border-color: var(--text);\n  opacity: 0.1;\n}\n\n@-webkit-keyframes loadingAnim {\n  0% {\n    transform: scale(0.9);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(0.9);\n  }\n}\n\n@keyframes loadingAnim {\n  0% {\n    transform: scale(0.9);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(0.9);\n  }\n}\n\n@-webkit-keyframes autosave {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.8;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes autosave {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.8;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLG1DQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0EsdVBBQUE7QUFFSjs7QUFESTtFQUNJLGVBQUE7QUFHUjs7QUFESTtFQUNJLCtCQUFBO0VBQUEsdUJBQUE7QUFHUjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUdKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUdKOztBQURBO0VBQ0ksUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUhJO0VBQ0ksc0RBQUE7VUFBQSw4Q0FBQTtBQUtSOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUpJO0VBQ0ksa0JBQUE7QUFNUjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtBQU9KOztBQU5JO0VBQ0ksa0JBQUE7QUFRUjs7QUFOSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVFSOztBQU5JO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUFRUjs7QUFOSTtFQUNJLDJDQUFBO0FBUVI7O0FBTkk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVFSOztBQVBRO0VBQ0ksa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtBQVNaOztBQVJZO0VBQ0ksdUJBQUE7QUFVaEI7O0FBUlk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFVaEI7O0FBTkk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVFSOztBQVBRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFTWjs7QUFQUTtFQUNJLGlCQUFBO0FBU1o7O0FBUlk7RUFDSSxrQkFBQTtBQVVoQjs7QUFQUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBU1o7O0FBUlk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFVaEI7O0FBVGdCO0VBQ0kseUJBQUE7QUFXcEI7O0FBVGdCO0VBQ0ksNkJBQUE7QUFXcEI7O0FBVGdCO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtBQVdwQjs7QUFMQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHNDQUFBO0FBUUo7O0FBUEk7RUFDSSxtQ0FBQTtBQVNSOztBQVBJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQVNSOztBQVBJO0VBQ0ksa0JBQUE7QUFTUjs7QUFQSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFTUjs7QUFSUTtFQUNJLHdCQUFBO0FBVVo7O0FBTkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7QUFTSjs7QUFSSTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQ0FBQTtBQVVSOztBQVRRO0VBQ0ksbUNBQUE7QUFXWjs7QUFUUTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFXWjs7QUFWWTtFQUNJLFVBQUE7QUFZaEI7O0FBUEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBVUo7O0FBVEk7RUFDSSwwQkFBQTtBQVdSOztBQVZRO0VBQ0ksa0JBQUE7QUFZWjs7QUFSQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVdKOztBQVRBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBWUo7O0FBWEk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFhUjs7QUFaUTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFjWjs7QUFiWTtFQUNJLHdDQUFBO0FBZWhCOztBQVpRO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQWNaOztBQVRBO0VBQ0k7SUFDSSxxQkFBQTtFQVlOO0VBVkU7SUFDSSxxQkFBQTtFQVlOO0VBVkU7SUFDSSxxQkFBQTtFQVlOO0FBQ0Y7O0FBckJBO0VBQ0k7SUFDSSxxQkFBQTtFQVlOO0VBVkU7SUFDSSxxQkFBQTtFQVlOO0VBVkU7SUFDSSxxQkFBQTtFQVlOO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLFVBQUE7RUFXTjtFQVRFO0lBQ0ksWUFBQTtFQVdOO0VBVEU7SUFDSSxVQUFBO0VBV047QUFDRjs7QUFwQkE7RUFDSTtJQUNJLFVBQUE7RUFXTjtFQVRFO0lBQ0ksWUFBQTtFQVdOO0VBVEU7SUFDSSxVQUFBO0VBV047QUFDRiIsImZpbGUiOiJib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJvYXJke1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzkwJyBoZWlnaHQ9JzkwJyB2aWV3Qm94PScwIDAgMjAgMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NnIGZpbGw9JyUyMzAwMDAwMCcgZmlsbC1vcGFjaXR5PScwLjA2OCcgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2NpcmNsZSBjeD0nNCcgY3k9JzQnIHI9JzEnLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICAmLmluZm9jdXM6aG92ZXJ7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG4gICAgJi5tb3Zpbmd7XG4gICAgICAgIGN1cnNvcjogZ3JhYiAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5zdmctY2FudmFze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5iYWNrZHJvcC1jZW50cmFsaXplZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG4ubG9hZGluZ3tcbiAgICBnYXA6IDFlbTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgaW1ne1xuICAgICAgICBhbmltYXRpb246IGxvYWRpbmdBbmltIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIH1cbn1cbi5jbG9zZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIHRvcDogMC4yZW07XG4gICAgcmlnaHQ6IDAuMmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICB9XG59XG4uYXV0b3NhdmV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogM2VtO1xuICAgIHJpZ2h0OiAxZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XG4gICAgd2lkdGg6IDJlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjM1ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBhbmltYXRpb246IGF1dG9zYXZlIDFzIGVhc2UtaW4tb3V0O1xufVxuLnNhdmVkLWJvYXJkc3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLXdpZHRoOiA4MDBweDtcbiAgICBtYXgtd2lkdGg6IDk1MHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgLnRpdGxle1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5ub3Rle1xuICAgICAgICBmb250LXNpemU6IDAuNjVlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIH1cbiAgICAuc2F2ZWQtYm9hcmRzLW1haW4tY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDAuNWVtO1xuICAgIH1cbiAgICAuc2VsZWN0ZWR7XG4gICAgICAgIG91dGxpbmU6IDAuMmVtIHNvbGlkIHZhcigtLW1haW4pICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zYXZlZC1ib2FyZHMtbWFpbntcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGZsZXgtYmFzaXM6IDcwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICBnYXA6IDFlbTtcbiAgICAgICAgbWF4LWhlaWdodDogNzB2aDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAuc2F2ZWQtYm9hcmR7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIG91dGxpbmU6IDAuMXJlbSBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zYXZlZC1ib2FyZC10aXRsZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwLjNlbTtcbiAgICAgICAgICAgICAgICByaWdodDogMC41ZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5zYXZlZC1ib2FyZHMtc2lkZXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIGdhcDogMC41ZW07XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAgICAgLnNlbGVjdGVkLXRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5zZWxlY3RlZC1pbmZve1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICAgICAgICAuaGlnaGxpZ2h0e1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc2VsZWN0ZWQtYWN0aW9uc3tcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGdhcDogMS40ZW07XG4gICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuM2VtIDFlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjFlbTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgJi5kZWxldGV7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODQsIDM3LCAzNyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYubG9hZHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6ZGlzYWJsZWR7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5zYXZlZC1ib2FyZHMtcG9wdXB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICByaWdodDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UtaW4tb3V0O1xuICAgICY6aG92ZXJ7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaGlkZGVue1xuICAgICAgICB3aWR0aDogMS43NWVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XG4gICAgfVxuICAgIC5zaG93e1xuICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBwYWRkaW5nOiAwLjVlbSAwLjVlbTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjFzIGxpbmVhcjtcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjI1KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5yZWFkLW9ubHktY29udHJvbHN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMC41ZW07XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICAuY29udHJvbHN7IFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDAuNWVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xuICAgICAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiwgYXtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3Vze1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4ucmVhZC1vbmx5LXdhdGVybWFya3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMWVtO1xuICAgIGJvdHRvbTogMC41ZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBhe1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluKVxuICAgICAgICB9XG4gICAgfVxufVxuLnJlYWQtb25seS10aXB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMC41ZW07XG4gICAgbGVmdDogMC41ZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRleHQtbWVudXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTQwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC5tZW51e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAuaXRlbXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVlbSAxZW07XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmxpbmV7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgbG9hZGluZ0FuaW0ge1xuICAgIDAle1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgfVxuICAgIDUwJXtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cbiAgICAxMDAleyAgIFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGxvYWRpbmdBbmltIHtcbiAgICAwJXtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgIH1cbiAgICA1MCV7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB9XG4gICAgMTAwJXsgICBcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBhdXRvc2F2ZSB7XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJXtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAleyAgIFxuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cbkAtbW96LWtleWZyYW1lcyBhdXRvc2F2ZSB7XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDUwJXtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAleyAgIFxuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "MhgW":
/*!*************************************!*\
  !*** ./src/models/ClientCluster.ts ***!
  \*************************************/
/*! exports provided: ClientCluster, ClientClusterOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientCluster", function() { return ClientCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientClusterOptions", function() { return ClientClusterOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Endpoint */ "CIzy");
/* harmony import */ var _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums/gRPCMode */ "KpZ9");
/* harmony import */ var _enums_Protocol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums/Protocol */ "qEx5");
/* harmony import */ var _LogicComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogicComponent */ "dxLX");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Options */ "/XK+");
/* harmony import */ var _Port__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Port */ "WjXT");
/* harmony import */ var _RequestData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RequestData */ "LEJs");









class ClientCluster extends _LogicComponent__WEBPACK_IMPORTED_MODULE_5__["LogicComponent"] {
    constructor() {
        super();
        this.streamingConnections = [];
        this.color = "#2ebf91";
        this.outputPort = new _Port__WEBPACK_IMPORTED_MODULE_7__["Port"](this, true, true);
        this.options = new ClientClusterOptions();
        this.options.title = "Client Cluster";
    }
    receiveData(data) {
        this.fireReceiveData(data);
        if (data.header.endpoint.endpoint.protocol == _enums_Protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].WebSockets || data.header.endpoint.endpoint.grpcMode == _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_3__["gRPCMode"]["Bidirectional Streaming"] || data.header.endpoint.endpoint.grpcMode == _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_3__["gRPCMode"]["Server Streaming"]) {
            if (data.header.stream != true) { // Disconnect from stream
                let streamConnection = this.streamingConnections.find(con => con.connectionId === data.responseId);
                if (streamConnection != null)
                    this.streamingConnections.splice(this.streamingConnections.findIndex(con => con.connectionId === data.responseId), 1);
            }
        }
    }
    /**
     * Starts sending data to random available endpoints
     */
    startSendingData() {
        this.isSendingData = true;
        this.sendNewRequest();
    }
    stopSendingData() {
        for (let streamConnection of this.streamingConnections) {
            this.stopStream(streamConnection.connectionId);
        }
        this.streamingConnections = [];
        this.isSendingData = false;
    }
    sendNewRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["sleep"])((1 / Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["getRateFromOutputRate"])(this.options.outputRate)) * 1000);
            if (!this.isSendingData)
                return;
            this.sendNewRequest();
            if (this.outputPort.connections.length == 0)
                return;
            let connection = this.outputPort.connections[Math.floor(Math.random() * this.outputPort.connections.length)];
            let endpoints = connection.getOtherPort(this.outputPort).parent.getAvailableEndpoints();
            if (endpoints.length == 0)
                return;
            let targetEndpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
            let request = new _RequestData__WEBPACK_IMPORTED_MODULE_8__["RequestData"]();
            request.origin = connection;
            request.originID = this.originID;
            request.requestId = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["UUID"])();
            let epRef = new _Endpoint__WEBPACK_IMPORTED_MODULE_2__["EndpointRef"]();
            epRef.endpoint = targetEndpoint;
            epRef.method = targetEndpoint.supportedMethods[Math.floor(Math.random() * targetEndpoint.supportedMethods.length)];
            request.header = new _RequestData__WEBPACK_IMPORTED_MODULE_8__["RequestDataHeader"](epRef, targetEndpoint.protocol);
            if (targetEndpoint.grpcMode != _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_3__["gRPCMode"].Unary || targetEndpoint.protocol == _enums_Protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].WebSockets) {
                // Stream endpoint 
                let streamConnection = this.streamingConnections.find(con => con.endpoint === targetEndpoint);
                if (streamConnection != null) {
                    // Already streaming to this connection -> end stream
                    this.stopStream(streamConnection.connectionId);
                    this.streamingConnections.splice(this.streamingConnections.findIndex(con => con.connectionId == streamConnection.connectionId), 1);
                }
                else {
                    // Estabilish new stream to given connection 
                    this.streamingConnections.push(new StreamingConnection(request.requestId, targetEndpoint, connection));
                    this.stream(request, request.requestId);
                }
            }
            else {
                // Basic endpoint
                this.sendData(request);
            }
        });
    }
    sendData(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.outputPort.sendData(data, data.origin);
        });
    }
    getAvailableEndpoints() {
        let availableEndpoints = [];
        for (let connection of this.outputPort.connections) {
            connection.getOtherPort(this.outputPort).parent.getAvailableEndpoints().forEach(endpoint => {
                let duplicate = (availableEndpoints.find(ep => ep.url === endpoint.url && Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["arrayEquals"])(endpoint.supportedMethods, ep.supportedMethods)) != null);
                if (!duplicate)
                    availableEndpoints.push(endpoint);
            });
        }
        return availableEndpoints;
    }
    stopStream(connectionId) {
        let streamConnection = this.streamingConnections.find(con => con.connectionId == connectionId);
        if (streamConnection == null || streamConnection.endpoint.grpcMode == _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_3__["gRPCMode"].Unary && streamConnection.endpoint.protocol != _enums_Protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].WebSockets)
            return;
        let data = new _RequestData__WEBPACK_IMPORTED_MODULE_8__["RequestData"]();
        let epRef = new _Endpoint__WEBPACK_IMPORTED_MODULE_2__["EndpointRef"]();
        epRef.endpoint = streamConnection.endpoint;
        epRef.method = epRef.endpoint.supportedMethods[Math.floor(Math.random() * epRef.endpoint.supportedMethods.length)];
        data.header = new _RequestData__WEBPACK_IMPORTED_MODULE_8__["RequestDataHeader"](epRef, epRef.endpoint.protocol, false);
        data.requestId = connectionId;
        data.origin = streamConnection.connection;
        data.originID = this.originID;
        this.sendData(data);
    }
    stream(data, connectionId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let streamConnection = this.streamingConnections.find(con => con.connectionId == connectionId);
            if (!this.isSendingData || streamConnection == null || streamConnection.endpoint.grpcMode == _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_3__["gRPCMode"].Unary && streamConnection.endpoint.protocol != _enums_Protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].WebSockets)
                return;
            data.requestId = connectionId;
            data.origin = streamConnection.connection;
            data.header.stream = true;
            this.sendData(data);
            yield Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["sleep"])(700);
            yield this.stream(data, connectionId);
        });
    }
}
class ClientClusterOptions extends _Options__WEBPACK_IMPORTED_MODULE_6__["Options"] {
    constructor() {
        super(...arguments);
        this.outputRate = 5;
    }
}
class StreamingConnection {
    constructor(connectionId, endpoint, connection) {
        this.connectionId = connectionId;
        this.connection = connection;
        this.endpoint = endpoint;
    }
}


/***/ }),

/***/ "N3Nn":
/*!*******************************************************!*\
  !*** ./src/app/board/components/api/api.component.ts ***!
  \*******************************************************/
/*! exports provided: ApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiComponent", function() { return ApiComponent; });
/* harmony import */ var src_models_API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/API */ "iVJE");
/* harmony import */ var src_models_Endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/Endpoint */ "CIzy");
/* harmony import */ var src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/enums/APIType */ "G1KI");
/* harmony import */ var src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/enums/gRPCMode */ "KpZ9");
/* harmony import */ var src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/enums/HTTPMethod */ "axtL");
/* harmony import */ var src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/enums/Protocol */ "qEx5");
/* harmony import */ var _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/OperatorComponent */ "RW4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../info-tooltip/info-tooltip.component */ "q+md");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Shared_endpoint_select_endpoint_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Shared/endpoint-select/endpoint-select.component */ "acqn");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















function ApiComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", type_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.APIType[type_r4]);
} }
class ApiComponent extends _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_6__["OperatorComponent"] {
    constructor() {
        super(...arguments);
        this.LogicApi = new src_models_API__WEBPACK_IMPORTED_MODULE_0__["API"]();
        this.connectableEndpoints = [];
    }
    handleClick(event) {
        super.handleClick(event);
        this.updateSelection();
    }
    updateSelection() {
        this.connectableEndpoints = this.LogicApi.getConnectableEndpoints();
        for (let j = 0; j < this.LogicApi.options.endpoints.length; j++) {
            let endpoint = this.LogicApi.options.endpoints[j];
            for (let i = 0; i < endpoint.actions.length; i++) {
                let action = endpoint.actions[i];
                let currEdp = action.endpoint;
                let currMth = action.method;
                this.LogicApi.options.endpoints[j].actions[i].endpoint = null;
                if (this.connectableEndpoints.length == 0) {
                    this.connectableEndpoints = [];
                    endpoint.actions = [];
                    return;
                }
                if (currEdp != null && currMth != null) {
                    for (let e of this.connectableEndpoints) { // need this workaround to keep values in material select....
                        if (e.url == currEdp.url)
                            this.LogicApi.options.endpoints[j].actions[i].endpoint = e;
                    }
                    endpoint.actions[i].method = currMth;
                }
                else
                    endpoint.actions.splice(i, 1);
            }
        }
    }
    handleTypeChange() {
        let type = this.LogicApi.options.type;
        let endpoint;
        if (type == src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_2__["APIType"].REST) {
            endpoint = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_1__["Endpoint"]("api/posts", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_4__["HTTPMethod"].GET, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_4__["HTTPMethod"].POST, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_4__["HTTPMethod"].PUT, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_4__["HTTPMethod"].DELETE]);
        }
        else if (type == src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_2__["APIType"].GraphQL) {
            endpoint = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_1__["Endpoint"]("/graphql", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_4__["HTTPMethod"].GET, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_4__["HTTPMethod"].POST]);
        }
        else if (type == src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_2__["APIType"].RPC) {
            endpoint = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_1__["Endpoint"]("api/getPosts", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_4__["HTTPMethod"].GET]);
        }
        else if (type == src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_2__["APIType"].gRPC) {
            endpoint = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_1__["Endpoint"]("api/getPosts", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_4__["HTTPMethod"].GET]);
            endpoint.grpcMode = src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_3__["gRPCMode"].Unary;
        }
        else if (type == src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_2__["APIType"].WebSockets) {
            endpoint = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_1__["Endpoint"]("api/sendMessage", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_4__["HTTPMethod"].GET]);
            endpoint.protocol = src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_5__["Protocol"].WebSockets;
        }
        this.LogicApi.options.endpoints = [endpoint];
    }
    getLogicComponent() {
        return this.LogicApi;
    }
    static getColor() {
        let c = new src_models_API__WEBPACK_IMPORTED_MODULE_0__["API"]();
        return c.color;
    }
}
ApiComponent.ɵfac = function ApiComponent_Factory(t) { return ɵApiComponent_BaseFactory(t || ApiComponent); };
ApiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ApiComponent, selectors: [["api"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 11, consts: [["anchorRef", ""], ["conn", ""], [1, "img-container", 3, "mousedown", "touchstart", "click"], ["src", "./assets/api.svg"], [2, "display", "none"], ["options", ""], [1, "options-type-container"], [1, "property-name"], [3, "Message"], ["appearance", "fill", 1, "action-endpoint"], [3, "ngModel", "selectionChange", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "Model", "Type", "AfterChange", "ConnectableEndpoints"], [3, "value"]], template: function ApiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "template", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousedown", function ApiComponent_Template_div_mousedown_4_listener($event) { return ctx.handleMousedown($event); })("touchstart", function ApiComponent_Template_div_touchstart_4_listener($event) { return ctx.handleMousedown($event); })("click", function ApiComponent_Template_div_click_4_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Type: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "info-tooltip", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function ApiComponent_Template_mat_select_selectionChange_16_listener() { ctx.handleTypeChange(); return ctx.afterChange(); })("ngModelChange", function ApiComponent_Template_mat_select_ngModelChange_16_listener($event) { return ctx.LogicApi.options.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ApiComponent_mat_option_17_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "endpoint-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("left", ctx.LogicApi.options.X, "px")("top", ctx.LogicApi.options.Y, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("Message", "Changes the type of an API. This can change the behaviour of endpoints.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.LogicApi.options.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.APITypeKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("Model", ctx.LogicApi)("Type", ctx.LogicApi.options.type)("AfterChange", ctx.afterChange)("ConnectableEndpoints", ctx.connectableEndpoints);
    } }, directives: [_info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_8__["InfoTooltipComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _Shared_endpoint_select_endpoint_select_component__WEBPACK_IMPORTED_MODULE_13__["EndpointSelectComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.options-endpoint-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: stretch;\n  height: 2em;\n}\n\n.options-endpoint-inputs[_ngcontent-%COMP%]   .endpoint-url[_ngcontent-%COMP%] {\n  height: 100%;\n  flex-grow: 1;\n  padding: 0;\n}\n\n.options-endpoint-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 0.1em;\n}\n\n.options-endpoint-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n}\n\n.options-endpoint-action[_ngcontent-%COMP%]   .action-endpoint[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.options-endpoint-action[_ngcontent-%COMP%]   .action-method[_ngcontent-%COMP%] {\n  flex-basis: 35%;\n  flex-shrink: 0;\n}\n\n.options-endpoint-action[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  flex-basis: 10%;\n  flex-shrink: 0;\n  align-self: center;\n}\n\n.options-endpoint-actions-container[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\n\n.options-endpoint-actions-container[_ngcontent-%COMP%]   .property-name[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n\n.options-type-container[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFESTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUdSOztBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FBSUo7O0FBSEk7RUFDSSxZQUFBO0FBS1I7O0FBSEk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUtSOztBQUhJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUtSOztBQUZBO0VBQ0ksZ0JBQUE7QUFLSjs7QUFKSTtFQUNJLGdCQUFBO0FBTVI7O0FBSEE7RUFDSSxrQkFBQTtBQU1KIiwiZmlsZSI6ImFwaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5vcHRpb25zLWVuZHBvaW50LWlucHV0c3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICAmIC5lbmRwb2ludC11cmx7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cbi5vcHRpb25zLWVuZHBvaW50LWFjdGlvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgZ2FwOiAwLjFlbTtcbn1cbi5vcHRpb25zLWVuZHBvaW50LWFjdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAmIC5hY3Rpb24tZW5kcG9pbnR7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG4gICAgJiAuYWN0aW9uLW1ldGhvZHtcbiAgICAgICAgZmxleC1iYXNpczogMzUlO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICB9XG4gICAgJiAuYnV0dG9uLWljb257XG4gICAgICAgIGZsZXgtYmFzaXM6IDEwJTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG59XG4ub3B0aW9ucy1lbmRwb2ludC1hY3Rpb25zLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgICYgLnByb3BlcnR5LW5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxufVxuLm9wdGlvbnMtdHlwZS1jb250YWluZXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuIl19 */"] });
const ɵApiComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](ApiComponent);


/***/ }),

/***/ "OF2t":
/*!***********************************************************!*\
  !*** ./src/app/board/components/cache/cache.component.ts ***!
  \***********************************************************/
/*! exports provided: CacheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheComponent", function() { return CacheComponent; });
/* harmony import */ var src_models_Cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/Cache */ "jzTO");
/* harmony import */ var _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/OperatorComponent */ "RW4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../info-tooltip/info-tooltip.component */ "q+md");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");









function CacheComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", type_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.WritePolicy[type_r5]);
} }
function CacheComponent_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", type_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.ReplacementPolicy[type_r6]);
} }
class CacheComponent extends _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__["OperatorComponent"] {
    constructor() {
        super(...arguments);
        this.LogicCache = new src_models_Cache__WEBPACK_IMPORTED_MODULE_0__["Cache"]();
    }
    getLogicComponent() {
        return this.LogicCache;
    }
    static getColor() {
        let c = new src_models_Cache__WEBPACK_IMPORTED_MODULE_0__["Cache"]();
        return c.color;
    }
}
CacheComponent.ɵfac = function CacheComponent_Factory(t) { return ɵCacheComponent_BaseFactory(t || CacheComponent); };
CacheComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CacheComponent, selectors: [["cache"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 25, vars: 10, consts: [["anchorRef", ""], ["conn", ""], [1, "img-container", 3, "mousedown", "touchstart", "click"], ["src", "./assets/cache.svg"], [2, "display", "none"], ["options", ""], [1, "options-type-container"], [1, "property-name"], [3, "Message"], ["appearance", "fill", 1, "action-endpoint"], [3, "ngModel", "selectionChange", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function CacheComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "template", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function CacheComponent_Template_div_mousedown_4_listener($event) { return ctx.handleMousedown($event); })("touchstart", function CacheComponent_Template_div_touchstart_4_listener($event) { return ctx.handleMousedown($event); })("click", function CacheComponent_Template_div_click_4_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Write Policy: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "info-tooltip", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CacheComponent_Template_mat_select_selectionChange_15_listener() { return ctx.afterChange(); })("ngModelChange", function CacheComponent_Template_mat_select_ngModelChange_15_listener($event) { return ctx.LogicCache.options.writePolicy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CacheComponent_mat_option_16_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Replacement Policy: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "info-tooltip", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function CacheComponent_Template_mat_select_selectionChange_23_listener() { return ctx.afterChange(); })("ngModelChange", function CacheComponent_Template_mat_select_ngModelChange_23_listener($event) { return ctx.LogicCache.options.replacementPolicy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CacheComponent_mat_option_24_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx.LogicCache.options.X, "px")("top", ctx.LogicCache.options.Y, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Message", "Changes the write policy of the cache. This changes behaviour of writes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.LogicCache.options.writePolicy);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.WritePolicyKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Message", "Changes the replacement policy of the cache. This does not have any effect on the visualization.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.LogicCache.options.replacementPolicy);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ReplacementPolicyKeys);
    } }, directives: [_info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_3__["InfoTooltipComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.options-type-container[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhY2hlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUoiLCJmaWxlIjoiY2FjaGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ub3B0aW9ucy10eXBlLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4iXX0= */"] });
const ɵCacheComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](CacheComponent);


/***/ }),

/***/ "OXCG":
/*!******************************************************************!*\
  !*** ./src/app/board/components/Shared/title/title.component.ts ***!
  \******************************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_viewing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/viewing.service */ "nesx");
/* harmony import */ var src_app_export_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/export.service */ "38ki");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function TitleComponent_input_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TitleComponent_input_0_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.Model.options.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.Model.options.title);
} }
class TitleComponent {
    constructor(viewingService, exportService, cdRef) {
        this.viewingService = viewingService;
        this.exportService = exportService;
        this.cdRef = cdRef;
        viewingService.ViewUpdated.subscribe(() => {
            this.cdRef.detectChanges();
        });
    }
    ngOnInit() {
        this.cdRef.detectChanges();
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_viewing_service__WEBPACK_IMPORTED_MODULE_1__["ViewingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_export_service__WEBPACK_IMPORTED_MODULE_2__["ExportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["component-title"]], inputs: { Model: "Model" }, decls: 1, vars: 1, consts: [["type", "text", "class", "component-title", "spellcheck", "false", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "spellcheck", "false", 1, "component-title", 3, "ngModel", "ngModelChange"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TitleComponent_input_0_Template, 1, 1, "input", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.viewingService.isTitlesHidden());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".component-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -20px;\n  left: -25px;\n  width: calc(100% + 50px);\n  font-size: 10px;\n  z-index: 100;\n  z-index: 3;\n  overflow: visible;\n  background-color: transparent;\n  color: var(--text);\n  outline: none;\n  text-align: center;\n  border: none;\n  border-bottom: 2px solid transparent;\n  transition: border-color 0.1s linear;\n}\n.component-title[_ngcontent-%COMP%]:hover {\n  border-color: rgba(2, 86, 143, 0.45);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7QUFDSjtBQUFJO0VBQ0ksb0NBQUE7QUFFUiIsImZpbGUiOiJ0aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnQtdGl0bGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTIwcHg7XG4gICAgbGVmdDogLTI1cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDUwcHgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgei1pbmRleDogMztcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xcyBsaW5lYXI7XG4gICAgJjpob3ZlcntcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIsIDg2LCAxNDMsMC40NSk7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "OzDm":
/*!*********************************************************************!*\
  !*** ./src/app/board/components/connection/connection.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConnectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionComponent", function() { return ConnectionComponent; });
/* harmony import */ var src_models_Connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/Connection */ "uh67");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_selection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/selection.service */ "nCka");
/* harmony import */ var src_app_viewing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/viewing.service */ "nesx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = ["svg"];
const _c1 = ["mainPath"];
const _c2 = ["secondPath"];
const _c3 = ["data"];
const _c4 = ["dataAnim"];
function ConnectionComponent__svg_svg_0__svg_stop_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "stop", 16);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("stop-color", ctx_r3.portComponent1.LogicPort.parent.color);
} }
function ConnectionComponent__svg_svg_0__svg_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "stop", 16);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("stop-color", ctx_r5.portComponent2.LogicPort.parent.color);
} }
function ConnectionComponent__svg_svg_0__svg_stop_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "stop", 17);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("stop-color", ctx_r6.portComponent2.LogicPort.parent.color);
} }
function ConnectionComponent__svg_svg_0__svg_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "stop", 17);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("stop-color", ctx_r8.portComponent1.LogicPort.parent.color);
} }
function ConnectionComponent__svg_svg_0__svg_ng_container_17__svg_circle_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "circle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ConnectionComponent__svg_svg_0__svg_ng_container_17__svg_circle_1_Template__svg_circle_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const break_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r16.moveLine(break_r12, $event); })("touchstart", function ConnectionComponent__svg_svg_0__svg_ng_container_17__svg_circle_1_Template__svg_circle_touchstart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const break_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.moveLine(break_r12, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const break_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-current-selection", ctx_r14.selectionService.currentLineBreakSelection != null && ctx_r14.selectionService.currentLineBreakSelection.x === break_r12.x && ctx_r14.selectionService.currentLineBreakSelection.y === break_r12.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cx", break_r12.x)("cy", break_r12.y);
} }
function ConnectionComponent__svg_svg_0__svg_ng_container_17__svg_circle_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "circle", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ConnectionComponent__svg_svg_0__svg_ng_container_17__svg_circle_2_Template__svg_circle_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const break_r12 = ctx_r23.$implicit; const i_r13 = ctx_r23.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r22.breakLine(break_r12, ctx_r22.LogicConnection.lineBreaks[i_r13 + 1], $event); })("touchstart", function ConnectionComponent__svg_svg_0__svg_ng_container_17__svg_circle_2_Template__svg_circle_touchstart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const break_r12 = ctx_r26.$implicit; const i_r13 = ctx_r26.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r25.breakLine(break_r12, ctx_r25.LogicConnection.lineBreaks[i_r13 + 1], $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const break_r12 = ctx_r27.$implicit;
    const i_r13 = ctx_r27.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cx", (break_r12.x + ctx_r15.LogicConnection.lineBreaks[i_r13 + 1].x) / 2)("cy", (break_r12.y + ctx_r15.LogicConnection.lineBreaks[i_r13 + 1].y) / 2);
} }
function ConnectionComponent__svg_svg_0__svg_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConnectionComponent__svg_svg_0__svg_ng_container_17__svg_circle_1_Template, 1, 4, "circle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ConnectionComponent__svg_svg_0__svg_ng_container_17__svg_circle_2_Template, 1, 2, "circle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r13 > 0 && i_r13 < ctx_r11.LogicConnection.lineBreaks.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r13 < ctx_r11.LogicConnection.lineBreaks.length - 1);
} }
function ConnectionComponent__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "linearGradient", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ConnectionComponent__svg_svg_0__svg_stop_3_Template, 1, 1, "stop", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ConnectionComponent__svg_svg_0__svg_ng_template_4_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ConnectionComponent__svg_svg_0__svg_stop_6_Template, 1, 1, "stop", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ConnectionComponent__svg_svg_0__svg_ng_template_7_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "path", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "text", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "textPath", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "g", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "path", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConnectionComponent__svg_svg_0_Template__svg_path_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.handleClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ConnectionComponent__svg_svg_0__svg_ng_container_17_Template, 3, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("read-only", ctx_r0.isReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "linear-", ctx_r0.connectionID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.portComponent1.LogicParent.options.X < ctx_r0.portComponent2.LogicParent.options.X)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.portComponent1.LogicParent.options.X < ctx_r0.portComponent2.LogicParent.options.X)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "conn-", ctx_r0.connectionID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("d", ctx_r0.line)("stroke", "url(#linear-" + ctx_r0.connectionID + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", "#conn-" + ctx_r0.connectionID);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.LogicConnection.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.LogicConnection.lineBreaks.includes(ctx_r0.selectionService.currentLineBreakSelection));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("d", ctx_r0.line);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.LogicConnection.lineBreaks);
} }
function ConnectionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Title: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ConnectionComponent_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r30.LogicConnection.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("top", ctx_r1.titlePopupY, "px")("left", ctx_r1.titlePopupX, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.LogicConnection.title);
} }
class ConnectionComponent {
    constructor(cdRef, selectionService, viewingService) {
        this.cdRef = cdRef;
        this.selectionService = selectionService;
        this.viewingService = viewingService;
        this.isReadOnly = false;
        this.line = "";
        this.connectionID = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["UUID"])();
        this.lineCurrX = 0;
        this.lineCurrY = 0;
        this.linePrevX = 0;
        this.linePrevY = 0;
        this.titlePopupX = 0;
        this.titlePopupY = 0;
        this.destroySelf = () => {
            this.LogicConnection.destroy();
            this.destroyComponent();
        };
        this.destroyComponent = () => { };
        cdRef.detach();
    }
    ngOnInit() {
        this.cdRef.detectChanges();
        this.portComponent1.LogicPort.onRemoveConnection((conn) => {
            if (conn === this.LogicConnection) {
                this.destroyComponent();
                this.portComponent1.removeConnection(this);
            }
        });
        this.portComponent2.LogicPort.onRemoveConnection((conn) => {
            if (conn === this.LogicConnection) {
                this.destroyComponent();
                this.portComponent2.removeConnection(this);
            }
        });
        this.LogicConnection.onSendData((port) => {
            let dataSvg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            dataSvg.style.display = "none";
            this.svg.nativeElement.appendChild(dataSvg);
            let anim = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
            let delay = Math.max(this.mainPath.nativeElement.getTotalLength(), 230);
            if (this.viewingService.isResponsesHidden() && port !== this.portComponent1.LogicPort) {
                this.LogicConnection.getSendDataDelay = () => { return delay; };
                return;
            }
            anim.setAttribute("attributeName", "cx");
            anim.setAttribute("dur", `${delay + 20}ms`);
            anim.setAttribute("begin", "0");
            anim.setAttribute("rotate", "auto");
            anim.setAttribute("calcMode", "linear");
            anim.setAttribute("rotate", "auto");
            anim.setAttribute("path", this.line);
            dataSvg.setAttribute("r", "5");
            dataSvg.setAttribute("fill", "#31B78D");
            if (port !== this.portComponent1.LogicPort) {
                anim.setAttribute("keyPoints", "1;0");
                anim.setAttribute("keyTimes", "0;1");
            }
            dataSvg.appendChild(anim);
            anim.beginElement();
            setTimeout(() => {
                dataSvg.style.display = "block";
            }, 10);
            setTimeout(() => {
                dataSvg.remove();
            }, delay);
            this.LogicConnection.getSendDataDelay = () => { return delay; };
        });
        this.selectionService.onDeleteLineBreak.subscribe((e) => {
            this.cdRef.markForCheck();
            this.cdRef.detectChanges();
            console.log("changes");
        });
    }
    handleClick() {
        this.selectionService.setConnectionSelection(this);
        let startX = this.LogicConnection.lineBreaks[0].x;
        let startY = this.LogicConnection.lineBreaks[0].y;
        let endX = this.LogicConnection.lineBreaks[this.LogicConnection.lineBreaks.length - 1].x;
        let endY = this.LogicConnection.lineBreaks[this.LogicConnection.lineBreaks.length - 1].y;
        this.titlePopupX = startX + (endX - startX) / 2 - 60;
        this.titlePopupY = startY + (endY - startY) / 2 - 55;
    }
    ngAfterViewInit() {
        this.portComponent1.addConnection(this);
        this.portComponent2.addConnection(this);
        if (this.LogicConnection.lineBreaks == null || this.LogicConnection.lineBreaks.length === 0) {
            this.LogicConnection.lineBreaks = [
                new src_models_Connection__WEBPACK_IMPORTED_MODULE_0__["LineBreak"]((this.portComponent1.port.nativeElement.offsetLeft + this.portComponent1.port.nativeElement.clientWidth / 2), (this.portComponent1.port.nativeElement.offsetTop + this.portComponent1.port.nativeElement.clientHeight / 2)),
                new src_models_Connection__WEBPACK_IMPORTED_MODULE_0__["LineBreak"]((this.portComponent2.port.nativeElement.offsetLeft + this.portComponent2.port.nativeElement.clientWidth / 2), (this.portComponent2.port.nativeElement.offsetTop + this.portComponent2.port.nativeElement.clientHeight / 2))
            ];
        }
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
        if (this.portComponent1.port && this.portComponent2.port) {
            this.LogicConnection.lineBreaks[0] =
                new src_models_Connection__WEBPACK_IMPORTED_MODULE_0__["LineBreak"]((this.portComponent1.port.nativeElement.offsetLeft + this.portComponent1.port.nativeElement.clientWidth / 2) + 0.1, (this.portComponent1.port.nativeElement.offsetTop + this.portComponent1.port.nativeElement.clientHeight / 2) + 0.1),
                this.LogicConnection.lineBreaks[this.LogicConnection.lineBreaks.length - 1] =
                    new src_models_Connection__WEBPACK_IMPORTED_MODULE_0__["LineBreak"]((this.portComponent2.port.nativeElement.offsetLeft + this.portComponent2.port.nativeElement.clientWidth / 2), (this.portComponent2.port.nativeElement.offsetTop + this.portComponent2.port.nativeElement.clientHeight / 2));
            this.line = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["createRoundedPath"])(this.LogicConnection.lineBreaks, 10, false);
        }
    }
    breakLine(previous, next, event) {
        let line = new src_models_Connection__WEBPACK_IMPORTED_MODULE_0__["LineBreak"]((previous.x + next.x) / 2, (previous.y + next.y) / 2);
        let index = this.LogicConnection.lineBreaks.findIndex(br => br.x === previous.x && br.y === previous.y);
        if (index == -1) {
            return;
        }
        this.LogicConnection.lineBreaks.splice(index + 1, 0, line);
        this.moveLine(line, event);
    }
    moveLine(line, event) {
        if (this.selectionService.currentConnectionSelections.length === 0)
            this.selectionService.setLineBreakSelection(line, this.LogicConnection.lineBreaks);
        let index = this.LogicConnection.lineBreaks.findIndex(br => br.x === line.x && br.y === line.y);
        let prev = this.LogicConnection.lineBreaks[index - 1];
        let next = this.LogicConnection.lineBreaks[index + 1];
        let board = document.getElementById("board");
        this.lineCurrX = line.x;
        this.lineCurrY = line.y;
        this.linePrevX = 0;
        this.linePrevY = 0;
        if (event instanceof MouseEvent) {
            this.linePrevX = event.clientX;
            this.linePrevY = event.clientY;
            board.onmousemove = (e) => {
                this.lineCurrX = this.lineCurrX - (this.linePrevX - e.clientX) / this.portComponent1.placingService.boardScale;
                this.lineCurrY = this.lineCurrY - (this.linePrevY - e.clientY) / this.portComponent1.placingService.boardScale;
                let moveX = true;
                let moveY = true;
                const SNAP_ANGLE = 10;
                let diffNextX = Math.abs(this.lineCurrX - next.x);
                let diffNextY = Math.abs(this.lineCurrY - next.y);
                let diffPrevX = Math.abs(this.lineCurrX - prev.x);
                let diffPrevY = Math.abs(this.lineCurrY - prev.y);
                if (diffNextY < SNAP_ANGLE) {
                    line.y = next.y;
                    moveY = false;
                }
                else if (diffNextX < SNAP_ANGLE) {
                    line.x = next.x;
                    moveX = false;
                }
                if (diffPrevY < SNAP_ANGLE) {
                    line.y = prev.y;
                    moveY = false;
                }
                else if (diffPrevX < SNAP_ANGLE) {
                    line.x = prev.x;
                    moveX = false;
                }
                if (moveX)
                    line.x = this.lineCurrX;
                if (moveY)
                    line.y = this.lineCurrY;
                this.linePrevX = e.clientX;
                this.linePrevY = e.clientY;
            };
            window.onmouseup = () => {
                board.onmousemove = null;
                window.onmouseup = null;
            };
        }
        else if (event instanceof TouchEvent) {
            this.linePrevX = event.touches[0].clientX;
            this.linePrevY = event.touches[0].clientY;
            board.ontouchmove = (e) => {
                this.lineCurrX = this.lineCurrX - (this.linePrevX - e.touches[0].clientX) / this.portComponent1.placingService.boardScale;
                this.lineCurrY = this.lineCurrY - (this.linePrevY - e.touches[0].clientY) / this.portComponent1.placingService.boardScale;
                let moveX = true;
                let moveY = true;
                const SNAP_ANGLE = 10;
                let diffNextX = Math.abs(this.lineCurrX - next.x);
                let diffNextY = Math.abs(this.lineCurrY - next.y);
                let diffPrevX = Math.abs(this.lineCurrX - prev.x);
                let diffPrevY = Math.abs(this.lineCurrY - prev.y);
                if (diffNextY < SNAP_ANGLE) {
                    line.y = next.y;
                    moveY = false;
                }
                else if (diffNextX < SNAP_ANGLE) {
                    line.x = next.x;
                    moveX = false;
                }
                if (diffPrevY < SNAP_ANGLE) {
                    line.y = prev.y;
                    moveY = false;
                }
                else if (diffPrevX < SNAP_ANGLE) {
                    line.x = prev.x;
                    moveX = false;
                }
                if (moveX)
                    line.x = this.lineCurrX;
                if (moveY)
                    line.y = this.lineCurrY;
                this.linePrevX = e.touches[0].clientX;
                this.linePrevY = e.touches[0].clientY;
            };
            window.ontouchend = () => {
                board.ontouchmove = null;
                window.ontouchend = null;
            };
        }
    }
}
ConnectionComponent.ɵfac = function ConnectionComponent_Factory(t) { return new (t || ConnectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_selection_service__WEBPACK_IMPORTED_MODULE_3__["SelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_viewing_service__WEBPACK_IMPORTED_MODULE_4__["ViewingService"])); };
ConnectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConnectionComponent, selectors: [["connection"]], viewQuery: function ConnectionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.svg = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.mainPath = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.secondPath = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.data = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dataAnim = _t.first);
    } }, decls: 2, vars: 2, consts: [[3, "read-only", 4, "ngIf"], ["class", "title-popup", 3, "top", "left", 4, "ngIf"], ["svg", ""], ["x1", "0", "y1", "0", "x2", "100%", "y2", "0", 3, "id"], ["offset", "0%", 4, "ngIf", "ngIfElse"], ["gradElse1", ""], ["offset", "100%", 4, "ngIf", "ngIfElse"], ["gradElse2", ""], [1, "main", 3, "id"], ["mainPath", ""], ["text-anchor", "middle", 1, "title"], ["startOffset", "50%"], [1, "line-breaks-container"], [1, "interactive", 3, "click"], ["secondPath", ""], [4, "ngFor", "ngForOf"], ["offset", "0%"], ["offset", "100%"], ["class", "break", "r", "6", 3, "is-current-selection", "mousedown", "touchstart", 4, "ngIf"], ["class", "break-available", "r", "4", 3, "mousedown", "touchstart", 4, "ngIf"], ["r", "6", 1, "break", 3, "mousedown", "touchstart"], ["r", "4", 1, "break-available", 3, "mousedown", "touchstart"], [1, "title-popup"], ["type", "text", 3, "ngModel", "ngModelChange"]], template: function ConnectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ConnectionComponent__svg_svg_0_Template, 18, 16, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConnectionComponent_div_1_Template, 4, 5, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.portComponent1 && ctx.portComponent2 && ctx.portComponent1.port != null && ctx.portComponent2.port != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectionService.currentConnectionSelection === ctx);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["svg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n}\nsvg.read-only[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\nsvg[_ngcontent-%COMP%]   path.main[_ngcontent-%COMP%] {\n  fill: transparent;\n  stroke-width: 2;\n  pointer-events: none;\n}\nsvg[_ngcontent-%COMP%]   path.main.is-current-selection[_ngcontent-%COMP%] {\n  stroke: var(--main) !important;\n}\nsvg[_ngcontent-%COMP%]   path.interactive[_ngcontent-%COMP%] {\n  cursor: pointer;\n  pointer-events: stroke;\n  stroke: transparent;\n  fill: transparent;\n  stroke-width: 14;\n}\nsvg[_ngcontent-%COMP%]   .break[_ngcontent-%COMP%] {\n  cursor: pointer;\n  fill: var(--main);\n  pointer-events: all;\n}\nsvg[_ngcontent-%COMP%]   .break.is-current-selection[_ngcontent-%COMP%] {\n  display: block !important;\n  fill: var(--main);\n  filter: brightness(1.25);\n}\nsvg[_ngcontent-%COMP%]   .break-available[_ngcontent-%COMP%] {\n  cursor: pointer;\n  fill: var(--text);\n  stroke-width: 2;\n  stroke: var(--background);\n  pointer-events: all;\n}\nsvg[_ngcontent-%COMP%]   .line-breaks-container[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  display: none;\n}\nsvg[_ngcontent-%COMP%]   .line-breaks-container[_ngcontent-%COMP%]:hover   circle[_ngcontent-%COMP%], svg[_ngcontent-%COMP%]   .line-breaks-container.active[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  display: block;\n}\nsvg[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  pointer-events: none;\n  fill: var(--text);\n  font-size: 12px;\n}\nsvg[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]    > textPath[_ngcontent-%COMP%] {\n  dominant-baseline: text-after-edge;\n}\n.title-popup[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  font-size: 1em;\n  padding: 0.25em 0.3em;\n  z-index: 130;\n  background-color: var(--background);\n  border: 0.15rem solid var(--border);\n  color: var(--text);\n  gap: 0.5em;\n}\n.title-popup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 6.5em;\n  background-color: transparent;\n  font-size: 0.9em;\n  color: var(--text);\n  border: 0;\n  outline: 0;\n  border-bottom: 0.1em solid var(--text);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Nvbm5lY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFBSTtFQUNJLCtCQUFBO0FBRVI7QUFBSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBRVI7QUFEUTtFQUNJLDhCQUFBO0FBR1o7QUFBSTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVSO0FBQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFHWjtBQUFJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUNRO0VBQ0ksYUFBQTtBQUNaO0FBRVk7RUFDSSxjQUFBO0FBQWhCO0FBSUk7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUZSO0FBR1E7RUFDSSxrQ0FBQTtBQURaO0FBS0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUZKO0FBR0k7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0FBRFIiLCJmaWxlIjoiY29ubmVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInN2Z3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgJi5yZWFkLW9ubHkgKntcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgJiBwYXRoLm1haW57XG4gICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgICAgICBzdHJva2Utd2lkdGg6IDI7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAmLmlzLWN1cnJlbnQtc2VsZWN0aW9ue1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1tYWluKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgICYgcGF0aC5pbnRlcmFjdGl2ZXtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogc3Ryb2tlO1xuICAgICAgICBzdHJva2U6IHRyYW5zcGFyZW50O1xuICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAxNDtcbiAgICB9XG4gICAgJiAuYnJlYWt7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZmlsbDogdmFyKC0tbWFpbik7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgICYuaXMtY3VycmVudC1zZWxlY3Rpb257XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZmlsbDogdmFyKC0tbWFpbik7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yNSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJiAuYnJlYWstYXZhaWxhYmxle1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZpbGw6IHZhcigtLXRleHQpO1xuICAgICAgICBzdHJva2Utd2lkdGg6IDI7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tYmFja2dyb3VuZCk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgfVxuICAgICYgLmxpbmUtYnJlYWtzLWNvbnRhaW5lcntcbiAgICAgICAgJiBjaXJjbGV7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIsICYuYWN0aXZle1xuICAgICAgICAgICAgJiBjaXJjbGV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJiAudGl0bGV7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBmaWxsOiB2YXIoLS10ZXh0KTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAmID4gdGV4dFBhdGh7XG4gICAgICAgICAgICBkb21pbmFudC1iYXNlbGluZTogdGV4dC1hZnRlci1lZGdlO1xuICAgICAgICB9XG4gICAgfVxufVxuLnRpdGxlLXBvcHVwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjNlbTtcbiAgICB6LWluZGV4OiAxMzA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGdhcDogMC41ZW07XG4gICAgJiBpbnB1dHtcbiAgICAgICAgd2lkdGg6IDYuNWVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuMWVtIHNvbGlkIHZhcigtLXRleHQpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "PsCE":
/*!************************************!*\
  !*** ./src/models/MessageQueue.ts ***!
  \************************************/
/*! exports provided: MessageQueue, MessageQueueOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageQueue", function() { return MessageQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageQueueOptions", function() { return MessageQueueOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _RequestData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestData */ "LEJs");
/* harmony import */ var _Port__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Port */ "WjXT");
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Endpoint */ "CIzy");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _EndpointOperator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EndpointOperator */ "7KcZ");
/* harmony import */ var _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums/HTTPMethod */ "axtL");
/* harmony import */ var _Shared_EventDispatcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Shared/EventDispatcher */ "GLam");








class MessageQueue extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_5__["EndpointOperator"] {
    constructor() {
        super();
        this.connectionTable = {};
        this.roundRobinIndex = 0;
        this.isSendingData = false;
        this.fillColor = false;
        this.color = "#F2994A";
        this.messages = [];
        this.sendDataDispatcher = new _Shared_EventDispatcher__WEBPACK_IMPORTED_MODULE_7__["EventDispatcher"]();
        this.inputPort = new _Port__WEBPACK_IMPORTED_MODULE_2__["Port"](this, false, true);
        this.outputPort = new _Port__WEBPACK_IMPORTED_MODULE_2__["Port"](this, true, true);
        this.options = new MessageQueueOptions();
        this.options.title = "Message Queue";
        this.options.endpoints = [
            new _Endpoint__WEBPACK_IMPORTED_MODULE_3__["Endpoint"]("MessageQueue", [_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].GET, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].POST, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].PUT, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].DELETE, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].PATCH])
        ];
    }
    receiveData(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data.requestId == "" || data.requestId == null)
                throw new Error("requestId can not be null. Please specify property requestId of RequestData");
            // Put data to queue 
            data.header.stream = false;
            this.messages.push(data);
            if (!this.isSendingData)
                this.sendToConsumer();
            this.fireReceiveData(data);
            // Return response to publisher
            let response = new _RequestData__WEBPACK_IMPORTED_MODULE_1__["RequestData"]();
            response.responseId = data.requestId;
            response.requestId = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_4__["UUID"])();
            response.header = data.header;
            response.origin = data.origin;
            response.originID = this.originID;
            // Send response back
            if (data.sendResponse)
                yield this.inputPort.sendData(response, data.origin);
        });
    }
    sendToConsumer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.messages.length == 0 || this.outputPort.connections.length == 0)
                return;
            this.isSendingData = true;
            yield Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_4__["sleep"])(400);
            let message = this.messages.pop();
            let epRef = new _Endpoint__WEBPACK_IMPORTED_MODULE_3__["EndpointRef"]();
            epRef.endpoint = new _Endpoint__WEBPACK_IMPORTED_MODULE_3__["Endpoint"](this.options.endpoints[0].url, [_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].GET, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].POST, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].PUT, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].PATCH, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].DELETE]);
            epRef.method = _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].POST;
            message.header.endpoint = epRef;
            message.sendResponse = false;
            this.sendData(message);
            this.fireSendData({});
            if (this.messages.length == 0)
                this.isSendingData = false;
            else
                this.sendToConsumer();
        });
    }
    sendData(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            data.originID = this.originID;
            yield this.roundRobin(data);
        });
    }
    roundRobin(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let connections = this.outputPort.connections
                .filter(conn => conn.getOtherPort(this.outputPort).parent.getAvailableEndpoints()
                .find(ep => ep.url === this.options.endpoints[0].url) != null);
            let nodesLength = connections.length;
            if (nodesLength === 0) {
                this.messages.push(data);
                return;
            }
            this.fireSendData({});
            this.roundRobinIndex++;
            if (this.roundRobinIndex >= nodesLength)
                this.roundRobinIndex = 0;
            data.origin = this.outputPort.connections[this.roundRobinIndex];
            yield this.outputPort.sendData(data, data.origin);
        });
    }
    onConnectionUpdate(wasOutput = false) {
        this.sendToConsumer();
    }
    onSendData(handler) {
        this.sendDataDispatcher.register(handler);
    }
    fireSendData(event) {
        this.sendDataDispatcher.fire(event);
    }
}
class MessageQueueOptions extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_5__["EndpointOptions"] {
}


/***/ }),

/***/ "PxqJ":
/*!************************************************************!*\
  !*** ./src/app/board/optionsmenu/optionsmenu.component.ts ***!
  \************************************************************/
/*! exports provided: OptionsmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsmenuComponent", function() { return OptionsmenuComponent; });
/* harmony import */ var _components_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/textfield/textfield.component */ "/Mf1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_selection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/selection.service */ "nCka");
/* harmony import */ var src_app_placing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/placing.service */ "epgU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






const _c0 = ["optionsWrapper"];
const _c1 = ["actionsWrapper"];
function OptionsmenuComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OptionsmenuComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OptionsmenuComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Title:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OptionsmenuComponent_div_9_div_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.selectionService.currentSelections[0].getLogicComponent().options.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r13.selectionService.currentSelections[0].getLogicComponent().options.title);
} }
function OptionsmenuComponent_div_9_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Content:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OptionsmenuComponent_div_9_ng_template_2_div_0_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r21.selectionService.currentSelections[0].getLogicComponent().options.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r20.selectionService.currentSelections[0].getLogicComponent().options.title);
} }
function OptionsmenuComponent_div_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, OptionsmenuComponent_div_9_ng_template_2_div_0_Template, 5, 1, "div", 23);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.isSelectionTextField());
} }
function OptionsmenuComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OptionsmenuComponent_div_9_div_1_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OptionsmenuComponent_div_9_ng_template_2_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "X:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function OptionsmenuComponent_div_9_Template_input_input_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.updatePosition(_r16.value, _r17.value); })("ngModelChange", function OptionsmenuComponent_div_9_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.selectionService.currentSelections[0].getLogicComponent().options.X = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Y:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function OptionsmenuComponent_div_9_Template_input_input_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.updatePosition(_r16.value, _r17.value); })("ngModelChange", function OptionsmenuComponent_div_9_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.selectionService.currentSelections[0].getLogicComponent().options.Y = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.isSelectionTextField())("ngIfElse", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.selectionService.currentSelections[0].getLogicComponent().options.X);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.selectionService.currentSelections[0].getLogicComponent().options.Y);
} }
function OptionsmenuComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Title:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function OptionsmenuComponent_div_10_Template_input_input_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.updateTitles(); })("ngModelChange", function OptionsmenuComponent_div_10_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.multipleSelectionsTitle = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "X:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function OptionsmenuComponent_div_10_Template_input_input_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.updatePosition(ctx_r33.multipleSelectionsX, ctx_r33.multipleSelectionsY); })("ngModelChange", function OptionsmenuComponent_div_10_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.multipleSelectionsX = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Y:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function OptionsmenuComponent_div_10_Template_input_input_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.updatePosition(ctx_r35.multipleSelectionsX, ctx_r35.multipleSelectionsY); })("ngModelChange", function OptionsmenuComponent_div_10_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.multipleSelectionsY = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.multipleSelectionsTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.multipleSelectionsX);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.multipleSelectionsY);
} }
function OptionsmenuComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OptionsmenuComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OptionsmenuComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OptionsmenuComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class OptionsmenuComponent {
    constructor(selectionService, renderer, placingService) {
        this.selectionService = selectionService;
        this.renderer = renderer;
        this.placingService = placingService;
        this.openGeneral = true;
        this.openProps = true;
        this.openActions = true;
        this.hasActions = false;
        this.multipleSelectionsTitle = "Title";
        selectionService.onChangeSelection(() => {
            this.optionsWrapper.nativeElement.innerHTML = "";
            this.actionsWrapper.nativeElement.innerHTML = "";
            this.multipleSelectionsX = Number.MAX_VALUE;
            this.multipleSelectionsY = Number.MAX_VALUE;
            if (this.selectionService.currentSelections.length == 0) {
                this.isActive = false;
            }
            else if (this.selectionService.currentSelections.length == 1) {
                let selection = this.selectionService.currentSelections[0];
                this.isActive = true;
                let optionsElement = selection.getOptionsElement();
                if (optionsElement)
                    this.renderer.appendChild(this.optionsWrapper.nativeElement, optionsElement.nativeElement);
                let actionsElement = selection.getActionsElement();
                if (actionsElement) {
                    this.hasActions = true;
                    this.renderer.appendChild(this.actionsWrapper.nativeElement, actionsElement.nativeElement);
                }
                else
                    this.hasActions = false;
            }
            else {
                this.isActive = true;
                this.multipleSelectionsTitle = this.selectionService.currentSelections[0].getLogicComponent().options.title;
                let sameTitles = true;
                for (let selection of this.selectionService.currentSelections) {
                    let options = selection.getLogicComponent().options;
                    if (options.X < this.multipleSelectionsX)
                        this.multipleSelectionsX = options.X;
                    if (options.Y < this.multipleSelectionsY)
                        this.multipleSelectionsY = options.Y;
                    if (options.title != this.multipleSelectionsTitle) {
                        sameTitles = false;
                    }
                }
                this.multipleSelectionsOldX = this.multipleSelectionsX;
                this.multipleSelectionsOldY = this.multipleSelectionsY;
                if (!sameTitles)
                    this.multipleSelectionsTitle = "Title";
            }
        });
    }
    isSelectionTextField() {
        return this.selectionService.currentSelections.length == 1 && this.selectionService.currentSelections[0] instanceof _components_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_0__["TextfieldComponent"];
    }
    ngOnInit() {
    }
    updateTitles() {
        for (let selection of this.selectionService.currentSelections) {
            selection.getLogicComponent().options.title = this.multipleSelectionsTitle;
        }
    }
    updatePosition(x, y) {
        if (this.selectionService.currentSelections.length == 1) {
            x = parseInt(x);
            y = parseInt(y);
            if (x < 0 || x > this.placingService.boardWidth - 40 || y < 0 || y > this.placingService.boardHeight - 40) {
                for (let selection of this.selectionService.currentSelections) {
                    selection.setPosition(x, y);
                }
            }
        }
        else {
            let realX = Math.max(Math.min(this.multipleSelectionsX, this.placingService.boardWidth - 40), 0);
            let realY = Math.max(Math.min(this.multipleSelectionsY, this.placingService.boardHeight - 40), 0);
            for (let selection of this.selectionService.currentSelections) {
                selection.setPosition(selection.getLogicComponent().options.X + realX - this.multipleSelectionsOldX, selection.getLogicComponent().options.Y + realY - this.multipleSelectionsOldY);
            }
            this.multipleSelectionsOldX = realX;
            this.multipleSelectionsOldY = realY;
        }
    }
}
OptionsmenuComponent.ɵfac = function OptionsmenuComponent_Factory(t) { return new (t || OptionsmenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_selection_service__WEBPACK_IMPORTED_MODULE_2__["SelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_placing_service__WEBPACK_IMPORTED_MODULE_3__["PlacingService"])); };
OptionsmenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OptionsmenuComponent, selectors: [["app-optionsmenu"]], viewQuery: function OptionsmenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.optionsWrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.actionsWrapper = _t.first);
    } }, decls: 31, vars: 20, consts: [[1, "options-menu-window"], [1, "main"], [1, "section"], [1, "header", 3, "click"], [1, "title"], ["class", "icon", 4, "ngIf", "ngIfElse"], ["closed", ""], ["class", "content", 4, "ngIf"], [1, "content"], ["optionsWrapper", ""], ["actionsWrapper", ""], [1, "icon"], [1, "fas", "fa-caret-up"], [1, "fas", "fa-caret-down"], [4, "ngIf", "ngIfElse"], ["textFieldTitle", ""], [1, "small"], [1, "property-name"], ["step", "10", "type", "number", "min", "0", "max", "1960", 3, "ngModel", "input", "ngModelChange"], ["x", ""], ["step", "10", "type", "number", "min", "0", "max", "960", 3, "ngModel", "input", "ngModelChange"], ["y", ""], ["type", "text", "spellcheck", "false", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["maxlength", "250", "type", "text", "spellcheck", "false", 3, "ngModel", "ngModelChange"], ["type", "text", "spellcheck", "false", 3, "ngModel", "input", "ngModelChange"]], template: function OptionsmenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OptionsmenuComponent_Template_div_click_3_listener() { return ctx.openGeneral = !ctx.openGeneral; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OptionsmenuComponent_span_6_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OptionsmenuComponent_ng_template_7_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OptionsmenuComponent_div_9_Template, 14, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OptionsmenuComponent_div_10_Template, 15, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OptionsmenuComponent_Template_div_click_12_listener() { return ctx.openProps = !ctx.openProps; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, OptionsmenuComponent_span_15_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, OptionsmenuComponent_ng_template_16_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OptionsmenuComponent_Template_div_click_22_listener() { return ctx.openActions = !ctx.openActions; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, OptionsmenuComponent_span_25_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, OptionsmenuComponent_ng_template_26_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.isActive ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.openGeneral);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.openGeneral)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActive && ctx.selectionService.currentSelections.length == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isActive && ctx.selectionService.currentSelections.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.selectionService.currentSelections.length == 1 ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.openProps);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.openProps)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", !ctx.hasActions || ctx.selectionService.currentSelections.length > 1 ? "none" : "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.openActions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.openActions)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"]], styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.4rem;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29wdGlvbnNtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQUE7QUFDQTtFQUNJLGFBQUE7QUFDSjtBQUVBLFVBQUE7QUFDQTtFQUNJLDBDQUFBO0FBQ0o7QUFFQSxXQUFBO0FBQ0E7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoib3B0aW9uc21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDAuNHJlbTtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "RW4B":
/*!**************************************************************!*\
  !*** ./src/app/board/components/Shared/OperatorComponent.ts ***!
  \**************************************************************/
/*! exports provided: OperatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorComponent", function() { return OperatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/enums/APIType */ "G1KI");
/* harmony import */ var src_models_enums_BalancingAlgorithm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/enums/BalancingAlgorithm */ "Bly8");
/* harmony import */ var src_models_enums_DatabaseType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/enums/DatabaseType */ "YzkR");
/* harmony import */ var src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/enums/gRPCMode */ "KpZ9");
/* harmony import */ var src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/enums/HTTPMethod */ "axtL");
/* harmony import */ var src_models_enums_HTTPStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/enums/HTTPStatus */ "WIHy");
/* harmony import */ var src_models_enums_LoadBalancerType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/enums/LoadBalancerType */ "XDIl");
/* harmony import */ var src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/enums/Protocol */ "qEx5");
/* harmony import */ var src_models_enums_ReplacementPolicy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/models/enums/ReplacementPolicy */ "Cf/E");
/* harmony import */ var src_models_enums_WritePolicy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/models/enums/WritePolicy */ "XDID");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _port_port_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../port/port.component */ "HvJx");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./title/title.component */ "OXCG");
/* harmony import */ var src_app_placing_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/placing.service */ "epgU");
/* harmony import */ var src_app_selection_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/selection.service */ "nCka");
/* harmony import */ var src_app_viewing_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/viewing.service */ "nesx");


















const _c0 = ["conn"];
const _c1 = ["anchorRef"];
const _c2 = ["options"];
const _c3 = ["actions"];
class OperatorComponent {
    constructor(placingService, selectionService, resolver, cdRef, viewingService) {
        this.placingService = placingService;
        this.selectionService = selectionService;
        this.resolver = resolver;
        this.cdRef = cdRef;
        this.viewingService = viewingService;
        this.hasChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.HTTPMethod = src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_5__["HTTPMethod"];
        this.HTTPMethodKeys = Object.values(src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_5__["HTTPMethod"]).filter(k => !isNaN(Number(k)));
        this.EndpointActionHTTPMethod = src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_5__["EndpointActionHTTPMethod"];
        this.EndpointActionHTTPMethodKeys = Object.values(src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_5__["EndpointActionHTTPMethod"]).filter(k => !isNaN(Number(k)));
        this.Protocol = src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_8__["Protocol"];
        this.ProtocolKeys = Object.values(src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_8__["Protocol"]).filter(k => !isNaN(Number(k)));
        this.APIType = src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__["APIType"];
        this.APITypeKeys = Object.values(src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__["APIType"]).filter(k => !isNaN(Number(k)));
        this.gRPCMode = src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_4__["gRPCMode"];
        this.gRPCModeKeys = Object.values(src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_4__["gRPCMode"]).filter(k => !isNaN(Number(k)));
        this.LoadBalancerType = src_models_enums_LoadBalancerType__WEBPACK_IMPORTED_MODULE_7__["LoadBalancerType"];
        this.LoadBalancerTypeKeys = Object.values(src_models_enums_LoadBalancerType__WEBPACK_IMPORTED_MODULE_7__["LoadBalancerType"]).filter(k => !isNaN(Number(k)));
        this.BalancingAlgorithm = src_models_enums_BalancingAlgorithm__WEBPACK_IMPORTED_MODULE_2__["BalancingAlgorithm"];
        this.BalancingAlgorithmKeys = Object.values(src_models_enums_BalancingAlgorithm__WEBPACK_IMPORTED_MODULE_2__["BalancingAlgorithm"]).filter(k => !isNaN(Number(k)));
        this.DatabaseType = src_models_enums_DatabaseType__WEBPACK_IMPORTED_MODULE_3__["DatabaseType"];
        this.DatabaseTypeKeys = Object.values(src_models_enums_DatabaseType__WEBPACK_IMPORTED_MODULE_3__["DatabaseType"]).filter(k => !isNaN(Number(k)));
        this.WritePolicy = src_models_enums_WritePolicy__WEBPACK_IMPORTED_MODULE_10__["WritePolicy"];
        this.WritePolicyKeys = Object.values(src_models_enums_WritePolicy__WEBPACK_IMPORTED_MODULE_10__["WritePolicy"]).filter(k => !isNaN(Number(k)));
        this.ReplacementPolicy = src_models_enums_ReplacementPolicy__WEBPACK_IMPORTED_MODULE_9__["ReplacementPolicy"];
        this.ReplacementPolicyKeys = Object.values(src_models_enums_ReplacementPolicy__WEBPACK_IMPORTED_MODULE_9__["ReplacementPolicy"]).filter(k => !isNaN(Number(k)));
        this.maxX = 0;
        this.maxY = 0;
        this.isReadOnly = false;
        this.handleMousemove = (event) => {
            this.selectionService.moveComponents(event, this.placingService.boardScale);
        };
        this.handleMouseup = () => {
            this.placingService.stopPlacing();
            this.board.removeEventListener("mousemove", this.handleMousemove);
            window.removeEventListener("mouseup", this.handleMouseup);
            if (this.beforeOptions.X !== this.LogicComponent.options.X || this.beforeOptions.Y !== this.LogicComponent.options.Y) {
                this.afterChange();
            }
        };
        this.onViewInit = [];
        this.destroyComponent = () => { };
        this.destroySelf = () => {
            this.LogicComponent.destroy();
            this.destroyComponent();
            this.cdRef.detectChanges();
        };
        this.afterChange = () => {
            this.hasChanged.emit();
            this.beforeOptions = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_11__["clone"])(this.LogicComponent.options);
        };
        this.cdRef.detach();
    }
    ngAfterViewInit() {
        this.Init();
    }
    ngOnInit() {
        this.cdRef.detectChanges();
    }
    handleMousedown(event) {
        if (this.placingService.isConnecting)
            return;
        event.preventDefault();
        this.handleClick(event);
        this.placingService.startPlacing();
        this.anchorRect = this.anchorRef.nativeElement.getBoundingClientRect();
        this.maxX = this.placingService.boardWidth;
        this.maxY = this.placingService.boardHeight;
        if (event instanceof MouseEvent) {
            if (event.button != 0) {
                this.placingService.stopPlacing();
                event.preventDefault();
                if (event.button == 2) {
                    this.selectionService.addSelection(this, false);
                    this.showContextMenu.emit(event);
                }
                return;
            }
            this.selectionService.prevX = event.clientX;
            this.selectionService.prevY = event.clientY;
            this.board.addEventListener("mousemove", this.handleMousemove);
            window.addEventListener("mouseup", this.handleMouseup);
        }
        else if (event instanceof TouchEvent) {
            this.selectionService.prevX = event.touches[0].clientX;
            this.selectionService.prevY = event.touches[0].clientY;
            this.board.addEventListener("touchmove", this.handleMousemove);
            window.addEventListener("touchend", this.handleMouseup);
        }
    }
    convertPosition(number) {
        return Math.round(number / 10) * 10;
    }
    setPosition(x, y) {
        this.LogicComponent.options.X = Math.max(Math.min(this.maxX - this.anchorRect.width / this.placingService.boardScale, this.convertPosition(x)), 0);
        this.LogicComponent.options.Y = Math.max(Math.min(this.maxY - this.anchorRect.height / this.placingService.boardScale, this.convertPosition(y)), 0);
        this.cdRef.detectChanges();
    }
    handleClick(event) {
        if (event instanceof MouseEvent || event instanceof TouchEvent)
            this.selectionService.addSelection(this, event.ctrlKey);
    }
    getLogicComponent() {
        return null;
    }
    getPortComponent(getOutput = false) {
        if (getOutput && this.outputPortRef != null)
            return this.outputPortRef.getPortComponent();
        else if (!getOutput && this.inputPortRef != null)
            return this.inputPortRef.getPortComponent();
        return null;
    }
    /**
     *
     * @returns options element, null if component doesn't have any options
     */
    getOptionsElement() {
        return this.optionsRef;
    }
    /**
     *
     * @returns actions element, null if component doesn't have any actions
     */
    getActionsElement() {
        return this.actionsRef;
    }
    changeTitle(title) {
        this.LogicComponent.options.title = title;
        this.cdRef.detectChanges();
    }
    showStatusCode(code) {
        let span = document.createElement("span");
        span.classList.add("status-code-side");
        let type;
        if (code >= 0 && code < 1000) { // Classic status codes 
            if (code >= 100 && code < 200)
                type = "info";
            else if (code >= 200 && code < 300)
                type = "success";
            else if (code >= 300 && code < 400)
                type = "warning";
            else if (code >= 400 && code < 500)
                type = "error";
            else
                type = "error";
            span.innerHTML = `<span class="code ${type}">${code}</span><br/>${src_models_enums_HTTPStatus__WEBPACK_IMPORTED_MODULE_6__["HTTPStatus"][code]}`;
        }
        else if (code >= 1000 && code < 2000) { // Cache status codes
            if (code == 1200)
                span.innerHTML = `<span class="code success">HIT</span>`;
            else if (code == 1404)
                span.innerHTML = `<span class="code error">MISS</span>`;
        }
        this.anchorRef.nativeElement.appendChild(span);
        setTimeout(() => {
            this.anchorRef.nativeElement.removeChild(span);
            this.cdRef.detectChanges();
        }, 1500);
        this.cdRef.detectChanges();
    }
    setReceiveDataAnimation() {
        if (this.viewingService.isPerformanceMode())
            return;
        if (!this.comp.classList.contains("anim")) {
            this.comp.classList.add("anim");
            setTimeout(() => {
                this.comp.classList.remove("anim");
            }, 500);
        }
    }
    Init(generateTitle = true) {
        this.LogicComponent = this.getLogicComponent();
        this.board = document.getElementById("board");
        this.comp = this.anchorRef.nativeElement;
        this.comp.classList.add("component");
        if (this.LogicComponent.fillColor) {
            this.comp.style.backgroundColor = this.LogicComponent.color;
        }
        else {
            this.comp.classList.add("bordered");
            Array.from(this.comp.getElementsByClassName("img")).forEach(el => {
                el.style.backgroundColor = this.LogicComponent.color;
            });
            this.comp.style.border = "2px solid " + this.LogicComponent.color;
        }
        if (this.isReadOnly)
            this.comp.classList.add("read-only");
        this.anchorRect = this.anchorRef.nativeElement.getBoundingClientRect();
        this.maxX = this.placingService.boardWidth;
        this.maxY = this.placingService.boardHeight;
        this.LogicComponent.onShowStatusCode((code) => {
            this.showStatusCode(code);
        });
        this.LogicComponent.onReceiveData((data) => {
            this.setReceiveDataAnimation();
        });
        this.LogicComponent.onFailedConnect((data) => {
            this.placingService.showSnack(data.message);
        });
        this.beforeOptions = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_11__["clone"])(this.LogicComponent.options);
        let inputPort = this.LogicComponent["inputPort"];
        let outputPort = this.LogicComponent["outputPort"];
        if (this.conn == null) {
            this.cdRef.detectChanges();
            return;
        }
        if (generateTitle)
            this.generateTitle();
        if (inputPort != null)
            this.createPort(false);
        if (outputPort != null)
            this.createPort(true);
        this.onViewInit.forEach(e => e());
        this.cdRef.detectChanges();
    }
    createPort(output = false) {
        let factory = this.resolver.resolveComponentFactory(_port_port_component__WEBPACK_IMPORTED_MODULE_12__["PortComponent"]);
        let ref = this.conn.createComponent(factory);
        ref.instance.IsOutput = output;
        ref.instance.LogicParent = this.LogicComponent;
        ref.instance.IsReadOnly = this.isReadOnly;
        ref.instance.LogicPort = this.LogicComponent[output ? "outputPort" : "inputPort"];
        ref.instance.destroySelf = () => {
            ref.destroy();
        };
        ref.location.nativeElement.classList.add(output ? "right" : "left");
        if (output)
            this.outputPortRef = ref.instance;
        else
            this.inputPortRef = ref.instance;
        this.cdRef.detectChanges();
    }
    generateTitle() {
        let factory = this.resolver.resolveComponentFactory(_title_title_component__WEBPACK_IMPORTED_MODULE_13__["TitleComponent"]);
        let ref = this.conn.createComponent(factory);
        ref.instance.Model = this.LogicComponent;
        this.cdRef.detectChanges();
    }
    formatMethod(method, isDatabase) {
        return Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_11__["getFormattedMethod"])(method, isDatabase);
    }
    static getColor() {
        return "#6059DF";
    }
}
OperatorComponent.ɵfac = function OperatorComponent_Factory(t) { return new (t || OperatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_placing_service__WEBPACK_IMPORTED_MODULE_14__["PlacingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_selection_service__WEBPACK_IMPORTED_MODULE_15__["SelectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_viewing_service__WEBPACK_IMPORTED_MODULE_16__["ViewingService"])); };
OperatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OperatorComponent, selectors: [["ng-component"]], viewQuery: function OperatorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.conn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.anchorRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionsRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.actionsRef = _t.first);
    } }, decls: 0, vars: 0, template: function OperatorComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _viewing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewing.service */ "nesx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(viewingService) {
        this.viewingService = viewingService;
        this.title = 'PanekMP2023';
        if (viewingService.isDarkMode())
            document.documentElement.classList.add("dark-mode");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_viewing_service__WEBPACK_IMPORTED_MODULE_1__["ViewingService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "W6y1":
/*!*************************************************************!*\
  !*** ./src/app/board/components/pubsub/pubsub.component.ts ***!
  \*************************************************************/
/*! exports provided: PubsubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubsubComponent", function() { return PubsubComponent; });
/* harmony import */ var src_models_Endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/Endpoint */ "CIzy");
/* harmony import */ var src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/enums/HTTPMethod */ "axtL");
/* harmony import */ var src_models_PubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/PubSub */ "INeE");
/* harmony import */ var _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/OperatorComponent */ "RW4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../info-tooltip/info-tooltip.component */ "q+md");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function PubsubComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function PubsubComponent_div_18_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.afterChange(); })("blur", function PubsubComponent_div_18_Template_input_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const endpoint_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.handleEndpointUrlChange(endpoint_r4); })("ngModelChange", function PubsubComponent_div_18_Template_input_ngModelChange_1_listener($event) { const endpoint_r4 = ctx.$implicit; return endpoint_r4.url = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PubsubComponent_div_18_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const endpoint_r4 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.removeEndpoint(endpoint_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const endpoint_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", endpoint_r4.url);
} }
class PubsubComponent extends _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_3__["OperatorComponent"] {
    constructor() {
        super(...arguments);
        this.LogicPubSub = new src_models_PubSub__WEBPACK_IMPORTED_MODULE_2__["PubSub"]();
    }
    addEndpoint() {
        this.LogicPubSub.options.endpoints.push(new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_0__["Endpoint"]("topic.topicCreated", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_1__["HTTPMethod"].GET, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_1__["HTTPMethod"].POST, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_1__["HTTPMethod"].PUT, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_1__["HTTPMethod"].PATCH, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_1__["HTTPMethod"].DELETE]));
        this.afterChange();
    }
    removeEndpoint(endpoint) {
        let idx = 0;
        for (let ep of this.LogicPubSub.options.endpoints) {
            if (ep === endpoint) {
                this.LogicPubSub.options.endpoints.splice(idx, 1);
                this.afterChange();
                return;
            }
            idx++;
        }
    }
    handleEndpointUrlChange(endpoint) {
        if (endpoint.url == null || endpoint.url.replace(/\s/g, "") == "")
            endpoint.url = `topic`;
    }
    getLogicComponent() {
        return this.LogicPubSub;
    }
    static getColor() {
        let c = new src_models_PubSub__WEBPACK_IMPORTED_MODULE_2__["PubSub"]();
        return c.color;
    }
}
PubsubComponent.ɵfac = function PubsubComponent_Factory(t) { return ɵPubsubComponent_BaseFactory(t || PubsubComponent); };
PubsubComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PubsubComponent, selectors: [["pubsub"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 6, consts: [["anchorRef", ""], ["conn", ""], [1, "img-container", 3, "mousedown", "touchstart", "click"], ["src", "./assets/pubsub.svg"], [2, "display", "none"], ["options", ""], [1, "options-container"], [1, "options-endpoints-container"], [1, "options-endpoints-top"], [1, "property-name"], [3, "Message"], [1, "button-icon", 3, "click"], [1, "fas", "fa-plus"], [1, "options-endpoints"], ["class", "options-endpoint", 4, "ngFor", "ngForOf"], [1, "options-endpoint"], ["type", "text", "spellcheck", "false", "placeholder", "url", 1, "endpoint-url", 3, "ngModel", "change", "blur", "ngModelChange"], [1, "button-icon", "remove-endpoint", 3, "click"], [1, "fas", "fa-minus"]], template: function PubsubComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "template", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function PubsubComponent_Template_div_mousedown_4_listener($event) { return ctx.handleMousedown($event); })("touchstart", function PubsubComponent_Template_div_touchstart_4_listener($event) { return ctx.handleMousedown($event); })("click", function PubsubComponent_Template_div_click_4_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Topics: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "info-tooltip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PubsubComponent_Template_span_click_15_listener() { return ctx.addEndpoint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, PubsubComponent_div_18_Template, 4, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("left", ctx.LogicPubSub.options.X, "px")("top", ctx.LogicPubSub.options.Y, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Message", "List of available topics the PubSub can publish data to.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.LogicPubSub.options.endpoints);
    } }, directives: [_info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_5__["InfoTooltipComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.options-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 1em;\n}\n\n.options-type-container[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3B1YnN1Yi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtBQUdKIiwiZmlsZSI6InB1YnN1Yi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5vcHRpb25zLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBnYXA6IDFlbTtcbn1cbi5vcHRpb25zLXR5cGUtY29udGFpbmVye1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbiJdfQ== */"] });
const ɵPubsubComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](PubsubComponent);


/***/ }),

/***/ "WIHy":
/*!****************************************!*\
  !*** ./src/models/enums/HTTPStatus.ts ***!
  \****************************************/
/*! exports provided: HTTPStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPStatus", function() { return HTTPStatus; });
var HTTPStatus;
(function (HTTPStatus) {
    HTTPStatus[HTTPStatus["Switching Protocol"] = 101] = "Switching Protocol";
    HTTPStatus[HTTPStatus["OK"] = 200] = "OK";
    HTTPStatus[HTTPStatus["Created"] = 201] = "Created";
    HTTPStatus[HTTPStatus["Bad Request"] = 400] = "Bad Request";
    HTTPStatus[HTTPStatus["Not Found"] = 404] = "Not Found";
    HTTPStatus[HTTPStatus["Method Not Allowed"] = 405] = "Method Not Allowed";
    HTTPStatus[HTTPStatus["Too Many Requests"] = 429] = "Too Many Requests";
    HTTPStatus[HTTPStatus["Internal Server Error"] = 500] = "Internal Server Error";
    HTTPStatus[HTTPStatus["Service Unavailable"] = 503] = "Service Unavailable";
    HTTPStatus[HTTPStatus["Cache Hit"] = 1200] = "Cache Hit";
    HTTPStatus[HTTPStatus["Cache Miss"] = 1404] = "Cache Miss";
})(HTTPStatus || (HTTPStatus = {}));


/***/ }),

/***/ "Wbgk":
/*!***********************************!*\
  !*** ./src/app/saving.service.ts ***!
  \***********************************/
/*! exports provided: SavingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingService", function() { return SavingService; });
/* harmony import */ var src_models_API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/API */ "iVJE");
/* harmony import */ var src_models_APIGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/APIGateway */ "1MSx");
/* harmony import */ var src_models_Cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/Cache */ "jzTO");
/* harmony import */ var src_models_Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/Client */ "Hmdo");
/* harmony import */ var src_models_ClientCluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/ClientCluster */ "MhgW");
/* harmony import */ var src_models_CloudStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/CloudStorage */ "vX2b");
/* harmony import */ var src_models_Database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/Database */ "FtUi");
/* harmony import */ var src_models_LoadBalancer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/models/LoadBalancer */ "mF0C");
/* harmony import */ var src_models_MessageQueue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/MessageQueue */ "PsCE");
/* harmony import */ var src_models_Port__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/models/Port */ "WjXT");
/* harmony import */ var src_models_Proxy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/models/Proxy */ "i+Vz");
/* harmony import */ var src_models_PubSub__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/models/PubSub */ "INeE");
/* harmony import */ var src_models_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/models/TextField */ "nVqF");
/* harmony import */ var src_models_WebServer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/models/WebServer */ "ybgb");
/* harmony import */ var src_models_CDN__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/models/CDN */ "wKdh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class SavingService {
    constructor() {
        this.LOCALSTORAGE_AUTOSAVE_KEY = "board_autosave";
        this.LOCALSTORAGE_BOARDS_KEY = "all_saved_boards";
        this.systemName = "Untitled system";
        this.types = {
            API: src_models_API__WEBPACK_IMPORTED_MODULE_0__["API"],
            APIGateway: src_models_APIGateway__WEBPACK_IMPORTED_MODULE_1__["APIGateway"],
            Client: src_models_Client__WEBPACK_IMPORTED_MODULE_3__["Client"],
            Cache: src_models_Cache__WEBPACK_IMPORTED_MODULE_2__["Cache"],
            CloudStorage: src_models_CloudStorage__WEBPACK_IMPORTED_MODULE_5__["CloudStorage"],
            Database: src_models_Database__WEBPACK_IMPORTED_MODULE_6__["Database"],
            LoadBalancer: src_models_LoadBalancer__WEBPACK_IMPORTED_MODULE_7__["LoadBalancer"],
            MessageQueue: src_models_MessageQueue__WEBPACK_IMPORTED_MODULE_8__["MessageQueue"],
            PubSub: src_models_PubSub__WEBPACK_IMPORTED_MODULE_11__["PubSub"],
            WebServer: src_models_WebServer__WEBPACK_IMPORTED_MODULE_13__["WebServer"],
            TextField: src_models_TextField__WEBPACK_IMPORTED_MODULE_12__["TextField"],
            Proxy: src_models_Proxy__WEBPACK_IMPORTED_MODULE_10__["Proxy"],
            ClientCluster: src_models_ClientCluster__WEBPACK_IMPORTED_MODULE_4__["ClientCluster"],
            CDN: src_models_CDN__WEBPACK_IMPORTED_MODULE_14__["CDN"]
        };
        /**
         * Dictionary of names that are converted to 1-3 letter names
         */
        this.optimizedBoardNames = {
            t: "type",
            i: "id",
            tt: "title",
            o: "options",
            p: "protocol",
            c: "connections",
            es: "endpoints",
            e: "endpoint",
            eR: "endpointRef",
            u: "url",
            sM: "supportedMethods",
            m: "method",
            as: "actions",
            gM: "grpcMode",
            iCn: "isConsumer",
            iSb: "isSubscriber",
            rEp: "restEndpoints",
            rpEp: "rpcEndpoints",
            gEp: "graphqlEndpoints",
            gpEp: "grpcEndpoints",
            wEp: "websocketsEndpoints",
            ag: "algorithm",
            rPl: "replacementPolicy",
            wPl: "writePolicy",
            w: "width",
            h: "height",
            fS: "fontSize",
            iB: "isBold",
            iI: "isItalic",
            iMs: "isMasterShard",
            iS: "isShard",
            bg: "backgroundColor",
            co: "color",
            a: "asynchronous",
            pf: "performance",
            oR: "outputRate"
        };
        /**
         * Dictionary of types that are converted to 1-3 letter names
         */
        this.optimizedComponentTypes = {
            A: "API",
            AG: "APIGateway",
            C: "Client",
            CC: "ClientCluster",
            CA: "Cache",
            CS: "CloudStorage",
            D: "Database",
            LB: "LoadBalancer",
            MQ: "MessageQueue",
            P: "Proxy",
            PS: "PubSub",
            TF: "TextField",
            WS: "WebServer",
            CD: "CDN"
        };
    }
    getBoardSave(allLogicComponents, systemName, id) {
        let jsonReadyComponents = [];
        for (let component of allLogicComponents) {
            try {
                let jsonReadyComponent = {};
                jsonReadyComponent.type = this.getComponentType(component);
                jsonReadyComponent.id = component.originID.slice(0, 6);
                jsonReadyComponent.options = this.cloneOptions(component.options);
                jsonReadyComponent.connections = [];
                let inputPort = component.getPort(false);
                if (inputPort != null) { // Get all connections from inputPort to JSON ready form
                    for (let connection of inputPort.connections) {
                        let jsonReadyConnection = {};
                        jsonReadyConnection.from = jsonReadyComponent.id;
                        let connectedComponent = connection.getOtherPort(inputPort).parent;
                        jsonReadyConnection.to = connectedComponent.originID.slice(0, 6);
                        jsonReadyComponent.connections.push(jsonReadyConnection);
                        if (connection.lineBreaks != null && connection.lineBreaks.length != 2)
                            jsonReadyConnection.lineBreaks = connection.lineBreaks;
                        if (connection.title)
                            jsonReadyConnection.title = connection.title;
                    }
                }
                jsonReadyComponents.push(jsonReadyComponent);
            }
            catch (e) {
                continue;
            }
        }
        return {
            name: systemName,
            id: id || "",
            components: jsonReadyComponents
        };
    }
    getBoardJson(allLogicComponents, systemName, id) {
        let jsonReadySave = this.getBoardSave(allLogicComponents, systemName, id);
        return JSON.stringify(jsonReadySave);
    }
    /**
     * Takes in array of components that was made by getBoardSave method
     */
    getComponentsFromSave(save) {
        let components = [];
        let outputsTable = {};
        let connectionTable = [];
        for (let component of save) {
            let logicComponent = new this.types[component.type];
            for (let key of Object.keys(component.options)) {
                logicComponent.options[key] = component.options[key];
            }
            if (component instanceof src_models_Database__WEBPACK_IMPORTED_MODULE_6__["Database"] && component.options.isMasterShard) {
                component.outputPort = new src_models_Port__WEBPACK_IMPORTED_MODULE_9__["Port"](component, true, true);
            }
            let outputPort = logicComponent.getPort(true);
            let inputPort = logicComponent.getPort(false);
            if (outputPort) {
                outputsTable[component.id] = logicComponent;
            }
            if (inputPort) {
                let connection = {};
                connection.component = logicComponent;
                connection.id = logicComponent.originID;
                connection.to = component.connections;
                connectionTable.push(connection);
            }
            components.push(logicComponent);
        }
        for (let connection of connectionTable) {
            connection.to.filter(con => con.isFromOutput == null || !con.isFromOutput).forEach(con => {
                if (outputsTable[con.to]) {
                    let logicConnection = connection.component.connectTo(outputsTable[con.to], false, true);
                    logicConnection.lineBreaks = con.lineBreaks;
                    logicConnection.title = con.title;
                }
            });
        }
        return components;
    }
    getComponentType(component) {
        return Object.keys(this.types).find(type => component instanceof this.types[type]) || "Client";
    }
    save(allLogicComponents, id) {
        localStorage.setItem(this.LOCALSTORAGE_AUTOSAVE_KEY, this.getBoardJson(allLogicComponents, this.systemName, id));
    }
    getLatestBoardJson() {
        return localStorage.getItem(this.LOCALSTORAGE_AUTOSAVE_KEY);
    }
    getSavedBoardsJson() {
        return localStorage.getItem(this.LOCALSTORAGE_BOARDS_KEY);
    }
    getOptimizedBoard(allLogicComponents) {
        let save = this.getBoardSave(allLogicComponents, "", "");
        if (save.id)
            delete save.id; // Save ID is unnecessary
        for (let component of save.components) {
            component.i = component.id.slice(0, 5); // Slicing ID's to only 5 characters
            delete component.id;
            component.t = Object.keys(this.optimizedComponentTypes).find(key => this.optimizedComponentTypes[key] == component.type); // Optimize type
            delete component.type;
            let optimizedConnections = [];
            for (let connection of component.connections) {
                let con = [connection.from.slice(0, 5), connection.to.slice(0, 5),];
                if (connection.lineBreaks || connection.title)
                    con.push(connection.lineBreaks || []);
                if (connection.title)
                    con.push(connection.title);
                optimizedConnections.push(con);
            }
            if (optimizedConnections.length == 0)
                delete component.connections;
            else {
                component.c = optimizedConnections;
                delete component.connections;
            }
            component.o = this.cloneOptionsOptimized(component.options);
            delete component.options;
        }
        let saveJson = save.components;
        return saveJson;
    }
    getOptimizedBoardJson(allLogicComponents) {
        return JSON.stringify(this.getOptimizedBoard(allLogicComponents));
    }
    /**
     * Takes in optimized save string that was made by getOptimizedBoardSave method
     */
    getSaveFromOptimizedSave(save) {
        for (let component of save) {
            component.type = this.optimizedComponentTypes[component.t];
            component.options = this.getOptionsFromOptimized(component.o);
            component.id = component.i;
            let normalConnections = [];
            if (component.c != null) {
                for (let connection of component.c) {
                    let normalConnection = {
                        from: connection[0],
                        to: connection[1],
                    };
                    if (connection.length > 2)
                        normalConnection.lineBreaks = connection[2];
                    if (connection.length > 3)
                        normalConnection.title = connection[3];
                    normalConnections.push(normalConnection);
                }
            }
            component.connections = normalConnections;
            delete component.o;
            delete component.i;
            delete component.c;
            delete component.t;
        }
        return save;
    }
    /**
     * Saves array of save objects from getBoardSave method
     */
    saveBoards(boards) {
        localStorage.setItem(this.LOCALSTORAGE_BOARDS_KEY, JSON.stringify(boards));
    }
    /**
     * Returns new object that represents options of given component normalized for saving
     */
    cloneOptions(options) {
        var cloneObj = new options.constructor;
        for (var attribut in options) {
            if (options[attribut] != null && options[attribut].endpoint != null && options[attribut].method != null) {
                cloneObj[attribut] = {
                    endpoint: { url: options[attribut].endpoint.url, supportedMethods: options[attribut].endpoint.supportedMethods },
                    method: options[attribut].method
                };
                if (options[attribut].asynchronous === true) {
                    cloneObj[attribut].asynchronous = true;
                }
            }
            else if (typeof options[attribut] === "object" && options[attribut] != null)
                cloneObj[attribut] = this.cloneOptions(options[attribut]);
            else
                cloneObj[attribut] = options[attribut];
        }
        return cloneObj;
    }
    cloneOptionsOptimized(options) {
        var cloneObj = new options.constructor;
        for (var attribut in options) {
            let opt = Object.keys(this.optimizedBoardNames).find(key => this.optimizedBoardNames[key] === attribut); // Optimize type
            if (opt) {
                if (typeof options[attribut] === "object" && options[attribut] != null)
                    cloneObj[opt] = this.cloneOptionsOptimized(options[attribut]);
                else
                    cloneObj[opt] = options[attribut];
                delete cloneObj[attribut];
            }
            else {
                if (typeof options[attribut] === "object" && options[attribut] != null)
                    cloneObj[attribut] = this.cloneOptionsOptimized(options[attribut]);
                else
                    cloneObj[attribut] = options[attribut];
            }
        }
        return cloneObj;
    }
    getOptionsFromOptimized(options) {
        let cloneObj = new options.constructor;
        for (var attribut in options) {
            let opt = this.optimizedBoardNames[attribut];
            if (opt) {
                if (typeof options[attribut] === "object" && options[attribut] != null)
                    cloneObj[opt] = this.getOptionsFromOptimized(options[attribut]);
                else
                    cloneObj[opt] = options[attribut];
            }
            else {
                if (typeof options[attribut] === "object" && options[attribut] != null)
                    cloneObj[attribut] = this.getOptionsFromOptimized(options[attribut]);
                else
                    cloneObj[attribut] = options[attribut];
            }
        }
        return cloneObj;
    }
}
SavingService.ɵfac = function SavingService_Factory(t) { return new (t || SavingService)(); };
SavingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({ token: SavingService, factory: SavingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WjXT":
/*!****************************!*\
  !*** ./src/models/Port.ts ***!
  \****************************/
/*! exports provided: Port */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Port", function() { return Port; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _Connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Connection */ "uh67");
/* harmony import */ var _Shared_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shared/EventDispatcher */ "GLam");




class Port {
    /**
     *
     * @param parent: parent of port
     */
    constructor(parent, isOutput = false, hasMultipleConnections = false) {
        this.connections = [];
        this.removeConnectionDispatcher = new _Shared_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["EventDispatcher"]();
        this.dropRequestDispatcher = new _Shared_EventDispatcher__WEBPACK_IMPORTED_MODULE_3__["EventDispatcher"]();
        this.parent = parent;
        this.isOutput = isOutput;
        this.hasMultipleConnections = hasMultipleConnections;
    }
    /**
     * sendData: sends data to connection property
     */
    sendData(data, target = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.connections.length == 0)
                return false;
            if (this.hasMultipleConnections) {
                if (target == null)
                    yield this.connections[0].sendData(data, this);
                else {
                    let idx = this.connections.indexOf(target);
                    if (idx == -1)
                        return false;
                    yield this.connections[idx].sendData(data, this);
                }
            }
            else {
                if (this.connections.length > 0)
                    yield this.connections[0].sendData(data, this);
            }
            return true;
        });
    }
    /**
     * receiveData: sends data received from connection to parent property
     */
    receiveData(data, delay = 180) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["sleep"])(delay);
            yield this.parent.receiveData(data, this.isOutput);
        });
    }
    /**
     * connectTo: connects this port to given port via Connection class
     */
    connectTo(port) {
        if (!this.isConnectedTo(port)) {
            if (this.hasMultipleConnections) {
                let connection = new _Connection__WEBPACK_IMPORTED_MODULE_2__["Connection"](this, port);
                this.connections.push(connection);
                port.connectWith(connection);
                this.parent.onConnectionUpdate(this.isOutput);
                return connection;
            }
            else {
                let connection = new _Connection__WEBPACK_IMPORTED_MODULE_2__["Connection"](this, port);
                this.removeConnections(false);
                this.connections = [connection];
                port.connectWith(connection);
                this.parent.onConnectionUpdate(this.isOutput);
                return connection;
            }
        }
        return null;
    }
    /**
     * connectWith: connects this port to given connection
     */
    connectWith(connection) {
        if (this.hasMultipleConnections) {
            this.connections.push(connection);
        }
        else {
            this.removeConnections(false);
            this.connections = [connection];
        }
        this.parent.onConnectionUpdate(this.isOutput);
    }
    removeConnection(connection, removeFromOther = false, triggerOnRemove = true) {
        let connectionIndex = 0;
        let hasConnection = false;
        for (let connected of this.connections) {
            if (connection === connected) {
                hasConnection = true;
                break;
            }
            connectionIndex++;
        }
        if (hasConnection) {
            this.fireRemoveConnection(this.connections[connectionIndex]);
            if (removeFromOther)
                this.connections[connectionIndex].getOtherPort(this).removeConnection(this.connections[connectionIndex]);
            this.connections.splice(connectionIndex, 1);
        }
        if (triggerOnRemove)
            this.parent.onConnectionUpdate(this.isOutput);
    }
    removeConnections(triggerOnRemove = true) {
        let removed = this.connections.length > 0;
        while (this.connections.length > 0) {
            this.removeConnection(this.connections[0], true, false);
        }
        if (triggerOnRemove && removed)
            this.parent.onConnectionUpdate(this.isOutput);
    }
    /**
     * isConnectedTo: returns true if connected to given port via Connection
     */
    isConnectedTo(port) {
        for (let connection of this.connections) {
            if (connection.getOtherPort(this) === port)
                return true;
        }
        return false;
    }
    onRemoveConnection(handler) {
        this.removeConnectionDispatcher.register(handler);
    }
    fireRemoveConnection(event) {
        this.removeConnectionDispatcher.fire(event);
    }
    onDropRequest(handler) {
        this.dropRequestDispatcher.register(handler);
    }
    fireDropRequest(event) {
        this.dropRequestDispatcher.fire(event);
    }
}


/***/ }),

/***/ "XDID":
/*!*****************************************!*\
  !*** ./src/models/enums/WritePolicy.ts ***!
  \*****************************************/
/*! exports provided: WritePolicy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritePolicy", function() { return WritePolicy; });
var WritePolicy;
(function (WritePolicy) {
    WritePolicy[WritePolicy["Write-Through"] = 0] = "Write-Through";
    WritePolicy[WritePolicy["Write-Back (Behind)"] = 1] = "Write-Back (Behind)";
})(WritePolicy || (WritePolicy = {}));


/***/ }),

/***/ "XDIl":
/*!**********************************************!*\
  !*** ./src/models/enums/LoadBalancerType.ts ***!
  \**********************************************/
/*! exports provided: LoadBalancerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBalancerType", function() { return LoadBalancerType; });
var LoadBalancerType;
(function (LoadBalancerType) {
    LoadBalancerType[LoadBalancerType["Layer 7"] = 0] = "Layer 7";
    LoadBalancerType[LoadBalancerType["Layer 4"] = 1] = "Layer 4";
})(LoadBalancerType || (LoadBalancerType = {}));


/***/ }),

/***/ "XUGb":
/*!************************************!*\
  !*** ./src/app/changes.service.ts ***!
  \************************************/
/*! exports provided: ChangesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangesService", function() { return ChangesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Change {
    constructor(Board) {
        this.Board = Board;
    }
}
class ChangesService {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
    }
    /**
     * Push the state of the board to undo stack
     */
    pushChange(state) {
        if (state == null)
            return;
        let change = new Change(state);
        this.undoStack.push(change);
        this.redoStack = [];
    }
    /**
     * Returns the json state of board
     */
    getUndo(currentState) {
        let change = this.undoStack.pop();
        if (change == null)
            return null;
        this.redoStack.push(new Change(currentState));
        return change.Board;
    }
    /**
     * Returns the json state of board
     */
    getRedo() {
        let change = this.redoStack.pop();
        if (change == null)
            return null;
        return change.Board;
    }
    /**
     * Resets all changes
     */
    reset() {
        this.redoStack = [];
        this.undoStack = [];
    }
}
ChangesService.ɵfac = function ChangesService_Factory(t) { return new (t || ChangesService)(); };
ChangesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChangesService, factory: ChangesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Y1pD":
/*!****************************************************!*\
  !*** ./src/app/board/boardUI/boardUI.component.ts ***!
  \****************************************************/
/*! exports provided: BoardUIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardUIComponent", function() { return BoardUIComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_export_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/export.service */ "38ki");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var src_app_placing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/placing.service */ "epgU");
/* harmony import */ var src_app_saving_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/saving.service */ "Wbgk");
/* harmony import */ var src_app_viewing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/viewing.service */ "nesx");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















const _c0 = ["file"];
const _c1 = ["preview"];
function BoardUIComponent_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Light mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BoardUIComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Dark mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BoardUIComponent_span_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " helpers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BoardUIComponent_ng_template_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Disable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " helpers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BoardUIComponent_span_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Show titles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BoardUIComponent_ng_template_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hide titles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BoardUIComponent_button_119_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_button_119_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.fullscreen.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Go fullscreen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BoardUIComponent_mat_option_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", val_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", val_r23 * 100, "%");
} }
function BoardUIComponent_div_251_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click.self", function BoardUIComponent_div_251_Template_div_click_self_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.isSavingOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "File name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BoardUIComponent_div_251_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.saveFileName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_div_251_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.isSavingOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_div_251_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.isSavingOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_div_251_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.saveFile.emit(ctx_r29.saveFileName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r19.saveFileName);
} }
function BoardUIComponent_div_252_textarea_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "textarea", 75);
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textContent", ctx_r30.embedIFrameTemplate);
} }
function BoardUIComponent_div_252_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "You can only embed a system with 2 or more components!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BoardUIComponent_div_252_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click.self", function BoardUIComponent_div_252_Template_div_click_self_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.closeEmbedIFrame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Embed as IFrame");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "An IFrame HTML tag will be generated. Copy & paste it into your HTML template to display your system in read-only format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Show component titles by default: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BoardUIComponent_div_252_Template_input_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.changeEmbedIFrameOptions(); })("ngModelChange", function BoardUIComponent_div_252_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.embedIFrameOptions.showTitles = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Dark mode: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BoardUIComponent_div_252_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.changeEmbedIFrameOptions(); })("ngModelChange", function BoardUIComponent_div_252_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.embedIFrameOptions.darkMode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BoardUIComponent_div_252_textarea_14_Template, 1, 1, "textarea", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, BoardUIComponent_div_252_ng_template_15_Template, 2, 0, "ng-template", null, 72, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_div_252_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.generateEmbedIFrameUuid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Generate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_div_252_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.previewEmbedIFrame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_div_252_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.closeEmbedIFrame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_div_252_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.copyEmbedIFrame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r20.embedIFrameOptions.showTitles);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r20.embedIFrameOptions.darkMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r20.showEmbedError)("ngIfElse", _r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r20.showEmbedError);
} }
class BoardUIComponent {
    constructor(placingService, savingService, viewingService, exportService) {
        this.placingService = placingService;
        this.savingService = savingService;
        this.viewingService = viewingService;
        this.exportService = exportService;
        // File section events
        this.newFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.exportPng = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.exportSvg = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.embedIFrame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Edit section events
        this.copyComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pasteComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectAllComponents = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cutComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.undo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.redo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clearBoard = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // View section events
        this.fullscreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.zoomIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.zoomOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeScale = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resetView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Help section events
        this.onboardTutorial1 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.API_URL = "http://127.0.0.1:8000";
        this.name = "Untitled System";
        this.saveFileName = "Untitled System";
        this.confirmDialogText = "";
        this.confirmDialogOpen = false;
        this.isKeyboardShortcutsOpen = false;
        this.isExportPngDialogOpen = false;
        this.isExportSvgDialogOpen = false;
        this.isHelpersDisabled = false;
        this.isTitlesHidden = false;
        this.isPreviewOpen = false;
        this.isSavingOpen = false;
        this.isEmbedIFrameOpen = false;
        this.isPerformanceModeEnabled = false;
        this.isResponsesHidden = false;
        this.embedIFrameTemplate = "";
        this.showEmbedError = false;
        this.embedIFrameOptions = new src_app_export_service__WEBPACK_IMPORTED_MODULE_3__["EmbedIFrameOptions"]();
        this.embedIFrameJson = undefined;
        this.embedIFrameBase64Encoded = undefined;
        this.embedIFrameUuid = "";
        this.canUseShortcuts = true;
        this.exportPngOptions = new src_app_export_service__WEBPACK_IMPORTED_MODULE_3__["ExportPngOptions"]();
        this.exportSvgOptions = new src_app_export_service__WEBPACK_IMPORTED_MODULE_3__["ExportSvgOptions"]();
        this.isMobile = false;
        this.scaleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.scaleSelectList = [0.1, 0.5, 1, 1.5, 2];
        this.confirmDialogReturnFunction = () => { };
        /**
         * Dictionary of keys with assigned function when pressed with ctrl key
         */
        this.controlShortcuts = {
            "c": (e) => {
                this.copyComponent.emit();
            },
            "v": (e) => {
                this.pasteComponent.emit();
            },
            "a": (e) => {
                e.preventDefault();
                this.selectAllComponents.emit();
            },
            "x": (e) => {
                this.cutComponent.emit();
            },
            "s": (e) => {
                e.preventDefault();
                this.save.emit(true);
            },
            "z": (e) => {
                e.preventDefault();
                this.undo.emit();
            },
            "y": (e) => {
                e.preventDefault();
                this.redo.emit();
            },
            "+": (e) => {
                e.preventDefault();
                this.zoomIn.emit();
            },
            "-": (e) => {
                e.preventDefault();
                this.zoomOut.emit();
            }
        };
        this.isHelpersDisabled = viewingService.isHelpersDisabled();
        this.isTitlesHidden = viewingService.isTitlesHidden();
        this.isPerformanceModeEnabled = viewingService.isPerformanceMode();
        this.isResponsesHidden = viewingService.isResponsesHidden();
    }
    load(file) {
        if (file.files.length == 0)
            return;
        if (!this.isJson(file.files[0].name)) {
            this.placingService.showSnack("You need to upload .json file");
            return;
        }
        let reader = new FileReader();
        reader.onload = ((f) => {
            return (e) => {
                let data = e.target.result;
                this.loadFile.emit(data);
            };
        })(file);
        reader.readAsText(file.files[0]);
        this.fileInput.nativeElement.value = null;
        this.canUseShortcuts = true;
    }
    isJson(name) {
        if (name.length == 0)
            return false;
        return name.substring(name.length - 5, name.length).toLowerCase() === ".json";
    }
    onNameChange() {
        this.savingService.systemName = this.name;
    }
    changeName(name) {
        this.name = name;
        this.saveFileName = name;
        this.savingService.systemName = name;
    }
    ngOnInit() {
        this.scaleControl.setValue(1);
        document.addEventListener("focusin", () => {
            this.canUseShortcuts = false;
        });
        document.addEventListener("focusout", () => {
            this.canUseShortcuts = true;
        });
        window.onkeydown = (e) => {
            if (!this.canUseShortcuts)
                return;
            if (e.ctrlKey && this.controlShortcuts[e.key]) {
                this.controlShortcuts[e.key](e);
            }
            if (e.key === 'Delete')
                this.delComponent.emit();
        };
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.isMobile = true;
        }
    }
    showConfirmDialog(text, returnFunction) {
        this.confirmDialogOpen = true;
        this.confirmDialogText = text;
        this.confirmDialogReturnFunction = returnFunction;
    }
    closeDialog() {
        this.confirmDialogOpen = false;
    }
    confirmDialog() {
        this.confirmDialogReturnFunction();
        this.confirmDialogOpen = false;
    }
    newFileDialog() {
        this.newFile.emit();
    }
    openEmbedIFrame() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isEmbedIFrameOpen = true;
            let components = this.getComponents();
            if (components.length <= 1) {
                this.showEmbedError = true;
                return;
            }
            this.showEmbedError = false;
            this.embedIFrameJson = this.savingService.getOptimizedBoard(components);
            let obj = { comp: this.embedIFrameJson };
            obj.showTitles = this.embedIFrameOptions.showTitles;
            obj.darkMode = this.embedIFrameOptions.darkMode;
            this.embedIFrameJson = JSON.stringify(obj);
            this.embedIFrameBase64Encoded = btoa(this.embedIFrameJson);
            // this.embedIFrameJson = this.savingService.getOptimizedBoardJson(components);
            // let obj: any = {comp: JSON.parse(this.embedIFrameJson)};
            // obj.showTitles = this.embedIFrameOptions.showTitles;
            // obj.darkMode = this.embedIFrameOptions.darkMode;
            // this.embedIFrameJson = JSON.stringify(obj);
            // let base64Encoded = btoa(this.embedIFrameJson);
            // this.generateEmbedIFrameTemplate(base64Encoded);
        });
    }
    sendBoardPost(boardSave) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(boardSave);
            const response = yield fetch(`${this.API_URL}/api/board`, {
                method: "POST",
                body: boardSave,
            });
            const uuid = yield response.text();
            return uuid;
        });
    }
    generateEmbedIFrameUuid() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.embedIFrameUuid = yield this.sendBoardPost(this.embedIFrameBase64Encoded);
            let url = "http://localhost:4200/create";
            let template = `<iframe frameborder="0" style="width:100%;height:600px;" src="${url}?viewer=${this.embedIFrameUuid}">\n</iframe>`;
            this.embedIFrameTemplate = template;
        });
    }
    changeEmbedIFrameOptions() {
        let obj = JSON.parse(this.embedIFrameJson);
        obj.showTitles = this.embedIFrameOptions.showTitles;
        obj.darkMode = this.embedIFrameOptions.darkMode;
        this.embedIFrameJson = JSON.stringify(obj);
        this.embedIFrameBase64Encoded = btoa(this.embedIFrameJson);
    }
    previewEmbedIFrame() {
        var win = window.open("", "Preview");
        win.document.body.innerHTML = this.embedIFrameTemplate;
    }
    closeEmbedIFrame() {
        this.isEmbedIFrameOpen = false;
        this.embedIFrameTemplate = "";
    }
    copyEmbedIFrame() {
        var copyText = document.getElementById("embedIframeText");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Copied to clipboard");
    }
    openSaveFile() {
        this.isSavingOpen = true;
        this.saveFileName = this.name;
    }
    clearBoardDialog() {
        this.clearBoard.emit();
    }
    exportAsPng() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let components = this.getComponents();
            if (components == null || components.length == 0) {
                this.placingService.showSnack("You can't export an empty board.");
                return;
            }
            let canvas = yield this.exportService.getCanvas(components, this.exportPngOptions);
            Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_4__["downloadPng"])(this.name + ".png", canvas.toDataURL('image/png', 1));
            this.closeExportPngDialog();
        });
    }
    openExportPngDialog() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isExportPngDialogOpen = true;
        });
    }
    closeExportPngDialog() {
        this.isExportPngDialogOpen = false;
    }
    exportAsSvg() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let svg = yield this.exportService.getSvg(this.getComponents(), this.exportSvgOptions);
            if (svg == null) {
                this.placingService.showSnack("You can't export an empty board.");
                return;
            }
            Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_4__["downloadSvg"])(this.name + ".svg", svg);
            this.closeExportSvgDialog();
        });
    }
    openExportSvgDialog() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isExportSvgDialogOpen = true;
        });
    }
    closeExportSvgDialog() {
        this.isExportSvgDialogOpen = false;
    }
    openKeyboardShortcuts() {
        this.isKeyboardShortcutsOpen = true;
    }
    closeKeyboardShortcuts() {
        this.isKeyboardShortcutsOpen = false;
    }
    toggleHelpersDisabled() {
        this.isHelpersDisabled = !this.isHelpersDisabled;
        this.viewingService.setHelpersDisabled(this.isHelpersDisabled);
    }
    toggleTitlesHidden() {
        this.isTitlesHidden = !this.isTitlesHidden;
        this.viewingService.setTitlesHidden(this.isTitlesHidden);
    }
    togglePerformanceModeEnabled() {
        this.viewingService.setPerformanceMode(this.isPerformanceModeEnabled);
    }
    toggleHideResponses() {
        this.viewingService.setResponsesHidden(this.isResponsesHidden);
    }
    openPreview(png = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (png) {
                this.exportPngPreview = yield this.exportService.getCanvas(this.getComponents(), this.exportPngOptions);
                if (this.exportPngPreview == null)
                    return;
                this.exportPngPreview.style.width = "100%";
                this.exportPngPreview.style.marginBottom = "-5px";
                this.preview.nativeElement.innerHTML = "";
                this.preview.nativeElement.appendChild(this.exportPngPreview);
            }
            else {
                let components = this.getComponents();
                this.exportSvgPreview = yield this.exportService.getSvg(components, this.exportSvgOptions);
                if (this.exportSvgPreview == null)
                    return;
                this.exportSvgPreview.style.marginBottom = "-5px";
                this.preview.nativeElement.innerHTML = "";
                this.preview.nativeElement.appendChild(this.exportSvgPreview);
            }
            this.isPreviewOpen = true;
        });
    }
    closePreview() {
        this.isPreviewOpen = false;
    }
    handleScaleChange() {
        this.changeScale.emit(this.scaleControl.value);
    }
}
BoardUIComponent.ɵfac = function BoardUIComponent_Factory(t) { return new (t || BoardUIComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_placing_service__WEBPACK_IMPORTED_MODULE_5__["PlacingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_saving_service__WEBPACK_IMPORTED_MODULE_6__["SavingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_viewing_service__WEBPACK_IMPORTED_MODULE_7__["ViewingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_export_service__WEBPACK_IMPORTED_MODULE_3__["ExportService"])); };
BoardUIComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BoardUIComponent, selectors: [["board-ui"]], viewQuery: function BoardUIComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.preview = _t.first);
    } }, inputs: { getComponents: "getComponents" }, outputs: { newFile: "newFile", saveFile: "saveFile", loadFile: "loadFile", showSaved: "showSaved", save: "save", exportPng: "exportPng", exportSvg: "exportSvg", embedIFrame: "embedIFrame", copyComponent: "copyComponent", pasteComponent: "pasteComponent", selectAllComponents: "selectAllComponents", cutComponent: "cutComponent", delComponent: "delComponent", undo: "undo", redo: "redo", clearBoard: "clearBoard", fullscreen: "fullscreen", zoomIn: "zoomIn", zoomOut: "zoomOut", changeScale: "changeScale", resetView: "resetView", onboardTutorial1: "onboardTutorial1" }, decls: 253, vars: 40, consts: [[1, "nav"], [1, "nav-list"], ["spellcheck", "false", "autocomplete", "off", "type", "text", "id", "navbar-name", 1, "navbar-name", 3, "ngModel", "input", "ngModelChange"], ["mat-icon-button", "", "aria-label", "File menu", 3, "matMenuTriggerFor"], ["fileMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 1, "custom-file-upload"], ["type", "file", "accept", ".json", 2, "position", "absolute", "width", "100%", "height", "100%", "opacity", "0", "cursor", "pointer", "right", "0", "z-index", "100", 3, "input"], ["file", ""], [1, "line"], ["mat-menu-item", "", "mat-icon-button", "", "aria-label", "Export menu", 3, "matMenuTriggerFor"], ["exportMenu", "matMenu"], ["mat-menu-item", "", "mat-icon-button", "", "aria-label", "Embed menu", 3, "matMenuTriggerFor"], ["embedMenu", "matMenu"], ["mat-icon-button", "", "aria-label", "Edit menu", 3, "matMenuTriggerFor"], ["editMenu", "matMenu"], ["mat-icon-button", "", "aria-label", "View menu", 3, "matMenuTriggerFor"], ["viewMenu", "matMenu"], [4, "ngIf", "ngIfElse"], ["lightMode", ""], ["helpersEnabled", ""], ["titlesVisible", ""], ["mat-icon-button", "", "aria-label", "Help menu", 3, "matMenuTriggerFor"], ["helpMenu", "matMenu"], [1, "nav-bonus"], [1, "example-margin", 3, "ngModel", "change", "ngModelChange"], [3, "click", 4, "ngIf"], [1, "nav-second"], ["appearance", "fill", 1, "nav-select"], [3, "formControl", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "v-line"], [1, "icon", 3, "click"], [1, "fas", "fa-search-plus"], [1, "fas", "fa-search-minus"], [1, "fas", "fa-undo-alt"], [1, "fas", "fa-redo"], [1, "far", "fa-copy"], [1, "fas", "fa-paste"], [1, "fas", "fa-trash"], [1, "confirm-dialog-container", 3, "click.self"], [1, "confirm-dialog"], [1, "title"], [1, "buttons-bottom"], [1, "btn-cancel", 3, "click"], [1, "btn-confirm", 3, "click"], [1, "keyboard-shortcuts-window"], [1, "keyboard-shortcuts-title"], [1, "shortcuts-list"], [1, "highlight"], [1, "close", 3, "click"], [1, "fas", "fa-times"], [1, "confirm-dialog", "export"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["type", "checkbox", 3, "disabled", "ngModel", "ngModelChange"], [1, "btn-preview", 3, "click"], [1, "preview-container", 3, "click"], [1, "preview"], ["preview", ""], ["class", "backdrop-centralized saving", 3, "click.self", 4, "ngIf"], ["class", "backdrop-centralized embed", 3, "click.self", 4, "ngIf"], [1, "far", "fa-question-circle"], [3, "click"], [3, "value"], [1, "backdrop-centralized", "saving", 3, "click.self"], [1, "saving-inner", "confirm-dialog"], [1, "name"], ["spellcheck", "false", "required", "", "placeholder", "File name", 3, "ngModel", "ngModelChange"], [1, "backdrop-centralized", "embed", 3, "click.self"], [1, "confirm-dialog", "embed-inner"], ["type", "checkbox", 3, "ngModel", "change", "ngModelChange"], ["id", "embedIframeText", "readonly", "", 3, "textContent", 4, "ngIf", "ngIfElse"], ["iframeEmbedError", ""], [1, "btn-preview", 2, "margin-top", "16px", 3, "click"], [1, "btn-confirm", 3, "disabled", "click"], ["id", "embedIframeText", "readonly", "", 3, "textContent"], [1, "error"]], template: function BoardUIComponent_Template(rf, ctx) { if (rf & 1) {
        const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function BoardUIComponent_Template_input_input_4_listener() { return ctx.onNameChange(); })("ngModelChange", function BoardUIComponent_Template_input_ngModelChange_4_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-menu", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_10_listener() { return ctx.showConfirmDialog("Do you really want to create a new file?", ctx.newFileDialog); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "New file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_13_listener() { return ctx.openSaveFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Save file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function BoardUIComponent_Template_input_input_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18); return ctx.load(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Load file ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_20_listener() { return ctx.showSaved.emit(ctx.name); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Show saved boards");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_24_listener() { return ctx.save.emit(ctx.name); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-menu", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_32_listener() { return ctx.openExportPngDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Export as PNG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_35_listener() { return ctx.openExportSvgDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Export as SVG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Embed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-menu", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_42_listener() { return ctx.openEmbedIFrame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Embed IFrame");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-menu", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_50_listener() { return ctx.copyComponent.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_53_listener() { return ctx.pasteComponent.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Paste");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_56_listener() { return ctx.cutComponent.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Cut");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_59_listener() { return ctx.delComponent.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_62_listener() { return ctx.undo.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_65_listener() { return ctx.redo.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Redo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_69_listener() { return ctx.showConfirmDialog("Do you really want to clear the board?", ctx.clearBoardDialog); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Clear board");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " View ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-menu", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_77_listener() { return ctx.viewingService.setDarkMode(!ctx.viewingService.isDarkMode()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, BoardUIComponent_span_78_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, BoardUIComponent_ng_template_79_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_81_listener() { return ctx.fullscreen.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Go fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_84_listener() { return ctx.zoomIn.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Zoom in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_87_listener() { return ctx.zoomOut.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Zoom out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_91_listener() { return ctx.toggleHelpersDisabled(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, BoardUIComponent_span_92_Template, 4, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, BoardUIComponent_ng_template_93_Template, 4, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_95_listener() { return ctx.toggleTitlesHidden(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, BoardUIComponent_span_96_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, BoardUIComponent_ng_template_97_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_100_listener() { return ctx.resetView.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Reset view");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, " Help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "mat-menu", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_108_listener() { return ctx.onboardTutorial1.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Quick introduction tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_111_listener() { return ctx.openKeyboardShortcuts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Keyboard shortcuts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "mat-checkbox", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BoardUIComponent_Template_mat_checkbox_change_115_listener() { return ctx.togglePerformanceModeEnabled(); })("ngModelChange", function BoardUIComponent_Template_mat_checkbox_ngModelChange_115_listener($event) { return ctx.isPerformanceModeEnabled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Performance mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "mat-checkbox", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BoardUIComponent_Template_mat_checkbox_change_117_listener() { return ctx.toggleHideResponses(); })("ngModelChange", function BoardUIComponent_Template_mat_checkbox_ngModelChange_117_listener($event) { return ctx.isResponsesHidden = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Hide responses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](119, BoardUIComponent_button_119_Template, 2, 0, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "nav", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "mat-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function BoardUIComponent_Template_mat_select_selectionChange_124_listener() { return ctx.handleScaleChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](125, BoardUIComponent_mat_option_125_Template, 2, 2, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_span_click_127_listener() { return ctx.zoomIn.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_span_click_130_listener() { return ctx.zoomOut.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_span_click_133_listener() { return ctx.undo.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_span_click_136_listener() { return ctx.redo.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_span_click_139_listener() { return ctx.copyComponent.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_span_click_142_listener() { return ctx.pasteComponent.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_span_click_145_listener() { return ctx.delComponent.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click.self", function BoardUIComponent_Template_div_click_self_147_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_152_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_154_listener() { return ctx.confirmDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click.self", function BoardUIComponent_Template_div_click_self_156_listener() { return ctx.closeKeyboardShortcuts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Keyboard shortcuts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "ul", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "CTRL C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Copy component");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "CTRL V");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Paste component");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "DEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Delete component");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "CTRL +");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Zoom in on board");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "CTRL -");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Zoom out of board");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "CTRL Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Undo change");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "CTRL Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Redo change");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_196_listener() { return ctx.closeKeyboardShortcuts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click.self", function BoardUIComponent_Template_div_click_self_198_listener() { return ctx.closeExportPngDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Export as PNG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Transparent background: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BoardUIComponent_Template_input_ngModelChange_205_listener($event) { return ctx.exportPngOptions.transparentBackground = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Capture only used area: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BoardUIComponent_Template_input_ngModelChange_209_listener($event) { return ctx.exportPngOptions.captureUsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Show component titles: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BoardUIComponent_Template_input_ngModelChange_213_listener($event) { return ctx.exportPngOptions.showTitles = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Light mode: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BoardUIComponent_Template_input_ngModelChange_217_listener($event) { return ctx.exportPngOptions.lightMode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Light color titles: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BoardUIComponent_Template_input_ngModelChange_221_listener($event) { return ctx.exportPngOptions.lightTitles = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_223_listener() { return ctx.closeExportPngDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_225_listener() { return ctx.openPreview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_227_listener() { return ctx.exportAsPng(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click.self", function BoardUIComponent_Template_div_click_self_229_listener() { return ctx.closeExportSvgDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Export as SVG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "Show component titles: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BoardUIComponent_Template_input_ngModelChange_236_listener($event) { return ctx.exportSvgOptions.showTitles = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Light color titles: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BoardUIComponent_Template_input_ngModelChange_240_listener($event) { return ctx.exportSvgOptions.lightTitles = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_242_listener() { return ctx.closeExportSvgDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_244_listener() { return ctx.openPreview(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_button_click_246_listener() { return ctx.exportAsSvg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardUIComponent_Template_div_click_248_listener() { return ctx.closePreview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "div", 57, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](251, BoardUIComponent_div_251_Template, 13, 1, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](252, BoardUIComponent_div_252_Template, 26, 5, "div", 60);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](76);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](80);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](94);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](98);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.viewingService.isDarkMode())("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isHelpersDisabled)("ngIfElse", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isTitlesHidden)("ngIfElse", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.isPerformanceModeEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.isResponsesHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.scaleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.scaleSelectList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.confirmDialogOpen ? "flex" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.confirmDialogText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.isKeyboardShortcutsOpen ? "flex" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.isExportPngDialogOpen ? "flex" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.exportPngOptions.transparentBackground);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.exportPngOptions.captureUsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.exportPngOptions.showTitles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.exportPngOptions.lightMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.exportPngOptions.transparentBackground || !ctx.exportPngOptions.showTitles)("ngModel", ctx.exportPngOptions.lightTitles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.isExportSvgDialogOpen ? "flex" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.exportSvgOptions.showTitles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.exportSvgOptions.showTitles)("ngModel", ctx.exportSvgOptions.lightTitles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.isPreviewOpen ? "flex" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSavingOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEmbedIFrameOpen);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["nav[_ngcontent-%COMP%] {\n  z-index: 30;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: stretch;\n  background-color: var(--background-light);\n  color: rgba(255, 255, 255, 0.6);\n  position: relative;\n}\n\n.nav[_ngcontent-%COMP%] {\n  z-index: 100;\n}\n\n.nav[_ngcontent-%COMP%]   .navbar-name[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 0.1em 0.2em;\n  border: none;\n  outline: none;\n  width: 10em;\n  color: var(--main);\n}\n\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: 1em;\n  color: var(--text);\n  transition: color 0.1s linear;\n  cursor: pointer;\n}\n\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--main);\n}\n\n.nav[_ngcontent-%COMP%]   .file-form[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.nav-second[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  padding: 0.2em 0;\n  box-shadow: 0px -5px 20px 0px rgba(0, 0, 0, 0.3);\n}\n\n.nav-second[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%] {\n  gap: 0.3em;\n  color: var(--text);\n  justify-content: flex-start;\n}\n\n.nav-second[_ngcontent-%COMP%]   .v-line[_ngcontent-%COMP%]::before {\n  content: \"\";\n  height: 100%;\n  margin-right: 0.3em;\n  margin-left: 0.3em;\n  border-left: 2px solid var(--text);\n}\n\n.nav-second[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: inherit;\n  outline: none;\n  border: none;\n}\n\n.nav-second[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  transition: transform 0.1s linear, color 0.1s linear;\n}\n\n.nav-second[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  color: var(--main);\n  cursor: pointer;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.line[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 80%;\n  background-color: var(--text);\n  border-color: var(--text);\n  opacity: 0.1;\n}\n\n.confirm-dialog-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n\n.confirm-dialog[_ngcontent-%COMP%] {\n  min-width: 350px;\n  max-width: 480px;\n  padding: 1.5em 1em;\n  text-align: center;\n  background-color: var(--background-light);\n  color: var(--text);\n}\n\n.confirm-dialog.export[_ngcontent-%COMP%] {\n  min-width: 550px;\n  max-width: 700px;\n}\n\n.confirm-dialog[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n\n.confirm-dialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.3em 1.35em;\n  outline: none;\n  border: 0;\n  border-radius: 0.2em;\n  font-weight: 600;\n  font-size: 0.9em;\n  cursor: pointer;\n  transition: background-color 0.15s ease-in-out;\n}\n\n.confirm-dialog[_ngcontent-%COMP%]   button.btn-cancel[_ngcontent-%COMP%] {\n  border: 0.15em solid var(--text);\n  color: var(--text);\n  background-color: transparent;\n}\n\n.confirm-dialog[_ngcontent-%COMP%]   button.btn-cancel[_ngcontent-%COMP%]:hover {\n  color: var(--background-light);\n  background-color: var(--text);\n}\n\n.confirm-dialog[_ngcontent-%COMP%]   button.btn-confirm[_ngcontent-%COMP%] {\n  background-color: var(--main);\n  color: #fff;\n  border: 0.15em solid var(--main);\n}\n\n.confirm-dialog[_ngcontent-%COMP%]   button.btn-confirm[_ngcontent-%COMP%]:hover {\n  border-color: var(--main);\n  color: var(--main);\n  background-color: transparent;\n}\n\n.confirm-dialog[_ngcontent-%COMP%]   button.btn-confirm[_ngcontent-%COMP%]:disabled {\n  filter: grayscale(1);\n  cursor: not-allowed;\n}\n\n.confirm-dialog[_ngcontent-%COMP%]   button.btn-confirm[_ngcontent-%COMP%]:disabled:hover {\n  background-color: var(--main);\n  border-color: var(--main);\n  color: #fff;\n}\n\n.confirm-dialog[_ngcontent-%COMP%]   button.btn-preview[_ngcontent-%COMP%] {\n  border: 0.15em solid var(--main);\n  color: var(--main);\n  filter: saturate(0.5);\n  background-color: transparent;\n}\n\n.confirm-dialog[_ngcontent-%COMP%]   button.btn-preview[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: var(--main);\n}\n\n.confirm-dialog[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0.4em 0;\n}\n\n.confirm-dialog[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: auto;\n  flex-basis: 50%;\n}\n\n.confirm-dialog[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: right;\n}\n\n.buttons-bottom[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  padding: 0.3em;\n  display: flex;\n  justify-content: center;\n  gap: 1em;\n}\n\n.preview-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n  justify-content: center;\n  align-items: center;\n  z-index: 1400;\n}\n\n.preview[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  flex-basis: 80%;\n  outline: 0.1em solid #c0c0c0;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: var(--background);\n}\n\n.keyboard-shortcuts-window[_ngcontent-%COMP%] {\n  color: var(--text);\n  position: absolute;\n  top: 15%;\n  bottom: 30%;\n  right: 25%;\n  left: 25%;\n  border: 0.2em solid var(--background);\n  background-color: var(--background-light);\n  box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.2);\n  padding: 2em;\n  overflow-y: scroll;\n}\n\n.keyboard-shortcuts-window[_ngcontent-%COMP%]   .keyboard-shortcuts-title[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n  display: block;\n  text-align: center;\n  font-size: 1.15em;\n}\n\n.keyboard-shortcuts-window[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: var(--main);\n  font-weight: 400;\n}\n\n.keyboard-shortcuts-window[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  outline: 0;\n  border: 0;\n  cursor: pointer;\n  position: absolute;\n  top: 0.25em;\n  right: 0.25em;\n  font-size: 1em;\n  color: var(--text);\n  background-color: transparent;\n  width: 1.5em;\n  height: 1.5em;\n  transition: color 0.1s linear;\n}\n\n.keyboard-shortcuts-window[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  color: var(--main);\n}\n\n.keyboard-shortcuts-window[_ngcontent-%COMP%]   .shortcuts-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  gap: 0.7em;\n  align-items: center;\n}\n\n.keyboard-shortcuts-window[_ngcontent-%COMP%]   .shortcuts-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  width: 75%;\n  gap: 1.5em;\n}\n\n.keyboard-shortcuts-window[_ngcontent-%COMP%]   .shortcuts-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  text-align: right;\n}\n\n.keyboard-shortcuts-window[_ngcontent-%COMP%]   .shortcuts-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.keyboard-shortcuts-window[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n\n.keyboard-shortcuts-window[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n\n.keyboard-shortcuts-window[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: transparent;\n}\n\n.saving[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: var(--text);\n}\n\n.saving[_ngcontent-%COMP%]   .saving-inner[_ngcontent-%COMP%] {\n  background-color: var(--background-light);\n  padding: 2em 1em;\n  gap: 1em;\n  position: relative;\n}\n\n.saving[_ngcontent-%COMP%]   .saving-inner[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 0.2em;\n}\n\n.saving[_ngcontent-%COMP%]   .saving-inner[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.35);\n  color: var(--text);\n  padding: 0.3em 0.5em;\n  border: 0;\n  outline: none;\n  border-bottom: 0.15em solid transparent;\n}\n\n.saving[_ngcontent-%COMP%]   .saving-inner[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .saving[_ngcontent-%COMP%]   .saving-inner[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--main);\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  color: var(--text);\n  top: 0.2em;\n  right: 0.2em;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  cursor: pointer;\n  font-size: 1.1em;\n}\n\n.close[_ngcontent-%COMP%]:hover {\n  color: var(--text);\n}\n\n.backdrop-centralized[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.embed-inner[_ngcontent-%COMP%] {\n  max-width: 640px;\n  padding: 1.15em;\n}\n\n.embed-inner[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.embed-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.75em 0.2em;\n  font-size: 0.75rem;\n}\n\n.embed-inner[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  resize: none;\n  font-size: 0.7rem;\n  font-family: \"Roboto\";\n  font-weight: 300;\n  border: 0.2em solid var(--background);\n  padding: 1em 0.5em;\n  outline: none;\n  color: var(--text);\n  background-color: var(--background-dark);\n}\n\n.embed-inner[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  margin: 1.5em 0;\n  color: #ec0000;\n  font-weight: 600;\n  font-size: 1em;\n}\n\n.nav-bonus[_ngcontent-%COMP%] {\n  margin-left: 2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8rem;\n  gap: 0.75em;\n}\n\n.nav-bonus[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  font-size: inherit;\n  color: var(--text);\n}\n\n.nav-bonus[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--main);\n  padding: 0.2em 0.55em;\n  color: #fff;\n  border-radius: 0.2em;\n  transition: filter 0.1s linear;\n  position: relative;\n}\n\n.nav-bonus[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  filter: saturate(1.35);\n}\n\n.nav-bonus[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.75em;\n  background-color: #b18611;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translateX(75%) rotateZ(15deg);\n  padding: 0.2em;\n  border-radius: 0.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JvYXJkVUkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx5Q0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFESTtFQUNJLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLFdBQUE7RUFDQSxrQkFBQTtBQUVSOztBQUFJO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQUVSOztBQUFJO0VBQ0ksa0JBQUE7QUFFUjs7QUFBSTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFFUjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtBQUVKOztBQURJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFHUjs7QUFESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FBR1I7O0FBREk7RUFDSSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUdSOztBQURJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG9EQUFBO0FBR1I7O0FBREk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUdSOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUxJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQU9SOztBQUxJO0VBQ0ksZ0JBQUE7QUFPUjs7QUFMSTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsOENBQUE7QUFPUjs7QUFOUTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQVFaOztBQVBZO0VBQ0ksOEJBQUE7RUFDQSw2QkFBQTtBQVNoQjs7QUFOUTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBUVo7O0FBUFk7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFTaEI7O0FBUFk7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0FBU2hCOztBQVJnQjtFQUNJLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBVXBCOztBQU5RO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFRWjs7QUFQWTtFQUNJLFdBQUE7RUFDQSw2QkFBQTtBQVNoQjs7QUFMSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBT1I7O0FBTlE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQVFaOztBQU5RO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBUVo7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7QUFPSjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQVFKOztBQU5BO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxtQ0FBQTtBQVNKOztBQVBBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFVSjs7QUFUSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFXUjs7QUFUSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFXUjs7QUFUSTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFXUjs7QUFWUTtFQUNJLGtCQUFBO0FBWVo7O0FBVEk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFXUjs7QUFWUTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBWVo7O0FBWFk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFhaEI7O0FBWFk7RUFDSSxnQkFBQTtBQWFoQjs7QUFUSTtFQUNJLFFBQUE7QUFXUjs7QUFSSTtFQUNJLDZCQUFBO0FBVVI7O0FBUEk7RUFDSSw2QkFBQTtBQVNSOztBQU5BO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQVNKOztBQVJJO0VBQ0kseUNBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQVVSOztBQVRRO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQVdaOztBQVZZO0VBQ0kscUNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtBQVloQjs7QUFYZ0I7RUFDSSx5QkFBQTtBQWFwQjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFVSjs7QUFUSTtFQUNJLGtCQUFBO0FBV1I7O0FBUkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBV0o7O0FBVEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFZSjs7QUFYSTtFQUNJLGlCQUFBO0FBYVI7O0FBWEk7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FBYVI7O0FBWEk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFhUjs7QUFYSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBYVI7O0FBVkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBYUo7O0FBWkk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBY1I7O0FBWkk7RUFDSSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQWNSOztBQWJRO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0FBZVo7O0FBYlE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBZVoiLCJmaWxlIjoiYm9hcmRVSS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcbiAgICB6LWluZGV4OiAzMDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uYXZ7XG4gICAgei1pbmRleDogMTAwO1xuICAgICYgLm5hdmJhci1uYW1le1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcGFkZGluZzogMC4xZW0gMC4yZW07XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgLy9mb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgd2lkdGg6IDEwZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcbiAgICB9XG4gICAgJiBhLCBidXR0b257XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7ICAgIFxuICAgICAgICBmb250LXNpemU6IDFlbTsgICAgXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBsaW5lYXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgJiBhOmhvdmVyLCBidXR0b246aG92ZXJ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYWluKTtcbiAgICB9XG4gICAgLmZpbGUtZm9ybXtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cbi5uYXYtc2Vjb25ke1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHBhZGRpbmc6IDAuMmVtIDA7XG4gICAgYm94LXNoYWRvdzogMHB4IC01cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICYgLm5hdi1saXN0e1xuICAgICAgICBnYXA6MC4zZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICAmIC52LWxpbmU6OmJlZm9yZXtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMC4zZW07XG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tdGV4dCk7XG4gICAgfVxuICAgICYgc2VsZWN0e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgJiAuaWNvbntcbiAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgbGluZWFyLCBjb2xvciAwLjFzIGxpbmVhcjtcbiAgICB9XG4gICAgJiAuaWNvbjpob3ZlcntcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgY29sb3I6IHZhcigtLW1haW4pO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59ICAgICAgXG4ubGluZXtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogODAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgb3BhY2l0eTogMC4xO1xufVxuLmNvbmZpcm0tZGlhbG9nLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQ1KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDsgICAgXG59XG4uY29uZmlybS1kaWFsb2d7XG4gICAgbWluLXdpZHRoOiAzNTBweDtcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xuICAgIHBhZGRpbmc6IDEuNWVtIDFlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7ICAgIFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAmLmV4cG9ydHtcbiAgICAgICAgbWluLXdpZHRoOiA1NTBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICB9XG4gICAgJiAudGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxuICAgICYgYnV0dG9ue1xuICAgICAgICBwYWRkaW5nOiAwLjNlbSAxLjM1ZW07XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgJi5idG4tY2FuY2Vse1xuICAgICAgICAgICAgYm9yZGVyOiAwLjE1ZW0gc29saWQgdmFyKC0tdGV4dCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuYnRuLWNvbmZpcm17XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiAwLjE1ZW0gc29saWQgdmFyKC0tbWFpbik7XG4gICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWFpbik7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLW1haW4pO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpkaXNhYmxlZHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4pO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5idG4tcHJldmlld3tcbiAgICAgICAgICAgIGJvcmRlcjogMC4xNWVtIHNvbGlkIHZhcigtLW1haW4pO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW1haW4pO1xuICAgICAgICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgwLjUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICYgbGFiZWx7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMC40ZW0gMDtcbiAgICAgICAgJiBpbnB1dHtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgZmxleC1iYXNpczogNTAlO1xuICAgICAgICB9XG4gICAgICAgICYgc3BhbntcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxufVxuLmJ1dHRvbnMtYm90dG9te1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBwYWRkaW5nOiAwLjNlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMWVtO1xufVxuLnByZXZpZXctY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDE0MDA7XG59XG4ucHJldmlld3tcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1iYXNpczogODAlO1xuICAgIG91dGxpbmU6IDAuMWVtIHNvbGlkICNjMGMwYzA7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbn1cbi5rZXlib2FyZC1zaG9ydGN1dHMtd2luZG93e1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNSU7XG4gICAgYm90dG9tOiAzMCU7XG4gICAgcmlnaHQ6IDI1JTtcbiAgICBsZWZ0OiAyNSU7XG4gICAgYm9yZGVyOiAwLjJlbSBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMnB4IHJnYmEoIzAwMCwgMC4yKTtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICYgLmtleWJvYXJkLXNob3J0Y3V0cy10aXRsZXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICB9XG4gICAgJiAuaGlnaGxpZ2h0e1xuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgICYgLmNsb3Nle1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDAuMjVlbTtcbiAgICAgICAgcmlnaHQ6IDAuMjVlbTtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiAxLjVlbTtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyBsaW5lYXI7XG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJiAuc2hvcnRjdXRzLWxpc3R7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICBnYXA6IDAuN2VtO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAmIGxpe1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgZ2FwOiAxLjVlbTtcbiAgICAgICAgICAgICYgcHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmIC5oaWdobGlnaHR7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgIH1cbiAgICBcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XG4gICAgfVxufVxuLnNhdmluZ3tcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAmIC5zYXZpbmctaW5uZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xuICAgICAgICBwYWRkaW5nOiAyZW0gMWVtO1xuICAgICAgICBnYXA6IDFlbTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmIC5uYW1le1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgICAgIGdhcDogMC4yZW07XG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4zZW0gMC41ZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICY6aG92ZXIsJjpmb2N1c3tcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uY2xvc2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICB0b3A6IDAuMmVtO1xuICAgIHJpZ2h0OiAwLjJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAmOmhvdmVye1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgfVxufVxuLmJhY2tkcm9wLWNlbnRyYWxpemVke1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTAwMDtcbn1cbi5lbWJlZC1pbm5lcntcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgIHBhZGRpbmc6IDEuMTVlbTtcbiAgICAmIGg1e1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gICAgJiBwe1xuICAgICAgICBtYXJnaW46IDAuNzVlbSAwLjJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIH1cbiAgICAmIHRleHRhcmVhe1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBib3JkZXI6IDAuMmVtIHNvbGlkIHZhcigtLWJhY2tncm91bmQpO1xuICAgICAgICBwYWRkaW5nOiAxZW0gMC41ZW07XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTsgICAgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XG4gICAgfVxuICAgICYgLmVycm9ye1xuICAgICAgICBtYXJnaW46IDEuNWVtIDA7XG4gICAgICAgIGNvbG9yOiAjZWMwMDAwO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG59XG4ubmF2LWJvbnVze1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGdhcDogMC43NWVtO1xuICAgID4gKntcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XG4gICAgICAgIHBhZGRpbmc6IDAuMmVtIDAuNTVlbTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4xcyBsaW5lYXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZmlsdGVyOiBzYXR1cmF0ZSgxLjM1KTtcbiAgICAgICAgfVxuICAgICAgICAuYmFkZ2V7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxMzQsIDE3KTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNzUlKSByb3RhdGVaKDE1ZGVnKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "YzkR":
/*!******************************************!*\
  !*** ./src/models/enums/DatabaseType.ts ***!
  \******************************************/
/*! exports provided: DatabaseType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseType", function() { return DatabaseType; });
var DatabaseType;
(function (DatabaseType) {
    DatabaseType[DatabaseType["SQL"] = 0] = "SQL";
    DatabaseType[DatabaseType["NoSQL"] = 1] = "NoSQL";
})(DatabaseType || (DatabaseType = {}));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_DelayedHoverDirective__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/DelayedHoverDirective */ "42aj");
/* harmony import */ var _shared_resizable_textarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/resizable-textarea */ "91po");
/* harmony import */ var _shared_vue_event_modifiers_plugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/vue-event-modifiers.plugin */ "CV3C");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./board/board.component */ "LcVa");
/* harmony import */ var _board_componentmenu_componentmenu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./board/componentmenu/componentmenu.component */ "yf1P");
/* harmony import */ var _board_components_api_api_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./board/components/api/api.component */ "N3Nn");
/* harmony import */ var _board_components_apigateway_apigateway_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./board/components/apigateway/apigateway.component */ "9kwT");
/* harmony import */ var _board_components_cache_cache_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./board/components/cache/cache.component */ "OF2t");
/* harmony import */ var _board_components_client_client_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./board/components/client/client.component */ "+MmB");
/* harmony import */ var _board_components_cloudstorage_cloudstorage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./board/components/cloudstorage/cloudstorage.component */ "pWwo");
/* harmony import */ var _board_components_connection_connection_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./board/components/connection/connection.component */ "OzDm");
/* harmony import */ var _board_components_database_database_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./board/components/database/database.component */ "K+oz");
/* harmony import */ var _board_components_loadbalancer_loadbalancer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./board/components/loadbalancer/loadbalancer.component */ "bjmQ");
/* harmony import */ var _board_components_messagequeue_messagequeue_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./board/components/messagequeue/messagequeue.component */ "xuq0");
/* harmony import */ var _board_components_port_port_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./board/components/port/port.component */ "HvJx");
/* harmony import */ var _board_components_pubsub_pubsub_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./board/components/pubsub/pubsub.component */ "W6y1");
/* harmony import */ var _board_components_Shared_title_title_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./board/components/Shared/title/title.component */ "OXCG");
/* harmony import */ var _board_components_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./board/components/textfield/textfield.component */ "/Mf1");
/* harmony import */ var _board_components_webserver_webserver_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./board/components/webserver/webserver.component */ "z8l2");
/* harmony import */ var _board_components_proxy_proxy_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./board/components/proxy/proxy.component */ "Zebe");
/* harmony import */ var _board_components_clientcluster_clientcluster_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./board/components/clientcluster/clientcluster.component */ "m5Z1");
/* harmony import */ var _board_components_cdn_cdn_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./board/components/cdn/cdn.component */ "9Ctj");
/* harmony import */ var _board_boardUI_boardUI_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./board/boardUI/boardUI.component */ "Y1pD");
/* harmony import */ var _board_optionsmenu_optionsmenu_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./board/optionsmenu/optionsmenu.component */ "PxqJ");
/* harmony import */ var _board_tutorials_tutorial_controls_tutorial_controls_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./board/tutorials/tutorial-controls/tutorial-controls.component */ "8NQF");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./create/create.component */ "Khja");
/* harmony import */ var _info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./info-tooltip/info-tooltip.component */ "q+md");
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/landing-page/landing-page.component */ "JD7n");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/pages.component */ "8D7W");
/* harmony import */ var _board_components_Shared_endpoint_select_endpoint_select_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./board/components/Shared/endpoint-select/endpoint-select.component */ "acqn");
/* harmony import */ var _board_components_Shared_slider_described_slider_described_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./board/components/Shared/slider-described/slider-described.component */ "lxjM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/core */ "fXoL");















































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"],
            useClass: _shared_vue_event_modifiers_plugin__WEBPACK_IMPORTED_MODULE_13__["VueEventModifiersPlugin"],
            multi: true
        },
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"],
            useClass: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HammerGestureConfig"],
        },
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_LOADER"],
            useValue: () => new Promise(() => { })
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_14__["ColorPickerModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HammerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
        _board_board_component__WEBPACK_IMPORTED_MODULE_17__["BoardComponent"],
        _board_boardUI_boardUI_component__WEBPACK_IMPORTED_MODULE_36__["BoardUIComponent"],
        _board_components_client_client_component__WEBPACK_IMPORTED_MODULE_22__["ClientComponent"],
        _board_components_connection_connection_component__WEBPACK_IMPORTED_MODULE_24__["ConnectionComponent"],
        _board_components_port_port_component__WEBPACK_IMPORTED_MODULE_28__["PortComponent"],
        _board_components_webserver_webserver_component__WEBPACK_IMPORTED_MODULE_32__["WebserverComponent"],
        _board_components_loadbalancer_loadbalancer_component__WEBPACK_IMPORTED_MODULE_26__["LoadbalancerComponent"],
        _board_componentmenu_componentmenu_component__WEBPACK_IMPORTED_MODULE_18__["ComponentmenuComponent"],
        _shared_DelayedHoverDirective__WEBPACK_IMPORTED_MODULE_11__["DelayedHoverDirective"],
        _board_optionsmenu_optionsmenu_component__WEBPACK_IMPORTED_MODULE_37__["OptionsmenuComponent"],
        _board_components_api_api_component__WEBPACK_IMPORTED_MODULE_19__["ApiComponent"],
        _board_components_apigateway_apigateway_component__WEBPACK_IMPORTED_MODULE_20__["ApiGatewayComponent"],
        _board_components_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_31__["TextfieldComponent"],
        _shared_resizable_textarea__WEBPACK_IMPORTED_MODULE_12__["ResizableTextAreaDirective"],
        _board_components_database_database_component__WEBPACK_IMPORTED_MODULE_25__["DatabaseComponent"],
        _board_components_cache_cache_component__WEBPACK_IMPORTED_MODULE_21__["CacheComponent"],
        _board_components_messagequeue_messagequeue_component__WEBPACK_IMPORTED_MODULE_27__["MessagequeueComponent"],
        _board_components_pubsub_pubsub_component__WEBPACK_IMPORTED_MODULE_29__["PubsubComponent"],
        _create_create_component__WEBPACK_IMPORTED_MODULE_39__["CreateComponent"],
        _pages_pages_component__WEBPACK_IMPORTED_MODULE_42__["PagesComponent"],
        _board_tutorials_tutorial_controls_tutorial_controls_component__WEBPACK_IMPORTED_MODULE_38__["TutorialControlsComponent"],
        _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_41__["LandingPageComponent"],
        _info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_40__["InfoTooltipComponent"],
        _board_components_Shared_title_title_component__WEBPACK_IMPORTED_MODULE_30__["TitleComponent"],
        _board_components_cloudstorage_cloudstorage_component__WEBPACK_IMPORTED_MODULE_23__["CloudStorageComponent"],
        _board_components_proxy_proxy_component__WEBPACK_IMPORTED_MODULE_33__["ProxyComponent"],
        _board_components_clientcluster_clientcluster_component__WEBPACK_IMPORTED_MODULE_34__["ClientclusterComponent"],
        _board_components_cdn_cdn_component__WEBPACK_IMPORTED_MODULE_35__["CDNComponent"],
        _board_components_Shared_endpoint_select_endpoint_select_component__WEBPACK_IMPORTED_MODULE_43__["EndpointSelectComponent"],
        _board_components_Shared_slider_described_slider_described_component__WEBPACK_IMPORTED_MODULE_44__["SliderDescribedComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_14__["ColorPickerModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HammerModule"]] }); })();


/***/ }),

/***/ "Zebe":
/*!***********************************************************!*\
  !*** ./src/app/board/components/proxy/proxy.component.ts ***!
  \***********************************************************/
/*! exports provided: ProxyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyComponent", function() { return ProxyComponent; });
/* harmony import */ var src_models_Proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/Proxy */ "i+Vz");
/* harmony import */ var _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/OperatorComponent */ "RW4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ProxyComponent extends _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__["OperatorComponent"] {
    constructor() {
        super(...arguments);
        this.LogicProxy = new src_models_Proxy__WEBPACK_IMPORTED_MODULE_0__["Proxy"]();
    }
    getLogicComponent() {
        return this.LogicProxy;
    }
    static getColor() {
        let c = new src_models_Proxy__WEBPACK_IMPORTED_MODULE_0__["Proxy"]();
        return c.color;
    }
}
ProxyComponent.ɵfac = function ProxyComponent_Factory(t) { return ɵProxyComponent_BaseFactory(t || ProxyComponent); };
ProxyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProxyComponent, selectors: [["app-proxy"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 4, consts: [["anchorRef", ""], ["conn", ""], [1, "img-container", 3, "mousedown", "touchstart", "click"], [1, "img", "bg-proxy"]], template: function ProxyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "template", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ProxyComponent_Template_div_mousedown_4_listener($event) { return ctx.handleMousedown($event); })("touchstart", function ProxyComponent_Template_div_touchstart_4_listener($event) { return ctx.handleMousedown($event); })("click", function ProxyComponent_Template_div_click_4_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx.LogicProxy.options.X, "px")("top", ctx.LogicProxy.options.Y, "px");
    } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb3h5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJwcm94eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */"] });
const ɵProxyComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ProxyComponent);


/***/ }),

/***/ "acqn":
/*!**************************************************************************************!*\
  !*** ./src/app/board/components/Shared/endpoint-select/endpoint-select.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EndpointSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointSelectComponent", function() { return EndpointSelectComponent; });
/* harmony import */ var src_models_Endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/Endpoint */ "CIzy");
/* harmony import */ var src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/enums/APIType */ "G1KI");
/* harmony import */ var src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/enums/gRPCMode */ "KpZ9");
/* harmony import */ var src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/enums/HTTPMethod */ "axtL");
/* harmony import */ var src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/enums/Protocol */ "qEx5");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../info-tooltip/info-tooltip.component */ "q+md");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");















function EndpointSelectComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("[", ctx_r0.Model.options[ctx_r0.Property].length, "]");
} }
function EndpointSelectComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EndpointSelectComponent_span_7_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.addEndpoint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EndpointSelectComponent_div_9_mat_select_7_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const method_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", method_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r13.formatMethod(ctx_r13.HTTPMethod[method_r14], ctx_r13.DatabaseEndpoints));
} }
function EndpointSelectComponent_div_9_mat_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function EndpointSelectComponent_div_9_mat_select_7_Template_mat_select_selectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r15.AfterChange(); })("closed", function EndpointSelectComponent_div_9_mat_select_7_Template_mat_select_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r17.handleEndpointMethodChange(endpoint_r5); })("ngModelChange", function EndpointSelectComponent_div_9_mat_select_7_Template_mat_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; return endpoint_r5.supportedMethods = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, EndpointSelectComponent_div_9_mat_select_7_mat_option_1_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r6.ModifiableMethods)("ngModel", endpoint_r5.supportedMethods);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r6.HTTPMethodKeys);
} }
function EndpointSelectComponent_div_9_mat_select_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function EndpointSelectComponent_div_9_mat_select_8_Template_mat_select_selectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r22.AfterChange(); })("closed", function EndpointSelectComponent_div_9_mat_select_8_Template_mat_select_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r24.handleEndpointMethodChange(endpoint_r5); })("ngModelChange", function EndpointSelectComponent_div_9_mat_select_8_Template_mat_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23); const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; return endpoint_r5.supportedMethods = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "GET");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "POST");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r7.ModifiableMethods)("ngModel", endpoint_r5.supportedMethods);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r7.HTTPMethod.GET);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r7.HTTPMethod.POST);
} }
function EndpointSelectComponent_div_9_mat_select_9_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function EndpointSelectComponent_div_9_mat_select_9_Template_mat_select_selectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r29.AfterChange(); })("closed", function EndpointSelectComponent_div_9_mat_select_9_Template_mat_select_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r31.handleEndpointMethodChange(endpoint_r5); })("ngModelChange", function EndpointSelectComponent_div_9_mat_select_9_Template_mat_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; return (endpoint_r5.supportedMethods[0] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "GET");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "POST");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r8.ModifiableMethods)("ngModel", endpoint_r5.supportedMethods[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r8.HTTPMethod.GET);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r8.HTTPMethod.POST);
} }
function EndpointSelectComponent_div_9_mat_select_10_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function EndpointSelectComponent_div_9_mat_select_10_Template_mat_select_selectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r36.AfterChange(); })("closed", function EndpointSelectComponent_div_9_mat_select_10_Template_mat_select_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r38.handleEndpointMethodChange(endpoint_r5); })("ngModelChange", function EndpointSelectComponent_div_9_mat_select_10_Template_mat_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; return (endpoint_r5.supportedMethods[0] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "GET");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", endpoint_r5.supportedMethods[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r9.HTTPMethod.GET);
} }
function EndpointSelectComponent_div_9_mat_form_field_11_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mode_r44 = ctx.$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", mode_r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r43.gRPCMode[mode_r44]);
} }
function EndpointSelectComponent_div_9_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function EndpointSelectComponent_div_9_mat_form_field_11_Template_mat_select_selectionChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r45.AfterChange(); })("ngModelChange", function EndpointSelectComponent_div_9_mat_form_field_11_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46); const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; return endpoint_r5.grpcMode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, EndpointSelectComponent_div_9_mat_form_field_11_mat_option_2_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", endpoint_r5.protocol == ctx_r10.Protocol.WebSockets)("ngModel", endpoint_r5.grpcMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r10.gRPCModeKeys);
} }
function EndpointSelectComponent_div_9_div_12_div_9_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const connendpoint_r56 = ctx.$implicit;
    const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ((endpoint_r5.grpcMode == ctx_r52.gRPCMode.Unary || endpoint_r5.grpcMode == ctx_r52.gRPCMode["Client Streaming"]) && (connendpoint_r56.protocol == ctx_r52.Protocol.WebSockets || connendpoint_r56.grpcMode == ctx_r52.gRPCMode["Server Streaming"] || connendpoint_r56.grpcMode == ctx_r52.gRPCMode["Bidirectional Streaming"]) || endpoint_r5.grpcMode == ctx_r52.gRPCMode["Server Streaming"] && connendpoint_r56.grpcMode == ctx_r52.gRPCMode["Client Streaming"]) && !(ctx_r52.Type == ctx_r52.APIType.WebSockets && connendpoint_r56.protocol == ctx_r52.Protocol.WebSockets))("value", connendpoint_r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](connendpoint_r56.url);
} }
function EndpointSelectComponent_div_9_div_12_div_9_mat_select_5_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Inherit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r58.EndpointActionHTTPMethod.Inherit);
} }
function EndpointSelectComponent_div_9_div_12_div_9_mat_select_5_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const method_r60 = ctx.$implicit;
    const action_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r59.EndpointActionHTTPMethod[ctx_r59.HTTPMethod[method_r60]]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r59.formatMethod(ctx_r59.HTTPMethod[method_r60 + ""], action_r51.endpoint.protocol == ctx_r59.Protocol.Database));
} }
function EndpointSelectComponent_div_9_div_12_div_9_mat_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function EndpointSelectComponent_div_9_div_12_div_9_mat_select_5_Template_mat_select_selectionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r62.AfterChange(); })("ngModelChange", function EndpointSelectComponent_div_9_div_12_div_9_mat_select_5_Template_mat_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63); const action_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; return action_r51.method = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, EndpointSelectComponent_div_9_div_12_div_9_mat_select_5_mat_option_1_Template, 2, 1, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, EndpointSelectComponent_div_9_div_12_div_9_mat_select_5_mat_option_2_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", action_r51.method);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", action_r51.endpoint.protocol != ctx_r53.Protocol.WebSockets && endpoint_r5.protocol != ctx_r53.Protocol.WebSockets);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", action_r51.endpoint.supportedMethods);
} }
function EndpointSelectComponent_div_9_div_12_div_9_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EndpointSelectComponent_div_9_div_12_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function EndpointSelectComponent_div_9_div_12_div_9_Template_mat_select_selectionChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70); const action_r51 = ctx.$implicit; const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r68.handleActionEndpointChange(endpoint_r5, action_r51); return ctx_r68.AfterChange(); })("ngModelChange", function EndpointSelectComponent_div_9_div_12_div_9_Template_mat_select_ngModelChange_2_listener($event) { const action_r51 = ctx.$implicit; return action_r51.endpoint = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, EndpointSelectComponent_div_9_div_12_div_9_mat_option_3_Template, 2, 3, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-form-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, EndpointSelectComponent_div_9_div_12_div_9_mat_select_5_Template, 3, 3, "mat-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, EndpointSelectComponent_div_9_div_12_div_9_ng_template_6_Template, 2, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EndpointSelectComponent_div_9_div_12_div_9_Template_span_click_8_listener() { const action_r51 = ctx.$implicit; return action_r51.asynchronous = !(action_r51.asynchronous || false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EndpointSelectComponent_div_9_div_12_div_9_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r70); const action_r51 = ctx.$implicit; const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r73.removeAction(endpoint_r5, action_r51); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r51 = ctx.$implicit;
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", action_r51.endpoint);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r50.ConnectableEndpoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", action_r51.endpoint != null)("ngIfElse", _r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("disabled", action_r51.endpoint == null || action_r51.endpoint.protocol === ctx_r50.Protocol.WebSockets || action_r51.endpoint.grpcMode !== ctx_r50.gRPCMode.Unary)("checked", action_r51.asynchronous === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("matTooltip", "Make action asynchronous");
} }
function EndpointSelectComponent_div_9_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Actions: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "info-tooltip", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EndpointSelectComponent_div_9_div_12_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r77); const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r75.addAction(endpoint_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, EndpointSelectComponent_div_9_div_12_div_9_Template, 12, 9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("Message", "List of actions of the endpoint. Change the target endpoint and method used.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", endpoint_r5.actions);
} }
function EndpointSelectComponent_div_9_span_13_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EndpointSelectComponent_div_9_span_13_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r81); const endpoint_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r79.removeEndpoint(endpoint_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function EndpointSelectComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function EndpointSelectComponent_div_9_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r83); const endpoint_r5 = ctx.$implicit; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r82.handleEndpointUrlChange(endpoint_r5); })("change", function EndpointSelectComponent_div_9_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r83); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r84.AfterChange(); })("ngModelChange", function EndpointSelectComponent_div_9_Template_input_ngModelChange_4_listener($event) { const endpoint_r5 = ctx.$implicit; return endpoint_r5.url = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, EndpointSelectComponent_div_9_mat_select_7_Template, 2, 3, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, EndpointSelectComponent_div_9_mat_select_8_Template, 5, 4, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, EndpointSelectComponent_div_9_mat_select_9_Template, 5, 4, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, EndpointSelectComponent_div_9_mat_select_10_Template, 3, 2, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, EndpointSelectComponent_div_9_mat_form_field_11_Template, 3, 3, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, EndpointSelectComponent_div_9_div_12_Template, 10, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, EndpointSelectComponent_div_9_span_13_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const endpoint_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", endpoint_r5.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.Type == ctx_r2.APIType.REST);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.Type == ctx_r2.APIType.GraphQL);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.Type == ctx_r2.APIType.RPC || ctx_r2.Type == ctx_r2.APIType.gRPC);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.Type == ctx_r2.APIType.WebSockets);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.Type == ctx_r2.APIType.gRPC);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.HasActions && (ctx_r2.HasStreamActions || endpoint_r5.grpcMode == ctx_r2.gRPCMode["Unary"] && endpoint_r5.protocol !== ctx_r2.Protocol.WebSockets));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.APIType.GraphQL && ctx_r2.Multiple);
} }
class EndpointSelectComponent {
    constructor() {
        this.Type = src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__["APIType"].REST;
        this.Multiple = true;
        this.HasActions = true;
        this.HasStreamActions = false;
        this.ModifiableMethods = true;
        this.ConnectableEndpoints = [];
        this.DatabaseEndpoints = false;
        this.Title = "Endpoints: ";
        this.ShowCounter = false;
        this.Property = "endpoints";
        this.HTTPMethod = src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"];
        this.HTTPMethodKeys = Object.values(src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"]).filter(k => !isNaN(Number(k)));
        this.EndpointActionHTTPMethod = src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["EndpointActionHTTPMethod"];
        this.EndpointActionHTTPMethodKeys = Object.values(src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["EndpointActionHTTPMethod"]).filter(k => !isNaN(Number(k)));
        this.Protocol = src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"];
        this.ProtocolKeys = Object.values(src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"]).filter(k => !isNaN(Number(k)));
        this.APIType = src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__["APIType"];
        this.APITypeKeys = Object.values(src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__["APIType"]).filter(k => !isNaN(Number(k)));
        this.gRPCMode = src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_2__["gRPCMode"];
        this.gRPCModeKeys = Object.values(src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_2__["gRPCMode"]).filter(k => !isNaN(Number(k)));
    }
    ngOnInit() {
    }
    formatMethod(method, isDatabase) {
        return Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_5__["getFormattedMethod"])(method, isDatabase);
    }
    handleActionEndpointChange(endpoint, action) {
        action.method = endpoint.protocol != src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].WebSockets && action.endpoint.protocol != src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].WebSockets ? src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["EndpointActionHTTPMethod"].Inherit : src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["EndpointActionHTTPMethod"][src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"][action.endpoint.supportedMethods[0]]];
    }
    handleEndpointMethodChange(endpoint) {
        if (endpoint.supportedMethods.length == 0)
            endpoint.supportedMethods = [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].GET];
    }
    handleEndpointUrlChange(endpoint) {
        if (endpoint.url == null || endpoint.url.replace(/\s/g, "") == "")
            endpoint.url = `/endpoint/v${Math.floor(10 * Math.random())}`;
    }
    addAction(endpoint) {
        endpoint.actions.push(new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_0__["EndpointAction"]());
        this.AfterChange();
    }
    removeAction(endpoint, action) {
        let idx = 0;
        for (let act of endpoint.actions) {
            if (act === action) {
                endpoint.actions.splice(idx, 1);
                this.AfterChange();
                return;
            }
            idx++;
        }
    }
    addEndpoint() {
        let type = this.Type;
        let endpoint;
        if (type == src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__["APIType"].REST) {
            endpoint = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_0__["Endpoint"]("/endpoint", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].GET, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].POST, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].PUT, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].DELETE]);
        }
        else if (type == src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__["APIType"].GraphQL) {
            endpoint = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_0__["Endpoint"]("/endpoint", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].GET, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].POST]);
        }
        else if (type == src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__["APIType"].RPC) {
            endpoint = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_0__["Endpoint"]("/endpoint", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].GET]);
        }
        else if (type == src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__["APIType"].gRPC) {
            endpoint = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_0__["Endpoint"]("/endpoint", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].GET]);
            endpoint.grpcMode = src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_2__["gRPCMode"].Unary;
        }
        else if (type == src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__["APIType"].WebSockets) {
            endpoint = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_0__["Endpoint"]("/endpoint", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].GET]);
            endpoint.protocol = src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].WebSockets;
        }
        this.Model.options[this.Property].push(endpoint);
        this.AfterChange();
    }
    removeEndpoint(endpoint) {
        let idx = 0;
        for (let ep of this.Model.options[this.Property]) {
            if (ep === endpoint) {
                this.Model.options[this.Property].splice(idx, 1);
                this.AfterChange();
                return;
            }
            idx++;
        }
    }
}
EndpointSelectComponent.ɵfac = function EndpointSelectComponent_Factory(t) { return new (t || EndpointSelectComponent)(); };
EndpointSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: EndpointSelectComponent, selectors: [["endpoint-select"]], inputs: { Model: "Model", Type: "Type", Multiple: "Multiple", HasActions: "HasActions", HasStreamActions: "HasStreamActions", ModifiableMethods: "ModifiableMethods", ConnectableEndpoints: "ConnectableEndpoints", DatabaseEndpoints: "DatabaseEndpoints", AfterChange: "AfterChange", Title: "Title", ShowCounter: "ShowCounter", Property: "Property" }, decls: 10, vars: 5, consts: [[1, "options-endpoints-container"], [1, "options-endpoints-top"], [1, "property-name"], [3, "Message"], [4, "ngIf"], ["class", "button-icon", 3, "click", 4, "ngIf"], [1, "options-endpoints"], ["class", "options-endpoint", 4, "ngFor", "ngForOf"], [1, "button-icon", 3, "click"], [1, "fas", "fa-plus"], [1, "options-endpoint"], ["type", "text", "spellcheck", "false", "placeholder", "url", 1, "endpoint-url", 3, "ngModel", "blur", "change", "ngModelChange"], [1, "options-endpoint-menu-top"], ["appearance", "fill", 1, "endpoint-method"], ["multiple", "", "required", "", 3, "disabled", "ngModel", "selectionChange", "closed", "ngModelChange", 4, "ngIf"], ["required", "", 3, "disabled", "ngModel", "selectionChange", "closed", "ngModelChange", 4, "ngIf"], ["disabled", "", 3, "ngModel", "selectionChange", "closed", "ngModelChange", 4, "ngIf"], ["class", "endpoint-grpcmode", "appearance", "fill", 4, "ngIf"], ["class", "options-endpoint-actions-container", 4, "ngIf"], ["class", "button-icon remove-endpoint", 3, "click", 4, "ngIf"], ["multiple", "", "required", "", 3, "disabled", "ngModel", "selectionChange", "closed", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["required", "", 3, "disabled", "ngModel", "selectionChange", "closed", "ngModelChange"], ["disabled", "", 3, "ngModel", "selectionChange", "closed", "ngModelChange"], ["appearance", "fill", 1, "endpoint-grpcmode"], ["required", "", 3, "disabled", "ngModel", "selectionChange", "ngModelChange"], [1, "options-endpoint-actions-container"], [1, "options-endpoint-action"], [1, "property-name", "action-endpoint"], [1, "action-method"], [1, "options-endpoint-actions"], ["class", "options-endpoint-action", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "action-endpoint"], [3, "ngModel", "selectionChange", "ngModelChange"], [3, "disabled", "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "action-method"], [3, "ngModel", "selectionChange", "ngModelChange", 4, "ngIf", "ngIfElse"], ["emptyMethod", ""], [1, "async-check", 3, "matTooltip", "click"], [1, "fas", "fa-minus"], [3, "disabled", "value"], [3, "value", 4, "ngIf"], ["disabled", ""], [1, "button-icon", "remove-endpoint", 3, "click"]], template: function EndpointSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "info-tooltip", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, EndpointSelectComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, EndpointSelectComponent_span_7_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, EndpointSelectComponent_div_9_Template, 14, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.Title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("Message", "List of available endpoints. Click the dropdown to show allowed methods and actions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.ShowCounter);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.Multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.Model.options[ctx.Property]);
    } }, directives: [_info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_7__["InfoTooltipComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"]], styles: [".options-endpoint-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: stretch;\n  height: 2em;\n}\n.options-endpoint-inputs[_ngcontent-%COMP%]   .endpoint-url[_ngcontent-%COMP%] {\n  height: 100%;\n  flex-grow: 1;\n  padding: 0;\n}\n.options-endpoint-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 0.1em;\n}\n.options-endpoint-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n}\n.options-endpoint-action[_ngcontent-%COMP%]   .action-endpoint[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.options-endpoint-action[_ngcontent-%COMP%]   .action-method[_ngcontent-%COMP%] {\n  flex-basis: 35%;\n  flex-shrink: 0;\n}\n.options-endpoint-action[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  flex-basis: 10%;\n  flex-shrink: 0;\n  align-self: center;\n}\n.options-endpoint-actions-container[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\n.options-endpoint-actions-container[_ngcontent-%COMP%]   .property-name[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VuZHBvaW50LXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFFUjtBQUNBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQUVKO0FBQUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUFHSjtBQUZJO0VBQ0ksWUFBQTtBQUlSO0FBRkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUlSO0FBRkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSVI7QUFEQTtFQUNJLGdCQUFBO0FBSUo7QUFISTtFQUNJLGdCQUFBO0FBS1IiLCJmaWxlIjoiZW5kcG9pbnQtc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbnMtZW5kcG9pbnQtaW5wdXRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGhlaWdodDogMmVtO1xuICAgICYgLmVuZHBvaW50LXVybHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxufVxuLm9wdGlvbnMtZW5kcG9pbnQtYWN0aW9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBnYXA6IDAuMWVtO1xufVxuLm9wdGlvbnMtZW5kcG9pbnQtYWN0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICYgLmFjdGlvbi1lbmRwb2ludHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbiAgICAmIC5hY3Rpb24tbWV0aG9ke1xuICAgICAgICBmbGV4LWJhc2lzOiAzNSU7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIH1cbiAgICAmIC5idXR0b24taWNvbntcbiAgICAgICAgZmxleC1iYXNpczogMTAlO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cbn1cbi5vcHRpb25zLWVuZHBvaW50LWFjdGlvbnMtY29udGFpbmVye1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgJiAucHJvcGVydHktbmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "axtL":
/*!****************************************!*\
  !*** ./src/models/enums/HTTPMethod.ts ***!
  \****************************************/
/*! exports provided: HTTPMethod, EndpointActionHTTPMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPMethod", function() { return HTTPMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointActionHTTPMethod", function() { return EndpointActionHTTPMethod; });
var HTTPMethod;
(function (HTTPMethod) {
    HTTPMethod[HTTPMethod["GET"] = 0] = "GET";
    HTTPMethod[HTTPMethod["POST"] = 1] = "POST";
    HTTPMethod[HTTPMethod["PUT"] = 2] = "PUT";
    HTTPMethod[HTTPMethod["DELETE"] = 3] = "DELETE";
    HTTPMethod[HTTPMethod["PATCH"] = 4] = "PATCH";
})(HTTPMethod || (HTTPMethod = {}));
var EndpointActionHTTPMethod;
(function (EndpointActionHTTPMethod) {
    EndpointActionHTTPMethod[EndpointActionHTTPMethod["Inherit"] = 0] = "Inherit";
    EndpointActionHTTPMethod[EndpointActionHTTPMethod["GET"] = 1] = "GET";
    EndpointActionHTTPMethod[EndpointActionHTTPMethod["POST"] = 2] = "POST";
    EndpointActionHTTPMethod[EndpointActionHTTPMethod["PUT"] = 3] = "PUT";
    EndpointActionHTTPMethod[EndpointActionHTTPMethod["DELETE"] = 4] = "DELETE";
    EndpointActionHTTPMethod[EndpointActionHTTPMethod["PATCH"] = 5] = "PATCH";
})(EndpointActionHTTPMethod || (EndpointActionHTTPMethod = {}));


/***/ }),

/***/ "bjmQ":
/*!*************************************************************************!*\
  !*** ./src/app/board/components/loadbalancer/loadbalancer.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoadbalancerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadbalancerComponent", function() { return LoadbalancerComponent; });
/* harmony import */ var src_models_enums_BalancingAlgorithm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/enums/BalancingAlgorithm */ "Bly8");
/* harmony import */ var src_models_enums_LoadBalancerType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/enums/LoadBalancerType */ "XDIl");
/* harmony import */ var src_models_LoadBalancer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/LoadBalancer */ "mF0C");
/* harmony import */ var _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/OperatorComponent */ "RW4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../info-tooltip/info-tooltip.component */ "q+md");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");











function LoadbalancerComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", type_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.LoadBalancerType[type_r5]);
} }
function LoadbalancerComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const algo_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", algo_r6 == ctx_r4.BalancingAlgorithm["URL Hash"] && ctx_r4.LogicLoadBalancer.options.type == ctx_r4.LoadBalancerType["Layer 4"])("value", algo_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.BalancingAlgorithm[algo_r6]);
} }
class LoadbalancerComponent extends _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_3__["OperatorComponent"] {
    constructor() {
        super(...arguments);
        this.LogicLoadBalancer = new src_models_LoadBalancer__WEBPACK_IMPORTED_MODULE_2__["LoadBalancer"]();
    }
    handleTypeChange() {
        if (this.LogicLoadBalancer.options.type == src_models_enums_LoadBalancerType__WEBPACK_IMPORTED_MODULE_1__["LoadBalancerType"]['Layer 4'] &&
            this.LogicLoadBalancer.options.algorithm == src_models_enums_BalancingAlgorithm__WEBPACK_IMPORTED_MODULE_0__["BalancingAlgorithm"]['URL Hash']) {
            this.LogicLoadBalancer.options.algorithm = src_models_enums_BalancingAlgorithm__WEBPACK_IMPORTED_MODULE_0__["BalancingAlgorithm"]['Round Robin'];
        }
    }
    getLogicComponent() {
        return this.LogicLoadBalancer;
    }
    static getColor() {
        let c = new src_models_LoadBalancer__WEBPACK_IMPORTED_MODULE_2__["LoadBalancer"]();
        return c.color;
    }
}
LoadbalancerComponent.ɵfac = function LoadbalancerComponent_Factory(t) { return ɵLoadbalancerComponent_BaseFactory(t || LoadbalancerComponent); };
LoadbalancerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoadbalancerComponent, selectors: [["loadbalancer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 26, vars: 10, consts: [["anchorRef", ""], ["conn", ""], [1, "img-container", 3, "mousedown", "touchstart", "click"], ["src", "./assets/loadbalancer.svg"], [2, "display", "none"], ["options", ""], [1, "options-container"], [1, "property-name"], [3, "Message"], ["appearance", "fill", 1, "action-endpoint"], [3, "ngModel", "selectionChange", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "disabled", "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "disabled", "value"]], template: function LoadbalancerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "template", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function LoadbalancerComponent_Template_div_mousedown_4_listener($event) { return ctx.handleMousedown($event); })("touchstart", function LoadbalancerComponent_Template_div_touchstart_4_listener($event) { return ctx.handleMousedown($event); })("click", function LoadbalancerComponent_Template_div_click_4_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Type: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "info-tooltip", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function LoadbalancerComponent_Template_mat_select_selectionChange_16_listener() { ctx.handleTypeChange(); return ctx.afterChange(); })("ngModelChange", function LoadbalancerComponent_Template_mat_select_ngModelChange_16_listener($event) { return ctx.LogicLoadBalancer.options.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, LoadbalancerComponent_mat_option_17_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Balancing Algorithm: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "info-tooltip", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function LoadbalancerComponent_Template_mat_select_selectionChange_24_listener() { return ctx.afterChange(); })("ngModelChange", function LoadbalancerComponent_Template_mat_select_ngModelChange_24_listener($event) { return ctx.LogicLoadBalancer.options.algorithm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, LoadbalancerComponent_mat_option_25_Template, 2, 3, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("left", ctx.LogicLoadBalancer.options.X, "px")("top", ctx.LogicLoadBalancer.options.Y, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Message", "Changes the type of the load balancer. This can affect available balancing algorithms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.LogicLoadBalancer.options.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.LoadBalancerTypeKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Message", "Changes the balancing algorithm of the load balancer. This changes the data routing behaviour.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.LogicLoadBalancer.options.algorithm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.BalancingAlgorithmKeys);
    } }, directives: [_info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_5__["InfoTooltipComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.options-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xvYWRiYWxhbmNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxRQUFBO0FBRUoiLCJmaWxlIjoibG9hZGJhbGFuY2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm9wdGlvbnMtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGdhcDogMWVtO1xufSJdfQ== */"] });
const ɵLoadbalancerComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](LoadbalancerComponent);


/***/ }),

/***/ "dxLX":
/*!**************************************!*\
  !*** ./src/models/LogicComponent.ts ***!
  \**************************************/
/*! exports provided: LogicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicComponent", function() { return LogicComponent; });
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _Shared_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shared/EventDispatcher */ "GLam");


class LogicComponent {
    constructor() {
        this.originID = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_0__["UUID"])();
        this.color = "#6059DF";
        this.fillColor = true;
        this.receiveDataDispatcher = new _Shared_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["EventDispatcher"]();
        this.showStatusCodeDispatcher = new _Shared_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["EventDispatcher"]();
        this.failedConnectDispatcher = new _Shared_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["EventDispatcher"]();
    }
    connectTo(operator, connectingWithOutput) {
        let otherPort = operator.getPort(!connectingWithOutput);
        if (!operator.canConnectTo(this.getPort(connectingWithOutput), !connectingWithOutput) || !this.canConnectTo(otherPort, connectingWithOutput))
            return null;
        return this.getPort(connectingWithOutput).connectTo(otherPort);
    }
    canConnectTo(port, connectingWithOutput) {
        // Any component must connect with either IN to OUT or OUT to IN
        if (connectingWithOutput) {
            let outputPort = this["outputPort"];
            if (outputPort != null) {
                if (!port.isOutput)
                    return true;
            }
        }
        else {
            let inputPort = this["inputPort"];
            if (inputPort != null) {
                if (port.isOutput)
                    return true;
            }
        }
        this.fireFailedConnect({ message: "You can only connect input to output." });
        return false;
    }
    getPort(outputPort = false) {
        if (outputPort)
            return this["outputPort"];
        return this["inputPort"];
    }
    destroy() {
        if (this["outputPort"])
            this["outputPort"].removeConnections();
        if (this["inputPort"])
            this["inputPort"].removeConnections();
    }
    onConnectionUpdate(wasOutput = false) { }
    onReceiveData(handler) {
        this.receiveDataDispatcher.register(handler);
    }
    fireReceiveData(event) {
        this.receiveDataDispatcher.fire(event);
    }
    onShowStatusCode(handler) {
        this.showStatusCodeDispatcher.register(handler);
    }
    fireShowStatusCode(event) {
        this.showStatusCodeDispatcher.fire(event);
    }
    onFailedConnect(handler) {
        this.failedConnectDispatcher.register(handler);
    }
    fireFailedConnect(event) {
        this.failedConnectDispatcher.fire(event);
    }
}


/***/ }),

/***/ "epgU":
/*!************************************!*\
  !*** ./src/app/placing.service.ts ***!
  \************************************/
/*! exports provided: PlacingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacingService", function() { return PlacingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _board_components_connection_connection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board/components/connection/connection.component */ "OzDm");



class CopiedItem {
}
class PlacingService {
    constructor(resolver) {
        this.resolver = resolver;
        this.componentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showComponentContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pushComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isPlacing = false;
        this.isConnecting = false;
        this.canMoveConnection = true;
        this.isCreating = false;
        this.boardWidth = 2000;
        this.boardHeight = 1000;
        this.canDrag = () => {
            return !this.isPlacing && !this.isConnecting;
        };
        this.boardScale = 1;
        this.copiedItems = [];
    }
    startCreating(creatingItem, options) {
        this.isCreating = true;
        this.creatingItem = creatingItem;
        this.creatingItemOptions = options;
    }
    stopCreating() {
        this.isCreating = false;
        this.creatingItem = null;
        this.creatingItemOptions = null;
    }
    startPlacing() {
        this.isPlacing = true;
    }
    stopPlacing() {
        this.isPlacing = false;
    }
    startConnecting(portComponent) {
        let board = document.getElementById("board");
        board.classList.remove("infocus");
        this.isConnecting = true;
        this.connectingPort = portComponent;
    }
    stopConnecting() {
        let board = document.getElementById("board");
        board.classList.add("infocus");
        board.onmousemove = null;
        board.ontouchmove = null;
        this.isConnecting = false;
        this.connectingPort = null;
    }
    showSnack(message) {
        this.snackBar.open(message, "×", {
            duration: message.length * 115,
            horizontalPosition: "right",
        });
    }
    copyItems(items) {
        if (items.length == 0)
            return;
        this.copiedItems = items;
    }
    pasteItem(x = -1, y = -1) {
        let components = [];
        let connectionsList = [];
        for (let item of this.copiedItems) {
            connectionsList = connectionsList.concat(item.outputConnectionsList);
        }
        let minX = Number.MAX_VALUE;
        let minY = Number.MAX_VALUE;
        let maxX = -1;
        let maxY = -1;
        this.copiedItems.forEach(item => {
            minX = Math.min(item.options.X, minX);
            minY = Math.min(item.options.Y, minY);
            maxX = Math.max(item.options.X + 80, maxX);
            maxY = Math.max(item.options.Y + 80, maxY);
        });
        let width = maxX - minX;
        let height = maxY - minY;
        let pasteOriginX = Math.min(x < 0 ? maxX + 40 : x + width, this.boardWidth);
        let pasteOriginY = Math.min(y < 0 ? maxY + 40 : y + height, this.boardHeight);
        for (let item of this.copiedItems) {
            let options = item.options;
            let pasteX = pasteOriginX - width + (options.X - minX);
            let pasteY = pasteOriginY - height + (options.Y - minY);
            let component = this.createComponent(item.component, pasteX, pasteY, options);
            connectionsList = connectionsList.map(conn => {
                if (conn.from === item.logicComponent.originID) {
                    return {
                        from: component.getLogicComponent().originID,
                        to: conn.to,
                        lineBreaks: conn.lineBreaks,
                        title: conn.title
                    };
                }
                else if (conn.to === item.logicComponent.originID) {
                    return {
                        from: conn.from,
                        to: component.getLogicComponent().originID,
                        lineBreaks: conn.lineBreaks,
                        title: conn.title
                    };
                }
                return conn;
            });
            components.push(component);
        }
        for (let connection of connectionsList) {
            let comp1 = components.find(comp => comp.getLogicComponent().originID == connection.from);
            let comp2 = components.find(comp => comp.getLogicComponent().originID == connection.to);
            if (comp1 && comp2) {
                let comp1Initiated = false;
                let comp2Initiated = false;
                comp1.onViewInit.push(() => {
                    comp1Initiated = true;
                    if (comp2Initiated) {
                        this.connectPorts(comp1.getPortComponent(true), comp2.getPortComponent(false), false, connection.lineBreaks.map(br => { return { x: pasteOriginX - width + (br.x - minX), y: pasteOriginY - height + (br.y - minY) }; }), connection.title);
                    }
                });
                comp2.onViewInit.push(() => {
                    comp2Initiated = true;
                    if (comp1Initiated) {
                        this.connectPorts(comp1.getPortComponent(true), comp2.getPortComponent(false), false, connection.lineBreaks.map(br => { return { x: pasteOriginX - width + (br.x - minX), y: pasteOriginY - height + (br.y - minY) }; }), connection.title);
                    }
                });
            }
        }
        return components;
    }
    connectPorts(portComponent1, portComponent2, isReadOnly = false, lineBreaks = [], title = "") {
        let factory = this.resolver.resolveComponentFactory(_board_components_connection_connection_component__WEBPACK_IMPORTED_MODULE_1__["ConnectionComponent"]);
        let c = this.connectionRef.createComponent(factory);
        let logicConn = portComponent1.LogicPort.parent.connectTo(portComponent2.LogicPort.parent, portComponent1.IsOutput);
        if (logicConn == null) {
            c.destroy();
            return false;
        }
        logicConn.lineBreaks = lineBreaks;
        logicConn.title = title;
        c.instance.LogicConnection = logicConn;
        c.instance.isReadOnly = isReadOnly;
        c.instance.destroyComponent = () => {
            c.destroy();
        };
        c.instance.portComponent1 = portComponent1;
        c.instance.portComponent2 = portComponent2;
        return true;
    }
    createComponent(component, left = 100, top = 100, options, isReadOnly = false) {
        if (component == null)
            return;
        let factory = this.resolver.resolveComponentFactory(component);
        let c = this.connectionRef.createComponent(factory);
        c.instance.isReadOnly = isReadOnly;
        let comp = c.instance.getLogicComponent();
        c.instance.destroyComponent = () => {
            c.destroy();
        };
        if (options != null) {
            for (let key of Object.keys(options)) {
                comp.options[key] = options[key];
            }
        }
        c.instance.hasChanged.subscribe(() => {
            this.componentChanged.emit();
        });
        c.instance.showContextMenu.subscribe((e) => {
            this.showComponentContextMenu.emit({
                x: c.instance.getLogicComponent().options.X + e.offsetX,
                y: c.instance.getLogicComponent().options.Y + e.offsetY,
            });
        });
        comp.options.X = left;
        comp.options.Y = top;
        return c.instance;
    }
}
PlacingService.ɵfac = function PlacingService_Factory(t) { return new (t || PlacingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
PlacingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlacingService, factory: PlacingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hgry":
/*!****************************************!*\
  !*** ./src/shared/ExtensionMethods.ts ***!
  \****************************************/
/*! exports provided: UUID, arrayEquals, sleep, getFormattedMethod, download, downloadPng, downloadSvg, clone, createRoundedPath, createRoundedCanvasPath, getRateFromOutputRate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UUID", function() { return UUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayEquals", function() { return arrayEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormattedMethod", function() { return getFormattedMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadPng", function() { return downloadPng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadSvg", function() { return downloadSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoundedPath", function() { return createRoundedPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoundedCanvasPath", function() { return createRoundedCanvasPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRateFromOutputRate", function() { return getRateFromOutputRate; });
function UUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
function arrayEquals(a1, a2) {
    for (let a of a1) {
        if (a2.indexOf(a) == -1)
            return false;
    }
    for (let a of a2) {
        if (a1.indexOf(a) == -1)
            return false;
    }
    return true;
}
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
let formattedDbMethod = {
    "Inherit": "Inherit",
    "GET": "SELECT",
    "POST": "INSERT",
    "PUT": "UPDATE",
    "PATCH": "UPDATE",
    "DELETE": "DELETE"
};
function getFormattedMethod(method, isDatabase) {
    return isDatabase ? formattedDbMethod[method.toString()] : method.toString();
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
function downloadPng(filename, image) {
    var element = document.createElement('a');
    element.setAttribute('href', image);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
function downloadSvg(filename, svg) {
    var serializer = new XMLSerializer();
    var source = serializer.serializeToString(svg);
    //add name spaces.
    if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
        source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
        source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }
    //add xml declaration
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
    //convert svg source to URI data scheme.
    var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
    var element = document.createElement('a');
    element.setAttribute('href', url);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
function clone(object) {
    var cloneObj = new object.constructor;
    for (var attribut in object) {
        if (typeof object[attribut] === "object" && object[attribut] != null)
            cloneObj[attribut] = clone(object[attribut]);
        else
            cloneObj[attribut] = object[attribut];
    }
    return cloneObj;
}
function createRoundedPath(coords, radius, close) {
    let path = "";
    const length = coords.length + (close ? 1 : -1);
    for (let i = 0; i < length; i++) {
        const a = coords[i % coords.length];
        const b = coords[(i + 1) % coords.length];
        const t = Math.min(radius / Math.hypot(b.x - a.x, b.y - a.y), 0.5);
        if (i > 0)
            path += `Q${a.x},${a.y} ${a.x * (1 - t) + b.x * t},${a.y * (1 - t) + b.y * t}`;
        if (!close && i == 0)
            path += `M${a.x},${a.y}`;
        else if (i == 0)
            path += `M${a.x * (1 - t) + b.x * t},${a.y * (1 - t) + b.y * t}`;
        if (!close && i == length - 1)
            path += `L${b.x},${b.y}`;
        else if (i < length - 1)
            path += `L${a.x * t + b.x * (1 - t)},${a.y * t + b.y * (1 - t)}`;
    }
    if (close)
        path += "Z";
    return path;
}
function createRoundedCanvasPath(ctx, coords, radius) {
    const length = coords.length - 1;
    ctx.beginPath();
    for (let i = 0; i < length; i++) {
        const a = coords[i % coords.length];
        const b = coords[(i + 1) % coords.length];
        const t = Math.min(radius / Math.hypot(b.x - a.x, b.y - a.y), 0.5);
        if (i > 0) {
            ctx.quadraticCurveTo(a.x, a.y, a.x * (1 - t) + b.x * t, a.y * (1 - t) + b.y * t);
        }
        if (i == 0) {
            ctx.moveTo(a.x, a.y);
        }
        if (i == length - 1) {
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
        }
    }
    ctx.closePath();
}
(function () {
    /* Usefull function */
    function dist2D(x1, y1, x2, y2) {
        var dx = x2 - x1;
        var dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }
    ;
    /* Add new properties on CanvasRenderingContext2D */
    CanvasRenderingContext2D.prototype.textOverflow = "";
    CanvasRenderingContext2D.prototype.textJustify = false;
    CanvasRenderingContext2D.prototype.textStrokeMin = 0;
    var state = [];
    var save = CanvasRenderingContext2D.prototype.save;
    CanvasRenderingContext2D.prototype.save = function () {
        state.push({ textOverflow: this.textOverflow,
            textJustify: this.textJustify,
            textStrokeMin: this.textStrokeMin,
        });
        save.call(this);
    };
    var restore = CanvasRenderingContext2D.prototype.restore;
    CanvasRenderingContext2D.prototype.restore = function () {
        restore.call(this);
        var s = state.pop();
        this.textOverflow = s.textOverflow;
        this.textJustify = s.textJustify;
        this.textStrokeMin = s.textStrokeMin;
    };
    /* textPath function */
    CanvasRenderingContext2D.prototype.textPath = function (text, path) {
        // (return x, y and the angle on the path)
        var di, dpos = 0;
        var pos = 2;
        function pointAt(dl) {
            if (!di || dpos + di < dl) {
                for (; pos < path.length;) {
                    di = dist2D(path[pos - 2], path[pos - 1], path[pos], path[pos + 1]);
                    if (dpos + di > dl)
                        break;
                    pos += 2;
                    if (pos >= path.length)
                        break;
                    dpos += di;
                }
            }
            var x, y, dt = dl - dpos;
            if (pos >= path.length) {
                pos = path.length - 2;
            }
            if (!dt) {
                x = path[pos - 2];
                y = path[pos - 1];
            }
            else {
                x = path[pos - 2] + (path[pos] - path[pos - 2]) * dt / di;
                y = path[pos - 1] + (path[pos + 1] - path[pos - 1]) * dt / di;
            }
            return [x, y, Math.atan2(path[pos + 1] - path[pos - 1], path[pos] - path[pos - 2])];
        }
        var letterPadding = this.measureText(" ").width * 0.25;
        // Calculate length
        var d = 0;
        for (var i = 2; i < path.length; i += 2) {
            d += dist2D(path[i - 2], path[i - 1], path[i], path[i + 1]);
        }
        if (d < this.minWidth)
            return;
        var nbspace = text.split(" ").length - 1;
        // Remove char for overflow
        if (this.textOverflow != "visible") {
            if (d < this.measureText(text).width + (text.length - 1 + nbspace) * letterPadding) {
                var overflow = (this.textOverflow == "ellipsis") ? '\u2026' : this.textOverflow || "";
                var dt = overflow.length - 1;
                do {
                    if (text[text.length - 1] === " ")
                        nbspace--;
                    text = text.slice(0, -1);
                } while (text && d < this.measureText(text + overflow).width + (text.length + dt + nbspace) * letterPadding);
                text += overflow;
            }
        }
        // Calculate start point
        var start = 0;
        switch (this.textJustify || this.textAlign) {
            case true: // justify
            case "center":
            case "end":
            case "right":
                { // Justify
                    if (this.textJustify) {
                        start = 0;
                        letterPadding = (d - this.measureText(text).width) / (text.length - 1 + nbspace);
                    }
                    // Text align
                    else {
                        start = d - this.measureText(text).width - (text.length + nbspace) * letterPadding;
                        if (this.textAlign == "center")
                            start /= 2;
                    }
                    break;
                }
            // left
            default: break;
        }
        // Do rendering
        for (var t = 0; t < text.length; t++) {
            var letter = text[t];
            var wl = this.measureText(letter).width;
            var p = pointAt(start + wl / 2);
            this.save();
            this.textAlign = "center";
            this.translate(p[0], p[1]);
            this.rotate(p[2]);
            if (this.lineWidth > 0.1)
                this.strokeText(letter, 0, 0);
            this.fillText(letter, 0, 0);
            this.restore();
            start += wl + letterPadding * (letter == " " ? 2 : 1);
        }
    };
})();
function getRateFromOutputRate(outputRate) {
    let minRate = 0.75;
    let maxRate = 2.5;
    let maxOutputRate = 10;
    let diff = maxRate - minRate;
    return minRate + (outputRate / maxOutputRate) * diff;
}


/***/ }),

/***/ "i+Vz":
/*!*****************************!*\
  !*** ./src/models/Proxy.ts ***!
  \*****************************/
/*! exports provided: Proxy, ProxyOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proxy", function() { return Proxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyOptions", function() { return ProxyOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _LogicComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogicComponent */ "dxLX");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Options */ "/XK+");
/* harmony import */ var _Port__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Port */ "WjXT");




class Proxy extends _LogicComponent__WEBPACK_IMPORTED_MODULE_1__["LogicComponent"] {
    constructor() {
        super();
        this.connectionTable = {};
        this.streamConnectionTable = {};
        this.fillColor = false;
        this.color = "#283c86";
        this.inputPort = new _Port__WEBPACK_IMPORTED_MODULE_3__["Port"](this, false, true);
        this.outputPort = new _Port__WEBPACK_IMPORTED_MODULE_3__["Port"](this, true, true);
        this.options = new ProxyOptions();
        this.options.title = "Proxy";
    }
    receiveData(data, fromOutput) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (fromOutput) {
                let targetConnection = this.connectionTable[data.responseId];
                if (targetConnection == null)
                    throw new Error("Connection doesn't exist (response to unknown request)");
                if (data.header.stream != true) {
                    this.connectionTable[data.responseId] = null; // reset request id
                    this.streamConnectionTable[data.responseId] = null;
                }
                this.fireReceiveData(data);
                let result = yield this.inputPort.sendData(data, targetConnection);
                if (!result && data.header.stream) {
                    data.header.stream = false;
                    data.requestId = data.responseId;
                    data.responseId = null;
                    let res = this.outputPort.sendData(data, data.origin);
                    if (res) {
                        this.connectionTable[data.responseId] = null;
                        this.streamConnectionTable[data.responseId] = null;
                    }
                }
            }
            else {
                if (data.requestId == null)
                    throw new Error("requestId can not be null.");
                this.fireReceiveData(data);
                if (this.streamConnectionTable[data.requestId] != null) {
                    data.origin = this.streamConnectionTable[data.requestId];
                    data.originID = this.originID;
                    yield this.outputPort.sendData(data, this.streamConnectionTable[data.requestId]);
                    return;
                }
                this.connectionTable[data.requestId] = data.origin;
                // Find connection that has given endpoint
                let targetEndpoint = null;
                let targetConnection = null;
                for (let connection of this.outputPort.connections) {
                    targetEndpoint = connection.getOtherPort(this.outputPort).parent
                        .getAvailableEndpoints().find(ep => ep.url === data.header.endpoint.endpoint.url);
                    if (targetEndpoint) {
                        targetConnection = connection;
                        break;
                    }
                }
                if (targetEndpoint == null) {
                    this.fireShowStatusCode(404);
                    return;
                }
                data.origin = targetConnection;
                data.originID = this.originID;
                this.streamConnectionTable[data.requestId] = data.origin;
                yield this.outputPort.sendData(data, data.origin);
            }
        });
    }
    /**
     *
     * Proxy can't send data on its own
     */
    sendData(request) { }
    getAvailableEndpoints() {
        let connectableEndpoints = [];
        for (let connection of this.outputPort.connections) {
            connection.getOtherPort(this.outputPort).parent.getAvailableEndpoints().forEach(endpoint => {
                let duplicate = (connectableEndpoints.find(ep => ep.url === endpoint.url) != null);
                if (!duplicate)
                    connectableEndpoints.push(endpoint);
            });
        }
        return connectableEndpoints;
    }
}
class ProxyOptions extends _Options__WEBPACK_IMPORTED_MODULE_2__["Options"] {
}


/***/ }),

/***/ "iVJE":
/*!***************************!*\
  !*** ./src/models/API.ts ***!
  \***************************/
/*! exports provided: API, APIOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIOptions", function() { return APIOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _EndpointOperator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndpointOperator */ "7KcZ");
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Endpoint */ "CIzy");
/* harmony import */ var _enums_APIType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums/APIType */ "G1KI");
/* harmony import */ var _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enums/gRPCMode */ "KpZ9");
/* harmony import */ var _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums/HTTPMethod */ "axtL");
/* harmony import */ var _enums_Protocol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums/Protocol */ "qEx5");
/* harmony import */ var _Port__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Port */ "WjXT");
/* harmony import */ var _RequestData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RequestData */ "LEJs");










class API extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_2__["EndpointOperator"] {
    constructor() {
        super();
        this.connectionTable = {};
        this.color = "#4CA1AF";
        this.inputPort = new _Port__WEBPACK_IMPORTED_MODULE_8__["Port"](this, false, true);
        this.outputPort = new _Port__WEBPACK_IMPORTED_MODULE_8__["Port"](this, true, true);
        this.options = new APIOptions();
        this.options.title = "API";
        let initialEndpoint = new _Endpoint__WEBPACK_IMPORTED_MODULE_3__["Endpoint"]("api/posts", [_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].GET, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].POST, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].PUT, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"].DELETE,]);
        initialEndpoint.protocol = _enums_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].HTTP;
        this.options.endpoints = [
            initialEndpoint
        ];
    }
    receiveData(data, fromOutput) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (fromOutput) {
                // API received data from action 
                let targetConnection = this.connectionTable[data.responseId];
                this.fireReceiveData(data);
                if (targetConnection == null)
                    return;
                this.connectionTable[data.responseId] = null; // reset request id
            }
            else {
                // Null check
                if (data.requestId == "" || data.requestId == null)
                    throw new Error("Request ID can not be null");
                if (data.header.endpoint == null)
                    throw new Error("Endpoint can not be null");
                let targetEndpoint = this.getTargetEndpoint(data);
                if (targetEndpoint == null)
                    return;
                this.fireReceiveData(data);
                if (this.connectionTable[data.requestId] != null) { // Check if the api is already streaming to this connection
                    // Client sent data to stream
                    if (data.header.stream == false && targetEndpoint.grpcMode != _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_5__["gRPCMode"].Unary || targetEndpoint.protocol == _enums_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].WebSockets) { // Client wants to end stream
                        this.connectionTable[data.requestId] = null;
                        return;
                    }
                }
                else {
                    this.connectionTable[data.requestId] = data.origin; // Save connection to request package
                    if (data.header.stream) {
                        if (targetEndpoint.grpcMode != _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_5__["gRPCMode"].Unary || targetEndpoint.protocol == _enums_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].WebSockets) {
                            // Client wants to start stream
                            /*
                            This streaming process feels kinda clunky, it will be commented for now
                            this.stream(this.getResponse(data), targetEndpoint);
                            */
                            return;
                        }
                    }
                }
                // Send data to every action
                for (let action of targetEndpoint.actions) {
                    // Get connection to given action endpoint
                    let targetConnection;
                    for (let connection of this.outputPort.connections) {
                        let endpoints = connection.getOtherPort(this.outputPort).parent.getAvailableEndpoints();
                        if (action.endpoint != null && endpoints.find(endpoint => endpoint.url == action.endpoint.url && Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["arrayEquals"])(endpoint.supportedMethods, action.endpoint.supportedMethods)) != null) {
                            targetConnection = connection;
                            break;
                        }
                    }
                    if (targetConnection == null)
                        continue;
                    // Create new data package
                    let request = new _RequestData__WEBPACK_IMPORTED_MODULE_9__["RequestData"]();
                    let endpointRef = new _Endpoint__WEBPACK_IMPORTED_MODULE_3__["EndpointRef"]();
                    endpointRef.endpoint = action.endpoint;
                    endpointRef.method = _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["EndpointActionHTTPMethod"][action.method] == "Inherit" ? data.header.endpoint.method : _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["HTTPMethod"][_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_6__["EndpointActionHTTPMethod"][action.method]];
                    request.header = new _RequestData__WEBPACK_IMPORTED_MODULE_9__["RequestDataHeader"](endpointRef, action.endpoint.protocol);
                    request.origin = targetConnection;
                    request.originID = this.originID;
                    request.requestId = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["UUID"])();
                    if (action.asynchronous) {
                        this.outputPort.sendData(request, targetConnection);
                    }
                    else {
                        yield this.outputPort.sendData(request, targetConnection);
                        this.connectionTable[request.requestId] = request.origin;
                    }
                }
                // Send response back to client
                if (data.sendResponse)
                    yield this.sendData(this.getResponse(data));
            }
        });
    }
    sendData(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let targetConnection = this.connectionTable[response.responseId] || response.origin;
            if (targetConnection == null)
                throw new Error("target connection is null");
            if (response.header.stream != true) // reset request id
                this.connectionTable[response.responseId] = null;
            let res = yield this.inputPort.sendData(response, targetConnection);
            if (!res && response.header.stream) // End the stream if sending data didn't success
                this.connectionTable[response.responseId] = null;
        });
    }
    stream(data, streamingEndpoint) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_1__["sleep"])(700);
            if (this.connectionTable[data.responseId] == null || (streamingEndpoint.grpcMode != _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_5__["gRPCMode"]["Server Streaming"] &&
                streamingEndpoint.grpcMode != _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_5__["gRPCMode"]["Bidirectional Streaming"] &&
                streamingEndpoint.protocol != _enums_Protocol__WEBPACK_IMPORTED_MODULE_7__["Protocol"].WebSockets) ||
                this.options.endpoints.indexOf(streamingEndpoint) == -1)
                return;
            yield this.sendData(data);
            yield this.stream(data, streamingEndpoint);
        });
    }
}
class APIOptions extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_2__["EndpointOptions"] {
    constructor() {
        super(...arguments);
        this.type = _enums_APIType__WEBPACK_IMPORTED_MODULE_4__["APIType"].REST;
    }
}


/***/ }),

/***/ "jzTO":
/*!*****************************!*\
  !*** ./src/models/Cache.ts ***!
  \*****************************/
/*! exports provided: Cache, CacheOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheOptions", function() { return CacheOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _RequestData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestData */ "LEJs");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Options */ "/XK+");
/* harmony import */ var _Port__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Port */ "WjXT");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enums/HTTPMethod */ "axtL");
/* harmony import */ var _enums_HTTPStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums/HTTPStatus */ "WIHy");
/* harmony import */ var _enums_ReplacementPolicy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums/ReplacementPolicy */ "Cf/E");
/* harmony import */ var _enums_WritePolicy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./enums/WritePolicy */ "XDID");
/* harmony import */ var _LogicComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LogicComponent */ "dxLX");
/* harmony import */ var _Database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Database */ "FtUi");











class Cache extends _LogicComponent__WEBPACK_IMPORTED_MODULE_9__["LogicComponent"] {
    constructor() {
        super();
        this.connectionTable = {};
        this.color = "#b21f1f";
        this.inputPort = new _Port__WEBPACK_IMPORTED_MODULE_3__["Port"](this, false, true);
        this.outputPort = new _Port__WEBPACK_IMPORTED_MODULE_3__["Port"](this, true, false);
        this.options = new CacheOptions();
        this.options.title = "Cache";
    }
    receiveData(request, fromOutput = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (fromOutput) {
                let targetConnection = this.connectionTable[request.responseId];
                if (targetConnection == null)
                    return;
                yield this.sendData(request);
            }
            else {
                this.fireReceiveData(request);
                if (request.header.endpoint == null)
                    return;
                this.connectionTable[request.requestId] = request.origin;
                if (request.header.endpoint.method == _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_5__["HTTPMethod"].GET && request.sendResponse) { // Client wants to write
                    let cacheHit = Math.random() > 0.43 ? true : false; // Random chance of cache hit
                    if (cacheHit) {
                        let response = new _RequestData__WEBPACK_IMPORTED_MODULE_1__["RequestData"]();
                        response.responseId = request.requestId;
                        response.requestId = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_4__["UUID"])();
                        response.origin = request.origin;
                        response.originID = this.originID;
                        response.header = new _RequestData__WEBPACK_IMPORTED_MODULE_1__["RequestDataHeader"](request.header.endpoint, request.header.protocol);
                        this.fireShowStatusCode(_enums_HTTPStatus__WEBPACK_IMPORTED_MODULE_6__["HTTPStatus"]["Cache Hit"]);
                        yield this.sendData(response);
                        return;
                    }
                    this.fireShowStatusCode(_enums_HTTPStatus__WEBPACK_IMPORTED_MODULE_6__["HTTPStatus"]["Cache Miss"]);
                }
                if (this.outputPort.connections.length == 0)
                    return;
                switch (this.options.writePolicy) {
                    case _enums_WritePolicy__WEBPACK_IMPORTED_MODULE_8__["WritePolicy"]["Write-Through"]:
                        yield this.writeThrough(request);
                        break;
                    case _enums_WritePolicy__WEBPACK_IMPORTED_MODULE_8__["WritePolicy"]["Write-Back (Behind)"]:
                        yield this.writeBack(request);
                        break;
                    default:
                        yield this.writeThrough(request);
                        break;
                }
            }
        });
    }
    writeThrough(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // write to cache, then database, if both succeeded, return success
            data.origin = this.outputPort.connections[0];
            data.originID = this.originID;
            // Write to cache
            // Send to DB
            yield this.outputPort.sendData(data);
        });
    }
    writeBack(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // write to cache, send success, write asynchronously to database
            data.origin = this.outputPort.connections[0];
            data.originID = this.originID;
            // Write to cache
            // Send to DB
            if (data.header.endpoint.method == _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_5__["HTTPMethod"].GET)
                yield this.outputPort.sendData(data);
            else {
                this.outputPort.sendData(data);
                data.responseId = data.requestId;
                data.requestId = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_4__["UUID"])();
                if (data.sendResponse)
                    yield this.sendData(data);
            }
        });
    }
    sendData(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let targetConnection = this.connectionTable[response.responseId];
            if (targetConnection == null)
                throw new Error("Target connection can not be null");
            this.connectionTable[response.responseId] = null; // reset request id
            yield this.inputPort.sendData(response, targetConnection);
        });
    }
    canConnectTo(port, connectingWithOutput) {
        if (!super.canConnectTo(port, connectingWithOutput))
            return false;
        // Output of cache can connect only to database
        if (!connectingWithOutput)
            return true;
        if (port.parent instanceof _Database__WEBPACK_IMPORTED_MODULE_10__["Database"])
            return true;
        this.fireFailedConnect({ message: "Output of Cache can only be connected to Database." });
        return false;
    }
    getAvailableEndpoints() {
        if (this.outputPort.connections.length > 0)
            return this.outputPort.connections[0].getOtherPort(this.outputPort).parent.getAvailableEndpoints();
        return [];
    }
}
class CacheOptions extends _Options__WEBPACK_IMPORTED_MODULE_2__["Options"] {
    constructor() {
        super(...arguments);
        this.replacementPolicy = _enums_ReplacementPolicy__WEBPACK_IMPORTED_MODULE_7__["ReplacementPolicy"]["Least Frequently Used"];
        this.writePolicy = _enums_WritePolicy__WEBPACK_IMPORTED_MODULE_8__["WritePolicy"]["Write-Through"];
    }
}


/***/ }),

/***/ "lxjM":
/*!****************************************************************************************!*\
  !*** ./src/app/board/components/Shared/slider-described/slider-described.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SliderDescribedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderDescribedComponent", function() { return SliderDescribedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../info-tooltip/info-tooltip.component */ "q+md");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class SliderDescribedComponent {
    constructor() {
        this.Title = "Performance: ";
        this.Property = "performance";
        this.Tooltip = "Changes the throughput of the component.";
    }
    ngOnInit() {
    }
}
SliderDescribedComponent.ɵfac = function SliderDescribedComponent_Factory(t) { return new (t || SliderDescribedComponent)(); };
SliderDescribedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderDescribedComponent, selectors: [["slider-described"]], inputs: { Model: "Model", Title: "Title", Property: "Property", AfterChange: "AfterChange", Tooltip: "Tooltip" }, decls: 13, vars: 9, consts: [[1, "property-name", "endpoint-title"], [3, "Message"], ["thumbLabel", "", "tickInterval", "1", "step", "1", "min", "1", "max", "10", "aria-label", "units", 3, "ngModel", "ngModelChange", "change"], [1, "mat-slider-description"]], template: function SliderDescribedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "info-tooltip", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SliderDescribedComponent_Template_mat_slider_ngModelChange_5_listener($event) { return (ctx.Model.options[ctx.Property] = $event); })("change", function SliderDescribedComponent_Template_mat_slider_change_5_listener() { return ctx.AfterChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "High");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.Title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Message", ctx.Tooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Model.options[ctx.Property]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("low", ctx.Model.options[ctx.Property] < 4)("medium", ctx.Model.options[ctx.Property] < 8 && ctx.Model.options[ctx.Property] >= 4)("high", ctx.Model.options[ctx.Property] >= 8);
    } }, directives: [_info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_1__["InfoTooltipComponent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["mat-slider[_ngcontent-%COMP%] {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NsaWRlci1kZXNjcmliZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0oiLCJmaWxlIjoic2xpZGVyLWRlc2NyaWJlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zbGlkZXJ7XG4gICAgd2lkdGg6IDgwJTtcbn0iXX0= */"] });


/***/ }),

/***/ "m5Z1":
/*!***************************************************************************!*\
  !*** ./src/app/board/components/clientcluster/clientcluster.component.ts ***!
  \***************************************************************************/
/*! exports provided: ClientclusterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientclusterComponent", function() { return ClientclusterComponent; });
/* harmony import */ var src_models_ClientCluster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/ClientCluster */ "MhgW");
/* harmony import */ var _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/OperatorComponent */ "RW4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Shared_slider_described_slider_described_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/slider-described/slider-described.component */ "lxjM");





function ClientclusterComponent_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClientclusterComponent_div_6_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); ctx_r9.LogicClientCluster.startSendingData(); return ctx_r9.cdRef.detectChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ClientclusterComponent_div_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClientclusterComponent_div_6_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); ctx_r11.LogicClientCluster.stopSendingData(); return ctx_r11.cdRef.detectChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ClientclusterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ClientclusterComponent_div_6_button_1_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ClientclusterComponent_div_6_button_2_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx_r2.LogicClientCluster.options.X, "px")("top", ctx_r2.LogicClientCluster.options.Y, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.LogicClientCluster.isSendingData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.LogicClientCluster.isSendingData);
} }
function ClientclusterComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClientclusterComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.LogicClientCluster.startSendingData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Start sending data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ClientclusterComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClientclusterComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.LogicClientCluster.stopSendingData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Stop sending data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ClientclusterComponent extends _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__["OperatorComponent"] {
    constructor() {
        super(...arguments);
        this.LogicClientCluster = new src_models_ClientCluster__WEBPACK_IMPORTED_MODULE_0__["ClientCluster"]();
    }
    ngAfterViewInit() {
        this.Init(true);
    }
    getLogicComponent() {
        return this.LogicClientCluster;
    }
    static getColor() {
        let c = new src_models_ClientCluster__WEBPACK_IMPORTED_MODULE_0__["ClientCluster"]();
        return c.color;
    }
}
ClientclusterComponent.ɵfac = function ClientclusterComponent_Factory(t) { return ɵClientclusterComponent_BaseFactory(t || ClientclusterComponent); };
ClientclusterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClientclusterComponent, selectors: [["clientcluster"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 14, consts: [["anchorRef", ""], ["conn", ""], [1, "img-container", 3, "mousedown", "touchstart", "click"], ["src", "./assets/clientcluster.svg"], ["class", "read-only-controls", 3, "left", "top", 4, "ngIf"], [2, "display", "none"], ["options", ""], [1, "mt", 3, "Model", "Title", "Property", "AfterChange", "Tooltip"], ["actions", ""], [1, "options-actions"], [1, "actions-container"], [3, "click", 4, "ngIf"], [1, "read-only-controls"], [3, "click"], ["src", "./assets/send.svg"], ["src", "./assets/send.svg", 2, "transform", "rotateY(180deg)"]], template: function ClientclusterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "template", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function ClientclusterComponent_Template_div_mousedown_4_listener($event) { return ctx.handleMousedown($event); })("touchstart", function ClientclusterComponent_Template_div_touchstart_4_listener($event) { return ctx.handleMousedown($event); })("click", function ClientclusterComponent_Template_div_click_4_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ClientclusterComponent_div_6_Template, 3, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "slider-described", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ClientclusterComponent_button_15_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ClientclusterComponent_button_16_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx.LogicClientCluster.options.X, "px")("top", ctx.LogicClientCluster.options.Y, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("side-menu", ctx.isReadOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isReadOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Model", ctx.LogicClientCluster)("Title", "Output rate")("Property", "outputRate")("AfterChange", ctx.afterChange)("Tooltip", "Change the speed at which data is sent.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.LogicClientCluster.isSendingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.LogicClientCluster.isSendingData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _Shared_slider_described_slider_described_component__WEBPACK_IMPORTED_MODULE_4__["SliderDescribedComponent"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.component[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.read-only-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 40px;\n  height: 80px;\n  z-index: 1500;\n}\n\n.read-only-controls[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translate(-18px, -10px);\n}\n\n.read-only-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.2em 0.6em;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  border: 0;\n  opacity: 0;\n  font-size: 10px;\n  outline: none;\n  padding-left: 6px;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  transform: translate(-18px, 10px);\n  cursor: pointer;\n  background-color: var(--main);\n  color: #fff;\n  transition: opacity 0.2s ease-in, background-color 0.2s ease-in-out, transform 0.2s ease-out;\n}\n\n.read-only-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.read-only-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: var(--main);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NsaWVudGNsdXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFHSjs7QUFEUTtFQUNJLFVBQUE7RUFDQSxrQ0FBQTtBQUdaOztBQUFJO0VBQ0ksb0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsNEZBQUE7QUFFUjs7QUFEUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBR1o7O0FBRFE7RUFDSSw2QkFBQTtBQUdaIiwiZmlsZSI6ImNsaWVudGNsdXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29tcG9uZW50e1xuICAgIGhlaWdodDogODBweDtcbn1cblxubWF0LXNsaWRlcntcbiAgICB3aWR0aDogODAlO1xufVxuLnJlYWQtb25seS1jb250cm9sc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHotaW5kZXg6IDE1MDA7XG4gICAgJjpob3ZlcntcbiAgICAgICAgJiBidXR0b257XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE4cHgsIC0xMHB4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmIGJ1dHRvbntcbiAgICAgICAgcGFkZGluZzogMC4yZW0gMC42ZW07XG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xOHB4LCAxMHB4KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xuICAgICAgICAmIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
const ɵClientclusterComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ClientclusterComponent);


/***/ }),

/***/ "mF0C":
/*!************************************!*\
  !*** ./src/models/LoadBalancer.ts ***!
  \************************************/
/*! exports provided: LoadBalancer, LoadBalancerOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBalancer", function() { return LoadBalancer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadBalancerOptions", function() { return LoadBalancerOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-hash */ "1EKS");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _enums_BalancingAlgorithm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums/BalancingAlgorithm */ "Bly8");
/* harmony import */ var _enums_LoadBalancerType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums/LoadBalancerType */ "XDIl");
/* harmony import */ var _LogicComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LogicComponent */ "dxLX");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Options */ "/XK+");
/* harmony import */ var _Port__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Port */ "WjXT");







class LoadBalancer extends _LogicComponent__WEBPACK_IMPORTED_MODULE_4__["LogicComponent"] {
    constructor() {
        super();
        this.connectionTable = {};
        this.streamConnectionTable = {};
        this.color = "#021B79";
        this.roundRobinIndex = -1;
        this.inputPort = new _Port__WEBPACK_IMPORTED_MODULE_6__["Port"](this, false, true);
        this.outputPort = new _Port__WEBPACK_IMPORTED_MODULE_6__["Port"](this, true, true);
        this.options = new LoadBalancerOptions();
        this.options.title = "Load Balancer";
    }
    receiveData(data, fromOutput) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (fromOutput) {
                let targetConnection = this.connectionTable[data.responseId];
                if (targetConnection == null)
                    throw new Error("Connection doesn't exist (response to unknown request)");
                if (data.header.stream != true) {
                    this.connectionTable[data.responseId] = null; // reset request id
                    this.streamConnectionTable[data.responseId] = null;
                }
                this.fireReceiveData(data);
                let result = yield this.inputPort.sendData(data, targetConnection);
                if (!result && data.header.stream) {
                    data.header.stream = false;
                    data.requestId = data.responseId;
                    data.responseId = null;
                    let res = this.outputPort.sendData(data, data.origin);
                    if (res) {
                        this.connectionTable[data.responseId] = null;
                        this.streamConnectionTable[data.responseId] = null;
                    }
                }
            }
            else {
                if (data.requestId == null)
                    throw new Error("requestId can not be null. Please specify property requestId of RequestData");
                this.fireReceiveData(data);
                if (this.streamConnectionTable[data.requestId] != null) {
                    data.origin = this.streamConnectionTable[data.requestId];
                    data.originID = this.originID;
                    yield this.outputPort.sendData(data, this.streamConnectionTable[data.requestId]);
                    return;
                }
                this.connectionTable[data.requestId] = data.origin;
                switch (this.options.algorithm) {
                    case _enums_BalancingAlgorithm__WEBPACK_IMPORTED_MODULE_2__["BalancingAlgorithm"]["Round Robin"]:
                        yield this.roundRobin(data);
                        break;
                    case _enums_BalancingAlgorithm__WEBPACK_IMPORTED_MODULE_2__["BalancingAlgorithm"]["IP Hash"]:
                        yield this.ipHash(data);
                        break;
                    case _enums_BalancingAlgorithm__WEBPACK_IMPORTED_MODULE_2__["BalancingAlgorithm"]["Least Connections"]:
                        yield this.leastConnections(data);
                        break;
                    case _enums_BalancingAlgorithm__WEBPACK_IMPORTED_MODULE_2__["BalancingAlgorithm"]["URL Hash"]:
                        yield this.urlHash(data);
                        break;
                    default:
                        yield this.roundRobin(data);
                        break;
                }
            }
        });
    }
    roundRobin(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let nodesLength = this.outputPort.connections.length;
            this.roundRobinIndex++;
            if (this.roundRobinIndex >= nodesLength) {
                this.roundRobinIndex = 0;
            }
            data.origin = this.outputPort.connections[this.roundRobinIndex];
            data.originID = this.originID;
            this.streamConnectionTable[data.requestId] = data.origin;
            yield this.outputPort.sendData(data, data.origin);
        });
    }
    ipHash(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let hash = object_hash__WEBPACK_IMPORTED_MODULE_1__({ id: data.originID }).substr(0, 2);
            let hashInt = parseInt(hash, 16);
            let length = this.outputPort.connections.length;
            let connectionIndex = hashInt % length;
            data.origin = this.outputPort.connections[connectionIndex];
            data.originID = this.originID;
            this.streamConnectionTable[data.requestId] = data.origin;
            yield this.outputPort.sendData(data, this.outputPort.connections[connectionIndex]);
        });
    }
    leastConnections(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let allConnections = [];
            let keys = Object.keys(this.streamConnectionTable);
            for (let i = keys.length - 1; i >= 0; i--) {
                let conn = keys[i];
                if (this.streamConnectionTable[conn] == null)
                    break;
                allConnections.push(this.streamConnectionTable[conn]);
            }
            let least = this.outputPort.connections[0];
            let leastNum = Number.MAX_VALUE;
            for (let conn of this.outputPort.connections) {
                let length = allConnections.filter(x => x == conn).length;
                if (length < leastNum) {
                    least = conn;
                    leastNum = length;
                }
            }
            data.origin = least;
            data.originID = this.originID;
            this.streamConnectionTable[data.requestId] = data.origin;
            yield this.outputPort.sendData(data, least);
        });
    }
    urlHash(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url;
            if (data.header.endpoint.endpoint == null)
                url = "/";
            else
                url = data.header.endpoint.endpoint.url;
            let hash = object_hash__WEBPACK_IMPORTED_MODULE_1__({ id: url }).substr(0, 2);
            let hashInt = parseInt(hash, 16);
            let length = this.outputPort.connections.length;
            let connectionIndex = hashInt % length;
            data.origin = this.outputPort.connections[connectionIndex];
            data.originID = this.originID;
            this.streamConnectionTable[data.requestId] = data.origin;
            yield this.outputPort.sendData(data, this.outputPort.connections[connectionIndex]);
        });
    }
    /**
     *
     * This method currently does nothing for LoadBalancer
     */
    sendData(request) { }
    getAvailableEndpoints() {
        let connectableEndpoints = [];
        for (let connection of this.outputPort.connections) {
            connection.getOtherPort(this.outputPort).parent.getAvailableEndpoints().forEach(endpoint => {
                let duplicate = (connectableEndpoints.find(ep => ep.url === endpoint.url) != null);
                if (!duplicate)
                    connectableEndpoints.push(endpoint);
            });
        }
        return connectableEndpoints;
    }
}
class LoadBalancerOptions extends _Options__WEBPACK_IMPORTED_MODULE_5__["Options"] {
    constructor() {
        super(...arguments);
        this.type = _enums_LoadBalancerType__WEBPACK_IMPORTED_MODULE_3__["LoadBalancerType"]["Layer 7"];
        this.algorithm = _enums_BalancingAlgorithm__WEBPACK_IMPORTED_MODULE_2__["BalancingAlgorithm"]["Round Robin"];
    }
}


/***/ }),

/***/ "nCka":
/*!**************************************!*\
  !*** ./src/app/selection.service.ts ***!
  \**************************************/
/*! exports provided: SelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionService", function() { return SelectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_models_Shared_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/Shared/EventDispatcher */ "GLam");



class StopSelectingEvent {
}
class SelectionService {
    constructor() {
        this.onStopSelecting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeleteLineBreak = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentConnectionSelections = [];
        this.currentSelections = [];
        this.selectionWidth = 0;
        this.selectionHeight = 0;
        this.selectionScale = 1;
        this.stopSelecting = () => {
            this.onStopSelecting.emit({
                top: parseInt(this.selectionRect.style.top),
                left: parseInt(this.selectionRect.style.left),
                width: Math.abs(this.selectionWidth),
                height: Math.abs(this.selectionHeight)
            });
            window.removeEventListener("mousemove", this.moveSelectionRect);
            window.removeEventListener("mouseup", this.stopSelecting);
            document.getElementById("board").removeChild(this.selectionRect);
            this.selectionRect = null;
        };
        this.moveSelectionRect = (e) => {
            this.selectionRect.style.display = "block";
            let diffX = (this.selectionPrevX - e.clientX) / this.selectionScale;
            let diffY = (this.selectionPrevY - e.clientY) / this.selectionScale;
            this.selectionWidth -= diffX;
            this.selectionHeight -= diffY;
            this.selectionRect.style.width = Math.abs(this.selectionWidth).toString() + "px";
            this.selectionRect.style.left = e.clientX < this.selectionClientX ? (this.selectionStartX + this.selectionWidth).toString() + "px" : this.selectionStartX.toString() + "px";
            this.selectionRect.style.height = Math.abs(this.selectionHeight).toString() + "px";
            this.selectionRect.style.top = e.clientY < this.selectionClientY ? (this.selectionStartY + this.selectionHeight).toString() + "px" : this.selectionStartY.toString() + "px";
            this.selectionPrevX = e.clientX;
            this.selectionPrevY = e.clientY;
        };
        this.moveComponents = (event, scale) => {
            let cX = 0;
            let cY = 0;
            if (event instanceof MouseEvent) {
                cX = event.clientX;
                cY = event.clientY;
            }
            else if (event instanceof TouchEvent) {
                cX = event.touches[0].clientX;
                cY = event.touches[0].clientY;
            }
            for (let selection of this.currentSelections) {
                selection.setPosition(selection.getLogicComponent().options.X - (this.prevX - cX) / scale, selection.getLogicComponent().options.Y - (this.prevY - cY) / scale);
            }
            for (let connection of this.currentConnectionSelections) {
                if (connection.LogicConnection.lineBreaks.length > 2) {
                    connection.LogicConnection.lineBreaks.filter((c, i) => {
                        return i !== 0 && i < connection.LogicConnection.lineBreaks.length - 1;
                    }).forEach(br => {
                        let lineBreak = this.convertLineBreak({ x: br.x - (this.prevX - cX) / scale,
                            y: br.y - (this.prevY - cY) / scale });
                        br.x = lineBreak.x;
                        br.y = lineBreak.y;
                    });
                }
            }
            this.prevX = this.convertScaledPosition(cX, scale);
            this.prevY = this.convertScaledPosition(cY, scale);
        };
        this.changeSelectionDispatcher = new src_models_Shared_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["EventDispatcher"]();
    }
    addSelection(selection, multiple = false) {
        if (this.currentSelections.indexOf(selection) == -1) { // Add to current selections
            if (multiple) { // Add to current multiple selections
                selection.anchorRef.nativeElement.classList.add("is-current-selection");
                selection.cdRef.reattach();
                this.currentSelections.push(selection);
                // Look if the component is connected to already selected component
                let selectionOutputPort = selection.getLogicComponent().getPort(true);
                let selectionInputPort = selection.getLogicComponent().getPort(false);
                for (let component of this.currentSelections) {
                    let logicComponent = component.getLogicComponent();
                    let outputPort = logicComponent.getPort(true);
                    let inputPort = logicComponent.getPort(false);
                    if (outputPort) {
                        if (selectionInputPort) {
                            let logicConnection = outputPort.connections.find(connection => connection.getOtherPort(outputPort) === selectionInputPort);
                            if (logicConnection != null) {
                                let comp = selection.getPortComponent(false).getConnectionComponent(logicConnection);
                                if (comp)
                                    this.currentConnectionSelections.push(comp);
                                else {
                                    setTimeout(() => {
                                        comp = selection.getPortComponent(false).getConnectionComponent(logicConnection);
                                        if (comp)
                                            this.currentConnectionSelections.push(comp);
                                    }, 50);
                                }
                            }
                        }
                    }
                    if (inputPort) {
                        if (selectionOutputPort) {
                            let logicConnection = inputPort.connections.find(connection => connection.getOtherPort(inputPort) === selectionOutputPort);
                            if (logicConnection != null) {
                                let comp = selection.getPortComponent(true).getConnectionComponent(logicConnection);
                                if (comp)
                                    this.currentConnectionSelections.push(comp);
                                else {
                                    setTimeout(() => {
                                        comp = selection.getPortComponent(true).getConnectionComponent(logicConnection);
                                        if (comp)
                                            this.currentConnectionSelections.push(comp);
                                    }, 50);
                                }
                            }
                        }
                    }
                }
            }
            else { // Set as currently selected
                for (let oldSelection of this.currentSelections) {
                    oldSelection.anchorRef.nativeElement.classList.remove("is-current-selection");
                    oldSelection.cdRef.detach();
                }
                selection.cdRef.reattach();
                selection.anchorRef.nativeElement.classList.add("is-current-selection");
                this.currentSelections = [selection];
                this.clearCurrentConnectionSelections();
            }
        }
        this.clearConnectionSelection();
        this.clearLineBreakSelection();
        this.fireChangeSelection({});
    }
    clearSelection() {
        for (let selection of this.currentSelections) {
            selection.anchorRef.nativeElement.classList.remove("is-current-selection");
            selection.cdRef.detach();
        }
        this.currentSelections = [];
        this.fireChangeSelection({});
    }
    // Connection
    setConnectionSelection(selection) {
        if (selection != this.currentConnectionSelection) {
            if (this.currentConnectionSelection != null) {
                this.currentConnectionSelection.mainPath.nativeElement.classList.remove("is-current-selection");
            }
            selection.mainPath.nativeElement.classList.add("is-current-selection");
            this.currentConnectionSelection = selection;
            this.clearSelection();
            this.clearLineBreakSelection();
            this.clearCurrentConnectionSelections();
            this.fireChangeSelection({});
        }
    }
    clearConnectionSelection() {
        if (this.currentConnectionSelection != null) {
            this.currentConnectionSelection.mainPath.nativeElement.classList.remove("is-current-selection");
            this.currentConnectionSelection = null;
            this.fireChangeSelection({});
        }
    }
    // LineBreak
    setLineBreakSelection(selection, list) {
        if (selection != this.currentLineBreakSelection) {
            this.currentLineBreakSelection = selection;
            this.currentLineBreakList = list;
            this.clearSelection();
            this.clearConnectionSelection();
            this.fireChangeSelection({});
        }
    }
    clearLineBreakSelection() {
        if (this.currentLineBreakSelection != null) {
            this.currentLineBreakList = [];
            this.currentLineBreakSelection = null;
            this.fireChangeSelection({});
        }
    }
    clearCurrentConnectionSelections() {
        this.currentConnectionSelections = [];
    }
    /**
     * Returns true if something was deleted, false otherwise
     */
    deleteSelection() {
        if (this.currentConnectionSelection == null && this.currentSelections.length == 0 && this.currentLineBreakSelection == null)
            return false;
        if (this.currentConnectionSelection) {
            this.currentConnectionSelection.destroySelf();
            return true;
        }
        else if (this.currentLineBreakSelection) {
            let index = this.currentLineBreakList.findIndex(b => b.x === this.currentLineBreakSelection.x && b.y === this.currentLineBreakSelection.y);
            if (index === -1)
                return false;
            this.currentLineBreakList.splice(index, 1);
            this.onDeleteLineBreak.emit();
            return true;
        }
        for (let selection of this.currentSelections) {
            selection.destroySelf();
        }
        this.clearSelection();
        this.clearLineBreakSelection();
        this.clearCurrentConnectionSelections();
        this.clearConnectionSelection();
        return true;
    }
    startSelecting(e, scale) {
        this.clearConnectionSelection();
        this.clearLineBreakSelection();
        this.clearCurrentConnectionSelections();
        this.clearSelection();
        let board = document.getElementById("board");
        let rect = document.createElement("div");
        rect.style.left = `${e.clientX}px`;
        rect.style.top = `${e.clientY}px`;
        rect.style.width = "0px";
        rect.style.height = "0px";
        rect.className = "selection-rect";
        rect.style.display = "none";
        board.appendChild(rect);
        this.selectionRect = rect;
        this.selectionStartX = e.offsetX;
        this.selectionStartY = e.offsetY;
        this.selectionClientX = e.clientX;
        this.selectionClientY = e.clientY;
        this.selectionPrevX = e.clientX;
        this.selectionPrevY = e.clientY;
        this.selectionWidth = 0;
        this.selectionHeight = 0;
        this.selectionScale = scale;
        window.addEventListener("mousemove", this.moveSelectionRect);
        window.addEventListener("mouseup", this.stopSelecting);
    }
    convertLineBreak(lineBreak) {
        return { x: Math.round(lineBreak.x / 10) * 10, y: Math.round(lineBreak.y / 10) * 10 };
    }
    convertScaledPosition(number, scale) {
        return Math.round(number / (10 * scale)) * (10 * scale);
    }
    onChangeSelection(handler) {
        this.changeSelectionDispatcher.register(handler);
    }
    fireChangeSelection(event) {
        this.changeSelectionDispatcher.fire(event);
    }
}
SelectionService.ɵfac = function SelectionService_Factory(t) { return new (t || SelectionService)(); };
SelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SelectionService, factory: SelectionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nVqF":
/*!*********************************!*\
  !*** ./src/models/TextField.ts ***!
  \*********************************/
/*! exports provided: TextField, TextFieldOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldOptions", function() { return TextFieldOptions; });
/* harmony import */ var _LogicComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogicComponent */ "dxLX");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options */ "/XK+");


class TextField extends _LogicComponent__WEBPACK_IMPORTED_MODULE_0__["LogicComponent"] {
    constructor() {
        super();
        this.destroy = () => { };
        this.options = new TextFieldOptions();
        this.options.title = "Text Field";
    }
    receiveData(data, fromOutput) {
        return;
    }
    sendData(data) {
        return;
    }
    getAvailableEndpoints() {
        return [];
    }
}
class TextFieldOptions extends _Options__WEBPACK_IMPORTED_MODULE_1__["Options"] {
    constructor() {
        super(...arguments);
        this.width = 140;
        this.height = 60;
        this.fontSize = 12;
        this.isBold = false;
        this.isItalic = false;
        this.backgroundColor = "rgba(0, 0, 0, 0.5)";
        this.color = "#fff";
    }
}


/***/ }),

/***/ "nesx":
/*!************************************!*\
  !*** ./src/app/viewing.service.ts ***!
  \************************************/
/*! exports provided: ViewingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewingService", function() { return ViewingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ViewingService {
    constructor() {
        this.ViewUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.HELPERS_KEY = "helpers";
        this.TITLES_KEY = "titles";
        this.DARKMODE_KEY = "darkmode";
        this.PERFORMANCEMODE_KEY = "performancemode";
        this.RESPONSES_KEY = "responses";
        this.helpersDisabled = localStorage.getItem(this.HELPERS_KEY) == "true" ? true : false;
        this.titlesHidden = localStorage.getItem(this.TITLES_KEY) == "true" ? true : false;
        this.darkModeEnabled = localStorage.getItem(this.DARKMODE_KEY) == "true" ? true : false;
        this.performanceModeEnabled = localStorage.getItem(this.PERFORMANCEMODE_KEY) == "true" ? true : false;
        this.responsesHidden = localStorage.getItem(this.RESPONSES_KEY) == "true" ? true : false;
    }
    isHelpersDisabled() {
        return this.helpersDisabled;
    }
    setHelpersDisabled(disabled = true) {
        localStorage.setItem(this.HELPERS_KEY, disabled.toString());
        this.helpersDisabled = disabled;
        this.ViewUpdated.emit();
    }
    isTitlesHidden() {
        return this.titlesHidden;
    }
    setTitlesHidden(hidden = true, saveToLocalStorage = true) {
        if (saveToLocalStorage)
            localStorage.setItem(this.TITLES_KEY, hidden.toString());
        this.titlesHidden = hidden;
        this.ViewUpdated.emit();
    }
    isDarkMode() {
        return this.darkModeEnabled;
    }
    setDarkMode(enabled = true, saveToLocalStorage = true) {
        if (saveToLocalStorage)
            localStorage.setItem(this.DARKMODE_KEY, enabled.toString());
        if (enabled)
            document.documentElement.classList.add("dark-mode");
        else
            document.documentElement.classList.remove("dark-mode");
        this.darkModeEnabled = enabled;
        this.ViewUpdated.emit();
    }
    isPerformanceMode() {
        return this.performanceModeEnabled;
    }
    setPerformanceMode(enabled = true, saveToLocalStorage = true) {
        if (saveToLocalStorage)
            localStorage.setItem(this.PERFORMANCEMODE_KEY, enabled.toString());
        this.performanceModeEnabled = enabled;
    }
    isResponsesHidden() {
        return this.responsesHidden;
    }
    setResponsesHidden(hidden = true, saveToLocalStorage = true) {
        if (saveToLocalStorage)
            localStorage.setItem(this.RESPONSES_KEY, hidden.toString());
        this.responsesHidden = hidden;
    }
}
ViewingService.ɵfac = function ViewingService_Factory(t) { return new (t || ViewingService)(); };
ViewingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewingService, factory: ViewingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pWwo":
/*!*************************************************************************!*\
  !*** ./src/app/board/components/cloudstorage/cloudstorage.component.ts ***!
  \*************************************************************************/
/*! exports provided: CloudStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudStorageComponent", function() { return CloudStorageComponent; });
/* harmony import */ var src_models_CloudStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/CloudStorage */ "vX2b");
/* harmony import */ var _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/OperatorComponent */ "RW4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Shared_endpoint_select_endpoint_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/endpoint-select/endpoint-select.component */ "acqn");




class CloudStorageComponent extends _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__["OperatorComponent"] {
    constructor() {
        super(...arguments);
        this.LogicCloudStorage = new src_models_CloudStorage__WEBPACK_IMPORTED_MODULE_0__["CloudStorage"]();
    }
    getLogicComponent() {
        return this.LogicCloudStorage;
    }
    static getColor() {
        let c = new src_models_CloudStorage__WEBPACK_IMPORTED_MODULE_0__["CloudStorage"]();
        return c.color;
    }
}
CloudStorageComponent.ɵfac = function CloudStorageComponent_Factory(t) { return ɵCloudStorageComponent_BaseFactory(t || CloudStorageComponent); };
CloudStorageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CloudStorageComponent, selectors: [["cloudstorage"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 10, consts: [["anchorRef", ""], ["conn", ""], [1, "img-container", 3, "mousedown", "touchstart", "click"], [1, "img", "bg-cloudstorage"], [2, "display", "none"], ["options", ""], [3, "Model", "Type", "Multiple", "HasActions", "ModifiableMethods", "AfterChange"]], template: function CloudStorageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "template", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function CloudStorageComponent_Template_div_mousedown_4_listener($event) { return ctx.handleMousedown($event); })("touchstart", function CloudStorageComponent_Template_div_touchstart_4_listener($event) { return ctx.handleMousedown($event); })("click", function CloudStorageComponent_Template_div_click_4_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "endpoint-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx.LogicCloudStorage.options.X, "px")("top", ctx.LogicCloudStorage.options.Y, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Model", ctx.LogicCloudStorage)("Type", ctx.APIType.REST)("Multiple", false)("HasActions", false)("ModifiableMethods", false)("AfterChange", ctx.afterChange);
    } }, directives: [_Shared_endpoint_select_endpoint_select_component__WEBPACK_IMPORTED_MODULE_3__["EndpointSelectComponent"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Nsb3Vkc3RvcmFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoiY2xvdWRzdG9yYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"] });
const ɵCloudStorageComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](CloudStorageComponent);


/***/ }),

/***/ "q+md":
/*!********************************************************!*\
  !*** ./src/app/info-tooltip/info-tooltip.component.ts ***!
  \********************************************************/
/*! exports provided: InfoTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoTooltipComponent", function() { return InfoTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _viewing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewing.service */ "nesx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");




function InfoTooltipComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r0.Message);
} }
class InfoTooltipComponent {
    constructor(viewingService) {
        this.viewingService = viewingService;
    }
    ngOnInit() { }
}
InfoTooltipComponent.ɵfac = function InfoTooltipComponent_Factory(t) { return new (t || InfoTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_viewing_service__WEBPACK_IMPORTED_MODULE_1__["ViewingService"])); };
InfoTooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoTooltipComponent, selectors: [["info-tooltip"]], inputs: { Message: "Message" }, decls: 1, vars: 1, consts: [["class", "property-info-button", 3, "matTooltip", 4, "ngIf"], [1, "property-info-button", 3, "matTooltip"], [1, "far", "fa-question-circle"]], template: function InfoTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InfoTooltipComponent_span_0_Template, 2, 1, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.viewingService.isHelpersDisabled());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.property-info-button[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  vertical-align: top;\n  color: var(--main);\n  cursor: pointer;\n}\n\n.property-info-button[_ngcontent-%COMP%]:hover {\n  color: var(--main);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2luZm8tdG9vbHRpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQUk7RUFDSSxrQkFBQTtBQUVSIiwiZmlsZSI6ImluZm8tdG9vbHRpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb3BlcnR5LWluZm8tYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgY29sb3I6IHZhcigtLW1haW4pO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVye1xuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbik7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "qEx5":
/*!**************************************!*\
  !*** ./src/models/enums/Protocol.ts ***!
  \**************************************/
/*! exports provided: Protocol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Protocol", function() { return Protocol; });
var Protocol;
(function (Protocol) {
    Protocol[Protocol["HTTP"] = 0] = "HTTP";
    Protocol[Protocol["WebSockets"] = 1] = "WebSockets";
    Protocol[Protocol["Database"] = 2] = "Database";
})(Protocol || (Protocol = {}));


/***/ }),

/***/ "uh67":
/*!**********************************!*\
  !*** ./src/models/Connection.ts ***!
  \**********************************/
/*! exports provided: LineBreak, Connection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineBreak", function() { return LineBreak; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _Shared_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shared/EventDispatcher */ "GLam");


class LineBreak {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Connection {
    constructor(port1, port2) {
        this.title = "";
        this.sendDataDispatcher = new _Shared_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__["EventDispatcher"]();
        this.getSendDataDelay = () => { return 180; };
        this.port1 = port1;
        this.port2 = port2;
    }
    getOtherPort(port) {
        return port === this.port1 ? this.port2 : this.port1;
    }
    /**
     * sendData: sends data to connection
     */
    sendData(data, origin) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (origin === this.port1) {
                this.fireSendData(origin);
                let delay = this.getSendDataDelay();
                yield this.port2.receiveData(data, delay);
            }
            else if (origin === this.port2) {
                this.fireSendData(origin);
                let delay = this.getSendDataDelay();
                yield this.port1.receiveData(data, delay);
            }
            else
                throw new Error("Invalid origin in Connection.sendData");
        });
    }
    destroy() {
        this.port1.removeConnection(this, true);
    }
    onSendData(handler) {
        this.sendDataDispatcher.register(handler);
    }
    fireSendData(event) {
        this.sendDataDispatcher.fire(event);
    }
}


/***/ }),

/***/ "vX2b":
/*!************************************!*\
  !*** ./src/models/CloudStorage.ts ***!
  \************************************/
/*! exports provided: CloudStorage, CloudStorageOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudStorage", function() { return CloudStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudStorageOptions", function() { return CloudStorageOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _EndpointOperator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EndpointOperator */ "7KcZ");
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Endpoint */ "CIzy");
/* harmony import */ var _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums/HTTPMethod */ "axtL");
/* harmony import */ var _Port__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Port */ "WjXT");





class CloudStorage extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_1__["EndpointOperator"] {
    constructor() {
        super();
        this.connectionTable = {};
        this.fillColor = false;
        this.color = "#dd1818";
        this.inputPort = new _Port__WEBPACK_IMPORTED_MODULE_4__["Port"](this, false, true);
        this.options = new CloudStorageOptions();
        this.options.title = "Cloud Storage";
        this.options.endpoints = [
            new _Endpoint__WEBPACK_IMPORTED_MODULE_2__["Endpoint"]("/cloud", [_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].GET, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].POST, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].PUT, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].DELETE])
        ];
    }
    receiveData(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let targetEndpoint = this.getTargetEndpoint(data);
            if (targetEndpoint == null)
                return;
            this.fireReceiveData(data);
            this.connectionTable[data.requestId] = data.origin;
            // Send response back
            if (data.sendResponse)
                yield this.sendData(this.getResponse(data));
        });
    }
    sendData(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let targetConnection = this.connectionTable[response.responseId];
            if (targetConnection == null)
                throw new Error("Target connection can not be null");
            this.connectionTable[response.responseId] = null; // reset request id
            yield this.inputPort.sendData(response, targetConnection);
        });
    }
}
class CloudStorageOptions extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_1__["EndpointOptions"] {
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/create.component */ "Khja");
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/landing-page/landing-page.component */ "JD7n");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.component */ "8D7W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: "create",
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"],
    },
    {
        path: "",
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"],
        children: [
            {
                path: "**",
                component: _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"]
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wKdh":
/*!***************************!*\
  !*** ./src/models/CDN.ts ***!
  \***************************/
/*! exports provided: CDN, CDNOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDN", function() { return CDN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDNOptions", function() { return CDNOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _EndpointOperator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EndpointOperator */ "7KcZ");
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Endpoint */ "CIzy");
/* harmony import */ var _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums/HTTPMethod */ "axtL");
/* harmony import */ var _Port__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Port */ "WjXT");





class CDN extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_1__["EndpointOperator"] {
    constructor() {
        super();
        this.connectionTable = {};
        this.color = "#EB5757";
        this.inputPort = new _Port__WEBPACK_IMPORTED_MODULE_4__["Port"](this, false, true);
        this.options = new CDNOptions();
        this.options.title = "CDN";
        this.options.endpoints = [
            new _Endpoint__WEBPACK_IMPORTED_MODULE_2__["Endpoint"]("/cdn", [_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].GET, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].POST, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].PUT, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].DELETE, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].PATCH])
        ];
    }
    receiveData(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let targetEndpoint = this.getTargetEndpoint(data);
            if (targetEndpoint == null)
                return;
            this.fireReceiveData(data);
            this.connectionTable[data.requestId] = data.origin;
            // Send response back
            if (data.sendResponse)
                yield this.sendData(this.getResponse(data));
        });
    }
    sendData(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let targetConnection = this.connectionTable[response.responseId];
            if (targetConnection == null)
                throw new Error("Target connection can not be null");
            this.connectionTable[response.responseId] = null; // reset request id
            yield this.inputPort.sendData(response, targetConnection);
        });
    }
}
class CDNOptions extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_1__["EndpointOptions"] {
}


/***/ }),

/***/ "xuq0":
/*!*************************************************************************!*\
  !*** ./src/app/board/components/messagequeue/messagequeue.component.ts ***!
  \*************************************************************************/
/*! exports provided: MessagequeueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagequeueComponent", function() { return MessagequeueComponent; });
/* harmony import */ var src_models_MessageQueue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/MessageQueue */ "PsCE");
/* harmony import */ var _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/OperatorComponent */ "RW4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../info-tooltip/info-tooltip.component */ "q+md");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function MessagequeueComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 14);
} }
function MessagequeueComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 15);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx_r3.LogicMessageQueue.color);
} }
function MessagequeueComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MessagequeueComponent_div_18_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.afterChange(); })("blur", function MessagequeueComponent_div_18_Template_input_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const endpoint_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.handleEndpointUrlChange(endpoint_r8); })("ngModelChange", function MessagequeueComponent_div_18_Template_input_ngModelChange_1_listener($event) { const endpoint_r8 = ctx.$implicit; return endpoint_r8.url = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const endpoint_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", endpoint_r8.url);
} }
const _c0 = function () { return []; };
class MessagequeueComponent extends _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_1__["OperatorComponent"] {
    constructor() {
        super(...arguments);
        this.LogicMessageQueue = new src_models_MessageQueue__WEBPACK_IMPORTED_MODULE_0__["MessageQueue"]();
    }
    handleEndpointUrlChange(endpoint) {
        if (endpoint.url == null || endpoint.url.replace(/\s/g, "") == "")
            endpoint.url = "Message Queue";
    }
    ngAfterViewInit() {
        super.Init();
        this.LogicMessageQueue.onReceiveData((data) => {
            this.setReceiveDataAnimation();
            this.cdRef.detectChanges();
        });
        this.LogicMessageQueue.onSendData((data) => {
            this.cdRef.detectChanges();
        });
    }
    getLogicComponent() {
        return this.LogicMessageQueue;
    }
    static getColor() {
        let c = new src_models_MessageQueue__WEBPACK_IMPORTED_MODULE_0__["MessageQueue"]();
        return c.color;
    }
}
MessagequeueComponent.ɵfac = function MessagequeueComponent_Factory(t) { return ɵMessagequeueComponent_BaseFactory(t || MessagequeueComponent); };
MessagequeueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MessagequeueComponent, selectors: [["messagequeue"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 13, consts: [["anchorRef", ""], ["conn", ""], [1, "img-container", "messages"], ["class", "message empty", 4, "ngFor", "ngForOf"], [1, "img-container", "messages", 3, "mousedown", "click", "touchstart"], ["class", "message img", 3, "backgroundColor", 4, "ngFor", "ngForOf"], [2, "display", "none"], ["options", ""], [1, "options-endpoints-container"], [1, "options-endpoints-top"], [1, "property-name"], [3, "Message"], [1, "options-endpoints"], ["class", "options-endpoint", 4, "ngFor", "ngForOf"], [1, "message", "empty"], [1, "message", "img"], [1, "options-endpoint"], ["type", "text", "spellcheck", "false", "placeholder", "url", 1, "endpoint-url", 3, "ngModel", "change", "blur", "ngModelChange"]], template: function MessagequeueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "template", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MessagequeueComponent_div_5_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function MessagequeueComponent_Template_div_mousedown_6_listener($event) { return ctx.handleMousedown($event); })("click", function MessagequeueComponent_Template_div_click_6_listener($event) { return ctx.handleClick($event); })("touchstart", function MessagequeueComponent_Template_div_touchstart_6_listener($event) { return ctx.handleMousedown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MessagequeueComponent_div_7_Template, 1, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Endpoints: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "info-tooltip", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MessagequeueComponent_div_18_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx.LogicMessageQueue.options.X, "px")("top", ctx.LogicMessageQueue.options.Y, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c0).constructor(10));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](8, 8, ctx.LogicMessageQueue.messages, 0, 10));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Message", "A message queue endpoint. Any consumers must have an endpoint with the same url.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.LogicMessageQueue.options.endpoints);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["InfoTooltipComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.component[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  gap: 1px;\n}\n\n.img-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  flex-basis: calc(10% - 1px);\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\n.img-container[_ngcontent-%COMP%]   .message.fill[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  pointer-events: none;\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.img-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100%;\n}\n\n.img-container[_ngcontent-%COMP%]   .message.empty[_ngcontent-%COMP%] {\n  background-color: var(--text);\n  opacity: 0.4;\n}\n\n.component-title[_ngcontent-%COMP%] {\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21lc3NhZ2VxdWV1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsUUFBQTtBQUdKOztBQUZJO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUlSOztBQUhRO0VBQ0ksb0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBS1o7O0FBRlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUlaOztBQUZRO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0FBSVo7O0FBQUE7RUFDSSxZQUFBO0FBR0oiLCJmaWxlIjoibWVzc2FnZXF1ZXVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbXBvbmVudHtcbiAgICB3aWR0aDogODBweDtcbn1cbi5pbWctY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBnYXA6IDFweDtcbiAgICAmIC5tZXNzYWdle1xuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwJSAtIDFweCk7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICYuZmlsbHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAmIC5pbWd7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAmLmVtcHR5e1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4uY29tcG9uZW50LXRpdGxle1xuICAgIHdpZHRoOiAxMjBweDtcbn0iXX0= */"] });
const ɵMessagequeueComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MessagequeueComponent);


/***/ }),

/***/ "ybgb":
/*!*********************************!*\
  !*** ./src/models/WebServer.ts ***!
  \*********************************/
/*! exports provided: WebServer, WebServerOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebServer", function() { return WebServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebServerOptions", function() { return WebServerOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _EndpointOperator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EndpointOperator */ "7KcZ");
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Endpoint */ "CIzy");
/* harmony import */ var _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums/HTTPMethod */ "axtL");
/* harmony import */ var _Port__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Port */ "WjXT");
/* harmony import */ var _RequestData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RequestData */ "LEJs");
/* harmony import */ var src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/ExtensionMethods */ "hgry");
/* harmony import */ var _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums/gRPCMode */ "KpZ9");
/* harmony import */ var _enums_Protocol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./enums/Protocol */ "qEx5");
/* harmony import */ var _enums_APIType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./enums/APIType */ "G1KI");










class WebServer extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_1__["EndpointOperator"] {
    constructor() {
        super();
        this.connectionTable = {};
        this.fillColor = false;
        this.color = "#009FFF";
        this.inputPort = new _Port__WEBPACK_IMPORTED_MODULE_4__["Port"](this, false, true);
        this.outputPort = new _Port__WEBPACK_IMPORTED_MODULE_4__["Port"](this, true, true);
        this.options = new WebServerOptions();
        this.options.title = "Web Server";
        this.options.endpoints = [
            new _Endpoint__WEBPACK_IMPORTED_MODULE_2__["Endpoint"]("/", [_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].GET, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].POST, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].PUT, _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].DELETE,])
        ];
    }
    receiveData(data, fromOutput) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (fromOutput) {
                let targetConnection = this.connectionTable[data.responseId];
                if (targetConnection == null) // connection could be ended before last data was sent
                    return;
                // Checking if endpoint wasn't removed before stream end
                this.fireReceiveData(data);
                if (data.header.stream) {
                    let hasAction = false;
                    this.getEndpoints().forEach(endpoint => {
                        endpoint.actions.forEach(action => {
                            if (action.endpoint.url === data.header.endpoint.endpoint.url &&
                                Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_6__["arrayEquals"])(action.endpoint.supportedMethods, data.header.endpoint.endpoint.supportedMethods)) {
                                hasAction = true;
                            }
                        });
                    });
                    if (!hasAction) { // send end of stream to out if the action no longer exists
                        data.header.stream = false;
                        data.requestId = data.responseId;
                        data.responseId = null;
                        let result = this.outputPort.sendData(data, data.origin);
                        if (result)
                            this.connectionTable[data.responseId] = null;
                        return;
                    }
                    let result = yield this.inputPort.sendData(data, this.connectionTable[data.responseId]);
                    if (!result && data.header.stream) { // send end stream to out if the client doesn't exist 
                        data.header.stream = false;
                        data.requestId = data.responseId;
                        data.responseId = null;
                        let res = this.outputPort.sendData(data, data.origin);
                        if (res)
                            this.connectionTable[data.responseId] = null;
                    }
                }
                else {
                    if (data.header.endpoint.endpoint.protocol == _enums_Protocol__WEBPACK_IMPORTED_MODULE_8__["Protocol"].WebSockets || data.header.endpoint.endpoint.grpcMode == _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_7__["gRPCMode"]["Bidirectional Streaming"] || data.header.endpoint.endpoint.grpcMode == _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_7__["gRPCMode"]["Server Streaming"])
                        yield this.inputPort.sendData(data, this.connectionTable[data.responseId]);
                }
            }
            else {
                if (data.requestId == "" || data.requestId == null)
                    throw new Error("Request ID can not be null");
                if (data.header.endpoint == null)
                    throw new Error("Endpoint can not be null");
                let targetEndpoint = this.getTargetEndpoint(data);
                if (targetEndpoint == null)
                    return;
                this.fireReceiveData(data);
                let sendResponse = false;
                let isFirstStreamRequest = this.connectionTable[data.requestId] == null && data.header.stream;
                let isLastStreamRequest = this.connectionTable[data.requestId] != null && !data.header.stream;
                let dontSendRequestResponse = (isFirstStreamRequest || isLastStreamRequest);
                this.connectionTable[data.requestId] = data.origin;
                // Send data to every action 
                for (let action of targetEndpoint.actions) {
                    // Get connection to given action endpoint
                    if (action.endpoint == null || action.endpoint.url == null)
                        continue;
                    let targetConnection;
                    for (let connection of this.outputPort.connections) {
                        let endpoints = connection.getOtherPort(this.outputPort).parent.getAvailableEndpoints();
                        if (endpoints.find(endpoint => endpoint.url == action.endpoint.url && Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_6__["arrayEquals"])(endpoint.supportedMethods, action.endpoint.supportedMethods)) != null) {
                            targetConnection = connection;
                            break;
                        }
                    }
                    if (targetConnection == null)
                        continue;
                    let isStream = action.endpoint.protocol == _enums_Protocol__WEBPACK_IMPORTED_MODULE_8__["Protocol"].WebSockets || action.endpoint.grpcMode != _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_7__["gRPCMode"].Unary;
                    if (data.header.stream && isStream && action.endpoint.grpcMode == _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_7__["gRPCMode"]["Server Streaming"]
                        && !dontSendRequestResponse || dontSendRequestResponse && !isStream) {
                        continue;
                    }
                    let requestId = (isStream && !data.header.stream && !isLastStreamRequest) ? Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_6__["UUID"])() : data.requestId;
                    let request = new _RequestData__WEBPACK_IMPORTED_MODULE_5__["RequestData"]();
                    let epRef = new _Endpoint__WEBPACK_IMPORTED_MODULE_2__["EndpointRef"]();
                    epRef.endpoint = action.endpoint;
                    epRef.method = _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["EndpointActionHTTPMethod"][action.method] == "Inherit" ? data.header.endpoint.method : _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"][_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["EndpointActionHTTPMethod"][action.method]];
                    request.header = new _RequestData__WEBPACK_IMPORTED_MODULE_5__["RequestDataHeader"](epRef, action.endpoint.protocol, data.header.stream);
                    request.origin = targetConnection;
                    request.originID = this.originID;
                    request.requestId = requestId;
                    if (isStream)
                        this.outputPort.sendData(request, targetConnection);
                    else {
                        if (!data.header.stream)
                            sendResponse = true;
                        if (action.asynchronous) {
                            this.outputPort.sendData(request, targetConnection);
                        }
                        else {
                            yield this.outputPort.sendData(request, targetConnection);
                            if (data.sendResponse)
                                this.connectionTable[requestId] = data.origin;
                        }
                    }
                }
                // if(isFirstStreamRequest)
                //     this.connectionTable[data.requestId] = data.origin;
                if (targetEndpoint.grpcMode == _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_7__["gRPCMode"]["Server Streaming"]) {
                    if (isFirstStreamRequest) {
                        // Initiate server stream 
                        this.serverStream(this.getResponse(data), targetEndpoint);
                    }
                    if (isLastStreamRequest)
                        this.connectionTable[data.requestId] = null;
                }
                if ((sendResponse || targetEndpoint.actions.length == 0 && !data.header.stream) && data.sendResponse) {
                    //Send response back
                    //this.connectionTable[data.requestId] = data.origin;
                    console.log("send response");
                    yield this.sendData(this.getResponse(data));
                }
            }
        });
    }
    sendData(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let targetConnection = this.connectionTable[response.responseId];
            if (targetConnection == null)
                return;
            let result = yield this.inputPort.sendData(response, targetConnection);
            if (!result && response.header.stream) {
                response.header.stream = false;
                response.requestId = response.responseId;
                response.responseId = null;
                let res = this.outputPort.sendData(response, response.origin);
                if (res) {
                    this.connectionTable[response.responseId] = null;
                }
            }
            else {
                this.connectionTable[response.responseId] = null;
            }
        });
    }
    stream(data, streamingEndpoint) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_6__["sleep"])(700);
            if (this.connectionTable[data.responseId] == null || (streamingEndpoint.grpcMode != _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_7__["gRPCMode"]["Server Streaming"] &&
                streamingEndpoint.grpcMode != _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_7__["gRPCMode"]["Bidirectional Streaming"] &&
                streamingEndpoint.protocol != _enums_Protocol__WEBPACK_IMPORTED_MODULE_8__["Protocol"].WebSockets) ||
                this.options.endpoints.indexOf(streamingEndpoint) == -1)
                return;
            yield this.sendData(data);
            yield this.stream(data, streamingEndpoint);
        });
    }
    serverStream(data, streamingEndpoint) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_6__["sleep"])(700);
            if (streamingEndpoint.actions.filter(action => action.endpoint.grpcMode != _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_7__["gRPCMode"]["Server Streaming"]).length == 0 || this.connectionTable[data.responseId] == null || (streamingEndpoint.grpcMode != _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_7__["gRPCMode"]["Server Streaming"]) ||
                this.getEndpoints().indexOf(streamingEndpoint) == -1)
                return;
            for (let action of streamingEndpoint.actions) {
                // Get connection to given action endpoint
                if (action.endpoint == null || action.endpoint.url == null || action.endpoint.grpcMode != _enums_gRPCMode__WEBPACK_IMPORTED_MODULE_7__["gRPCMode"].Unary || action.endpoint.protocol == _enums_Protocol__WEBPACK_IMPORTED_MODULE_8__["Protocol"].WebSockets)
                    continue;
                let targetConnection;
                for (let connection of this.outputPort.connections) {
                    let endpoints = connection.getOtherPort(this.outputPort).parent.getAvailableEndpoints();
                    if (endpoints.find(endpoint => endpoint.url == action.endpoint.url && Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_6__["arrayEquals"])(endpoint.supportedMethods, action.endpoint.supportedMethods)) != null) {
                        targetConnection = connection;
                        break;
                    }
                }
                if (targetConnection == null)
                    continue;
                let newReqId = Object(src_shared_ExtensionMethods__WEBPACK_IMPORTED_MODULE_6__["UUID"])();
                this.connectionTable[newReqId] = data.origin;
                let request = new _RequestData__WEBPACK_IMPORTED_MODULE_5__["RequestData"]();
                let epRef = new _Endpoint__WEBPACK_IMPORTED_MODULE_2__["EndpointRef"]();
                epRef.endpoint = action.endpoint;
                epRef.method = _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["EndpointActionHTTPMethod"][action.method] == "Inherit" ? data.header.endpoint.method : _enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"][_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["EndpointActionHTTPMethod"][action.method]];
                request.header = new _RequestData__WEBPACK_IMPORTED_MODULE_5__["RequestDataHeader"](epRef, action.endpoint.protocol);
                request.origin = targetConnection;
                request.originID = this.originID;
                request.requestId = newReqId;
                yield this.outputPort.sendData(request, targetConnection);
            }
            yield this.sendData(data);
            yield this.serverStream(data, streamingEndpoint);
        });
    }
}
class WebServerOptions extends _EndpointOperator__WEBPACK_IMPORTED_MODULE_1__["EndpointOptions"] {
    constructor() {
        super(...arguments);
        this.type = _enums_APIType__WEBPACK_IMPORTED_MODULE_9__["APIType"].REST;
    }
}


/***/ }),

/***/ "yf1P":
/*!****************************************************************!*\
  !*** ./src/app/board/componentmenu/componentmenu.component.ts ***!
  \****************************************************************/
/*! exports provided: ComponentmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentmenuComponent", function() { return ComponentmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_models_enums_DatabaseType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/enums/DatabaseType */ "YzkR");
/* harmony import */ var src_models_enums_LoadBalancerType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/enums/LoadBalancerType */ "XDIl");
/* harmony import */ var src_models_enums_WritePolicy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/enums/WritePolicy */ "XDID");
/* harmony import */ var _components_api_api_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/api/api.component */ "N3Nn");
/* harmony import */ var _components_apigateway_apigateway_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/apigateway/apigateway.component */ "9kwT");
/* harmony import */ var _components_cache_cache_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/cache/cache.component */ "OF2t");
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/client/client.component */ "+MmB");
/* harmony import */ var _components_clientcluster_clientcluster_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/clientcluster/clientcluster.component */ "m5Z1");
/* harmony import */ var _components_cloudstorage_cloudstorage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/cloudstorage/cloudstorage.component */ "pWwo");
/* harmony import */ var _components_database_database_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/database/database.component */ "K+oz");
/* harmony import */ var _components_loadbalancer_loadbalancer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/loadbalancer/loadbalancer.component */ "bjmQ");
/* harmony import */ var _components_messagequeue_messagequeue_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/messagequeue/messagequeue.component */ "xuq0");
/* harmony import */ var _components_proxy_proxy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/proxy/proxy.component */ "Zebe");
/* harmony import */ var _components_pubsub_pubsub_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/pubsub/pubsub.component */ "W6y1");
/* harmony import */ var _components_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/textfield/textfield.component */ "/Mf1");
/* harmony import */ var _components_webserver_webserver_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/webserver/webserver.component */ "z8l2");
/* harmony import */ var _components_cdn_cdn_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/cdn/cdn.component */ "9Ctj");
/* harmony import */ var _placing_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../placing.service */ "epgU");
/* harmony import */ var src_app_viewing_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/viewing.service */ "nesx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_DelayedHoverDirective__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/DelayedHoverDirective */ "42aj");























const _c0 = ["board"];
const _c1 = ["placingItemRef"];
function ComponentmenuComponent_div_0_div_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentmenuComponent_div_0_div_7_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentmenuComponent_div_0_div_7_div_8_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentmenuComponent_div_0_div_7_div_8_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.showInfo(item_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentmenuComponent_div_0_div_7_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ComponentmenuComponent_div_0_div_7_div_8_Template_div_mousedown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r13 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.dragItem(item_r13); })("delayed-hover", function ComponentmenuComponent_div_0_div_7_div_8_Template_div_delayed_hover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r13 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.hoverItem(item_r13); })("mouseout", function ComponentmenuComponent_div_0_div_7_div_8_Template_div_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.leaveItem(); })("touchstart", function ComponentmenuComponent_div_0_div_7_div_8_Template_div_touchstart_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r13 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.dragItem(item_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ComponentmenuComponent_div_0_div_7_div_8_button_4_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r13.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.mark);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r13.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.viewingService.isHelpersDisabled());
} }
function ComponentmenuComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentmenuComponent_div_0_div_7_Template_div_click_1_listener() { const category_r8 = ctx.$implicit; return category_r8.isOpen = !category_r8.isOpen; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ComponentmenuComponent_div_0_div_7_span_4_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ComponentmenuComponent_div_0_div_7_ng_template_5_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ComponentmenuComponent_div_0_div_7_div_8_Template, 5, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r8 = ctx.$implicit;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", category_r8.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r8.isOpen)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r8.items);
} }
function ComponentmenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ComponentmenuComponent_div_0_Template_input_input_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.search(_r6.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentmenuComponent_div_0_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.toggleWindow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ComponentmenuComponent_div_0_div_7_Template, 12, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
} }
function ComponentmenuComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r1.currentItem.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.currentItem.caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.currentItem.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ComponentmenuComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r2.placingItem.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.placingItem.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ComponentmenuComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentmenuComponent_ng_template_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.toggleWindow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComponentmenuComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentmenuComponent_div_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.closeInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.currentInfoComponent.caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.currentInfoComponent.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r5.currentInfoComponent.info, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class MenuItem {
    constructor(component, caption, mark, imageUrl, info, presetOptions = null) {
        this.component = component;
        this.caption = caption;
        this.mark = mark;
        this.imageUrl = imageUrl;
        this.presetOptions = presetOptions;
        this.info = info;
        this.color = component.getColor() || "#6059DF";
    }
}
class Category {
    constructor(title, items = []) {
        this.title = title;
        this.items = items;
    }
}
class ComponentmenuComponent {
    constructor(placingService, viewingService) {
        this.placingService = placingService;
        this.viewingService = viewingService;
        this.allCategories = [];
        this.categories = [];
        this.isOpen = true;
        this.isInfoOpen = false;
        this.mouseUp = () => {
            this.placingItem = null;
            window.removeEventListener("mouseup", this.mouseUp);
            window.removeEventListener("mousemove", this.mouseMove);
            window.removeEventListener("touchend", this.mouseUp);
            window.removeEventListener("touchmove", this.mouseMove);
            this.placingService.creatingItem = null;
            this.placingService.stopCreating();
            return true;
        };
        this.mouseMove = (e) => {
            if (e instanceof MouseEvent) {
                this.placingItemRef.nativeElement.style.width = `${40 * Math.max(1, this.placingService.boardScale)}px`;
                this.placingItemRef.nativeElement.style.height = `${40 * Math.max(1, this.placingService.boardScale)}px`;
                this.placingItemRef.nativeElement.style.left = `${e.clientX - (20 * Math.max(1, this.placingService.boardScale))}px`;
                this.placingItemRef.nativeElement.style.top = `${e.clientY - (20 * Math.max(1, this.placingService.boardScale))}px`;
            }
            else if (e instanceof TouchEvent) {
                this.placingItemRef.nativeElement.style.width = `${40 * Math.max(1, this.placingService.boardScale)}px`;
                this.placingItemRef.nativeElement.style.height = `${40 * Math.max(1, this.placingService.boardScale)}px`;
                this.placingItemRef.nativeElement.style.left = `${e.touches[0].clientX - (20 * Math.max(1, this.placingService.boardScale))}px`;
                this.placingItemRef.nativeElement.style.top = `${e.touches[0].clientY - (20 * Math.max(1, this.placingService.boardScale))}px`;
            }
        };
        // Create Categories
        this.allCategories.push(new Category("Client-side", [
            new MenuItem(_components_client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"], "Basic Client", "", "./assets/client.svg", '<p>Client is the component, that simulates either a real client, or client side application on any device.</p><p>Use the output port to connect to other compoenents via their input port. Select endpoint you want to connect to and the HTTP method used.</p><p>Once connected to an endpoint, you can use the <span class="highlight">Send data</span> button. To send data automatically, use the loop icon next to <span class="highlight">Send data</span> button.</p>'),
            new MenuItem(_components_clientcluster_clientcluster_component__WEBPACK_IMPORTED_MODULE_8__["ClientclusterComponent"], "Client Cluster", "", "./assets/clientcluster.svg", '<p>Client cluster represents multiple clients. It sends data to any endpoint available at given speed.<p>To start sending data, click the <span class="highlight">Start sending data</span> button.</p>')
        ]));
        this.allCategories.push(new Category("Server-side", [
            new MenuItem(_components_webserver_webserver_component__WEBPACK_IMPORTED_MODULE_16__["WebserverComponent"], "HTTP Web Server", "HTTP", "./assets/webserver.svg", '<p>Web server component simulates an HTTP web server that can accept requests and send them to an API.</p><p>Use the input port to connect a client and the output port to connect other services and APIs.</p>'),
            new MenuItem(_components_apigateway_apigateway_component__WEBPACK_IMPORTED_MODULE_5__["ApiGatewayComponent"], "Web API Gateway", "GW", "./assets/apigateway.svg", '<p>API gateway is used to reduce number of requests, the client needs to send.</p><p>Use the input port to connect a client and the output port to connect other services and APIs.</p><p>There are 5 types of endpoints available, every type has some unique properties. Each endpoint can have actions that will be triggered on each request. For more info about each endpoint type, use the <span class="highlight">?</span> icon.</p>'),
            new MenuItem(_components_api_api_component__WEBPACK_IMPORTED_MODULE_4__["ApiComponent"], "Web API Service", "API", "./assets/api.svg", '<p>API is general component to simulate any API or microservice.</p> <p>Use the input port to connect a client and the output port to connect other services and APIs. </p> <p>API can be of 5 available types, each used for different purposes. You can add any number of endpoints that can have different actions like sending new requests to other APIs or storing data to database.</p>'),
        ]));
        this.allCategories.push(new Category("Storage", [
            new MenuItem(_components_database_database_component__WEBPACK_IMPORTED_MODULE_10__["DatabaseComponent"], "SQL Database", "SQL", "./assets/database.svg", '<p>Database component simulates a database server with one default endpoint.</p> <p>Use the input port to connect services to database and receive data through.</p> <p>You can use the <span class="highlight">Shard Database</span> action to shard the database and create 3 default shards. </p>', { type: src_models_enums_DatabaseType__WEBPACK_IMPORTED_MODULE_1__["DatabaseType"].SQL }),
            new MenuItem(_components_database_database_component__WEBPACK_IMPORTED_MODULE_10__["DatabaseComponent"], "NoSQL Database", "NoSQL", "./assets/database.svg", '<p>Database component simulates a database server with one default endpoint.</p> <p>Use the input port to connect services to database and receive data through.</p> <p>You can use the <span class="highlight">Shard Database</span> action to shard the database and create 3 default shards. </p>', { type: src_models_enums_DatabaseType__WEBPACK_IMPORTED_MODULE_1__["DatabaseType"].NoSQL }),
            new MenuItem(_components_cloudstorage_cloudstorage_component__WEBPACK_IMPORTED_MODULE_9__["CloudStorageComponent"], "Cloud Storage", "CLOUD", "./assets/cloudstorage.svg", '<p>Cloud storage component simulates any cloud storage with one default endpoint.</p> <p>Use the input port to connect services to cloud and receive data through.</p>'),
            new MenuItem(_components_cdn_cdn_component__WEBPACK_IMPORTED_MODULE_17__["CDNComponent"], "Content Delivery Network", "CDN", "./assets/cdn.svg", '<p>CDN component simulates a Content Delivery Network with one default endpoint.</p> <p>Use the input port to connect services to CDN and receive data through.</p>'),
        ]));
        this.allCategories.push(new Category("Caches", [
            new MenuItem(_components_cache_cache_component__WEBPACK_IMPORTED_MODULE_6__["CacheComponent"], "Write-Through Cache", "WT", "./assets/cache.svg", '<p>Cache component simulates a distributed cache with a <span class="underline">random</span> hit/miss chance.</p> <p>Receive data through input port. The output port is connected to <span class="highlight">Database</span>.</p> <p>You can change Write and Replacement policies to better specify the behaviour of your cache.</p>', { writePolicy: src_models_enums_WritePolicy__WEBPACK_IMPORTED_MODULE_3__["WritePolicy"]['Write-Through'] }),
            new MenuItem(_components_cache_cache_component__WEBPACK_IMPORTED_MODULE_6__["CacheComponent"], "Write-Back Cache", "WB", "./assets/cache.svg", '<p>Cache component simulates a distributed cache with a <span class="underline">random</span> hit/miss chance.</p> <p>Receive data through input port. The output port is connected to <span class="highlight">Database</span>.</p> <p>You can change Write and Replacement policies to better specify the behaviour of your cache.</p>', { writePolicy: src_models_enums_WritePolicy__WEBPACK_IMPORTED_MODULE_3__["WritePolicy"]['Write-Back (Behind)'] })
        ]));
        this.allCategories.push(new Category("Load Balancers & Proxies", [
            new MenuItem(_components_loadbalancer_loadbalancer_component__WEBPACK_IMPORTED_MODULE_11__["LoadbalancerComponent"], "Layer 7 Load Balancer", "L7", "./assets/loadbalancer.svg", '<p>Load Balancer component is used to balance load between multiple services. </p> <p>Use the input port to receive data and balance it between connections on output port.</p> <p>Load balancer can work in <span class="highlight">Layer 7</span> or <span class="highlight">Layer 4</span> mode. You can change the balance algorithm to any of 4 available types. </p> '),
            new MenuItem(_components_loadbalancer_loadbalancer_component__WEBPACK_IMPORTED_MODULE_11__["LoadbalancerComponent"], "Layer 4 Load Balancer", "L4", "./assets/loadbalancer.svg", '<p>Load Balancer component is used to balance load between multiple services. </p> <p>Use the input port to receive data and balance it between connections on output port.</p> <p>Load balancer can work in <span class="highlight">Layer 7</span> or <span class="highlight">Layer 4</span> mode. You can change the balance algorithm to any of 4 available types. </p> ', { type: src_models_enums_LoadBalancerType__WEBPACK_IMPORTED_MODULE_2__["LoadBalancerType"]['Layer 4'] }),
            new MenuItem(_components_proxy_proxy_component__WEBPACK_IMPORTED_MODULE_13__["ProxyComponent"], "Proxy", "PROXY", "./assets/proxy.svg", '<p>Proxy component acts like a man in the middle between client and server. </p> <p>Use the input port to receive data and route it to server through output port.</p>')
        ]));
        this.allCategories.push(new Category("Async Communication", [
            new MenuItem(_components_messagequeue_messagequeue_component__WEBPACK_IMPORTED_MODULE_12__["MessagequeueComponent"], "Message Queue", "MQ", "./assets/messagequeue.svg", '<p>Message Queue component is used to simulate a single message queue, <span class="underline">not a full fledged message broker</span>.</p> <p>To publish message to queue, use the input port and send data to an endpoint. Consumers can be connected to output port of message queue. These <span class="underline">consumers need to have an endpoint with the same URL</span>.</p> <p>Message can be only send to one consumer. In case of more consumers, the messages will be sent in round robin manner. Consumers can perform actions on data receive. </p> '),
            new MenuItem(_components_pubsub_pubsub_component__WEBPACK_IMPORTED_MODULE_14__["PubsubComponent"], "Publisher/Subscriber Model", "PUBSUB", "./assets/pubsub.svg", '<p>Pub/Sub is used for publishers sending data to a specified topic, to which can be connected any number of subscribers.</p> <p>To publish a message, connect to input port and select a topic as an endpoint. You can create any number of topics. Subcribers connect to output port and select any number of topics they want to subscribe. <span class="underline">Subcribers must have an endpoint with the same url as the topic they subscribe</span>.</p>'),
        ]));
        this.allCategories.push(new Category("Other", [
            new MenuItem(_components_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_15__["TextfieldComponent"], "Text Field", "TEXT", "./assets/text.svg", '<p>General text field with customizable font size and style.</p>'),
        ]));
        this.categories = this.allCategories;
    }
    toggleWindow() {
        this.isOpen = !this.isOpen;
        this.categories = this.allCategories;
    }
    search(value) {
        this.categories = [];
        for (let category of this.allCategories) {
            let relevantItems = category.items.filter(i => this.isSearchRelevant(i, value));
            if (relevantItems.length > 0)
                this.categories.push(new Category(category.title, relevantItems));
        }
    }
    hoverItem(item) {
        this.currentItem = item;
    }
    leaveItem() {
        this.currentItem = null;
    }
    isSearchRelevant(item, searchValue) {
        let isRelevant = item.caption.toLowerCase().indexOf(searchValue.toLowerCase()) != -1;
        isRelevant = isRelevant || item.mark.toLowerCase().indexOf(searchValue.toLowerCase()) != -1;
        return isRelevant;
    }
    dragItem(item) {
        this.placingService.startCreating(item.component, item.presetOptions);
        this.placingItem = item;
        window.addEventListener("mousemove", this.mouseMove);
        window.addEventListener("mouseup", this.mouseUp);
        window.addEventListener("touchmove", this.mouseMove);
        window.addEventListener("touchend", this.mouseUp);
        return false;
    }
    showInfo(item) {
        this.currentInfoComponent = item;
        this.isInfoOpen = true;
    }
    closeInfo() {
        this.isInfoOpen = false;
        this.currentInfoComponent = null;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
}
ComponentmenuComponent.ɵfac = function ComponentmenuComponent_Factory(t) { return new (t || ComponentmenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_placing_service__WEBPACK_IMPORTED_MODULE_18__["PlacingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_viewing_service__WEBPACK_IMPORTED_MODULE_19__["ViewingService"])); };
ComponentmenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComponentmenuComponent, selectors: [["app-componentmenu"]], viewQuery: function ComponentmenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.connectionRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.placingItemRef = _t.first);
    } }, decls: 6, vars: 5, consts: [["class", "component-menu-window", 4, "ngIf", "ngIfElse"], ["class", "item-description", 3, "backgroundColor", 4, "ngIf"], ["class", "section-item placing-item", 3, "backgroundColor", 4, "ngIf"], ["closedWindow", ""], ["class", "component-info-window", 4, "ngIf"], [1, "component-menu-window"], [1, "top"], ["type", "text", "autocomplete", "off", "spellcheck", "false", "placeholder", "search", 1, "search", 3, "input"], ["searchBar", ""], [1, "window-close", 3, "click"], [1, "fas", "fa-minus"], [1, "main"], ["class", "section", 3, "active", 4, "ngFor", "ngForOf"], [1, "section"], [1, "header", 3, "click"], [1, "title"], ["class", "icon", 4, "ngIf", "ngIfElse"], ["closed", ""], [1, "content"], ["class", "section-item", "delay", "300", 3, "backgroundColor", "mousedown", "delayed-hover", "mouseout", "touchstart", 4, "ngFor", "ngForOf"], [1, "section-item", "fill"], [1, "icon"], [1, "fas", "fa-caret-up"], [1, "fas", "fa-caret-down"], ["delay", "300", 1, "section-item", 3, "mousedown", "delayed-hover", "mouseout", "touchstart"], [1, "caption"], [3, "src"], ["class", "info", 3, "click", 4, "ngIf"], [1, "info", 3, "click"], [1, "far", "fa-question-circle"], [1, "item-description"], [1, "section-item", "placing-item"], ["placingItemRef", ""], [1, "arrow-open", 3, "click"], [1, "fas", "fa-chevron-right"], [1, "component-info-window"], [1, "component-info-title"], [1, "component-info-icon"], [3, "innerHtml"], [1, "close", 3, "click"], [1, "fas", "fa-times"]], template: function ComponentmenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ComponentmenuComponent_div_0_Template, 8, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComponentmenuComponent_div_1_Template, 5, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ComponentmenuComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ComponentmenuComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ComponentmenuComponent_div_5_Template, 8, 3, "div", 4);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentItem != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.placingItem != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInfoOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _shared_DelayedHoverDirective__WEBPACK_IMPORTED_MODULE_21__["DelayedHoverDirective"]], styles: [".component-menu-window {\n  position: absolute;\n  top: 20%;\n  bottom: 25%;\n  left: 0;\n  width: 15rem;\n  min-height: 400px;\n  padding-bottom: 2em;\n  overflow-y: scroll;\n  background-color: var(--background-light);\n  overflow-x: hidden;\n  overflow-y: scroll;\n  color: var(--text);\n  border: 0.15rem solid var(--border);\n  border-left: 0;\n}\n.component-menu-window .top {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.3em;\n}\n.component-menu-window .top .search {\n  outline: none;\n  background-color: var(--background-dark);\n  border: 0.15rem solid var(--border);\n  color: var(--text);\n  padding: 0.2em 0 0.2em 0.5em;\n  font-size: 1rem;\n  max-width: 70%;\n}\n.component-menu-window .top .search::-moz-placeholder {\n  -moz-transition: transform 0.1s ease-out;\n  transition: transform 0.1s ease-out;\n}\n.component-menu-window .top .search:-ms-input-placeholder {\n  -ms-transition: transform 0.1s ease-out;\n  transition: transform 0.1s ease-out;\n}\n.component-menu-window .top .search::placeholder {\n  transition: transform 0.1s ease-out;\n}\n.component-menu-window .top .search:hover::-moz-placeholder {\n  transform: translateX(10px);\n}\n.component-menu-window .top .search:hover:-ms-input-placeholder {\n  transform: translateX(10px);\n}\n.component-menu-window .top .search:hover::placeholder {\n  transform: translateX(10px);\n}\n.component-menu-window .top .window-close:hover {\n  cursor: pointer;\n}\n.component-menu-window .main {\n  display: flex;\n  flex-flow: column nowrap;\n  margin-top: 0.5em;\n  gap: 0.3em;\n}\n.section .header {\n  width: 100%;\n  font-size: 1.1rem;\n  padding: 0.2em 0.3em;\n  background-color: var(--background);\n  filter: brightness(0.95);\n  display: flex;\n  justify-content: space-between;\n}\n.section .header:hover {\n  cursor: default;\n}\n.section.active .content {\n  display: flex;\n}\n.section .content {\n  display: none;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 0.4em;\n  position: relative;\n}\n.section .content .section-item {\n  background-color: var(--main);\n  border-radius: 0.3em;\n  padding: 0.7em;\n  flex-basis: 22%;\n  margin-bottom: 0.3em;\n  position: relative;\n  transition: filter 0.15s ease-out, box-shadow 0.15s ease-in-out;\n}\n.section .content .section-item:hover {\n  filter: brightness(1.15);\n  box-shadow: 0 0 10px 0 #696969;\n  cursor: pointer;\n}\n.section .content .section-item img {\n  vertical-align: bottom;\n}\n.section .content .section-item .info {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  color: #B0F1E1;\n  height: 1em;\n  width: 1em;\n  outline: none;\n  border: 0;\n  background-color: transparent;\n  padding: 0;\n  cursor: pointer;\n}\n.section .content .section-item .info:hover {\n  transform: scale(1.2);\n}\n.section .content .section-item .caption {\n  color: #fff;\n  font-size: 0.5em;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n}\n.section .content .section-item.fill {\n  flex-shrink: 1;\n  background: none;\n  opacity: 0;\n  pointer-events: none;\n  max-height: 0;\n  padding: 0;\n  margin: 0;\n}\n/* width */\n::-webkit-scrollbar {\n  width: 0.4rem;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n}\n.arrow-open {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 5px;\n  top: 50%;\n  bottom: 50%;\n  font-size: 1.7rem;\n  width: 1.4em;\n  height: 1.4em;\n  color: var(--text);\n  background-color: transparent;\n  border-radius: 50%;\n  transition: background-color 0.2s ease-out, color 0.2s ease-out, left 0.2s ease-out;\n}\n.arrow-open:hover {\n  color: var(--text);\n  background-color: var(--main);\n  left: 10px;\n  cursor: pointer;\n}\n.item-description {\n  position: absolute;\n  top: 50%;\n  bottom: 50%;\n  left: 16rem;\n  width: 9rem;\n  height: 5.75rem;\n  font-size: 0.7rem;\n  padding: 0.4em 0;\n  color: #fff;\n  border: 0.2rem solid var(--border);\n  background-color: var(--main);\n  text-align: center;\n}\n.item-description span {\n  margin: 0.1em;\n}\n.item-description hr {\n  margin: 0.5em 0 0.5em;\n  background-color: #fff;\n  border: 1px solid #fff;\n}\n.item-description img {\n  width: 33%;\n}\n.placing-item {\n  position: absolute;\n  pointer-events: none;\n}\n.placing-item.section-item {\n  background-color: var(--background-dark);\n  border-radius: 0.4em;\n  padding: 0.3em;\n}\n.placing-item.section-item img {\n  vertical-align: bottom;\n}\n.component-info-window {\n  color: var(--text);\n  position: absolute;\n  top: 15%;\n  bottom: 30%;\n  right: 25%;\n  left: 25%;\n  background-color: var(--background);\n  border: 0.1em solid var(--border);\n  padding: 2em;\n  overflow-y: scroll;\n}\n.component-info-window .component-info-title {\n  margin-bottom: 0.5em;\n  display: block;\n  text-align: center;\n  font-size: 1.1em;\n}\n.component-info-window .component-info-icon {\n  margin: 0 auto;\n  height: 4em;\n  width: 4em;\n  padding: 1em;\n  background-color: var(--main);\n  border-radius: 0.4em;\n  margin-bottom: 2em;\n}\n.component-info-window p {\n  margin: 1em 0;\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  font-weight: 200;\n  font-size: 0.8em;\n}\n.component-info-window .highlight {\n  color: var(--main);\n  font-weight: 400;\n}\n.component-info-window .underline {\n  text-decoration: underline;\n}\n.component-info-window .close {\n  outline: 0;\n  border: 0;\n  cursor: pointer;\n  position: absolute;\n  top: 0.25em;\n  right: 0.25em;\n  font-size: 1em;\n  color: var(--text);\n  background-color: transparent;\n  width: 1.5em;\n  height: 1.5em;\n  transition: color 0.1s linear;\n}\n.component-info-window .close:hover {\n  color: var(--main);\n}\n.component-info-window::-webkit-scrollbar {\n  width: 0;\n}\n.component-info-window::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.component-info-window::-webkit-scrollbar-thumb {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbXBvbmVudG1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUdaO0FBRlk7RUFDSSx3Q0FBQTtFQUFBLG1DQUFBO0FBSWhCO0FBTFk7RUFDSSx1Q0FBQTtFQUFBLG1DQUFBO0FBSWhCO0FBTFk7RUFDSSxtQ0FBQTtBQUloQjtBQURnQjtFQUNJLDJCQUFBO0FBR3BCO0FBSmdCO0VBQ0ksMkJBQUE7QUFHcEI7QUFKZ0I7RUFDSSwyQkFBQTtBQUdwQjtBQUNRO0VBQ0ksZUFBQTtBQUNaO0FBRUk7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFBUjtBQUlJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRFI7QUFFUTtFQUNJLGVBQUE7QUFBWjtBQUdJO0VBQ0ksYUFBQTtBQURSO0FBR0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURSO0FBRVE7RUFDSSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0RBQUE7QUFBWjtBQUNZO0VBQ0ksd0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFDaEI7QUFDWTtFQUNJLHNCQUFBO0FBQ2hCO0FBQ1k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBQ2hCO0FBQWdCO0VBQ0kscUJBQUE7QUFFcEI7QUFDWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDaEI7QUFFUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFaO0FBSUEsVUFBQTtBQUNBO0VBQ0ksYUFBQTtBQURKO0FBSUEsVUFBQTtBQUNBO0VBQ0ksMENBQUE7QUFESjtBQUlBLFdBQUE7QUFDQTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtRkFBQTtBQUFKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFDUjtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7QUFFUjtBQUFJO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBRVI7QUFBSTtFQUNJLFVBQUE7QUFFUjtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQUVKO0FBREk7RUFDSSx3Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQUdSO0FBRlE7RUFDSSxzQkFBQTtBQUlaO0FBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFHSjtBQUZJO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUlSO0FBRkk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBSVI7QUFGSTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFJUjtBQUZJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUlSO0FBRkk7RUFDSSwwQkFBQTtBQUlSO0FBRkk7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBSVI7QUFIUTtFQUNJLGtCQUFBO0FBS1o7QUFGSTtFQUNJLFFBQUE7QUFJUjtBQURJO0VBQ0ksNkJBQUE7QUFHUjtBQUFJO0VBQ0ksNkJBQUE7QUFFUiIsImZpbGUiOiJjb21wb25lbnRtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBvbmVudC1tZW51LXdpbmRvd3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMCU7XG4gICAgYm90dG9tOiAyNSU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTVyZW07XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgJiAudG9we1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMC4zZW07XG4gICAgICAgICYgLnNlYXJjaHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmspO1xuICAgICAgICAgICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgICAgICAgICBjb2xvcjp2YXIoLS10ZXh0KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMmVtIDAgMC4yZW0gMC41ZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVye1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2Utb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlcntcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmIC53aW5kb3ctY2xvc2U6aG92ZXJ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJiAubWFpbntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICAgICAgZ2FwOiAwLjNlbTtcbiAgICB9XG59XG4uc2VjdGlvbntcbiAgICAmIC5oZWFkZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgcGFkZGluZzogMC4yZW0gMC4zZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45NSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmFjdGl2ZSAuY29udGVudHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgJiAuY29udGVudHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNGVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICYgLnNlY3Rpb24taXRlbXtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDIyJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMTVzIGVhc2Utb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xNSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAjNjk2OTY5O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYgaW1ne1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmIC5pbmZve1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICByaWdodDogMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjQjBGMUUxO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYgLmNhcHRpb257XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYgLnNlY3Rpb24taXRlbS5maWxse1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDAuNHJlbTtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFycm93LW9wZW57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgYm90dG9tOiA1MCU7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgd2lkdGg6IDEuNGVtO1xuICAgIGhlaWdodDogMS40ZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1vdXQsIGNvbG9yIDAuMnMgZWFzZS1vdXQsIGxlZnQgMC4ycyBlYXNlLW91dDtcbiAgICAmOmhvdmVye1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pOyAgICBcbiAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cbi5pdGVtLWRlc2NyaXB0aW9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBib3R0b206IDUwJTtcbiAgICBsZWZ0OiAxNnJlbTtcbiAgICB3aWR0aDogOXJlbTtcbiAgICBoZWlnaHQ6IDUuNzVyZW07XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgcGFkZGluZzogMC40ZW0gMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAmIHNwYW57XG4gICAgICAgIG1hcmdpbjogMC4xZW07XG4gICAgfVxuICAgICYgaHJ7XG4gICAgICAgIG1hcmdpbjogMC41ZW0gMCAwLjVlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICB9XG4gICAgJiBpbWd7XG4gICAgICAgIHdpZHRoOiAzMyU7XG4gICAgfVxufVxuLnBsYWNpbmctaXRlbXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgJi5zZWN0aW9uLWl0ZW17XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xuICAgICAgICBwYWRkaW5nOiAwLjNlbTtcbiAgICAgICAgJiBpbWd7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICB9XG4gICAgfVxufVxuLmNvbXBvbmVudC1pbmZvLXdpbmRvd3tcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTUlO1xuICAgIGJvdHRvbTogMzAlO1xuICAgIHJpZ2h0OiAyNSU7XG4gICAgbGVmdDogMjUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIGJvcmRlcjogMC4xZW0gc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICYgLmNvbXBvbmVudC1pbmZvLXRpdGxle1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICB9XG4gICAgJiAuY29tcG9uZW50LWluZm8taWNvbntcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGhlaWdodDogNGVtO1xuICAgICAgICB3aWR0aDogNGVtO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgIH1cbiAgICAmIHB7XG4gICAgICAgIG1hcmdpbjogMWVtIDA7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgfVxuICAgICYgLmhpZ2hsaWdodHtcbiAgICAgICAgY29sb3I6IHZhcigtLW1haW4pO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICAmIC51bmRlcmxpbmV7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgICAmIC5jbG9zZXtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwLjI1ZW07XG4gICAgICAgIHJpZ2h0OiAwLjI1ZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMS41ZW07XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMXMgbGluZWFyO1xuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW1haW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgfVxuICAgIFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcbiAgICB9XG59Il19 */"], encapsulation: 2 });


/***/ }),

/***/ "z8l2":
/*!*******************************************************************!*\
  !*** ./src/app/board/components/webserver/webserver.component.ts ***!
  \*******************************************************************/
/*! exports provided: WebserverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebserverComponent", function() { return WebserverComponent; });
/* harmony import */ var src_models_Endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/Endpoint */ "CIzy");
/* harmony import */ var src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/enums/APIType */ "G1KI");
/* harmony import */ var src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/enums/gRPCMode */ "KpZ9");
/* harmony import */ var src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/enums/HTTPMethod */ "axtL");
/* harmony import */ var src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/enums/Protocol */ "qEx5");
/* harmony import */ var src_models_WebServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/WebServer */ "ybgb");
/* harmony import */ var _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/OperatorComponent */ "RW4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../info-tooltip/info-tooltip.component */ "q+md");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Shared_endpoint_select_endpoint_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Shared/endpoint-select/endpoint-select.component */ "acqn");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















function WebserverComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", type_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.APIType[type_r4]);
} }
class WebserverComponent extends _Shared_OperatorComponent__WEBPACK_IMPORTED_MODULE_6__["OperatorComponent"] {
    constructor() {
        super(...arguments);
        this.LogicWebServer = new src_models_WebServer__WEBPACK_IMPORTED_MODULE_5__["WebServer"]();
        this.connectableEndpoints = [];
    }
    handleClick(event) {
        super.handleClick(event);
        this.updateSelection();
    }
    updateSelection() {
        this.connectableEndpoints = this.LogicWebServer.getConnectableEndpoints();
        for (let j = 0; j < this.LogicWebServer.options.endpoints.length; j++) {
            let endpoint = this.LogicWebServer.options.endpoints[j];
            for (let i = 0; i < endpoint.actions.length; i++) {
                let action = endpoint.actions[i];
                let currEdp = action.endpoint;
                let currMth = action.method;
                this.LogicWebServer.options.endpoints[j].actions[i].endpoint = null;
                if (this.connectableEndpoints.length == 0) {
                    this.connectableEndpoints = [];
                    endpoint.actions = [];
                    return;
                }
                if (currEdp != null && currMth != null) {
                    for (let e of this.connectableEndpoints) { // need this workaround to keep values in material select....
                        if (e.url == currEdp.url)
                            this.LogicWebServer.options.endpoints[j].actions[i].endpoint = e;
                    }
                    endpoint.actions[i].method = currMth;
                }
                else
                    endpoint.actions.splice(i, 1);
            }
        }
    }
    handleTypeChange() {
        let type = this.LogicWebServer.options.type;
        let endpoint;
        if (type == src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__["APIType"].REST) {
            endpoint = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_0__["Endpoint"]("api/posts", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].GET, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].POST, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].PUT, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].DELETE]);
        }
        else if (type == src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__["APIType"].GraphQL) {
            endpoint = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_0__["Endpoint"]("/graphql", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].GET, src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].POST]);
        }
        else if (type == src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__["APIType"].RPC) {
            endpoint = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_0__["Endpoint"]("api/getPosts", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].GET]);
        }
        else if (type == src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__["APIType"].gRPC) {
            endpoint = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_0__["Endpoint"]("api/getPosts", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].GET]);
            endpoint.grpcMode = src_models_enums_gRPCMode__WEBPACK_IMPORTED_MODULE_2__["gRPCMode"].Unary;
        }
        else if (type == src_models_enums_APIType__WEBPACK_IMPORTED_MODULE_1__["APIType"].WebSockets) {
            endpoint = new src_models_Endpoint__WEBPACK_IMPORTED_MODULE_0__["Endpoint"]("api/sendMessage", [src_models_enums_HTTPMethod__WEBPACK_IMPORTED_MODULE_3__["HTTPMethod"].GET]);
            endpoint.protocol = src_models_enums_Protocol__WEBPACK_IMPORTED_MODULE_4__["Protocol"].WebSockets;
        }
        this.LogicWebServer.options.endpoints = [endpoint];
    }
    getLogicComponent() {
        return this.LogicWebServer;
    }
    static getColor() {
        let c = new src_models_WebServer__WEBPACK_IMPORTED_MODULE_5__["WebServer"]();
        return c.color;
    }
}
WebserverComponent.ɵfac = function WebserverComponent_Factory(t) { return ɵWebserverComponent_BaseFactory(t || WebserverComponent); };
WebserverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: WebserverComponent, selectors: [["webserver"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 12, consts: [["anchorRef", ""], ["conn", ""], [1, "img-container", 3, "mousedown", "touchstart", "click"], [1, "img", "bg-webserver"], [2, "display", "none"], ["options", ""], [1, "options-type-container"], [1, "property-name"], [3, "Message"], ["appearance", "fill", 1, "action-endpoint"], [3, "ngModel", "selectionChange", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "Model", "Type", "HasStreamActions", "ConnectableEndpoints", "AfterChange"], [3, "value"]], template: function WebserverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "template", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousedown", function WebserverComponent_Template_div_mousedown_4_listener($event) { return ctx.handleMousedown($event); })("touchstart", function WebserverComponent_Template_div_touchstart_4_listener($event) { return ctx.handleMousedown($event); })("click", function WebserverComponent_Template_div_click_4_listener($event) { return ctx.handleClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Type: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "info-tooltip", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function WebserverComponent_Template_mat_select_selectionChange_15_listener() { ctx.handleTypeChange(); return ctx.afterChange(); })("ngModelChange", function WebserverComponent_Template_mat_select_ngModelChange_15_listener($event) { return ctx.LogicWebServer.options.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, WebserverComponent_mat_option_16_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "endpoint-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("left", ctx.LogicWebServer.options.X, "px")("top", ctx.LogicWebServer.options.Y, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("Message", "Changes the type of endpoints the Web Server has. This can change the behaviour of endpoints.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.LogicWebServer.options.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.APITypeKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("Model", ctx.LogicWebServer)("Type", ctx.LogicWebServer.options.type)("HasStreamActions", true)("ConnectableEndpoints", ctx.connectableEndpoints)("AfterChange", ctx.afterChange);
    } }, directives: [_info_tooltip_info_tooltip_component__WEBPACK_IMPORTED_MODULE_8__["InfoTooltipComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _Shared_endpoint_select_endpoint_select_component__WEBPACK_IMPORTED_MODULE_13__["EndpointSelectComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.options-endpoint-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: stretch;\n  height: 2em;\n}\n\n.options-endpoint-inputs[_ngcontent-%COMP%]   .endpoint-url[_ngcontent-%COMP%] {\n  height: 100%;\n  flex-grow: 1;\n  padding: 0;\n}\n\n.options-endpoint-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 0.1em;\n}\n\n.options-endpoint-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n}\n\n.options-endpoint-action[_ngcontent-%COMP%]   .action-endpoint[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.options-endpoint-action[_ngcontent-%COMP%]   .action-method[_ngcontent-%COMP%] {\n  flex-basis: 35%;\n  flex-shrink: 0;\n}\n\n.options-endpoint-action[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  flex-basis: 10%;\n  flex-shrink: 0;\n  align-self: center;\n}\n\n.options-endpoint-actions-container[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\n\n.options-endpoint-actions-container[_ngcontent-%COMP%]   .property-name[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n\n.options-type-container[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3dlYnNlcnZlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFBSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUVSOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FBR0o7O0FBRkk7RUFDSSxZQUFBO0FBSVI7O0FBRkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUlSOztBQUZJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUlSOztBQURBO0VBQ0ksZ0JBQUE7QUFJSjs7QUFISTtFQUNJLGdCQUFBO0FBS1I7O0FBRkE7RUFDSSxrQkFBQTtBQUtKIiwiZmlsZSI6IndlYnNlcnZlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm9wdGlvbnMtZW5kcG9pbnQtaW5wdXRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGhlaWdodDogMmVtO1xuICAgICYgLmVuZHBvaW50LXVybHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxufVxuLm9wdGlvbnMtZW5kcG9pbnQtYWN0aW9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBnYXA6IDAuMWVtO1xufVxuLm9wdGlvbnMtZW5kcG9pbnQtYWN0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICYgLmFjdGlvbi1lbmRwb2ludHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbiAgICAmIC5hY3Rpb24tbWV0aG9ke1xuICAgICAgICBmbGV4LWJhc2lzOiAzNSU7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIH1cbiAgICAmIC5idXR0b24taWNvbntcbiAgICAgICAgZmxleC1iYXNpczogMTAlO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cbn1cbi5vcHRpb25zLWVuZHBvaW50LWFjdGlvbnMtY29udGFpbmVye1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgJiAucHJvcGVydHktbmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG59XG4ub3B0aW9ucy10eXBlLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4iXX0= */"] });
const ɵWebserverComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetInheritedFactory"](WebserverComponent);


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map