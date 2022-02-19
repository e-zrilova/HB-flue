
/*
*   Вынесла отдельно что бы исправить работу метода  addField, который искал поля через document.querySelector,  исправила на this.form.querySelector
*   pr https://github.com/horprogs/Just-validate/pull/44
*/

var _ = Object.defineProperty; var L = Object.getOwnPropertySymbols; var X = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable; var w = (p, b, g) => b in p ? _(p, b, { enumerable: !0, configurable: !0, writable: !0, value: g }) : p[b] = g, E = (p, b) => { for (var g in b || (b = {})) X.call(b, g) && w(p, g, b[g]); if (L) for (var g of L(b)) Z.call(b, g) && w(p, g, b[g]); return p }; var u = (p, b, g) => (w(p, typeof b != "symbol" ? b + "" : b, g), g); (function (p, b) { typeof exports == "object" && typeof module != "undefined" ? module.exports = b() : typeof define == "function" && define.amd ? define(b) : (p = typeof globalThis != "undefined" ? globalThis : p || self, p.JustValidate = b()) })(this, function () { "use strict"; const p = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, b = /^[0-9]+$/, g = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, x = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, I = n => { let e = n; return typeof n == "string" && (e = n.trim()), !e }, T = n => p.test(n), $ = (n, e) => n.length > e, M = (n, e) => n.length < e, V = n => b.test(n), P = n => g.test(n), j = n => x.test(n), A = (n, e) => n > e, N = (n, e) => n < e; var d; (function (n) { n.Required = "required", n.Email = "email", n.MinLength = "minLength", n.MaxLength = "maxLength", n.Password = "password", n.Number = "number", n.MaxNumber = "maxNumber", n.MinNumber = "minNumber", n.StrongPassword = "strongPassword", n.CustomRegexp = "customRegexp", n.MinFilesCount = "minFilesCount", n.MaxFilesCount = "maxFilesCount", n.Files = "files" })(d || (d = {})); var y; (function (n) { n.Required = "required" })(y || (y = {})); var S; (function (n) { n.Label = "label", n.LabelArrow = "labelArrow" })(S || (S = {})); const G = (n, e) => { switch (n) { case d.Required: return "The field is required"; case d.Email: return "Email has invalid format"; case d.MaxLength: return "The field must contain a maximum of :value characters".replace(":value", String(e)); case d.MinLength: return "The field must contain a minimum of :value characters".replace(":value", String(e)); case d.Password: return "Password must contain minimum eight characters, at least one letter and one number"; case d.Number: return "Value should be a number"; case d.StrongPassword: return "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"; case d.MaxNumber: return "Number should be less or equal than :value".replace(":value", String(e)); case d.MinNumber: return "Number should be more or equal than :value".replace(":value", String(e)); case d.MinFilesCount: return "Files count should be more or equal than :value".replace(":value", String(e)); case d.MaxFilesCount: return "Files count should be less or equal than :value".replace(":value", String(e)); case d.Files: return "Uploaded files have one or several invalid properties (extension/size/type etc)"; default: return "Value is incorrect" } }, q = n => { switch (n) { case y.Required: return "The field is required"; default: return "Group is incorrect" } }, F = n => !!n && typeof n.then == "function", z = ".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}", C = 5, k = { errorFieldStyle: { color: "#b81111", border: "1px solid #B81111" }, errorFieldCssClass: "just-validate-error-field", successFieldCssClass: "just-validate-success-field", errorLabelStyle: { color: "#b81111" }, errorLabelCssClass: "just-validate-error-label", successLabelCssClass: "just-validate-success-label", focusInvalidField: !0, lockForm: !0, testingMode: !1 }; class O { constructor(e, t, s) { u(this, "form", null); u(this, "fields", {}); u(this, "groupFields", {}); u(this, "errors", {}); u(this, "isValid", !1); u(this, "isSubmitted", !1); u(this, "globalConfig", k); u(this, "errorLabels", []); u(this, "successLabels", []); u(this, "eventListeners", []); u(this, "dictLocale", []); u(this, "currentLocale"); u(this, "customStyleTags", {}); u(this, "onSuccessCallback"); u(this, "onFailCallback"); u(this, "tooltips", []); u(this, "lastScrollPosition"); u(this, "isScrollTick"); u(this, "refreshAllTooltips", () => { this.tooltips.forEach(e => { e.refresh() }) }); u(this, "handleDocumentScroll", () => { this.lastScrollPosition = window.scrollY, this.isScrollTick || (window.requestAnimationFrame(() => { this.refreshAllTooltips(), this.isScrollTick = !1 }), this.isScrollTick = !0) }); u(this, "formSubmitHandler", e => { e.preventDefault(), this.isSubmitted = !0, this.globalConfig.lockForm && this.lockForm(), this.validate().then(() => { var t, s; this.isValid ? (t = this.onSuccessCallback) == null || t.call(this, e) : (s = this.onFailCallback) == null || s.call(this, this.fields), this.globalConfig.lockForm && this.unlockForm() }) }); u(this, "handleFieldChange", e => { let t, s; for (const o in this.fields) { const r = this.fields[o]; if (r.elem === e) { t = r, s = o; break } } !t || !s || this.validateField(s, t, !0) }); u(this, "handleGroupChange", e => { let t, s; for (const o in this.groupFields) { const r = this.groupFields[o]; if (r.elems.find(a => a === e)) { t = r, s = o; break } } !t || !s || this.validateGroup(s, t) }); u(this, "handlerChange", e => { !e.target || (this.handleFieldChange(e.target), this.handleGroupChange(e.target), this.renderErrors()) }); this.initialize(e, t, s) } initialize(e, t, s) { if (this.form = null, this.errors = {}, this.isValid = !1, this.isSubmitted = !1, this.globalConfig = k, this.errorLabels = [], this.eventListeners = [], this.customStyleTags = {}, this.tooltips = [], typeof e == "string") { const o = document.querySelector(e); if (!o) throw Error(`Form with ${e} selector not found! Please check the form selector`); this.setForm(o) } else if (e instanceof HTMLFormElement) this.setForm(e); else throw Error("Form selector is not valid. Please specify a string selector or a DOM element."); if (this.globalConfig = E(E({}, k), t), s && (this.dictLocale = s), this.isTooltip()) { const o = document.createElement("style"); o.textContent = z, this.customStyleTags[S.Label] = document.head.appendChild(o), this.addListener("scroll", document, this.handleDocumentScroll) } } getLocalisedString(e) { var s; return !this.currentLocale || !this.dictLocale.length ? e : ((s = this.dictLocale.find(o => o.key === e)) == null ? void 0 : s.dict[this.currentLocale]) || e } getFieldErrorMessage(e, t) { const s = typeof e.errorMessage == "function" ? e.errorMessage(this.getElemValue(t), this.fields) : e.errorMessage; return this.getLocalisedString(s) || G(e.rule, e.value) } getFieldSuccessMessage(e, t) { const s = typeof e == "function" ? e(this.getElemValue(t), this.fields) : e; return this.getLocalisedString(s) } getGroupErrorMessage(e) { return this.getLocalisedString(e.errorMessage) || q(e.rule) } getGroupSuccessMessage(e) { return this.getLocalisedString(e.successMessage) } setFieldInvalid(e, t) { this.fields[e].isValid = !1, this.fields[e].errorMessage = this.getFieldErrorMessage(t, this.fields[e].elem) } setFieldValid(e, t) { this.fields[e].isValid = !0, t !== void 0 && (this.fields[e].successMessage = this.getFieldSuccessMessage(t, this.fields[e].elem)) } setGroupInvalid(e, t) { this.groupFields[e].isValid = !1, this.groupFields[e].errorMessage = this.getGroupErrorMessage(t) } setGroupValid(e, t) { this.groupFields[e].isValid = !0, this.groupFields[e].successMessage = this.getGroupSuccessMessage(t) } getElemValue(e) { switch (e.type) { case "checkbox": return e.checked; case "file": return e.files; default: return e.value } } validateGroupRule(e, t, s, o) { switch (o.rule) { case y.Required: (t === "radio" || t === "checkbox") && (s.every(r => !r.checked) ? this.setGroupInvalid(e, o) : this.setGroupValid(e, o)) } } validateFieldRule(e, t, s, o = !1) { const r = s.value, a = this.getElemValue(t); if (s.plugin) { s.plugin(a, this.fields) || this.setFieldInvalid(e, s); return } switch (s.rule) { case d.Required: { I(a) && this.setFieldInvalid(e, s); break } case d.Email: { if (typeof a != "string") { this.setFieldInvalid(e, s); break } T(a) || this.setFieldInvalid(e, s); break } case d.MaxLength: { if (r === void 0) { console.error(`Value for ${s.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, s); break } if (typeof r != "number") { console.error(`Value for ${s.rule} rule for [${e}] should be a number. The field will be always invalid.`), this.setFieldInvalid(e, s); break } if (typeof a != "string") { this.setFieldInvalid(e, s); break } if (a === "") break; $(a, r) && this.setFieldInvalid(e, s); break } case d.MinLength: { if (r === void 0) { console.error(`Value for ${s.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, s); break } if (typeof r != "number") { console.error(`Value for ${s.rule} rule for [${e}] should be a number. The field will be always invalid.`), this.setFieldInvalid(e, s); break } if (typeof a != "string") { this.setFieldInvalid(e, s); break } if (a === "") break; M(a, r) && this.setFieldInvalid(e, s); break } case d.Password: { if (typeof a != "string") { this.setFieldInvalid(e, s); break } if (a === "") break; P(a) || this.setFieldInvalid(e, s); break } case d.StrongPassword: { if (typeof a != "string") { this.setFieldInvalid(e, s); break } if (a === "") break; j(a) || this.setFieldInvalid(e, s); break } case d.Number: { if (typeof a != "string") { this.setFieldInvalid(e, s); break } if (a === "") break; V(a) || this.setFieldInvalid(e, s); break } case d.MaxNumber: { if (r === void 0) { console.error(`Value for ${s.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, s); break } if (typeof r != "number") { console.error(`Value for ${s.rule} rule for [${e}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(e, s); break } if (typeof a != "string") { this.setFieldInvalid(e, s); break } if (a === "") break; const l = +a; (Number.isNaN(l) || A(l, r)) && this.setFieldInvalid(e, s); break } case d.MinNumber: { if (r === void 0) { console.error(`Value for ${s.rule} rule for [${e}] field is not defined. The field will be always invalid.`), this.setFieldInvalid(e, s); break } if (typeof r != "number") { console.error(`Value for ${s.rule} rule for [${e}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(e, s); break } if (typeof a != "string") { this.setFieldInvalid(e, s); break } if (a === "") break; const l = +a; (Number.isNaN(l) || N(l, r)) && this.setFieldInvalid(e, s); break } case d.CustomRegexp: { if (r === void 0) { console.error(`Value for ${s.rule} rule for [${e}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(e, s); return } let l; try { l = new RegExp(r) } catch { console.error(`Value for ${s.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`), this.setFieldInvalid(e, s); break } const i = String(a); i !== "" && !l.test(i) && this.setFieldInvalid(e, s); break } case d.MinFilesCount: { if (r === void 0) { console.error(`Value for ${s.rule} rule for [${e}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(e, s); break } if (typeof r != "number") { console.error(`Value for ${s.rule} rule for [${e}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(e, s); break } if (Number.isFinite(a == null ? void 0 : a.length) && a.length < r) { this.setFieldInvalid(e, s); break } break } case d.MaxFilesCount: { if (r === void 0) { console.error(`Value for ${s.rule} rule for [${e}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(e, s); break } if (typeof r != "number") { console.error(`Value for ${s.rule} rule for [${e}] field should be a number. The field will be always invalid.`), this.setFieldInvalid(e, s); break } if (Number.isFinite(a == null ? void 0 : a.length) && a.length > r) { this.setFieldInvalid(e, s); break } break } case d.Files: { if (r === void 0) { console.error(`Value for ${s.rule} rule for [${e}] field is not defined. This field will be always invalid.`), this.setFieldInvalid(e, s); return } if (typeof r != "object") { console.error(`Value for ${s.rule} rule for [${e}] field should be an object. This field will be always invalid.`), this.setFieldInvalid(e, s); return } const l = r.files; if (typeof l != "object") { console.error(`Value for ${s.rule} rule for [${e}] field should be an object with files array. This field will be always invalid.`), this.setFieldInvalid(e, s); return } const i = (c, h) => { const f = Number.isFinite(h.minSize) && c.size < h.minSize, m = Number.isFinite(h.maxSize) && c.size > h.maxSize, v = Array.isArray(h.names) && !h.names.includes(c.name), D = Array.isArray(h.extensions) && !h.extensions.includes(c.name.split(".")[c.name.split(".").length - 1]), H = Array.isArray(h.types) && !h.types.includes(c.type); return f || m || v || D || H }; if (typeof a == "object" && a !== null) for (let c = 0, h = a.length; c < h; ++c) { const f = a.item(c); if (!f) { this.setFieldInvalid(e, s); break } if (i(f, l)) { this.setFieldInvalid(e, s); break } } break } default: { if (typeof s.validator != "function") { console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`), this.setFieldInvalid(e, s); return } const l = s.validator(a, this.fields); if (typeof l != "boolean" && typeof l != "function" && console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`), typeof l == "function") if (o) this.fields[e].asyncCheckPending = !0; else { this.fields[e].asyncCheckPending = !1; const i = l(); if (!F(i)) { console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`), this.setFieldInvalid(e, s); return } return i.then(c => { c || this.setFieldInvalid(e, s) }).catch(() => { this.setFieldInvalid(e, s) }) } l || this.setFieldInvalid(e, s) } } } validateField(e, t, s = !1) { var r; t.isValid = !0; const o = []; return [...t.rules].reverse().forEach(a => { const l = this.validateFieldRule(e, t.elem, a, s); F(l) && o.push(l) }), t.isValid && this.setFieldValid(e, (r = t.config) == null ? void 0 : r.successMessage), Promise.allSettled(o) } validateGroup(e, t) { const s = []; return [...t.rules].reverse().forEach(o => { const r = this.validateGroupRule(e, t.type, t.elems, o); F(r) && s.push(r) }), Promise.allSettled(s) } focusInvalidField() { for (const e in this.fields) { const t = this.fields[e]; if (!t.isValid) { setTimeout(() => t.elem.focus(), 0); break } } } afterSubmitValidation() { this.renderErrors(), this.globalConfig.focusInvalidField && this.focusInvalidField() } validate() { return new Promise(e => { const t = []; Object.keys(this.fields).forEach(s => { const o = this.fields[s], r = this.validateField(s, o); F(r) && t.push(r) }), Object.keys(this.groupFields).forEach(s => { const o = this.groupFields[s], r = this.validateGroup(s, o); F(r) && t.push(r) }), t.length ? Promise.allSettled(t).then(() => { this.afterSubmitValidation(), e(!0) }) : (this.afterSubmitValidation(), e(!1)) }) } setForm(e) { this.form = e, this.form.setAttribute("novalidate", "novalidate"), this.removeListener("submit", this.form, this.formSubmitHandler), this.addListener("submit", this.form, this.formSubmitHandler) } addListener(e, t, s) { t.addEventListener(e, s), this.eventListeners.push({ type: e, elem: t, func: s }) } removeListener(e, t, s) { t.removeEventListener(e, s) } addField(e, t, s) { if (typeof e != "string") throw Error("Field selector is not valid. Please specify a string selector."); const o = this.form.querySelector(e); if (!o) throw Error(`Field with ${e} selector not found! Please check the field selector.`); if (!Array.isArray(t) || !t.length) throw Error(`Rules argument for the field [${e}] should be an array and should contain at least 1 element.`); return t.forEach(r => { if (!("rule" in r || "validator" in r || "plugin" in r)) throw Error(`Rules argument for the field [${e}] must contain at least one rule or validator property.`); if (!r.validator && !r.plugin && (!r.rule || !Object.values(d).includes(r.rule))) throw Error(`Rule should be one of these types: ${Object.values(d).join(", ")}. Provided value: ${r.rule}`) }), this.fields[e] = { elem: o, rules: t, isValid: void 0, config: s }, this.setListeners(o), this.isSubmitted && this.validate(), this } removeField(e) { if (typeof e != "string") throw Error("Field selector is not valid. Please specify a string selector."); return this.fields[e] ? (this.destroy(), delete this.fields[e], this.refresh(), this) : (console.error("Field not found. Check the field selector."), this) } addRequiredGroup(e, t, s, o) { if (typeof e != "string") throw Error("Group selector is not valid. Please specify a string selector."); const r = document.querySelector(e); if (!r) throw Error(`Group with ${e} selector not found! Please check the group selector.`); const a = r.querySelectorAll("input"), l = Array.from(a).every(c => c.type === "radio"), i = Array.from(a).every(c => c.type === "checkbox"); if (!l && !i) throw Error("Group should contain either or checkboxes or radio buttons"); return this.groupFields[e] = { rules: [{ rule: y.Required, errorMessage: t, successMessage: o }], groupElem: r, elems: Array.from(a), type: l ? "radio" : "checkbox", isDirty: !1, isValid: void 0, config: s }, a.forEach(c => { this.setListeners(c) }), this } getListenerType(e) { switch (e) { case "checkbox": case "select-one": case "file": case "radio": return "change"; case "date": return "input"; default: return "keyup" } } setListeners(e) { const t = this.getListenerType(e.type); this.removeListener(t, e, this.handlerChange), this.addListener(t, e, this.handlerChange) } clearErrors() { var e, t, s, o, r, a; this.errorLabels.forEach(l => l.remove()), this.successLabels.forEach(l => l.remove()); for (const l in this.fields) { const i = this.fields[l], c = ((e = i.config) == null ? void 0 : e.errorFieldStyle) || this.globalConfig.errorFieldStyle; Object.keys(c).forEach(f => { i.elem.style[f] = "" }); const h = ((t = i.config) == null ? void 0 : t.successFieldStyle) || this.globalConfig.successFieldStyle || {}; Object.keys(h).forEach(f => { i.elem.style[f] = "" }), i.elem.classList.remove(((s = i.config) == null ? void 0 : s.errorFieldCssClass) || this.globalConfig.errorFieldCssClass, ((o = i.config) == null ? void 0 : o.successFieldCssClass) || this.globalConfig.successFieldCssClass) } for (const l in this.groupFields) { const i = this.groupFields[l], c = ((r = i.config) == null ? void 0 : r.errorFieldStyle) || this.globalConfig.errorFieldStyle; Object.keys(c).forEach(f => { i.elems.forEach(m => { var v; m.style[f] = "", m.classList.remove(((v = i.config) == null ? void 0 : v.errorFieldCssClass) || this.globalConfig.errorFieldCssClass) }) }); const h = ((a = i.config) == null ? void 0 : a.successFieldStyle) || this.globalConfig.successFieldStyle || {}; Object.keys(h).forEach(f => { i.elems.forEach(m => { var v; m.style[f] = "", m.classList.remove(((v = i.config) == null ? void 0 : v.successFieldCssClass) || this.globalConfig.successFieldCssClass) }) }) } this.tooltips = [] } isTooltip() { return !!this.globalConfig.tooltip } lockForm() { const e = this.form.querySelectorAll("input, textarea, button, select"); for (let t = 0, s = e.length; t < s; ++t)e[t].setAttribute("disabled", "disabled"), e[t].style.pointerEvents = "none", e[t].style.webkitFilter = "grayscale(100%)", e[t].style.filter = "grayscale(100%)" } unlockForm() { const e = this.form.querySelectorAll("input, textarea, button, select"); for (let t = 0, s = e.length; t < s; ++t)e[t].removeAttribute("disabled"), e[t].style.pointerEvents = "", e[t].style.webkitFilter = "", e[t].style.filter = "" } renderTooltip(e, t, s) { var f; const { top: o, left: r, width: a, height: l } = e.getBoundingClientRect(), i = t.getBoundingClientRect(), c = s || ((f = this.globalConfig.tooltip) == null ? void 0 : f.position); switch (c) { case "left": { t.style.top = `${o + l / 2 - i.height / 2}px`, t.style.left = `${r - i.width - C}px`; break } case "top": { t.style.top = `${o - i.height - C}px`, t.style.left = `${r + a / 2 - i.width / 2}px`; break } case "right": { t.style.top = `${o + l / 2 - i.height / 2}px`, t.style.left = `${r + a + C}px`; break } case "bottom": { t.style.top = `${o + l + C}px`, t.style.left = `${r + a / 2 - i.width / 2}px`; break } }return t.dataset.direction = c, { refresh: () => { this.renderTooltip(e, t, s) } } } createErrorLabelElem(e, t, s) { const o = document.createElement("div"); o.innerHTML = t; const r = this.isTooltip() ? s == null ? void 0 : s.errorLabelStyle : (s == null ? void 0 : s.errorLabelStyle) || this.globalConfig.errorLabelStyle; return Object.assign(o.style, r), o.classList.add((s == null ? void 0 : s.errorLabelCssClass) || this.globalConfig.errorLabelCssClass, "just-validate-error-label"), this.isTooltip() && (o.dataset.tooltip = "true"), this.globalConfig.testingMode && (o.dataset.testId = `error-label-${e}`), this.errorLabels.push(o), o } createSuccessLabelElem(e, t, s) { if (t === void 0) return null; const o = document.createElement("div"); o.innerHTML = t; const r = (s == null ? void 0 : s.successLabelStyle) || this.globalConfig.successLabelStyle; return Object.assign(o.style, r), o.classList.add((s == null ? void 0 : s.successLabelCssClass) || this.globalConfig.successLabelCssClass, "just-validate-success-label"), this.globalConfig.testingMode && (o.dataset.testId = `success-label-${e}`), this.successLabels.push(o), o } renderFieldLabel(e, t) { var s, o, r, a, l, i, c; if (e.type === "checkbox" || e.type === "radio") { const h = document.querySelector(`label[for="${e.getAttribute("id")}"]`); ((o = (s = e.parentElement) == null ? void 0 : s.tagName) == null ? void 0 : o.toLowerCase()) === "label" ? (a = (r = e.parentElement) == null ? void 0 : r.parentElement) == null || a.appendChild(t) : h ? (l = h.parentElement) == null || l.appendChild(t) : (i = e.parentElement) == null || i.appendChild(t) } else (c = e.parentElement) == null || c.appendChild(t) } renderErrors() { var e, t, s, o, r, a; if (!!this.isSubmitted) { this.clearErrors(), this.isValid = !0; for (const l in this.groupFields) { const i = this.groupFields[l]; if (i.isValid) { i.elems.forEach(f => { var m, v; Object.assign(f.style, ((m = i.config) == null ? void 0 : m.successFieldStyle) || this.globalConfig.successFieldStyle), f.classList.add(((v = i.config) == null ? void 0 : v.successFieldCssClass) || this.globalConfig.successFieldCssClass) }); const h = this.createSuccessLabelElem(l, i.successMessage, i.config); h && i.groupElem.appendChild(h); continue } this.isValid = !1, i.elems.forEach(h => { var f, m; Object.assign(h.style, ((f = i.config) == null ? void 0 : f.errorFieldStyle) || this.globalConfig.errorFieldStyle), h.classList.add(((m = i.config) == null ? void 0 : m.errorFieldCssClass) || this.globalConfig.errorFieldCssClass) }); const c = this.createErrorLabelElem(l, i.errorMessage, i.config); i.groupElem.appendChild(c), this.isTooltip() && this.tooltips.push(this.renderTooltip(i.groupElem, c, (t = (e = i.config) == null ? void 0 : e.tooltip) == null ? void 0 : t.position)) } for (const l in this.fields) { const i = this.fields[l]; if (i.isValid) { if (!i.asyncCheckPending) { const h = this.createSuccessLabelElem(l, i.successMessage, i.config); h && this.renderFieldLabel(i.elem, h), i.elem.classList.add(((s = i.config) == null ? void 0 : s.successFieldCssClass) || this.globalConfig.successFieldCssClass) } continue } this.isValid = !1, i.elem.classList.add(((o = i.config) == null ? void 0 : o.errorFieldCssClass) || this.globalConfig.errorFieldCssClass); const c = this.createErrorLabelElem(l, i.errorMessage, i.config); this.renderFieldLabel(i.elem, c), this.isTooltip() && this.tooltips.push(this.renderTooltip(i.elem, c, (a = (r = i.config) == null ? void 0 : r.tooltip) == null ? void 0 : a.position)) } } } destroy() { this.eventListeners.forEach(e => { this.removeListener(e.type, e.elem, e.func) }), Object.keys(this.customStyleTags).forEach(e => { this.customStyleTags[e].remove() }), this.clearErrors(), this.globalConfig.lockForm && this.unlockForm() } refresh() { this.destroy(), this.form ? (this.initialize(this.form, this.globalConfig), Object.keys(this.fields).forEach(e => { this.addField(e, [...this.fields[e].rules], this.fields[e].config) })) : console.error("Cannot initialize the library! Form is not defined") } setCurrentLocale(e) { if (typeof e != "string" && e !== void 0) { console.error("Current locale should be a string"); return } this.currentLocale = e, this.isSubmitted && this.validate() } onSuccess(e) { return this.onSuccessCallback = e, this } onFail(e) { return this.onFailCallback = e, this } } return O });
