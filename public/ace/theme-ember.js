/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

ace.define('ace/theme/ember', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-ember";
exports.cssText = ".ace_editor {\
color: rgb(68, 68, 68);\
font-family: Menlo, monospace;\
font-size: 12px;\
line-height: 16px;\
}\
.ace-ember .ace_gutter {\
border-right: 1px solid rgb(209, 209, 209);\
background: rgb(246, 246, 246);\
color: rgb(180, 180, 180);\
overflow : hidden;\
}\
.ace-ember .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-ember {\
background: url(\"data:image/gif;base64,R0lGODlhBAAEAIAAAP////f39yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgTWFjaW50b3NoIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyQTAwM0RCN0M0QjExRTE5MEIxQjVFQjc4MUIyMEMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyQTAwM0RDN0M0QjExRTE5MEIxQjVFQjc4MUIyMEMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDJBMDAzRDk3QzRCMTFFMTkwQjFCNUVCNzgxQjIwQzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDJBMDAzREE3QzRCMTFFMTkwQjFCNUVCNzgxQjIwQzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQAAAAAACwAAAAABAAEAAACBAyMp1kAOw==\");\
}\
.ace-ember .ace_cursor {\
border-left: 2px solid black;\
}\
.ace-ember .ace_overwrite-cursors .ace_cursor {\
border-left: 0px;\
border-bottom: 1px solid black;\
}\
.ace-ember .ace_invisible {\
color: rgb(191, 191, 191);\
}\
.ace-ember .ace_constant.ace_buildin {\
color: rgb(88, 72, 246);\
}\
.ace-ember .ace_constant.ace_language {\
color: rgb(88, 92, 246);\
}\
.ace-ember .ace_constant.ace_library {\
color: rgb(6, 150, 14);\
}\
.ace-ember .ace_invalid {\
background-color: rgb(153, 0, 0);\
color: white;\
}\
.ace-ember .ace_fold {\
}\
.ace-ember .ace_support.ace_function {\
color: rgb(206, 121, 31);\
}\
.ace-ember .ace_support.ace_constant {\
color: rgb(6, 150, 14);\
}\
.ace-ember .ace_support.ace_type,\
.ace-ember .ace_support.ace_class\
.ace-ember .ace_support.ace_other {\
color: rgb(206, 121, 31);\
}\
.ace-ember .ace_variable.ace_parameter {\
font-style:italic;\
color:#FD971F;\
}\
.ace-ember .ace_keyword.ace_operator {\
color: rgb(104, 118, 135);\
}\
.ace-ember .ace_comment,\
.ace-ember .ace_comment.ace_doc,\
.ace-ember .ace_comment.ace_doc.ace_tag {\
color: rgb(180, 180, 180);\
}\
.ace-ember .ace_constant.ace_numeric {\
color: rgb(0, 0, 205);\
}\
.ace-ember .ace_variable {\
color: rgb(31, 88, 206);\
}\
.ace-ember .ace_xml-pe {\
color: rgb(104, 104, 91);\
}\
.ace-ember .ace_entity.ace_name.ace_function {\
color: rgb(206, 121, 31);\
}\
.ace-ember .ace_markup.ace_heading {\
color: rgb(12, 7, 255);\
}\
.ace-ember .ace_markup.ace_list {\
color:rgb(185, 6, 144);\
}\
.ace-ember .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-ember .ace_marker-layer .ace_step {\
background: rgb(252, 255, 0);\
}\
.ace-ember .ace_marker-layer .ace_stack {\
background: rgb(164, 229, 101);\
}\
.ace-ember .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-ember .ace_marker-layer .ace_active-line {\
background: rgba(0, 0, 0, 0.07);\
}\
.ace-ember .ace_gutter-active-line {\
background-color : #dcdcdc;\
}\
.ace-ember .ace_marker-layer .ace_selected-word {\
background: rgb(250, 250, 255);\
border: 1px solid rgb(200, 200, 250);\
}\
.ace-ember .ace_storage,\
.ace-ember .ace_keyword,\
.ace-ember .ace_meta.ace_tag {\
color: rgb(206, 121, 31);\
}\
.ace-ember .ace_string.ace_regex {\
color: rgb(255, 0, 0)\
}\
.ace-ember .ace_string {\
color: rgb(21, 60, 140);\
}\
.ace-ember .ace_entity.ace_other.ace_attribute-name {\
color: #994409;\
}\
.ace-ember .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
